import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/sections/Hero/HeroBackground"
import { HeroExpertise } from "@/components/sections/Hero/HeroExpertise"
import { ScrollIndicator } from "@/components/sections/Hero/ScrollIndicator"
import { transition } from "@/lib/motion"
import { getHeroContent } from "@/content/hero"
import { useLanguage } from "@/i18n"

/** Distance (px) the Hero's own reveals travel — slightly more than the
 *  sitewide FADE_OFFSET (12px) since these are larger, slower beats, not
 *  small UI transitions. */
const REVEAL_OFFSET = 16

/**
 * Sprint 12 — the Hero rebuilt as its own editorial composition rather
 * than the site's shared `fadeUp`/`staggerContainer` rhythm. Every other
 * section keeps that shared vocabulary; the Hero earns a bespoke one
 * because it's the one moment asked to feel authored rather than
 * systematic. Hand-tuned, uneven delays (not a fixed stagger interval) so
 * the byline, the claim, and the CTA land as three distinct beats with
 * their own weight — a pause you can feel, not a metronome.
 */
function Hero() {
  const { language, copy } = useLanguage()
  const heroContent = getHeroContent(language)
  const shouldReduceMotion = useReducedMotion()

  const reveal = (delay: number, offset = REVEAL_OFFSET) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: offset },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition.slow, delay: shouldReduceMotion ? 0 : delay },
  })

  return (
    <section
      id="hero"
      aria-label={copy.common.introduction}
      className="relative grid min-h-dvh w-full overflow-x-hidden md:grid-cols-[58fr_42fr] lg:grid-cols-[65fr_35fr]"
    >
      <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] pt-section pb-6">
        <Container size="content" className="row-start-1">
          {/* Byline demoted to a masthead credit line, not a sentence —
              the scale drop from here to the claim below is the first
              beat of editorial tension: small, precise, then enormous. */}
          <motion.p
            {...reveal(0)}
            className="text-xs font-medium tracking-widest text-foreground uppercase md:text-sm"
          >
            {heroContent.name}
            <span className="text-muted-foreground">
              {" "}
              — {heroContent.title}
            </span>
          </motion.p>

          {/* The claim is allowed to run wider than the reading column
              beneath it (max-w-3xl vs. max-w-xl) — headlines outrunning
              body measure is a real editorial convention, not an accident. */}
          <h1 className="mt-10 max-w-3xl">
            <motion.span
              {...reveal(0.15)}
              className="block text-3xl font-medium text-muted-foreground md:text-4xl"
            >
              {heroContent.statement.primary}
            </motion.span>
            <motion.span
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                ...transition.slow,
                delay: shouldReduceMotion ? 0 : 0.32,
              }}
              className="mt-1 block origin-left text-5xl leading-[0.9] font-bold tracking-tightest sm:text-6xl md:text-7xl"
            >
              {heroContent.statement.secondary}
            </motion.span>
          </h1>

          <div className="max-w-xl">
            <motion.div {...reveal(0.55)} className="mt-16 space-y-4">
              <p className="text-lg text-foreground md:text-xl">
                {heroContent.valueProposition.lead}
              </p>
              <p className="text-lg text-muted-foreground md:text-xl">
                {heroContent.valueProposition.support}
              </p>
            </motion.div>

            <motion.div
              {...reveal(0.7)}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Button asChild size="lg">
                <a href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
                  />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-muted-foreground/70 hover:border-muted-foreground"
              >
                <a href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                </a>
              </Button>
            </motion.div>
          </div>

          <HeroExpertise />
        </Container>

        {/* Row 2 (the 1fr track) is intentionally empty — no spacer element. */}

        <ScrollIndicator />
      </div>

      <p className="sr-only md:hidden">{heroContent.signature}</p>

      <HeroBackground />
    </section>
  )
}

export { Hero }
