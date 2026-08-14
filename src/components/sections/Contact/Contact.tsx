import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { Button } from "@/components/ui/button"
import { fadeUp } from "@/lib/motion"
import { contactContent } from "@/content/contact"

/**
 * The Epilogue — the site's closing chapter and the real target for the
 * nav's "Contact" link and both "Let's talk" CTAs. Same chapter ritual as
 * every other section (`SectionKicker`), same intro-paragraph rhythm as
 * Work's opening line (`text-xl md:text-2xl`) — no new visual language, no
 * card, no form. One real CTA — her verified LinkedIn profile, opened in a
 * new tab (`target="_blank" rel="noopener noreferrer"`) so leaving the
 * portfolio to connect isn't a dead end — styled exactly like Hero's own
 * primary button.
 */
function Contact() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="contact" aria-label="Contact" spacing="sm">
      <SectionKicker>Contact</SectionKicker>

      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={fadeUp}
        className="mt-8 max-w-2xl"
      >
        <p className="text-xl leading-relaxed text-foreground md:text-2xl">
          {contactContent.statement}
        </p>

        <div className="mt-10">
          <Button asChild size="lg">
            <a
              href={contactContent.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
              <ArrowRight
                aria-hidden="true"
                className="transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
              />
            </a>
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}

export { Contact }
