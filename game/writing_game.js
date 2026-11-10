/**
 * writing_game.js - Game Viết Chữ Hán Phi Tiêu (Hanzi Stroke Panda) - Bản 2.0
 * Thời gian viết thư thái (45 giây/chữ), có nút gợi ý nét và viết lại.
 * Khi viết đúng chữ Hán, Gấu Trúc Ninja phóng phi tiêu nổ tung chữ và đọc phát âm chuẩn!
 */
(() => {
  const GH = window.GH = window.GH || {};

  const STATE = {
    active: false,
    level: '1',
    score: 0,
    combo: 0,
    maxCombo: 0,
    lives: 3,
    wordsCleared: 0,
    currentWord: null,
    currentChar: '',
    writer: null,
    targetY: 0,
    maxTime: 45, // 45 seconds per character - relaxed, comfortable pace
    timeLeft: 45,
    timerInterval: null,
    animFrameId: null,
    wordPool: [],
    missedWords: [],
    isProcessingMatch: false
  };

  function getLevelWords(lvl) {
    const list = window.hskData?.[lvl] || [];
    if (Array.isArray(list) && list.length) {
      return [...list].sort(() => Math.random() - 0.5);
    }
    return [
      { word: '我', pinyin: 'wǒ', meaning: 'tôi, mình' },
      { word: '你', pinyin: 'nǐ', meaning: 'bạn, anh' },
      { word: '好', pinyin: 'hǎo', meaning: 'tốt, khỏe' },
      { word: '大', pinyin: 'dà', meaning: 'to lớn' },
      { word: '小', pinyin: 'xiǎo', meaning: 'nhỏ bé' },
      { word: '人', pinyin: 'rén', meaning: 'con người' },
      { word: '水', pinyin: 'shuǐ', meaning: 'nước' },
      { word: '火', pinyin: 'huǒ', meaning: 'lửa' },
      { word: '山', pinyin: 'shān', meaning: 'ngọn núi' },
      { word: '月', pinyin: 'yuè', meaning: 'mặt trăng, tháng' }
    ];
  }

  function initWritingGame(container, hskLevel = '1') {
    STATE.level = String(hskLevel || '1');
    STATE.score = 0;
    STATE.combo = 0;
    STATE.maxCombo = 0;
    STATE.lives = 3;
    STATE.wordsCleared = 0;
    STATE.missedWords = [];
    STATE.isProcessingMatch = false;
    // Generous time: 45 seconds for HSK1-2, 40s for HSK3-4, 35s for HSK5-6
    STATE.maxTime = Math.max(30, 48 - (Number(STATE.level) - 1) * 3);
    STATE.wordPool = getLevelWords(STATE.level);

    renderGameUi(container);
    bindEvents();
    spawnNextCharacter();
  }

  function renderGameUi(container) {
    container.innerHTML = `
      <div class="panda-game-wrap writing-mode-wrap" id="writing-game-arena">
        <!-- Top HUD -->
        <div class="panda-game-hud">
          <div class="hud-left">
            <button type="button" class="game-btn-icon" id="wg-btn-back" title="Về sảnh trò chơi">◀ Sảnh</button>
            <div class="hud-pill hud-level" title="Chọn cấp độ HSK">
              <span class="hud-label">HSK:</span>
              <select id="wg-level-select" class="hud-select">
                <option value="1" ${STATE.level === '1' ? 'selected' : ''}>HSK 1</option>
                <option value="2" ${STATE.level === '2' ? 'selected' : ''}>HSK 2</option>
                <option value="3" ${STATE.level === '3' ? 'selected' : ''}>HSK 3</option>
                <option value="4" ${STATE.level === '4' ? 'selected' : ''}>HSK 4</option>
                <option value="5" ${STATE.level === '5' ? 'selected' : ''}>HSK 5</option>
                <option value="6" ${STATE.level === '6' ? 'selected' : ''}>HSK 6</option>
              </select>
            </div>
            <div class="hud-pill hud-lives" id="wg-lives" title="Số mạng còn lại">
              ❤️❤️❤️
            </div>
          </div>

          <div class="hud-center">
            <div class="hud-score-board">
              <span class="hud-score-label">ĐIỂM</span>
              <span class="hud-score-val" id="wg-score">0</span>
            </div>
            <div class="hud-combo-badge" id="wg-combo" style="display:none;">
              Combo x<span id="wg-combo-val">1</span>! 🔥
            </div>
          </div>

          <div class="hud-right">
            <button type="button" class="game-btn-icon" id="wg-btn-mute" title="Bật/Tắt âm thanh">🔊</button>
            <button type="button" class="game-btn-icon" id="wg-btn-restart" title="Chơi lại">🔄</button>
          </div>
        </div>

        <!-- Middle Arena: Split into Left (Target & Panda) and Right (Mǐzìgé Canvas) -->
        <div class="writing-arena-stage">
          <!-- Left: Falling Target & Ninja Panda -->
          <div class="writing-stage-left" id="wg-stage-left">
            <!-- Falling Target Card -->
            <div class="falling-target-card writing-target" id="wg-target-card">
              <div class="target-lantern-hanger">🎋</div>
              <div class="target-hanzi" id="wg-target-hanzi">--</div>
              <div class="target-pinyin" id="wg-target-pinyin">--</div>
              <div class="target-meaning" id="wg-target-meaning">--</div>

              <!-- Time Remaining Bar -->
              <div class="target-time-wrap" title="Thời gian còn lại">
                <div class="target-time-fill" id="wg-time-fill"></div>
              </div>
            </div>

            <!-- Ground Warning Line -->
            <div class="stage-ground-barrier">
              <div class="barrier-warning-line"></div>
            </div>

            <!-- Ninja Panda Character -->
            <div class="ninja-panda-character" id="wg-panda-char">
              ${GH.PandaArt?.getPandaSvg('idle') || '<div class="panda-fallback">🐼</div>'}
            </div>
          </div>

          <!-- Right: Interactive Stroke Canvas -->
          <div class="writing-stage-right">
            <div class="canvas-dojo-panel">
              <div class="dojo-panel-header">
                <span class="dojo-title">✍️ Tập Viết Nét Chữ Hán</span>
                <span class="dojo-stroke-badge" id="wg-stroke-status">Hãy viết nét đầu tiên...</span>
              </div>

              <!-- Mǐzìgé Box Container -->
              <div class="mizige-game-box-wrap" id="wg-mizige-wrap"></div>

              <!-- Canvas Action Controls -->
              <div class="dojo-actions">
                <button type="button" class="game-action-btn hint" id="wg-btn-hint">
                  💡 Gợi ý nét
                </button>
                <button type="button" class="game-action-btn" id="wg-btn-clear">
                  🔁 Viết lại nét này
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    document.getElementById('wg-btn-hint')?.addEventListener('click', () => {
      if (STATE.writer) {
        STATE.writer.quiz(); // HanziWriter flashes hint for current active stroke
      }
    });

    document.getElementById('wg-btn-clear')?.addEventListener('click', () => {
      if (STATE.currentChar) {
        startStrokeQuiz(STATE.currentChar);
      }
    });

    document.getElementById('wg-level-select')?.addEventListener('change', (e) => {
      cleanup();
      initWritingGame(document.getElementById('game-mode'), e.target.value);
    });

    document.getElementById('wg-btn-restart')?.addEventListener('click', () => {
      cleanup();
      initWritingGame(document.getElementById('game-mode'), STATE.level);
    });

    document.getElementById('wg-btn-mute')?.addEventListener('click', (e) => {
      const isMuted = !GH.PandaSFX?.isMuted();
      GH.PandaSFX?.setMuted(isMuted);
      e.currentTarget.textContent = isMuted ? '🔇' : '🔊';
    });

    document.getElementById('wg-btn-back')?.addEventListener('click', () => {
      cleanup();
      if (window.GH_GameHub?.renderHub) {
        window.GH_GameHub.renderHub(document.getElementById('game-mode'));
      }
    });
  }

  function spawnNextCharacter() {
    if (STATE.lives <= 0) return;

    if (!STATE.wordPool.length) {
      STATE.wordPool = getLevelWords(STATE.level);
    }
    const item = STATE.wordPool.pop();
    STATE.currentWord = item;
    STATE.isProcessingMatch = false;

    // Pick Chinese character in word
    const hanziOnly = (item.word || '').replace(/[^\u4e00-\u9fa5]/g, '');
    const char = hanziOnly[0] || '好';
    STATE.currentChar = char;

    const card = document.getElementById('wg-target-card');
    const hanziEl = document.getElementById('wg-target-hanzi');
    const pinyinEl = document.getElementById('wg-target-pinyin');
    const meaningEl = document.getElementById('wg-target-meaning');

    if (hanziEl) hanziEl.textContent = char;
    if (pinyinEl) pinyinEl.textContent = item.pinyin || '';
    if (meaningEl) meaningEl.textContent = item.meaning || '';

    if (card) {
      card.style.display = 'flex';
      card.classList.remove('target-exploding', 'target-danger');
      STATE.targetY = 15;
      card.style.top = `${STATE.targetY}px`;
    }

    // Reset Panda
    setPandaState('idle');

    // Start Mǐzìgé Quiz for this character
    startStrokeQuiz(char);

    // Start Timer & Falling Animation
    startCountdownTimer();
  }

  function startStrokeQuiz(char) {
    const wrap = document.getElementById('wg-mizige-wrap');
    const status = document.getElementById('wg-stroke-status');
    if (!wrap) return;

    wrap.innerHTML = '';
    const isMobile = window.innerWidth <= 600;
    const boxSize = isMobile ? 220 : 260;

    if (typeof HanziWriter === 'undefined') {
      wrap.innerHTML = `<div style="padding:20px;text-align:center;color:#ef4444;">Đang tải bộ nét chữ...</div>`;
      return;
    }

    try {
      const writer = HanziWriter.create('wg-mizige-wrap', char, {
        width: boxSize,
        height: boxSize,
        padding: Math.round(boxSize * 0.08),
        strokeAnimationSpeed: 1.2,
        delayBetweenStrokes: 200,
        strokeColor: '#0f172a',
        radicalColor: '#059669',
        outlineColor: '#cbd5e1',
        highlightColor: '#0284c7',
        drawingColor: '#2563eb',
        drawingWidth: Math.max(5, Math.round(boxSize * 0.075)),
        showOutline: true,
        showCharacter: false // Hidden so player practices from memory
      });

      STATE.writer = writer;

      writer.quiz({
        onCorrectStroke: function(strokeData) {
          if (status) {
            status.textContent = `✅ Nét ${strokeData.strokeNum + 1} chính xác!`;
            status.style.color = '#10b981';
          }
          GH.PandaSFX?.playChime?.(1);
        },
        onMistake: function(strokeData) {
          if (status) {
            status.textContent = `❌ Sai nét! Còn ${strokeData.mistakesOnStroke} lần thử.`;
            status.style.color = '#ef4444';
          }
          GH.PandaSFX?.playMiss?.();
        },
        onComplete: function() {
          if (!STATE.isProcessingMatch) {
            STATE.isProcessingMatch = true;
            onCharacterWrittenSuccess();
          }
        }
      });

      if (status) {
        status.textContent = `Bắt đầu viết chữ "${char}"...`;
        status.style.color = '';
      }
    } catch (e) {
      console.warn('HanziWriter game error:', e);
    }
  }

  function startCountdownTimer() {
    clearInterval(STATE.timerInterval);
    cancelAnimationFrame(STATE.animFrameId);

    STATE.timeLeft = STATE.maxTime;
    const timeFill = document.getElementById('wg-time-fill');
    const card = document.getElementById('wg-target-card');
    const stage = document.getElementById('wg-stage-left');

    const startTime = performance.now();
    const duration = STATE.maxTime * 1000;

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const remainingPct = (1 - progress) * 100;

      if (timeFill) timeFill.style.width = `${remainingPct}%`;

      // Slowly lower card
      if (card && stage && card.style.display !== 'none' && !card.classList.contains('target-exploding')) {
        const maxY = stage.clientHeight - 130;
        STATE.targetY = 15 + progress * (maxY - 15);
        card.style.top = `${STATE.targetY}px`;

        if (progress > 0.78) {
          card.classList.add('target-danger');
        }
      }

      if (progress < 1) {
        STATE.animFrameId = requestAnimationFrame(step);
      } else {
        // Time ran out!
        onCharacterTimeExpired();
      }
    }

    STATE.animFrameId = requestAnimationFrame(step);
  }

  function onCharacterWrittenSuccess() {
    clearInterval(STATE.timerInterval);
    cancelAnimationFrame(STATE.animFrameId);

    const card = document.getElementById('wg-target-card');
    const panda = document.getElementById('wg-panda-char');
    const status = document.getElementById('wg-stroke-status');

    if (status) {
      status.textContent = `🎉 Xuất sắc! Gấu phi tiêu tiêu diệt chữ!`;
      status.style.color = '#059669';
    }

    // 1. Panda throws dart!
    setPandaState('throw');

    // 2. Launch shuriken towards card
    GH.PandaArt?.throwShuriken(panda, card, () => {
      // Impact explosion!
      card.classList.add('target-exploding');

      // Pronounce character
      if (STATE.currentChar) {
        window.GH_Audio?.play?.(STATE.currentChar);
      }

      // Increment score
      STATE.combo++;
      if (STATE.combo > STATE.maxCombo) STATE.maxCombo = STATE.combo;
      const pts = 150 * STATE.combo;
      STATE.score += pts;
      STATE.wordsCleared++;

      GH.PandaSFX?.playChime?.(STATE.combo);
      updateHud();

      if (STATE.combo >= 2) {
        setPandaState('celebrate');
      }

      setTimeout(() => {
        card.style.display = 'none';
        spawnNextCharacter();
      }, 400);
    });
  }

  function onCharacterTimeExpired() {
    STATE.lives--;
    STATE.combo = 0;
    if (STATE.currentWord) {
      STATE.missedWords.push(STATE.currentWord);
    }

    GH.PandaSFX?.playMiss?.();
    updateHud();

    const card = document.getElementById('wg-target-card');
    if (card) {
      card.classList.add('target-exploding');
      setTimeout(() => {
        card.style.display = 'none';
        if (STATE.lives <= 0) {
          triggerGameOver();
        } else {
          spawnNextCharacter();
        }
      }, 350);
    } else if (STATE.lives <= 0) {
      triggerGameOver();
    }
  }

  function setPandaState(state) {
    const panda = document.getElementById('wg-panda-char');
    if (!panda) return;
    panda.innerHTML = GH.PandaArt?.getPandaSvg(state) || '<div class="panda-fallback">🐼</div>';
  }

  function updateHud() {
    const scoreEl = document.getElementById('wg-score');
    const comboWrap = document.getElementById('wg-combo');
    const comboVal = document.getElementById('wg-combo-val');
    const livesEl = document.getElementById('wg-lives');

    if (scoreEl) scoreEl.textContent = STATE.score;

    if (comboWrap && comboVal) {
      if (STATE.combo >= 2) {
        comboWrap.style.display = 'inline-flex';
        comboVal.textContent = STATE.combo;
      } else {
        comboWrap.style.display = 'none';
      }
    }

    if (livesEl) {
      livesEl.textContent = '❤️'.repeat(Math.max(0, STATE.lives)) + '🖤'.repeat(Math.max(0, 3 - STATE.lives));
    }
  }

  function cleanup() {
    clearInterval(STATE.timerInterval);
    if (STATE.animFrameId) {
      cancelAnimationFrame(STATE.animFrameId);
      STATE.animFrameId = null;
    }
    if (STATE.writer) {
      try { STATE.writer.cancelQuiz(); } catch (e) {}
      STATE.writer = null;
    }
  }

  function triggerGameOver() {
    cleanup();
    GH.PandaSFX?.playGameOver?.();

    const earnedXp = Math.floor(STATE.score / 12);
    if (earnedXp > 0 && GH.progress?.addXp) {
      GH.progress.addXp(earnedXp, 'Chơi game Luyện viết Phi Tiêu');
    }

    const modal = document.createElement('div');
    modal.className = 'panda-game-modal';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-emoji">✍️🐼💥</div>
        <h2>Hết Lượt Tập Viết!</h2>
        <p>Bạn đã tập viết rất nỗ lực cùng Gấu Trúc Ninja!</p>

        <div class="game-results-box">
          <div class="res-stat">
            <small>ĐIỂM SỐ</small>
            <b>${STATE.score}</b>
          </div>
          <div class="res-stat">
            <small>CHỮ ĐÃ HOÀN THÀNH</small>
            <b>${STATE.wordsCleared} chữ</b>
          </div>
          <div class="res-stat">
            <small>MAX COMBO</small>
            <b>x${STATE.maxCombo}</b>
          </div>
          <div class="res-stat">
            <small>XP NHẬN ĐƯỢC</small>
            <b style="color:#059669;">+${earnedXp} XP</b>
          </div>
        </div>

        <div class="modal-actions">
          <button type="button" class="game-btn primary" id="wg-modal-retry">🔄 Luyện lại</button>
          <button type="button" class="game-btn secondary" id="wg-modal-hub">🏠 Về Sảnh Game</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#wg-modal-retry')?.addEventListener('click', () => {
      modal.remove();
      initWritingGame(document.getElementById('game-mode'), STATE.level);
    });

    modal.querySelector('#wg-modal-hub')?.addEventListener('click', () => {
      modal.remove();
      if (window.GH_GameHub?.renderHub) {
        window.GH_GameHub.renderHub(document.getElementById('game-mode'));
      }
    });
  }

  GH.WritingGame = {
    start: initWritingGame,
    stop: cleanup
  };
})();
