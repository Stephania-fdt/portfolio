import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { FIELD_GRID_PATTERN } from "@/lib/patterns"
import jogaAuraProduct from "@/assets/case-studies/joga-aura/product.png"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 12, Iteration. The "before" state is
 * rendered live with the exact same field-grid pattern `WorkItem` itself
 * used while no real Joga Aura asset existed — not a screenshot standing
 * in for it, the actual real component pattern, reused. The "after" is
 * the same real product photo Selected Work uses today.
 */
function Iteration() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).iteration
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-iteration">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>{content.introduction}</p>
        </SubsectionText>

        {/* Example 1 — the Joga Aura placeholder */}
        <div className="mt-16">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.assetLabel}
          </p>
          <motion.div
            {...(shouldReduceMotion ? { initial: false } : REVEAL())}
            className="mt-8 grid gap-8 sm:grid-cols-2"
          >
            <figure>
              <div
                aria-hidden="true"
                className="flex aspect-[4/3] w-full items-center justify-center border border-border bg-secondary/50"
                style={{ backgroundImage: FIELD_GRID_PATTERN }}
              >
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {content.plate}
                </span>
              </div>
              <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {content.before}
              </figcaption>
            </figure>
            <figure>
              <div className="aspect-[4/3] w-full overflow-hidden border border-border bg-secondary/50">
                <img
                  src={jogaAuraProduct}
                  alt={content.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {content.after}
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Example 2 — the SPF category tag refinement */}
        <div className="mt-24 max-w-2xl">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.categoryLabel}
          </p>
          <SubsectionText className="mt-4">
            <p>{content.category}</p>
          </SubsectionText>
          <motion.div
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
            className="mt-6 space-y-2 border border-border bg-secondary/50 p-6 font-mono text-xs"
          >
            <p className="text-muted-foreground">
              <span aria-hidden="true">− </span>
              {content.beforeCategory}
            </p>
            <p className="text-foreground">
              <span aria-hidden="true" className="text-brand">
                +{" "}
              </span>
              {content.afterCategory}
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export { Iteration }
