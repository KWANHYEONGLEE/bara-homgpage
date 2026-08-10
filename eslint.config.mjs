import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: [".next/**", "node_modules/**", "cypress/**", "public/**"],
  },
  ...coreWebVitals,
  ...typescript,
  prettier,
  {
    rules: {
      "no-console": "warn",
    },
  },
];

export default config;
