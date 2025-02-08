import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, b as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CrOENYoF.mjs';
import 'kleur/colors';
import Stripe from 'stripe';
import { $ as $$Layout } from '../chunks/Layout_Bn1LiW08.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.habtronics.com");
const prerender = false;
const $$Return = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Return;
  const sessionID = Astro2.url.searchParams.get("session_id");
  const stripe = new Stripe("sk_test_51QQsgkJqrJ7WntZuh1ppfxk2qIRGUihfxpboi0XB4pDMA07BZ8tanybG9K04u3OkBvEHN1YkJPnuOqimAFGtti7w00MmXJxVqB");
  let sessionx;
  try {
    sessionx = await stripe.checkout.sessions.retrieve(sessionID);
  } catch (e) {
    return Astro2.redirect("/shop");
  }
  const session = await stripe.checkout.sessions.retrieve(sessionID);
  const { name, email } = session.customer_details;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-y2dj5xjd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-y2dj5xjd>Thanks for your purchase, ${name}!</h1> <p data-astro-cid-y2dj5xjd>We've sent a receipt to ${email}.</p> ` })} ${renderScript($$result, "C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/return.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/return.astro", void 0);
const $$file = "C:/Users/maxsr/OneDrive/Desktop/HABTronics/src/pages/return.astro";
const $$url = "/return";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Return,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
