import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { transition } from "@/lib/motion"
import { cn } from "@/lib/utils"

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
  action?: {
    href: string
    label: string
  }
  image?: {
    src: string
    alt: string
    contain?: boolean
    width?: number
    height?: number
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
  action,
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

        {action ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition.slow,
              delay: shouldReduceMotion ? 0 : detail ? 0.48 : 0.42,
            }}
            className="mt-6"
          >
            <Button
              asChild
              size="lg"
              className="min-h-11 w-full rounded-md bg-[#094C33] px-6 text-[#EDE6CF] transition-all hover:-translate-y-0.5 hover:bg-[#0b6041] hover:text-[#EDE6CF] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#094C33] sm:w-auto"
            >
              <a href={action.href} target="_blank" rel="noopener noreferrer">
                {action.label}
                <ExternalLink aria-hidden="true" />
              </a>
            </Button>
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
          className={cn(
            "mt-16 w-full overflow-hidden border-y border-border",
            image.contain
              ? "aspect-[2560/1364] bg-secondary/30"
              : "aspect-[21/9]",
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={cn(
              "h-full w-full object-top",
              image.contain ? "object-contain" : "object-cover",
            )}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
      ) : null}
    </header>
  )
}

export { CaseStudyHero }
export type { CaseStudyHeroMeta }
