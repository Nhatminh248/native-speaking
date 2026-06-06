import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Nhatminh248.github.io',
  base: '/native-speaking/',
  integrations: [react(), tailwind()],
});