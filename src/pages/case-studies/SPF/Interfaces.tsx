import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  CroppedCapture,
  SubsectionText,
} from "@/components/ui/case-study-capture"
import authDesktop from "@/assets/case-studies/spf/product/Desktop - 45.png"
import authMobile from "@/assets/case-studies/spf/product/iPhone 17 - 2 (1).png"
import portal from "@/assets/case-studies/spf/product/Wireframes.png"
import faq from "@/assets/case-studies/spf/product/Wireframes (2).png"
import { spfInterfacesContent } from "@/content/case-studies/spf-interfaces"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Sprint 18.6 — Product Interfaces.
 *
 * `Wireframes.png` is misnamed: despite the filename, it isn't a
 * low-fidelity wireframe. It's a full, polished, high-fidelity homepage
 * screen — crest, service cards, FAQ accordion, article carousel, real
 * footer. The copy below never calls this "wireframes"; it describes
 * what's actually in the file, not what the export happened to be named.
 * `Wireframes (2).png` is a dedicated FAQ page — real crest, real
 * photograph, real category headers (Access; Legalisations & Apostilles;
 * La Banque de données des Actes de l'État Civil).
 *
 * Release-candidate pass (RC1): three subsections were removed here, not
 * cropped or reworked, because the source images themselves failed —
 * cropping can't fix content, only framing:
 *
 * - "First Login, Considered on Purpose" (`Desktop - Desktop -scenario
 *   1.png`) carried a legible rotated "DAMAGED" stock-photo watermark
 *   across the background architecture photo, and its UI copy read
 *   "Welcome to Be Abroad platform" — a different product's branding,
 *   not SPF's. No clean alternate export of this screen exists.
 * - "Content, not just transactions" (`Blog.png`, `Blog-2.png`) was
 *   built on unedited template screenshots — every headline, author name
 *   ("John Doe"), category, and article body was literal placeholder
 *   copy ("Lorem ipsum dolor sit amet…", "Forem ipsum…"), not SPF
 *   content. The subsection's own thesis — "the platform publishes" —
 *   was evidence the images didn't actually support.
 * - "Beyond the Portal" (`Elegalisation-wireme1.png`, `Mobile hero
 *   2.png`) was real SPF branding and real supporting copy around one
 *   exception: the hero subheadline on both the desktop and mobile
 *   capture is unedited Lorem ipsum, sitting inside the crop where the
 *   real crest and CTA buttons also live — there's no way to frame
 *   around it without also cutting the real content it's sandwiched
 *   between. No alternate eLegalisation homepage export exists either.
 *
 * What's left — Auth at both widths, the assembled Portal, and the FAQ
 * page — is exactly what survived direct inspection: real SPF captures
 * with no fabricated or misattributed content standing in as evidence.
 */
function Interfaces() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfInterfacesContent, language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-interfaces">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        {/* Authentication, at both widths */}
        <div className="mt-24 grid gap-10 md:grid-cols-[3fr_2fr] md:gap-16">
          <CroppedCapture
            src={authDesktop}
            alt={content.authentication.alts[0]}
            caption={content.authentication.captions[0]}
            aspectClassName="aspect-[4/3]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
          <CroppedCapture
            src={authMobile}
            alt={content.authentication.alts[1]}
            caption={content.authentication.captions[1]}
            aspectClassName="aspect-[3/4]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
        </div>
        <SubsectionText className="mt-8">
          <p>{content.authentication.paragraph}</p>
        </SubsectionText>

        {/* The portal, assembled */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.portal.label}
          </p>
          <SubsectionText className="mt-4">
            <p>{content.portal.paragraph}</p>
          </SubsectionText>
          <CroppedCapture
            src={portal}
            alt={content.portal.alt}
            caption={content.portal.caption}
            className="mt-10"
            aspectClassName="aspect-[16/9]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
        </div>

        {/* Support, given its own page */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.support.label}
            </p>
            <SubsectionText className="mt-4">
              {content.support.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SubsectionText>
          </div>
          <CroppedCapture
            src={faq}
            alt={content.support.alt}
            caption={content.support.caption}
            aspectClassName="aspect-[4/5]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
        </div>

        {/* Closing synthesis */}
        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-24 max-w-2xl"
        >
          <p className="text-xl leading-snug font-medium text-foreground md:text-2xl">
            {content.conclusion}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Interfaces }
