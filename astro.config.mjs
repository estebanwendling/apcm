import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://apcm.netlify.app',
  integrations: [tailwind()],
  output: 'static',
});
