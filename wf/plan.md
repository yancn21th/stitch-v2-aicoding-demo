# Plan: Stitch Design to React Components

## TL;DR
将 `stitch_downloads/aether_pharma_ai_dashboard.html` 的 Pharma CSR Dashboard 设计转换为模块化的 Vite + React + TypeScript 项目。当前工作区无 React 基础设施，需从零搭建项目并拆分为 ~10 个独立组件。

## Phase 1: 项目脚手架搭建

1. 使用 `npm create vite@latest . -- --template react-ts` 初始化 Vite + React + TypeScript 项目（在当前目录）
2. 安装 Tailwind CSS v3 + 相关依赖（`tailwindcss`, `postcss`, `autoprefixer`）
3. 从 HTML `<head>` 提取 Tailwind 配置，写入 `tailwind.config.ts`，包含所有自定义颜色（`primary`, `secondary`, `tertiary`, `surface-*` 等）、字体（Manrope, Inter）和圆角
4. 更新 `resources/style-guide.json` 为 Pharma 主题色（当前 skill 自带的是绿色主题，需替换为蓝色主题）
5. 从 skill 复制 `scripts/fetch-stitch.sh` 和 `scripts/validate.js` 到项目中
6. 配置 `index.html` 引入 Google Fonts（Manrope, Inter）和 Material Symbols Outlined
7. 在全局 CSS 中添加 `.glass-insight` 和 `.signature-gradient` 自定义样式类

## Phase 2: 数据层

8. 创建 `src/data/mockData.ts` — 提取所有静态文本、图片 URL、导航项、草稿列表数据、指标数值等

## Phase 3: 组件拆分与开发

根据 HTML 结构识别出以下组件：

9. `src/components/SideNavBar.tsx` — 左侧导航栏（Logo、导航链接、New Report 按钮、底部 Help/Logout）
10. `src/components/TopAppBar.tsx` — 顶部粘性头部（标题、搜索框、通知/设置按钮、用户头像）
11. `src/components/HeroMetrics/ActiveReport.tsx` — 主报告进度卡片（col-span-8，含进度条、状态标签）
12. `src/components/HeroMetrics/ComplianceCard.tsx` — 合规置信度卡片（98%，绿色背景）
13. `src/components/HeroMetrics/EfficiencyCard.tsx` — 效率增益卡片（120 hrs，紫色边框）
14. `src/components/HeroMetrics/HeroMetrics.tsx` — 组合组件，包含 Bento Grid 布局
15. `src/components/ActionCards.tsx` — 操作卡片区（Start New Report, Upload Source Data, Pending Approvals）
16. `src/components/RecentDrafts/DraftRow.tsx` — 单条草稿行
17. `src/components/RecentDrafts/RecentDrafts.tsx` — 草稿列表区
18. `src/components/AIInsightBanner.tsx` — 底部 AI 洞察浮动面板（Glassmorphism 效果）

*每个组件必须:*
- 基于 `resources/component-template.tsx` 模板
- 定义 `Readonly<ComponentNameProps>` 接口
- 使用 theme-mapped Tailwind 类（不直接使用 hex）
- 包含 `dark:` 暗色模式类

## Phase 4: 应用组装

19. 创建 `src/hooks/useNavigation.ts` — 导航状态管理 hook
20. 更新 `src/App.tsx` — 组合所有组件，构建完整 Dashboard 布局（sidebar + main content）
21. 确认 `src/main.tsx` 正确渲染 App

## Phase 5: 质量验证

22. 对每个组件运行 `npm run validate <file_path>` 检查 AST
23. 核对 `resources/architecture-checklist.md` 清单：
    - 逻辑提取到 hooks ✓
    - 无单体文件 ✓
    - 静态数据在 mockData.ts ✓
    - Props 使用 Readonly ✓
    - 无硬编码 hex ✓
    - 支持 dark mode ✓
24. 运行 `npm run dev` 启动开发服务器，视觉对比 HTML 原始设计

## 相关文件

- `stitch_downloads/aether_pharma_ai_dashboard.html` — 源设计文件，提取组件结构和 Tailwind 配置
- `wf/design-file/generated/design.md` — 设计系统文档（颜色、排版、组件规范、Do/Don't 规则）
- `/Users/ai-hub/.agents/skills/react-components/resources/component-template.tsx` — 组件模板
- `/Users/ai-hub/.agents/skills/react-components/resources/architecture-checklist.md` — 质量核查清单
- `/Users/ai-hub/.agents/skills/react-components/resources/style-guide.json` — 样式指南（需更新为 Pharma 主题）
- `/Users/ai-hub/.agents/skills/react-components/scripts/validate.js` — AST 验证脚本
- `/Users/ai-hub/.agents/skills/react-components/scripts/fetch-stitch.sh` — 资源下载脚本

## 验证步骤

1. `npm run validate src/components/*.tsx` — 每个组件通过 AST 验证
2. 检查 `architecture-checklist.md` 全部 checkbox 为 ✓
3. `npm run dev` — 在浏览器中打开，视觉对比 `stitch_downloads/aether_pharma_ai_dashboard.png` 截图
4. 确认暗色模式切换正常

## 决策与范围

- **Scope IN**: Dashboard 单页面的全部可见 UI 组件
- **Scope OUT**: 路由（仅单页）、后端 API 对接、真实认证逻辑
- **假设**: 使用 Tailwind CSS v3（与 HTML CDN 版本一致），不使用 UI 组件库
- **图片处理**: 保留 Google Cloud Storage 的外部图片 URL（头像等）放入 mockData.ts
