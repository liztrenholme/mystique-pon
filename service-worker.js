"use strict";var precacheConfig=[["/index.html","3f178e703190f7d6bca7d10ddeb07483"],["/static/css/main.5e810aec.css","56fccf4b2786388090ee9f565775ba82"],["/static/js/main.bcfb7c26.js","175985cea7275e1a821e7640dd526a24"],["/static/media/green-toy.ee0c2839.JPG","ee0c28397dfc07c415868067f61d615a"],["/static/media/headshot.8d04c373.JPG","8d04c373136f962daa58656a9fefc352"],["/static/media/p1.8c1b8aff.jpg","8c1b8affaa6686629c826be3d3da6606"],["/static/media/p2.50433dfc.jpg","50433dfcce213b07a38afbd96a7c9d03"],["/static/media/p3.06eb4752.jpg","06eb47525e0f51463fac906629b25458"],["/static/media/p4.e6eafad8.jpg","e6eafad806d8e5381fc51031d1bc316d"],["/static/media/playing.f2cd0656.JPG","f2cd065626b981821fbadd11b6cbad28"],["/static/media/pumpkin.0a56bec2.JPEG","0a56bec2acada646513a3c072f50c840"],["/static/media/pumpkin1.83514965.JPEG","83514965bfe29a2bc513fe6825ae42db"],["/static/media/pumpkin2.f5b2b55a.JPEG","f5b2b55a9e250f889879b35d6da56b1f"],["/static/media/pumpkin4.ea634839.JPEG","ea6348398ebb9451eb19e14d1db538cc"],["/static/media/puppy1.032ad932.JPG","032ad93276e22eab7fb107519cd5eb43"],["/static/media/puppy2.4273ffee.JPG","4273ffeef949a5dbb2a4941e8fd942d9"],["/static/media/puppy3.fc5567f6.JPG","fc5567f692691f572471bb4ecb1708a4"],["/static/media/puppy4.8826591d.JPG","8826591d02ab8f948da89344fcf94199"],["/static/media/puppy5.c5416884.JPG","c5416884c55c9ba41b53b827c1d06f47"],["/static/media/simon.1d8622c0.JPG","1d8622c04ca9b9fc94b65490803829ff"],["/static/media/sitting-sweetly.5489bbf5.PNG","5489bbf5b892d61843f57408d3e8fe0d"],["/static/media/together-nature.34a9c47a.png","34a9c47a105cbaf5482c1a316d632e21"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});