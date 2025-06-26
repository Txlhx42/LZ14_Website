import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        // Autoprefixer wird automatisch von Vite hinzugefügt
      ],
    },
  },
  build: {
    target: ["es2015", "edge88", "firefox78", "chrome87", "safari14"],
    cssTarget: ["chrome80", "firefox78", "safari14"],
    // Bessere Browser-Kompatibilität für ältere Browser
    minify: "terser",
  },
});
