import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://loewen-zahn.de",
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    domains: [],
    remotePatterns: [],
  },
  integrations: [
    sitemap({
      // Rechtsseiten sind noindex und gehören nicht in die Sitemap.
      filter: (page) =>
        !page.endsWith("/impressum/") && !page.endsWith("/datenschutz/"),
    }),
  ],
});
