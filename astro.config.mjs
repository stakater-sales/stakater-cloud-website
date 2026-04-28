import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  site: 'https://www.stakater.cloud',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
