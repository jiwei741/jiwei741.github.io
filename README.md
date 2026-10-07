# jiwei741.github.io

My personal site and blog — project notes, things I'm learning, and the
occasional write-up.

**Live at:** https://jiwei741.github.io

## Stack

- [Astro](https://astro.build/) — static site generation
- [AstroPaper](https://github.com/satnaing/astro-paper) — the theme it started from
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Pagefind](https://pagefind.app/) — static search
- Hosted on **GitHub Pages**, deployed automatically by GitHub Actions

No database, no server, no tracking.

## Local development

Requires **Node >= 22.12**.

```sh
npm install     # 安装依赖
npm run dev     # 本地预览 http://localhost:4321
npm run build   # 构建到 dist/（含 astro check）
npm run preview # 预览构建产物
```

Also available: `npm run lint`, `npm run format`.

## Writing a post

Create a Markdown file in `src/content/posts/`:

```md
---
title: "Post title"
description: "One-line summary, used for SEO and previews."
pubDatetime: 2026-10-07T10:00:00+08:00
featured: false
draft: false
tags: ["tag-one", "tag-two"]
---

Content goes here.
```

Set `draft: true` to keep a post out of the build.

## Deploying

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site
and publishes it to GitHub Pages.

> **One-time setup:** in the repository, go to
> **Settings → Pages → Build and deployment → Source** and select
> **GitHub Actions**.

## Where to customise

| What | Where |
| --- | --- |
| Site title, description, author, GitHub link | `astro-paper.config.ts` |
| Homepage intro text | `src/pages/index.astro` |
| About page | `src/content/pages/about.md` |
| Colors and typography | `src/styles/theme.css` |
| Favicon and social preview image | `public/` |

## License

Content is my own. The AstroPaper theme is MIT licensed — see `LICENSE`.
