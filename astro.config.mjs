import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

const siteOrigin = (
  process.env.SITE_ORIGIN || 'https://arcraider-cheats--com.uroojroziroti.workers.dev'
).replace(/\/$/, '');

export default defineConfig({
  site: siteOrigin,
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/arcraider-hacks/',
    '/cheats/lite/': '/products/arcraider-hacks/',
    '/cheats/pro/': '/products/arcraider-hacks/',
    '/cheats/elite/': '/products/arcraider-hacks/elite/',
    '/cheats/compare/': '/blog/lite-vs-pro/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      cssCodeSplit: true,
      modulePreload: { polyfill: false },
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
});
