import { expect, test } from "@playwright/test"

test("Hero specimen follows the cursor and hides its crosshair on leave", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" })
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/")

  const specimen = page.locator("[data-hero-specimen]")
  const box = await specimen.boundingBox()
  if (!box) throw new Error("Hero specimen is not visible at desktop width.")

  await page.mouse.move(box.x + box.width * 0.75, box.y + box.height * 0.25)
  await expect(specimen.getByText(/x 75.0/)).toBeVisible()
  await expect(specimen.locator("[data-hero-crosshair]")).toHaveCSS(
    "opacity",
    "1",
  )

  await page.mouse.move(box.x - 12, box.y - 12)
  await expect(specimen.locator("[data-hero-crosshair]")).toHaveCSS(
    "opacity",
    "0",
  )
})

test("Hero specimen stays neutral when reduced motion is enabled", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/")

  const specimen = page.locator("[data-hero-specimen]")
  const box = await specimen.boundingBox()
  if (!box) throw new Error("Hero specimen is not visible at desktop width.")

  await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.2)
  await expect(specimen.getByText(/x 50.0/)).toBeVisible()
  await expect(specimen.locator("[data-hero-crosshair]")).toHaveCSS(
    "opacity",
    "0",
  )
})
