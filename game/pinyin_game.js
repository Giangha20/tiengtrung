/**
 * pinyin_game.js - Game Gõ Pinyin Phi Tiêu (Pinyin Dart Panda) - Bản 2.0
 * Tốc độ rơi thư thái, dễ gõ trên cả máy tính lẫn điện thoại.
 * Hỗ trợ chọn tốc độ (Chậm / Vừa / Nhanh), gõ thông minh không dấu / có dấu / có số tone.
 * Gấu trúc ninja thật ném phi tiêu nổ tung chữ khi gõ đúng!
 */
(() => {
  const GH = window.GH = window.GH || {};

  const SPEED_PRESETS = {
    slow: { base: 0.38, label: '🐢 Chậm' },
    medium: { base: 0.58, label: '🚶 Vừa' },
    fast: { base: 0.85, label: '🏃 Nhanh' }
  };

  const STATE = {
    active: false,
    level: '1',
    speedMode: 'slow',
    score: 0,
    combo: 0,
    maxCombo: 0,
    lives: 3,
    wordsCleared: 0,
    currentWord: null,
    targetY: 0,
    fallSpeed: 0.38, // Pixels per frame (slower, relaxed pace!)
    animFrameId: null,
    wordPool: [],
    missedWords: [],
    isProcessingMatch: false,
    lastCompletedPinyin: '',
    lastCompletedWord: ''
  };

  /**
   * Super-clean Pinyin Normalizer
   * Handles: tone marks, spaces, hyphens, tone numbers, uppercase
   * e.g. "píngguǒ" -> "pingguo", "nǐ hǎo" -> "nihao", "ni3 hao3" -> "nihao"
   */
  function cleanPinyin(str) {
    return String(str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove tone diacritics
      .replace(/ü/g, 'v')
      .replace(/[0-9]/g, '')           // remove tone numbers
      .replace(/[\s\-_'"]/g, '')       // remove spaces, hyphens, apostrophes
      .replace(/[^a-z]/g, '');
  }

  // Get words for selected HSK level
  function getLevelWords(lvl) {
    const list = window.hskData?.[lvl] || [];
    if (Array.isArray(list) && list.length) {
      return [...list].sort(() => Math.random() - 0.5);
    }
    return [
      { word: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào' },
      { word: '谢谢', pinyin: 'xièxie', meaning: 'cảm ơn' },
      { word: '再见', pinyin: 'zàijiàn', meaning: 'tạm biệt' },
      { word: '苹果', pinyin: 'píngguǒ', meaning: 'quả táo' },
      { word: '吃', pinyin: 'chī', meaning: 'ăn' },
      { word: '喝', pinyin: 'hē', meaning: 'uống' },
      { word: '茶', pinyin: 'chá', meaning: 'trà' },
      { word: '水', pinyin: 'shuǐ', meaning: 'nước' },
      { word: '学校', pinyin: 'xuéxiào', meaning: 'trường học' },
      { word: '老师', pinyin: 'lǎoshī', meaning: 'thầy cô' }
    ];
  }

  function initPinyinGame(container, hskLevel = '1', speedMode = 'slow') {
    STATE.level = String(hskLevel || '1');
    STATE.speedMode = speedMode in SPEED_PRESETS ? speedMode : 'slow';
    STATE.score = 0;
    STATE.combo = 0;
    STATE.maxCombo = 0;
    STATE.lives = 3;
    STATE.wordsCleared = 0;
    STATE.missedWords = [];
    STATE.isProcessingMatch = false;
    STATE.lastCompletedPinyin = '';
    STATE.lastCompletedWord = '';

    // Apply base speed (slower by default per user request)
    const base = SPEED_PRESETS[STATE.speedMode].base;
    STATE.fallSpeed = base;
    STATE.wordPool = getLevelWords(STATE.level);

    renderGameUi(container);
    bindEvents();
    spawnNextWord();
    startGameLoop();
  }

  function renderGameUi(container) {
    container.innerHTML = `
      <div class="panda-game-wrap" id="pinyin-game-arena">
        <!-- Top HUD -->
        <div class="panda-game-hud">
          <div class="hud-left">
            <button type="button" class="game-btn-icon" id="pg-btn-back" title="Về sảnh trò chơi">◀ Sảnh</button>
            <div class="hud-pill hud-level" title="Chọn cấp độ HSK">
              <span class="hud-label">HSK:</span>
              <select id="pg-level-select" class="hud-select">
                <option value="1" ${STATE.level === '1' ? 'selected' : ''}>HSK 1</option>
                <option value="2" ${STATE.level === '2' ? 'selected' : ''}>HSK 2</option>
                <option value="3" ${STATE.level === '3' ? 'selected' : ''}>HSK 3</option>
                <option value="4" ${STATE.level === '4' ? 'selected' : ''}>HSK 4</option>
                <option value="5" ${STATE.level === '5' ? 'selected' : ''}>HSK 5</option>
                <option value="6" ${STATE.level === '6' ? 'selected' : ''}>HSK 6</option>
              </select>
            </div>
            <!-- Speed Control -->
            <div class="hud-pill hud-speed" title="Tốc độ rơi chữ">
              <span class="hud-label">Tốc độ:</span>
              <select id="pg-speed-select" class="hud-select">
                <option value="slow" ${STATE.speedMode === 'slow' ? 'selected' : ''}>🐢 Chậm</option>
                <option value="medium" ${STATE.speedMode === 'medium' ? 'selected' : ''}>🚶 Vừa</option>
                <option value="fast" ${STATE.speedMode === 'fast' ? 'selected' : ''}>🏃 Nhanh</option>
              </select>
            </div>
            <div class="hud-pill hud-lives" id="pg-lives" title="Số mạng còn lại">
              ❤️❤️❤️
            </div>
          </div>

          <div class="hud-center">
            <div class="hud-score-board">
              <span class="hud-score-label">ĐIỂM</span>
              <span class="hud-score-val" id="pg-score">0</span>
            </div>
            <div class="hud-combo-badge" id="pg-combo" style="display:none;">
              Combo x<span id="pg-combo-val">1</span>! 🔥
            </div>
          </div>

          <div class="hud-right">
            <button type="button" class="game-btn-icon" id="pg-btn-mute" title="Bật/Tắt âm thanh">🔊</button>
            <button type="button" class="game-btn-icon" id="pg-btn-restart" title="Chơi lại từ đầu">🔄</button>
          </div>
        </div>

        <!-- Main Falling Arena -->
        <div class="panda-falling-stage" id="pg-stage">
          <!-- Sky / Background elements -->
          <div class="stage-scenery">
            <div class="bamboo-stalk bamboo-left"></div>
            <div class="bamboo-stalk bamboo-right"></div>
            <div class="floating-clouds"></div>
          </div>

          <!-- Falling Word Target -->
          <div class="falling-target-card" id="pg-target-card" style="display:none;">
            <div class="target-lantern-hanger">🏮</div>
            <div class="target-hanzi" id="pg-target-hanzi">--</div>
            <div class="target-pinyin-guide" id="pg-target-pinyin">
              <span class="typed-part" id="pg-typed-part"></span><span class="untyped-part" id="pg-untyped-part">--</span>
            </div>
            <div class="target-meaning" id="pg-target-meaning">--</div>
          </div>

          <!-- Ground Baseline Barrier (Nếu chữ rơi chạm đây sẽ mất mạng) -->
          <div class="stage-ground-barrier">
            <div class="barrier-warning-line"></div>
            <div class="ground-bamboo-fence"></div>
          </div>

          <!-- Panda Ninja Character Standing on Ground -->
          <div class="ninja-panda-character" id="pg-panda-char">
            ${GH.PandaArt?.getPandaSvg('idle') || '<div class="panda-fallback">🐼</div>'}
          </div>
        </div>

        <!-- Player Input Dock (Bottom) -->
        <div class="panda-input-dock">
          <div class="input-wrapper">
            <input type="text" id="pg-user-input" class="pinyin-typing-input" 
              placeholder="Gõ Pinyin (vd: nihao, pingguo) rồi chữ sẽ nổ..." 
              autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
            <button type="button" class="input-clear-btn" id="pg-btn-clear" title="Xóa gõ lại">✕</button>
          </div>
          <div class="input-hint">
            💡 <b>Mẹo:</b> Gõ Pinyin thường không cần dấu (vd: <code>nihao</code>, <code>xiexie</code>) là Gấu Trúc sẽ phóng phi tiêu ngay!
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const input = document.getElementById('pg-user-input');
    if (input) {
      input.focus();
      input.addEventListener('input', handleUserInput);
      input.addEventListener('compositionend', () => {
        handleUserInput({ target: input });
      });
      // Xử lý khi nhấn dấu cách: nếu từ hiện tại đã khớp thì chặn chèn dấu cách và kích nổ ngay
      input.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.code === 'Space' || e.keyCode === 32) {
          const val = (input.value || '').trim();
          if (checkMatch(val)) {
            e.preventDefault();
            STATE.isProcessingMatch = true;
            onWordTypedSuccess();
          }
        }
      });
      // Auto focus input when clicking stage on mobile / tablet
      document.getElementById('pg-stage')?.addEventListener('click', () => {
        if (!input.readOnly) input.focus();
      });
    }

    document.getElementById('pg-btn-clear')?.addEventListener('click', () => {
      if (input) {
        forceWipeInput(input);
        setTimeout(() => {
          if (input) {
            input.value = '';
            input.focus();
          }
        }, 30);
      }
    });

    document.getElementById('pg-level-select')?.addEventListener('change', (e) => {
      stopGameLoop();
      initPinyinGame(document.getElementById('game-mode'), e.target.value, STATE.speedMode);
    });

    document.getElementById('pg-speed-select')?.addEventListener('change', (e) => {
      STATE.speedMode = e.target.value;
      const base = SPEED_PRESETS[STATE.speedMode].base;
      STATE.fallSpeed = base;
    });

    document.getElementById('pg-btn-restart')?.addEventListener('click', () => {
      stopGameLoop();
      initPinyinGame(document.getElementById('game-mode'), STATE.level, STATE.speedMode);
    });

    document.getElementById('pg-btn-mute')?.addEventListener('click', (e) => {
      const isMuted = !GH.PandaSFX?.isMuted();
      GH.PandaSFX?.setMuted(isMuted);
      e.currentTarget.textContent = isMuted ? '🔇' : '🔊';
    });

    document.getElementById('pg-btn-back')?.addEventListener('click', () => {
      stopGameLoop();
      if (window.GH_GameHub?.renderHub) {
        window.GH_GameHub.renderHub(document.getElementById('game-mode'));
      }
    });
  }

  function spawnNextWord() {
    if (!STATE.active && STATE.lives <= 0) return;

    if (!STATE.wordPool.length) {
      STATE.wordPool = getLevelWords(STATE.level);
    }
    const item = STATE.wordPool.pop();
    STATE.currentWord = item;
    STATE.isProcessingMatch = false;

    const card = document.getElementById('pg-target-card');
    const hanziEl = document.getElementById('pg-target-hanzi');
    const meaningEl = document.getElementById('pg-target-meaning');
    const input = document.getElementById('pg-user-input');

    if (!card || !hanziEl || !item) return;

    hanziEl.textContent = item.word || '';
    meaningEl.textContent = item.meaning || '';
    updateTypingPreview('');

    // Reset input completely - pristine blank slate for new word
    if (input) {
      forceWipeInput(input);
      setTimeout(() => {
        if (input && STATE.active) {
          input.value = '';
          input.defaultValue = '';
          input.classList.remove('has-error');
          input.focus();
        }
      }, 40);
    }

    // Set starting position at top with random horizontal offset
    const stage = document.getElementById('pg-stage');
    const stageWidth = stage ? stage.clientWidth : 400;
    const cardWidth = 190;
    const minX = 18;
    const maxX = Math.max(minX, stageWidth - cardWidth - 18);
    const randomX = minX + Math.random() * (maxX - minX);

    STATE.targetY = 10;
    card.style.left = `${randomX}px`;
    card.style.top = `${STATE.targetY}px`;
    card.style.display = 'flex';
    card.classList.remove('target-exploding', 'target-danger');

    // Reset Panda to Idle state
    setPandaState('idle');
  }

  function updateTypingPreview(userVal) {
    const cleanUser = cleanPinyin(userVal);
    const cleanTarget = cleanPinyin(STATE.currentWord?.pinyin || '');
    const rawTarget = STATE.currentWord?.pinyin || '';
    const input = document.getElementById('pg-user-input');

    const typedPart = document.getElementById('pg-typed-part');
    const untypedPart = document.getElementById('pg-untyped-part');

    if (!typedPart || !untypedPart) return;

    if (cleanTarget.startsWith(cleanUser) && cleanUser.length > 0) {
      typedPart.textContent = rawTarget.slice(0, cleanUser.length);
      untypedPart.textContent = rawTarget.slice(cleanUser.length);
      typedPart.style.color = '#10b981'; // Green matched
      if (input) input.classList.remove('has-error');
    } else if (cleanUser.length > 0 && !cleanTarget.startsWith(cleanUser)) {
      typedPart.textContent = '';
      untypedPart.textContent = rawTarget;
      typedPart.style.color = '';
      if (input) input.classList.add('has-error');
    } else {
      typedPart.textContent = '';
      untypedPart.textContent = rawTarget;
      typedPart.style.color = '';
      if (input) input.classList.remove('has-error');
    }
  }

  function forceWipeInput(input) {
    if (!input) return;
    input.value = '';
    input.defaultValue = '';
    try { input.blur(); } catch (e) {}
    try { input.setSelectionRange(0, 0); } catch (e) {}
    input.value = '';
    setTimeout(() => { if (input) { input.value = ''; input.defaultValue = ''; } }, 0);
    setTimeout(() => { if (input) { input.value = ''; input.defaultValue = ''; } }, 30);
    setTimeout(() => { if (input) { input.value = ''; input.defaultValue = ''; } }, 80);
    setTimeout(() => { if (input) { input.value = ''; input.defaultValue = ''; } }, 150);
  }

  function checkMatch(val) {
    if (!STATE.active || !STATE.currentWord) return false;
    const cleanUser = cleanPinyin(val);
    const cleanTarget = cleanPinyin(STATE.currentWord.pinyin);
    const targetWord = (STATE.currentWord.word || '').trim();

    const isPinyinMatch = (cleanUser === cleanTarget && cleanTarget.length > 0) ||
                          (cleanUser.length >= cleanTarget.length && cleanTarget.length > 0 && cleanUser.endsWith(cleanTarget));

    const isHanziMatch = (targetWord.length > 0 && val.trim() === targetWord) ||
                         (targetWord.length > 0 && val.trim().endsWith(targetWord));

    return isPinyinMatch || isHanziMatch;
  }

  function handleUserInput(e) {
    if (!STATE.active || !STATE.currentWord) return;

    const input = e.target;

    // Trong lúc phi tiêu đang bay thì lập tức xóa sạch input
    if (STATE.isProcessingMatch) {
      forceWipeInput(input);
      return;
    }

    let val = input.value || '';

    // Nếu người dùng bấm phím cách khi ô trống hoặc chỉ có dấu cách -> xóa sạch ngay lập tức
    if (!val.trim()) {
      input.value = '';
      updateTypingPreview('');
      return;
    }

    const targetWord = (STATE.currentWord.word || '').trim();

    // KIỂM TRA CHỮ HÁN ĐỌNG LẠI (như trong ảnh lỗi: "游泳隐形心"):
    // Nếu trong ô nhập có ký tự chữ Hán mà KHÔNG CHỨA từ mục tiêu hiện tại (targetWord):
    // Đây 100% là chữ đọng lại của các từ trước -> XÓA SẠCH NGAY LẬP TỨC!
    if (/[\u4e00-\u9fa5]/.test(val) && targetWord && !val.includes(targetWord)) {
      forceWipeInput(input);
      updateTypingPreview('');
      return;
    }

    // Nếu có chứa targetWord ở cuối (vd: "游泳隐形心送"):
    if (targetWord && val.trim().endsWith(targetWord)) {
      STATE.isProcessingMatch = true;
      onWordTypedSuccess();
      return;
    }

    // 1. Dạng bàn phím Trung (Hán tự): tự động cắt bỏ nếu bàn phím ảo còn dính từ cũ (vd: "你好苹果"):
    if (STATE.lastCompletedWord && val.startsWith(STATE.lastCompletedWord) && val.length > STATE.lastCompletedWord.length) {
      val = val.slice(STATE.lastCompletedWord.length).trim();
      input.value = val;
    } else if (STATE.lastCompletedWord && val === STATE.lastCompletedWord) {
      forceWipeInput(input);
      updateTypingPreview('');
      return;
    }

    // 2. Dạng bàn phím Anh (Pinyin): tự động cắt bỏ nếu còn dính từ cũ (vd: "nihaopingguo"):
    let cleanUser = cleanPinyin(val);
    const cleanTarget = cleanPinyin(STATE.currentWord.pinyin);

    if (STATE.lastCompletedPinyin && cleanUser.startsWith(STATE.lastCompletedPinyin) && cleanUser.length > STATE.lastCompletedPinyin.length) {
      val = val.slice(STATE.lastCompletedPinyin.length).trim();
      input.value = val;
      cleanUser = cleanPinyin(val);
    } else if (STATE.lastCompletedPinyin && cleanUser === STATE.lastCompletedPinyin) {
      forceWipeInput(input);
      updateTypingPreview('');
      return;
    }

    updateTypingPreview(val);

    if (checkMatch(val)) {
      STATE.isProcessingMatch = true;
      onWordTypedSuccess();
    }
  }

  function onWordTypedSuccess() {
    const card = document.getElementById('pg-target-card');
    const panda = document.getElementById('pg-panda-char');
    const input = document.getElementById('pg-user-input');

    if (!card || !panda) return;

    // Lưu lại cả Hán tự và Pinyin của từ vừa hoàn thành để chống dính cho cả 2 loại bàn phím
    STATE.lastCompletedPinyin = cleanPinyin(STATE.currentWord?.pinyin || '');
    STATE.lastCompletedWord = (STATE.currentWord?.word || '').trim();

    // 1. Panda throws dart
    setPandaState('throw');

    // 2. Tự động xóa sạch chữ triệt để và hủy phiên gõ của dấu cách/IME
    forceWipeInput(input);
    updateTypingPreview('');

    // 3. Launch flying Shuriken projectile
    GH.PandaArt?.throwShuriken(panda, card, () => {
      // Shuriken arrived at target!
      card.classList.add('target-exploding');

      // Pronounce Chinese word with single-voice engine
      if (STATE.currentWord?.word) {
        window.GH_Audio?.play?.(STATE.currentWord.word);
      }

      // Increment Combo and Score
      STATE.combo++;
      if (STATE.combo > STATE.maxCombo) STATE.maxCombo = STATE.combo;
      const pts = 100 * STATE.combo;
      STATE.score += pts;
      STATE.wordsCleared++;

      // Sound chime
      GH.PandaSFX?.playChime?.(STATE.combo);

      // Update HUD
      updateHud();

      // Show Celebrate Panda if combo >= 3
      if (STATE.combo >= 3) {
        setPandaState('celebrate');
      }

      // Hide card and spawn next word after short impact pause
      setTimeout(() => {
        card.style.display = 'none';
        // Gentle, bounded speed scaling so it never gets too fast
        const base = SPEED_PRESETS[STATE.speedMode].base;
        STATE.fallSpeed = Math.min(base * 1.35, STATE.fallSpeed + 0.008);
        spawnNextWord();
      }, 260);
    });
  }

  function onWordMissed() {
    STATE.lives--;
    STATE.combo = 0;
    if (STATE.currentWord) {
      STATE.missedWords.push(STATE.currentWord);
    }

    GH.PandaSFX?.playMiss?.();
    updateHud();

    const card = document.getElementById('pg-target-card');
    if (card) {
      card.classList.add('target-exploding');
      setTimeout(() => {
        card.style.display = 'none';
        if (STATE.lives <= 0) {
          triggerGameOver();
        } else {
          spawnNextWord();
        }
      }, 350);
    } else if (STATE.lives <= 0) {
      triggerGameOver();
    }
  }

  function setPandaState(state) {
    const panda = document.getElementById('pg-panda-char');
    if (!panda) return;
    panda.innerHTML = GH.PandaArt?.getPandaSvg(state) || '<div class="panda-fallback">🐼</div>';
  }

  function updateHud() {
    const scoreEl = document.getElementById('pg-score');
    const comboWrap = document.getElementById('pg-combo');
    const comboVal = document.getElementById('pg-combo-val');
    const livesEl = document.getElementById('pg-lives');

    if (scoreEl) scoreEl.textContent = STATE.score;

    if (comboWrap && comboVal) {
      if (STATE.combo >= 2) {
        comboWrap.style.display = 'inline-flex';
        comboVal.textContent = STATE.combo;
        comboWrap.classList.add('combo-bump');
        setTimeout(() => comboWrap.classList.remove('combo-bump'), 300);
      } else {
        comboWrap.style.display = 'none';
      }
    }

    if (livesEl) {
      livesEl.textContent = '❤️'.repeat(Math.max(0, STATE.lives)) + '🖤'.repeat(Math.max(0, 3 - STATE.lives));
    }
  }

  function startGameLoop() {
    STATE.active = true;
    let lastTime = performance.now();

    function loop(now) {
      if (!STATE.active) return;
      const dt = Math.min(32, now - lastTime) / 16.66; // Normalize to 60fps
      lastTime = now;

      const card = document.getElementById('pg-target-card');
      const stage = document.getElementById('pg-stage');

      if (card && stage && card.style.display !== 'none' && !card.classList.contains('target-exploding')) {
        STATE.targetY += STATE.fallSpeed * dt;
        card.style.top = `${STATE.targetY}px`;

        const barrierY = stage.clientHeight - 95; // Barrier line height
        if (STATE.targetY > barrierY - 60) {
          card.classList.add('target-danger');
        }

        if (STATE.targetY >= barrierY) {
          // Hit the baseline barrier!
          onWordMissed();
        }
      }

      STATE.animFrameId = requestAnimationFrame(loop);
    }

    STATE.animFrameId = requestAnimationFrame(loop);
  }

  function stopGameLoop() {
    STATE.active = false;
    if (STATE.animFrameId) {
      cancelAnimationFrame(STATE.animFrameId);
      STATE.animFrameId = null;
    }
  }

  function triggerGameOver() {
    stopGameLoop();
    GH.PandaSFX?.playGameOver?.();

    // Reward XP to player profile
    const earnedXp = Math.floor(STATE.score / 15);
    if (earnedXp > 0 && GH.progress?.addXp) {
      GH.progress.addXp(earnedXp, 'Chơi game Phi Tiêu Pinyin');
    }

    const modal = document.createElement('div');
    modal.className = 'panda-game-modal';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-emoji">🐼💥</div>
        <h2>Hết Mạng Rồi!</h2>
        <p>Gấu Trúc Ninja đã chiến đấu rất dũng cảm!</p>

        <div class="game-results-box">
          <div class="res-stat">
            <small>ĐIỂM SỐ</small>
            <b>${STATE.score}</b>
          </div>
          <div class="res-stat">
            <small>TỪ ĐÃ NỔ</small>
            <b>${STATE.wordsCleared} từ</b>
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

        ${STATE.missedWords.length ? `
          <div class="missed-words-box">
            <span>Từ cần ghi nhớ lại:</span>
            <div class="missed-tags">
              ${STATE.missedWords.slice(0, 5).map(w => `<span class="tag">${w.word} (${w.pinyin})</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <div class="modal-actions">
          <button type="button" class="game-btn primary" id="pg-modal-retry">🔄 Chơi lại</button>
          <button type="button" class="game-btn secondary" id="pg-modal-hub">🏠 Về Sảnh Game</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#pg-modal-retry')?.addEventListener('click', () => {
      modal.remove();
      initPinyinGame(document.getElementById('game-mode'), STATE.level, STATE.speedMode);
    });

    modal.querySelector('#pg-modal-hub')?.addEventListener('click', () => {
      modal.remove();
      if (window.GH_GameHub?.renderHub) {
        window.GH_GameHub.renderHub(document.getElementById('game-mode'));
      }
    });
  }

  GH.PinyinGame = {
    start: initPinyinGame,
    stop: stopGameLoop
  };
})();
