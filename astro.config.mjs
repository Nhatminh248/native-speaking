import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://Nhatminh248.github.io',
  base: '/native-speaking/',
  integrations: [react()],
});