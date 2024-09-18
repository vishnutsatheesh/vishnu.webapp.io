'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d6dd947893a52b9072005a25c50c3b4b",
"version.json": "9c4df048eb9985f1b85ee304ead82e68",
"index.html": "2adc7a8d266272f81f32812e2418e2f0",
"/": "2adc7a8d266272f81f32812e2418e2f0",
"firebase-messaging-sw.js": "c94e604980915525884db03715b108bd",
"main.dart.js": "8ce17b8c058c8dd01804f7609e92f0e8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "99832036d1985652e08e8838addc8209",
"icons/Icon-192.png": "2f294d41a040a8f67eccabd488660a54",
"icons/Icon-maskable-192.png": "2f294d41a040a8f67eccabd488660a54",
"icons/Icon-maskable-512.png": "332f765fb28ac827f7e7937282526499",
"icons/Icon-512.png": "332f765fb28ac827f7e7937282526499",
"manifest.json": "13c4694fc74d4c87befb2e329ede7140",
"assets/AssetManifest.json": "f784edb9f7f77ece0b9db6d005bffb62",
"assets/NOTICES": "1c3b3c2207af9eed23e199e3fec429fa",
"assets/FontManifest.json": "f61c0567f498fed29454a2d6edb950a8",
"assets/AssetManifest.bin.json": "e9edf2824b422b91423488f752a28944",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "037cd016c3b41174a9fa3110ea123d4e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b8bd34fce620b5ccce92c3ab66499dd1",
"assets/fonts/MaterialIcons-Regular.otf": "809f80a7dc1139a1a9323996f5f2271a",
"assets/assets/svg/search.svg": "d801e784c93066bc83098531b063c016",
"assets/assets/svg/grid_4.svg": "fabb1ff495e7cbc0d289a1cb436803b0",
"assets/assets/svg/account.svg": "b830ed8399f3513895fcaa941a848392",
"assets/assets/svg/shopping_bag.svg": "24dbd854849026b8b9c906b0dbe8cf29",
"assets/assets/svg/no_comment.svg": "c2bd6f68a50b627f752182233af1c0ca",
"assets/assets/svg/grid_2.svg": "0824aafc3da8fbd77154d83ca019e246",
"assets/assets/svg/add_product_info.svg": "a6a587dd6254fe6821f831488a912ed9",
"assets/assets/svg/stopwatch_2.svg": "83f3e4112e387d303381f12e6d1bbccf",
"assets/assets/svg/store.svg": "fe529aeaf34c0eb165dda68375b02a20",
"assets/assets/svg/stopwatch.svg": "d966bf1d9f98e6bd05381f180cf7da1c",
"assets/assets/svg/note.svg": "83fe78889947f12df2f63bf52de1c506",
"assets/assets/svg/store_line.svg": "ec79f04d7c189b2e1d1ed4a0bba4830c",
"assets/assets/svg/category_icon.svg": "ba09cfc1a952036fcb3733596e7445eb",
"assets/assets/svg/location_outlined.svg": "22f1aff25b57a46063485337b3717539",
"assets/assets/svg/mic.svg": "515aad8d9912dd1c0ceae59e23e54326",
"assets/assets/svg/bag.svg": "32cba7d1852a102cdad8bb0742f8e58f",
"assets/assets/svg/measuring_tape.svg": "0b4714d490364e3b7aa70181c06bf07e",
"assets/assets/svg/barcode.svg": "2fa1acf8873206b6af5df55a33b88b9c",
"assets/assets/svg/cart/icon_8.svg": "b8e1adc50ee03b2f6d5907b451b57a4d",
"assets/assets/svg/cart/icon_9.svg": "203fa424dd2435edf91ddc1a7cf86351",
"assets/assets/svg/cart/icon_4.svg": "b364df2a462b041b52dfcf983d618727",
"assets/assets/svg/cart/icon_5.svg": "0c95109dbeb8796975bbdd036693ea3a",
"assets/assets/svg/cart/icon_7.svg": "2d9e156e562fc962a2f6eef4123cf9b7",
"assets/assets/svg/cart/icon_6.svg": "00b314cc34b63ced13d9d2c2bf8b91a7",
"assets/assets/svg/cart/icon_2.svg": "7410bc153f88322c4fd90e52eb5cf01c",
"assets/assets/svg/cart/icon_3.svg": "b51c08ff8628dabdf989b09741e135b5",
"assets/assets/svg/cart/icon_1.svg": "a7a3e801e48af7bf5f6e58484dd334b5",
"assets/assets/svg/announcement.svg": "d5981b259a2d57dc0baef9d537c9397c",
"assets/assets/svg/location.svg": "ae5ba648e87a6170d5ef96693a629802",
"assets/assets/svg/gift.svg": "ac381d6cd6eeef6e6dbe79a07a736186",
"assets/assets/svg/sort.svg": "99b1ad84a7d70c797b5ad42b640cb82b",
"assets/assets/svg/filter.svg": "10501af41d03d49ca40468778c09633a",
"assets/assets/svg/logo_icon.svg": "ec79f04d7c189b2e1d1ed4a0bba4830c",
"assets/assets/svg/promotions.svg": "afc76b207e1356645ffc74761e9fed7a",
"assets/assets/svg/login/icon_8.svg": "3d7abad5bef63925b7383739615d60a5",
"assets/assets/svg/login/icon_9.svg": "7133f5069606aa5c74c36e831f22b957",
"assets/assets/svg/login/icon_4.svg": "e34a892a46b25a6050a4445515c4f165",
"assets/assets/svg/login/icon_5.svg": "2e0eb9214592497db1f08683cd159f9e",
"assets/assets/svg/login/icon_7.svg": "567d26ebcfcbb08c9127f518bf128c17",
"assets/assets/svg/login/icon_6.svg": "bb4d3678783e81485a085fdf67718d9f",
"assets/assets/svg/login/icon_2.svg": "06876ee50a3f7cc7b0f4f59c35b5b4be",
"assets/assets/svg/login/icon_3.svg": "9ff2c847cde1a13b10ab68d7fec4f7f3",
"assets/assets/svg/login/icon_1.svg": "cc4e763f8fbf33a8a30bd7ccce5e455f",
"assets/assets/svg/login/icon_12.svg": "1a16f0d4f1b8574b42875335ff98d8bf",
"assets/assets/svg/login/icon_10.svg": "5a838a7ea773290052c45d4bb93cc622",
"assets/assets/svg/login/icon_11.svg": "84ce6a2422909e1f55cdd2e24b31d6cf",
"assets/assets/svg/mouse.svg": "0353d28f6d12c05aeaa8b7b914614190",
"assets/assets/svg/wishlist/icon_8.svg": "a1776402e5646f48cc6c5cb60d589c0a",
"assets/assets/svg/wishlist/icon_9.svg": "95bb3c4b0f6a07fd6f77fe1206cd403a",
"assets/assets/svg/wishlist/icon_4.svg": "dd973bb24b5cf2b93b352bc43dae6a56",
"assets/assets/svg/wishlist/icon_5.svg": "43dd4ca302d27f990f3ec9de92217c20",
"assets/assets/svg/wishlist/icon_7.svg": "f81e453014f0b2fd4b7d6c7ee94bbd44",
"assets/assets/svg/wishlist/icon_6.svg": "dc14c33ba9cf6a27506da10a6de35e9f",
"assets/assets/svg/wishlist/icon_2.svg": "6eacdd0a2ec9289f881638f3ce42e3de",
"assets/assets/svg/wishlist/icon_3.svg": "1af108c922bcb63202da7798bb6eb11a",
"assets/assets/svg/wishlist/icon_1.svg": "d35aa748b7900b834c351f7db2adc3be",
"assets/assets/svg/wishlist/icon_10.svg": "f472bbaac1bf863947a5f51a34995de2",
"assets/assets/images/turtle_black.png": "65acc14dba9d1ad2890eb583c7fa602a",
"assets/assets/images/login_background.jpg": "a0c07fbf3eea0245206ad1e4ea219267",
"assets/assets/images/ic_bike.png": "c99e4345daa6dedcd1736a7e598a3fb9",
"assets/assets/images/similar.png": "4fc7f873a5e19bdfe7c2613f2fea8014",
"assets/assets/images/ic_scheduled.png": "5375f1f7e39565fd3e5f39b169b21a5b",
"assets/assets/images/ic_notification.png": "5df63bed66245ab97b89c40610f8e76a",
"assets/assets/images/ic_empty_cart.png": "11ed9eb7392983bb9fd6473cf6310a78",
"assets/assets/images/ic_user.png": "2b5db9300977a289d8b62e1da3303191",
"assets/assets/images/ic_location.png": "5da5db4ca3cdb9bc1e30f1764c74783d",
"assets/assets/images/suggest_product_background.png": "1303841da5094c61c5ea890e2b625019",
"assets/assets/images/delivery_charges.gif": "ccdb0e64b4fac8bcaa8cb9696b8c051e",
"assets/assets/images/ic_promo.png": "ef4f4e5ed49a3d5e092697f435f78b0e",
"assets/assets/images/img_not_serviceable.png": "53922faa2ca6424d715eb67c99a311b8",
"assets/assets/images/ic_express.png": "1a7121972f5ac025fc5a868a3d74b88d",
"assets/assets/images/free_delivery_background.png": "fcea2e18f45fd55db3dd3517079c4a11",
"assets/assets/images/turtle_white.png": "0dfcb82ca8c207ed4996f576a68ce5b6",
"assets/assets/images/ic_cash.png": "1268d5877cd431d47cd90e0484ed8c89",
"assets/assets/images/ic_placeholder_light.png": "cb45079ead02ac74233cbefd3f0ca4b5",
"assets/assets/images/img_order_successful.png": "cb8b0e70118883b69738aae43c13d0dd",
"assets/assets/images/health_report.png": "10ff42896ce4a28f6f3a9c51c3b15e4a",
"assets/assets/images/ic_offline.jpg": "64f5a59d22f41339d99b2268c0bfa017",
"assets/assets/images/ic_app_icon.png": "a3f64814e3c87e0a8e8930ecdb7d9963",
"assets/assets/images/no_product.png": "5ec9b42fa8ac48da0c51ed38bf067706",
"assets/assets/images/ic_pay_methods.png": "ea6cdff277d773a7b455fe7a569e7f66",
"assets/assets/images/ic_my_location.png": "1d740ad2a3dca0d7abd45e65739b3d0e",
"assets/assets/images/suggest_product_display.png": "1bae4ae0ab232bf4513c3db0dc28bb91",
"assets/assets/images/ic_powered_by.png": "28e273fec98153c42ed100c449ee78c9",
"assets/assets/images/ic_door.png": "b8f7c547cc5371aa040c0eb17dfeb9d2",
"assets/assets/images/img_logo.png": "bc7b319df9e761b5d628c77dfbed09d7",
"assets/assets/lottie/success.json": "222967bf79016eec913327a4b568a1f0",
"assets/assets/lottie/no_network.json": "50b8f54a3586abb378d71a3517ee4390",
"assets/assets/lottie/success_suggest.json": "59fcc8cd0cd62693bb99fc7d532435f0",
"assets/assets/lottie/mic.json": "dddcb89faf9f81b3bf49ba4409458415",
"assets/assets/lottie/return_success.json": "7901ba55dc1498a2608706c2273c3ecd",
"assets/assets/lottie/splash.json": "d1a2d6a3d2df911b1ebeee59d4b3a98f",
"assets/assets/lottie/listening.json": "8dfbd0010bebd3524dfc28dc028a3d5a",
"assets/assets/lottie/popper.json": "62439be78035425b2b336d2527cba1e8",
"assets/assets/lottie/coupon_success.json": "01b93aba14f67b52ff80c43d7ee22dfc",
"assets/assets/lottie/voice.json": "b7cb2966ff9d2855c6dbadc876a34926",
"assets/assets/fonts/helvetica/Helvetica-Oblique.ttf": "5e9d01a525a6945bd22c9a6c4406f75b",
"assets/assets/fonts/helvetica/Helvetica-BoldOblique.ttf": "1243b706dbf774edb405221533014853",
"assets/assets/fonts/helvetica/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/fonts/helvetica/Helvetica-Compressed.otf": "bec59aa5a94f833295a4bd1c137906ed",
"assets/assets/fonts/helvetica/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/assets/fonts/helvetica/Helvetica-Light.ttf": "9a8c18bd1dbe8508bc2525be7e07d0ff",
"assets/assets/fonts/helvetica/Helvetica-Rounded-Bold.otf": "042c8121eea32106ffd2713a2e583c1b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
