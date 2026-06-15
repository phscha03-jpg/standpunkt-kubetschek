import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    domains: [],
    remotePatterns: [],
  },
});
