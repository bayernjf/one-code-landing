# AI Watchdog 官网（one-code-landing）

AI Watchdog 是一款 VS Code 扩展，实时监控 Copilot Chat、Cline、终端等 AI 编码工具的工作状态，在 AI 完成任务或需要你接管时通过声音 + 桌面通知 + 状态栏及时提醒，一键跳回接管。本仓库是它的中英双语营销落地页。

## 技术栈

| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（`astro` ^7.1.6，SSG 静态输出） |
| 样式 | Tailwind CSS 4（^4.3.3，通过 `@tailwindcss/vite` 插件接入，无 tailwind.config 文件） |
| SEO | `@astrojs/sitemap`（^3.7.3，含 i18n hreflang）、`public/robots.txt`、`public/llms.txt`（GEO） |
| i18n | Astro 内置 i18n 配置 + 自研字典：`src/i18n/ui.ts`（中英文案）、`src/i18n/index.ts`（取词/路径本地化工具） |
| Node | >= 20（`.node-version` 为 20） |
| 包管理器 | npm（见 `package-lock.json`） |

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器
npm run build      # 构建生产产物
npm run preview    # 预览构建产物
```

## 项目结构

```text
one-code-landing/
├── astro.config.mjs          # Astro 配置：site、sitemap、i18n、Tailwind v4 vite 插件
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── llms.txt / llms-full.txt / llms-en.txt / llms-en-full.txt   # AI 引擎抓取入口（GEO）
├── src/
│   ├── components/           # 落地页区块：Nav、Hero、Features、HowItWorks、
│   │                         # ComparisonTable、FAQ、Install、CTA、Footer、SEO
│   ├── data/
│   │   └── faq.ts            # FAQ 数据
│   ├── i18n/
│   │   ├── ui.ts             # 中英双语文案字典
│   │   └── index.ts          # getLangFromUrl / useTranslations / localizePath 等工具
│   ├── layouts/
│   │   └── BaseLayout.astro  # 页面基础布局
│   ├── pages/
│   │   ├── index.astro       # 中文首页（根路径）
│   │   ├── changelog.astro   # 中文更新日志
│   │   ├── privacy.astro     # 中文隐私政策
│   │   ├── terms.astro       # 中文服务条款
│   │   ├── 404.astro
│   │   └── en/               # 英文页面：index / changelog / privacy / terms
│   ├── styles/
│   │   └── global.css        # Tailwind 全局样式入口
│   └── consts.ts             # 站点常量（站名、标题、描述、社交链接、OG 图）
└── tsconfig.json
```

## 路由与 i18n

- 默认语言为中文，`prefixDefaultLocale: false`：中文页面在根路径（`/`、`/changelog`、`/privacy`、`/terms`），英文页面带 `/en` 前缀（`/en/`、`/en/changelog`、`/en/privacy`、`/en/terms`）。
- 语言由 URL 推断（`getLangFromUrl`），文案通过 `useTranslations(lang)` 获取，缺失 key 回退到默认语言。
- 语言切换按钮通过 `getAltLangPath` 生成对端路径，hreflang 通过 `getHrefLangUrl` 输出。

| 路径 | 页面 |
|------|------|
| `/` | 中文首页 |
| `/changelog`、`/privacy`、`/terms` | 中文更新日志 / 隐私政策 / 服务条款 |
| `/en/` | 英文首页 |
| `/en/changelog`、`/en/privacy`、`/en/terms` | 英文更新日志 / 隐私政策 / 服务条款 |
| `/404` | 404 页面 |

## 更新日志机制

`src/pages/changelog.astro`（中文）与 `src/pages/en/changelog.astro`（英文）各自维护一个 `releases` 数组（`version` / `date` / `notes`）。发布新版本时，向数组追加一条记录即可，中英文页面需同步更新。

## 部署

- `astro.config.mjs` 与 `src/consts.ts` 中的 `site` / `SITE_URL` 当前为占位域名 `https://one-code.bayjf.com`（Cloudflare Pages 风格），上线时需替换为实际域名（自定义域名或 `*.pages.dev`）。
- 部署前运行 `npm run build`，产物目录为 `dist`。
