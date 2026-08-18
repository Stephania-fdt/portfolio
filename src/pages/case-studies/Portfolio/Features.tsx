import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"
import { fadeUp, staggerContainer } from "@/lib/motion"

function Features() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).features
  const shouldReduceMotion = useReducedMotion()
  return (
    <Section id="portfolio-features">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>
        <h3 className="mt-8 max-w-3xl text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
          {content.title}
        </h3>
        <motion.ul
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-10 gap-y-0 border-y border-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {content.items.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex min-h-24 items-center border-b border-border py-6 text-lg font-medium text-foreground last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <span
                aria-hidden="true"
                className="mr-4 size-2 shrink-0 rounded-full bg-brand"
              />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  )
}

export { Features }
