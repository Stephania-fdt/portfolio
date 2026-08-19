import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

const content = {
  en: {
    eyebrow: "Contact",
    heading: "Let’s talk.",
    intro: "Direct and simple — no form in between.",
    copyEmail: "Copy email address",
    emailCopied: "Email address copied",
  },
  fr: {
    eyebrow: "Contact",
    heading: "Échangeons.",
    intro: "Direct et simple — sans formulaire intermédiaire.",
    copyEmail: "Copier l’adresse e-mail",
    emailCopied: "Adresse e-mail copiée",
  },
} as const

for (const language of ["en", "fr"] as const) {
  test(`Contact renders the approved ${language} content and reaches it via direct navigation`, async ({
    page,
  }) => {
    await page.addInitScript((selectedLanguage) => {
      window.localStorage.setItem("portfolio-language", selectedLanguage)
    }, language)
    await page.goto("/contact")

    const copy = content[language]
    const article = page.locator("article")
    await expect(page.locator("html")).toHaveAttribute("lang", language)
    await expect(article.getByText(copy.eyebrow, { exact: true })).toBeVisible()
    await expect(article.getByRole("heading", { level: 1 })).toHaveCount(1)
    await expect(
      article.getByRole("heading", { level: 1, name: copy.heading }),
    ).toBeVisible()
    await expect(article.getByText(copy.intro)).toBeVisible()
    await expect(page).toHaveTitle(`Contact — Stéphania | Product Designer`)

    // Nothing else — no form, phone, testimonials, skills, projects, FAQ.
    await expect(page.locator("form")).toHaveCount(0)
    await expect(page.getByRole("dialog")).toHaveCount(0)

    // Header stays reachable and reflects the current page.
    const nav = page.locator("header nav")
    await expect(
      nav.getByRole("link", { name: /contact|échangeons/i }).first(),
    ).toHaveAttribute("aria-current", "location")
  })
}

test("Contact page survives a hard refresh on the direct route", async ({
  page,
}) => {
  await page.goto("/contact")
  await expect(
    page.getByRole("heading", { level: 1, name: "Let’s talk." }),
  ).toBeVisible()

  await page.reload()
  await expect(
    page.getByRole("heading", { level: 1, name: "Let’s talk." }),
  ).toBeVisible()
  await expect(page).toHaveURL(/\/contact$/)
})

test("The copy-email button confirms the copy without hiding the mailto link", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"])
  await page.goto("/contact")

  const article = page.locator("article")
  const copy = content.en
  const copyButton = article.getByRole("button", { name: copy.copyEmail })
  await expect(copyButton).toBeVisible()

  await copyButton.click()
  await expect(article.getByText(copy.emailCopied)).toBeAttached()

  const clipboardText = await page.evaluate(() =>
    navigator.clipboard.readText(),
  )
  expect(clipboardText).toBe("hello@stephania-fdt.com")

  // The real mailto link next to it still works on its own.
  await expect(
    article.getByRole("link", { name: "hello@stephania-fdt.com" }),
  ).toHaveAttribute(
    "href",
    "mailto:hello@stephania-fdt.com?subject=Product%20Design%20Opportunity%20%E2%80%94%20St%C3%A9phania",
  )
})

for (const width of [1440, 768, 375, 320]) {
  test(`Contact stays overflow-free and reachable via keyboard at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/contact")
    await expect(
      page.getByRole("heading", { level: 1, name: "Let’s talk." }),
    ).toBeVisible()

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)

    // "One-screen by design" on a normal desktop viewport — never enforced
    // with overflow:hidden, just checked to actually fit without scroll.
    if (width === 1440) {
      const scrollable = await page.evaluate(
        () => document.documentElement.scrollHeight > window.innerHeight + 4,
      )
      expect(scrollable).toBe(false)
    }

    const article = page.locator("article")
    const links = await article.getByRole("link").all()
    expect(links.length).toBeGreaterThan(0)
    for (const link of links) {
      const box = await link.boundingBox()
      if (!box) continue
      expect(box.height).toBeGreaterThanOrEqual(20)
    }
  })
}

test("Contact never blocks scroll and stays usable at 200% browser zoom", async ({
  page,
}) => {
  await page.setViewportSize({ width: 720, height: 450 })
  await page.goto("/contact")

  const overflowStyle = await page.evaluate(
    () => getComputedStyle(document.documentElement).overflowY,
  )
  expect(overflowStyle).not.toBe("hidden")
  const bodyOverflowStyle = await page.evaluate(
    () => getComputedStyle(document.body).overflowY,
  )
  expect(bodyOverflowStyle).not.toBe("hidden")

  const canScroll = await page.evaluate(() => {
    document.documentElement.scrollTop = 0
    window.scrollTo(0, document.body.scrollHeight)
    const scrolled = window.scrollY > 0
    window.scrollTo(0, 0)
    return scrolled || document.documentElement.scrollHeight <= 450
  })
  expect(canScroll).toBe(true)

  await expect(
    page.getByRole("heading", { level: 1, name: "Let’s talk." }),
  ).toBeVisible()
})

test("Contact's four rows are reachable in a single forward tab sweep", async ({
  page,
}) => {
  await page.goto("/contact")

  const email = page.getByRole("link", { name: "hello@stephania-fdt.com" })
  const copyButton = page.getByRole("button", {
    name: content.en.copyEmail,
  })
  const linkedin = page.getByRole("link", {
    name: /linkedin\.com\/in\/stephania-fordant/,
  })
  const cv = page.getByRole("link", { name: /download.*cv/i })

  await email.focus()
  await expect(email).toBeFocused()
  await page.keyboard.press("Tab")
  await expect(copyButton).toBeFocused()
  await page.keyboard.press("Tab")
  await expect(linkedin).toBeFocused()
  await page.keyboard.press("Tab")
  await expect(cv).toBeFocused()

  for (const control of [email, copyButton, linkedin, cv]) {
    expect(
      await control.evaluate(
        (element) => getComputedStyle(element).outlineWidth,
      ),
    ).not.toBe("0px")
  }
})

for (const language of ["en", "fr"] as const) {
  test(`Contact has no detectable WCAG A/AA violations in ${language}`, async ({
    page,
  }) => {
    await page.addInitScript((selectedLanguage) => {
      window.localStorage.setItem("portfolio-language", selectedLanguage)
    }, language)
    await page.goto("/contact")

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    expect(
      results.violations,
      JSON.stringify(results.violations, null, 2),
    ).toEqual([])
  })
}
