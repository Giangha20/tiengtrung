/**
 * Modern Crystal-Clear 3D Flashcard Engine
 * - Crisp, non-blurry typography with hardware accelerated rendering
 * - True 60fps/120fps 3D rotation flip effect without DOM reconstruction
 * - Verified accurate image integration
 * - Unified streak integration on review actions
 */
(() => {
  const GH = window.GH = window.GH || {};
  let list = [];
  let i = 0;
  let flipped = false;

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

  function toggleFlip() {
    flipped = !flipped;
    const card = document.getElementById('gh-active-flashcard');
    if (card) {
      card.classList.toggle('is-flipped', flipped);
      card.setAttribute('aria-expanded', String(flipped));
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
                <button class="gh-fc-speak-btn" type="button" data-speak aria-label="Phát âm chữ Hán">
                  <span class="gh-fc-speak-icon">🔊</span>
                  <span>Nghe phát âm</span>
                </button>
                <div class="gh-fc-tap-hint">
                  <span class="gh-fc-hint-icon">↻</span>
                  <span>Chạm để lật xem đáp án</span>
                </div>
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
                <button class="gh-fc-speak-btn" type="button" data-speak aria-label="Phát âm chữ Hán">
                  <span class="gh-fc-speak-icon">🔊</span>
                  <span>Nghe lại phát âm</span>
                </button>
                <div class="gh-fc-tap-hint">
                  <span class="gh-fc-hint-icon">↺</span>
                  <span>Chạm để quay lại chữ Hán</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nút hành động đánh giá thẻ -->
      <div class="gh-fc-actions-dock">
        <button class="gh-fc-btn gh-fc-btn-again" type="button" data-again aria-label="Chưa nhớ - Ôn lại">
          <span class="gh-fc-btn-icon">↺</span>
          <div class="gh-fc-btn-text">
            <b>Chưa nhớ</b>
            <small>Ôn lại từ này</small>
          </div>
        </button>
        <button class="gh-fc-btn gh-fc-btn-known" type="button" data-known aria-label="Đã nhớ - Thuộc từ">
          <span class="gh-fc-btn-icon">✓</span>
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
    }

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
    const w = list[i];
    if (!w) return;

    try {
      GH.progress?.markWord?.(w.word || w.hanzi || '', quality);
    } catch (e) {}

    // Any flashcard review action counts towards learning streak!
    try {
      GH.streak?.activity?.();
    } catch (e) {}

    i++;
    flipped = false;
    render();
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
          <button class="gh-primary gh-fc-head-btn" id="gh-fc-start" type="button">🔄 Đổi bộ thẻ</button>
          <button class="gh-primary gh-fc-head-btn" id="gh-fc-review" type="button">📌 Ôn từ đến hạn</button>
          <button class="gh-fc-close gh-fc-head-btn" id="gh-fc-close" type="button" aria-label="Đóng Flashcard">✕</button>
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
