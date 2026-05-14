import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://estebanwendling.github.io',
  base: '/apcm',
  integrations: [tailwind()],
  output: 'static',
});
