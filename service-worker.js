/* eslint-disable no-console */
const cacheName = 'PWAgenda';
const filesToCache = [
  '/',
  '/index.html',
  '/bundle.js',
  '/style.css',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
    .catch(err => {
      console.log('[SW] Installation failed: ', err);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
    .catch(err => {
      console.log('[SW] Caching failed: ', err);
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(res => res || fetch(event.request))
    .catch(err => console.log('[SW] Fetch failed: ', err))
  );
});
