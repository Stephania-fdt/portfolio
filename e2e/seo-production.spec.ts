import { expect, test } from "./fixtures"

const routes = [
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

test("every public route exposes complete unique SEO metadata", async ({
  page,
}) => {
  const titles = new Set<string>()
  const descriptions = new Set<string>()

  for (const route of routes) {
    await page.goto(route)
    const title = await page.title()
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content")
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href")

    expect(title.length).toBeGreaterThan(0)
    expect(description?.length).toBeGreaterThanOrEqual(100)
    expect(canonical).toBe(
      `https://stephania-fdt.com${route === "/" ? "" : route}`,
    )
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      title,
    )
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      canonical!,
    )
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://stephania-fdt.com/og/stephania-fordant-product-designer.jpg",
    )
    expect(titles.has(title)).toBe(false)
    expect(descriptions.has(description!)).toBe(false)
    titles.add(title)
    descriptions.add(description!)
  }
})

test("language updates document metadata without false hreflang links", async ({
  page,
}) => {
  await page.goto("/")
  await page
    .getByRole("button", { name: "Switch site language to French" })
    .click()
  await expect(page.locator("html")).toHaveAttribute("lang", "fr")
  await expect(page).toHaveTitle(
    "Stéphania Fordant - Product Designer | Accessibilité",
  )
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "fr_BE",
  )
  await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(0)
  await expect(page.locator("script#person-jsonld")).toHaveCount(1)
})

test("sitemap lists every indexable public route, including /contact, and nothing internal", async ({
  request,
}) => {
  const response = await request.get("/sitemap.xml")
  expect(response.ok()).toBe(true)
  const body = await response.text()

  for (const route of routes) {
    expect(
      body.includes(
        `https://stephania-fdt.com${route === "/" ? "/" : route}</loc>`,
      ),
      `sitemap should list ${route}`,
    ).toBe(true)
  }
  expect(body).not.toContain("/preview")
})

test("production SEO and CV files are publicly served", async ({ request }) => {
  for (const path of [
    "/robots.txt",
    "/sitemap.xml",
    "/og/stephania-fordant-product-designer.jpg",
    "/stephania-fordant-product-designer-cv-fr.pdf",
    "/stephania-fordant-product-designer-cv-en.pdf",
  ]) {
    const response = await request.get(path)
    expect(response.ok(), `${path} should be available`).toBe(true)
    expect((await response.body()).length).toBeGreaterThan(0)
  }
})

for (const width of [375, 768, 1024, 1440]) {
  test(`Harmony homepage thumbnail is optimised and stable at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto("/")
    const image = page.getByAltText(
      "Harmony connected-bracelet website displayed on a desktop monitor",
    )
    await image.scrollIntoViewIfNeeded()
    await expect(image).toBeVisible()
    await expect(image).toHaveAttribute("loading", "lazy")
    await expect(image).toHaveAttribute("width", "1600")
    await expect(image).toHaveAttribute("height", "900")
    // The card sits further down the page now that Home shows five
    // projects instead of three — give the lazy-loaded image time to
    // actually start fetching after scrolling it into view.
    await expect
      .poll(() =>
        image.evaluate((element: HTMLImageElement) => element.currentSrc),
      )
      .not.toBe("")
    const details = await image.evaluate((element: HTMLImageElement) => ({
      src: element.currentSrc,
      naturalWidth: element.naturalWidth,
      naturalHeight: element.naturalHeight,
      ratio:
        element.getBoundingClientRect().width /
        element.getBoundingClientRect().height,
    }))
    expect(details.src).toMatch(/home-thumbnail(?:-[^/]+)?\.webp$/)
    expect(details.naturalWidth).toBe(1600)
    expect(details.naturalHeight).toBe(900)
    expect(details.ratio).toBeGreaterThan(1.3)
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true)
  })
}
