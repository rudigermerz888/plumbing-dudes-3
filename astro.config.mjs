import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel(),
  site: 'https://ramonsplumbing.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
