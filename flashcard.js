/**
 * Modern Crystal-Clear 3D Flashcard Engine
 * - Crisp, non-blurry typography with hardware accelerated rendering
 * - True 60fps/120fps 3D rotation flip effect without DOM reconstruction
 * - Synthesized real-time Web Audio card flick/whoosh sound
 * - Haptic vibration feedback on mobile touch
 * - Swipe gestures (Left: Chưa nhớ, Right: Đã thuộc, Tap: Lật thẻ)
 * - Verified accurate image integration
 * - Unified streak integration on review actions
 */
(() => {
  const GH = window.GH = window.GH || {};
  let list = [];
  let i = 0;
  let flipped = false;
  let isNavigating = false;

  const esc = v => GH.utils?.escapeHtml ? GH.utils.escapeHtml(v) : String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  
  function getWords() {
    const level = document.getElementById('hsk-level')?.value || window.currentLevel || '1';
    const d = window.hskData?.[level] || [];
    return Array.isArray(d) ? d : [];
  }

  function uniqueWords(items) {
    const seen = new Set();
    return (Array.isArray(items) ? items : []).filter(w => {
      if (!w || typeof w !== 'object') return false;
      const key = String(w.word || w.hanzi || w.chinese || '').trim();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function shuffle(items) {
    const a = items.slice();
    for (let n = a.length - 1; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      [a[n], a[j]] = [a[j], a[n]];
    }
    return a;
  }

  function start(items = getWords()) {
    list = shuffle(uniqueWords(items));
    i = 0;
    flipped = false;
    isNavigating = false;
    render();
  }

  function refreshForLevel(level) {
    const wanted = String(level || document.getElementById('hsk-level')?.value || '1');
    const pool = Array.isArray(window.hskData?.[wanted]) ? window.hskData[wanted] : [];
    start(pool);
  }

  function startReview() {
    const dueIds = GH.progress?.dueWords?.() || [];
    const pool = getWords();
    const dueSet = new Set(dueIds.map(String));
    const review = pool.filter(w => dueSet.has(String(w?.word || w?.hanzi || '')));
    start(review);
    if (!review.length) {
      const host = document.getElementById('gh-flashcard-panel');
      if (host) {
        host.innerHTML = `
          <div class="gh-fc-empty">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">🎉</div>
            <strong>Tuyệt vời! Chưa có từ nào cần ôn lại.</strong>
            <span>Các từ đã học đến hạn ôn tập sẽ tự động xuất hiện ở đây.</span>
          </div>`;
      }
    }
  }

  // Âm thanh lật thẻ Web Audio API tự nhiên, sắc nét
  function playFlipSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!window.__ghFcAudioCtx) {
        window.__ghFcAudioCtx = new AudioCtx();
      }
      const ctx = window.__ghFcAudioCtx;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      const now = ctx.currentTime;
      
      // Tiếng gió lướt của lá bài lật trong không khí (Whoosh noise)
      const bufSize = Math.floor(ctx.sampleRate * 0.085);
      const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let k = 0; k < bufSize; k++) {
        data[k] = (Math.random() * 2 - 1) * Math.exp(-k / (bufSize * 0.32));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buf;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(450, now + 0.075);
      filter.Q.value = 2.2;
      
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.24, now + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      noise.start(now);
      noise.stop(now + 0.085);

      // Tiếng bật thẻ nhẹ (Paper flick snap)
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.05);
      oscGain.gain.setValueAtTime(0.07, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.055);
    } catch (e) {}
  }

  function toggleFlip() {
    flipped = !flipped;
    const card = document.getElementById('gh-active-flashcard');
    if (card) {
      card.classList.add('is-flipping');
      card.classList.toggle('is-flipped', flipped);
      card.setAttribute('aria-expanded', String(flipped));

      // Phản hồi rung haptic trên điện thoại
      try {
        if (navigator.vibrate) navigator.vibrate(12);
      } catch (e) {}

      // Phát âm thanh lật thẻ 3D
      playFlipSound();

      setTimeout(() => {
        card.classList.remove('is-flipping');
      }, 620);
    }
  }

  function renderVisual(w) {
    if (!window.GH?.vocabImages?.resolve) return '';
    const resolved = window.GH.vocabImages.resolve(w.word || w.hanzi, w.meaning, w.pinyin);
    if (!resolved) return '';

    if (resolved.type === 'photo') {
      return `
        <div class="gh-fc-image-container">
          <img src="${resolved.url}" alt="${esc(resolved.caption || w.word)}" class="gh-fc-img" loading="lazy" onerror="this.style.display='none';" />
          <span class="gh-fc-img-tag">${esc(resolved.caption || w.meaning || '')}</span>
        </div>
      `;
    }
    return `
      <div class="gh-fc-grammar-tag">
        <span>${esc(resolved.icon || '🀄')}</span>
        <b>${esc(resolved.badge || 'HSK')}</b>
        <small>${esc(resolved.role || '')}</small>
      </div>
    `;
  }

  function render() {
    const host = document.getElementById('gh-flashcard-panel');
    if (!host) return;

    if (!list.length) {
      host.innerHTML = `
        <div class="gh-fc-empty">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">📚</div>
          <strong>Chưa có dữ liệu Flashcard cho cấp độ này.</strong>
          <span>Vui lòng chọn cấp độ HSK khác từ menu.</span>
        </div>`;
      return;
    }

    if (i >= list.length) i = 0;
    const w = list[i] || {};
    const hanzi = esc(w.word || w.hanzi || '');
    const pinyin = esc(w.pinyin || '');
    const meaning = esc(w.meaning || w.vn || '');
    const visualHtml = renderVisual(w);
    const level = document.getElementById('hsk-level')?.value || '1';

    host.innerHTML = `
      <div class="gh-fc-scene">
        <div class="gh-fc-card ${flipped ? 'is-flipped' : ''}" id="gh-active-flashcard" tabindex="0" role="button" aria-expanded="${flipped}" aria-label="Flashcard ${i + 1}/${list.length}: ${hanzi}">
          <div class="gh-fc-flipper">
            <!-- Mặt trước (Front) -->
            <div class="gh-fc-face gh-fc-front">
              <div class="gh-fc-card-header">
                <span class="gh-fc-level-pill">HSK ${level}</span>
                <span class="gh-fc-counter">${i + 1} / ${list.length}</span>
              </div>

              ${visualHtml}

              <div class="gh-fc-body">
                <div class="gh-fc-hanzi-display">${hanzi}</div>
              </div>

              <div class="gh-fc-footer">
                <button class="gh-fc-speak-btn" type="button" data-speak aria-label="Phát âm chữ Hán"><svg class="ui-icon" aria-hidden="true"><use href="#icon-volume"></use></svg><span>Phát âm</span></button>
                <button class="gh-fc-flip-btn" type="button" data-flip aria-label="Lật thẻ xem đáp án"><svg class="ui-icon gh-fc-flip-svg" aria-hidden="true"><use href="#icon-rotate-3d"></use></svg><span>Lật xem đáp án</span></button>
              </div>
            </div>

            <!-- Mặt sau (Back) -->
            <div class="gh-fc-face gh-fc-back">
              <div class="gh-fc-card-header">
                <span class="gh-fc-level-pill answer">ĐÁP ÁN</span>
                <span class="gh-fc-counter">${i + 1} / ${list.length}</span>
              </div>

              <div class="gh-fc-body back-body">
                <div class="gh-fc-back-meaning">${meaning}</div>
                <div class="gh-fc-back-pinyin">${pinyin}</div>
                <div class="gh-fc-back-hanzi-small">${hanzi}</div>
              </div>

              <div class="gh-fc-footer">
                <button class="gh-fc-speak-btn" type="button" data-speak aria-label="Phát âm chữ Hán"><svg class="ui-icon" aria-hidden="true"><use href="#icon-volume"></use></svg><span>Phát âm</span></button>
                <button class="gh-fc-flip-btn" type="button" data-flip aria-label="Lật thẻ về chữ Hán"><svg class="ui-icon gh-fc-flip-svg" aria-hidden="true"><use href="#icon-rotate-3d"></use></svg><span>Lật về chữ Hán</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nút hành động đánh giá thẻ -->
      <div class="gh-fc-actions-dock">
        <button class="gh-fc-btn gh-fc-btn-again" type="button" data-again aria-label="Chưa nhớ - Ôn lại">
          <span class="gh-fc-btn-icon"><svg class="ui-icon" aria-hidden="true"><use href="#icon-replay"></use></svg></span>
          <div class="gh-fc-btn-text">
            <b>Chưa nhớ</b>
            <small>Ôn lại từ này</small>
          </div>
        </button>
        <button class="gh-fc-btn gh-fc-btn-known" type="button" data-known aria-label="Đã nhớ - Thuộc từ">
          <span class="gh-fc-btn-icon"><svg class="ui-icon" aria-hidden="true"><use href="#icon-check"></use></svg></span>
          <div class="gh-fc-btn-text">
            <b>Đã thuộc</b>
            <small>Từ tiếp theo</small>
          </div>
        </button>
      </div>
    `;

    const card = document.getElementById('gh-active-flashcard');
    if (card) {
      card.onclick = (e) => {
        if (e.target.closest('button')) return;
        e.preventDefault();
        toggleFlip();
      };
      card.onkeydown = (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggleFlip();
        }
      };

      // Cử chỉ vuốt lướt thẻ trên màn hình cảm ứng di động
      let touchStartX = 0;
      let touchStartY = 0;
      let touchStartTime = 0;
      let isSwiping = false;

      card.addEventListener('touchstart', (e) => {
        const t = e.changedTouches[0];
        touchStartX = t.clientX;
        touchStartY = t.clientY;
        touchStartTime = Date.now();
        isSwiping = false;
      }, { passive: true });

      card.addEventListener('touchmove', (e) => {
        const t = e.changedTouches[0];
        const dx = t.clientX - touchStartX;
        const dy = t.clientY - touchStartY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 15) {
          isSwiping = true;
        }
      }, { passive: true });

      card.addEventListener('touchend', (e) => {
        const t = e.changedTouches[0];
        const dx = t.clientX - touchStartX;
        const dy = t.clientY - touchStartY;
        const dt = Date.now() - touchStartTime;

        if (isSwiping && Math.abs(dx) > 55 && Math.abs(dy) < 80 && dt < 500) {
          if (dx > 0) {
            // Vuốt sang phải = Đã thuộc
            next(3);
          } else {
            // Vuốt sang trái = Chưa nhớ
            next(1);
          }
        }
      }, { passive: true });
    }

    // Nút lật thẻ riêng
    host.querySelectorAll('[data-flip]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        toggleFlip();
      };
    });

    // Nút phát âm
    host.querySelectorAll('[data-speak]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        window.speakWord?.(w.word || w.hanzi || '');
      };
    });

    const knownBtn = host.querySelector('[data-known]');
    if (knownBtn) {
      knownBtn.onclick = (e) => {
        e.stopPropagation();
        next(3);
      };
    }

    const againBtn = host.querySelector('[data-again]');
    if (againBtn) {
      againBtn.onclick = (e) => {
        e.stopPropagation();
        next(1);
      };
    }
  }

  function next(quality) {
    if (isNavigating) return;
    const w = list[i];
    if (!w) return;

    try {
      GH.progress?.markWord?.(w.word || w.hanzi || '', quality, false);
    } catch (e) {}

    // Hoạt động ôn tập flashcard luôn tính chuỗi học tập liên tục
    try {
      GH.streak?.activity?.();
    } catch (e) {}

    const card = document.getElementById('gh-active-flashcard');
    if (card) {
      isNavigating = true;
      const animClass = quality >= 3 ? 'gh-fc-slide-right' : 'gh-fc-slide-left';
      card.classList.add(animClass);

      try {
        if (navigator.vibrate) navigator.vibrate(8);
      } catch (e) {}

      setTimeout(() => {
        i++;
        flipped = false;
        render();
        isNavigating = false;
      }, 230);
    } else {
      i++;
      flipped = false;
      render();
    }
  }

  function mount() {
    const old = document.getElementById('list-mode');
    if (!old || document.getElementById('gh-flashcard-panel')) return;

    const section = document.createElement('section');
    section.id = 'gh-flashcard-mode';
    section.className = 'gh-extra-mode';
    section.innerHTML = `
      <div class="gh-section-head">
        <div>
          <span class="gh-kicker">HỌC CHỦ ĐỘNG</span>
          <h2>Flashcard Từ Vựng</h2>
          <p>Lật thẻ 3D trực quan • Ghi nhớ từ vựng qua hình ảnh và phản xạ phát âm.</p>
        </div>
        <div class="gh-fc-head-actions">
          <button class="gh-primary gh-fc-head-btn" id="gh-fc-start" type="button"><svg class="ui-icon" aria-hidden="true"><use href="#icon-refresh"></use></svg> Đổi bộ thẻ</button>
          <button class="gh-primary gh-fc-head-btn" id="gh-fc-review" type="button"><svg class="ui-icon" aria-hidden="true"><use href="#icon-pin"></use></svg> Ôn từ đến hạn</button>
          <button class="gh-fc-close gh-fc-head-btn" id="gh-fc-close" type="button" aria-label="Đóng Flashcard"><svg class="ui-icon" aria-hidden="true"><use href="#icon-x"></use></svg></button>
        </div>
      </div>
      <div id="gh-flashcard-panel"></div>
    `;

    old.parentNode.insertBefore(section, old.nextSibling);
    document.getElementById('gh-fc-start').onclick = () => start();
    document.getElementById('gh-fc-review').onclick = () => startReview();
    document.getElementById('gh-fc-close').onclick = () => window.switchMode?.('progress');
  }

  GH.flashcard = {
    start,
    refreshForLevel,
    startReview,
    toggleFlip
  };

  window.addEventListener('DOMContentLoaded', mount);

  window.addEventListener('keydown', e => {
    if (!document.getElementById('gh-flashcard-mode')?.classList.contains('active')) return;
    if (e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
    if (['1', 'ArrowLeft'].includes(e.key) && list[i]) next(1);
    if (['2', 'ArrowRight'].includes(e.key) && list[i]) next(3);
  });

  function patchMode() {
    if (window.__ghFlashcardModePatched || typeof window.switchMode !== 'function') return;
    const original = window.switchMode;
    window.switchMode = function(mode) {
      if (mode === 'flashcard') {
        const section = document.getElementById('gh-flashcard-mode');
        if (!section) {
          mount();
          setTimeout(() => window.switchMode('flashcard'), 0);
          return;
        }
        document.querySelectorAll('main > section, section').forEach(s => s.classList.remove('active'));
        section.classList.add('active');
        start(getWords());
        return;
      }
      return original.apply(this, arguments);
    };
    window.__ghFlashcardModePatched = true;
  }

  window.addEventListener('DOMContentLoaded', () => setTimeout(patchMode, 0));

  window.addEventListener('gh-hsk-changed', e => {
    if (!document.getElementById('gh-flashcard-mode')?.classList.contains('active')) return;
    const level = String(e.detail?.level || document.getElementById('hsk-level')?.value || '1');
    requestAnimationFrame(() => refreshForLevel(level));
  });
})();
