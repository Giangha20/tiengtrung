// ==============================================================
// TRANSLATION PRACTICE ENGINE (LUYỆN TẬP DỊCH TIẾNG)
// Siêu mượt, không giật lag, tối ưu 100% cho điện thoại & máy tính
// Chế độ 1: Dịch Việt ➔ Trung (Trả lời bằng chữ Hán)
// Chế độ 2: Dịch Trung ➔ Việt (Trả lời bằng tiếng Việt)
// ==============================================================

(() => {
  const TR = window.GH_Translation = {
    currentLevel: 1,
    currentMode: 'vi_zh', // 'vi_zh' (Việt -> Trung) | 'zh_vi' (Trung -> Việt)
    currentTopic: 'all',
    questions: [],
    currentIndex: 0,
    correctCount: 0,
    streak: 0,
    initialized: false
  };

  // Sound pronunciation helper (Web Speech API)
  function speakChinese(text) {
    if (!('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch (e) {
      // Ignore audio synthesis errors on unsupported browsers
    }
  }

  // Vietnamese normalization for smart comparison
  function normalizeVi(str) {
    if (!str) return '';
    let s = str
      .toLowerCase()
      .replace(/[.,!?:;\"'“”‘’\(\)\-–\/\\~`]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    // Normalize common Vietnamese variations
    s = s.replace(/\bbởi vì\b/g, 'vì');
    s = s.replace(/\bcho nên\b/g, 'nên');
    s = s.replace(/\bcủa tôi\b/g, 'tôi');
    s = s.replace(/\bcủa bạn\b/g, 'bạn');
    s = s.replace(/\bcủa anh ấy\b/g, 'anh ấy');
    s = s.replace(/\bcủa cô ấy\b/g, 'cô ấy');
    return s.replace(/\s+/g, '');
  }

  // Chinese normalization for comparison
  function normalizeZh(str) {
    if (!str) return '';
    return str
      .replace(/[\s\.,!\?，。！？、~`\"'“”‘’\(\)\-–]/g, '')
      .toLowerCase()
      .trim();
  }

  // Tokenize Chinese into 1-2 character chunks for word bank
  function tokenizeChinese(text) {
    const clean = text.replace(/[\s\.,!\?，。！？、]/g, '');
    const tokens = [];
    let i = 0;
    while (i < clean.length) {
      if (i + 1 < clean.length && Math.random() > 0.45) {
        tokens.push(clean.slice(i, i + 2));
        i += 2;
      } else {
        tokens.push(clean[i]);
        i += 1;
      }
    }
    return tokens;
  }

  // Tokenize Vietnamese into 1-2 word chunks for word bank
  function tokenizeVietnamese(text) {
    const clean = text.replace(/[.,!?:;\"'“”‘’\(\)\-–]/g, '').trim();
    const words = clean.split(/\s+/).filter(Boolean);
    const tokens = [];
    let i = 0;
    while (i < words.length) {
      if (i + 1 < words.length && Math.random() > 0.5) {
        tokens.push(words[i] + ' ' + words[i + 1]);
        i += 2;
      } else {
        tokens.push(words[i]);
        i += 1;
      }
    }
    return tokens;
  }

  // Initialize UI once
  function init() {
    if (TR.initialized) return;
    TR.initialized = true;

    const container = document.getElementById('translation-mode');
    if (!container) return;

    renderAppStructure(container);
    loadLevel(TR.currentLevel);
  }

  // Render static app structure
  function renderAppStructure(container) {
    container.innerHTML = `
      <div class="tr-header">
        <div class="tr-title-wrap">
          <h2><span>🌐</span> Luyện Tập Dịch Tiếng</h2>
          <span class="tr-stats-badge" id="tr-level-count">75 câu dịch</span>
        </div>

        <!-- HSK Level Selector -->
        <div class="tr-level-tabs" id="tr-level-tabs">
          <button class="tr-level-btn active" data-lvl="1">HSK 1</button>
          <button class="tr-level-btn" data-lvl="2">HSK 2</button>
          <button class="tr-level-btn" data-lvl="3">HSK 3</button>
          <button class="tr-level-btn" data-lvl="4">HSK 4</button>
          <button class="tr-level-btn" data-lvl="5">HSK 5</button>
          <button class="tr-level-btn" data-lvl="6">HSK 6</button>
        </div>

        <!-- Directional Mode Buttons -->
        <div class="tr-mode-bar">
          <div class="tr-mode-buttons" id="tr-mode-buttons">
            <button class="tr-mode-btn active" data-mode="vi_zh">🇻🇳 Việt ➔ 🇨🇳 Trung (Gõ Hán tự)</button>
            <button class="tr-mode-btn" data-mode="zh_vi">🇨🇳 Trung ➔ 🇻🇳 Việt (Gõ Tiếng Việt)</button>
          </div>

          <select class="tr-topic-filter" id="tr-topic-select" aria-label="Lọc theo chủ đề">
            <option value="all">Tất cả chủ đề</option>
          </select>
        </div>
      </div>

      <!-- Practice Card -->
      <div class="tr-practice-card" id="tr-card-view">
        <div class="tr-card-progress">
          <span class="tr-progress-info" id="tr-progress-text">Câu 1 / 10</span>
          <div class="tr-progress-meter">
            <div class="tr-progress-fill" id="tr-progress-bar"></div>
          </div>
          <span class="tr-streak-badge" id="tr-streak-text">🔥 0 chuỗi</span>
        </div>

        <div class="tr-structure-pill" id="tr-structure-pill">Cấu trúc ngữ pháp</div>

        <!-- Prompt Display Area -->
        <div class="tr-prompt-box">
          <div class="tr-prompt-label" id="tr-prompt-label">Dịch câu sau sang tiếng Trung:</div>
          <p class="tr-prompt-text" id="tr-prompt-text">Đang tải...</p>
          <div class="tr-zh-display" id="tr-zh-display" style="display: none;"></div>
          <div class="tr-pinyin-display" id="tr-pinyin-display" style="display: none;"></div>
          <button type="button" class="tr-audio-btn" id="tr-audio-btn" style="display: none;" title="Nghe phát âm">
            🔊
          </button>
        </div>

        <!-- Input Area -->
        <div class="tr-input-area" id="tr-input-area">
          <div class="tr-input-wrap">
            <input type="text" class="tr-text-input" id="tr-input" placeholder="Nhập câu trả lời..." autocomplete="off">
            <button type="button" class="tr-clear-btn" id="tr-clear-btn" title="Xóa trắng">✕</button>
          </div>
          <!-- Word Bank Chips -->
          <div class="tr-word-bank-header">
            <span>Gợi ý chọn từ ghép câu:</span>
          </div>
          <div class="tr-word-bank" id="tr-word-bank"></div>
        </div>

        <!-- Inline Immediate Feedback Box -->
        <div class="tr-feedback-box" id="tr-feedback-box">
          <b id="tr-feedback-title">Chính xác!</b>
          <div class="tr-answer-reveal" id="tr-answer-reveal">
            <div id="tr-reveal-target-label">Đáp án đúng:</div>
            <div class="tr-reveal-zh" id="tr-reveal-zh"></div>
            <div class="tr-reveal-pinyin" id="tr-reveal-pinyin"></div>
          </div>
        </div>

        <!-- Primary Action -->
        <div class="tr-actions">
          <button type="button" class="tr-btn-primary" id="tr-check-btn">
            Kiểm tra ➔
          </button>
        </div>
      </div>

      <!-- Session Completion View (Clean & No review modal) -->
      <div class="tr-practice-card tr-summary-view" id="tr-summary-view">
        <div class="tr-summary-trophy">🎉</div>
        <h3 class="tr-summary-title">Hoàn Thành Hiệp Luyện Dịch!</h3>
        <p style="color: #94a3b8; margin: 0 0 16px;">Bạn đã hoàn thành 10 câu luyện tập rất xuất sắc.</p>

        <div class="tr-summary-stats">
          <div class="tr-stat-box">
            <b id="tr-sum-correct">0</b>
            <span>Câu đúng</span>
          </div>
          <div class="tr-stat-box">
            <b id="tr-sum-accuracy">0%</b>
            <span>Chính xác</span>
          </div>
          <div class="tr-stat-box">
            <b id="tr-sum-xp">+0 XP</b>
            <span>Kinh nghiệm</span>
          </div>
        </div>

        <div class="tr-summary-actions">
          <button type="button" class="tr-btn-primary" id="tr-restart-btn">
            🔄 Làm Hiệp Tiếp Theo
          </button>
        </div>
      </div>
    `;

    bindEvents();
  }

  // Bind UI interactions
  function bindEvents() {
    // Level tabs
    document.querySelectorAll('#tr-level-tabs .tr-level-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#tr-level-tabs .tr-level-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const lvl = parseInt(btn.dataset.lvl, 10);
        loadLevel(lvl);
      });
    });

    // Directional mode buttons
    document.querySelectorAll('#tr-mode-buttons .tr-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#tr-mode-buttons .tr-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        TR.currentMode = btn.dataset.mode;
        renderQuestion();
      });
    });

    // Topic selector
    const topicSelect = document.getElementById('tr-topic-select');
    if (topicSelect) {
      topicSelect.addEventListener('change', () => {
        TR.currentTopic = topicSelect.value;
        filterAndStartSession();
      });
    }

    // Audio pronunciation button
    const audioBtn = document.getElementById('tr-audio-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const q = TR.questions[TR.currentIndex];
        if (q && q.zh) speakChinese(q.zh);
      });
    }

    // Clear input button
    const clearBtn = document.getElementById('tr-clear-btn');
    const input = document.getElementById('tr-input');
    if (clearBtn && input) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        input.focus();
        // Restore chips
        document.querySelectorAll('#tr-word-bank .tr-word-chip').forEach(c => c.classList.remove('used'));
      });
    }

    // Check button
    const checkBtn = document.getElementById('tr-check-btn');
    if (checkBtn) {
      checkBtn.addEventListener('click', handleCheckOrNext);
    }

    // Enter key to check
    if (input) {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          handleCheckOrNext();
        }
      });
    }

    // Restart button
    const restartBtn = document.getElementById('tr-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        document.getElementById('tr-summary-view')?.classList.remove('active');
        const card = document.getElementById('tr-card-view');
        if (card) card.style.display = 'block';
        filterAndStartSession();
      });
    }
  }

  // Load level data
  function loadLevel(lvl) {
    TR.currentLevel = lvl;
    const rawData = window.TRANSLATION_DATA?.[`hsk${lvl}`] || [];

    const badge = document.getElementById('tr-level-count');
    if (badge) badge.textContent = `${rawData.length} câu HSK ${lvl} chuẩn`;

    // Populate topic dropdown
    const topicSelect = document.getElementById('tr-topic-select');
    if (topicSelect) {
      const topics = [...new Set(rawData.map(d => d.topic).filter(Boolean))];
      topicSelect.innerHTML = `<option value="all">Tất cả chủ đề (${rawData.length} câu)</option>` +
        topics.map(t => `<option value="${t}">${t}</option>`).join('');
      topicSelect.value = 'all';
      TR.currentTopic = 'all';
    }

    filterAndStartSession();
  }

  // Filter questions and start 10-question session
  function filterAndStartSession() {
    const rawData = window.TRANSLATION_DATA?.[`hsk${TR.currentLevel}`] || [];
    let filtered = rawData;
    if (TR.currentTopic !== 'all') {
      filtered = rawData.filter(d => d.topic === TR.currentTopic);
    }

    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    TR.questions = shuffled.slice(0, Math.min(10, shuffled.length));
    TR.currentIndex = 0;
    TR.correctCount = 0;
    TR.streak = 0;

    document.getElementById('tr-summary-view')?.classList.remove('active');
    const card = document.getElementById('tr-card-view');
    if (card) card.style.display = 'block';

    renderQuestion();
  }

  // Render question without creating new DOM structures (zero-lag)
  function renderQuestion() {
    const q = TR.questions[TR.currentIndex];
    if (!q) {
      showSummary();
      return;
    }

    const total = TR.questions.length;
    const current = TR.currentIndex + 1;

    // Fast text updates
    const progText = document.getElementById('tr-progress-text');
    if (progText) progText.textContent = `Câu ${current} / ${total}`;

    const progBar = document.getElementById('tr-progress-bar');
    if (progBar) progBar.style.width = `${Math.round(((current - 1) / total) * 100)}%`;

    const streakText = document.getElementById('tr-streak-text');
    if (streakText) streakText.textContent = `🔥 ${TR.streak} chuỗi`;

    const structPill = document.getElementById('tr-structure-pill');
    if (structPill) structPill.textContent = `💡 ${q.structure || q.topic}`;

    // Reset feedback
    const fb = document.getElementById('tr-feedback-box');
    if (fb) {
      fb.className = 'tr-feedback-box';
      fb.style.display = 'none';
    }

    // Reset input
    const input = document.getElementById('tr-input');
    if (input) {
      input.value = '';
      input.disabled = false;
      input.focus();
    }

    // Reset button
    const checkBtn = document.getElementById('tr-check-btn');
    if (checkBtn) {
      checkBtn.textContent = 'Kiểm tra ➔';
      checkBtn.dataset.state = 'check';
    }

    const promptLabel = document.getElementById('tr-prompt-label');
    const promptText = document.getElementById('tr-prompt-text');
    const zhDisplay = document.getElementById('tr-zh-display');
    const pyDisplay = document.getElementById('tr-pinyin-display');
    const audioBtn = document.getElementById('tr-audio-btn');
    const wordBank = document.getElementById('tr-word-bank');

    if (TR.currentMode === 'vi_zh') {
      // 🇻🇳 VIỆT -> 🇨🇳 TRUNG: Question is Vietnamese, user answers Chinese!
      if (promptLabel) promptLabel.textContent = 'Dịch câu sau sang tiếng Trung (Gõ hoặc bấm chọn chữ Hán):';
      if (promptText) {
        promptText.style.display = 'block';
        promptText.textContent = q.vi;
      }
      if (zhDisplay) zhDisplay.style.display = 'none';
      if (pyDisplay) pyDisplay.style.display = 'none';
      if (audioBtn) audioBtn.style.display = 'none';
      if (input) input.placeholder = 'Gõ chữ Hán hoặc chọn từ dưới đây...';

      // Build Chinese word bank
      if (wordBank) {
        wordBank.innerHTML = '';
        const targetTokens = tokenizeChinese(q.zh);
        const distractors = ['的', '了', '很', '在', '不', '是', '有', '去', '他', '我'].slice(0, 3);
        const allTokens = [...targetTokens, ...distractors].sort(() => 0.5 - Math.random());

        const frag = document.createDocumentFragment();
        allTokens.forEach(token => {
          const chip = document.createElement('button');
          chip.type = 'button';
          chip.className = 'tr-word-chip';
          chip.textContent = token;
          chip.addEventListener('click', () => {
            if (chip.classList.contains('used')) return;
            chip.classList.add('used');
            if (input) {
              input.value += token;
              input.focus();
            }
          });
          frag.appendChild(chip);
        });
        wordBank.appendChild(frag);
      }
    } else {
      // 🇨🇳 TRUNG -> 🇻🇳 VIỆT: Question is Chinese, user answers Vietnamese!
      if (promptLabel) promptLabel.textContent = 'Dịch câu sau sang tiếng Việt (Gõ hoặc bấm chọn từ):';
      if (promptText) promptText.style.display = 'none';
      if (zhDisplay) {
        zhDisplay.style.display = 'block';
        zhDisplay.textContent = q.zh;
      }
      if (pyDisplay) {
        pyDisplay.style.display = 'block';
        pyDisplay.textContent = q.pinyin;
      }
      if (audioBtn) audioBtn.style.display = 'inline-flex';
      if (input) input.placeholder = 'Gõ câu tiếng Việt hoặc chọn từ dưới đây...';

      // Build Vietnamese word bank
      if (wordBank) {
        wordBank.innerHTML = '';
        const targetTokens = tokenizeVietnamese(q.vi);
        const distractors = ['rất', 'đã', 'của', 'không', 'đang', 'được'].slice(0, 2);
        const allTokens = [...targetTokens, ...distractors].sort(() => 0.5 - Math.random());

        const frag = document.createDocumentFragment();
        allTokens.forEach(token => {
          const chip = document.createElement('button');
          chip.type = 'button';
          chip.className = 'tr-word-chip';
          chip.textContent = token;
          chip.addEventListener('click', () => {
            if (chip.classList.contains('used')) return;
            chip.classList.add('used');
            if (input) {
              const cur = input.value.trim();
              input.value = cur ? cur + ' ' + token : token;
              input.focus();
            }
          });
          frag.appendChild(chip);
        });
        wordBank.appendChild(frag);
      }

      // Read Chinese prompt once softly
      speakChinese(q.zh);
    }
  }

  // Handle check button click
  function handleCheckOrNext() {
    const checkBtn = document.getElementById('tr-check-btn');
    if (!checkBtn) return;

    if (checkBtn.dataset.state === 'next') {
      TR.currentIndex++;
      renderQuestion();
      return;
    }

    const q = TR.questions[TR.currentIndex];
    if (!q) return;

    const input = document.getElementById('tr-input');
    const userVal = (input?.value || '').trim();

    let isCorrect = false;

    if (TR.currentMode === 'vi_zh') {
      // Việt -> Trung: Compare Chinese
      const normUser = normalizeZh(userVal);
      const normTarget = normalizeZh(q.zh);
      isCorrect = normUser === normTarget;
    } else {
      // Trung -> Việt: Compare Vietnamese
      const normUser = normalizeVi(userVal);
      const normTarget = normalizeVi(q.vi);
      isCorrect = (normUser === normTarget) || (normUser.length >= 4 && normTarget.includes(normUser));
    }

    if (isCorrect) {
      TR.correctCount++;
      TR.streak++;
      if (window.GH?.progress?.addXP) window.GH.progress.addXP(10);
      if (window.GH?.streak?.tick) window.GH.streak.tick();
    } else {
      TR.streak = 0;
    }

    // Always play native Chinese pronunciation upon check
    speakChinese(q.zh);

    // Show feedback
    const fb = document.getElementById('tr-feedback-box');
    const fbTitle = document.getElementById('tr-feedback-title');
    const targetLabel = document.getElementById('tr-reveal-target-label');
    const revealZh = document.getElementById('tr-reveal-zh');
    const revealPy = document.getElementById('tr-reveal-pinyin');

    if (fb && fbTitle && revealZh) {
      fb.style.display = 'block';
      if (isCorrect) {
        fb.className = 'tr-feedback-box correct';
        fbTitle.textContent = '🎉 Chính xác! Bạn làm rất giỏi!';
      } else {
        fb.className = 'tr-feedback-box incorrect';
        fbTitle.textContent = '❌ Chưa chính xác, hãy xem đáp án chuẩn:';
      }

      if (TR.currentMode === 'vi_zh') {
        if (targetLabel) targetLabel.textContent = 'Câu chữ Hán chuẩn:';
        revealZh.textContent = q.zh;
        if (revealPy) revealPy.textContent = q.pinyin;
      } else {
        if (targetLabel) targetLabel.textContent = 'Bản dịch tiếng Việt chuẩn:';
        revealZh.textContent = q.vi;
        if (revealPy) revealPy.textContent = `(Chữ Hán: ${q.zh} • ${q.pinyin})`;
      }
    }

    if (input) input.disabled = true;

    // Switch button to 'Next'
    checkBtn.textContent = 'Câu tiếp theo ➔';
    checkBtn.dataset.state = 'next';
    checkBtn.focus();
  }

  // Show Session Summary
  function showSummary() {
    const card = document.getElementById('tr-card-view');
    const summary = document.getElementById('tr-summary-view');
    if (card) card.style.display = 'none';
    if (!summary) return;

    summary.classList.add('active');

    const total = TR.questions.length;
    const correct = TR.correctCount;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const xpGained = correct * 10;

    const sumCorrect = document.getElementById('tr-sum-correct');
    const sumAccuracy = document.getElementById('tr-sum-accuracy');
    const sumXp = document.getElementById('tr-sum-xp');

    if (sumCorrect) sumCorrect.textContent = `${correct} / ${total}`;
    if (sumAccuracy) sumAccuracy.textContent = `${accuracy}%`;
    if (sumXp) sumXp.textContent = `+${xpGained} XP`;
  }

  TR.init = init;
  TR.speak = speakChinese;

  // Mount on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  // Hook into switchMode
  window.addEventListener('load', () => {
    const origSwitch = window.switchMode;
    window.switchMode = function(mode) {
      if (typeof origSwitch === 'function') {
        origSwitch.apply(this, arguments);
      }
      if (mode === 'translation') {
        document.querySelectorAll('main > section').forEach(s => {
          if (s.id !== 'translation-mode') s.classList.remove('active');
        });
        const el = document.getElementById('translation-mode');
        if (el) {
          el.classList.add('active');
          init();
        }
      }
    };
  });
})();
