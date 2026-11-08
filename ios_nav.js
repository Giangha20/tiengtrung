/**
 * ios_nav.js - iOS Native Tab Bar Navigation Controller
 * Runs only inside Capacitor iOS app (html.ios-app class present)
 */
(function() {
  if (!document.documentElement.classList.contains('ios-app')) return;

  var TAB_MODE_MAP = {
    'home':        null,         // back to default view (home)
    'flashcard':   'flashcard',
    'translation': 'translation',
    'exam':        'exam',
    'progress':    'progress'
  };

  function activateTab(tabId) {
    // Update tab bar active state
    var items = document.querySelectorAll('.ios-tab-item');
    items.forEach(function(el) {
      el.classList.toggle('active', el.dataset.tab === tabId);
    });

    // Trigger mode switch via existing app mechanism
    var mode = TAB_MODE_MAP[tabId];
    if (typeof window.switchMode === 'function') {
      if (mode) {
        window.switchMode(mode);
      } else {
        // Home: go back to home/exercise view
        window.switchMode('exercise');
      }
    } else {
      // Fallback: click existing nav items
      var navItem = document.querySelector('[data-action="' + (mode || 'exercise') + '"], [data-mode="' + (mode || '') + '"]');
      if (navItem) navItem.click();
    }
  }

  window.GH_IOS_NAV = activateTab;

  // Listen for external mode changes (e.g. from links/buttons inside the app)
  // so the tab bar stays in sync
  document.addEventListener('gh-mode-changed', function(e) {
    var mode = e && e.detail && e.detail.mode;
    var reverseMap = {
      'exercise':    'home',
      'flashcard':   'flashcard',
      'translation': 'translation',
      'exam':        'exam',
      'progress':    'progress'
    };
    var tabId = reverseMap[mode] || 'home';
    var items = document.querySelectorAll('.ios-tab-item');
    items.forEach(function(el) {
      el.classList.toggle('active', el.dataset.tab === tabId);
    });
  });

  // Also hook into switchMode if available to sync tab bar
  var origSwitch = window.switchMode;
  if (typeof origSwitch === 'function') {
    window.switchMode = function(mode) {
      origSwitch.apply(this, arguments);
      var reverseMap = {
        'exercise':    'home',
        'flashcard':   'flashcard',
        'translation': 'translation',
        'exam':        'exam',
        'progress':    'progress',
        'list':        'home',
        'writing':     'home',
        'typing':      'home',
        'listening':   'home'
      };
      var tabId = reverseMap[mode] || 'home';
      var items = document.querySelectorAll('.ios-tab-item');
      items.forEach(function(el) {
        el.classList.toggle('active', el.dataset.tab === tabId);
      });
    };
  } else {
    // Wait for switchMode to be defined
    window.addEventListener('load', function() {
      var orig = window.switchMode;
      if (typeof orig === 'function') {
        window.switchMode = function(mode) {
          orig.apply(this, arguments);
          var reverseMap = {
            'exercise': 'home', 'flashcard': 'flashcard',
            'translation': 'translation', 'exam': 'exam', 'progress': 'progress'
          };
          var items = document.querySelectorAll('.ios-tab-item');
          var tabId = reverseMap[mode] || 'home';
          items.forEach(function(el) {
            el.classList.toggle('active', el.dataset.tab === tabId);
          });
        };
      }
    });
  }
})();
