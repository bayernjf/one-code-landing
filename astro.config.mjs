// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 占位域名：部署到 Cloudflare Pages 后替换为实际域名（自定义域名或 *.pages.dev）
const SITE = 'https://one-code-landing.pages.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: { zh: 'zh-CN', en: 'en-US' },
    },
  })],
  i18n: {
    defaultLocale: 'en',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
