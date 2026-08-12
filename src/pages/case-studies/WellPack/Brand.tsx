import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  SubsectionText,
  AssetFrame,
  CroppedCapture,
} from "@/components/ui/case-study-capture"
import laMarque from "@/assets/case-studies/wellpack/01-strategy/Strategy_la marque.png"
import logoSheet from "@/assets/case-studies/wellpack/02-brand/logo/logo_fond.png"
import website from "@/assets/case-studies/wellpack/02-brand/supports/Declinaisaon_siteweb.png"

/**
 * WellPack — new Chapter, The Brand Itself. Added after a second, larger
 * asset batch landed (Strategy audit slides + a complete brand-identity
 * guideline + a real, responsive WellPack website) revealing a second,
 * real body of work the original six-chapter manuscript didn't cover:
 * WellPack's own brand identity, not a client's.
 *
 * Explicitly authorized by the person this case study is about, in this
 * conversation, as her real work she wants represented — the standing
 * "don't add what the source material doesn't establish" rule is
 * satisfied here because she IS the source, confirming a new fact
 * directly, the same authority `wellpack.ts` itself carries.
 *
 * Deliberately doesn't reuse the portrait chinois asset already shown in
 * Method.tsx (per instruction, that stays there as proof of the
 * technique) — this chapter's own diagnostic evidence is
 * `Strategy_la marque.png`, the resulting 3-word positioning
 * (confirmed by direct inspection: Premium / Épurée / Expert), reached
 * after an internal audit (`Strategy_ameliorations.png` /
 * `Strategy_conclusions.png` — paraphrased in prose below, not shown as
 * images, to keep this chapter to three real visuals: diagnosis, system,
 * application — not a gallery).
 *
 * `Strategy_toKAM.png` (internal Key Account Manager perception) is real
 * but redundant with `ameliorations`/`conclusions`' findings and isn't
 * shown or cited separately. The sales plaquette showing a named real
 * client (Nocibé) and real SMS performance percentages is real and
 * strong, but deliberately not used here — it names a third party and
 * measures a different thing entirely (WellPack's own service
 * performance, not this designer's impact), and using it well needs
 * explicit sign-off, not a default inclusion. Flagged in the sprint
 * report instead.
 *
 * `Declinaisaon_siteweb.png` is a raw deck slide showing three separate
 * page captures plus the deck's own "DÉCLINAISONS SUPPORTS — SITE WEB"
 * title chrome bottom-right. Rather than show that chrome via
 * `AssetFrame`, this crops (via `CroppedCapture`) to the single cleanest,
 * most complete capture in the slide — the full page, header to footer,
 * no gaps — and drops the other two partial/cropped-off captures and the
 * label entirely, per "remove unnecessary chrome, fix in code rather
 * than touching the source asset."
 */
function Brand() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-brand">
      <Container size="content">
        <SectionKicker>The Brand Itself</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          The research methodology wasn&rsquo;t the only system this role asked
          me to build. WellPack&rsquo;s own brand needed the same evidence-first
          treatment its clients&rsquo; briefs did.
        </motion.p>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            Before any of it got redesigned, it had to be diagnosed honestly. An
            internal audit named the problem plainly: positioning that
            didn&rsquo;t match the industry, an image read as dated rather than
            expert, a brand that hadn&rsquo;t decided what it wanted to be
            mistaken for. The answer wasn&rsquo;t a mood board. It was three
            words &mdash; premium, épurée, expert &mdash; and everything that
            followed had to answer to them.
          </p>
        </SubsectionText>

        <AssetFrame
          src={laMarque}
          alt="A real brand-positioning slide — 'Image de marque à définir en 3 mots clés' — landing on three keywords: Premium, Épurée, Expert."
          className="mt-10 max-w-2xl"
        />
        <p className="mt-3 max-w-2xl font-mono text-2xs tracking-widest text-muted-foreground uppercase">
          Three words, not a mood board — the brief the identity had to answer
          to.
        </p>

        <SubsectionText className="mt-16 max-w-2xl text-lg">
          <p>
            That positioning became a full identity: a logo with defined light
            and dark variants and explicit rules for what not to do with it, a
            palette anchored on a single orange rather than a gradient of good
            intentions, and a graphic language &mdash; a repeated chevron
            &mdash; pulled directly from the K in the wordmark instead of
            invented separately from it.
          </p>
        </SubsectionText>

        <AssetFrame
          src={logoSheet}
          alt="The WellPack logo system — three light-background variants and two dark-background variants of the wordmark, each keeping the same orange speech-bubble W."
          className="mt-10 max-w-2xl"
        />
        <p className="mt-3 max-w-2xl font-mono text-2xs tracking-widest text-muted-foreground uppercase">
          Light and dark variants, not one logo asked to work everywhere.
        </p>

        <SubsectionText className="mt-16 max-w-2xl text-lg">
          <p>
            None of it stayed in a guideline document. The same system carried
            through to WellPack&rsquo;s own website &mdash; the identity doing
            real work on a real, working page rather than sitting in a specimen
            sheet nobody consumed.
          </p>
        </SubsectionText>

        <CroppedCapture
          src={website}
          alt="The WellPack homepage built on the new identity — crest-style orange wordmark in the header, the same orange accent on buttons and highlights, service cards, platform preview, testimonials and a dark footer, all in one continuous page."
          caption="The identity, doing real work on a real page — not a guideline PDF nobody opened again."
          className="mt-10 max-w-md"
          aspectClassName="aspect-[2/5]"
          zoomClassName="scale-100"
          positionClassName="object-[2%_0%]"
        />

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          The client was WellPack itself this time. The discipline &mdash;
          diagnose before you design &mdash; didn&rsquo;t change because of
          that.
        </motion.p>
      </Container>
    </Section>
  )
}

export { Brand }
