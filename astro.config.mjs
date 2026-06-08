import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: 'https://jgchaparro.com',
  integrations: [tailwind(), icon()],
  vite: {
    plugins: [yaml()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'el'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
