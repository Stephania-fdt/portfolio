import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Container } from "@/components/ui/container"
import { fadeUp } from "@/lib/motion"
import { getContactContent } from "@/content/contact"
import { useLanguage } from "@/i18n"

/**
 * The Homepage's third and final beat — Hero orients, Selected Work
 * proves, this closes with one quiet line, not a repeat of the Contact
 * page it points to. No card, no form, no email or LinkedIn shown here:
 * those live at `/contact` now. Deliberately smaller and quieter than
 * every section above it — a conclusion, not one more thing competing
 * for attention.
 */
function HomeClosing() {
  const { language } = useLanguage()
  const content = getContactContent(language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="closing"
      aria-label={content.closingPrompt}
      className="border-t border-border py-14 md:py-16 lg:py-20"
    >
      <Container size="content">
        {/* A deterministic sm: breakpoint switch, not `flex-wrap` (Sprint
            "HomeClosing responsive stability fix"). `flex-wrap` let the
            browser decide row-vs-stack per pixel of *measured content
            width* — a threshold that isn't pinned to any real breakpoint,
            sits right in the middle of common phone viewports (~390–414px
            in FR), and shifts by a few px whenever the fallback font swaps
            to Inter (`font-display: swap`), since the two metrics don't
            measure identically. That combination is what read as
            "sometimes stable, sometimes not": the same viewport width
            could resolve to either layout depending on font-load timing.
            Below `sm`, this is a plain stacked column — no wrap decision
            left to make, so nothing is left for a font swap to flip. */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={fadeUp}
          className="flex flex-col items-start gap-2 sm:flex-row sm:items-baseline sm:gap-x-3"
        >
          <p className="text-xl font-medium text-foreground md:text-2xl">
            {content.closingPrompt}
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-xl font-medium whitespace-nowrap text-brand md:text-2xl"
          >
            {content.closingCta}
            <ArrowRight
              aria-hidden="true"
              className="size-5 transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}

export { HomeClosing }
