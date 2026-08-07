// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://www.groundservice.cl",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  redirects: {
    '/panel': 'https://panel.groundservice.cl:2222',
    '/webmail': 'http://200.27.112.5/webmail',
  },
});
