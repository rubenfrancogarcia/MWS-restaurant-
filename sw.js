//I was not sure whether to include all the images so I chose the smallest set
const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/css/responsive.css',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/dbhelper.js',
  '/js/dbhelper.js',
  '/js/dbhelper.js',
  '/images_small/1-500small.jpg',
  '/images_small/2-500small.jpg',
  '/images_small/3-500small.jpg',
  '/images_small/4-500small.jpg',
  '/images_small/5-500small.jpg',
  '/images_small/6-500small.jpg',
  '/images_small/7-500small.jpg',
  '/images_small/8-500small.jpg',
  '/images_small/9-500small.jpg',
  '/images_small/10-500small.jpg'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(cacheFiles);
      .catch(error) {
        console.log(error);
      }
    })
  );
});

self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request).then(function(response){
      if(response !== undefined) {
        console.log('found', e.request, 'in cache');
        return response;
      }
      else {
        console.log('not found', e.request,'Fetching');
        return fetch(e.request);
        .then(function(response){
          const clonedResponse = response.clone();
          cache.open('v1').then(function(cache) {
            cache.put(e.request, clonedResponse);
          })
          return response;
        })

      catch.(function(err) {
        console.error(err);
      });
    })
  );
});
