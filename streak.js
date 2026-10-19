(() => {
  const GH = window.GH = window.GH || {};
  const KEY = 'gh_streak_unified_v2';
  const LEGACY_V2 = 'gh_streak_v2';
  const LEGACY_V1 = 'premiumChinesStreakV1';

  function getTodayKey() {
    if (GH.utils?.todayKey) return GH.utils.todayKey();
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function getYesterdayKey() {
    if (GH.utils?.yesterdayKey) return GH.utils.yesterdayKey();
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function migrateLegacy() {
    let data = null;
    try {
      const existing = localStorage.getItem(KEY);
      if (existing) return JSON.parse(existing);

      const v2Raw = localStorage.getItem(LEGACY_V2);
      const v1Raw = localStorage.getItem(LEGACY_V1);
      const v2 = v2Raw ? JSON.parse(v2Raw) : null;
      const v1 = v1Raw ? JSON.parse(v1Raw) : null;

      if (v2 || v1) {
        const current = Math.max(Number(v2?.current || 0), Number(v1?.streak || 0));
        const best = Math.max(Number(v2?.best || 0), current);
        const lastDate = v2?.last || v1?.lastDate || null;
        data = { current, best, lastDate };
        localStorage.setItem(KEY, JSON.stringify(data));
      }
    } catch (e) {
      console.warn('Streak migration notice:', e);
    }
    return data;
  }

  function calc() {
    let s = { current: 0, best: 0, lastDate: null, completedToday: false };
    try {
      const stored = migrateLegacy() || JSON.parse(localStorage.getItem(KEY) || '{}');
      s = { ...s, ...stored };
      s.current = Math.max(0, Number(s.current || 0));
      s.best = Math.max(s.current, Number(s.best || 0));
    } catch (e) {
      console.warn('Streak calc error:', e);
    }

    const today = getTodayKey();
    const yesterday = getYesterdayKey();

    if (s.lastDate === today) {
      s.completedToday = true;
    } else if (s.lastDate === yesterday) {
      // Streak is active from yesterday, awaiting today's study activity
      s.completedToday = false;
    } else if (s.lastDate) {
      // User missed more than 1 day: streak reset to 0
      s.current = 0;
      s.completedToday = false;
    } else {
      s.current = 0;
      s.completedToday = false;
    }

    return s;
  }

  function activity() {
    let s = calc();
    const today = getTodayKey();
    const yesterday = getYesterdayKey();

    // In the same day: already recorded, do not increment again.
    if (s.lastDate === today) {
      render(s);
      return s;
    }

    const previousStreak = s.current;
    if (s.lastDate === yesterday) {
      s.current = (s.current || 0) + 1;
    } else {
      s.current = 1;
    }

    s.best = Math.max(s.best, s.current);
    s.lastDate = today;
    s.completedToday = true;

    try {
      localStorage.setItem(KEY, JSON.stringify(s));
      // Keep legacy keys in sync for backward compatibility
      localStorage.setItem(LEGACY_V2, JSON.stringify({ current: s.current, best: s.best, last: today }));
      localStorage.setItem(LEGACY_V1, JSON.stringify({ streak: s.current, lastDate: today }));
    } catch (e) {}

    render(s);

    // Trigger celebration toast if streak increased or reached milestone
    if (s.current > previousStreak || [3, 7, 14, 30, 60, 100].includes(s.current)) {
      showCelebration(s.current);
    }

    // Sync online via Firebase
    if (window.ghAuth?.saveProgress) {
      window.ghAuth.saveProgress({ streak: s }).catch(() => {});
    }

    window.dispatchEvent(new CustomEvent('gh-streak-updated', { detail: s }));
    return s;
  }

  function render(s) {
    if (!s) s = calc();

    // 1. Header streak widget count
    const countEl = document.getElementById('streak-count');
    if (countEl) countEl.textContent = String(s.current);

    // 2. Home dashboard streak count
    const ghStreakEl = document.getElementById('gh-streak');
    if (ghStreakEl) ghStreakEl.textContent = String(s.current);

    // 3. Widget container
    const widget = document.getElementById('streak-widget');
    if (widget) {
      widget.classList.toggle('streak-hot', s.current > 0);
      widget.classList.toggle('streak-active', s.current > 0);
      widget.classList.toggle('streak-done', !!s.completedToday);

      const statusNote = s.completedToday
        ? ' • Hôm nay đã học xong! 🔥'
        : ' • Làm bài tập hôm nay để tăng chuỗi!';
      widget.title = `Chuỗi học tập: ${s.current} ngày • Kỷ lục: ${s.best} ngày${statusNote}`;
      widget.setAttribute('aria-label', `Chuỗi học tập: ${s.current} ngày`);
    }
  }

  function showCelebration(days) {
    let toast = document.getElementById('streak-celebration');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'streak-celebration';
      toast.className = 'streak-celebration';
      document.body.appendChild(toast);
    }

    const title = days > 1 ? `Chuỗi học tập ${days} ngày!` : `Khởi động chuỗi học tập!`;
    const sub = days > 1
      ? `Tuyệt vời! Bạn đang duy trì phong độ rất tốt 🎉`
      : `Hôm nay bạn đã hoàn thành bài học đầu tiên! Cố gắng tiếp tục vào ngày mai nhé! 🚀`;

    toast.innerHTML = `
      <div class="streak-celebration-badge">🔥</div>
      <div class="streak-celebration-text">
        <strong>${title}</strong>
        <span>${sub}</span>
      </div>
    `;

    toast.classList.remove('show');
    void toast.offsetWidth; // Force reflow
    toast.classList.add('show');

    clearTimeout(window.__streakCelebrationTimer);
    window.__streakCelebrationTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Unified global API
  GH.streak = {
    get: calc,
    activity,
    render,
    showCelebration
  };

  // Backwards compatibility for script.js and external callers
  window.markStudyStreakActivity = activity;
  window.renderStudyStreak = (data) => render(data || calc());
  window.initStudyStreak = () => render();
  window.showStreakCelebration = showCelebration;

  // Render on initial load without falsely advancing streak
  window.addEventListener('DOMContentLoaded', () => {
    render();
  });
  window.addEventListener('gh-auth-ready', () => {
    render();
  });
})();