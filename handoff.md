# Handoff — one-code-landing

更新时间：2026-08-23

## 项目概况
AI Watchdog 产品落地页。Astro 7 静态站点，中英双语（**英文根路径 + `/zh/`**），部署于 Cloudflare
Pages，绑定自定义域名 **https://one-code.bayjf.com**。
产品：跨产品的 AI 编码监控**桌面应用**（macOS / Windows，系统托盘常驻），跨 VS Code、Cursor、
Claude、终端统一监控。安装走 GitHub Releases 分发（.dmg / .exe）。
通过页头/页脚链接回 hub 站 bayjf.com。

## 结构与路由
- `src/pages/`（英文，根路径）：`index`、`changelog`、`privacy`、`terms`、`404`
- `src/pages/zh/`（中文，`/zh/` 前缀）：`index`、`changelog`、`privacy`、`terms`
- 复用共享包 `@bay/landing-ui`（releases 检测、BayjfLink、图标等跨站点组件）
- macOS 安装引导弹窗组件 `src/components/MacInstallGuide.astro`（未签名应用的 Gatekeeper 提示）

## SEO / GEO
- SEO：`@astrojs/sitemap`（i18n hreflang）、robots.txt、双语 OG 图（`public/og/og-zh.png`、
  `og-en.png`，1200×630）、JSON-LD（Organization / WebSite / SoftwareApplication / FAQPage）
- GEO：`public/llms.txt` / `llms-full.txt` / `llms-en.txt` / `llms-en-full.txt`，与产品（跨产品
  桌面应用）和 en-root 路由保持一致；robots.txt 放行 GPTBot / ClaudeBot / PerplexityBot

## 构建与部署
- 构建：`npm run build`（产物 `dist`），Node >= 22（本地用 fnm 切 v22.23.1 构建通过）
- 部署：Cloudflare Pages 平台自动部署（push 即发），自定义域名 `one-code.bayjf.com`
- 分发：GitHub Releases 自动更新链路已就绪（electron-updater）

## 待办 / 注意
- macOS 安装引导改动（MacInstallGuide + Install 移除 target=_blank + i18n 文案）已完成，**尚未 commit/push**
- llms*.txt、README 已对齐当前产品与路由；后续改动若变更产品定位或 i18n 结构，需同步这 4 个 GEO 文件
- 上架 Marketplace 前，`vsce package` 等发布流程尚未执行
