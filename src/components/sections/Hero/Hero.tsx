import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/sections/Hero/HeroBackground"
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
 * the byline, the claim, the CTAs and the expertise line land as distinct
 * beats with their own weight — a pause you can feel, not a metronome.
 * Compressed (Sprint "Hero height reduction") so that pause never reads as
 * a delay: four beats now land inside ~0.6s of hand-off, not ~0.9s.
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
      className="relative isolate w-full overflow-x-hidden"
    >
      {/* Not a `Container` — the text column still starts exactly where
          `Container`'s own left inset would put it (same formula, inlined
          below) so it lines up with Work/HomeClosing beneath it, but the
          right side is left open past that box instead of capped at
          `max-w-content`. The signature mark is decorative (aria-hidden),
          not reading content, so it's free to use the extra room on wide
          screens instead of sitting in a column identical in width to the
          text's — capped only by its own max-width in `HeroBackground`. */}
      <div className="grid pr-container pl-[max(1.25rem,calc((100vw-var(--container-content))/2+var(--spacing-container)))] md:grid-cols-[58fr_42fr] md:gap-x-8 md:pr-0 lg:grid-cols-[65fr_35fr] lg:gap-x-12">
        {/* pt-16/lg:pt-20 is a floor, not a stylistic choice — it matches
            the fixed nav's own height (`h-16`/`lg:h-20` in `Navigation.tsx`)
            exactly, so the byline never renders underneath that fixed
            header. Going lower reproduces that overlap. */}
        <div className="grid grid-rows-[auto_auto_auto] pt-16 pb-6 lg:pt-20">
          <div className="row-start-1">
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

            {/* Sprint "Hero rebalance" — capped at 5xl (not 6xl) so the
                French headline lands in ~3 lines instead of 4 once it has
                the column's full width to work with, and so the block reads
                shorter, not just narrower. */}
            <motion.h1
              {...reveal(0.15)}
              className="mt-6 max-w-3xl text-4xl leading-[0.98] font-bold tracking-tightest sm:text-5xl md:mt-7"
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p
              {...reveal(0.3)}
              className="mt-5 max-w-2xl text-lg leading-[1.5] text-muted-foreground md:mt-6 md:text-xl"
            >
              {heroContent.description}
            </motion.p>

            <div className="max-w-xl">
              <motion.div
                {...reveal(0.45)}
                className="mt-7 flex flex-wrap items-center gap-5 md:mt-8"
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
                  <Link to={heroContent.secondaryCta.href}>
                    {heroContent.secondaryCta.label}
                  </Link>
                </Button>
              </motion.div>

              {/* Three names, quietly — never a badge grid, never louder
                  than the CTAs it sits beneath. The depth behind each one
                  lives in the case studies, not here. */}
              <motion.p
                {...reveal(0.6)}
                className="mt-6 text-xs font-medium tracking-wide text-muted-foreground uppercase md:mt-7 md:text-sm"
              >
                {heroContent.expertise.items
                  .map((item) => item.title)
                  .join(" · ")}
              </motion.p>
            </div>
          </div>

          <ScrollIndicator />
        </div>

        <HeroBackground />
      </div>
    </section>
  )
}

export { Hero }
