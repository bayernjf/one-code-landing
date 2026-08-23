// 双语 FAQ 数据，供首页 FAQ 组件与 FAQPage JSON-LD 使用
export const faqItems = {
  zh: [
    {
      question: 'AI Watchdog 监控哪些 AI 编码工具？',
      answer: 'AI Watchdog 跨 VS Code、Cursor、Claude、终端等其他常见产品统一监控。每个目标 / 探针可单独开关，也可以自定义监控的文件模式与忽略规则。',
    },
    {
      question: '它会收集或上传我的数据吗？',
      answer: '不会。AI Watchdog 完全在本地运行，所有文件变更监控、状态判定和通知都在你的机器上完成，不收集、不上传任何数据。',
    },
    {
      question: '怎么判断 AI 正在工作还是已经完成？',
      answer: '通过滑动窗口机制：在设定的时间窗口（默认 3 秒）内，文件变更次数达到阈值（默认 3 次）即判定为"AI 工作中"；当 AI 活动停止超过静默超时（默认 8 秒），判定为完成并发出通知。',
    },
    {
      question: '通知方式有哪些？',
      answer: '三种通知通道：提示音（可调节音量）、桌面系统通知（应用不在前台时触发）、托盘图标状态显示。三种通道均可独立开关。',
    },
    {
      question: '支持监控哪些文件类型？',
      answer: '默认监控 TS/JS/Python/Go/Rust/Java/Vue/CSS/HTML/JSON/Markdown/YAML/TOML 等主流代码文件，可在设置里自定义监控范围。',
    },
    {
      question: '怎么安装？',
      answer: '从 GitHub Releases 下载 macOS 安装包（dmg），打开后托盘出现 AI Watchdog 图标，在设置里勾选要监控的目标软件即可。安装后自动开始监控。',
    },
    {
      question: '会影响系统性能吗？',
      answer: '不会。AI Watchdog 使用轻量的文件系统监听和滑动窗口计数，内存和 CPU 占用极低。ignorePatterns 默认排除 node_modules、dist、.git 等目录，避免不必要的开销。',
    },
    {
      question: '"一键接管"是什么？',
      answer: '收到通知后点击通知，会自动定位到 AI 最近修改的文件和位置，让你快速继续工作。',
    },
  ],
  en: [
    {
      question: 'Which AI coding tools does AI Watchdog monitor?',
      answer: 'AI Watchdog monitors VS Code, Cursor, Claude and the terminal through file and process probes. Each target can be toggled independently, and you can customize file watch patterns and ignore rules.',
    },
    {
      question: 'Does it collect or upload my data?',
      answer: 'No. AI Watchdog runs entirely locally. All file-change monitoring, state detection, and notifications happen on your machine; nothing is collected or uploaded.',
    },
    {
      question: 'How does it detect whether the AI is working or done?',
      answer: 'Via a sliding-window mechanism: if file changes reach a threshold (default 3) within a time window (default 3 seconds), the AI is judged "working". When activity stops beyond a silence timeout (default 8 seconds), it is judged "done" and a notification fires.',
    },
    {
      question: 'What notification channels are available?',
      answer: 'Three channels: sound alert (with adjustable volume), desktop system notification (triggered when the app is not in the foreground), and a tray icon. Each channel can be toggled independently.',
    },
    {
      question: 'Which file types are monitored?',
      answer: 'By default it monitors TS/JS/Python/Go/Rust/Java/Vue/CSS/HTML/JSON/Markdown/YAML/TOML and other popular code files. You can customize the scope in Settings.',
    },
    {
      question: 'How do I install it?',
      answer: 'Download the macOS installer (dmg) from GitHub Releases, open it, and the AI Watchdog tray icon appears. Tick the tools you want to watch in Settings. Monitoring starts automatically after install.',
    },
    {
      question: 'Will it impact system performance?',
      answer: 'No. AI Watchdog uses lightweight filesystem watchers and sliding-window counting with minimal memory and CPU usage. ignorePatterns excludes node_modules, dist, .git and similar directories by default to avoid unnecessary overhead.',
    },
    {
      question: 'What is "one-click takeover"?',
      answer: 'When you receive a notification, clicking it automatically locates the most recently modified file and position so you can resume work quickly.',
    },
  ],
} as const;
