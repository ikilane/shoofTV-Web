'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "28ec96b9c5a6f68cfa37861500ab7f31",
"index.html": "8ab320e813ff8f6d2d8389ce26b5fd6d",
"/": "8ab320e813ff8f6d2d8389ce26b5fd6d",
"main.dart.js": "f529c4d566f3061deb6d70dc4e2d7615",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "2589617d05d155991bf76578f6241451",
"icons/Icon-192.png": "26ca7fbf610f53c8f5d4daefca9027c2",
"icons/Icon-maskable-192.png": "26ca7fbf610f53c8f5d4daefca9027c2",
"icons/Icon-maskable-512.png": "730640caa918db4a931e2845aaad9d9d",
"icons/Icon-512.png": "730640caa918db4a931e2845aaad9d9d",
"manifest.json": "9593d97d4a63cad0ce4b2076c684dbf9",
"assets/AssetManifest.json": "b94d110447bf96c9e586844b0379597d",
"assets/NOTICES": "e2f0650a9d1935d33c1a5021fe5ad0af",
"assets/FontManifest.json": "95966a935cd29ec83ef77d37bf03de93",
"assets/AssetManifest.bin.json": "3b0f81d578ec3412460d3e03fb11dd04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/animated_icon/assets/cool.json": "fed987b806728dfd57109dfa8fa7e4b9",
"assets/packages/animated_icon/assets/mute.json": "a7cd312791b602731566644cda8f01fd",
"assets/packages/animated_icon/assets/chat-message.json": "3d3b60d909f1ef7ae22be6f173003fef",
"assets/packages/animated_icon/assets/sign-out.json": "f375d0e8ba61b296e4c0ae9353965773",
"assets/packages/animated_icon/assets/loading_1.json": "75efe45219ef6143429b4b225634449d",
"assets/packages/animated_icon/assets/share.json": "bbca283e078a88e5e69608c207166403",
"assets/packages/animated_icon/assets/clock.json": "ef46b5eeb36672562513d96f630ccd69",
"assets/packages/animated_icon/assets/expensive.json": "0bb81a1ba4237d2e505c506a319f8bb2",
"assets/packages/animated_icon/assets/shocker.json": "6e697424f3c102bc2000c30245ddd14e",
"assets/packages/animated_icon/assets/upload.json": "0bd081997f18f3ec404d5903689b5411",
"assets/packages/animated_icon/assets/play_stop.json": "bed868226187c4132aa075a1277d11b8",
"assets/packages/animated_icon/assets/volume.json": "caf67509ea1a413e0627e5c6784b05af",
"assets/packages/animated_icon/assets/walk.json": "df4aba413834afcd8af026b1749c6040",
"assets/packages/animated_icon/assets/spinning_arrows.json": "8134b71f41e59b184d48fcd682b7ae43",
"assets/packages/animated_icon/assets/silent.json": "78626c6f16e9300839c518a92a19dd2d",
"assets/packages/animated_icon/assets/skip_forwards.json": "2af637238aa74085237d8554175a0d3c",
"assets/packages/animated_icon/assets/bell.json": "668dba34f67b4ed2fe0361a4391cc4aa",
"assets/packages/animated_icon/assets/settings.json": "4b6b3d0922452a469d80f1615fa1f3a0",
"assets/packages/animated_icon/assets/paid.json": "6bf0ede45aa0082ff8ba2d1c7d1d4df2",
"assets/packages/animated_icon/assets/no_comments.json": "63e9000d6324078c8c9b1848324b3d88",
"assets/packages/animated_icon/assets/wifi_search.json": "d37d07bb5deee76c31d7f6c383c6de22",
"assets/packages/animated_icon/assets/iphone_spinner.json": "e0d52eb299840750b45a7e80c43e7d55",
"assets/packages/animated_icon/assets/favorite_folder.json": "5c5be33497e5752392a757948f81ec5c",
"assets/packages/animated_icon/assets/discount.json": "8c523e7761603f05583c06a17354b64d",
"assets/packages/animated_icon/assets/edit_cancel.json": "4ee6ba5b65bf7d2ceb839aa990c7e90e",
"assets/packages/animated_icon/assets/calculator.json": "fe1abd248aff9fbc9f30a33fae8ca1e0",
"assets/packages/animated_icon/assets/numerical_sorting.json": "29ec74211cc6780607b965a97b7ddfa4",
"assets/packages/animated_icon/assets/thumb_up.json": "ae32094bbaf5a06c2fe785618c8ed4c5",
"assets/packages/animated_icon/assets/download.json": "5af632f5d17961301b0c4eca42b79d8c",
"assets/packages/animated_icon/assets/drag-left.json": "5bc31de4409a61a7a372da9353cd2a1a",
"assets/packages/animated_icon/assets/wink.json": "05858ea381a0523af1c93b8a045d01c6",
"assets/packages/animated_icon/assets/circles_menu_2.json": "c433cb02bf56657a42c1bb5963fa607d",
"assets/packages/animated_icon/assets/submit_progress.json": "73e31ca174258b4375dd8907bf4e598c",
"assets/packages/animated_icon/assets/cloud.json": "c76e77439df441152e8ab6f7b3bcd12c",
"assets/packages/animated_icon/assets/file.json": "3c5a683c8f0d5847e82447bc91f40d4b",
"assets/packages/animated_icon/assets/compass.json": "e29b3f473575de6c02af02da2f28690e",
"assets/packages/animated_icon/assets/loading_7.json": "6dd95d36ea9d09924d92f18e14def8ab",
"assets/packages/animated_icon/assets/birthday_cake.json": "715293a88d166b3d166c77c51133d30e",
"assets/packages/animated_icon/assets/fullscreen.json": "04fe2e8b50ddf67d14d951414f8667c3",
"assets/packages/animated_icon/assets/loading_6.json": "cad4b6ccd0a1e43b9c1ed47133dabb04",
"assets/packages/animated_icon/assets/heart_2.json": "ec728a02801a28844116fb7c2b8f70d5",
"assets/packages/animated_icon/assets/hourglass.json": "372b56bb7dc3e56090a6494a7fb4d69b",
"assets/packages/animated_icon/assets/live-video-on.json": "638fffb60c94010b7f8d68f550eba331",
"assets/packages/animated_icon/assets/circles_menu_3.json": "5df3f9c85e0ca9e5bc56b718ece86226",
"assets/packages/animated_icon/assets/drag-right.json": "979c0316830e0f193c4241a9e590cee0",
"assets/packages/animated_icon/assets/edit.json": "139320ad4e8be4aeb5421351744fec46",
"assets/packages/animated_icon/assets/demo.png": "7f9d85174d832fdd9ec3caaf583be682",
"assets/packages/animated_icon/assets/checkmark_ok.json": "d43791f67ed2065d8534d30ad3283365",
"assets/packages/animated_icon/assets/rotate.json": "0f43b79dc55b93a3d12948ccea68460d",
"assets/packages/animated_icon/assets/gmail.json": "b37689e4d0b1a31ddb7cc6f0b08df20b",
"assets/packages/animated_icon/assets/sleeping.json": "eeab4b61177e0b26feec443cda21e936",
"assets/packages/animated_icon/assets/fog_weather.json": "75b3d483c81c75eb4bac6fdb79b299ef",
"assets/packages/animated_icon/assets/crying.json": "57647df4780a9f4af5abc02124eb3dc7",
"assets/packages/animated_icon/assets/power-off-button.json": "e0fa101ae10bbed6a3aa85c20c9f47aa",
"assets/packages/animated_icon/assets/play_stop_2.json": "1762898e2b28750ae79fc22bf868efc5",
"assets/packages/animated_icon/assets/checkbox.json": "2930689eeba8a91e48be3089dccc53e1",
"assets/packages/animated_icon/assets/calendar-tear.json": "4d6e4bf2c0bd0e845ca1ff161003ebe8",
"assets/packages/animated_icon/assets/vomited.json": "1590f196364d415de15209f874366235",
"assets/packages/animated_icon/assets/diamond.json": "e983e51ad87489050b061cc4dde04a86",
"assets/packages/animated_icon/assets/block_mic.json": "8688283117e0044ec752ec2421b5c7cd",
"assets/packages/animated_icon/assets/save-changes.json": "5813bb5a358888658a51386819169671",
"assets/packages/animated_icon/assets/loading_5.json": "a831cd127c2d019778528f198cfefcc3",
"assets/packages/animated_icon/assets/document.json": "05b47c11f7dcee983a0e1c24e698fcb2",
"assets/packages/animated_icon/assets/print.json": "d54ba53aacc6d8fe2ea22012805d51b2",
"assets/packages/animated_icon/assets/menu_arrow.json": "16081971f09f67a26fc1b3f46b8802b1",
"assets/packages/animated_icon/assets/menu.json": "86180df740cc1a224561e130d1b81da2",
"assets/packages/animated_icon/assets/skip_backwards.json": "2835cc51b2e2766df5a8bd7a36518312",
"assets/packages/animated_icon/assets/left_right.json": "5806bf128cea8c82d106f29a584c1ea0",
"assets/packages/animated_icon/assets/qr-code.json": "66255531a8987c95d9115bbc6b6c4846",
"assets/packages/animated_icon/assets/loading_4.json": "66268fbf3f4c7dea6a81df21a5a1e46a",
"assets/packages/animated_icon/assets/add.json": "b7bb068a9790921472e8c717fe5ca168",
"assets/packages/animated_icon/assets/neutral_face.json": "9417a2503732b758f921064ffe09a3f4",
"assets/packages/animated_icon/assets/list.json": "fa94a8bf563855b68320e5b76aa5f764",
"assets/packages/animated_icon/assets/clear-symbol.json": "307c246cff2d27c944fb33cf4e24eb28",
"assets/packages/animated_icon/assets/alphabetical_sorting.json": "3f2b896ddd3d7f9d9359787eef3e846a",
"assets/packages/animated_icon/assets/heart.json": "4fd6bbd2a785c55c3c729217f9981cbc",
"assets/packages/animated_icon/assets/map_pointer.json": "018a74eec55f8959347aefbaf10f9dcb",
"assets/packages/animated_icon/assets/refresh.json": "0e4661e60e73fb2080d2248f1cfddfb5",
"assets/packages/animated_icon/assets/fatal-error.json": "9d82a9938e0eb82288d97f2948948c10",
"assets/packages/animated_icon/assets/trash_bin.json": "d66d677f84f62f9037f321af36acbfe6",
"assets/packages/animated_icon/assets/skateboarding.json": "36c68e00d9cf64d3f13746ccc3cd2bda",
"assets/packages/animated_icon/assets/tune.json": "4b763ed0cf954405cd7b2d501b63cd99",
"assets/packages/animated_icon/assets/loading_3.json": "18e23d18db166f2dff169cc1983f774f",
"assets/packages/animated_icon/assets/in_love.json": "9d3e528375ee6e063e1a952aa758e67b",
"assets/packages/animated_icon/assets/eye.json": "bf14651a14e319ac6d2ae8a37168e05f",
"assets/packages/animated_icon/assets/cross.json": "4f8186dcb99e125c7cae80c8a6c7d58c",
"assets/packages/animated_icon/assets/battery.json": "31acf00bd98d26ed21250a6d236ee37f",
"assets/packages/animated_icon/assets/calendar.json": "b74760ba851d59bd1acf3307bb0e9c12",
"assets/packages/animated_icon/assets/unlock.json": "bda8666eab56bd80fc6af5dbe5702458",
"assets/packages/animated_icon/assets/dollar.json": "41a4d363da9e51feade4d774712837b9",
"assets/packages/animated_icon/assets/info-click.json": "9c4df7c49129c6cafa5c341026d43115",
"assets/packages/animated_icon/assets/zoom.json": "5c12ae0d082ada5f1ad1633c556f8c0c",
"assets/packages/animated_icon/assets/missed_call.json": "d69450dda953da82afa80f5e14cfcdf2",
"assets/packages/animated_icon/assets/down-arrow.json": "d1ce2bcb82fe6075a7ed7356da89836f",
"assets/packages/animated_icon/assets/edit_ok.json": "51350be0e5c184d7c524fe38f40902f4",
"assets/packages/animated_icon/assets/internet.json": "de90409fd58251147830605d9896e44c",
"assets/packages/animated_icon/assets/home.json": "f7e97ef1b623b8db02a8db2476f37442",
"assets/packages/animated_icon/assets/bookmark.json": "37e02b2261b19c5944081d94883e24e3",
"assets/packages/animated_icon/assets/day_night_weather.json": "af60779aee2d8d834027bcf5ef2548c5",
"assets/packages/animated_icon/assets/angel.json": "ec103cc7e54b24104083c19f44d59ac4",
"assets/packages/animated_icon/assets/toggle.json": "3b2b9be0e4e36fefaa418741f3d0e26c",
"assets/packages/animated_icon/assets/pause.json": "bd53aeea8b02f227dd372454be07e120",
"assets/packages/animated_icon/assets/tongue_out.json": "0ad19f80c100e8ebfdd6b3e23ccea745",
"assets/packages/animated_icon/assets/map.json": "6a4ad8816ccaa5a630279fdef4f06ebe",
"assets/packages/animated_icon/assets/activity.json": "8c7cbe8cfb2c35ccc4751194573222a3",
"assets/packages/animated_icon/assets/smile.json": "dc30e2d8ae9ae4117513615780e0b452",
"assets/packages/animated_icon/assets/laughing.json": "b6f5507a7f3a6bd4d606a21282615e68",
"assets/packages/animated_icon/assets/puzzled.json": "365f0e93cef957303301c709fb4e6d63",
"assets/packages/animated_icon/assets/loading_2.json": "f6e465a44b33233ce28a12ee76045dda",
"assets/packages/animated_icon/assets/confused.json": "30cbf5b57f504158300c82b37d172cf9",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fba08a608eecfbdd41add1fc654b0812",
"assets/fonts/MaterialIcons-Regular.otf": "35f22e262ebc7afd68fcbdbcc743a5e8",
"assets/assets/images/live-stream.png": "63e5da7398eb42ab89bc4bf772d15609",
"assets/assets/images/background.jpeg": "b8f8cf9ede7568f1f3750655c1e95a7f",
"assets/assets/images/clapperboard.png": "21801d996fa0bba548c6b0d88b1f069f",
"assets/assets/images/homeCards/movies.png": "b8c26dba54e4492ab3906d0219e22c8f",
"assets/assets/images/homeCards/series.png": "295c75cb2a16f7982165521276914794",
"assets/assets/images/homeCards/sport.png": "24fc4a359cfd47847818dcd142c43700",
"assets/assets/images/homeCards/Live.png": "61bbdec12e5fecf46576719184b5237f",
"assets/assets/images/placeholder.png": "c2e92342fe39036073fb9c7ec95e38e7",
"assets/assets/images/logo.png": "4ca737a70e949031adab0845fef8f0f5",
"assets/assets/images/film-reel.png": "d6348978de5fa31317b446780ee78123",
"assets/assets/icons/1024.png": "e5fd0e4cf57f0cffaa645526d5c04a89",
"assets/assets/icons/SearchIcon.png": "b7de723da4700099fc3b41c74fca3cbb",
"assets/assets/icons/banner.png": "f73e6c69200a746c0fb4d21c12e9d51b",
"assets/assets/icons/FavIcon.png": "2254d2272c70c45f4743d96236968811",
"assets/assets/icons/UserIcon.png": "c544c3298b5b307427751bfbf2202ae7",
"assets/assets/icons/switchMode.png": "faf4967d5cfafd1a5c64c5cc037b48f8",
"assets/assets/Lottie/shoof-logo-animation.json": "f2441122920d416a1dd87f8d82b964e6",
"assets/assets/fonts/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/fonts/Cairo-Black.ttf": "d5cfdef0ee5e1b9765295e3b58f43233",
"web%20version.zip": "79e0990947bc045c0935a7abd3ead5b9",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
