const CACHE = 'gh-hsk-shell-v52';
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
  './translation.js',
  './translation_data.js',
  './writing.css',
  './writing.js',
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
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin || new URL(e.request.url).pathname.startsWith('/api/')) return;

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
