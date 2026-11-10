const CACHE = 'gh-hsk-shell-v62';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './base.css',
  './app.css',
  './enhancements.css',
  './enhancements.js',
  './premium_plus.css',
  './premium_plus.js',
  './learning_plus.js',
  './learning_plus.css',
  './script.js',
  './utils.js',
  './progress.js',
  './streak.js',
  './favorites.js',
  './flashcard.js',
  './statistics.js',
  './settings.js',
  './nav_menu.js',
  './hsk6.js',
  './translation.css',
  './ios-layout.css',
  './ios_nav.js',
  './intro.css',
  './intro.js',
  './translation.js',
  './translation_data.js',
  './writing.css',
  './writing.js',
  './game/game.css',
  './game/panda_sfx.js',
  './game/panda_art.js',
  './game/pinyin_game.js',
  './game/writing_game.js',
  './game/game_hub.js',
  './radicals_data.js',
  './hanzi-writer.min.js',
  './manifest.json',
  './avatar192.jpg',
  './avatar.jpg'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// Network-First strategy: Always fetch fresh code online, fallback to cache when offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin || new URL(e.request.url).pathname.startsWith('/api/') || e.request.url.includes('.mp4')) return;

  e.respondWith(
    fetch(e.request, { cache: 'no-cache' })
      .then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(e.request).then(cached => cached || caches.match('./index.html'));
      })
  );
});
