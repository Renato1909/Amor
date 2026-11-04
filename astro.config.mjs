import { defineConfig } from "astro/config";

// GitHub Pages de projeto: https://renato1909.github.io/Amor/
export default defineConfig({
  site: "https://renato1909.github.io",
  base: "/Amor",
  trailingSlash: "always",
  build: { format: "directory" },
});
