import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { transition } from "@/lib/motion"
import heroCover from "@/assets/case-studies/spf/product/Desktop - 54.png"

const META = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "2023 — Present" },
  { label: "Team", value: "4–10+ developers" },
  { label: "Tools", value: "Figma · Angular Material · Zeroheight" },
]

/**
 * Sprint 18.2 — the case study's opening chapter. One deliberately
 * chosen real screen (the citizen-portal authentication view, the
 * strongest single frame among the real exports), full-bleed rather than
 * boxed like the supporting "plate" imagery elsewhere — this is the one
 * place on the page allowed to break the reading column's width, because
 * it's the one moment asked to feel monumental rather than evidentiary.
 */
function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <header className="pt-section">
      <Container size="content">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.slow}
          className="font-sans text-xs tracking-widest text-brand uppercase"
        >
          Design System · Federal Public Service Foreign Affairs
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
          Building a Scalable Government Design System
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
          Designing a modular, accessible and scalable design system for
          Belgium&rsquo;s Federal Public Service Foreign Affairs.
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

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...transition.slow, delay: shouldReduceMotion ? 0 : 0.5 }}
        className="mt-16 aspect-[21/9] w-full overflow-hidden border-y border-border"
      >
        <img
          src={heroCover}
          alt="The SPF citizen portal's authentication screen — the government's architecture as backdrop, the sign-in flow as the one deliberate object in frame."
          className="h-full w-full object-cover object-top"
          loading="eager"
        />
      </motion.div>
    </header>
  )
}

export { Hero }
