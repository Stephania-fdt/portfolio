import { expect, test } from "./fixtures"

test("Process preserves all five stages in the reference grid", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/#process")

  const section = page.locator("#process")
  const stages = section.locator("[data-process-stages] > article")

  await expect(stages).toHaveCount(5)
  await expect(
    section.getByRole("heading", { name: "The Process" }),
  ).toBeVisible()
  await expect(section.getByText("05 stages")).toBeVisible()
  await expect(stages.nth(0).getByText("I", { exact: true })).toBeVisible()
  await expect(
    stages.nth(0).getByRole("heading", { name: "Discover" }),
  ).toBeVisible()
  await expect(stages.nth(1).getByText("II", { exact: true })).toBeVisible()
  await expect(
    stages.nth(1).getByRole("heading", { name: "Frame" }),
  ).toBeVisible()
  await expect(stages.nth(2).getByText("III", { exact: true })).toBeVisible()
  await expect(
    stages.nth(2).getByRole("heading", { name: "Design" }),
  ).toBeVisible()
  await expect(stages.nth(3).getByText("IV", { exact: true })).toBeVisible()
  await expect(
    stages.nth(3).getByRole("heading", { name: "Validate" }),
  ).toBeVisible()
  await expect(stages.nth(4).getByText("V", { exact: true })).toBeVisible()
  await expect(
    stages.nth(4).getByRole("heading", { name: "Scale" }),
  ).toBeVisible()

  await expect
    .poll(() =>
      stages.evaluateAll(
        (elements) =>
          new Set(
            elements.map((element) =>
              Math.round(element.getBoundingClientRect().left),
            ),
          ).size,
      ),
    )
    .toBe(5)
})

test("Process stacks cleanly on mobile without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/#process")

  const stages = page.locator("#process [data-process-stages] > article")
  await expect(stages).toHaveCount(5)
  await expect(stages.nth(0)).toContainText(
    "Every project starts with listening",
  )

  const noHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth,
  )
  expect(noHorizontalOverflow).toBe(true)
})
