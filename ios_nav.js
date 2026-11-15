/**
 * ios_nav.js - Universal Navigation Controller
 * Quản lý đồng bộ trạng thái thanh điều hướng tab cho cả Mobile và Desktop.
 */
(() => {
  function syncTabState(mode) {
    if (!mode) mode = 'home';

    // 1. Đồng bộ Desktop Nav Pills
    document.querySelectorAll('.nav-pill').forEach(el => {
      el.classList.toggle('active', el.dataset.mode === mode);
    });

    // 2. Đồng bộ Mobile Bottom Navigation Bar
    document.querySelectorAll('.bottom-nav-tab').forEach(el => {
      el.classList.toggle('active', el.dataset.mode === mode);
    });

    // 3. Tương thích iOS Tab Bar cũ
    document.querySelectorAll('.ios-tab-item').forEach(el => {
      el.classList.toggle('active', (el.dataset.tab === mode || el.dataset.mode === mode));
    });
  }

  function activateTab(mode) {
    if (!mode) mode = 'home';
    if (typeof window.switchMode === 'function') {
      window.switchMode(mode);
    } else {
      document.querySelectorAll('main > section, section').forEach(s => s.classList.remove('active'));
      const target = document.getElementById(mode === 'home' ? 'gh-home-mode' : `${mode}-mode`);
      if (target) target.classList.add('active');
    }
    syncTabState(mode);
  }

  window.GH_IOS_NAV = activateTab;
  window.GH_syncNav = syncTabState;

  document.addEventListener('gh-mode-changed', e => {
    const mode = e && e.detail && e.detail.mode;
    if (mode) syncTabState(mode);
  });

  // Hook vào switchMode để tự động cập nhật
  function hookSwitchMode() {
    if (window.__ghNavHooked || typeof window.switchMode !== 'function') return;
    const orig = window.switchMode;
    window.switchMode = function(mode) {
      const res = orig.apply(this, arguments);
      syncTabState(mode);
      return res;
    };
    window.__ghNavHooked = true;
  }

  hookSwitchMode();
  window.addEventListener('load', hookSwitchMode);
  document.addEventListener('DOMContentLoaded', hookSwitchMode);
})();
