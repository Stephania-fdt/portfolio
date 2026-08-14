import { useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { EditorialList } from "@/components/ui/editorial-list"
import { fadeUp } from "@/lib/motion"
import { transition } from "@/lib/motion"
import { aboutContent } from "@/content/about"

/**
 * `/about` — a real, standalone page (not a hash anchor), reachable from
 * the header's "About" link and the mobile INDEX. Composed entirely from
 * existing primitives: the same `<header className="pt-section">` +
 * `<h1>` reveal every case-study page already uses for its own page title
 * (Portfolio/SPF `Hero.tsx`), and `EditorialList` — the exact same
 * numeral + eyebrow + title + body rhythm Design Principles and The
 * Process already use on the home page — for the five chapters. No new
 * visual language, no new component.
 */
function About() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = "About — Stéphania Fordant | Product Designer"
  }, [])

  const items = aboutContent.chapters.map((chapter) => ({
    eyebrow: chapter.eyebrow,
    title: chapter.title,
    sentence: chapter.paragraphs,
  }))

  return (
    <article>
      <header className="pt-section">
        <Container size="content">
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition.slow}
            className="max-w-4xl text-5xl leading-[0.95] font-bold tracking-tightest md:text-7xl"
          >
            {aboutContent.heading}
          </motion.h1>
        </Container>
      </header>

      <Section spacing="md">
        {/* No visible kicker here — the page's own `<h1>` already
            establishes identity, and a second "About" label right under
            it would be redundant chrome. Same exception EditorialQuote
            already uses for the identical reason: an sr-only heading
            keeps the H1 → H2 → H3 hierarchy correct for screen readers
            without adding a visible element sighted users don't need. */}
        <h2 className="sr-only">Chapters</h2>
        <EditorialList items={items} />

        {/* The closing statement — same left-aligned italic pull-quote
            convention the Portfolio case study already uses to close its
            own chapters (Challenge, AI-Assisted Workflow), not the
            centered `Quote` component, which stays reserved for the
            homepage's Editorial Quote interlude. */}
        <motion.p
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={fadeUp}
          className="mt-14 max-w-2xl border-t border-border pt-14 text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          {aboutContent.conclusion.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.p>
      </Section>
    </article>
  )
}

export { About }
