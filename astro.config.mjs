import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://capable-tiramisu-c2ff59.netlify.app',
  integrations: [tailwind()],
  output: 'static',
});
