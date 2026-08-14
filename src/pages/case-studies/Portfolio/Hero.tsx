import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { transition } from "@/lib/motion"
import heroCover from "@/assets/case-studies/portfolio/hero-preview.png"

const META = [
  { label: "Role", value: "Product Designer & Front-end Implementer" },
  { label: "Timeline", value: "2026 — Present" },
  { label: "Focus", value: "Design Systems · Accessibility · AI Workflow" },
  { label: "Stack", value: "React · TypeScript · Tailwind CSS" },
]

/**
 * Portfolio case study — Chapter 1, Hero. Same shape as SPF's Hero
 * (`pages/case-studies/SPF/Hero.tsx`): eyebrow, headline, subtitle, a
 * hairline meta bar, then one full-bleed real image breaking the reading
 * column. The image is the same file the Selected Work card already
 * uses (`assets/case-studies/portfolio/hero-preview.png`) — a real
 * screenshot of this site's own Hero, not a second visual invented for
 * this page.
 */
function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <header className="overflow-x-hidden pt-section">
      <Container size="content">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.slow}
          className="font-sans text-xs tracking-widest text-brand uppercase"
        >
          Product Design · Stéphania — Portfolio
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
          Stéphania — Portfolio
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
          Designing and building my own product experience from strategy to
          front-end.
        </motion.p>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...transition.slow,
            delay: shouldReduceMotion ? 0 : 0.3,
          }}
          className="mt-6 max-w-2xl text-base text-muted-foreground"
        >
          A self-initiated Product Design + front-end project: this site itself,
          designed, systemized and built by me — a working demonstration of
          Product Design, Design Systems, accessibility and an AI-assisted
          workflow, not a description of them.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ...transition.slow,
            delay: shouldReduceMotion ? 0 : 0.42,
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

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ...transition.slow,
          delay: shouldReduceMotion ? 0 : 0.55,
        }}
        className="mt-16 aspect-[21/9] w-full overflow-hidden border-y border-border"
      >
        <img
          src={heroCover}
          alt="This portfolio's own Hero section — the headline 'Building scalable products through Design Systems, Accessibility & AI', the primary navigation and the CTA buttons, captured from the live site."
          className="h-full w-full object-cover object-top"
          loading="eager"
        />
      </motion.div>
    </header>
  )
}

export { Hero }
