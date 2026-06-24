import js from "@eslint/js";
import globals from "globals";
import eslintReact from "@eslint-react/eslint-plugin";
import tseslint from "typescript-eslint";

const sharedLanguageOptions = {
  ecmaVersion: 2025,
  sourceType: "module",
  parser: tseslint.parser,
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
  ...tseslint.configs.recommended,
  {
    ...eslintReact.configs.recommended,
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: sharedLanguageOptions,
  },
  {
    files: ["src/**/*.test.{ts,tsx}"],
    languageOptions: {
      ...sharedLanguageOptions,
      globals: {
        ...sharedLanguageOptions.globals,
        ...globals.jest,
      },
    },
  },
];
