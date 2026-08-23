// 站点级常量，集中管理便于跨页面/组件复用
// 部署到自定义域名后，需同步修改 astro.config.mjs 的 site 字段

export const SITE_URL = 'https://one-code.bayjf.com';
export const SITE_NAME = 'AI Watchdog';
export const SITE_TITLE = 'AI Watchdog | 跨产品 AI 编码监控与接管通知';
export const SITE_TITLE_EN = 'AI Watchdog | Monitor Every AI Coding Tool & Get Notified to Take Over';
export const SITE_DESCRIPTION =
  'AI Watchdog 跨 VS Code、Cursor、Claude、终端等其他常见产品实时监控工作状态，在 AI 完成任务或需要你接管时通过声音 + 桌面通知及时提醒，一键跳回接管。免费、开源、完全本地运行。';
export const SITE_DESCRIPTION_EN =
  'AI Watchdog monitors your AI coding tools across VS Code, Cursor, Claude and the terminal in real time, and notifies you to take over when work is done or input is needed. Sound + desktop notifications, one-click jump back. Free, open-source, fully local.';
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
