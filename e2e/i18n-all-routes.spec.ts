import { expect, test } from "@playwright/test"

const routes = [
  "/",
  "/work",
  "/about",
  "/experience",
  "/work/spf-design-system",
  "/work/portfolio",
  "/work/harmony",
  "/work/wellpack",
  "/work/joga-aura",
  "/page-that-does-not-exist",
] as const

for (const language of ["en", "fr"] as const) {
  test.describe(`${language.toUpperCase()} public routes`, () => {
    for (const route of routes) {
      test(`${route} renders in ${language}`, async ({ page }) => {
        await page.addInitScript((selectedLanguage) => {
          window.localStorage.setItem("portfolio-language", selectedLanguage)
        }, language)

        await page.goto(route)

        await expect(page.locator("html")).toHaveAttribute("lang", language)
        await expect(page.locator("main, article").first()).toBeVisible()
        await expect(
          page
            .getByRole("link", {
              name: language === "fr" ? "Projets" : "Work",
              exact: true,
            })
            .first(),
        ).toBeVisible()
        await expect(
          page.getByText(
            language === "fr" ? "Selected Work" : "Projets sélectionnés",
            {
              exact: true,
            },
          ),
        ).toHaveCount(0)

        if (route.includes("does-not-exist")) {
          await expect(
            page.getByRole("heading", {
              name:
                language === "fr"
                  ? "Cette page n’existe pas."
                  : "This page doesn’t exist.",
            }),
          ).toBeVisible()
        }
      })
    }
  })
}
