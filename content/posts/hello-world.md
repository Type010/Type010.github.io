---
title: 你好，世界
date: 2026-09-19T09:00:00+08:00
draft: false
description: 站点第一篇文章，记录搭建这个博客的起点。
categories:
  - 随笔
tags:
  - 博客
---

这是本站的第一篇文章。

搭建过程很简单：安装 Hugo 扩展版，用 `hugo new site` 生成骨架，再通过 Hugo Modules 引入 [FixIt](https://github.com/hugo-fixit/FixIt) 主题，最后按需调整 `hugo.toml`。

<!--more-->

接下来打算在这里记录几类内容：

1. 技术笔记：踩过的坑、验证过的方案
2. 读书与课程摘录
3. 日常随笔

写作流程：

```bash
# 新建文章
hugo new posts/my-new-post.md

# 本地预览（含草稿）
hugo server -D

# 发布构建
hugo --gc --minify
```

写作时把 front matter 里的 `draft` 改成 `false` 即可正式发布。
