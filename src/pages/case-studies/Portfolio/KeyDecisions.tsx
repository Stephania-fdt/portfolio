import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { CaseStudyDisclosure } from "@/components/ui/case-study-disclosure"
import { LocalizedRichText } from "@/components/ui/localized-rich-text"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { portfolioDesignSystemContent } from "@/content/case-studies/portfolio-design-system"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** Real values, copied directly from `src/index.css` — nothing here is invented. */
const COLOR_TOKENS = [
  { name: "background", value: "#faf8f5" },
  { name: "foreground", value: "#141414" },
  { name: "brand", value: "#590f29" },
  { name: "secondary", value: "#e7ded3" },
  { name: "accent", value: "#92a8d1" },
  { name: "border", value: "#ece8e2" },
]

const TYPE_TOKENS = [
  { name: "--font-heading", value: "General Sans" },
  { name: "--font-sans", value: "Inter" },
  { name: "--font-mono", value: "IBM Plex Mono" },
]

const SPACING_TOKENS = [
  { name: "--spacing-container", value: "clamp(1.25rem, 4vw, 4rem)" },
  { name: "--spacing-section", value: "clamp(5rem, 10vw, 9rem)" },
  { name: "--spacing-section-sm", value: "clamp(2rem, 5vw, 4rem)" },
]

const MOTION_TOKENS = [
  { name: "--ease-standard", value: "cubic-bezier(0.22, 1, 0.36, 1)" },
  { name: "--duration-fast", value: "150ms" },
  { name: "--duration-standard", value: "250ms" },
  { name: "--duration-slow", value: "400ms" },
]

/**
 * Portfolio case study — Chapter 4, Key Design Decisions. Replaces three
 * former chapters (Information Architecture, Design System,
 * Accessibility) with four Decision → Why blocks — the section a Design
 * Lead skimming this page should actually read. The real token values
 * and the three screenshots those chapters used to show are still here,
 * just relocated: tokens sit behind "Design system reference" below,
 * screenshots moved to Final Experience where the page shows the product
 * instead of explaining it twice.
 */
function KeyDecisions() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).decisions
  const designSystem = getLocalizedContent(
    portfolioDesignSystemContent,
    language,
  )
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-decisions">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.h3
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-3xl leading-snug font-bold text-foreground md:text-4xl"
        >
          {content.title}
        </motion.h3>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2"
        >
          {content.items.map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {item.label}
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                {item.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <CaseStudyDisclosure summary={content.detailsSummary}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {designSystem.introduction}
          </p>

          <div className="mt-10">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {designSystem.typography.label}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              <LocalizedRichText text={designSystem.typography.paragraph} />
            </p>
            <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {TYPE_TOKENS.map((token) => (
                <div key={token.name} className="bg-background p-5">
                  <p className="font-mono text-2xs text-muted-foreground">
                    {token.name}
                  </p>
                  <p className="mt-2 text-base font-medium text-foreground">
                    {token.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {designSystem.colors.label}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              <LocalizedRichText text={designSystem.colors.paragraph} />
            </p>
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
              {COLOR_TOKENS.map((token) => (
                <div key={token.name} className="bg-background p-4">
                  <div
                    aria-hidden="true"
                    className="aspect-square w-full border border-border"
                    style={{ backgroundColor: token.value }}
                  />
                  <p className="mt-3 font-mono text-2xs text-muted-foreground">
                    {token.name}
                  </p>
                  <p className="font-mono text-2xs text-foreground">
                    {token.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {designSystem.spacing.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <LocalizedRichText text={designSystem.spacing.paragraph} />
              </p>
              <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border">
                {SPACING_TOKENS.map((token) => (
                  <div key={token.name} className="bg-background p-5">
                    <p className="font-mono text-2xs text-muted-foreground">
                      {token.name}
                    </p>
                    <p className="mt-2 font-mono text-sm text-foreground">
                      {token.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {designSystem.motion.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <LocalizedRichText text={designSystem.motion.paragraph} />
              </p>
              <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border">
                {MOTION_TOKENS.map((token) => (
                  <div key={token.name} className="bg-background p-5">
                    <p className="font-mono text-2xs text-muted-foreground">
                      {token.name}
                    </p>
                    <p className="mt-2 font-mono text-sm text-foreground">
                      {token.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CaseStudyDisclosure>
      </Container>
    </Section>
  )
}

export { KeyDecisions }
