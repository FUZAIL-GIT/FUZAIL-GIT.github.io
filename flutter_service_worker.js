'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fbe8cbae4ac2f643aefad1ac9c0a02e5",
".git/config": "657a41c8a4eae7d0f38681cdd399328f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "178243fbf6e7a62fc741990228a1f452",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c3a536e2f07d62bf0dad999f6d37bd2d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "888f6fbc680e5fc4260de898cbe3471e",
".git/logs/refs/heads/main": "c0ae2ae0d493d6864de4ee6acd6e08c8",
".git/logs/refs/remotes/origin/main": "4c706e4638af3b95f7013a8caa5be0f4",
".git/objects/01/c303b3cd4fcf1739f2ebe3f751ee131a46044e": "6baae1fe5ceb8f26f22be22b5badb067",
".git/objects/03/3462f9363da99ff6df36f1356dc8004689267d": "f87eca09926bc27ad385844d96200126",
".git/objects/03/428aa0a86b320218cd853a28ed9b7448a0c57d": "ec1be8505d3d6f01a1dd5a3ae65ad261",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/7d20f6f500a901908da051956fe305e3db0baf": "c2cb71a482e0d3858adb091ba7a9d932",
".git/objects/0e/f747395856df7764e4e953e082e934721f9d4e": "7cebe9f0469046a38bf44362b03025c1",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2c/16c1acedc8ae39b41ecd105171ca5838149f0a": "c26e3ec4678ab86fa114f99f03e9f3c5",
".git/objects/30/715930e13ced1f4c52c9b65d43daaff1a9520b": "728e5e1addbf74823d0567653c67af1a",
".git/objects/35/8728a1bf94ceea853b72ca6f9496e844c46761": "d6c1033021cd4d8fd6d7a58f2fd05e1b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f2c4d6bef7357770178b982abd186c40363c9e": "e88edc5b34e3c2a572c5445adcc365da",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/49196478bdd3d95fc8eacc2275b40c4410cc4d": "dc7f3dc99c199d449c9a22c0881a0198",
".git/objects/5d/96ddc167d798e2fdbb63097a8db356faf1d90b": "251cbe3ca7ef22ae8ddeaa580f0f0b78",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6f/1f3ec45c646cf675b015cc9ff12f77113f29bd": "b4c72cfebd9e9d117324992af9a7191a",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7c/ff9a8afc5d11c10d18e4432b6d0ee7ba5df55e": "cb446b3b9ec73dc1c8e8c272c9ddb984",
".git/objects/7f/0f2aeb9f92e4ccd6faa96d6f1387cc92d54222": "351f40383d1bb60b3711b964564db985",
".git/objects/80/90a6f755d9029265f140ab37dcdd331afff025": "76551b179b89215293ef17f0270966a8",
".git/objects/88/7f1011f5c4f8280f2c36ae5966653d852192fb": "fac1fbb5e8fc0347efe0c71cd7728ef9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/57ca144f404807594613265944c18813095c1e": "a1e015fe7575e0fd486c3e1cc257efaa",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a1/d159c9e6cdbe08dc206e472e293cf9bbd17f38": "aa517c17ad037cbc62a527023bd8b660",
".git/objects/a3/f8940550dee2b9c9fe854b07791baa266940ca": "4dd501ef784e754ad90612b985299c35",
".git/objects/a4/abfbe407d4deed8330d296df9b2b3625a81bb7": "d4fbee1f91d84cf13ee1902051924f54",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/b50b24042e01b4fa4d637892e9a31b01195613": "623daff19ac49eff112abba9a7bba179",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/0c926ab69d49945e07c1f62d21c9c4eb89817e": "048910671b24ee17a696d2a78b99cc1b",
".git/objects/b6/fd42f0e667507e0bc9bd1971fb66bd8bcb15ab": "7328f89a851bd7d9b93d36395f0b807d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c4/c571044dc6440587c15b626c90f0589f7ee078": "295458e022abc56f54af0b7677cf3349",
".git/objects/cf/a3e726f9cc79db4bcdfb4db9799996df9c51ae": "cd1040ba9ea28b819677a56d896f2daa",
".git/objects/d0/d4ac30f5c95ce38d929b47b2cf5375d7f88d41": "08026c38abaf0b980279a4ecd1369ae9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/1dddee5d5d11ca5aa7583d562534e2238ec089": "17e7a3135bde0a19cb67953eebad6ee6",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b3561e0b247f98789f82ae669d54d4a7d296ed": "015ea85cab5f81e63a3d1936f56c3dae",
".git/objects/ec/b7007c76406b282dbbf6582a5634aacb0d2e71": "d4d331db80701a095b2b31e76ec52701",
".git/objects/ef/45ed95b6e5e1d5551faaac74bddc1fec7e9c65": "5688d4dd9510a104849d74e43e1d6fdb",
".git/objects/f2/c7b250ef565b68fbbe559961cb6298e56a67ae": "1482811d4181650d5a918902470c2275",
".git/objects/f9/613922a243a41c8412e08a4405fe2f9e39542b": "842083a135154d12fe2cfc25ddc65864",
".git/objects/fa/102147957c8728b523c4fad503dc4de51e8db4": "c0699dbde7c535d16af49c2a05061ff6",
".git/objects/fc/d9d3766cc09906113e6dc80e0b60c3da433a7d": "4553e49868b141bbd29f2501a17468e6",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/42d0f438d43e0aec3e6fd3ccbeedbbc2e2a039": "1b44377893f3bac74e6c16f24a59deaf",
".git/ORIG_HEAD": "745277692513eb6fa18520be8309ad92",
".git/refs/heads/main": "745277692513eb6fa18520be8309ad92",
".git/refs/remotes/origin/main": "ca77974330ac8a261e9f49e2ab43e3c8",
"assets/AssetManifest.bin": "b51c748c1c479d51a81337b6e8f5d6a4",
"assets/AssetManifest.json": "a666fb0a94e8ebb2c5bcddf71a40f38e",
"assets/assets/fonts/Exo2-Light.ttf": "71330d68d887758bea8c742eb6641325",
"assets/assets/fonts/Exo2-Medium.ttf": "1e7da3a913cc046ed13485961df9616d",
"assets/assets/fonts/Rajdhani-Light.ttf": "e38f518cff0715ced49fb47f86c71d8a",
"assets/assets/fonts/Rajdhani-Medium.ttf": "5500ef6a4e84d3be9971dbb138c010e5",
"assets/assets/images/background_image.png": "0e33d9646cb680b9d94a705581632f13",
"assets/assets/svg/background_image.svg": "5325c29a02e17eeed3acad38e2b37ce7",
"assets/assets/svg/background_image.svg.vec": "c441d00b95a0e9fa7ca05437c36e0318",
"assets/FontManifest.json": "8a7bf96bb8c0370f3a55c9502a115960",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "074939aceb0035be7f53942e0f489bf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"CNAME": "795cf759bdab4895259e0f40b28fa1c6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4b0fd73753fa16994da92e19198b4423",
"/": "4b0fd73753fa16994da92e19198b4423",
"main.dart.js": "062ee31f4d1bfc67fec71132476320cd",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
