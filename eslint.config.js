// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook"

import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: ["dist", "node_modules", "playwright-report", "test-results"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Turns off any stylistic rule Prettier already owns, so the two tools
  // never disagree about formatting.
  eslintConfigPrettier,
  storybook.configs["flat/recommended"],
  {
    // Vitest's own docs recommend this triple-slash reference to type the
    // `test.projects` browser-mode config — not something to import instead.
    files: ["vite.config.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
)
