import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_RkRHMzL-.mjs';
import { manifest } from './manifest_BX6E6aZw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-us.astro.mjs');
const _page2 = () => import('./pages/api/create-checkout-session.astro.mjs');
const _page3 = () => import('./pages/cart.astro.mjs');
const _page4 = () => import('./pages/checkout.astro.mjs');
const _page5 = () => import('./pages/privacy.astro.mjs');
const _page6 = () => import('./pages/return.astro.mjs');
const _page7 = () => import('./pages/shop.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-us.astro", _page1],
    ["src/pages/api/create-checkout-session.ts", _page2],
    ["src/pages/cart.astro", _page3],
    ["src/pages/checkout.astro", _page4],
    ["src/pages/privacy.md", _page5],
    ["src/pages/return.astro", _page6],
    ["src/pages/shop.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a17430c6-836d-44d5-a5e6-ef74820072ad",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
