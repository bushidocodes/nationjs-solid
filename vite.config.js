import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { transformWithEsbuild } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    // Polyfill Node.js globals/modules needed by @solid/react's Comunica dependencies
    // (web-streams-node, stream, etc.) that are not available natively in browsers.
    nodePolyfills({ globals: { global: true, Buffer: true, process: true } }),
    // Transform .js files containing JSX via esbuild before Vite's import
    // analysis step, which uses rollup and cannot parse JSX syntax.
    {
      name: "treat-js-as-jsx",
      enforce: "pre",
      async transform(code, id) {
        if (/src\/.*\.js$/.test(id)) {
          return transformWithEsbuild(code, id, { loader: "jsx" });
        }
      },
    },
    react({
      jsxRuntime: "classic",
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
