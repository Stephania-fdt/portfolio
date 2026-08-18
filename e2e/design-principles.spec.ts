import { expect, test } from "./fixtures"

test("Home does not render the retired Design Principles specimen", async ({
  page,
}) => {
  await page.goto("/")

  await expect(page.locator("#principles")).toHaveCount(0)
  await expect(
    page.getByRole("tablist", { name: "Specimen view" }),
  ).toHaveCount(0)
})

for (const width of [375, 390, 768, 1280, 1440]) {
  test(`Home remains compact without Design Principles at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/")

    await expect(page.locator("#principles")).toHaveCount(0)
    const hasNoHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    )
    expect(hasNoHorizontalOverflow).toBe(true)
  })
}
