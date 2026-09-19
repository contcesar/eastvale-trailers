// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: Replace with your real production URL (used for sitemap + canonical/OG tags).
export default defineConfig({
  site: 'https://eastvale-trailers.netlify.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
