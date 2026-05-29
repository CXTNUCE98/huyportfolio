import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: true,
  srcDir: "src/",

  components: [
    { path: "~/components", prefix: "" },
    { path: "~/components/layout", prefix: "Layout" },
  ],

  app: {
    head: {
      title: "Portfolio - Hyu",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "UX Designer Portfolio - Minimalist, modern, and user-centered experiences." },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg", media: "(prefers-color-scheme: light)" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" },
      ],
    },
    baseURL: "/",
  },

  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
  ],

  css: ["@unocss/reset/tailwind.css"],

  compatibilityDate: "2025-04-15",
});
