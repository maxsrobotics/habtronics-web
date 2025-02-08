import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_CrOENYoF.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_FHbv3l7-.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/maxsr/OneDrive/Desktop/HABTronics/","cacheDir":"file:///C:/Users/maxsr/OneDrive/Desktop/HABTronics/node_modules/.astro/","outDir":"file:///C:/Users/maxsr/OneDrive/Desktop/HABTronics/dist/","srcDir":"file:///C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/","publicDir":"file:///C:/Users/maxsr/OneDrive/Desktop/HABTronics/public/","buildClientDir":"file:///C:/Users/maxsr/OneDrive/Desktop/HABTronics/dist/client/","buildServerDir":"file:///C:/Users/maxsr/OneDrive/Desktop/HABTronics/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about-us/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about-us","isIndex":false,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us.astro","pathname":"/about-us","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"cart/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cart","isIndex":false,"type":"page","pattern":"^\\/cart\\/?$","segments":[[{"content":"cart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cart.astro","pathname":"/cart","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.md","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"shop/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shop","isIndex":false,"type":"page","pattern":"^\\/shop\\/?$","segments":[[{"content":"shop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shop.astro","pathname":"/shop","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/create-checkout-session","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/create-checkout-session\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"create-checkout-session","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/create-checkout-session.ts","pathname":"/api/create-checkout-session","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/checkout","isIndex":false,"type":"page","pattern":"^\\/checkout\\/?$","segments":[[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/checkout.astro","pathname":"/checkout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"h1[data-astro-cid-y2dj5xjd]{font-family:Gugi,sans-serif;font-size:40px;text-align:center}p[data-astro-cid-y2dj5xjd]{font-family:Gugi,sans-serif;font-size:20px;text-align:center}\n.navbar[data-astro-cid-pux6a34n]{display:flex;position:fixed;top:0;width:100%;height:60px;background-color:#000;align-items:center;flex-direction:row}.logo[data-astro-cid-pux6a34n] img[data-astro-cid-pux6a34n]{height:60px;filter:invert()}.links[data-astro-cid-pux6a34n]{display:flex;justify-self:flex-end;gap:75px;margin-left:auto;margin-right:75px;align-self:center}.links[data-astro-cid-pux6a34n] a[data-astro-cid-pux6a34n]{font-family:Gugi;font-size:25px;color:#fff;text-decoration:none}.links[data-astro-cid-pux6a34n] a[data-astro-cid-pux6a34n]:hover{opacity:50%}.cart[data-astro-cid-pux6a34n]{margin-right:20px;align-self:center}.cart[data-astro-cid-pux6a34n] img[data-astro-cid-pux6a34n]{height:30px;filter:invert()}.cart[data-astro-cid-pux6a34n]:hover{opacity:50%}.hamburger[data-astro-cid-pux6a34n]{display:none;font-size:30px;color:#fff;cursor:pointer;margin-right:20px}@media (max-width: 768px){.links[data-astro-cid-pux6a34n]{display:none;flex-direction:column;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;justify-content:center;align-items:center;text-align:center;z-index:1000}.links[data-astro-cid-pux6a34n] a[data-astro-cid-pux6a34n]{padding:20px;border-bottom:1px solid white;width:100%;text-align:center}.hamburger[data-astro-cid-pux6a34n]{display:block;margin-left:auto}}.menu-open[data-astro-cid-pux6a34n] .content[data-astro-cid-pux6a34n]{display:none}html,body{display:flex;flex-direction:column;justify-content:center;margin:40px 0 0;padding:0}p[data-astro-cid-sckkx6r4]{color:gray;text-align:center;margin-bottom:10px;font-size:20px}@media only screen and (max-width: 768px){p[data-astro-cid-sckkx6r4]{font-size:10px}@media only screen and (max-width: 400px){p[data-astro-cid-sckkx6r4]{font-size:5px}}}\n"}],"routeData":{"route":"/return","isIndex":false,"type":"page","pattern":"^\\/return\\/?$","segments":[[{"content":"return","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/return.astro","pathname":"/return","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.habtronics.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/about-us@_@astro":"pages/about-us.astro.mjs","\u0000@astro-page:src/pages/api/create-checkout-session@_@ts":"pages/api/create-checkout-session.astro.mjs","\u0000@astro-page:src/pages/cart@_@astro":"pages/cart.astro.mjs","\u0000@astro-page:src/pages/checkout@_@astro":"pages/checkout.astro.mjs","\u0000@astro-page:src/pages/privacy@_@md":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/return@_@astro":"pages/return.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/shop@_@astro":"pages/shop.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/maxsr/OneDrive/Desktop/HABTronics/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BENtuMwe.mjs","\u0000@astrojs-manifest":"manifest_BX6E6aZw.mjs","C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/checkout.astro?astro&type=script&index=0&lang.ts":"_astro/checkout.astro_astro_type_script_index_0_lang.D5CArlYk.js","C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/cart.astro?astro&type=script&index=0&lang.ts":"_astro/cart.astro_astro_type_script_index_0_lang.BkocRWoA.js","C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/shop.astro?astro&type=script&index=0&lang.ts":"_astro/shop.astro_astro_type_script_index_0_lang.DCv6_tC-.js","C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/return.astro?astro&type=script&index=0&lang.ts":"_astro/return.astro_astro_type_script_index_0_lang.DWc4KzSQ.js","C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/components/ProductCard.astro?astro&type=script&index=0&lang.ts":"_astro/ProductCard.astro_astro_type_script_index_0_lang.Dk8yUU_x.js","C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.-MKUA71V.js","C:/Users/maxsr/OneDrive/Desktop/HABTronics/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BaXdWEvT.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/checkout.astro?astro&type=script&index=0&lang.ts","var f=\"https://js.stripe.com/v3\",m=/^https:\\/\\/js\\.stripe\\.com\\/v3\\/?(\\?.*)?$/;var S=function(){for(var e=document.querySelectorAll('script[src^=\"'.concat(f,'\"]')),r=0;r<e.length;r++){var o=e[r];if(m.test(o.src))return o}return null},d=function(e){var r=\"\",o=document.createElement(\"script\");o.src=\"\".concat(f).concat(r);var n=document.head||document.body;if(!n)throw new Error(\"Expected document.body not to be null. Stripe.js requires a <body> element.\");return n.appendChild(o),o},w=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:\"stripe-js\",version:\"5.6.0\",startTime:r})},a=null,u=null,s=null,g=function(e){return function(){e(new Error(\"Failed to load Stripe.js\"))}},E=function(e,r){return function(){window.Stripe?e(window.Stripe):r(new Error(\"Stripe.js not available\"))}},y=function(e){return a!==null?a:(a=new Promise(function(r,o){if(typeof window>\"u\"||typeof document>\"u\"){r(null);return}if(window.Stripe){r(window.Stripe);return}try{var n=S();if(!(n&&e)){if(!n)n=d(e);else if(n&&s!==null&&u!==null){var i;n.removeEventListener(\"load\",s),n.removeEventListener(\"error\",u),(i=n.parentNode)===null||i===void 0||i.removeChild(n),n=d(e)}}s=E(r,o),u=g(o),n.addEventListener(\"load\",s),n.addEventListener(\"error\",u)}catch(v){o(v);return}}),a.catch(function(r){return a=null,Promise.reject(r)}))},L=function(e,r,o){if(e===null)return null;var n=e.apply(void 0,r);return w(n,o),n},c,h=!1,p=function(){return c||(c=y(null).catch(function(e){return c=null,Promise.reject(e)}),c)};Promise.resolve().then(function(){return p()}).catch(function(t){h||console.warn(t)});var k=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];h=!0;var n=Date.now();return p().then(function(i){return L(i,r,n)})};function j(){return JSON.parse(localStorage.getItem(\"cart\")||\"[]\")}const l=j();l.length===0&&(window.location.href=\"/shop\");console.log(\"Line items from localStorage:\",l);async function P(){try{const t=await fetch(\"/api/create-checkout-session\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({lineItems:l})});if(!t.ok){const e=await t.text();throw console.error(\"Failed to create checkout session:\",e),new Error(\"Failed to create checkout session\")}return await t.json()}catch(t){throw console.error(\"Error fetching checkout session:\",t),t}}async function b(){try{const t=document.querySelector(\"#checkout\");if(!t)throw new Error(\"Checkout div not found\");const e=await k(t.getAttribute(\"data-stripe-key\"));if(!e)throw new Error(\"Failed to load Stripe\");const r=await P();console.log(\"Checkout session:\",r),t.setAttribute(\"data-client-secret\",r.client_secret),(await e.initEmbeddedCheckout({clientSecret:r.client_secret})).mount(\"#checkout\")}catch(t){console.error(\"Error during checkout initialization:\",t)}}b();"],["C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/cart.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const r=JSON.parse(localStorage.getItem(\"cart\")||\"[]\"),l=document.getElementById(\"cart-items\"),a=r.reduce((t,e)=>{const n=t.find(i=>i.priceId===e.priceId);return n?n.quantity=e.quantity:t.push(e),t},[]);a.forEach(t=>{const e=document.createElement(\"tr\");e.innerHTML=`\n        <td>${t.title}</td>\n        <td>$${t.price}</td>\n        <td><input type=\"number\" value=\"${t.quantity}\" min=\"1\" data-price-id=\"${t.priceId}\" class=\"quantity-input\"></td>\n        <td>$${(t.price*t.quantity).toFixed(2)}</td>\n        <td><button class=\"delete-button\" data-price-id=\"${t.priceId}\">Delete</button></td>\n      `,l.appendChild(e)}),document.querySelectorAll(\".quantity-input\").forEach(t=>{t.addEventListener(\"change\",e=>{const n=e.target;let i=parseInt(n.value);i<1&&(i=1,n.value=\"1\");const o=n.getAttribute(\"data-price-id\"),c=a.find(d=>d.priceId===o);if(c){c.quantity=i,n.closest(\"tr\").querySelector(\"td:nth-last-child(2)\").textContent=`$${(c.price*c.quantity).toFixed(2)}`;const d=r.find(s=>s.priceId===o);d&&(d.quantity=i),localStorage.setItem(\"cart\",JSON.stringify(r))}})}),document.querySelectorAll(\".delete-button\").forEach(t=>{t.addEventListener(\"click\",e=>{const n=e.target,i=n.getAttribute(\"data-price-id\"),o=a.findIndex(d=>d.priceId===i);o>-1&&a.splice(o,1);const c=r.findIndex(d=>d.priceId===i);c>-1&&r.splice(c,1),localStorage.setItem(\"cart\",JSON.stringify(r)),n.closest(\"tr\").remove()})}),document.getElementById(\"checkout-button\").addEventListener(\"click\",()=>{window.location.href=\"/checkout\"})});"],["C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/shop.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"search-input\"),n=document.getElementById(\"product-list\");!e||!n||e.addEventListener(\"input\",()=>{const s=e.value.toLowerCase(),c=n.children;Array.from(c).forEach(d=>{const t=d,o=t.querySelector(\"h1\");if(!o)return;const r=o.textContent?.toLowerCase();r&&r.includes(s)?t.style.display=\"flex\":t.style.display=\"none\"})})});"],["C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/return.astro?astro&type=script&index=0&lang.ts","localStorage.removeItem(\"cart\");"],["C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/components/ProductCard.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"add-to-cart\"),a=document.getElementById(\"tag-data\");o.addEventListener(\"click\",()=>i(a.getAttribute(\"data-title\"),a.getAttribute(\"data-price\"),a.getAttribute(\"data-price-id\")));function i(d,r,c){const t=JSON.parse(localStorage.getItem(\"cart\")||\"[]\"),n=t.findIndex(e=>e.priceId===c);if(n>-1)t[n].quantity+=1;else{const e={title:d,price:r,priceId:c,quantity:1};t.push(e)}localStorage.setItem(\"cart\",JSON.stringify(t)),alert(`${d} has been added to your cart!`)}"],["C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/components/Navigation.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const n=document.getElementById(\"hamburger\"),e=document.getElementById(\"nav-links\");n&&e&&n.addEventListener(\"click\",()=>{e.style.display=e.style.display===\"flex\"?\"none\":\"flex\",document.body.classList.toggle(\"menu-open\")})});"],["C:/Users/maxsr/OneDrive/Desktop/HABTronics/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var l=\"@vercel/analytics\",f=\"1.4.1\",v=()=>{window.va||(window.va=function(...r){(window.vaq=window.vaq||[]).push(r)})};function d(){return typeof window<\"u\"}function u(){try{const e=\"production\"}catch{}return\"production\"}function w(e=\"auto\"){if(e===\"auto\"){window.vam=u();return}window.vam=e}function m(){return(d()?window.vam:u())||\"production\"}function c(){return m()===\"development\"}function p(e,r){if(!e||!r)return e;let n=e;try{const t=Object.entries(r);for(const[a,o]of t)if(!Array.isArray(o)){const i=s(o);i.test(n)&&(n=n.replace(i,`/[${a}]`))}for(const[a,o]of t)if(Array.isArray(o)){const i=s(o.join(\"/\"));i.test(n)&&(n=n.replace(i,`/[...${a}]`))}return n}catch{return e}}function s(e){return new RegExp(`/${y(e)}(?=[/?#]|$)`)}function y(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}var b=\"https://va.vercel-scripts.com/v1/script.debug.js\",g=\"/_vercel/insights/script.js\";function h(e={debug:!0}){var r;if(!d())return;w(e.mode),v(),e.beforeSend&&((r=window.va)==null||r.call(window,\"beforeSend\",e.beforeSend));const n=e.scriptSrc||(c()?b:g);if(document.head.querySelector(`script[src*=\"${n}\"]`))return;const t=document.createElement(\"script\");t.src=n,t.defer=!0,t.dataset.sdkn=l+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=f,e.disableAutoTrack&&(t.dataset.disableAutoTrack=\"1\"),e.endpoint&&(t.dataset.endpoint=e.endpoint),e.dsn&&(t.dataset.dsn=e.dsn),t.onerror=()=>{const a=c()?\"Please check if any ad blockers are enabled and try again.\":\"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${a}`)},c()&&e.debug===!1&&(t.dataset.debug=\"false\"),document.head.appendChild(t)}function k({route:e,path:r}){var n;(n=window.va)==null||n.call(window,\"pageview\",{route:e,path:r})}customElements.define(\"vercel-analytics\",class extends HTMLElement{constructor(){super();try{const r=JSON.parse(this.dataset.props??\"{}\"),n=JSON.parse(this.dataset.params??\"{}\");h({...r,disableAutoTrack:!0,framework:\"astro\",beforeSend:window.webAnalyticsBeforeSend});const t=this.dataset.pathname;k({route:p(t??\"\",n),path:t})}catch(r){throw new Error(`Failed to parse WebAnalytics properties: ${r}`)}}});"]],"assets":["/favicon.svg","/about-us/index.html","/cart/index.html","/privacy/index.html","/shop/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"f6d2bL9OX8f9i7GXxAttgvMdJo/H2n0bmO3iY3GRuDc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
