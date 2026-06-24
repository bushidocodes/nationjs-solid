import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    // Polyfill Node.js globals/modules needed by @solid/react's Comunica dependencies
    // (web-streams-node, stream, etc.) that are not available natively in browsers.
    nodePolyfills({ globals: { global: true, Buffer: true, process: true } }),
    react(),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
});
