import type { APIRoute } from 'astro';
import Stripe from 'stripe';
export const prerender = false;

const stripe = new Stripe(import.meta.env.STRIPE_KEY);

export const GET: APIRoute = async ({ request }) => {
  try {
    const products = await stripe.products.list();

    const productMetadata = await Promise.all(products.data.map(async product => ({
      id: product.id,
      name: product.name,
      price_id: product.default_price,
      price: (((typeof product.default_price === 'string' ? await stripe.prices.retrieve(product.default_price) : null)?.unit_amount)! / 100).toFixed(2),
      image: product.images[0],
      image_array: product.images,
      metadata: product.metadata,
    })));

    return new Response(JSON.stringify(productMetadata), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error retrieving product metadata:', error);
    return new Response(JSON.stringify({ error: (error as Error)?.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};