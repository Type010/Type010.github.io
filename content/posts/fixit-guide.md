---
title: 开始使用 FixIt
subtitle: 主题能力速览
date: 2026-09-19T10:00:00+08:00
draft: false
description: 介绍本站使用的 Hugo FixIt 主题的常用写法，包含代码块、提示框、公式与图表示例。
categories:
  - 教程
tags:
  - Hugo
  - FixIt
featuredImage: ""
---

这篇文章用来验证站点与主题是否正常工作，同时作为后续写作的语法参考。

<!--more-->

## 代码块

FixIt 为代码块提供了丰富的功能：复制、行号、折叠、全屏、换行等。

```go {title="main.go"}
package main

import "fmt"

func main() {
    fmt.Println("Hello, FixIt!")
}
```

## 提示框

主题内置了多种 admonition 提示框：

> [!NOTE]
> 这是一个普通提示，用于补充说明。

> [!TIP]
> 使用 `hugo new posts/文件名.md` 创建新文章。

> [!WARNING]
> 修改 `hugo.toml` 后需要重启 `hugo server` 才会生效（配置文件不在热重载范围内）。

在 `hugo.toml` 的 `params.admonition` 里注册图标后，还可以使用自定义类型：

> [!IDEA]
> 自定义的「想法」提示框。

> [!BAN]
> 自定义的「禁止」提示框。

## 数学公式

FixIt 默认使用 KaTeX 在构建时渲染公式：

行内公式：$E = mc^2$

块级公式：

$$
\int_{-\infty}^{+\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

## 表格与任务列表

| 功能 | 状态 | 说明 |
| --- | --- | --- |
| 本地搜索 | 已开启 | 基于 Fuse.js，无需第三方服务 |
| 目录 | 已开启 | 文章右侧自动生成 |
| 评论 | 未开启 | 接入评论系统后可在 `hugo.toml` 中打开 |

- [x] 创建 Hugo 站点
- [x] 接入 FixIt 主题
- [ ] 部署到服务器或静态托管平台

## 本地预览

```bash
# 启动本地服务，包含草稿
hugo server -D

# 构建到 public 目录
hugo --gc --minify
```
