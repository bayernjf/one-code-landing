// 双语 FAQ 数据，供首页 FAQ 组件与 FAQPage JSON-LD 使用
export const faqItems = {
  zh: [
    {
      question: 'AI Watchdog 监控哪些 AI 编码工具？',
      answer: '当前支持监控 GitHub Copilot Chat、Cline / Roo Code、以及终端输出。你可以单独开关每种监控器，也可以自定义监控的文件模式和忽略规则。',
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
      answer: '支持三种通知通道：提示音（可调节音量）、桌面系统通知（当 VS Code 不在前台时触发）、状态栏图标状态显示。三种通道均可独立开关。',
    },
    {
      question: '支持监控哪些文件类型？',
      answer: '默认监控 TS/JS/Python/Go/Rust/Java/Vue/CSS/HTML/JSON/Markdown/YAML/TOML 等主流代码文件。你可以通过 aiWatchdog.watchPatterns 自定义监控范围。',
    },
    {
      question: '怎么安装？',
      answer: '三种方式：1) 在 VS Code 扩展市场搜索 "AI Watchdog" 安装；2) 通过命令行 code --install-extension ai-watchdog.ai-watchdog；3) 从 GitHub Releases 下载 .vsix 文件手动安装。安装后自动开始监控。',
    },
    {
      question: '会影响编辑器性能吗？',
      answer: '不会。AI Watchdog 使用轻量的文件系统监听和滑动窗口计数，内存和 CPU 占用极低。ignorePatterns 默认排除 node_modules、dist、.git 等目录，避免不必要的开销。',
    },
    {
      question: '"一键接管"是什么？',
      answer: '收到通知后，点击通知或执行"AI Watchdog: 一键接管"命令，会自动定位到 AI 最近修改的文件和位置，并跳转到 AI 对话面板，让你快速继续工作。',
    },
  ],
  en: [
    {
      question: 'Which AI coding tools does AI Watchdog monitor?',
      answer: 'It currently monitors GitHub Copilot Chat, Cline / Roo Code, and terminal output. Each monitor can be toggled independently, and you can customize file watch patterns and ignore rules.',
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
      answer: 'Three channels: sound alert (with adjustable volume), desktop system notification (triggered when VS Code is not in the foreground), and status bar icon. Each channel can be toggled independently.',
    },
    {
      question: 'Which file types are monitored?',
      answer: 'By default it monitors TS/JS/Python/Go/Rust/Java/Vue/CSS/HTML/JSON/Markdown/YAML/TOML and other popular code files. You can customize the scope via aiWatchdog.watchPatterns.',
    },
    {
      question: 'How do I install it?',
      answer: 'Three options: 1) Search "AI Watchdog" in the VS Code Extensions marketplace; 2) Install via command line: code --install-extension ai-watchdog.ai-watchdog; 3) Download the .vsix from GitHub Releases and install manually. Monitoring starts automatically after install.',
    },
    {
      question: 'Will it impact editor performance?',
      answer: 'No. AI Watchdog uses lightweight filesystem watchers and sliding-window counting with minimal memory and CPU usage. ignorePatterns excludes node_modules, dist, .git and similar directories by default to avoid unnecessary overhead.',
    },
    {
      question: 'What is "one-click takeover"?',
      answer: 'When you receive a notification, clicking it or running the "AI Watchdog: Take Over" command automatically locates the most recently modified file and position, and jumps to the AI chat panel so you can resume work quickly.',
    },
  ],
} as const;
