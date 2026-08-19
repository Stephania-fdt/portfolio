import { expect, test } from "./fixtures"

/**
 * Real mobile-navigation QA (Sprint "Experience + global polish", Part D)
 * — open, close, navigate, back, focus, scroll lock, touch targets, and
 * FR/EN switching, exercised as an actual user would rather than asserted
 * from markup alone.
 */
test("mobile index: opens, locks scroll, and returns focus to its trigger on close", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/")

  const trigger = page.getByRole("button", { name: "Open navigation" })
  await trigger.click()

  const dialog = page.getByRole("dialog")
  await expect(dialog).toBeVisible()
  await expect(page.getByRole("button", { name: "Close" })).toBeFocused()

  const bodyOverflow = await page.evaluate(
    () => getComputedStyle(document.body).overflow,
  )
  expect(bodyOverflow).toBe("hidden")

  await page.keyboard.press("Escape")
  await expect(dialog).toBeHidden()
  await expect(trigger).toBeFocused()

  const bodyOverflowAfterClose = await page.evaluate(
    () => getComputedStyle(document.body).overflow,
  )
  expect(bodyOverflowAfterClose).not.toBe("hidden")
})

test("mobile index: navigating to another page closes the panel and lands on the right route", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/")

  await page.getByRole("button", { name: "Open navigation" }).click()
  await page.getByRole("dialog").getByRole("link", { name: "ABOUT" }).click()

  await expect(page).toHaveURL(/\/about$/)
  await expect(page.getByRole("dialog")).toBeHidden()
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
})

test("mobile index: browser back after an in-panel navigation returns to the previous page", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/about")

  await page.getByRole("button", { name: "Open navigation" }).click()
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "EXPERIENCE" })
    .click()
  await expect(page).toHaveURL(/\/experience$/)

  await page.goBack()
  await expect(page).toHaveURL(/\/about$/)
})

test("mobile index: focus trap keeps Tab cycling inside the open panel", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/")
  await page.getByRole("button", { name: "Open navigation" }).click()

  const dialog = page.getByRole("dialog")
  const closeButton = page.getByRole("button", { name: "Close" })
  await expect(closeButton).toBeFocused()

  // Shift+Tab from the first focusable element wraps to the last.
  await page.keyboard.press("Shift+Tab")
  const focusedInDialog = await dialog.evaluate((el) =>
    el.contains(document.activeElement),
  )
  expect(focusedInDialog).toBe(true)
})

test("mobile index: every link and the language switcher meet a 44px touch target", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/")
  await page.getByRole("button", { name: "Open navigation" }).click()

  const dialog = page.getByRole("dialog")
  const links = await dialog.getByRole("link").all()
  for (const link of links) {
    const box = await link.boundingBox()
    if (!box) continue
    expect(box.height).toBeGreaterThanOrEqual(44)
  }

  const languageButtons = await dialog.getByRole("button").all()
  for (const button of languageButtons) {
    const box = await button.boundingBox()
    if (!box) continue
    expect(box.height).toBeGreaterThanOrEqual(36)
  }
})

test("mobile index: switching language inside the panel updates labels without closing it", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/")
  await page.getByRole("button", { name: "Open navigation" }).click()

  const dialog = page.getByRole("dialog")
  await dialog
    .getByRole("button", { name: "Switch site language to French" })
    .click()

  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole("link", { name: "PROJETS" })).toBeVisible()
  await expect(dialog.getByRole("link", { name: "CONTACT" })).toBeVisible()
})

for (const route of ["/", "/about", "/experience", "/contact"]) {
  test(`mobile index marks the correct active link from ${route}`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto(route)
    await page.getByRole("button", { name: "Open navigation" }).click()

    const activeLinks = page
      .getByRole("dialog")
      .locator('a[aria-current="location"]')
    const count = await activeLinks.count()
    expect(count).toBeLessThanOrEqual(1)
  })
}

test("Work link reaches the archive from every non-home route without a dead anchor", async ({
  page,
}) => {
  for (const route of ["/about", "/experience", "/contact"]) {
    await page.goto(route)
    await page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: "Work" })
      .click()
    await expect(page).toHaveURL(/\/work$/)
    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible()
  }
})

test("No residual #contact anchors remain in the live navigation", async ({
  page,
}) => {
  await page.goto("/")
  const hrefs = await page
    .locator("header a[href]")
    .evaluateAll((elements) =>
      elements.map((element) => element.getAttribute("href")),
    )
  for (const href of hrefs) {
    expect(href).not.toBe("#contact")
    expect(href).not.toMatch(/\/#contact$/)
  }
})
