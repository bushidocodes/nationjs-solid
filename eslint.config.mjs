import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

const sharedLanguageOptions = {
  ecmaVersion: 2022,
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
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: sharedLanguageOptions,
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prop-types": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
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
