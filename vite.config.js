import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { transformWithOxc } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    // Polyfill Node.js globals/modules (global, Buffer, process) that the
    // Inrupt Solid client libraries reference but are not available natively
    // in browsers.
    nodePolyfills({ globals: { global: true, Buffer: true, process: true } }),
    // Transform .js files containing JSX via oxc before Vite's import
    // analysis step, which uses rolldown and cannot parse JSX syntax.
    {
      name: "treat-js-as-jsx",
      enforce: "pre",
      async transform(code, id) {
        if (/src\/.*\.js$/.test(id)) {
          return transformWithOxc(code, id, { lang: "jsx" });
        }
      },
    },
    react(),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
