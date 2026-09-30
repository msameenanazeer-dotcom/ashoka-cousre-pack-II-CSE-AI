const CACHE_NAME = "ashoka-course-pack-v1";

const FILES_TO_CACHE = [
"./",
"./index.html"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll(FILES_TO_CACHE);
})
);
});

self.addEventListener("fetch", event => {
event.respondWith(
fetch(event.request).catch(() => {
return caches.match(event.request);
})
);
});
