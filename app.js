(() => {
  const GH = window.GH = window.GH || {};

  function inject() {
    const main = document.querySelector('main');
    if (!main || document.getElementById('gh-home-mode')) return;

    const home = document.createElement('section');
    home.id = 'gh-home-mode';
    home.className = 'gh-extra-mode active';
    home.innerHTML = `
      <div class="gh-hero-v3">
        <div class="gh-hero-content">
          <div class="gh-hero-badge">
            <span class="gh-badge-dot"></span>
            <span>HỌC TIẾNG TRUNG HSK</span>
          </div>
          <h2 id="gh-greeting-title">Chào bạn! Sẵn sàng học hôm nay?</h2>
          <p id="gh-greeting-sub">Học mỗi ngày một chút, tiến bộ từng bước vững chắc.</p>

          <div class="gh-hero-meta">
            <div class="gh-meta-pill gh-meta-xp">
              <span class="meta-icon">⚡</span>
              <div>
                <b id="gh-xp-value">0 XP</b>
                <small>Level <span id="gh-level">1</span></small>
              </div>
            </div>
            <div class="gh-meta-pill gh-meta-streak">
              <span class="meta-icon">🔥</span>
              <div>
                <b id="gh-streak">0 ngày</b>
                <small>Chuỗi học liên tục</small>
              </div>
            </div>
          </div>
        </div>

        <div class="gh-hero-goal-card">
          <div class="gh-goal-header">
            <span>🎯 MỤC TIÊU HÔM NAY</span>
            <strong id="gh-goal-percent">0%</strong>
          </div>
          <div class="gh-goal-count" id="gh-goal-text">0 / 20 từ</div>
          <div class="gh-goal-bar">
            <div class="gh-goal-fill" id="gh-goal-fill"></div>
          </div>
          <small class="gh-goal-hint">Chỉ cần 20 từ mỗi ngày để duy trì tiến độ!</small>
        </div>
      </div>

      <!-- Lưới các tính năng học tập -->
      <div class="gh-section-title">
        <h3>Các chế độ học tập</h3>
        <p>Chọn phương pháp rèn luyện phù hợp với bạn hôm nay</p>
      </div>

      <div class="gh-quick-grid-v3">
        <button type="button" class="gh-card-btn gh-card-vocab" data-mode="list">
          <div class="card-icon-wrap" style="--c-bg: #fee2e2; --c-color: #ef4444;">📚</div>
          <div class="card-info">
            <b>Từ vựng HSK</b>
            <small>Tra cứu & học từ HSK 1 - 6</small>
          </div>
          <span class="card-arrow">→</span>
        </button>

        <button type="button" class="gh-card-btn gh-card-flashcard" data-mode="flashcard">
          <div class="card-icon-wrap" style="--c-bg: #fef3c7; --c-color: #f59e0b;">🃏</div>
          <div class="card-info">
            <b>Thẻ Flashcard 3D</b>
            <small>Lật thẻ ghi nhớ thông minh</small>
          </div>
          <span class="card-arrow">→</span>
        </button>

        <button type="button" class="gh-card-btn gh-card-writing" data-mode="writing">
          <div class="card-icon-wrap" style="--c-bg: #dbeafe; --c-color: #3b82f6;">✍️</div>
          <div class="card-info">
            <b>Luyện viết chữ Hán</b>
            <small>Tập viết nét chuẩn Hanzi</small>
          </div>
          <span class="card-arrow">→</span>
        </button>

        <button type="button" class="gh-card-btn gh-card-game" data-mode="game">
          <div class="card-icon-wrap" style="--c-bg: #dcfce7; --c-color: #10b981;">🎮</div>
          <div class="card-info">
            <b>Gấu Trúc Phi Tiêu</b>
            <small>Game gõ Pinyin cực cuốn</small>
          </div>
          <span class="card-arrow">→</span>
        </button>

        <button type="button" class="gh-card-btn gh-card-typing" data-mode="typing">
          <div class="card-icon-wrap" style="--c-bg: #f3e8ff; --c-color: #a855f7;">⌨️</div>
          <div class="card-info">
            <b>Luyện gõ Pinyin</b>
            <small>Gõ nhanh chữ Hán & Pinyin</small>
          </div>
          <span class="card-arrow">→</span>
        </button>

        <button type="button" class="gh-card-btn gh-card-listening" data-mode="listening">
          <div class="card-icon-wrap" style="--c-bg: #ffedd5; --c-color: #f97316;">🎧</div>
          <div class="card-info">
            <b>Luyện nghe hiểu</b>
            <small>Nghe phản xạ & chọn câu đúng</small>
          </div>
          <span class="card-arrow">→</span>
        </button>

        <button type="button" class="gh-card-btn gh-card-translation" data-mode="translation">
          <div class="card-icon-wrap" style="--c-bg: #e0e7ff; --c-color: #6366f1;">🌐</div>
          <div class="card-info">
            <b>Luyện dịch câu</b>
            <small>Dịch song ngữ Trung - Việt</small>
          </div>
          <span class="card-arrow">→</span>
        </button>

        <button type="button" class="gh-card-btn gh-card-exam" data-mode="exam">
          <div class="card-icon-wrap" style="--c-bg: #fce7f3; --c-color: #ec4899;">📝</div>
          <div class="card-info">
            <b>Đề thi thử HSK</b>
            <small>Trắc nghiệm tính giờ chuẩn format</small>
          </div>
          <span class="card-arrow">→</span>
        </button>
      </div>

      <!-- Banner Ôn tập thông minh -->
      <div class="gh-review-card-v3">
        <div class="review-icon-glow">🧠</div>
        <div class="review-text">
          <small>HỆ THỐNG GHI NHỚ THÔNG MINH (SRS)</small>
          <h3 id="gh-due">0 từ cần ôn hôm nay</h3>
          <p id="gh-review-sub">Ưu tiên những từ bạn dễ quên nhất để củng cố trí nhớ dài hạn.</p>
        </div>
        <button type="button" class="gh-review-btn-v3" id="gh-review-btn">
          <span>Ôn tập ngay</span>
          <span>⚡</span>
        </button>
      </div>

      <!-- Thống kê học tập -->
      <div class="gh-stats-grid-v3">
        <div class="stat-box">
          <span class="stat-icon">📖</span>
          <div class="stat-details">
            <b id="gh-learned">0</b>
            <small>Từ đã học</small>
          </div>
        </div>
        <div class="stat-box">
          <span class="stat-icon">🏆</span>
          <div class="stat-details">
            <b id="gh-mastered">0</b>
            <small>Đã thuộc lòng</small>
          </div>
        </div>
        <div class="stat-box">
          <span class="stat-icon">🔥</span>
          <div class="stat-details">
            <b id="gh-streak-stat">0</b>
            <small>Ngày liên tiếp</small>
          </div>
        </div>
        <div class="stat-box">
          <span class="stat-icon">🎯</span>
          <div class="stat-details">
            <b id="gh-accuracy">0%</b>
            <small>Độ chính xác</small>
          </div>
        </div>
      </div>
    `;

    main.prepend(home);

    // Xử lý deep link URL
    if (location.search.includes('open=flashcard')) {
      document.querySelectorAll('main > section').forEach(s => s.classList.remove('active'));
      document.getElementById('gh-flashcard-mode')?.classList.add('active');
      window.GH.flashcard?.start();
    } else if (location.search.includes('open=exam')) {
      document.querySelectorAll('main > section').forEach(s => s.classList.remove('active'));
      document.getElementById('exam-mode')?.classList.add('active');
      window.startExam?.();
    } else if (location.search.includes('open=typing')) {
      document.querySelectorAll('main > section').forEach(s => s.classList.remove('active'));
      document.getElementById('typing-mode')?.classList.add('active');
      window.initTyping?.();
    } else {
      document.querySelectorAll('main > section').forEach(s => {
        if (s !== home) s.classList.remove('active');
      });
    }

    home.querySelector('#gh-review-btn').onclick = () => {
      document.querySelectorAll('main > section').forEach(s => s.classList.remove('active'));
      const fc = document.getElementById('gh-flashcard-mode') || document.getElementById('flashcard-mode');
      if (fc) fc.classList.add('active');
      window.GH.flashcard?.start((window.hskData?.[document.getElementById('hsk-level')?.value || '1'] || []).filter(Boolean));
    };

    home.querySelectorAll('[data-mode]').forEach(b => {
      b.addEventListener('click', () => {
        const mode = b.dataset.mode;
        if (mode === 'flashcard') {
          document.querySelectorAll('main > section').forEach(s => s.classList.remove('active'));
          const fc = document.getElementById('gh-flashcard-mode') || document.getElementById('flashcard-mode');
          if (fc) fc.classList.add('active');
          window.GH.flashcard?.start?.();
          return;
        }
        window.switchMode?.(mode);
      });
    });
  }

  function update() {
    const s = GH.progress.get();
    const d = s.daily?.words || 0;
    const pct = Math.min(100, Math.round(d / 20 * 100));

    const set = (id, v) => {
      const e = document.getElementById(id);
      if (e) e.textContent = v;
    };

    set('gh-xp-value', `${s.xp || 0} XP`);
    set('gh-level', s.level || 1);
    set('gh-goal-text', `${d} / 20 từ`);
    set('gh-goal-percent', `${pct}%`);

    const fill = document.getElementById('gh-goal-fill');
    if (fill) fill.style.width = pct + '%';

    const streakVal = GH.streak?.get().current || 0;
    set('gh-learned', s.learned?.length || 0);
    set('gh-mastered', s.mastered?.length || 0);
    set('gh-streak', `${streakVal} ngày`);
    set('gh-streak-stat', streakVal);
    set('gh-accuracy', `${s.stats?.answers ? Math.round(s.stats.correct / s.stats.answers * 100) : 0}%`);
    set('gh-due', `${GH.progress.dueWords().length} từ cần ôn hôm nay`);

    const h = new Date().getHours();
    const timeGreeting = h < 12 ? 'Chào buổi sáng' : h < 18 ? 'Chào buổi chiều' : 'Chào buổi tối';
    const userName = window.ghUserProfile?.displayName || window.ghUserProfile?.username || 'bạn';
    set('gh-greeting-title', `${timeGreeting}, ${userName}! 👋`);
  }

  function boot() {
    inject();
    GH.progress.hydrate().then(update);
    GH.streak.render();
    window.addEventListener('gh-progress-updated', update);
    window.addEventListener('gh-xp-updated', update);
    window.addEventListener('gh-progress-loaded', () => GH.progress.hydrate().then(update));
    setInterval(update, 15000);
  }

  GH.app = { update };
  window.addEventListener('DOMContentLoaded', boot);
  window.addEventListener('gh-auth-ready', () => GH.progress.hydrate().then(update));
  window.addEventListener('gh-progress-loaded', () => GH.progress.hydrate().then(update));
})();
