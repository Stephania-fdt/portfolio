import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { transition } from "@/lib/motion"

const META = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "2021 – 2023" },
  {
    label: "Stakeholders",
    value: "CEO · Co-founder · Marketing · Sales · Key Accounts",
  },
  { label: "Focus", value: "UX Research · Personas · Market Analysis" },
]

/**
 * WellPack Sprint 1 (implementation pass 2) — Hero, rebuilt from the
 * approved editorial manuscript rather than the earlier draft. Two
 * changes from the previous version:
 *
 * - Headline swapped for the manuscript's own recommended line
 *   ("I designed the system that made sure nobody had to guess" — Q6 of
 *   the manuscript self-review), adapted to the gerund-noun-phrase
 *   register every other Hero on this site uses ("Building a Scalable
 *   Government Design System"), not rewritten in meaning.
 * - The "awaiting hero visual" placeholder card is gone. Per direction:
 *   no real WellPack visual exists, and the fix isn't a labeled empty
 *   box, it's not needing one — the headline at this size, plus the
 *   meta bar's hairline rule, is the visual moment. Nothing invented to
 *   fill space that doesn't need filling.
 *
 * Subtitle is the manuscript Hero paragraph's first sentence verbatim;
 * the second sentence became the headline. Meta bar unchanged from the
 * previous pass — Role/Timeline/Focus match `content/work.ts`'s existing
 * WellPack entry, Stakeholders is a direct trim of "collaborating
 * directly with the CEO, the Co-founder, the Marketing Manager, our
 * Sales team, and Key Account Managers" in `content/case-studies/wellpack.ts`.
 */
function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <header className="pt-section pb-24">
      <Container size="content">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.slow}
          className="font-sans text-xs tracking-widest text-brand uppercase"
        >
          Marketing Design · WellPack
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...transition.slow,
            delay: shouldReduceMotion ? 0 : 0.12,
          }}
          className="mt-4 max-w-4xl text-5xl leading-[0.95] font-bold tracking-tightest md:text-7xl"
        >
          Designing the System That Made Sure Nobody Had to Guess
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...transition.slow,
            delay: shouldReduceMotion ? 0 : 0.24,
          }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          For two years, every landing page my team at WellPack shipped had
          already survived contact with evidence about the client&rsquo;s actual
          market — not my best guess, and not the brief I&rsquo;d been handed.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ...transition.slow,
            delay: shouldReduceMotion ? 0 : 0.36,
          }}
          className="mt-10 flex flex-wrap gap-x-10 gap-y-2 border-t border-border pt-6 font-mono text-2xs tracking-widest text-muted-foreground uppercase"
        >
          {META.map((item) => (
            <span key={item.label}>
              {item.label} —{" "}
              <span className="text-foreground">{item.value}</span>
            </span>
          ))}
        </motion.div>
      </Container>
    </header>
  )
}

export { Hero }
