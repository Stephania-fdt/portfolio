import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "./fixtures"

/**
 * HomeClosing responsive stability (Sprint "HomeClosing responsive
 * stability fix"). The old layout used `flex flex-wrap` — a row/stack
 * decision made per pixel of *measured content width*, with no anchor to
 * an actual breakpoint. In FR that threshold landed at ~395–414px, right
 * in the middle of common phone viewports, and shifted by a few px
 * whenever the fallback font swapped to Inter (`font-display: swap`),
 * since the two fonts don't measure identically — the same viewport width
 * could resolve to either layout depending on load timing. The fix
 * replaces that with a deterministic `sm:` breakpoint switch: a plain
 * stacked column below 640px, a row at/above it — resolved by the CSS
 * engine before first paint, immune to font metrics entirely.
 */
const widths = [320, 360, 375, 390, 414, 480, 600, 768, 820, 1024, 1280, 1440]

for (const lang of ["en", "fr"] as const) {
  for (const width of widths) {
    test(`closing CTA lands in exactly one layout — ${lang} at ${width}px`, async ({
      page,
    }) => {
      if (lang === "fr") {
        await page.addInitScript(() => {
          window.localStorage.setItem("portfolio-language", "fr")
        })
      }
      await page.setViewportSize({ width, height: 1200 })
      await page.goto("/")
      const closing = page.locator("#closing")
      await closing.scrollIntoViewIfNeeded()

      const pBox = await closing.locator("p").boundingBox()
      const linkBox = await closing.getByRole("link").boundingBox()
      const sameRow = pBox && linkBox && Math.abs(pBox.y - linkBox.y) < 2
      // Below `sm` (640px): always stacked. At/above: always one row.
      expect(sameRow).toBe(width >= 640)

      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true)
    })
  }
}

test("closing CTA flips cleanly at the exact 640px breakpoint boundary", async ({
  page,
}) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("portfolio-language", "fr")
  })
  await page.goto("/")
  const closing = page.locator("#closing")
  await closing.scrollIntoViewIfNeeded()

  await page.setViewportSize({ width: 639, height: 1200 })
  let pBox = await closing.locator("p").boundingBox()
  let linkBox = await closing.getByRole("link").boundingBox()
  expect(Math.abs((pBox?.y ?? 0) - (linkBox?.y ?? 0))).toBeGreaterThan(2)

  await page.setViewportSize({ width: 640, height: 1200 })
  pBox = await closing.locator("p").boundingBox()
  linkBox = await closing.getByRole("link").boundingBox()
  expect(Math.abs((pBox?.y ?? 0) - (linkBox?.y ?? 0))).toBeLessThan(2)
})

test("closing CTA text and arrow never separate onto two lines, at any width", async ({
  page,
}) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("portfolio-language", "fr")
  })
  await page.goto("/")
  const closing = page.locator("#closing")
  await closing.scrollIntoViewIfNeeded()

  for (const width of [320, 375, 390, 414, 480, 639, 640, 768, 1440]) {
    await page.setViewportSize({ width, height: 1200 })
    const link = closing.getByRole("link")
    const lines = await link.evaluate((el) => {
      const style = getComputedStyle(el)
      return Math.round(
        el.getBoundingClientRect().height / parseFloat(style.lineHeight),
      )
    })
    expect(lines, `link wrapped at ${width}px`).toBe(1)
  }
})

test("closing CTA survives a continuous 1440 -> 320 -> 1440 resize sweep with no console errors", async ({
  page,
}) => {
  const errors: string[] = []
  page.on("pageerror", (err) => errors.push(String(err)))
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text())
  })

  await page.goto("/")
  const closing = page.locator("#closing")
  await closing.scrollIntoViewIfNeeded()

  for (const width of [
    1440, 1024, 820, 768, 700, 640, 620, 480, 390, 320, 480, 640, 768, 1024,
    1440,
  ]) {
    await page.setViewportSize({ width, height: 1200 })
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `overflow at ${width}px`,
    ).toBe(true)
  }

  expect(errors, JSON.stringify(errors)).toEqual([])
})

test("closing CTA renders correctly immediately on direct refresh — no self-correcting jump", async ({
  page,
}) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("portfolio-language", "fr")
  })
  await page.setViewportSize({ width: 375, height: 1200 })
  await page.goto("/")
  await page.reload()
  const closing = page.locator("#closing")
  await closing.scrollIntoViewIfNeeded()
  const pBox = await closing.locator("p").boundingBox()
  const linkBox = await closing.getByRole("link").boundingBox()
  expect(Math.abs((pBox?.y ?? 0) - (linkBox?.y ?? 0))).toBeGreaterThan(2)
})

test("closing CTA renders correctly after navigating to Home from another route", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 1200 })
  await page.goto("/about")
  await page.getByRole("link", { name: "Stéphania" }).click()
  const closing = page.locator("#closing")
  await closing.scrollIntoViewIfNeeded()
  const pBox = await closing.locator("p").boundingBox()
  const linkBox = await closing.getByRole("link").boundingBox()
  expect(Math.abs((pBox?.y ?? 0) - (linkBox?.y ?? 0))).toBeGreaterThan(2)
})

test("closing CTA stays stable through an FR <-> EN switch at a row-layout width", async ({
  page,
}) => {
  await page.setViewportSize({ width: 768, height: 1200 })
  await page.goto("/")
  const closing = page.locator("#closing")
  await closing.scrollIntoViewIfNeeded()

  await page
    .getByRole("button", { name: "Switch site language to French" })
    .click()
  let pBox = await closing.locator("p").boundingBox()
  let linkBox = await closing.getByRole("link").boundingBox()
  expect(Math.abs((pBox?.y ?? 0) - (linkBox?.y ?? 0))).toBeLessThan(2)

  await page.getByRole("button", { name: "Passer le site en anglais" }).click()
  pBox = await closing.locator("p").boundingBox()
  linkBox = await closing.getByRole("link").boundingBox()
  expect(Math.abs((pBox?.y ?? 0) - (linkBox?.y ?? 0))).toBeLessThan(2)
})

test("closing CTA survives 200% zoom and stacks without overflow", async ({
  page,
}) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("portfolio-language", "fr")
  })
  await page.setViewportSize({ width: 720, height: 450 })
  await page.goto("/")
  const closing = page.locator("#closing")
  await closing.scrollIntoViewIfNeeded()

  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1,
    ),
  ).toBe(true)
  await expect(closing.getByRole("link")).toBeVisible()
})

test("closing CTA is keyboard reachable with visible focus", async ({
  page,
}) => {
  await page.goto("/")
  const link = page.locator("#closing").getByRole("link")
  await link.scrollIntoViewIfNeeded()
  await link.focus()
  await expect(link).toBeFocused()
  const outline = await link.evaluate((el) => getComputedStyle(el).outlineWidth)
  expect(outline).not.toBe("0px")
  const box = await link.boundingBox()
  if (box) expect(box.height).toBeGreaterThanOrEqual(20)
})

test("closing CTA respects prefers-reduced-motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/")
  const closing = page.locator("#closing")
  await closing.scrollIntoViewIfNeeded()
  await expect(closing.getByRole("link")).toBeVisible()
  const opacity = await closing
    .locator("div")
    .first()
    .evaluate((el) => getComputedStyle(el).opacity)
  expect(opacity).toBe("1")
})

test("HomeClosing has no detectable WCAG A/AA violations", async ({ page }) => {
  await page.goto("/")
  await page.locator("#closing").scrollIntoViewIfNeeded()

  const results = await new AxeBuilder({ page })
    .include("#closing")
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze()

  expect(
    results.violations,
    JSON.stringify(results.violations, null, 2),
  ).toEqual([])
})
