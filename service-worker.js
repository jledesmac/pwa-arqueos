self.addEventListener("install", e => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", e => {
  // dejamos que todo cargue directo desde la web
});
