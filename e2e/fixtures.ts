import { test as base, expect } from "@playwright/test"

/**
 * Emulates prefers-reduced-motion for every test. playwright.config.ts's
 * top-level `use.reducedMotion` doesn't reliably reach this fixture's
 * `page` (confirmed: matchMedia reports false from config, true when set
 * here), so it's applied explicitly instead of relying on that option.
 */
const test = base.extend({
  page: async ({ page }, use) => {
    await page.emulateMedia({ reducedMotion: "reduce" })
    await use(page)
  },
})

export { test, expect }
