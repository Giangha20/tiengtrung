/**
 * ios_nav.js - iOS Native Tab Bar Navigation Controller
 * Supports both Capacitor iOS app and Mobile Web
 */
(() => {
  const TAB_MODE_MAP = {
    'home': 'home',
    'flashcard': 'flashcard',
    'translation': 'translation',
    'exam': 'exam',
    'progress': 'progress'
  };

  function activateTab(tabId) {
    if (!tabId) tabId = 'home';

    // Update tab bar active class
    const items = document.querySelectorAll('.ios-tab-item');
    items.forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tabId);
    });

    if (tabId === 'home') {
      if (typeof window.switchMode === 'function') {
        window.switchMode('home');
      } else {
        document.querySelectorAll('main > section, section').forEach(s => s.classList.remove('active'));
        const home = document.getElementById('gh-home-mode');
        if (home) home.classList.add('active');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const mode = TAB_MODE_MAP[tabId] || tabId;
    if (typeof window.switchMode === 'function') {
      window.switchMode(mode);
    } else {
      const navItem = document.querySelector(`[data-mode="${mode}"]`);
      if (navItem) navItem.click();
    }
  }

  window.GH_IOS_NAV = activateTab;

  function syncTabState(mode) {
    const reverseMap = {
      'home': 'home',
      'flashcard': 'flashcard',
      'translation': 'translation',
      'exam': 'exam',
      'progress': 'progress'
    };
    const tabId = reverseMap[mode] || 'home';
    const items = document.querySelectorAll('.ios-tab-item');
    items.forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tabId);
    });
  }

  document.addEventListener('gh-mode-changed', e => {
    const mode = e && e.detail && e.detail.mode;
    if (mode) syncTabState(mode);
  });

  // Hook into switchMode
  function hookSwitchMode() {
    if (window.__ghIosNavHooked || typeof window.switchMode !== 'function') return;
    const orig = window.switchMode;
    window.switchMode = function(mode) {
      const res = orig.apply(this, arguments);
      syncTabState(mode);
      return res;
    };
    window.__ghIosNavHooked = true;
  }

  hookSwitchMode();
  window.addEventListener('load', hookSwitchMode);
  document.addEventListener('DOMContentLoaded', hookSwitchMode);
})();
