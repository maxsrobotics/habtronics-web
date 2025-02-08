import Stripe from 'stripe';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const stripe = new Stripe("sk_test_51QQsgkJqrJ7WntZuh1ppfxk2qIRGUihfxpboi0XB4pDMA07BZ8tanybG9K04u3OkBvEHN1YkJPnuOqimAFGtti7w00MmXJxVqB");
const POST = async ({ request }) => {
  try {
    const { lineItems } = await request.json();
    console.log("Received line items:", lineItems);
    if (!lineItems || lineItems.length === 0) {
      throw new Error("No line items provided");
    }
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: lineItems.map((item) => ({
        price: item.priceId,
        quantity: item.quantity
      })),
      mode: "payment",
      return_url: `${request.headers.get("origin")}/return?session_id={CHECKOUT_SESSION_ID}`,
      automatic_tax: { enabled: true },
      shipping_address_collection: {
        allowed_countries: ["US"]
      },
      allow_promotion_codes: true
    });
    console.log("Created session:", session);
    return new Response(JSON.stringify({ client_secret: session.client_secret }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(JSON.stringify({ error: error?.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
