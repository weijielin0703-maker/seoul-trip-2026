/* 離線殼：版本變更時清掉舊快取，新安裝立刻接手。 */
var CACHE = "okinawa-shell-v5";
var ASSETS = [
  "./",
  "./index.html",
  "./vault.enc.json",
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(function (cache) {
    return cache.addAll(ASSETS);
  }));
});

self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== CACHE;
    }).map(function (key) {
      return caches.delete(key);
    }));
  }).then(function () {
    return self.clients.claim();
  }));
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(fetch(req).then(function (res) {
    var copy = res.clone();
    caches.open(CACHE).then(function (cache) { cache.put(req, copy); });
    return res;
  }).catch(function () {
    return caches.match(req).then(function (cached) {
      return cached || caches.match("./index.html");
    });
  }));
});
