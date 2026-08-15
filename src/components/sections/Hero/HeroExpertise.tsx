import { motion, useReducedMotion } from "framer-motion"
import { Accessibility, Layers, PenTool, Search } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { transition } from "@/lib/motion"
import { getHeroContent } from "@/content/hero"
import { useLanguage } from "@/i18n"
import { Container } from "@/components/ui/container"
import { SectionKicker } from "@/components/ui/section-kicker"
import { cn } from "@/lib/utils"

/**
 * Presentation only — content stays pure data in `content/hero.ts`. Reuses
 * the icon library already used sitewide (lucide-react, e.g. Hero's own
 * CTA arrow) rather than introducing a new one. Minimal line icons, one
 * per expertise item, chosen for direct semantic match rather than
 * decoration: a pen for design craft, stacked layers for a system, a
 * magnifying glass for research, the literal accessibility mark.
 */
const EXPERTISE_ICONS: Record<string, LucideIcon> = {
  "Product Design": PenTool,
  "Design Systems": Layers,
  "UX Research": Search,
  Accessibility: Accessibility,
}

/**
 * A distinct editorial bridge between the Hero and Selected Work: the Hero
 * establishes the positioning, this section names the four capabilities,
 * and the projects that follow provide the evidence.
 */
function HeroExpertise() {
  const { language } = useLanguage()
  const shouldReduceMotion = useReducedMotion()
  const { expertise } = getHeroContent(language)

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="border-y border-border bg-secondary/15 py-10 md:py-16 lg:py-20"
    >
      <Container size="content">
        <SectionKicker>{expertise.eyebrow}</SectionKicker>
        <h3
          id="expertise-heading"
          className="mt-5 max-w-2xl font-heading text-2xl font-semibold text-foreground md:text-3xl"
        >
          {expertise.heading}
        </h3>

        <motion.ul
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={transition.slow}
          data-expertise-grid
          className="mt-8 grid md:mt-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-4"
        >
          {expertise.items.map((item, index) => {
            const Icon = EXPERTISE_ICONS[item.title]

            return (
              <li
                key={item.title}
                className={cn(
                  "grid grid-cols-[auto_1fr] gap-x-3 border-b border-border py-5 last:border-b-0 md:block md:px-7 md:py-7 md:first:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:last:pr-0 md:[&:nth-child(2)]:border-b",
                  index % 2 === 0 && "md:border-r lg:border-r-0",
                  index < 2 && "md:border-b",
                )}
              >
                <div className="flex size-6 items-center justify-center md:block">
                  {Icon ? (
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-5 text-brand"
                    />
                  ) : null}
                </div>
                <p className="font-heading text-base font-semibold text-foreground md:mt-3">
                  {item.title}
                </p>
                <p className="col-start-2 mt-1 max-w-xs text-sm leading-relaxed text-muted-foreground md:col-auto md:mt-2">
                  {item.description}
                </p>
              </li>
            )
          })}
        </motion.ul>
      </Container>
    </section>
  )
}

export { HeroExpertise }
