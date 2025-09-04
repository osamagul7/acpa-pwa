const CACHE_NAME = "pwa-cache-v1";
const ASSETS = ["/", "/index.html"];

self.addEventListener("install", (ev) => {
  ev.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (ev) => {
  if (ev.request.method !== "GET") return;
  ev.respondWith(
    caches.match(ev.request).then((cached) => {
      return (
        cached ||
        fetch(ev.request)
          .then((res) => {
            return caches.open(CACHE_NAME).then((cache) => {
              try {
                cache.put(ev.request, res.clone());
              } catch (e) {
                console.error("Cache put failed:", e);
              }
              return res;
            });
          })
          .catch(() => caches.match("/index.html"))
      );
    })
  );
});
