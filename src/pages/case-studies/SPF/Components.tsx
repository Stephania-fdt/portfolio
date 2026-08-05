import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  CroppedCapture,
  AssetFrame,
  SubsectionText,
} from "@/components/ui/case-study-capture"
import pickers from "@/assets/case-studies/spf/components/ANGULAR/mat-picker.png"
import header from "@/assets/case-studies/spf/components/CUSTOM/HEADER.png"
import sidebar from "@/assets/case-studies/spf/components/CUSTOM/Sidebar menu.png"
import footer from "@/assets/case-studies/spf/components/CUSTOM/Footers.png"
import notification from "@/assets/case-studies/spf/components/CUSTOM/Alert.png"
import radio from "@/assets/case-studies/spf/components/CUSTOM/RADIO.png"
import language from "@/assets/case-studies/spf/components/CUSTOM/LANGUAGE.png"
import inputs from "@/assets/case-studies/spf/components/CUSTOM/inputs.png"
import stepperZoom from "@/assets/case-studies/spf/components/CUSTOM/STEPPER-ZOOM.png"

/**
 * Sprint 18.5 — the centerpiece chapter. Seven captures out of the ~20
 * real files available, chosen because each proves something the others
 * don't (breadth, structure, the atomic layer, responsiveness, states) —
 * the remaining files (cards, sliders, tooltips, breadcrumb, progress
 * bar, the plain stepper overview, foundations/buttons.png) are real but
 * redundant with what's already proven here, so they're left out on
 * purpose rather than added for completeness.
 *
 * The through-line the copy leans on, confirmed by direct inspection
 * rather than assumed: her Figma workspace is genuinely split into two
 * files — "SPF _ Angular Material" and "SPF _ Design full-custom" — and
 * the notification/stepper components literally reuse the same
 * info/success/warning/error roles the Tokens chapter already
 * documented. That repetition across chapters is the actual evidence for
 * "coherent ecosystem," not a claim asserted on top of the images.
 *
 * Final QA pass, later sprint — three raw captures replaced by clean
 * exports of the identical frame (confirmed by direct comparison, not
 * assumed from filenames), moving each from `CroppedCapture`'s
 * chrome-hiding crop to `AssetFrame`'s shown-whole treatment now that
 * there's no chrome left to hide:
 *
 * - `PICKERS.png` → `mat-picker.png` (same three pickers).
 * - `NOTIFICATION.png` → `Alert.png` (same info/success/warning/error
 *   alert, now legible at full resolution).
 * - `FOOTER.png` → `Footers.png` (same three color registers, at a
 *   resolution the original 10%-zoom Figma capture couldn't offer).
 *
 * One real gap closed: the copy above has always said "Header, Sidebar,
 * Footer, each its own folder," but no sidebar image ever backed that
 * claim. `Sidebar menu.png` finally does — added below, cropped to its
 * first expanded row (light and dark side by side); the many repeated
 * hover-state permutations filling the rest of that sheet, and the
 * separate collapsed-rail variant in `Sidebar menu collaps.png`, are real
 * but redundant with the single point this chapter needs to make: the
 * sidebar exists, built for both modes, same as everything else here.
 *
 * Two new files considered and excluded, same sprint:
 * - `mat-card.png` — a clean export of the same generic Material card
 *   (placeholder "Card title" / Latin-word-generator body text) the
 *   original Sprint 18.5 comment already ruled out as unbranded and
 *   redundant. A cleaner crop of non-evidence is still non-evidence.
 * - `Grid • Team site.png` and `Layouts.png` — real, detailed exports,
 *   but of a Microsoft SharePoint "Communication site" / "Team site" web
 *   part grid (the labels — "web part content area," "web part property
 *   pane" — are SharePoint's own vocabulary, not Angular Material's, and
 *   don't match any crest, teal/burgundy accent, or other visual
 *   language documented anywhere else in this project). Using it as SPF
 *   evidence would repeat the exact mistake the Product Interfaces
 *   chapter already caught and excluded once with
 *   `Elegalisation-PROTOTYPE.png` — misattributing a different, unrelated
 *   file as this system's own output. Left out here for the same reason;
 *   flagged separately for Stéphania to confirm whether it belongs to
 *   this case study at all.
 */
function Components() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-components">
      <Container size="content">
        <SectionKicker>Component Library</SectionKicker>

        {/* Why a library, not a set of screens */}
        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          Foundations gave the system its language. Tokens gave that language
          names. Components are where both had to survive being used — split
          across two separate Figma files, not one:{" "}
          <span className="font-mono text-base">SPF _ Angular Material</span>{" "}
          for everything built on Angular's own foundation, and{" "}
          <span className="font-mono text-base">SPF _ Design full-custom</span>{" "}
          for everything built from nothing. Neither file was allowed to feel
          like the other's afterthought.
        </motion.p>

        {/* Angular Material foundation */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            The Angular Material Foundation
          </p>
          <SubsectionText className="mt-4">
            <p>
              The Angular file's own sidebar reads less like a component list
              and more like an inventory: alerts, badges, avatars, banners,
              bottom navigation, bottom sheets, breadcrumbs, buttons, cards,
              carousels, chips, dialogs, dividers, expansion panels, footers,
              grid system, icons, lists, menus, navigation drawers, paginations,
              pickers, progress, ratings — each one checked off, not sketched
              once and left half-finished.
            </p>
            <p>
              Pickers alone show the discipline: a date calendar, a month
              selector and a time clock, restyled to the same dark-header
              language rather than left in Material's own defaults. Nothing here
              was skinned once and called done.
            </p>
          </SubsectionText>
          <CroppedCapture
            src={pickers}
            alt="Three Angular Material picker components restyled for SPF — a date calendar, a month selector and a time clock, all sharing the same dark header and rounded-corner language."
            caption="Date, month and time — three pickers, one visual language, not three."
            className="mt-10"
            aspectClassName="aspect-[18/7]"
            zoomClassName="scale-[1.05]"
            positionClassName="object-[50%_50%]"
          />
        </div>

        {/* Custom structural components */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={header}
            alt="The custom SPF header component carrying the Kingdom of Belgium's crest, shown at Desktop-1440 and Tablet-1024 breakpoints, in both light and dark variants."
            caption="The header — built from nothing, at Desktop and Tablet widths."
            aspectClassName="aspect-[4/5]"
            zoomClassName="scale-[1.9]"
            positionClassName="object-[30%_25%]"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              What Angular Couldn&rsquo;t Give It
            </p>
            <SubsectionText className="mt-4">
              <p>
                Angular Material could give the system its buttons and its
                pickers. It couldn&rsquo;t give it a header carrying the Kingdom
                of Belgium&rsquo;s own crest, or a footer that had to read as
                government-issued at a glance — those were built from nothing,
                under their own section of the file: Header, Sidebar, Footer,
                each its own folder, not a variant of something borrowed.
              </p>
              <p>
                The footer alone ships in three color registers — a dark
                primary, a warm secondary, a light tertiary — because a single
                application's footer and a shared platform's footer don't carry
                the same weight, and the system had to hold both without forking
                into two components.
              </p>
            </SubsectionText>
          </div>
        </div>

        <CroppedCapture
          src={sidebar}
          alt="The custom SPF sidebar navigation component, expanded, shown in both light and dark variants side by side."
          caption="The sidebar — the third piece Angular Material couldn't give it, light and dark."
          className="mt-10"
          aspectClassName="aspect-[10/3]"
          zoomClassName="scale-100"
          positionClassName="object-top"
        />

        <CroppedCapture
          src={footer}
          alt="The custom SPF footer component in three color registers — dark primary, warm secondary, light tertiary."
          caption="One footer component, three color registers, never three separate builds."
          className="mt-10"
          aspectClassName="aspect-[8/1]"
          zoomClassName="scale-100"
          positionClassName="object-top"
        />

        {/* The atomic layer */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            The Atomic Layer
          </p>
          <SubsectionText className="mt-4">
            <p>
              Underneath the structural pieces sits a second, smaller layer —
              SPF's own atomic components, built for what Angular Material
              doesn't cover: a notification system carrying the exact same info,
              success, warning and error roles the token system already defined,
              and a radio-option component tested across nine, then fourteen
              instances at once — every group size a real form might actually
              need, not just the one that looked good in a mockup.
            </p>
          </SubsectionText>

          <AssetFrame
            src={notification}
            alt="The SPF notification/alert component in info, success, warning and error variants — plain, with a text link, with two action buttons, and as a full-width banner — the same semantic color roles defined in the Design Tokens chapter."
            className="mt-10 aspect-[7/9] max-w-xl"
          />
          <p className="mt-3 max-w-xl font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            Info, success, warning, error — the same roles the tokens already
            named.
          </p>
          <CroppedCapture
            src={radio}
            alt="The SPF radio-option component tested across group sizes from two to fourteen options at once, showing single-select behavior at every configuration a real form might use."
            caption="Fourteen group sizes tested at once — not the one that happened to fit a mockup."
            className="mt-8"
            aspectClassName="aspect-[7/2]"
            zoomClassName="scale-[3.26]"
            positionClassName="object-[50%_75%]"
          />
        </div>

        {/* Responsive */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Built at Every Width, Not Just One
          </p>
          <SubsectionText className="mt-4">
            <p>
              None of this was designed once at one size and left to break. The
              language selector alone exists at six explicit widths — 1920,
              1440, 1024, 768, 380 and 350 — because a citizen switching
              languages on a phone in a waiting room deserves the same component
              a case worker gets on a desktop monitor, not a smaller, quieter
              version of it.
            </p>
          </SubsectionText>
          <CroppedCapture
            src={language}
            alt="The SPF language selector component built at six explicit breakpoints — 1920, 1440, 1024, 768, 380 and 350 pixels, each labeled in the Figma file and stacked by width."
            caption="The widest of six labeled breakpoints, stacked top to bottom by width — 1920 down to 350."
            className="mt-10 max-w-sm"
            aspectClassName="aspect-[5/12]"
            zoomClassName="scale-[1.23]"
            positionClassName="object-[53%_50%]"
          />
        </div>

        {/* Interaction states */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            States Aren&rsquo;t an Afterthought
          </p>
          <SubsectionText className="mt-4">
            <p>
              A form input isn't one component, it's roughly a dozen: default,
              focus, filled, error, validated, disabled, autocomplete —
              multiplied again across text, number and date types, each one
              drawn on purpose rather than assumed to fall out of Angular
              Material for free.
            </p>
          </SubsectionText>
          <CroppedCapture
            src={inputs}
            alt="A matrix of SPF input field states — default, focus, filled, error, validated, disabled, autocomplete — across text, number and date input types."
            caption="Roughly a dozen states, drawn for every input type — not assumed."
            className="mt-10"
            aspectClassName="aspect-[21/9]"
            zoomClassName="scale-[1.35]"
            positionClassName="object-[30%_15%]"
          />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={stepperZoom}
            alt="The SPF account-activation stepper with named states — in progress, pending, to be verified, completed, rejected — reusing the same semantic colors as the token system and the notification component."
            caption="In progress, pending, to be verified, completed, rejected — the tokens, doing real work."
            aspectClassName="aspect-[16/9]"
            zoomClassName="scale-[1.15]"
            positionClassName="object-[45%_35%]"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              The Same Vocabulary, In Use
            </p>
            <SubsectionText className="mt-4">
              <p>
                The same discipline shows up somewhere a citizen would actually
                feel it: an account-activation stepper with named states — in
                progress, pending, to be verified, completed, rejected — the
                same semantic vocabulary the token system defined two chapters
                ago, now doing real work in a real flow, not just sitting in a
                palette nobody consumed.
              </p>
            </SubsectionText>
          </div>
        </div>

        {/* Closing synthesis — text only, deliberately quiet after a dense chapter */}
        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-24 max-w-2xl"
        >
          <p className="text-xl leading-snug font-medium text-foreground md:text-2xl">
            None of these pieces were designed in isolation. The same info,
            success, warning and error roles color a token, a notification and a
            stepper. The same button sits inside a card's actions and an alert's
            actions. That repetition, chapter after chapter, is the actual proof
            — not a folder of screens that happen to share a file, but one
            system, used everywhere it needed to be.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Components }
