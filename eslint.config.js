const js = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const noUnsanitized = require("eslint-plugin-no-unsanitized");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const xss = require("eslint-plugin-xss");
const globals = require("globals");

module.exports = defineConfig([
  {
    files: ["assets/*.js", "scripts/*.js"],
    extends: [
      js.configs.recommended,
      noUnsanitized.configs.recommended,
      prettierRecommended,
    ],
    plugins: { xss },
    rules: {
      "prettier/prettier": "error",
      "xss/no-location-href-assign": "error",
    },
  },
  {
    // Browser scripts shipped with the theme.
    files: ["assets/*.js"],
    languageOptions: { sourceType: "script", globals: globals.browser },
  },
  {
    // Build-time Node scripts.
    files: ["scripts/*.js"],
    languageOptions: { sourceType: "commonjs", globals: globals.node },
  },
]);
