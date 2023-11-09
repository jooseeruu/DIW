self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
        ]),
      ),
  );
});



self.addEventListener('activate',(event)=>{
    console.log("Service worker activado");
}
);

caches.open("computerStyleV3")
    .then(cache=>{
    cache.add("style.css");
    cache.addAll(["style.css","./imatges/angular.png"])
});