// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.habtronics.com',

  devToolbar: {
      enabled: false
    },

  adapter: node({
    mode: 'standalone'
  })
});