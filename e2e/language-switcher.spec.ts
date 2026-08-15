import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

test("desktop language selector is segmented, accessible and persistent", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/")

  const group = page.getByRole("group", { name: "Choose language" })
  await expect(group).toBeVisible()

  const french = group.getByRole("button", {
    name: "Switch site language to French",
  })
  const english = group.getByRole("button", {
    name: "Switch site language to English",
  })
  await expect(english).toHaveAttribute("aria-pressed", "true")
  await expect(french).toHaveAttribute("aria-pressed", "false")

  for (const option of [french, english]) {
    const box = await option.boundingBox()
    expect(box?.width).toBeGreaterThanOrEqual(44)
    expect(box?.height).toBeGreaterThanOrEqual(44)
  }

  await french.focus()
  expect(
    await french.evaluate((element) => getComputedStyle(element).outlineWidth),
  ).not.toBe("0px")
  await french.press("Enter")
  await expect(
    page.getByRole("group", { name: "Choisir la langue" }),
  ).toBeVisible()

  await page.goto("/work")
  await expect(page.locator("html")).toHaveAttribute("lang", "fr")
  expect(
    await page.evaluate(() => localStorage.getItem("portfolio-language")),
  ).toBe("fr")
})

for (const width of [1024, 1280, 1440]) {
  test(`desktop header layers and controls stay separated at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/")

    const header = page.locator("header")
    const logo = header.getByRole("link", { name: "Stéphania" })
    const group = header.getByRole("group", { name: "Choose language" })
    const links = header.getByRole("list")
    const cta = header.locator("a").last()
    const [headerBox, logoBox, groupBox, linksBox, ctaBox] = await Promise.all([
      header.boundingBox(),
      logo.boundingBox(),
      group.boundingBox(),
      links.boundingBox(),
      cta.boundingBox(),
    ])
    if (!headerBox || !logoBox || !groupBox || !linksBox || !ctaBox) {
      throw new Error("Desktop header controls must all be visible.")
    }

    expect(logoBox.x + logoBox.width).toBeLessThan(groupBox.x)
    expect(groupBox.x + groupBox.width).toBeLessThan(linksBox.x)
    expect(linksBox.x + linksBox.width).toBeLessThan(ctaBox.x)
    await expect(header).toHaveCSS("background-color", "rgb(250, 248, 245)")

    await group
      .getByRole("button", { name: "Switch site language to French" })
      .click()
    const frenchGroupBox = await header
      .getByRole("group", { name: "Choisir la langue" })
      .boundingBox()
    const frenchHeaderBox = await header.boundingBox()
    expect(frenchGroupBox?.x).toBe(groupBox.x)
    expect(frenchGroupBox?.width).toBe(groupBox.width)
    expect(frenchHeaderBox?.height).toBe(headerBox.height)

    await page.evaluate(() => window.scrollTo(0, 500))
    await expect(header).toHaveCSS("background-color", "rgb(250, 248, 245)")
  })
}

for (const width of [320, 375]) {
  test(`mobile language controls remain usable at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 812 })
    await page.goto("/")

    const compact = page.getByRole("button", {
      name: "Switch site language to French",
    })
    await expect(compact).toBeVisible()
    const compactBox = await compact.boundingBox()
    expect(compactBox?.width).toBeGreaterThanOrEqual(44)
    expect(compactBox?.height).toBeGreaterThanOrEqual(44)

    await page.getByRole("button", { name: "Open navigation" }).click()
    const dialog = page.getByRole("dialog")
    await expect(dialog.getByText("Language", { exact: true })).toBeVisible()
    const group = dialog.getByRole("group", { name: "Choose language" })
    await expect(group).toBeVisible()
    await expect(group.getByText("FR", { exact: true })).toBeVisible()
    await expect(group.getByText("EN", { exact: true })).toBeVisible()

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}

test("tablet header keeps the compact selector without overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 768, height: 900 })
  await page.goto("/")
  await expect(
    page.getByRole("button", { name: "Switch site language to French" }),
  ).toBeVisible()
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeVisible()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true)
})

test("navigation with the new language controls has no WCAG A/AA violations", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 812 })
  await page.goto("/")
  await page.getByRole("button", { name: "Open navigation" }).click()
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze()
  expect(
    results.violations,
    JSON.stringify(results.violations, null, 2),
  ).toEqual([])
})
