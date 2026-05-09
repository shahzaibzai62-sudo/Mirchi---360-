const CACHE = 'mirchi360-v1';
const ASSETS = [
  '/Mirchi---360-/',
  '/Mirchi---360-/index.html',
  '/Mirchi---360-/app.js',
  '/Mirchi---360-/manifest.json',
  '/Mirchi---360-/logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Firebase aur external requests ko bypass karo — sirf local files cache karo
  if (!e.request.url.includes('github.io')) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
