# 网站维护手册

这份文档是给你自己看的操作指南。**所有命令都在 `F:\jiwei741.github.io` 目录下执行。**

如果你只想知道"我该干什么"，看第一节就够了。

---

## 一、日常三步（这是你最常用的）

```sh
cd F:\jiwei741.github.io
npm run dev          # ① 本地预览，改代码会自动刷新
```

浏览器打开 **http://localhost:4321** 。改任何文件，页面**自动更新**，不用手动刷新。

改满意了：

```sh
git add -A
git commit -m "描述你改了什么"
git push
```

**② 推送后什么都不用做。** GitHub Actions 会自动构建并发布，大约 **1 分钟**后
<https://jiwei741.github.io> 就更新了。

**③ 想看部署进度**：

```sh
gh run list --limit 3      # 看最近几次构建状态
gh run watch               # 实时盯着当前这次
```

> **提示**：`npm run dev` 开着不影响你 `git push`，两个可以同时进行。

---

## 二、发布一篇文章

### 1. 新建文件

在 `src/content/posts/` 里新建一个 `.md` 文件，文件名就是网址的一部分。

```
src/content/posts/my-first-robot.md
        ↓
https://jiwei741.github.io/posts/my-first-robot/
```

文件名用**英文小写 + 连字符**，不要用中文和空格。

### 2. 开头必须写这段（frontmatter）

```markdown
---
title: "文章标题"
description: "一句话摘要，会显示在列表页和搜索引擎结果里。"
pubDatetime: 2026-10-07T10:00:00+08:00
tags: ["C++", "算法"]
---

正文从这里开始写。
```

### 3. 全部可用字段

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | ✅ | 文章标题 |
| `description` | ✅ | 摘要，**别省**，影响 SEO 和分享预览 |
| `pubDatetime` | ✅ | 发布时间，**格式必须是 `2026-10-07T10:00:00+08:00`** |
| `tags` | | 标签数组，例如 `["C++", "算法"]` |
| `featured` | | `true` = 置顶到首页「Featured」区 |
| `draft` | | `true` = **不发布**（本地能看到，线上没有） |
| `modDatetime` | | 修改时间，会显示"Updated" |
| `ogImage` | | 这篇文章的分享预览图 |
| `author` | | 覆盖默认作者名 |

> ⚠️ **`pubDatetime` 的时区不能省。** 写 `2026-10-07` 会报错，
> 必须写成 `2026-10-07T10:00:00+08:00`。

**草稿用法**：写到一半要出门，加 `draft: true` 推上去也不会出现在线上，
回来改成 `false` 再推就发布了。

### 4. 正文里能用的写法

**代码块**（带行号高亮）：

````markdown
```cpp
int main() {
  return 0;   // [!code highlight]
}
```
````

`// [!code highlight]` 会高亮这一行。还有 `[!code ++]` / `[!code --]` 表示新增和删除。

**提示框**：

```markdown
> [!NOTE]
> 这是一个普通提示。

> [!TIP]
> 这是一个技巧。

> [!WARNING]
> 这是一个警告。
```

**自动目录**：在文中写一个 `## Table of contents` 标题，它会自动变成可折叠的目录。

**图片**：

```markdown
![图片说明](/my-photo.jpg)          ← 图片放在 public/ 目录
```

把图片丢进 `public/` 文件夹，然后按 `/文件名.jpg` 引用即可。

**表格、数学公式、脚注**都支持，按标准 Markdown 写就行。

---

## 三、改外观颜色（最常改的）

打开 **`src/styles/theme.css`**，只有 7 个变量：

```css
:root,                     /* ← 浅色模式 */
[data-theme="light"] {
  --background: #f8f4ef;         /* 页面底色（暖白纸面） */
  --foreground: #2c2634;         /* 正文颜色（深靛紫） */
  --accent: #a44222;             /* 强调色：链接、按钮、高亮（焦橙） */
  --accent-foreground: #ffffff;  /* 强调色上的文字 */
  --muted: #ece4da;              /* 次要背景 */
  --muted-foreground: #6f6459;   /* 次要文字 */
  --border: #e3d8cc;             /* 边框线 */
}

[data-theme="dark"] {      /* ← 深色模式，改法一样 */
  --background: #241f33;
  --foreground: #ece4dc;
  --accent: #d4784c;
  ...
}
```

> 这套色是从你那张背景图里提取的（暖白 / 深靛紫 / 赭红 / 焦橙）。
> 想换风格，**只改 `--accent` 一个值**就能看出大效果，明暗两套都要改。

**改颜色最快的办法**：只改 `--accent` 一个值。比如换成绿色 `#10b981`、
紫色 `#8b5cf6`，整站风格立刻变了，而且明暗两套会自动协调。

> 找个想要的色值：搜索"颜色选择器"，或者去 <https://tailwindcss.com/docs/colors> 抄一个。

---

## 四、换背景图（已给你做好）

### 怎么用

1. 把你的图片**直接拖进** `src/assets/backgrounds/` 文件夹
2. 完成。就这么简单。

- 放 **1 张** → 每次都用这张
- 放 **多张** → 每次访问**随机**挑一张，但同一次浏览里保持不变
  （新开标签页或新会话才会重新随机，不会点一下导航就换一张）
- 文件夹**空着** → 不显示背景图

支持 `jpg` / `jpeg` / `png` / `webp` / `avif`。**原图多大都行**，
构建时会自动压缩成 1920px 宽的 webp（实测 394 KB 的图会压到 20 KB）。

### 调整浓淡

打开 **`src/styles/background.css`**，改最上面两个值：

```css
--bg-opacity: 0.2;    /* 图片浓淡：0=看不见，1=原图亮度 */
--bg-blur: 0px;       /* 柔焦程度，2~8 会让图更"退后" */
```

参考值：

| 想要的效果 | `--bg-opacity` | `--bg-blur` |
| --- | --- | --- |
| 淡淡纹理，文字最清楚 | `0.12` | `0` |
| 图片明显但不抢戏 | `0.30` | `2px` |
| 完整壁纸（需配合下面） | `0.85` | `0` |

### 想做成"完整壁纸 + 毛玻璃卡片"

把 `--bg-opacity` 调到 `0.85`，然后打开 `background.css` **最底部那段被注释掉的代码**
（删掉 `/*` 和 `*/`）：

```css
body {
  background-color: color-mix(in srgb, var(--background) 88%, transparent);
  backdrop-filter: blur(12px);
}
```

这样内容区变成半透明毛玻璃，图片看得见、文字也压得住。

---

## 五、换站点图标

现在用的是你那张图的裁切版：`public/favicon.png`（浏览器标签页上那个小图）。

**我额外生成了一个 `EY` 字母版** —— `public/favicon-monogram.png`。

原因：我实测过，图片缩到 32px（浏览器标签的实际大小）会糊成一团色块，
16px 完全认不出；而字母版在任何尺寸下都清晰。想换：

```astro
<!-- src/layouts/Layout.astro -->
<link rel="icon" type="image/png" href={getAssetPath("favicon.png")} />
                                                  ↑ 改成 favicon-monogram.png
```

`public/apple-touch-icon.png` 是手机「添加到主屏幕」时用的图标，换法同理。

## 六、改导航栏

文件：**`src/components/Header.astro`**

导航项就是一段段 `<li>`。想加一个"项目"页面，在 `<ul id="menu-items">` 里
照着现有的抄一份：

```astro
<li class="col-span-2">
  <a
    href={getRelativeLocaleUrl(locale, "projects")}
    class:list={{ "active-nav": isActive("/projects") }}
  >
    项目
  </a>
</li>
```

然后新建 `src/pages/projects.astro` 作为那个页面。

> 现有项的文字（Posts / Tags / About）来自翻译文件
> `src/i18n/lang/en.ts`。新加的项**直接写中文/英文文字**即可，不必改翻译文件。

---

## 七、改首页和关于页

| 想改什么 | 改哪里 |
| --- | --- |
| 首页大标题、自我介绍 | `src/pages/index.astro` —— 找 `Hi, I'm Jiwei` 那段 |
| About 页面全文 | `src/content/pages/about.md` |
| 站点标题、描述、GitHub 链接 | `astro-paper.config.ts` 最上面 |
| 每页显示几篇文章 | `astro-paper.config.ts` 里的 `posts.perIndex` |
| 页脚 | `src/components/Footer.astro` |

---

## 八、动态效果

**已经内置的**：页面之间切换是**平滑淡入淡出**（不是刷新跳转），
这个能力来自 `Layout.astro` 里的 `<ClientRouter />`，不用你做任何事。

**想再加动效**，最简单的是给元素加过渡名字。例如让文章标题在页面切换时"飞过去"：

```astro
<h1 transition:name={`post-title-${slug}`}>文章标题</h1>
```

在列表页和详情页用**同一个** `transition:name`，切换时元素会平滑移动。

其他常用写法：

```astro
<div transition:animate="slide">…</div>    <!-- 滑入 -->
<div transition:animate="fade">…</div>     <!-- 淡入 -->
```

**更炫的效果**（滚动出现、鼠标跟随等）建议装 `astro` 生态的动效库，
或者用纯 CSS —— 但注意**别加太多**，个人站加载速度比炫技重要。

---

## 九、文件地图（哪个文件管什么）

```
F:\jiwei741.github.io\
├── astro-paper.config.ts      ★ 站点标题/描述/作者/社交链接/分页
├── astro.config.ts              字体、Markdown 插件、SEO 配置
│
├── src/
│   ├── pages/
│   │   ├── index.astro        ★ 首页
│   │   └── about.astro          About 页面外壳
│   ├── content/
│   │   ├── posts/             ★ 你的文章都在这里
│   │   └── pages/about.md     ★ About 正文
│   ├── components/
│   │   ├── Header.astro       ★ 导航栏
│   │   └── Footer.astro         页脚
│   ├── layouts/Layout.astro     全站外壳（背景图机制在这）
│   ├── styles/
│   │   ├── theme.css          ★ 颜色（最常改）
│   │   ├── background.css     ★ 背景图浓淡
│   │   └── global.css           全局样式、引入上面两个
│   └── assets/
│       └── backgrounds/       ★ 背景图放这里
│
├── public/                       favicon、社交预览图、文章配图
└── .github/workflows/deploy.yml  自动部署（一般不用动）
```

带 ★ 的是你日常会碰的，其余基本不用管。

---

## 十、速查表

| 我想… | 做什么 |
| --- | --- |
| 写新文章 | `src/content/posts/` 新建 `.md` |
| 不发布某篇 | frontmatter 里 `draft: true` |
| 文章置顶 | frontmatter 里 `featured: true` |
| 换主题色 | 改 `src/styles/theme.css` 的 `--accent` |
| 换背景图 | 图片丢进 `src/assets/backgrounds/` |
| 调背景浓淡 | 改 `src/styles/background.css` 的 `--bg-opacity` |
| 改站点名/描述 | 改 `astro-paper.config.ts` |
| 改导航栏 | 改 `src/components/Header.astro` |
| 改界面文字（导航/页脚/404/翻页） | 改 `src/i18n/lang/zh-CN.ts` |
| 改整站语言 | `astro.config.ts` 的 `i18n.locales` + `astro-paper.config.ts` 的 `lang` |
| 本地预览 | `npm run dev` |
| 发布上线 | `git add -A && git commit -m "..." && git push` |
| 看部署结果 | `gh run list --limit 3` |

---

## 十一、出问题了怎么办

**本地页面报错 / 白屏**
看终端里的红色报错。最常见的是 frontmatter 格式错了
（漏了 `description`，或者日期写成了 `2026-10-07` 没带时区）。

**推上去了但线上没变**
1. 先等 1~2 分钟
2. `gh run list --limit 3` 看构建是否失败
3. 失败了用 `gh run view --log-failed` 看具体错误

**改坏了想回退**
```sh
git log --oneline          # 找到上一个正常版本的哈希
git revert <哈希>          # 撤销某次改动（会生成一个新提交）
git push
```

**想彻底重来**
线上代码仓库还在，删掉本地文件夹重新 clone 即可，不会丢东西。

---

## 附：这个站是怎么搭起来的

- **Astro 7** —— 在构建时把 Markdown 变成静态 HTML
- **AstroPaper v6** 主题 —— 起点，已深度改造
- **Tailwind CSS 4** —— 样式
- **Pagefind** —— 纯静态全文搜索（不需要服务器）
- **GitHub Pages + Actions** —— 托管和自动部署

没有数据库、没有后端、没有服务器要维护。**它就是一个文件夹里的静态文件**，
所以永远不会"挂掉"，也基本不会有安全漏洞。
