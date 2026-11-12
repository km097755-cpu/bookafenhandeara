// Service worker do app Cardápio: abre sem internet depois da primeira visita.
// Mudou o site? Aumente a versão abaixo para limpar o que ficou guardado.
var VERSAO = "cardapio-v2";
var BASE = ["./", "index.html", "manifest.webmanifest", "fotos/logo-bookafe-linha.png", "fotos/logo-bookafe.png", "fotos/ices-da-casa.jpg",
  "fotos/cappuccino-bookafe.jpg", "fotos/mocha.jpg", "fotos/icone-192.png", "fotos/icone-512.png", "fotos/icone-512-maskable.png", "fotos/icone-apple-180.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSAO).then(function (c) { return c.addAll(BASE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSAO; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var ehPagina = req.mode === "navigate";
  if (url.origin === location.origin && !ehPagina) {
    // fotos e ícones: do guardado, atualiza por trás
    e.respondWith(caches.match(req).then(function (hit) {
      var rede = fetch(req).then(function (r) { if (r.ok) { var cp = r.clone(); caches.open(VERSAO).then(function (c) { c.put(req, cp); }); } return r; }).catch(function () { return hit; });
      return hit || rede;
    }));
    return;
  }
  if (ehPagina) {
    // a página: tenta a internet (cardápio sempre atual); sem internet, usa o guardado
    e.respondWith(fetch(req.url, { cache: "no-cache" }).then(function (r) { var cp = r.clone(); caches.open(VERSAO).then(function (c) { c.put("index.html", cp); }); return r; })
      .catch(function () { return caches.match("index.html"); }));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    // fontes do Google: guarda para a próxima vez
    e.respondWith(caches.open(VERSAO).then(function (c) {
      return c.match(req).then(function (hit) {
        return hit || fetch(req).then(function (r) { c.put(req, r.clone()); return r; });
      });
    }));
  }
});
