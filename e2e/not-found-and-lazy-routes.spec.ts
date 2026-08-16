import { expect, test } from "./fixtures"

const caseStudyRoutes = [
  "/work/spf-design-system",
  "/work/portfolio",
  "/work/harmony",
  "/work/wellpack",
  "/work/joga-aura",
]

test("route fallback remains accessible on a delayed lazy page", async ({
  page,
}) => {
  await page.goto("/")
  await page.route(/\/src\/pages\/About\/About\.tsx/, async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    await route.continue()
  })

  await page.getByRole("link", { name: "About", exact: true }).click()
  await expect(page.getByRole("status")).toHaveText("Loading content…")
  await expect(page).toHaveURL(/\/about$/)
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
})

test("all five case studies support direct loading and history navigation", async ({
  page,
}) => {
  for (const route of caseStudyRoutes) {
    await page.goto(route)
    await expect(page.locator("h1")).toHaveCount(1)
  }

  await page.goBack()
  await expect(page).toHaveURL(/\/work\/wellpack$/)
  await page.goForward()
  await expect(page).toHaveURL(/\/work\/joga-aura$/)
  await page.reload()
  await expect(page.locator("h1")).toHaveCount(1)
})

test("unknown route is accessible in English and restores robots on return", async ({
  page,
}) => {
  await page.goto("/route-that-does-not-exist")

  await expect(
    page.getByRole("heading", { level: 1, name: "This page doesn’t exist." }),
  ).toBeVisible()
  await expect(page.locator("h1")).toHaveCount(1)
  await expect(
    page.getByRole("link", { name: "Back to homepage" }),
  ).toHaveAttribute("href", "/")
  await expect(
    page.getByRole("link", { name: "View my work" }),
  ).toHaveAttribute("href", "/work")
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  )

  await page.getByRole("link", { name: "View my work" }).click()
  await expect(page).toHaveURL(/\/work$/)
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "index, follow",
  )
})

test("unknown route follows the selected French language", async ({ page }) => {
  await page.goto("/")
  await page
    .getByRole("button", { name: "Switch site language to French" })
    .first()
    .click()
  await page.goto("/page-inconnue")

  await expect(
    page.getByRole("heading", { level: 1, name: "Cette page n’existe pas." }),
  ).toBeVisible()
  await expect(page.getByText(/Le lien est peut-être incorrect/)).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Retour à l’accueil" }),
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Voir mes projets" }),
  ).toBeVisible()
})

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`404 has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/missing")
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}

test("404 is absent from the sitemap", async ({ request }) => {
  const response = await request.get("/sitemap.xml")
  expect(response.ok()).toBe(true)
  expect(await response.text()).not.toContain("404")
})
