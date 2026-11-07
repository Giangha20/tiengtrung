/* ==============================================================
   WRITING PRACTICE ENGINE (LUYỆN VIẾT CHỮ HÁN & THỨ TỰ NÉT)
   Sử dụng HanziWriter, ô Mễ Tự chuẩn thư pháp, ôm nét hoàn hảo,
   hướng dẫn đầy đủ bộ thủ và từng nét một 100% không lỗi.
   ============================================================== */

(() => {
  const WP = window.GH_Writing = {
    initialized: false,
    currentLevel: "1",
    wordList: [],
    currentWordIndex: 0,
    currentWordItem: null,
    currentCharIndex: 0,
    currentChar: "",
    writer: null,
    charData: null,
    mode: "guide", // 'guide' | 'practice' | 'radicals'
    activeStrokeIdx: 0,
    isAnimating: false,
    writerSize: 300
  };

  // Cache character data in memory and localStorage for ultra-fast load
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

    // Fetch from reliable CDN
    fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/${encodeURIComponent(char)}.json`)
      .then(res => {
        if (!res.ok) throw new Error('Character data not found');
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

  // Audio pronunciation helper
  function speakCurrentChar() {
    if (!('speechSynthesis' in window) || !WP.currentChar) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(WP.currentChar);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch (e) {}
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
      WP.currentLevel = String(e.detail?.level || '1');
      loadLevelWords(WP.currentLevel);
    });

    // Initial load
    WP.currentLevel = String(window.currentLevel || document.getElementById('hsk-level')?.value || '1');
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
            <p>Tập viết theo ô Mễ Tự chuẩn, phân tích chi tiết bộ thủ và thứ tự từng nét một.</p>
          </div>
          <div class="writing-search-bar">
            <input type="text" id="writing-search-input" class="writing-search-input" placeholder="Nhập chữ cần viết..." maxlength="8" autocomplete="off">
            <button type="button" id="writing-search-btn" class="writing-btn-sm">🔍 Xem nét</button>
          </div>
        </div>

        <!-- Word Info & Multi-Character Navigation -->
        <div class="writing-word-bar">
          <div class="writing-word-info">
            <span class="writing-cur-word" id="wp-cur-word">--</span>
            <span class="writing-cur-pinyin" id="wp-cur-pinyin">--</span>
            <span class="writing-cur-meaning" id="wp-cur-meaning">--</span>
            <button type="button" id="wp-speak-btn" class="writing-action-btn" title="Phát âm">🔊</button>
          </div>

          <div class="writing-nav-controls">
            <button type="button" id="wp-prev-word" class="writing-nav-btn" title="Từ trước">◀ Trước</button>
            <span id="wp-word-counter" style="font-weight:600;font-size:0.9rem;color:#64748b;">1 / 150</span>
            <button type="button" id="wp-next-word" class="writing-nav-btn" title="Từ tiếp">Sau ▶</button>
            <button type="button" id="wp-random-word" class="writing-nav-btn" title="Chọn ngẫu nhiên">🎲 Ngẫu nhiên</button>
          </div>

          <!-- Multi-character word selector tabs (vd: 漂亮 -> [漂] [亮]) -->
          <div class="writing-char-tabs" id="wp-char-tabs"></div>
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

        <!-- Main Workspace (Canvas + Details) -->
        <div class="writing-workspace" id="wp-workspace">
          <!-- Canvas Card -->
          <div class="writing-canvas-card">
            <div class="writing-canvas-wrap">
              <div id="hanzi-writer-target"></div>
            </div>

            <!-- Quiz Status Badge -->
            <div class="writing-quiz-status" id="wp-quiz-status">
              Sẵn sàng luyện viết
            </div>

            <!-- Canvas Controls -->
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
                <span style="font-size:0.85rem;color:#64748b;" id="wp-stroke-instruction">Bấm vào từng nét dưới đây để xem chi tiết:</span>
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

  // Load words for current HSK Level
  function loadLevelWords(lvl) {
    WP.currentLevel = String(lvl || '1');
    const data = window.hskData?.[WP.currentLevel] || [];
    WP.wordList = Array.isArray(data) && data.length ? data : [
      { word: "我", pinyin: "wǒ", meaning: "tôi, tớ, mình" },
      { word: "你", pinyin: "nǐ", meaning: "bạn, anh, chị" },
      { word: "好", pinyin: "hǎo", meaning: "tốt, khỏe, hay" }
    ];
    WP.currentWordIndex = 0;
    renderCurrentWord();
  }

  // Render the current word and characters
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

    // Extract Chinese characters only
    const chars = (item.word || '').replace(/[^\u4e00-\u9fa5]/g, '').split('').filter(Boolean);
    const validChars = chars.length ? chars : [item.word?.[0] || '我'];

    // Multi-character tabs
    const tabsContainer = document.getElementById('wp-char-tabs');
    tabsContainer.innerHTML = '';
    validChars.forEach((ch, idx) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = `writing-char-tab ${idx === 0 ? 'active' : ''}`;
      tab.textContent = ch;
      tab.title = `Luyện viết chữ ${ch}`;
      tab.addEventListener('click', () => {
        document.querySelectorAll('#wp-char-tabs .writing-char-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        WP.currentCharIndex = idx;
        loadCharacter(ch);
      });
      tabsContainer.appendChild(tab);
    });

    WP.currentCharIndex = 0;
    loadCharacter(validChars[0]);
  }

  // Load and render a specific character into HanziWriter
  function loadCharacter(ch) {
    if (!ch) return;
    WP.currentChar = ch;

    const target = document.getElementById('hanzi-writer-target');
    if (!target) return;
    target.innerHTML = '';

    // Responsive width (300px desktop, 270px mobile)
    const isMobile = window.innerWidth < 480;
    const size = isMobile ? 270 : 300;
    WP.writerSize = size;
    target.style.width = `${size}px`;
    target.style.height = `${size}px`;

    // Check HanziWriter availability
    if (typeof HanziWriter === 'undefined') {
      target.innerHTML = `<div style="padding:40px;text-align:center;color:#ef4444;">Đang tải thư viện luyện viết...</div>`;
      return;
    }

    try {
      WP.writer = HanziWriter.create('hanzi-writer-target', ch, {
        width: size,
        height: size,
        padding: Math.round(size * 0.08), // Chữ ôm nét cân đối hoàn hảo, không quá to cũng không quá bé
        strokeAnimationSpeed: 1.1,
        delayBetweenStrokes: 260,
        strokeColor: '#1e293b',
        radicalColor: '#059669', // Tô màu xanh ngọc nổi bật cho bộ thủ
        outlineColor: '#cbd5e1', // Nét mờ chuẩn nét thư pháp
        highlightColor: '#0284c7',
        drawingWidth: Math.round(size * 0.075), // Độ dày nét vẽ mượt mà, ôm theo nét chữ
        drawingColor: '#2563eb',
        showOutline: true,
        showCharacter: true,
        charDataLoader: customCharDataLoader
      });

      // Fetch character data to update radical & stroke order list
      HanziWriter.loadCharacterData(ch, { charDataLoader: customCharDataLoader }).then(data => {
        WP.charData = data;
        updateRadicalAndStrokes(ch, data);
      }).catch(err => {
        // Fallback radical display even if stroke data isn't loaded
        updateRadicalAndStrokes(ch, null);
      });

      // Apply mode
      if (WP.mode === 'practice') {
        startQuizMode();
      } else {
        startGuideMode();
      }

    } catch (e) {
      console.warn('HanziWriter creation failed for ' + ch, e);
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
      radMeaning.textContent = `Chữ Hán thuộc từ ${WP.currentWordItem?.word || ''} (${WP.currentWordItem?.pinyin || ''}).`;
    }

    // 2. Stroke Details
    const numStrokes = data?.strokes ? data.strokes.length : (data?.medians ? data.medians.length : 0);
    strokeTotal.textContent = `Tổng số: ${numStrokes || '--'} nét`;
    strokeList.innerHTML = '';

    if (numStrokes > 0) {
      const radStrokes = new Set(data.radStrokes || []);
      const basicStrokesMap = window.GH_RADICALS?.basicStrokes || {};

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
          if (WP.writer) {
            WP.writer.pauseAnimation();
            WP.writer.hideCharacter();
            WP.writer.animateStroke(i);
          }
        });

        strokeList.appendChild(chip);
      }
    } else {
      strokeList.innerHTML = `<div style="padding:10px;color:#94a3b8;font-size:0.9rem;">Đang tải danh sách các nét...</div>`;
    }
  }

  // Mode 1: Guide Mode (Animation and step viewer)
  function startGuideMode() {
    WP.mode = 'guide';
    const status = document.getElementById('wp-quiz-status');
    status.className = 'writing-quiz-status';
    status.textContent = '🎬 Chế độ xem hoạt họa & thứ tự từng nét';

    document.getElementById('wp-btn-animate').style.display = 'inline-flex';
    document.getElementById('wp-btn-replay').style.display = 'inline-flex';
    document.getElementById('wp-btn-prev-stroke').style.display = 'inline-flex';
    document.getElementById('wp-btn-next-stroke').style.display = 'inline-flex';
    document.getElementById('wp-btn-hint').style.display = 'none';

    if (WP.writer) {
      WP.writer.cancelQuiz();
      WP.writer.showOutline();
      WP.writer.showCharacter();
    }
  }

  // Mode 2: Practice / Quiz Mode (Handwriting practice with stroke checking)
  function startQuizMode() {
    WP.mode = 'practice';
    const status = document.getElementById('wp-quiz-status');
    status.className = 'writing-quiz-status';
    status.textContent = '✍️ Dùng tay hoặc chuột để viết từng nét theo thứ tự!';

    document.getElementById('wp-btn-animate').style.display = 'none';
    document.getElementById('wp-btn-replay').style.display = 'none';
    document.getElementById('wp-btn-prev-stroke').style.display = 'none';
    document.getElementById('wp-btn-next-stroke').style.display = 'none';
    document.getElementById('wp-btn-hint').style.display = 'inline-flex';

    if (!WP.writer) return;

    WP.writer.cancelQuiz();
    WP.writer.quiz({
      onCorrectStroke: function(strokeData) {
        status.className = 'writing-quiz-status correct';
        status.textContent = `✅ Nét ${strokeData.strokeNum + 1} chính xác! Tiếp tục nào.`;
        // Highlight active stroke chip
        const chip = document.querySelector(`.writing-stroke-chip[data-stroke-idx="${strokeData.strokeNum}"]`);
        if (chip) chip.classList.add('active');
      },
      onMistake: function(strokeData) {
        status.className = 'writing-quiz-status mistake';
        status.textContent = `❌ Sai nét hoặc sai thứ tự! Bạn còn ${strokeData.mistakesOnStroke} lần thử.`;
      },
      onComplete: function(summary) {
        status.className = 'writing-quiz-status correct';
        status.textContent = `🎉 Xuất sắc! Bạn đã viết hoàn thành chữ ${WP.currentChar}!`;
        showCelebrationModal(summary);
      }
    });
  }

  // Show celebratory overlay modal on quiz completion
  function showCelebrationModal(summary) {
    const modal = document.createElement('div');
    modal.className = 'writing-celebrate-modal';
    const mistakes = summary?.totalMistakes || 0;
    const stars = mistakes === 0 ? '⭐⭐⭐' : (mistakes <= 2 ? '⭐⭐' : '⭐');

    modal.innerHTML = `
      <div class="writing-celebrate-content">
        <div class="writing-celebrate-icon">🎉</div>
        <h3>Hoàn Thành Chữ ${WP.currentChar}!</h3>
        <p style="font-size:1.4rem;margin:4px 0 12px;">${stars}</p>
        <p>Số lần sai sót: <b>${mistakes}</b> nét. Bạn đã nắm rất vững thứ tự nét của chữ này!</p>
        <div style="display:flex;gap:10px;justify-content:center;">
          <button type="button" class="writing-action-btn" id="wp-celeb-replay">Viết lại</button>
          <button type="button" class="writing-action-btn primary" id="wp-celeb-next">Chữ tiếp theo ➔</button>
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
          // Switch to workspace view and load character
          document.querySelectorAll('.writing-mode-tab').forEach(t => t.classList.remove('active'));
          document.querySelector('.writing-mode-tab[data-mode="guide"]')?.classList.add('active');
          document.getElementById('wp-workspace').style.display = 'grid';
          document.getElementById('wp-radicals-view').classList.remove('active');
          WP.mode = 'guide';
          loadCharacter(ch);
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

  // Bind Event Listeners
  function bindEvents() {
    // Word navigation
    document.getElementById('wp-prev-word')?.addEventListener('click', handlePrevWord);
    document.getElementById('wp-next-word')?.addEventListener('click', handleNextWord);
    document.getElementById('wp-random-word')?.addEventListener('click', handleRandomWord);
    document.getElementById('wp-speak-btn')?.addEventListener('click', speakCurrentChar);

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
      if (WP.writer) {
        WP.writer.showOutline();
        WP.writer.animateCharacter();
      }
    });

    document.getElementById('wp-btn-replay')?.addEventListener('click', () => {
      if (WP.writer) {
        WP.writer.hideCharacter();
        WP.writer.showOutline();
        WP.writer.animateCharacter();
      }
    });

    document.getElementById('wp-btn-prev-stroke')?.addEventListener('click', () => {
      if (!WP.writer || !WP.charData) return;
      const total = WP.charData.strokes ? WP.charData.strokes.length : 0;
      if (total <= 0) return;
      WP.activeStrokeIdx = (WP.activeStrokeIdx - 1 + total) % total;
      WP.writer.pauseAnimation();
      WP.writer.hideCharacter();
      WP.writer.animateStroke(WP.activeStrokeIdx);
    });

    document.getElementById('wp-btn-next-stroke')?.addEventListener('click', () => {
      if (!WP.writer || !WP.charData) return;
      const total = WP.charData.strokes ? WP.charData.strokes.length : 0;
      if (total <= 0) return;
      WP.activeStrokeIdx = (WP.activeStrokeIdx + 1) % total;
      WP.writer.pauseAnimation();
      WP.writer.hideCharacter();
      WP.writer.animateStroke(WP.activeStrokeIdx);
    });

    document.getElementById('wp-btn-hint')?.addEventListener('click', () => {
      if (WP.writer && WP.mode === 'practice') {
        WP.writer.quiz(); // Retains quiz and flashes hint
      }
    });

    // Custom Search / Character Input
    const searchInput = document.getElementById('writing-search-input');
    const searchBtn = document.getElementById('writing-search-btn');

    function executeSearch() {
      const val = (searchInput?.value || '').trim();
      if (!val) return;
      const char = val[0];
      loadCharacter(char);
      document.getElementById('wp-cur-word').textContent = val;
      document.getElementById('wp-cur-pinyin').textContent = '';
      document.getElementById('wp-cur-meaning').textContent = 'Chữ Hán tự nhập';
    }

    if (searchBtn) searchBtn.addEventListener('click', executeSearch);
    if (searchInput) {
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') executeSearch();
      });
    }

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
      loadCharacter(word[0]);
      document.getElementById('wp-cur-word').textContent = word;
    }, 150);
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
