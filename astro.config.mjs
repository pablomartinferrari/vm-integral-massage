// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vmintegralmassage.com',
  trailingSlash: 'never',
  compressHTML: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-US',
        },
      },
      filter: (page) => !page.includes('/wp-redirect'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
