import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderScript } from '../chunks/astro/server_CrOENYoF.mjs';
import 'kleur/colors';
import 'clsx';
import Stripe from 'stripe';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.habtronics.com");
const prerender = false;
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkout;
  const PUBLIC_STRIPE_KEY = "pk_test_51QQsgkJqrJ7WntZur1bwV9zVVO6yreTedRQxFagIhOagj7zIGSYcITOxqR9MjAfpe2qAlVnaTCNGAMOENx2pH8RN00JiIApGQb";
  new Stripe("sk_test_51QQsgkJqrJ7WntZuh1ppfxk2qIRGUihfxpboi0XB4pDMA07BZ8tanybG9K04u3OkBvEHN1YkJPnuOqimAFGtti7w00MmXJxVqB");
  const { origin } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<div id="checkout"${addAttribute(PUBLIC_STRIPE_KEY, "data-stripe-key")}></div> ${renderScript($$result, "C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/checkout.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/checkout.astro", void 0);
const $$file = "C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/checkout.astro";
const $$url = "/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
