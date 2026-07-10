// Stub file — stops the browser from repeatedly requesting a missing /sw.js
// (stale service worker registrations from older deployments).
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister().then(() => self.clients.claim())
  );
});
