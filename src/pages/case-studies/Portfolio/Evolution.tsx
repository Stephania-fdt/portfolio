import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { formatNumeral } from "@/lib/numerals"

function Evolution() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).evolution
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-evolution">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>
        <h3 className="mt-8 max-w-3xl text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
          {content.title}
        </h3>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {content.introduction}
        </p>

        <motion.ol
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="relative mt-16 border-l border-border pl-8 md:ml-4 md:pl-12"
        >
          {content.phases.map(({ title, description }, index) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute top-1 -left-[2.3rem] size-3 rounded-full border-2 border-brand bg-background md:-left-[3.3rem]" />
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {content.phaseLabel} {formatNumeral(index)}
              </p>
              <h3 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
                {title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export { Evolution }
