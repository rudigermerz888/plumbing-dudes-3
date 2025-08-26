import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: 'https://ramonsplumbing.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  experimental: {
    viewTransitions: true,
  },
});
