import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { transformWithEsbuild } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    // Polyfill Node.js globals/modules needed by @solid/react's Comunica dependencies
    // (web-streams-node, stream, etc.) that are not available natively in browsers.
    nodePolyfills({ globals: { global: true, Buffer: true, process: true } }),
    // Handle .js files that contain JSX (all source files in this project).
    // Vite's SSR transform uses rollup which cannot parse JSX, so we explicitly
    // run esbuild on .js files before they reach the SSR transform step.
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
