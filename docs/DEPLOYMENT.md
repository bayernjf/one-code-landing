# 部署 — one-code-landing（AI Watchdog 官网）

更新时间：2026-09-09

## 站点信息
- 线上：`https://one-code.bayjf.com`
- 技术栈：Astro 7（SSG）+ Tailwind CSS 4（`@tailwindcss/vite`，无 tailwind.config）+ `@astrojs/sitemap`（含 i18n hreflang）
- 共享包：`@bay/landing-ui`（releases 检测、BayjfLink）
- GEO 资产：`public/llms*.txt`（llms / llms-full / llms-en / llms-en-full）
- Node：>= 20（`.node-version` 为 20）；包管理器 npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## Cloudflare Pages
平台自动部署，**push 即发**，不使用 GitHub Actions。

| 配置项 | 值 |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |

`astro.config.mjs` 的 `site` 与 `src/consts.ts` 的 `SITE_URL` 均已指向正式域名。

## 发布后验证
1. 英文根路径与 `/zh/` 中文页面可访问。
2. `robots.txt`、`sitemap.xml`、`llms.txt` 可访问且域名一致。
3. `public/og/` 下双语文 OG 图（1200×630）可访问。
4. 下载 / 安装指引里的 releases 链接正常（依赖 `@bay/landing-ui` 的 releases 检测）。

## 改域名时的同步点
- `astro.config.mjs` 的 `site`
- `src/consts.ts` 的 `SITE_URL`
- `public/robots.txt` 的 Sitemap 行
- `public/llms*.txt` 中的链接
