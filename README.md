# Changed 的个人博客

基于 Firefly 主题搭建的 Astro 静态博客。

## 本地运行

```bash
pnpm install
pnpm dev [--host]     # http://localhost:4321
pnpm build    # 构建到 dist/
```

## 写文章

在 `src/content/posts/` 下创建 `.md` 文件：

```md
---
title: 文章标题
published: 2026-05-20
tags: [标签1, 标签2]
category: 分类
---

文章内容...
```

## 配置

编辑 `src/config/siteConfig.ts` 修改站点名称、配色等。
