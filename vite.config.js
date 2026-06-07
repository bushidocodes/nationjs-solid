import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { transformWithEsbuild } from "vite";

export default defineConfig({
  plugins: [
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
