import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

/**
 * RC1. Replaces the Sprint 18.1 "awaiting assets" placeholder with real
 * narrative — no image folder for this section, matching Overview,
 * Challenge and Reflection: `ux/` has no real exports (confirmed against
 * the filesystem, README only).
 *
 * Kept the "Research & UX" kicker rather than renaming it, but the copy
 * is deliberately careful about what kind of exploration this actually
 * was: stakeholder workshops and a technical build-vs-adopt decision,
 * not generative user research. No persona, interview or usability-test
 * claim appears here, because none happened — this is the same "don't
 * claim what didn't happen" discipline Accessibility already applies to
 * keyboard navigation.
 *
 * Every claim is a faithful condensation of "Why a Design System became
 * necessary," "My reasoning and the key decisions I made," and
 * "Technical constraints and trade-offs" in
 * `content/case-studies/spf.ts` — all three previously unused anywhere
 * on the page beyond a single compressed clause in Overview.
 */
function Research() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-research">
      <Container size="content">
        <SectionKicker>Research &amp; UX</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          A design system nobody asked for still has to earn its right to exist
          — once to the people who&rsquo;d use it, and once to what could
          actually ship.
        </motion.p>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Making the Case, Before Making Anything
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              I proposed the design system myself, early on — it wasn&rsquo;t in
              the original brief. Before I could design anything, I had to
              explain what a design system actually was: I ran workshops for the
              Business teams and the developers, making the case directly — time
              saved, consistency gained, and a real plan for how we&rsquo;d get
              there, not just why we should.
            </p>
          </SubsectionText>
        </div>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Fully Custom Didn&rsquo;t Survive Contact With Reality
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              The first plan was a fully custom design system, built entirely on
              our own terms. Time constraints and extended conversations with
              the developers made that impractical. So the direction changed:
              foundational components would come from Angular Material, and I
              would build custom components from scratch wherever SPF&rsquo;s
              identity actually needed to show — the header, the sidebar
              navigation, the footer. I wasn&rsquo;t the application architect;
              there already were architects for that. What I owned was the
              visual hierarchy of the information itself.
            </p>
            <p>
              That wasn&rsquo;t a retreat from ambition — it was a redirection
              of it. Giving up &ldquo;fully custom everywhere&rdquo; in exchange
              for &ldquo;custom exactly where it mattered&rdquo; meant the
              system could actually ship, and still carry SPF&rsquo;s identity
              where a visitor would notice it most.
            </p>
          </SubsectionText>
        </div>

        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-24 max-w-2xl"
        >
          <p className="text-xl leading-snug font-medium text-foreground md:text-2xl">
            What that decision produced is the rest of this case study — a
            shared foundation everywhere, and SPF&rsquo;s own identity exactly
            where it needed to show.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Research }
