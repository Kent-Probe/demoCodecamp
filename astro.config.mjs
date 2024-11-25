// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        vs: "node_modules/monaco-editor/min/vs",
      },
    },
  },
});
