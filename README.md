# AI Watchdog 官网（one-code-landing）

AI Watchdog 是一款跨产品的 AI 编码监控桌面应用（macOS / Windows），系统托盘常驻，跨 VS Code、Cursor、Claude、终端等其他常见产品统一监控 AI 编码工具的工作状态。当 AI 完成任务或需要你接管时，通过声音、桌面通知、托盘图标及时提醒，一键跳回接管。完全本地运行，不上传任何数据。本仓库是它的中英双语营销落地页。

站点：https://one-code.bayjf.com

## 技术栈

| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（`astro` ^7.1.6，SSG 静态输出） |
| 样式 | Tailwind CSS 4（通过 `@tailwindcss/vite` 插件接入，无 tailwind.config） |
| SEO | `@astrojs/sitemap`（含 i18n hreflang）、`public/robots.txt`、`public/llms*.txt`（GEO） |
| i18n | Astro 内置 i18n + 自研字典：`src/i18n/ui.ts`、`src/i18n/index.ts` |
| 共享包 | `@bay/landing-ui`（releases 检测、BayjfLink 等跨站点复用组件） |
| Node | >= 20（`.node-version` 为 20） |
| 包管理器 | npm |

## 快速开始

```bash
npm install
npm run dev        # 开发服务器
npm run build      # 生产构建
npm run preview    # 预览构建产物
```

## 项目结构

```text
one-code-landing/
├── astro.config.mjs          # site、sitemap、i18n（en-root + /zh/）、Tailwind v4
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── og/og-zh.png, og-en.png   # 双语文 Open Graph 分享图（1200×630）
│   └── llms*.txt                 # GEO：llms / llms-full / llms-en / llms-en-full
├── src/
│   ├── components/           # Nav、Hero、Features、HowItWorks、ComparisonTable、
│   │                         # Install、MacInstallGuide、FAQ、CTA、Footer、SEO
│   ├── data/faq.ts           # FAQ 数据
│   ├── i18n/                 # ui.ts（双语文案）+ index.ts（取词/路径工具）
│   ├── layouts/BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro, changelog, privacy, terms, 404   # 英文（根路径）
│   │   └── zh/               # 中文：index、changelog、privacy、terms
│   ├── styles/global.css
│   └── consts.ts             # 站名、标题、描述、社交链接、OG 图
└── tsconfig.json
```

## 路由与 i18n

默认语言为英文（`prefixDefaultLocale: false`）：英文页面在根路径，中文页面带 `/zh/` 前缀。

| 路径 | 页面 |
|------|------|
| `/` | 英文首页 |
| `/changelog`、`/privacy`、`/terms` | 英文更新日志 / 隐私政策 / 服务条款 |
| `/zh/` | 中文首页 |
| `/zh/changelog`、`/zh/privacy`、`/zh/terms` | 中文更新日志 / 隐私政策 / 服务条款 |
| `/404` | 404 页面 |

语言由 URL 推断（`getLangFromUrl`），文案通过 `useTranslations(lang)` 获取；语言切换经 `getAltLangPath`，hreflang 经 `getHrefLangUrl`。

## 更新日志机制

`src/pages/changelog.astro`（英文）与 `src/pages/zh/changelog.astro`（中文）各自维护 `releases` 数组（`version` / `date` / `notes`）。发布新版本时向数组追加记录即可，中英文需同步更新。

## 部署

- 已绑定自定义域名 `one-code.bayjf.com`，通过 Cloudflare Pages 平台自动部署（push 即发）。
- 部署前运行 `npm run build`，产物目录为 `dist`。
- `astro.config.mjs` 的 `site` 与 `src/consts.ts` 的 `SITE_URL` 均已指向正式域名。
