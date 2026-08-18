import { useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { getAboutContent } from "@/content/about"
import { fadeUp, transition } from "@/lib/motion"
import { useLanguage } from "@/i18n"

function About() {
  const { language, copy } = useLanguage()
  const content = getAboutContent(language)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = copy.meta.aboutTitle
  }, [copy.meta.aboutTitle])

  return (
    <article>
      <header className="pt-16 md:pt-[4.5rem] lg:pt-24">
        <Container size="content">
          <div className="flex items-center gap-6">
            <p className="font-sans text-xs tracking-widest text-brand uppercase">
              {content.eyebrow}
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
          </div>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition.slow}
            className="mt-4 max-w-6xl text-[clamp(2.625rem,7.8vw,5rem)] leading-[0.98] font-bold tracking-tightest"
          >
            {content.heading}
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-[50rem] text-[clamp(1.25rem,2.9vw,1.75rem)] leading-[1.5] text-muted-foreground"
          >
            {content.introduction}
          </motion.p>

          <motion.div
            data-about-primary-action
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-7 md:mt-9"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/experience">
                {content.primaryCta}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </header>

      <Section spacing="none" className="pb-16 md:pb-20">
        <div data-about-sections className="pt-12 md:pt-16">
          {content.sections.map((section, index) => (
            <motion.section
              key={section.id}
              aria-labelledby={`${section.id}-title`}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={fadeUp}
              className={
                index === 0
                  ? "pb-10 md:pb-12"
                  : "border-t border-border py-10 md:py-12"
              }
            >
              <h2
                id={`${section.id}-title`}
                className="max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-4xl"
              >
                {section.title}
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.section>
          ))}

          <motion.div
            data-about-actions
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="flex flex-col gap-3 border-t border-border pt-10 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link to="/#contact">{content.secondaryCta}</Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </article>
  )
}

export { About }
