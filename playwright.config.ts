import { defineConfig, devices } from "@playwright/test"

const PORT = 5173
const BASE_URL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",

  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    // The app itself honors prefers-reduced-motion (see index.css) — reusing
    // that existing behavior keeps screenshots deterministic instead of
    // racing framer-motion's entrance animations.
    reducedMotion: "reduce",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    command: "npm run dev",
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
  },
})
