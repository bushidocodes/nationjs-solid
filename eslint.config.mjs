import js from "@eslint/js";
import globals from "globals";
import eslintReact from "@eslint-react/eslint-plugin";

const sharedLanguageOptions = {
  ecmaVersion: 2025,
  sourceType: "module",
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  globals: {
    ...globals.browser,
    process: "readonly",
  },
};

export default [
  js.configs.recommended,
  {
    ...eslintReact.configs.recommended,
    files: ["src/**/*.{js,jsx}"],
    languageOptions: sharedLanguageOptions,
  },
  {
    files: ["src/**/*.test.{js,jsx}"],
    languageOptions: {
      ...sharedLanguageOptions,
      globals: {
        ...sharedLanguageOptions.globals,
        ...globals.jest,
      },
    },
  },
];
