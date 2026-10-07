---
title: "Hello, world"
description: "Why I finally set up a personal site, and what I plan to put here."
pubDatetime: 2026-10-07T10:00:00+08:00
featured: true
draft: false
tags: ["meta"]
---

I've been meaning to do this for a while. Most of what I build ends up in a
repository somewhere with a README that says almost nothing, and the reasoning
behind it never gets written down anywhere.

So this is an attempt to fix that.

## What goes here

Roughly three kinds of things:

1. **Project notes** — what I built, what broke, and what I'd do differently.
   The interesting part is almost never the final code.
2. **Things I'm learning** — written up while I still remember what was
   confusing. If I wait until I understand it properly, I never write it.
3. **Occasional short posts** — a bug that cost me an afternoon, a tool worth
   using, that sort of thing.

## What won't go here

- Tutorials that already exist in twenty better versions elsewhere
- Anything I haven't actually tried myself

## How it's built

This site is static — plain HTML and CSS generated from Markdown at build time
by [Astro](https://astro.build/), using the
[AstroPaper](https://github.com/satnaing/astro-paper) theme. It's hosted on
GitHub Pages, and the whole build runs in GitHub Actions on every push.

That means: no database, no server, nothing to keep running. It costs nothing
and it's fast, which is about the right amount of engineering for a blog.

If you want to see what I'm actually working on, the code is on
[GitHub](https://github.com/jiwei741).
