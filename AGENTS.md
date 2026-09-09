# AGENTS.md — one-code-landing（AI Watchdog 官网）

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
AI Watchdog 官网：跨产品的 AI 编码监控桌面应用（macOS / Windows）的中英双语营销落地页。
产品系统托盘常驻，AI 完成任务或需要接管时用声音 / 通知 / 托盘图标提醒，一键跳回接管，完全本地运行。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（SSG） |
| 样式 | Tailwind CSS 4（`@tailwindcss/vite`，无 tailwind.config） |
| SEO / GEO | `@astrojs/sitemap`（含 i18n hreflang）、`public/robots.txt`、`public/llms*.txt` |
| i18n | Astro i18n（en-root + `/zh/`）+ 自研字典 `src/i18n/ui.ts`、`src/i18n/index.ts` |
| 共享包 | `@bay/landing-ui`（releases 检测、BayjfLink） |
| Node / 包管理 | >= 20（`.node-version` 为 20）/ npm |

## 常用命令
```bash
npm install
npm run dev
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## 约定
- 站点 URL 有两处：`astro.config.mjs` 的 `site` 与 `src/consts.ts` 的 `SITE_URL`，改域名要一起改，
  再加 `public/robots.txt` 的 Sitemap 行和 `public/llms*.txt` 里的链接。
- 文案统一走 `src/i18n/ui.ts`，新增必须补中英两版。
- 下载 / 安装指引依赖 `@bay/landing-ui` 的 releases 检测，不要写死版本号。
- 部署细节见 `docs/DEPLOYMENT.md`（Cloudflare Pages push 即发，无 GitHub Actions）。

## 不要做的事
- 不要写死 releases 下载链接（走共享包的 releases 解析）。
- 不要只改一个语言的文案。
- 不要提交构建产物与 `.env`。
- 不要跳过 `git pull --rebase` 直接 push。
