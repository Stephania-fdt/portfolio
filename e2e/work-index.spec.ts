import { expect, test } from "./fixtures"

const projectTitles = [
  "Scaling Accessible Public Services with a Unified Design System",
  "Turning User Needs into a Connected Product Experience",
  "Turning User Research into Evidence-Based Marketing Decisions",
  "Shaping a Premium Shopify Journey from Product Discovery to Conversion",
  "Designing and Building an Accessible Portfolio with AI-Assisted Workflows",
]

test("Home presents SPF, Harmony and WellPack in the requested order", async ({
  page,
}) => {
  await page.goto("/")

  const preview = page.locator("#work [data-work-preview] > div")
  await expect(preview).toHaveCount(3)
  await expect(
    preview.nth(0).getByRole("heading", { name: "SPF Affaires étrangères" }),
  ).toBeVisible()
  await expect(
    preview.nth(1).getByRole("heading", { name: "Harmony" }),
  ).toBeVisible()
  await expect(
    preview.nth(2).getByRole("heading", { name: "WellPack" }),
  ).toBeVisible()

  // Homepage progressive disclosure: no full Contact section here anymore
  // — "Connect on LinkedIn" now lives only on the dedicated /contact page.
  await expect(
    page.getByRole("link", { name: /Connect on LinkedIn/i }),
  ).toHaveCount(0)
  const workCta = page.getByRole("link", { name: /View all my work/i })
  await expect(workCta).toHaveAttribute("href", "/work")
  await expect(workCta).toHaveClass(/bg-brand/)
})

test("Project card titles use the French translations", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("portfolio-language", "fr")
  })
  await page.goto("/work")

  for (const title of [
    "Faire évoluer des services publics accessibles grâce à un Design System unifié",
    "Transformer les besoins utilisateurs en expérience produit connectée",
    "Concevoir et développer un portfolio accessible grâce à un workflow assisté par l’IA",
    "Transformer la recherche utilisateur en décisions marketing fondées sur des données",
    "Concevoir une expérience Shopify premium, de la découverte à la conversion",
  ]) {
    await expect(page.getByRole("heading", { name: title })).toBeVisible()
  }
})

for (const width of [375, 768, 1440]) {
  test(`Project cards remain clickable and readable at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/")

    const firstCard = page.locator("[data-work-preview] > div").first()
    const heading = firstCard.getByRole("heading")
    const lineCount = await heading.evaluate((element) => {
      const styles = getComputedStyle(element)
      return Math.round(
        element.getBoundingClientRect().height / parseFloat(styles.lineHeight),
      )
    })
    expect(lineCount).toBeLessThanOrEqual(width === 375 ? 3 : 2)

    await firstCard.getByRole("link", { name: /Explore the project/i }).click()
    await expect(page).toHaveURL(/\/work\/spf-design-system$/)
  })
}

for (const width of [375, 1440]) {
  test(`Home work CTA is centered at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/")

    const button = page.getByRole("link", { name: /View all my work/i })
    const box = await button.boundingBox()
    if (!box) throw new Error("Work CTA is not visible.")

    expect(Math.abs(box.x + box.width / 2 - width / 2)).toBeLessThanOrEqual(1)
  })
}

test("Work is a complete five-project editorial index", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/work")

  await expect(page.locator("main")).toBeVisible()
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Selected projects, systems and digital experiences.",
    }),
  ).toBeVisible()

  const projects = page.locator("[data-work-projects] > div")
  await expect(projects).toHaveCount(5)
  for (const title of projectTitles) {
    await expect(page.getByRole("heading", { name: title })).toBeVisible()
  }
  await expect(projects.nth(0)).toContainText("SPF Foreign Affairs")
  await expect(projects.nth(1)).toContainText("Harmony")
  await expect(projects.nth(2)).toContainText("WellPack")
  await expect(projects.nth(3)).toContainText("Joga Aura")
  await expect(projects.nth(4)).toContainText("Stéphania — Portfolio")

  const caseStudyLinks = page.locator("[data-work-projects] a[href^='/work/']")
  await expect(caseStudyLinks).toHaveCount(5)
})

test("Work navigation uses the archive route on desktop and mobile", async ({
  page,
}) => {
  await page.goto("/")
  await expect(
    page.getByRole("navigation", { name: "Primary" }).getByRole("link", {
      name: "Work",
    }),
  ).toHaveAttribute("href", "/work")

  await page.setViewportSize({ width: 375, height: 812 })
  await page.getByRole("button", { name: "Open navigation" }).click()
  await expect(
    page
      .getByRole("navigation", { name: "Index" })
      .getByRole("link", { name: "WORK" }),
  ).toHaveAttribute("href", "/work")
})

for (const [path, heading] of [
  ["/work/spf-design-system", "Building a Scalable Government Design System"],
  ["/work/portfolio", "Stéphania — Portfolio"],
  ["/work/harmony", "Harmony"],
  ["/work/wellpack", "WellPack"],
]) {
  test(`project route ${path} renders its canonical case study`, async ({
    page,
  }) => {
    await page.goto(path)
    await expect(
      page.getByRole("heading", { level: 1, name: heading }),
    ).toBeVisible()
  })
}

test("Joga Aura's canonical route renders its complete case study", async ({
  page,
}) => {
  await page.goto("/work/joga-aura")
  await expect(
    page.getByRole("heading", { level: 1, name: "Joga Aura" }),
  ).toBeVisible()
})

for (const [legacyPath, canonicalPath] of [
  ["/work/spf-design-system/preview", "/work/spf-design-system"],
  ["/work/harmony/preview", "/work/harmony"],
  ["/work/wellpack/preview", "/work/wellpack"],
]) {
  test(`${legacyPath} redirects to its canonical route`, async ({ page }) => {
    await page.goto(legacyPath)
    await expect(page).toHaveURL(new RegExp(`${canonicalPath}$`))
  })
}

for (const width of [375, 768, 1440]) {
  test(`Work index does not overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/work")

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}
