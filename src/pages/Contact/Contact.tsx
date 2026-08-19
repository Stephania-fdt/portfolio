import { motion, useReducedMotion } from "framer-motion"
import { Download, ExternalLink } from "lucide-react"

import { Container } from "@/components/ui/container"
import { CopyButton } from "@/components/ui/copy-button"
import { fadeUp, staggerContainer, transition } from "@/lib/motion"
import { getContactPageContent } from "@/content/contact-page"
import { useLanguage } from "@/i18n"

/**
 * `/contact` — "one screen, one intention." Four real facts (email,
 * LinkedIn, location, CV), the same values already live elsewhere in
 * this project (`content/contact.ts`, `pages/Experience/Experience.tsx`),
 * presented as one calm, editorial list rather than a card grid or a
 * form. `min-h-dvh` + `justify-center` centers this on a normal desktop
 * viewport without forcing it — there's no `overflow: hidden` and no
 * height cap, so the page scrolls normally at 200% zoom, on a small
 * phone, or with a larger font size, exactly like every other page.
 *
 * Title/meta description come from `<Seo />` alone (Sprint "SEO title race
 * fix") — this page used to set `document.title` itself too, redundantly
 * racing `<Seo />`'s own effect (harmless only by coincidence, since both
 * happened to resolve to the same string here).
 */
function Contact() {
  const { language } = useLanguage()
  const content = getContactPageContent(language)
  const shouldReduceMotion = useReducedMotion()

  const rows = [
    {
      label: content.emailLabel,
      value: content.emailValue,
      href: content.emailHref,
      external: false,
      action: (
        <CopyButton
          value={content.emailValue}
          label={content.copyEmail}
          copiedLabel={content.emailCopied}
        />
      ),
    },
    {
      label: content.linkedinLabel,
      value: content.linkedinValue,
      href: content.linkedinHref,
      external: true,
      action: null,
    },
    {
      label: content.locationLabel,
      value: content.locationValue,
      href: undefined,
      external: false,
      action: null,
    },
    {
      label: content.cvLabel,
      value: content.cvValue,
      href: content.cvHref,
      external: false,
      download: content.cvFilename,
      ariaLabel: content.cvAriaLabel,
      action: null,
    },
  ] as const

  return (
    // `role="main"` — one `<main>` landmark per page (Sprint "Finalisation
    // — Lighthouse landmark-one-main").
    <article
      role="main"
      className="flex min-h-dvh flex-col justify-center pt-20 pb-16 md:pt-24 md:pb-20 lg:pb-24"
    >
      <Container size="narrow">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.slow}
          className="font-mono text-xs tracking-widest text-brand uppercase"
        >
          {content.eyebrow}
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...transition.slow,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="mt-4 text-5xl leading-[0.95] font-bold tracking-tightest md:text-7xl"
        >
          {content.heading}
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...transition.slow,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="mt-5 max-w-md text-lg text-muted-foreground"
        >
          {content.intro}
        </motion.p>

        <motion.dl
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-12 divide-y divide-border border-y border-border"
        >
          {rows.map((row) => (
            <motion.div
              key={row.label}
              variants={fadeUp}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <dt className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {row.label}
              </dt>
              <dd className="flex items-center gap-3">
                {row.href ? (
                  <a
                    href={row.href}
                    {...(row.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    {...("download" in row ? { download: row.download } : {})}
                    aria-label={"ariaLabel" in row ? row.ariaLabel : undefined}
                    className="inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors duration-(--duration-fast) ease-standard hover:text-brand md:text-xl"
                  >
                    {row.value}
                    {row.external ? (
                      <ExternalLink aria-hidden="true" className="size-4" />
                    ) : "download" in row ? (
                      <Download aria-hidden="true" className="size-4" />
                    ) : null}
                  </a>
                ) : (
                  <span className="text-lg font-medium text-foreground md:text-xl">
                    {row.value}
                  </span>
                )}
                {row.action}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </article>
  )
}

export { Contact }
