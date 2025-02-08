import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderScript, d as createAstro, a as renderComponent, e as addAttribute, f as renderSlot } from './astro/server_CrOENYoF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="navbar" data-astro-cid-pux6a34n> <div class="logo" data-astro-cid-pux6a34n> <a href="/" data-astro-cid-pux6a34n> <img src="https://cloud-glhzd6bu2-hack-club-bot.vercel.app/0habtronics.svg" data-astro-cid-pux6a34n> </a> </div> <div class="links" id="nav-links" data-astro-cid-pux6a34n> <a href="/" data-astro-cid-pux6a34n>HOME</a> <a href="/shop" data-astro-cid-pux6a34n>SHOP</a> <a href="/about-us" data-astro-cid-pux6a34n>ABOUT US</a> </div> <div class="cart" data-astro-cid-pux6a34n> <a href="/cart" data-astro-cid-pux6a34n> <img src="https://cloud-5kujaastv-hack-club-bot.vercel.app/0bag.svg" alt="Cart" height="45px" data-astro-cid-pux6a34n> </a> </div> <div class="hamburger" id="hamburger" data-astro-cid-pux6a34n>
&#9776;
</div> </div>  ${renderScript($$result, "C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/components/Navigation.astro", void 0);

const $$Astro$1 = createAstro("https://www.habtronics.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/maxsr/OneDrive/Desktop/HABTronics/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/maxsr/OneDrive/Desktop/HABTronics/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://www.habtronics.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`${renderComponent($$result, "Analytics", $$Index, { "data-astro-cid-sckkx6r4": true })} <meta charset="UTF-8"> <meta name="viewport" content="width=device-width"> <link rel="icon" type="image/svg+xml" href="/favicon.svg"> <meta name="generator"${addAttribute(Astro2.generator, "content")}> <title>habtronics</title> <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Gugi&display=swap" rel="stylesheet"> ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} `;
}, "C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
