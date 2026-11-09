/* ==============================================================
   WRITING PRACTICE ENGINE (LUYỆN VIẾT CHỮ HÁN & THỨ TỰ NÉT)
   - Đầy đủ từ vựng HSK 1 - 6 (150 -> 5000 từ)
   - Hiển thị trọn vẹn tất cả chữ trong từ (vd: 北京, 出租车, ...)
   - Cân đối hoàn hảo cả máy tính lẫn điện thoại
   - Phát âm chuẩn native Mandarin kèm điều chỉnh tốc độ
   - Hướng dẫn chi tiết 214 bộ thủ và từng nét một
   ============================================================== */

(() => {
  const WP = window.GH_Writing = {
    initialized: false,
    currentLevel: "1",
    wordList: [],
    currentWordIndex: 0,
    currentWordItem: null,
    currentChars: [],
    activeCharIndex: 0,
    writers: [],
    charDataList: [],
    mode: "guide", // 'guide' | 'practice' | 'radicals'
    activeStrokeIdx: 0,
    isAnimating: false,
    quizCompletedChars: new Set()
  };

  // Memory & LocalStorage Cache for HanziWriter character data
  const charDataCache = {};

  function customCharDataLoader(char, onComplete, onError) {
    if (charDataCache[char]) {
      onComplete(charDataCache[char]);
      return;
    }
    const localKey = `hanzi_char_${char}`;
    try {
      const saved = localStorage.getItem(localKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        charDataCache[char] = parsed;
        onComplete(parsed);
        return;
      }
    } catch (e) {}

    // Reliable fast jsDelivr CDN
    fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/${encodeURIComponent(char)}.json`)
      .then(res => {
        if (!res.ok) throw new Error('Character data not found: ' + char);
        return res.json();
      })
      .then(data => {
        charDataCache[char] = data;
        try { localStorage.setItem(localKey, JSON.stringify(data)); } catch (e) {}
        onComplete(data);
      })
      .catch(err => {
        console.warn('HanziWriter load error for ' + char, err);
        if (typeof onError === 'function') onError(err);
      });
  }

  // Unified Audio Playback using GH_Audio
  function playAudio(text, buttonEl) {
    if (!text) return;
    if (buttonEl) buttonEl.classList.add('speaking');
    const onEnd = () => {
      if (buttonEl) buttonEl.classList.remove('speaking');
    };
    if (window.GH_Audio && typeof window.GH_Audio.play === 'function') {
      window.GH_Audio.play(text, { onEnd, onError: onEnd });
    } else if (typeof window.speakWord === 'function') {
      window.speakWord(text);
      setTimeout(onEnd, 1200);
    }
  }

  // Initialize Writing Mode
  function init() {
    if (WP.initialized) return;
    WP.initialized = true;

    const container = document.getElementById('writing-mode');
    if (!container) return;

    renderStructure(container);
    bindEvents();

    // Listen to global HSK change
    window.addEventListener('gh-hsk-changed', (e) => {
      const lvl = String(e.detail?.level || '1');
      if (WP.currentLevel !== lvl) {
        WP.currentLevel = lvl;
        const sel = document.getElementById('wp-hsk-select');
        if (sel) sel.value = lvl;
        loadLevelWords(lvl);
      }
    });

    // Listen to HSK6 ready
    window.addEventListener('hsk6ready', () => {
      if (WP.currentLevel === '6') {
        loadLevelWords('6');
      }
    });

    // Listen to speech speed changes
    window.addEventListener('gh-speech-speed-changed', () => {
      // Speed updated, next playAudio will use new speed
    });

    // Window resize handler: re-render boxes if width category changed
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      const wasMobile = lastWidth <= 480;
      const isMobile = w <= 480;
      if (wasMobile !== isMobile && WP.currentWordItem) {
        lastWidth = w;
        renderCurrentWord();
      }
    });

    // Initial load
    WP.currentLevel = String(window.currentLevel || document.getElementById('hsk-level')?.value || '1');
    const sel = document.getElementById('wp-hsk-select');
    if (sel) sel.value = WP.currentLevel;
    loadLevelWords(WP.currentLevel);
  }

  // Render Static DOM Structure
  function renderStructure(container) {
    container.innerHTML = `
      <div class="writing-container">
        <!-- Header -->
        <div class="writing-head">
          <div class="writing-head-titles">
            <h2><span>✍️</span> Luyện Viết Chữ Hán & Thứ Tự Nét</h2>
            <p>Viết trọn vẹn từng chữ trong từ theo ô ly chuẩn, phân tích chi tiết bộ thủ và thứ tự từng nét một.</p>
          </div>
          <div class="writing-top-controls">
            <!-- Dedicated HSK 1 - 6 Level Selector in Writing Bar -->
            <div class="writing-hsk-picker">
              <span class="writing-hsk-label">Cấp độ:</span>
              <select id="wp-hsk-select" class="writing-hsk-select" title="Chọn cấp độ HSK">
                <option value="1">HSK 1 (150 từ)</option>
                <option value="2">HSK 2 (150 từ)</option>
                <option value="3">HSK 3 (300 từ)</option>
                <option value="4">HSK 4 (600 từ)</option>
                <option value="5">HSK 5 (1300 từ)</option>
                <option value="6">HSK 6 (2500 từ)</option>
              </select>
            </div>
            <!-- Word Search Bar -->
            <div class="writing-search-bar">
              <input type="text" id="writing-search-input" class="writing-search-input" placeholder="Nhập từ cần viết..." maxlength="12" autocomplete="off">
              <button type="button" id="writing-search-btn" class="writing-btn-sm">🔍 Xem nét</button>
            </div>
          </div>
        </div>

        <!-- Word Info & Navigation -->
        <div class="writing-word-bar">
          <div class="writing-word-info">
            <span class="writing-cur-word" id="wp-cur-word">--</span>
            <span class="writing-cur-pinyin" id="wp-cur-pinyin">--</span>
            <span class="writing-cur-meaning" id="wp-cur-meaning">--</span>
            <button type="button" id="wp-speak-btn" class="writing-speak-btn" title="Phát âm từ này">🔊</button>
          </div>

          <div class="writing-nav-controls">
            <button type="button" id="wp-prev-word" class="writing-nav-btn" title="Từ trước">◀ Trước</button>
            <span id="wp-word-counter">1 / 150</span>
            <button type="button" id="wp-next-word" class="writing-nav-btn" title="Từ tiếp">Sau ▶</button>
            <button type="button" id="wp-random-word" class="writing-nav-btn" title="Chọn ngẫu nhiên">🎲 Ngẫu nhiên</button>
          </div>
        </div>

        <!-- Mode Switcher Tabs -->
        <div class="writing-mode-tabs">
          <button type="button" class="writing-mode-tab active" data-mode="guide">
            🎬 Xem Hướng Dẫn Nét
          </button>
          <button type="button" class="writing-mode-tab" data-mode="practice">
            ✍️ Tự Luyện Viết (Có Chấm Nét)
          </button>
          <button type="button" class="writing-mode-tab" data-mode="radicals">
            📚 Bảng 214 Bộ Thủ Khang Hy
          </button>
        </div>

        <!-- Main Workspace (Left: Multi-Canvas Card | Right: Radicals & Stroke Order) -->
        <div class="writing-workspace" id="wp-workspace">
          <!-- Multi-Canvas Card -->
          <div class="writing-canvas-card">
            <!-- Multi-character grid where ALL characters in the word are displayed together -->
            <div class="mizige-multi-grid" id="wp-multi-grid"></div>

            <!-- Quiz Status Badge -->
            <div class="writing-quiz-status" id="wp-quiz-status">
              Sẵn sàng luyện viết
            </div>

            <!-- Canvas Action Controls -->
            <div class="writing-canvas-actions" id="wp-canvas-actions">
              <button type="button" id="wp-btn-animate" class="writing-action-btn primary">
                ▶ Xem viết chữ
              </button>
              <button type="button" id="wp-btn-replay" class="writing-action-btn">
                🔁 Viết lại
              </button>
              <button type="button" id="wp-btn-prev-stroke" class="writing-action-btn">
                ⏮ Nét trước
              </button>
              <button type="button" id="wp-btn-next-stroke" class="writing-action-btn">
                ⏭ Nét sau
              </button>
              <button type="button" id="wp-btn-hint" class="writing-action-btn success" style="display:none;">
                💡 Gợi ý nét
              </button>
            </div>
          </div>

          <!-- Details Card (Right Side) -->
          <div class="writing-details-card">
            <!-- Character Switcher Pills (for multi-character words) -->
            <div class="writing-char-switcher" id="wp-char-switcher" style="display:none;"></div>

            <!-- Vocabulary Illustration Image Card (100% of words) -->
            <div class="writing-image-box" id="wp-image-box">
              <div class="writing-box-title">
                🖼️ Hình Ảnh Minh Họa Từ Vựng
              </div>
              <div class="writing-img-container">
                <img id="wp-vocab-img" src="" alt="Minh họa" class="writing-vocab-img" loading="lazy" />
                <div class="writing-img-caption" id="wp-vocab-caption">--</div>
              </div>
            </div>

            <!-- Radical Card -->
            <div class="writing-radical-box">
              <div class="writing-box-title">
                🌿 Hướng Dẫn Bộ Thủ (Radical)
              </div>
              <div class="writing-radical-content">
                <div class="writing-radical-badge" id="wp-rad-badge">--</div>
                <div class="writing-radical-desc">
                  <div class="writing-radical-name" id="wp-rad-name">Bộ Thủ: Đang tải...</div>
                  <div class="writing-radical-meaning" id="wp-rad-meaning">
                    Ý nghĩa và đặc điểm của bộ thủ trong chữ Hán này.
                  </div>
                </div>
              </div>
            </div>

            <!-- Stroke Details Card -->
            <div class="writing-strokes-box">
              <div class="writing-box-title">
                🖌️ Thứ Tự Từng Nét Một (Stroke Order)
              </div>
              <div class="writing-stroke-stepper">
                <span class="writing-stroke-count" id="wp-stroke-total">Tổng số: 0 nét</span>
                <span style="font-size:0.85rem;color:#64748b;">Bấm vào từng nét dưới đây để xem chi tiết:</span>
              </div>
              <div class="writing-stroke-list" id="wp-stroke-list">
                <!-- Dynamically populated stroke chips -->
              </div>
            </div>
          </div>
        </div>

        <!-- 214 Radicals View (Tab 3) -->
        <div class="writing-radicals-view" id="wp-radicals-view">
          <div class="writing-radicals-filter">
            <input type="text" id="wp-rad-search" class="writing-search-input" placeholder="Tìm bộ thủ hoặc âm Hán Việt..." style="width: 250px;">
            <span style="font-size:0.9rem;color:#64748b;align-self:center;">Nhấp vào một bộ thủ để xem các chữ mẫu và luyện viết:</span>
          </div>
          <div class="writing-radicals-grid" id="wp-radicals-grid">
            <!-- 214 radicals dynamically populated -->
          </div>
        </div>

      </div>
    `;
  }

  // Load words for current HSK Level (1 -> 6)
  function loadLevelWords(lvl) {
    WP.currentLevel = String(lvl || '1');
    const data = window.hskData?.[WP.currentLevel] || [];
    WP.wordList = Array.isArray(data) && data.length ? data : [
      { word: "我", pinyin: "wǒ", meaning: "tôi, tớ, mình" },
      { word: "你", pinyin: "nǐ", meaning: "bạn, anh, chị" },
      { word: "好", pinyin: "hǎo", meaning: "tốt, khỏe, hay" },
      { word: "北京", pinyin: "běi jīng", meaning: "Bắc Kinh" },
      { word: "出租车", pinyin: "chū zū chē", meaning: "xe taxi" }
    ];
    WP.currentWordIndex = 0;
    renderCurrentWord();
  }

  // Calculate balanced size for each Mǐzìgé box based on character count & screen width
  function calculateBoxSize(charCount) {
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;

    if (charCount <= 1) {
      return isMobile ? 250 : 270;
    }
    if (charCount === 2) {
      // For 2 characters (e.g. 北京):
      // On mobile (360-414px): 140px * 2 + 10px gap = 290px (fits side-by-side in one row!)
      // On desktop: 195px * 2 + 14px gap = 404px (sits comfortably side-by-side)
      return isMobile ? 140 : (isTablet ? 165 : 195);
    }
    if (charCount === 3) {
      // For 3 characters (e.g. 出租车):
      // On mobile: 100px * 3 + 12px gap = 312px (fits in 1 row!)
      // On desktop: 150px * 3 + 24px gap = 474px (fits in 1 row!)
      return isMobile ? 100 : (isTablet ? 125 : 150);
    }
    // For 4+ characters (e.g. 公共汽车):
    return isMobile ? 130 : 140;
  }

  // Render the current word and ALL of its characters simultaneously
  
  // Update Word Illustration Image
  function updateWordImage(item) {
    if (!item) return;
    const word = item.word || '';
    const meaning = item.meaning || '';
    const pinyin = item.pinyin || '';
    const imgEl = document.getElementById('wp-vocab-img');
    const capEl = document.getElementById('wp-vocab-caption');
    if (!imgEl) return;

    let imgInfo = null;
    if (window.GH?.vocabImages?.getWordIllustration) {
      imgInfo = window.GH.vocabImages.getWordIllustration(word, meaning, pinyin);
    } else if (window.GH?.vocabImages?.EXACT_IMAGE_MAP?.[word]) {
      imgInfo = {
        url: window.GH.vocabImages.EXACT_IMAGE_MAP[word].url,
        caption: window.GH.vocabImages.EXACT_IMAGE_MAP[word].label
      };
    }

    if (!imgInfo || !imgInfo.url) {
      imgInfo = {
        url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" viewBox="0 0 500 300"><rect width="100%" height="100%" fill="#0f172a"/><text x="50%" y="45%" font-size="70" fill="#38bdf8" text-anchor="middle" dominant-baseline="central">${word}</text><text x="50%" y="75%" font-size="20" fill="#ffffff" text-anchor="middle">${meaning}</text></svg>`),
        caption: `${word} (${pinyin}) : ${meaning}`
      };
    }

    imgEl.src = imgInfo.url;
    imgEl.alt = imgInfo.caption || `${word} - ${meaning}`;
    if (capEl) capEl.textContent = imgInfo.caption || `${word} (${pinyin}) : ${meaning}`;
  }

  function renderCurrentWord() {
    if (!WP.wordList.length) return;
    if (WP.currentWordIndex < 0) WP.currentWordIndex = 0;
    if (WP.currentWordIndex >= WP.wordList.length) WP.currentWordIndex = WP.wordList.length - 1;

    const item = WP.wordList[WP.currentWordIndex];
    WP.currentWordItem = item;

    document.getElementById('wp-cur-word').textContent = item.word || '';
    document.getElementById('wp-cur-pinyin').textContent = item.pinyin || '';
    document.getElementById('wp-cur-meaning').textContent = item.meaning || '';
    document.getElementById('wp-word-counter').textContent = `${WP.currentWordIndex + 1} / ${WP.wordList.length}`;
    updateWordImage(item);

    // Extract Chinese characters only
    const chars = (item.word || '').replace(/[^\u4e00-\u9fa5]/g, '').split('').filter(Boolean);
    WP.currentChars = chars.length ? chars : [item.word?.[0] || '我'];
    WP.activeCharIndex = 0;
    WP.quizCompletedChars.clear();
    WP.isAnimating = false;

    // Reset writers and charData
    WP.writers = [];
    WP.charDataList = [];

    // Render multi-character grid
    renderMultiCharacterBoxes();

    // Render character switcher tabs in details card
    renderCharSwitcher();

    // Load active character details
    selectActiveChar(0);
  }

  // Render the simultaneous Mǐzìgé boxes for each character
  function renderMultiCharacterBoxes() {
    const grid = document.getElementById('wp-multi-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const count = WP.currentChars.length;
    const boxSize = calculateBoxSize(count);

    // Build DOM for each character
    WP.currentChars.forEach((ch, idx) => {
      const block = document.createElement('div');
      block.className = `mizige-char-block ${idx === 0 ? 'active' : ''}`;
      block.id = `wp-block-${idx}`;
      block.dataset.index = idx;
      block.dataset.char = ch;

      block.innerHTML = `
        <div class="mizige-char-header">
          <span class="mizige-char-order">${count > 1 ? `Chữ ${idx + 1}/${count}` : ''}</span>
          <span class="mizige-char-hanzi">${ch}</span>
          <button type="button" class="mizige-char-audio-btn" title="Phát âm chữ ${ch}">🔊</button>
        </div>
        <div class="mizige-box-wrap" id="wp-box-wrap-${idx}" style="width:${boxSize}px; height:${boxSize}px;"></div>
        <div class="mizige-char-badge" id="wp-badge-${idx}">Đang tải...</div>
      `;

      // Audio click on single char
      block.querySelector('.mizige-char-audio-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        playAudio(ch, e.currentTarget);
      });

      // Block click selects active character
      block.addEventListener('click', () => {
        selectActiveChar(idx);
      });

      grid.appendChild(block);

      // Create HanziWriter instance
      if (typeof HanziWriter !== 'undefined') {
        try {
          const writer = HanziWriter.create(`wp-box-wrap-${idx}`, ch, {
            width: boxSize,
            height: boxSize,
            padding: Math.round(boxSize * 0.08), // Chữ ôm nét cân đối hoàn hảo, không quá bé cũng không quá to
            strokeAnimationSpeed: 1.15,
            delayBetweenStrokes: 240,
            strokeColor: '#1e293b',
            radicalColor: '#059669', // Tô màu xanh ngọc nổi bật cho bộ thủ
            outlineColor: '#cbd5e1', // Nét mờ chuẩn nét thư pháp
            highlightColor: '#0284c7',
            drawingWidth: Math.max(4, Math.round(boxSize * 0.075)), // Nét vẽ ôm sát tự nhiên
            drawingColor: '#2563eb',
            showOutline: true,
            showCharacter: true,
            charDataLoader: customCharDataLoader
          });
          WP.writers[idx] = writer;

          // Preload character data for stroke list and badge
          HanziWriter.loadCharacterData(ch, { charDataLoader: customCharDataLoader }).then(data => {
            WP.charDataList[idx] = data;
            const strokes = data?.strokes?.length || data?.medians?.length || 0;
            const badge = document.getElementById(`wp-badge-${idx}`);
            if (badge) badge.textContent = `${strokes} nét`;
            if (idx === WP.activeCharIndex) {
              updateRadicalAndStrokes(ch, data);
            }
          }).catch(() => {
            const badge = document.getElementById(`wp-badge-${idx}`);
            if (badge) badge.textContent = `Chữ Hán`;
          });

        } catch (err) {
          console.warn('HanziWriter error for ' + ch, err);
        }
      }
    });

    // Update mode state
    if (WP.mode === 'practice') {
      startQuizMode();
    } else {
      startGuideMode();
    }
  }

  // Render character switcher tabs in details card
  function renderCharSwitcher() {
    const switcher = document.getElementById('wp-char-switcher');
    if (!switcher) return;

    if (WP.currentChars.length <= 1) {
      switcher.style.display = 'none';
      return;
    }

    switcher.style.display = 'flex';
    switcher.innerHTML = WP.currentChars.map((ch, idx) => `
      <button type="button" class="writing-char-switch-tab ${idx === WP.activeCharIndex ? 'active' : ''}" data-index="${idx}">
        Chữ ${idx + 1}: ${ch}
      </button>
    `).join('');

    switcher.querySelectorAll('.writing-char-switch-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const idx = Number(tab.dataset.index || 0);
        selectActiveChar(idx);
      });
    });
  }

  // Select active character
  function selectActiveChar(idx) {
    if (idx < 0 || idx >= WP.currentChars.length) return;
    WP.activeCharIndex = idx;
    const ch = WP.currentChars[idx];

    // Update block active styling
    document.querySelectorAll('.mizige-char-block').forEach((b, i) => {
      b.classList.toggle('active', i === idx);
    });

    // Update switcher tab active styling
    document.querySelectorAll('.writing-char-switch-tab').forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });

    // Update radical & strokes
    const data = WP.charDataList[idx] || null;
    updateRadicalAndStrokes(ch, data);

    // If in practice mode and not completed, focus quiz on this writer
    if (WP.mode === 'practice' && !WP.quizCompletedChars.has(idx)) {
      startQuizForChar(idx);
    }
  }

  // Update Radical & Stroke details on the right panel
  function updateRadicalAndStrokes(char, data) {
    const radBadge = document.getElementById('wp-rad-badge');
    const radName = document.getElementById('wp-rad-name');
    const radMeaning = document.getElementById('wp-rad-meaning');
    const strokeTotal = document.getElementById('wp-stroke-total');
    const strokeList = document.getElementById('wp-stroke-list');

    // 1. Radical Information
    const radInfo = window.GH_RADICALS?.findRadical?.(char);
    if (radInfo) {
      radBadge.textContent = radInfo.char || radInfo.alt || char;
      radName.textContent = `Bộ ${radInfo.name} (${radInfo.char}) • ${radInfo.strokes} nét`;
      radMeaning.textContent = `${radInfo.meaning}. Pinyin: ${radInfo.pinyin}. Ví dụ: ${radInfo.ex || ''}`;
    } else {
      radBadge.textContent = char;
      radName.textContent = `Chữ Hán: ${char}`;
      radMeaning.textContent = `Chữ Hán thuộc từ "${WP.currentWordItem?.word || ''}" (${WP.currentWordItem?.pinyin || ''}).`;
    }

    // 2. Stroke Details
    const numStrokes = data?.strokes ? data.strokes.length : (data?.medians ? data.medians.length : 0);
    strokeTotal.textContent = `Tổng số: ${numStrokes || '--'} nét`;
    strokeList.innerHTML = '';

    if (numStrokes > 0) {
      const radStrokes = new Set(data.radStrokes || []);

      for (let i = 0; i < numStrokes; i++) {
        const chip = document.createElement('div');
        chip.className = 'writing-stroke-chip';
        chip.dataset.strokeIdx = i;

        const isRadicalStroke = radStrokes.has(i);
        chip.innerHTML = `
          <div class="stroke-idx" style="${isRadicalStroke ? 'background:#059669;' : ''}">${i + 1}</div>
          <div class="stroke-info">
            <b>Nét thứ ${i + 1} ${isRadicalStroke ? '<span style="color:#059669;font-weight:700;">(Bộ thủ)</span>' : ''}</b>
            <span>Bấm để xem nét</span>
          </div>
        `;

        chip.addEventListener('click', () => {
          document.querySelectorAll('.writing-stroke-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          WP.activeStrokeIdx = i;
          const writer = WP.writers[WP.activeCharIndex];
          if (writer) {
            writer.pauseAnimation();
            writer.hideCharacter();
            writer.animateStroke(i);
          }
        });

        strokeList.appendChild(chip);
      }
    } else {
      strokeList.innerHTML = `<div style="padding:10px;color:#94a3b8;font-size:0.9rem;">Đang tải danh sách các nét...</div>`;
    }
  }

  // Update Status banner
  function setStatus(text, type = '') {
    const el = document.getElementById('wp-quiz-status');
    if (!el) return;
    el.className = `writing-quiz-status ${type}`;
    el.textContent = text;
  }

  // Mode 1: Guide Mode
  function startGuideMode() {
    WP.mode = 'guide';
    setStatus('🎬 Chế độ xem hoạt họa & thứ tự từng nét một', '');

    document.getElementById('wp-btn-animate').style.display = 'inline-flex';
    document.getElementById('wp-btn-replay').style.display = 'inline-flex';
    document.getElementById('wp-btn-prev-stroke').style.display = 'inline-flex';
    document.getElementById('wp-btn-next-stroke').style.display = 'inline-flex';
    document.getElementById('wp-btn-hint').style.display = 'none';

    WP.writers.forEach(w => {
      if (w) {
        w.cancelQuiz();
        w.showOutline();
        w.showCharacter();
      }
    });
  }

  // Sequential Animation: Animates all characters of the word in order
  function animateFullWordSequence(startIdx = 0) {
    if (startIdx >= WP.writers.length) {
      WP.isAnimating = false;
      setStatus(`✅ Đã xem xong toàn bộ các nét của từ "${WP.currentWordItem?.word || ''}"!`, 'correct');
      return;
    }

    WP.isAnimating = true;
    selectActiveChar(startIdx);
    const ch = WP.currentChars[startIdx];
    setStatus(`🎬 Đang hướng dẫn viết chữ ${startIdx + 1}/${WP.currentChars.length}: ${ch}...`);

    const writer = WP.writers[startIdx];
    if (!writer) {
      animateFullWordSequence(startIdx + 1);
      return;
    }

    writer.showOutline();
    writer.animateCharacter({
      onComplete: () => {
        if (!WP.isAnimating) return;
        setTimeout(() => {
          if (WP.isAnimating) {
            animateFullWordSequence(startIdx + 1);
          }
        }, 320);
      }
    });
  }

  // Mode 2: Practice / Quiz Mode (Handwriting practice with stroke checking)
  function startQuizMode() {
    WP.mode = 'practice';
    WP.quizCompletedChars.clear();
    setStatus('✍️ Dùng tay hoặc chuột để viết từng nét theo thứ tự!', '');

    document.getElementById('wp-btn-animate').style.display = 'none';
    document.getElementById('wp-btn-replay').style.display = 'none';
    document.getElementById('wp-btn-prev-stroke').style.display = 'none';
    document.getElementById('wp-btn-next-stroke').style.display = 'none';
    document.getElementById('wp-btn-hint').style.display = 'inline-flex';

    // Reset status badges on all blocks
    WP.currentChars.forEach((ch, i) => {
      const badge = document.getElementById(`wp-badge-${i}`);
      const block = document.getElementById(`wp-block-${i}`);
      if (block) block.classList.remove('completed');
      if (badge) badge.textContent = i === 0 ? '✍️ Đang viết' : '⏳ Chờ viết';
    });

    startQuizForChar(0);
  }

  // Start quiz on a specific character
  function startQuizForChar(idx) {
    selectActiveChar(idx);
    const ch = WP.currentChars[idx];
    const writer = WP.writers[idx];
    if (!writer) return;

    setStatus(`✍️ Hãy viết chữ ${idx + 1}/${WP.currentChars.length}: ${ch}`);
    const badge = document.getElementById(`wp-badge-${idx}`);
    if (badge) badge.textContent = '✍️ Đang viết';

    writer.cancelQuiz();
    writer.quiz({
      onCorrectStroke: function(strokeData) {
        setStatus(`✅ Nét ${strokeData.strokeNum + 1} của chữ ${ch} chính xác!`, 'correct');
        const chip = document.querySelector(`.writing-stroke-chip[data-stroke-idx="${strokeData.strokeNum}"]`);
        if (chip) chip.classList.add('active');
      },
      onMistake: function(strokeData) {
        setStatus(`❌ Sai nét chữ ${ch}! Bạn còn ${strokeData.mistakesOnStroke} lần thử.`, 'mistake');
      },
      onComplete: function(summary) {
        WP.quizCompletedChars.add(idx);
        const block = document.getElementById(`wp-block-${idx}`);
        if (block) block.classList.add('completed');
        if (badge) badge.textContent = '✅ Hoàn thành';

        // Check if all characters completed
        if (WP.quizCompletedChars.size >= WP.currentChars.length) {
          setStatus(`🎉 Xuất sắc! Bạn đã viết hoàn thành cả từ "${WP.currentWordItem?.word || ''}"!`, 'correct');
          showCelebrationModal(summary);
        } else {
          // Advance to next character
          const nextIdx = idx + 1;
          if (nextIdx < WP.currentChars.length) {
            setStatus(`🎉 Giỏi quá! Đã xong chữ ${ch}. Tiếp tục viết chữ ${WP.currentChars[nextIdx]} nào!`, 'correct');
            setTimeout(() => {
              startQuizForChar(nextIdx);
            }, 600);
          }
        }
      }
    });
  }

  // Show celebratory overlay modal on complete word finish
  function showCelebrationModal(summary) {
    const modal = document.createElement('div');
    modal.className = 'writing-celebrate-modal';
    const mistakes = summary?.totalMistakes || 0;
    const stars = mistakes === 0 ? '⭐⭐⭐' : (mistakes <= 2 ? '⭐⭐' : '⭐');

    modal.innerHTML = `
      <div class="writing-celebrate-content">
        <div class="writing-celebrate-icon">🎉</div>
        <h3>Hoàn Thành Từ ${WP.currentWordItem?.word || ''}!</h3>
        <p style="font-size:1.4rem;margin:4px 0 12px;">${stars}</p>
        <p>Phiên âm: <b>${WP.currentWordItem?.pinyin || ''}</b> • Nghĩa: <i>${WP.currentWordItem?.meaning || ''}</i></p>
        <p>Số lần sai sót: <b>${mistakes}</b> nét. Bạn đã nắm rất vững thứ tự các nét của từ này!</p>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;">
          <button type="button" class="writing-action-btn" id="wp-celeb-replay">Viết lại</button>
          <button type="button" class="writing-action-btn primary" id="wp-celeb-next">Từ tiếp theo ▶</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#wp-celeb-replay').addEventListener('click', () => {
      modal.remove();
      startQuizMode();
    });

    modal.querySelector('#wp-celeb-next').addEventListener('click', () => {
      modal.remove();
      handleNextWord();
    });
  }

  // Populate 214 Kangxi Radicals View
  function populateRadicalsGrid(filterText = '') {
    const grid = document.getElementById('wp-radicals-grid');
    if (!grid || !window.GH_RADICALS?.list) return;

    const list = window.GH_RADICALS.list;
    const query = filterText.toLowerCase().trim();

    const filtered = list.filter(r => {
      if (!query) return true;
      return (r.char && r.char.includes(query)) ||
             (r.name && r.name.toLowerCase().includes(query)) ||
             (r.meaning && r.meaning.toLowerCase().includes(query)) ||
             (r.pinyin && r.pinyin.toLowerCase().includes(query));
    });

    grid.innerHTML = filtered.map(r => `
      <div class="writing-rad-item" data-char="${r.char}" title="Nhấp để tập viết chữ ${r.char}">
        <div class="writing-rad-char">${r.char}</div>
        <div class="writing-rad-text">
          <b>Bộ ${r.name} (${r.strokes} nét)</b>
          <span>${r.meaning}</span>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.writing-rad-item').forEach(el => {
      el.addEventListener('click', () => {
        const ch = el.dataset.char;
        if (ch) {
          // Switch to workspace view and load radical character
          document.querySelectorAll('.writing-mode-tab').forEach(t => t.classList.remove('active'));
          document.querySelector('.writing-mode-tab[data-mode="guide"]')?.classList.add('active');
          document.getElementById('wp-workspace').style.display = 'grid';
          document.getElementById('wp-radicals-view').classList.remove('active');
          WP.mode = 'guide';

          WP.currentWordItem = { word: ch, pinyin: '', meaning: `Bộ thủ ${ch}` };
          WP.currentChars = [ch];
          WP.activeCharIndex = 0;
          document.getElementById('wp-cur-word').textContent = ch;
          document.getElementById('wp-cur-pinyin').textContent = '';
          document.getElementById('wp-cur-meaning').textContent = `Bộ thủ ${ch}`;
          renderMultiCharacterBoxes();
          renderCharSwitcher();
          selectActiveChar(0);
        }
      });
    });
  }

  // Navigation handlers
  function handlePrevWord() {
    if (WP.currentWordIndex > 0) {
      WP.currentWordIndex--;
      renderCurrentWord();
    }
  }

  function handleNextWord() {
    if (WP.currentWordIndex < WP.wordList.length - 1) {
      WP.currentWordIndex++;
      renderCurrentWord();
    }
  }

  function handleRandomWord() {
    if (!WP.wordList.length) return;
    WP.currentWordIndex = Math.floor(Math.random() * WP.wordList.length);
    renderCurrentWord();
  }

  // Search input handler (custom word or Hanzi)
  function executeSearch() {
    const input = document.getElementById('writing-search-input');
    const val = (input?.value || '').trim();
    if (!val) return;

    // First check if word exists in current vocabulary
    const foundIdx = WP.wordList.findIndex(item => item.word === val || (item.word && item.word.includes(val)));
    if (foundIdx >= 0) {
      WP.currentWordIndex = foundIdx;
      renderCurrentWord();
      return;
    }

    // Otherwise render custom word
    const chars = val.replace(/[^\u4e00-\u9fa5]/g, '').split('').filter(Boolean);
    if (!chars.length) return;

    WP.currentWordItem = { word: val, pinyin: '', meaning: 'Từ tự nhập' };
    WP.currentChars = chars;
    WP.activeCharIndex = 0;
    document.getElementById('wp-cur-word').textContent = val;
    document.getElementById('wp-cur-pinyin').textContent = '';
    document.getElementById('wp-cur-meaning').textContent = 'Từ tự nhập';

    renderMultiCharacterBoxes();
    renderCharSwitcher();
    selectActiveChar(0);
  }

  // Bind Event Listeners
  function bindEvents() {
    // Word navigation
    document.getElementById('wp-prev-word')?.addEventListener('click', handlePrevWord);
    document.getElementById('wp-next-word')?.addEventListener('click', handleNextWord);
    document.getElementById('wp-random-word')?.addEventListener('click', handleRandomWord);

    // Full word speaker button
    const speakBtn = document.getElementById('wp-speak-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        const text = WP.currentWordItem?.word || WP.currentChars.join('');
        playAudio(text, speakBtn);
      });
    }

    // HSK Level Selector in Writing Bar
    const hskSelect = document.getElementById('wp-hsk-select');
    if (hskSelect) {
      hskSelect.addEventListener('change', (e) => {
        const lvl = e.target.value;
        WP.currentLevel = lvl;

        // Synchronize with top header selector
        const topSelect = document.getElementById('hsk-level');
        if (topSelect && topSelect.value !== lvl) {
          topSelect.value = lvl;
          if (typeof window.changeLevel === 'function') {
            window.changeLevel();
          }
        }

        loadLevelWords(lvl);
        window.dispatchEvent(new CustomEvent('gh-hsk-changed', { detail: { level: lvl } }));
      });
    }

    // Search input
    document.getElementById('writing-search-btn')?.addEventListener('click', executeSearch);
    document.getElementById('writing-search-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') executeSearch();
    });

    // Mode tabs
    document.querySelectorAll('.writing-mode-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.writing-mode-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const mode = tab.dataset.mode;
        WP.mode = mode;

        const workspace = document.getElementById('wp-workspace');
        const radView = document.getElementById('wp-radicals-view');

        if (mode === 'radicals') {
          if (workspace) workspace.style.display = 'none';
          if (radView) {
            radView.classList.add('active');
            populateRadicalsGrid();
          }
        } else {
          if (workspace) workspace.style.display = 'grid';
          if (radView) radView.classList.remove('active');

          if (mode === 'practice') {
            startQuizMode();
          } else {
            startGuideMode();
          }
        }
      });
    });

    // Canvas actions
    document.getElementById('wp-btn-animate')?.addEventListener('click', () => {
      animateFullWordSequence(0);
    });

    document.getElementById('wp-btn-replay')?.addEventListener('click', () => {
      WP.writers.forEach(w => {
        if (w) {
          w.hideCharacter();
          w.showOutline();
        }
      });
      animateFullWordSequence(0);
    });

    document.getElementById('wp-btn-prev-stroke')?.addEventListener('click', () => {
      const writer = WP.writers[WP.activeCharIndex];
      const data = WP.charDataList[WP.activeCharIndex];
      if (!writer || !data) return;
      const total = data.strokes ? data.strokes.length : 0;
      if (total <= 0) return;
      WP.activeStrokeIdx = (WP.activeStrokeIdx - 1 + total) % total;
      writer.pauseAnimation();
      writer.hideCharacter();
      writer.animateStroke(WP.activeStrokeIdx);
    });

    document.getElementById('wp-btn-next-stroke')?.addEventListener('click', () => {
      const writer = WP.writers[WP.activeCharIndex];
      const data = WP.charDataList[WP.activeCharIndex];
      if (!writer || !data) return;
      const total = data.strokes ? data.strokes.length : 0;
      if (total <= 0) return;
      WP.activeStrokeIdx = (WP.activeStrokeIdx + 1) % total;
      writer.pauseAnimation();
      writer.hideCharacter();
      writer.animateStroke(WP.activeStrokeIdx);
    });

    document.getElementById('wp-btn-hint')?.addEventListener('click', () => {
      const writer = WP.writers[WP.activeCharIndex];
      if (writer && WP.mode === 'practice') {
        writer.quiz(); // Flashes hint on current active stroke
      }
    });

    // Radical Search Filter
    const radSearch = document.getElementById('wp-rad-search');
    if (radSearch) {
      radSearch.addEventListener('input', (e) => {
        populateRadicalsGrid(e.target.value);
      });
    }
  }

  // Public API to jump to writing a specific word
  window.GH_Writing.openWord = function(word) {
    if (!word) return;
    if (typeof window.switchMode === 'function') {
      window.switchMode('writing');
    }
    setTimeout(() => {
      const input = document.getElementById('writing-search-input');
      if (input) input.value = word;
      executeSearch();
    }, 120);
  };

  // Expose init
  window.GH_Writing.init = init;

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 50);
  }
})();
