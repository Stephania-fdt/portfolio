import { motion, useReducedMotion } from "framer-motion"
import { Mail } from "lucide-react"

import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { Button } from "@/components/ui/button"
import { fadeUp } from "@/lib/motion"
import { getContactContent } from "@/content/contact"
import { useLanguage } from "@/i18n"

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
type ContactProps = {
  homepage?: boolean
}

function Contact({ homepage = false }: ContactProps) {
  const { language, copy } = useLanguage()
  const contactContent = getContactContent(language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section
      id="contact"
      aria-label={copy.common.contact}
      spacing={homepage ? "none" : "sm"}
      className={
        homepage
          ? "scroll-mt-20 pt-10 pb-12 md:scroll-mt-24 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20"
          : undefined
      }
    >
      <SectionKicker>{copy.common.contact}</SectionKicker>

      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={fadeUp}
        className="mt-8 max-w-2xl"
      >
        <p className="text-xl leading-relaxed text-foreground md:text-2xl">
          {homepage
            ? contactContent.homepageStatement
            : contactContent.statement}
        </p>

        <div
          className={
            homepage
              ? "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              : "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          }
        >
          <Button
            asChild
            size="lg"
            className="w-full bg-[#590f29] text-white hover:bg-[#480c21] active:bg-[#3d0a1c] sm:w-auto"
          >
            <a href={contactContent.email}>
              <Mail aria-hidden="true" />
              {copy.common.emailMe}
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-[#590f29] text-[#590f29] hover:bg-[#590f29]/8 active:bg-[#590f29]/15 sm:w-auto"
          >
            <a
              href={contactContent.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
              </svg>
              {copy.common.connectLinkedIn}
            </a>
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}

export { Contact }
