import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { transition } from "@/lib/motion"
import { getWorkProjects } from "@/content/work"
import { useLanguage } from "@/i18n"

type CaseStudyNextProps = {
  /** The current project's `href` (e.g. "/work/spf-design-system") — "next" is computed from `work.ts`'s real, ordered project list, never hardcoded. */
  currentHref: string
}

/**
 * The closing beat: one deliberate full-bleed brand moment per case
 * study, pointing at whatever's actually next in the portfolio's own
 * order — never a fabricated "recommended" pick. Wraps to the first
 * project if the current one is last. Opt-in per page (SPF pilot of the
 * magazine-editorial direction) rather than wired into the generic
 * `CaseStudy` renderer, so Harmony/WellPack/JogaAura/Portfolio are
 * unaffected until each is deliberately moved to this direction too.
 */
function CaseStudyNext({ currentHref }: CaseStudyNextProps) {
  const { language, copy } = useLanguage()
  const shouldReduceMotion = useReducedMotion()
  const projects = getWorkProjects(language)
  const index = projects.findIndex((project) => project.href === currentHref)
  const next = index >= 0 ? projects[(index + 1) % projects.length] : null

  if (!next) return null

  return (
    <Section
      container={false}
      spacing="none"
      className="bg-brand py-16 md:py-24"
    >
      <Container size="content">
        <Link
          to={next.href}
          className="group block focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-foreground"
        >
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={transition.slow}
            className="font-mono text-xs tracking-widest text-brand-foreground/70 uppercase"
          >
            {copy.common.nextProject}
          </motion.p>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              ...transition.slow,
              delay: shouldReduceMotion ? 0 : 0.08,
            }}
            className="mt-4 flex flex-wrap items-center gap-4 text-4xl font-bold tracking-tight text-brand-foreground md:text-6xl"
          >
            {next.title}
            <ArrowRight
              aria-hidden="true"
              className="size-8 shrink-0 transition-transform duration-(--duration-standard) ease-standard group-hover:translate-x-2 md:size-10"
            />
          </motion.p>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              ...transition.slow,
              delay: shouldReduceMotion ? 0 : 0.16,
            }}
            className="mt-4 max-w-2xl text-lg text-brand-foreground/80"
          >
            {next.sentence}
          </motion.p>
        </Link>
      </Container>
    </Section>
  )
}

export { CaseStudyNext }
