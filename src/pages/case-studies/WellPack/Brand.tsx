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
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

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
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).brand
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-brand">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>{content.paragraphs[0]}</p>
        </SubsectionText>

        <AssetFrame
          src={laMarque}
          alt={content.alts[0]}
          className="mt-10 max-w-2xl"
        />
        <p className="mt-3 max-w-2xl font-mono text-2xs tracking-widest text-muted-foreground uppercase">
          {content.captions[0]}
        </p>

        <SubsectionText className="mt-16 max-w-2xl text-lg">
          <p>{content.paragraphs[1]}</p>
        </SubsectionText>

        <AssetFrame
          src={logoSheet}
          alt={content.alts[1]}
          className="mt-10 max-w-2xl"
        />
        <p className="mt-3 max-w-2xl font-mono text-2xs tracking-widest text-muted-foreground uppercase">
          {content.captions[1]}
        </p>

        <SubsectionText className="mt-16 max-w-2xl text-lg">
          <p>{content.paragraphs[2]}</p>
        </SubsectionText>

        <CroppedCapture
          src={website}
          alt={content.alts[2]}
          caption={content.captions[2]}
          className="mt-10 max-w-md"
          aspectClassName="aspect-[2/5]"
          zoomClassName="scale-100"
          positionClassName="object-[2%_0%]"
        />

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          {content.quote}
        </motion.p>
      </Container>
    </Section>
  )
}

export { Brand }
