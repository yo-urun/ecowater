import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  i18n: {
    defaultLocale: 'sr',
    locales: ['sr', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [UnoCSS()],
});
