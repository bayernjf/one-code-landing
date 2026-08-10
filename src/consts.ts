// 站点级常量，集中管理便于跨页面/组件复用
// 部署到自定义域名后，需同步修改 astro.config.mjs 的 site 字段

export const SITE_URL = 'https://one-code-landing.pages.dev';
export const SITE_NAME = 'AI Watchdog';
export const SITE_TITLE = 'AI Watchdog | AI 编码工具状态监控与接管通知';
export const SITE_TITLE_EN = 'AI Watchdog | Monitor AI Coding Agents & Get Notified to Take Over';
export const SITE_DESCRIPTION =
  'AI Watchdog 是 VS Code 扩展，实时监控 AI 编码工具（Copilot Chat、Cline、终端）的工作状态，在 AI 完成任务或需要你接管时及时通知。声音 + 桌面通知 + 状态栏，一键跳回接管。';
export const SITE_DESCRIPTION_EN =
  'AI Watchdog is a VS Code extension that monitors your AI coding agents (Copilot Chat, Cline, terminal) in real time and notifies you to take over when work is done or intervention is needed. Sound + desktop notifications + status bar, one-click jump back.';
export const AUTHOR = 'AI Watchdog';
export const LOCALES = ['zh', 'en'] as const;
export const DEFAULT_LOCALE = 'en';

// 社交与外部链接（部署后替换为实际仓库地址）
export const SOCIAL = {
  github: 'https://github.com/bayernjf/one-code',
  marketplace: 'https://marketplace.visualstudio.com/items?itemName=ai-watchdog.ai-watchdog',
  email: 'hello@one-code.dev',
};

// 默认 OG 图片
export const OG_IMAGE = {
  zh: '/og/og-zh.png',
  en: '/og/og-en.png',
};
