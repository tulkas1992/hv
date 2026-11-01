// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";

const SITE_URL = "https://victor-ruiz-reyes.site";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    preact(),
    icon(),
    sitemap({
      filter: (page) => !page.includes("/404"),
      i18n: { defaultLocale: "es", locales: { es: "es-CO" } },
      serialize(item) {
        const isHome = item.url === `${SITE_URL}/`;
        const isProject = item.url.includes("/portfolio/projects/");
        item.lastmod = new Date().toISOString();
        item.changefreq = isHome ? "weekly" : "monthly";
        item.priority = isHome ? 1.0 : isProject ? 0.6 : 0.8;
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});
