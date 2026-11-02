// ==============================================================
// TRANSLATION PRACTICE ENGINE (LUYỆN TẬP DỊCH TIẾNG TRUNG)
// High-performance, silky-smooth 60fps, responsive on mobile & PC
// ==============================================================

(() => {
  const TR = window.GH_Translation = {
    currentLevel: 1,
    currentMode: 'vi_zh', // 'vi_zh', 'zh_vi', 'flashcard'
    currentTopic: 'all',
    questions: [],
    currentIndex: 0,
    sessionResults: [],
    streak: 0,
    selectedTokens: [],
    initialized: false
  };

  // Sound pronunciation helper
  function speakChinese(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }

  // String normalization for checking
  function normalizeStr(str) {
    if (!str) return '';
    return str
      .replace(/[\s\.,!\?，。！？、]/g, '')
      .toLowerCase();
  }

  // Initialize UI
  function init() {
    if (TR.initialized) return;
    TR.initialized = true;

    const container = document.getElementById('translation-mode');
    if (!container) return;

    renderAppStructure(container);
    loadLevel(TR.currentLevel);
  }

  // Render main container structure
  function renderAppStructure(container) {
    container.innerHTML = `
      <div class="tr-header">
        <div class="tr-title-wrap">
          <h2><span>🌐</span> Luyện Tập Dịch Tiếng Trung</h2>
          <span class="tr-stats-badge" id="tr-level-count">75 câu dịch chuẩn</span>
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

        <!-- Mode & Topic Filter Bar -->
        <div class="tr-mode-bar">
          <div class="tr-mode-buttons" id="tr-mode-buttons">
            <button class="tr-mode-btn active" data-mode="vi_zh">Việt ➔ Trung</button>
            <button class="tr-mode-btn" data-mode="zh_vi">Trung ➔ Việt</button>
            <button class="tr-mode-btn" data-mode="flashcard">Thẻ Lật</button>
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
          <span class="tr-streak-badge" id="tr-streak-text">🔥 0 streak</span>
        </div>

        <div class="tr-structure-pill" id="tr-structure-pill">Cấu trúc ngữ pháp</div>

        <div class="tr-prompt-box">
          <div class="tr-prompt-label" id="tr-prompt-label">Dịch câu sau sang tiếng Trung:</div>
          <p class="tr-prompt-text" id="tr-prompt-text">Đang tải câu hỏi...</p>
          <div class="tr-zh-display" id="tr-zh-display" style="display: none;"></div>
          <div class="tr-pinyin-display" id="tr-pinyin-display" style="display: none;"></div>
          <button type="button" class="tr-audio-btn" id="tr-audio-btn" style="display: none;" title="Nghe phát âm">
            🔊
          </button>
        </div>

        <!-- Input Area for vi_zh & zh_vi -->
        <div class="tr-input-area" id="tr-input-area">
          <input type="text" class="tr-text-input" id="tr-input" placeholder="Nhập câu dịch hoặc chọn từ phía dưới..." autocomplete="off">
          <div class="tr-word-bank" id="tr-word-bank"></div>
        </div>

        <!-- Feedback Box -->
        <div class="tr-feedback-box" id="tr-feedback-box">
          <b id="tr-feedback-title">Chính xác!</b>
          <div class="tr-answer-reveal" id="tr-answer-reveal">
            <div>Đáp án chuẩn: <span class="tr-reveal-zh" id="tr-reveal-zh"></span></div>
            <div class="tr-reveal-pinyin" id="tr-reveal-pinyin"></div>
          </div>
        </div>

        <!-- Actions -->
        <div class="tr-actions">
          <button type="button" class="tr-btn-secondary" id="tr-view-all-answers-btn">
            📋 Xem đáp án bài này
          </button>
          <button type="button" class="tr-btn-primary" id="tr-check-btn">
            Kiểm tra ➔
          </button>
        </div>
      </div>

      <!-- Session Summary View -->
      <div class="tr-practice-card tr-summary-view" id="tr-summary-view">
        <div class="tr-summary-trophy">🎉</div>
        <h3 class="tr-summary-title">Hoàn Thành Hiệp Luyện Dịch!</h3>
        <p style="color: #94a3b8; margin: 0 0 16px;">Bạn đã làm rất xuất sắc, hãy tiếp tục phát huy nhé.</p>

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
          <button type="button" class="tr-btn-primary" id="tr-review-answers-btn" style="background: linear-gradient(135deg, #10b981, #059669);">
            📋 Xem Lại Đáp Án & Chi Tiết
          </button>
          <button type="button" class="tr-btn-primary" id="tr-restart-btn">
            🔄 Làm Hiệp Tiếp Theo
          </button>
        </div>
      </div>

      <!-- Answer Review Modal -->
      <div class="tr-review-modal" id="tr-review-modal" aria-hidden="true">
        <div class="tr-review-panel">
          <div class="tr-review-header">
            <h3><span>📋</span> Bảng Đáp Án & Giải Thích Chi Tiết</h3>
            <button type="button" class="tr-review-close" id="tr-modal-close" aria-label="Đóng">✕</button>
          </div>
          <div class="tr-review-body" id="tr-review-list">
            <!-- Dynamically populated review cards -->
          </div>
        </div>
      </div>
    `;

    bindEvents();
  }

  // Bind interactive events
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

    // Mode buttons
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

    // Audio button
    const audioBtn = document.getElementById('tr-audio-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const q = TR.questions[TR.currentIndex];
        if (q && q.zh) speakChinese(q.zh);
      });
    }

    // Check button
    const checkBtn = document.getElementById('tr-check-btn');
    if (checkBtn) {
      checkBtn.addEventListener('click', handleCheckOrNext);
    }

    // Input Enter key
    const input = document.getElementById('tr-input');
    if (input) {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          handleCheckOrNext();
        }
      });
    }

    // View all answers button
    const viewAllBtn = document.getElementById('tr-view-all-answers-btn');
    if (viewAllBtn) {
      viewAllBtn.addEventListener('click', () => {
        openReviewModal(TR.questions, 'Danh Sách Đáp Án Cấp Độ');
      });
    }

    // Summary buttons
    const reviewBtn = document.getElementById('tr-review-answers-btn');
    if (reviewBtn) {
      reviewBtn.addEventListener('click', () => {
        openReviewModal(TR.sessionResults, 'Xem Lại Đáp Án Đã Làm');
      });
    }

    const restartBtn = document.getElementById('tr-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        document.getElementById('tr-summary-view')?.classList.remove('active');
        document.getElementById('tr-card-view').style.display = 'block';
        filterAndStartSession();
      });
    }

    // Modal close
    const modal = document.getElementById('tr-review-modal');
    const closeBtn = document.getElementById('tr-modal-close');
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      });
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          modal.classList.remove('active');
          modal.setAttribute('aria-hidden', 'true');
        }
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

  // Filter questions and start a 10-question session
  function filterAndStartSession() {
    const rawData = window.TRANSLATION_DATA?.[`hsk${TR.currentLevel}`] || [];
    let filtered = rawData;
    if (TR.currentTopic !== 'all') {
      filtered = rawData.filter(d => d.topic === TR.currentTopic);
    }

    // Shuffle and pick 10 questions for the session
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    TR.questions = shuffled.slice(0, Math.min(10, shuffled.length));
    TR.currentIndex = 0;
    TR.sessionResults = [];
    TR.streak = 0;

    document.getElementById('tr-summary-view')?.classList.remove('active');
    const card = document.getElementById('tr-card-view');
    if (card) card.style.display = 'block';

    renderQuestion();
  }

  // Render current question
  function renderQuestion() {
    const q = TR.questions[TR.currentIndex];
    if (!q) {
      showSummary();
      return;
    }

    const total = TR.questions.length;
    const current = TR.currentIndex + 1;

    // Progress
    const progText = document.getElementById('tr-progress-text');
    if (progText) progText.textContent = `Câu ${current} / ${total}`;

    const progBar = document.getElementById('tr-progress-bar');
    if (progBar) progBar.style.width = `${Math.round(((current - 1) / total) * 100)}%`;

    const streakText = document.getElementById('tr-streak-text');
    if (streakText) streakText.textContent = `🔥 ${TR.streak} streak`;

    // Structure
    const structPill = document.getElementById('tr-structure-pill');
    if (structPill) structPill.textContent = `💡 ${q.structure || q.topic}`;

    // Reset feedback and input
    const fb = document.getElementById('tr-feedback-box');
    if (fb) {
      fb.className = 'tr-feedback-box';
      fb.style.display = 'none';
    }

    const input = document.getElementById('tr-input');
    if (input) {
      input.value = '';
      input.disabled = false;
      input.focus();
    }

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
    const inputArea = document.getElementById('tr-input-area');
    const wordBank = document.getElementById('tr-word-bank');

    TR.selectedTokens = [];

    if (TR.currentMode === 'vi_zh') {
      // Vietnamese -> Chinese
      if (promptLabel) promptLabel.textContent = 'Dịch câu sau sang tiếng Trung:';
      if (promptText) {
        promptText.style.display = 'block';
        promptText.textContent = q.vi;
      }
      if (zhDisplay) zhDisplay.style.display = 'none';
      if (pyDisplay) pyDisplay.style.display = 'none';
      if (audioBtn) audioBtn.style.display = 'none';
      if (inputArea) inputArea.style.display = 'block';

      // Build word bank chips
      if (wordBank) {
        wordBank.innerHTML = '';
        // Tokenize target Chinese sentence into chunks/characters + distractors
        const targetTokens = chunkChinese(q.zh);
        const distractors = ['的', '了', '很', '在', '不', '是', '有', '去', '他', '我'].slice(0, 3);
        const allTokens = [...targetTokens, ...distractors].sort(() => 0.5 - Math.random());

        allTokens.forEach((token, idx) => {
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
          wordBank.appendChild(chip);
        });
      }
    } else if (TR.currentMode === 'zh_vi') {
      // Chinese -> Vietnamese
      if (promptLabel) promptLabel.textContent = 'Dịch câu sau sang tiếng Việt:';
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
      if (inputArea) inputArea.style.display = 'block';
      if (wordBank) wordBank.innerHTML = '';

      // Auto play speech gently
      speakChinese(q.zh);
    } else if (TR.currentMode === 'flashcard') {
      // Dual-sided interactive flashcard
      if (promptLabel) promptLabel.textContent = 'Thẻ lật đối chiếu song ngữ:';
      if (promptText) {
        promptText.style.display = 'block';
        promptText.textContent = q.vi;
      }
      if (zhDisplay) {
        zhDisplay.style.display = 'block';
        zhDisplay.textContent = '👉 Chạm "Kiểm tra" để lật xem đáp án';
      }
      if (pyDisplay) pyDisplay.style.display = 'none';
      if (audioBtn) audioBtn.style.display = 'none';
      if (inputArea) inputArea.style.display = 'none';
    }
  }

  // Chunk Chinese sentence into natural 1-2 character tokens
  function chunkChinese(text) {
    const clean = text.replace(/[\s\.,!\?，。！？、]/g, '');
    const tokens = [];
    let i = 0;
    while (i < clean.length) {
      if (i + 1 < clean.length && Math.random() > 0.4) {
        tokens.push(clean.slice(i, i + 2));
        i += 2;
      } else {
        tokens.push(clean[i]);
        i += 1;
      }
    }
    return tokens;
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
      const normUser = normalizeStr(userVal);
      const normTarget = normalizeStr(q.zh);
      isCorrect = normUser === normTarget;
    } else if (TR.currentMode === 'zh_vi') {
      const normUser = normalizeStr(userVal);
      const normTarget = normalizeStr(q.vi);
      // Allow partial match if user answered core phrase
      isCorrect = normUser === normTarget || (normUser.length >= 3 && normTarget.includes(normUser));
    } else {
      isCorrect = true; // Flashcard mode auto flips
    }

    // Record session result
    TR.sessionResults.push({
      ...q,
      userAnswer: userVal,
      isCorrect: isCorrect
    });

    if (isCorrect) {
      TR.streak++;
      triggerXpGain(10);
    } else {
      TR.streak = 0;
    }

    // Play Chinese audio upon check
    speakChinese(q.zh);

    // Show feedback
    const fb = document.getElementById('tr-feedback-box');
    const fbTitle = document.getElementById('tr-feedback-title');
    const revealZh = document.getElementById('tr-reveal-zh');
    const revealPy = document.getElementById('tr-reveal-pinyin');

    if (fb && fbTitle && revealZh && revealPy) {
      fb.style.display = 'block';
      if (isCorrect) {
        fb.className = 'tr-feedback-box correct';
        fbTitle.textContent = '🎉 Chính xác! Bạn làm rất tốt!';
      } else {
        fb.className = 'tr-feedback-box incorrect';
        fbTitle.textContent = '❌ Chưa hoàn toàn chính xác';
      }
      revealZh.textContent = q.zh;
      revealPy.textContent = q.pinyin;
    }

    if (input) input.disabled = true;

    // Turn button into 'Next'
    checkBtn.textContent = 'Tiếp theo ➔';
    checkBtn.dataset.state = 'next';
    checkBtn.focus();
  }

  // Give user XP via window.GH.progress if present
  function triggerXpGain(amount) {
    if (window.GH?.progress?.addXP) {
      window.GH.progress.addXP(amount);
    }
    if (window.GH?.streak?.tick) {
      window.GH.streak.tick();
    }
  }

  // Show Session Summary
  function showSummary() {
    const card = document.getElementById('tr-card-view');
    const summary = document.getElementById('tr-summary-view');
    if (card) card.style.display = 'none';
    if (!summary) return;

    summary.classList.add('active');

    const total = TR.sessionResults.length;
    const correctCount = TR.sessionResults.filter(r => r.isCorrect).length;
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const xpGained = correctCount * 10;

    const sumCorrect = document.getElementById('tr-sum-correct');
    const sumAccuracy = document.getElementById('tr-sum-accuracy');
    const sumXp = document.getElementById('tr-sum-xp');

    if (sumCorrect) sumCorrect.textContent = `${correctCount} / ${total}`;
    if (sumAccuracy) sumAccuracy.textContent = `${accuracy}%`;
    if (sumXp) sumXp.textContent = `+${xpGained} XP`;
  }

  // Open the full review modal with all details
  function openReviewModal(items, title = 'Xem Lại Đáp Án') {
    const modal = document.getElementById('tr-review-modal');
    const list = document.getElementById('tr-review-list');
    const headerTitle = modal?.querySelector('.tr-review-header h3');

    if (!modal || !list) return;

    if (headerTitle) {
      headerTitle.innerHTML = `<span>📋</span> ${title} (${items.length} câu)`;
    }

    list.innerHTML = items.map((item, idx) => {
      const hasStatus = item.userAnswer !== undefined;
      const statusHtml = hasStatus
        ? `<span class="tr-item-status ${item.isCorrect ? 'correct' : 'wrong'}">${item.isCorrect ? '✓ Đúng' : '✗ Sai'}</span>`
        : '';

      const userAnsHtml = hasStatus && item.userAnswer
        ? `<div class="tr-user-answer-box ${item.isCorrect ? 'correct' : 'wrong'}">
             <b>Câu bạn trả lời:</b> ${escapeHtml(item.userAnswer)}
           </div>`
        : '';

      return `
        <div class="tr-review-item">
          <div class="tr-item-top">
            <span class="tr-item-idx">Câu ${idx + 1} • HSK ${item.hsk}</span>
            ${statusHtml}
          </div>
          <div class="tr-item-vi">${escapeHtml(item.vi)}</div>
          <div class="tr-item-zh">
            ${escapeHtml(item.zh)}
            <button type="button" class="tr-audio-btn" style="width:30px;height:30px;margin:0;" onclick="window.GH_Translation.speak('${escapeJs(item.zh)}')">
              🔊
            </button>
          </div>
          <div class="tr-item-pinyin">${escapeHtml(item.pinyin)}</div>
          <span class="tr-item-struct">📌 ${escapeHtml(item.structure || item.topic)}</span>
          ${userAnsHtml}
        </div>
      `;
    }).join('');

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function escapeJs(str) {
    if (!str) return '';
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
  }

  TR.init = init;
  TR.speak = speakChinese;
  TR.openReviewModal = openReviewModal;

  // Auto mount when DOM is ready or when switched to mode
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  // Hook into switchMode
  window.addEventListener('load', () => {
    const origSwitch = window.switchMode;
    window.switchMode = function(mode) {
      if (mode === 'translation') {
        document.querySelectorAll('main > section').forEach(s => s.classList.remove('active'));
        const el = document.getElementById('translation-mode');
        if (el) {
          el.classList.add('active');
          init();
        }
        return;
      }
      if (typeof origSwitch === 'function') {
        origSwitch.apply(this, arguments);
      }
    };
  });
})();
