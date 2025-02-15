// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.habtronics.com',

  devToolbar: {
      enabled: false
    },

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});