import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Quote } from "@/components/ui/quote"
import { GhostMark } from "@/components/ui/ghost-mark"
import { fadeUp } from "@/lib/motion"
import { editorialQuote } from "@/content/quote"

/**
 * A deliberate pause between Selected Work and Design Principles — no
 * kicker, no hairline ritual. Opting out of both is intentional: this
 * section exists to be wordless, not another labeled chapter.
 */
function EditorialQuote() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="editorial-quote-heading"
      className="relative flex min-h-[85dvh] w-full flex-col justify-center overflow-hidden py-section"
    >
      <h2 id="editorial-quote-heading" className="sr-only">
        Editorial interlude
      </h2>

      <GhostMark className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        &ldquo;
      </GhostMark>

      <Container size="narrow" className="relative">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
        >
          <Quote
            quote={editorialQuote.quote}
            attribution={editorialQuote.attribution}
          />
        </motion.div>
      </Container>
    </section>
  )
}

export { EditorialQuote }
