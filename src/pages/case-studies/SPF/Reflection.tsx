import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

/**
 * RC1. Replaces the "copy pending Sprint 18" placeholder with the real
 * closing material. Closes in words only, no image folder for this
 * section — matching Overview, Challenge, Research, and how every other
 * case study on the site already ends without imagery.
 *
 * Every line is a faithful condensation of "Why this project changed me
 * as a Product Designer" and "What I took with me" in
 * `content/case-studies/spf.ts`, both previously unused anywhere on the
 * page. The closing line matches this chapter file's own established
 * convention (Foundations/Components/Accessibility/Interfaces all end on
 * an enlarged, non-italic `motion.div` statement) rather than the
 * separate generic `CaseStudy.tsx` template's italic treatment, since
 * this hand-authored chapter set has its own consistent closing pattern
 * already.
 */
function Reflection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-reflection">
      <Container size="content">
        <SectionKicker>Reflection</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          This project didn&rsquo;t teach me a technical skill. It taught me
          that a design system is something you earn the right to build with a
          team, not something you hand them and walk away from.
        </motion.p>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Choosing Not to Defend From a Distance
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              One developer told me directly: &ldquo;We build functional
              applications. That&rsquo;s what really matters.&rdquo; I
              didn&rsquo;t try to argue my way past it. I went to understand the
              world it came from — I attended the Piscine at École 42 in
              Brussels, not to become a developer, but to become a better
              Product Designer for the ones I was working with.
            </p>
            <p>
              It wasn&rsquo;t about acquiring a technical skill. It was about
              refusing to stay on my side of a divide I could have just as
              easily defended from a distance. Slowly, the developers
              who&rsquo;d been wary of me started coming to me with questions
              instead — asking what I thought before they built something, not
              after. That was when I understood trust had actually been built,
              not assumed.
            </p>
          </SubsectionText>
        </div>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            What I Took With Me
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              I didn&rsquo;t arrive and save anything. I arrived, was told what
              really mattered was function, and I spent the time it took to
              understand why someone would believe that before I asked them to
              believe something else.
            </p>
          </SubsectionText>
        </div>

        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-24 max-w-2xl"
        >
          <p className="text-xl leading-snug font-medium text-foreground md:text-2xl">
            I believe great products are built when people understand each other
            before they build together.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Reflection }
