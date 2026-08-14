import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { transition } from "@/lib/motion"

type CaseStudyHeroMeta = {
  label: string
  value: string
}

type CaseStudyHeroProps = {
  eyebrow: string
  title: string
  summary: string
  detail?: string
  meta: CaseStudyHeroMeta[]
  image?: {
    src: string
    alt: string
  }
}

/**
 * The established SPF/Portfolio opening sequence: project context, a large
 * title, one-line thesis, technical metadata and one real 21:9 cover. It is
 * intentionally spare so every case study can carry its own imagery without
 * becoming a project-specific page system.
 */
function CaseStudyHero({
  eyebrow,
  title,
  summary,
  detail,
  meta,
  image,
}: CaseStudyHeroProps) {
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
          {eyebrow}
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
          {title}
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
          {summary}
        </motion.p>

        {detail ? (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition.slow,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
            className="mt-6 max-w-2xl text-base text-muted-foreground"
          >
            {detail}
          </motion.p>
        ) : null}

        {meta.length > 0 ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ...transition.slow,
              delay: shouldReduceMotion ? 0 : detail ? 0.42 : 0.36,
            }}
            className="mt-10 flex flex-wrap gap-x-10 gap-y-2 border-t border-border pt-6 font-mono text-2xs tracking-widest text-muted-foreground uppercase"
          >
            {meta.map((item) => (
              <span key={item.label}>
                {item.label} —{" "}
                <span className="text-foreground">{item.value}</span>
              </span>
            ))}
          </motion.div>
        ) : null}
      </Container>

      {image ? (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ...transition.slow,
            delay: shouldReduceMotion ? 0 : detail ? 0.55 : 0.5,
          }}
          className="mt-16 aspect-[21/9] w-full overflow-hidden border-y border-border"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover object-top"
            loading="eager"
          />
        </motion.div>
      ) : null}
    </header>
  )
}

export { CaseStudyHero }
export type { CaseStudyHeroMeta }
