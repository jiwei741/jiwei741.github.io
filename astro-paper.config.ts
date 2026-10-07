import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // ▼▼▼ 这些是你最需要改的地方 ▼▼▼
    url: "https://jiwei741.github.io/",
    title: "Jiwei",
    description:
      "Personal site and blog — projects I'm building, notes on what I'm learning, and things I find interesting.",
    author: "Jiwei",
    profile: "https://github.com/jiwei741",
    // ▲▲▲ 这些是你最需要改的地方 ▲▲▲
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 5,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/jiwei741/jiwei741.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/jiwei741" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
