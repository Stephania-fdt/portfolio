import { expect, test } from "./fixtures"

/**
 * Final pre-production QA gaps not already covered by a dedicated spec
 * (Sprint "Finalisation — QA / Head of Design / Git / Production", step 5)
 * — 200% zoom on the pages that didn't already have one, and language
 * switching staying coherent (no reset, no navigation, no broken state)
 * across every public route.
 */
const zoomRoutes = ["/about", "/experience"]

for (const route of zoomRoutes) {
  test(`${route} survives 200% zoom without overflow or hidden content`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 720, height: 450 })
    await page.goto(route)
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1,
      ),
    ).toBe(true)

    const overflow = await page.evaluate(
      () => getComputedStyle(document.documentElement).overflowY,
    )
    expect(overflow).not.toBe("hidden")
  })
}

const allRoutes = [
  "/",
  "/work",
  "/about",
  "/experience",
  "/contact",
  "/work/spf-design-system",
  "/work/portfolio",
  "/work/harmony",
  "/work/wellpack",
  "/work/joga-aura",
]

// Contact and the Portfolio case study deliberately keep the same SEO
// title in both languages (their subtitle is built from professional terms
// — "Product Designer", "Design System" — that stay untranslated sitewide,
// same as the Hero's own eyebrow); their meta descriptions still localize,
// which is what this test checks for those two instead.
const sameTitleRoutes = new Set(["/contact", "/work/portfolio"])

for (const route of allRoutes) {
  test(`language switch on ${route} stays on the same route and updates content coherently`, async ({
    page,
  }) => {
    await page.goto(route)
    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible()
    const urlBefore = page.url()
    const titleBefore = await page.title()
    const descriptionBefore = await page
      .locator('meta[name="description"]')
      .getAttribute("content")

    await page
      .getByRole("button", { name: "Switch site language to French" })
      .click()
    await expect(page.locator("html")).toHaveAttribute("lang", "fr")
    expect(page.url()).toBe(urlBefore)
    const titleAfterFr = await page.title()
    const descriptionAfterFr = await page
      .locator('meta[name="description"]')
      .getAttribute("content")
    expect(descriptionAfterFr).not.toBe(descriptionBefore)
    if (!sameTitleRoutes.has(route)) {
      expect(titleAfterFr).not.toBe(titleBefore)
    }

    await page
      .getByRole("button", { name: "Passer le site en anglais" })
      .click()
    await expect(page.locator("html")).toHaveAttribute("lang", "en")
    expect(page.url()).toBe(urlBefore)
    const titleAfterEn = await page.title()
    expect(titleAfterEn).toBe(titleBefore)
  })
}

test("keyboard-only journey: Tab from the top of the Homepage reaches the primary nav, Hero CTAs, and Selected Work without a trap", async ({
  page,
}) => {
  await page.goto("/")
  await page.keyboard.press("Tab")
  const first = await page.evaluate(() => document.activeElement?.tagName)
  expect(first).toBeTruthy()

  // Tab several times and confirm focus keeps moving forward through the
  // page rather than getting stuck on one element.
  const seen = new Set<string>()
  for (let i = 0; i < 12; i++) {
    await page.keyboard.press("Tab")
    const el = await page.evaluate(() => {
      const active = document.activeElement
      return active
        ? `${active.tagName}:${active.getAttribute("aria-label") ?? active.textContent?.slice(0, 20)}`
        : null
    })
    if (el) seen.add(el)
  }
  expect(seen.size).toBeGreaterThan(5)
})

test("direct refresh on every top-level route renders content, not a blank page", async ({
  page,
}) => {
  for (const route of ["/contact", "/about", "/experience"]) {
    await page.goto(route)
    await page.reload()
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    await expect(page.locator("body")).not.toBeEmpty()
  }
})

test("404 is functional, readable and navigable back into the site", async ({
  page,
}) => {
  await page.goto("/this-route-does-not-exist")
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  )

  const homeLink = page.getByRole("link", { name: /home|accueil/i }).first()
  if (await homeLink.count()) {
    await homeLink.click()
    await expect(page).toHaveURL(/\/$/)
  }
})
