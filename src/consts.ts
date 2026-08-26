// 站点级常量，集中管理便于跨页面/组件复用
// 部署到自定义域名后，需同步修改 astro.config.mjs 的 site 字段

export const SITE_URL = 'https://one-code.bayjf.com';
export const SITE_NAME = 'AI Watchdog';
export const SITE_TITLE = 'AI Watchdog | 跨产品 AI 编码监控、多会话追踪与接管通知';
export const SITE_TITLE_EN = 'AI Watchdog | Cross-Product AI Coding Monitor, Multi-Session Tracking & Takeover Alerts';
export const SITE_DESCRIPTION =
  'AI Watchdog 是系统托盘常驻的桌面应用，通过 6 种探针跨 VS Code、Cursor、Claude、ChatGPT、终端统一监控 AI 编码状态。支持多会话并行追踪、勿扰模式、远程通知（Webhook/ntfy）、统计仪表盘与一键接管，完全本地运行，自动更新。';
export const SITE_DESCRIPTION_EN =
  'AI Watchdog is a system-tray desktop app that monitors AI coding across VS Code, Cursor, Claude, ChatGPT and the terminal through 6 probes. Features multi-session tracking, Do Not Disturb, remote notifications (Webhook/ntfy), a stats dashboard and one-click takeover. Fully local, auto-updating.';
export const AUTHOR = 'AI Watchdog';
export const LOCALES = ['zh', 'en'] as const;
export const DEFAULT_LOCALE = 'en';

// 社交与外部链接（部署后替换为实际仓库地址）
export const SOCIAL = {
  github: 'https://github.com/bayernjf/one-code',
  releases: 'https://github.com/bayernjf/one-code/releases',
  email: 'b4yernjf@gmail.com',
};

// 默认 OG 图片
export const OG_IMAGE = {
  zh: '/og/og-zh.png',
  en: '/og/og-en.png',
};
