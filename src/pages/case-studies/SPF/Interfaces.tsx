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
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-interfaces">
      <Container size="content">
        <SectionKicker>Product Interfaces</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          Every chapter until now proved a piece. This one proves the assembly —
          a citizen actually completing a real task, not a component sitting in
          a library waiting to be used.
        </motion.p>

        {/* Authentication, at both widths */}
        <div className="mt-24 grid gap-10 md:grid-cols-[3fr_2fr] md:gap-16">
          <CroppedCapture
            src={authDesktop}
            alt="The SPF authentication screen at desktop width — 'Please Authenticate,' with a digital-key option for Belgian citizens and a standard account option for non-Belgians, over a photograph of the ministry's own architecture."
            caption="The same choice, the same photograph, at desktop width."
            aspectClassName="aspect-[4/3]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
          <CroppedCapture
            src={authMobile}
            alt="The same SPF authentication screen at mobile width, on an iPhone — identical crest, photograph and two-button choice, scaled to a single hand."
            caption="...and at mobile width. Not a smaller version — the same one."
            aspectClassName="aspect-[3/4]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
        </div>
        <SubsectionText className="mt-8">
          <p>
            The choice a citizen makes first — a Belgian digital key, or a
            standard account for anyone else — renders identically in intent at
            both ends of the scale: the same crest, the same warm architectural
            photograph, the same two buttons, whether it's a desktop monitor or
            a phone held in one hand.
          </p>
        </SubsectionText>

        {/* The portal, assembled */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            The Portal, Assembled
          </p>
          <SubsectionText className="mt-4">
            <p>
              Once inside, the same header and footer that were built as
              isolated components two chapters ago now carry an actual homepage
              — service cards, an FAQ accordion, a rotating set of articles —
              proving the system wasn't designed to look good in a component
              sheet. It was designed to hold a real page together.
            </p>
          </SubsectionText>
          <CroppedCapture
            src={portal}
            alt="The SPF citizen portal homepage — header with crest, a grid of service cards, an FAQ accordion, an article carousel, and the government footer, all built from the same components documented earlier in the case study."
            caption="The portal homepage — every piece of it already introduced, none of it new."
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
              Support, Not Buried in an Accordion
            </p>
            <SubsectionText className="mt-4">
              <p>
                The homepage&rsquo;s FAQ accordion is one entry point. A citizen
                who navigates there directly gets a dedicated page instead of a
                scroll-and-hope — real categories (Access; Legalisations &amp;
                Apostilles; La Banque de données des Actes de l&rsquo;État
                Civil), each with its own heading and illustration, not one flat
                list of questions standing in for all of them.
              </p>
              <p>
                Its header carries the same crest and photography treatment as
                everywhere else in the system — a citizen looking for help lands
                somewhere that still visibly belongs to the same platform, not a
                support page that forgot which system it was part of.
              </p>
            </SubsectionText>
          </div>
          <CroppedCapture
            src={faq}
            alt="The SPF FAQ page, organized into real categories — Access, Legalisations & Apostilles, and La Banque de données des Actes de l'État Civil — each with its own heading and line illustration, under a header carrying the same crest as the rest of the platform."
            caption="A dedicated FAQ page, not just the homepage's accordion."
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
            The crest on the header, the warm photography, the same button
            component authenticating a citizen and then carrying them into a
            real page with a real question to answer — carried, unbroken, from
            the first screen to the last. That continuity is the actual argument
            for building a system instead of a set of pages: everything
            downstream inherits it for free.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Interfaces }
