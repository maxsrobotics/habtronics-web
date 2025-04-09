import type { APIRoute } from 'astro';
import Stripe from 'stripe';
export const prerender = false;

const stripe = new Stripe(import.meta.env.STRIPE_KEY);

// In-memory cache
let cachedProducts: any[] | null = null;
let lastFetched = 0;
const CACHE_TTL = 1000 * 60 * 10; // 5 minutes

export const GET: APIRoute = async () => {
  const now = Date.now();

  // If cache is still valid, serve it
  if (cachedProducts && now - lastFetched < CACHE_TTL) {
    console.log('Serving cached product metadata...');
    return new Response(JSON.stringify(cachedProducts), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Otherwise, fetch fresh from Stripe
  try {
    console.log('Fetching product metadata from Stripe...');
    const products = await stripe.products.list();

    const productMetadata = await Promise.all(
      products.data.map(async (product) => {
        const priceObj = typeof product.default_price === 'string'
          ? await stripe.prices.retrieve(product.default_price)
          : product.default_price;

        return {
          id: product.id,
          name: product.name,
          price_id: priceObj?.id,
          price: ((priceObj?.unit_amount || 0) / 100).toFixed(2),
          image: product.images[0],
          image_array: product.images,
          metadata: product.metadata,
        };
      })
    );

    // Update cache
    cachedProducts = productMetadata;
    lastFetched = now;

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
