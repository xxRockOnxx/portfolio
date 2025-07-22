// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: process.env.URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/resume":
      "https://drive.google.com/file/d/1R3K3zIe79CP54toVWgCFUoWpyJkVdTpj/preview",
  },
});
