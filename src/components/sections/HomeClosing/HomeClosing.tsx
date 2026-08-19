import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Container } from "@/components/ui/container"
import { fadeUp } from "@/lib/motion"
import { getContactContent } from "@/content/contact"
import { useLanguage } from "@/i18n"

/**
 * The Homepage's third and final beat — Hero orients, Selected Work
 * proves, this closes with one quiet line, not a repeat of the Contact
 * page it points to. No card, no form, no email or LinkedIn shown here:
 * those live at `/contact` now. Deliberately smaller and quieter than
 * every section above it — a conclusion, not one more thing competing
 * for attention.
 */
function HomeClosing() {
  const { language } = useLanguage()
  const content = getContactContent(language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="closing"
      aria-label={content.closingPrompt}
      className="border-t border-border py-14 md:py-16 lg:py-20"
    >
      <Container size="content">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={fadeUp}
          className="flex flex-wrap items-baseline gap-x-3 gap-y-2"
        >
          <p className="text-xl font-medium text-foreground md:text-2xl">
            {content.closingPrompt}
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-xl font-medium text-brand md:text-2xl"
          >
            {content.closingCta}
            <ArrowRight
              aria-hidden="true"
              className="size-5 transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}

export { HomeClosing }
