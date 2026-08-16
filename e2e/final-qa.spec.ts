import { expect, test } from "./fixtures"

const routes = [
  "/",
  "/about",
  "/experience",
  "/work",
  "/work/spf-design-system",
  "/work/portfolio",
  "/work/harmony",
  "/work/wellpack",
  "/work/joga-aura",
]

for (const width of [320, 1920]) {
  test(`all public routes remain structurally sound at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1080 })

    for (const route of routes) {
      await page.goto(route)
      await expect(page.locator("h1")).toHaveCount(1)
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${route} must not overflow horizontally`,
      ).toBe(true)
    }
  })
}

test("direct case-study loads survive refresh and browser back", async ({
  page,
}) => {
  await page.goto("/work/harmony")
  await page.reload()
  await expect(
    page.getByRole("heading", { level: 1, name: "Harmony" }),
  ).toBeVisible()

  await page.goto("/work")
  await page.goBack()
  await expect(page).toHaveURL(/\/work\/harmony$/)
})
