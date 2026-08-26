// 双语 FAQ 数据，供首页 FAQ 组件与 FAQPage JSON-LD 使用
export const faqItems = {
  zh: [
    {
      question: 'AI Watchdog 监控哪些 AI 编码工具？',
      answer: '通过六路探针覆盖：文件探针 + 进程探针（通用，覆盖所有 AI 工具）、Shell Hook（zsh/bash/fish 终端精确监控）、Claude 会话 jsonl（Claude Desktop）、Codex rollout 生命周期（ChatGPT 桌面端 / VS Code 扩展 / CLI）、VS Code 伴侣 socket（深度信号）。内置目标含 VS Code、Cursor、Claude、ChatGPT、终端，还可添加自定义目标。',
    },
    {
      question: '什么是多会话并行追踪？',
      answer: '聚合引擎按监控来源分组为独立状态机，Claude 和 ChatGPT 同时跑任务时互不干扰，各自独立判定 working / done / waiting。托盘菜单展示每个活跃会话的来源、状态与已运行时长，并发时托盘标题显示「工作中 (N)」。',
    },
    {
      question: '怎么判断 AI 正在工作还是已经完成？',
      answer: '通过滑动窗口机制：在设定的时间窗口（默认 3 秒）内文件变更次数达到阈值（默认 3 次）即判定为「AI 工作中」；活动停止超过静默超时（默认 8 秒）判定为完成。另有最短工作时长门槛（默认 30 秒），短于门槛的任务只流转状态不发通知，避免无效打扰。Codex 探针使用显式生命周期事件（task_started / task_complete），比静默超时更精确。',
    },
    {
      question: '通知方式有哪些？',
      answer: '四种通知通道：提示音（done 与 waiting 使用不同系统音效，可调节音量）、桌面系统通知（仅在应用失焦时触发）、托盘图标状态显示、远程通知（Webhook / ntfy.sh，离开电脑也能收到，兼容飞书/钉钉/企微自定义机器人）。每个监控目标可独立开关通知。',
    },
    {
      question: '勿扰模式怎么工作？',
      answer: '支持三种勿扰方式：手动开关（托盘菜单一键切换）、定时静默时段（如 22:00-08:00 自动不打扰）、分级静默（「只通知 waiting」——完成通知静默，但 AI 等待输入可能阻塞时仍提醒）。勿扰模式下状态照常流转，只是不发通知。',
    },
    {
      question: '远程通知怎么配置？',
      answer: '在设置页配置 Webhook URL（done / waiting 时 POST JSON，兼容飞书/钉钉/企微自定义机器人）或 ntfy.sh topic（手机装 ntfy app 即可接收推送）。两个渠道可独立开关，所有数据仍在本地处理，仅向你配置的地址发送通知事件。',
    },
    {
      question: '"一键接管"是什么？',
      answer: '收到通知后点击通知，会自动聚焦对应的 AI 工具应用窗口（VS Code / Claude / ChatGPT / 终端），让你快速回到工作上下文。通知正文还会显示任务耗时与改动文件数，不用切回去才知道 AI 干了什么。',
    },
    {
      question: '活动历史和统计仪表盘有什么用？',
      answer: '活动历史持久化最近 200 条记录（时间戳、状态、信号来源、耗时），支持按监控来源筛选，随时回溯 AI 干了什么。统计仪表盘基于历史数据展示今日/本周/累计工作时长与任务数、最近 7 天每日趋势、各工具使用时长分布，帮你量化 AI 使用习惯。',
    },
    {
      question: '它会收集或上传我的数据吗？',
      answer: '不会。AI Watchdog 完全在本地运行，所有文件变更监控、状态判定、通知和历史记录都在你的机器上完成，不收集、不上传任何数据。远程通知仅向你自己配置的 Webhook / ntfy 地址发送通知事件，代码开源可审计。',
    },
    {
      question: '支持自动更新吗？',
      answer: '支持。内置 electron-updater，应用启动时自动检查 GitHub Releases 并在后台下载更新，下次启动时生效。设置页可查看当前版本、手动检查更新与查看更新日志。',
    },
    {
      question: '会影响系统性能吗？',
      answer: '不会。AI Watchdog 使用轻量的文件系统监听（chokidar）和滑动窗口计数，内存和 CPU 占用极低。ignorePatterns 默认排除 node_modules、dist、.git 等目录，避免不必要的开销。进程探针仅在需要时轮询 ps / tasklist。',
    },
    {
      question: '怎么安装？',
      answer: '从 GitHub Releases 下载 macOS 安装包（.dmg）或 Windows 安装包（.exe），打开后托盘出现 AI Watchdog 图标。macOS 首次打开若提示「已损坏」或「无法验证开发者」，需在终端运行 xattr 命令解除 Gatekeeper 限制（安装页有一键复制命令）。之后在设置里勾选要监控的目标即可。',
    },
  ],
  en: [
    {
      question: 'Which AI coding tools does AI Watchdog monitor?',
      answer: 'Six probes provide coverage: file probe + process probe (generic, covers all AI tools), Shell Hook (zsh/bash/fish for precise terminal monitoring), Claude session jsonl (Claude Desktop), Codex rollout lifecycle (ChatGPT desktop / VS Code extension / CLI), and VS Code companion socket (deep signals). Built-in targets include VS Code, Cursor, Claude, ChatGPT and Terminal; you can also add custom targets.',
    },
    {
      question: 'What is multi-session parallel tracking?',
      answer: 'The aggregation engine groups state machines by monitor source, so Claude and ChatGPT running simultaneously do not interfere — each independently tracks working / done / waiting. The tray menu shows each active session\'s source, status and elapsed time; when concurrent, the tray title reads "Working (N)".',
    },
    {
      question: 'How does it detect whether the AI is working or done?',
      answer: 'Via a sliding-window mechanism: if file changes reach a threshold (default 3) within a time window (default 3 seconds), the AI is judged "working". When activity stops beyond a silence timeout (default 8 seconds), it is judged "done". A minimum work-duration threshold (default 30s) ensures tasks shorter than the threshold only change state without firing a notification, avoiding noise. The Codex probe uses explicit lifecycle events (task_started / task_complete), which is more precise than silence timeout.',
    },
    {
      question: 'What notification channels are available?',
      answer: 'Four channels: sound alert (different system tones for done vs waiting, adjustable volume), desktop system notification (fires only when the app is out of focus), tray icon status, and remote notifications (Webhook / ntfy.sh — alerts even away from your desk, compatible with Feishu/DingTalk/WeCom custom bots). Each watch target can toggle notifications independently.',
    },
    {
      question: 'How does Do Not Disturb work?',
      answer: 'Three DND modes: manual toggle (one-click from the tray menu), scheduled quiet hours (e.g. 22:00–08:00 auto-silence), and tiered silence ("notify only waiting" — completion notifications are silenced, but you are still alerted when the AI waits for input and may be blocked). In DND, state still transitions normally; only notifications are suppressed.',
    },
    {
      question: 'How do I configure remote notifications?',
      answer: 'In Settings, configure a Webhook URL (POSTs JSON on done / waiting, compatible with Feishu/DingTalk/WeCom custom bots) or an ntfy.sh topic (install the ntfy app on your phone to receive pushes). Both channels can be toggled independently. All data remains processed locally; only notification events are sent to your configured address.',
    },
    {
      question: 'What is "one-click takeover"?',
      answer: 'When you receive a notification, clicking it auto-focuses the corresponding AI tool window (VS Code / Claude / ChatGPT / Terminal), bringing you back to your work context instantly. The notification body also shows task duration and changed-file count, so you know what the AI did before switching back.',
    },
    {
      question: 'What are activity history and the stats dashboard for?',
      answer: 'Activity history persists the last 200 entries (timestamp, state, signal source, duration) with source-based filtering, so you can always retrace what the AI did. The stats dashboard, built on history data, shows today/this-week/all-time duration and task counts, a 7-day daily trend, and usage distribution by tool — helping you quantify your AI usage habits.',
    },
    {
      question: 'Does it collect or upload my data?',
      answer: 'No. AI Watchdog runs entirely locally. All file-change monitoring, state detection, notifications and history happen on your machine; nothing is collected or uploaded. Remote notifications only send notification events to your own configured Webhook / ntfy address. The code is open-source and auditable.',
    },
    {
      question: 'Does it support auto-update?',
      answer: 'Yes. Built-in electron-updater checks GitHub Releases on launch and downloads updates in the background, applying them on next restart. Settings lets you view the current version, manually check for updates, and see the changelog.',
    },
    {
      question: 'Will it impact system performance?',
      answer: 'No. AI Watchdog uses lightweight filesystem watchers (chokidar) and sliding-window counting with minimal memory and CPU usage. ignorePatterns excludes node_modules, dist, .git and similar directories by default to avoid unnecessary overhead. The process probe only polls ps / tasklist when needed.',
    },
    {
      question: 'How do I install it?',
      answer: 'Download the macOS installer (.dmg) or Windows installer (.exe) from GitHub Releases, open it, and the AI Watchdog tray icon appears. On macOS, if the first launch says "damaged" or "developer cannot be verified", run the xattr command in Terminal to lift the Gatekeeper restriction (the install page has a one-click copy command). Then tick the tools you want to watch in Settings.',
    },
  ],
} as const;
