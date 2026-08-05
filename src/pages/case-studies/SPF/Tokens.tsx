import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  CroppedCapture,
  SubsectionText,
} from "@/components/ui/case-study-capture"
import tokensStudio from "@/assets/case-studies/spf/tokens/tokens2.png"
import tokensCode from "@/assets/case-studies/spf/tokens/code_tokens-theme.png"
import palette from "@/assets/case-studies/spf/tokens/variables.png"
import schemes from "@/assets/case-studies/spf/tokens/variables2.png"

/**
 * Sprint 18.4, revised post-launch once two real Figma Variables captures
 * (variables.png, variables2.png) landed in tokens/ alongside the original
 * three.
 *
 * tokens.png — the flat swatch list originally used for "Semantic
 * Naming" — is retired here, not kept alongside the new pair. Its one
 * claim (semantic names exist) is now shown with strictly better
 * evidence: variables2.png is the real Figma Variables panel, collection
 * sidebar and mode columns included, not a cropped list of rows. Keeping
 * both would repeat the same claim twice at two different strengths,
 * which is worse than keeping the stronger one once.
 *
 * What the two new captures actually show, confirmed by directly reading
 * the values in each screenshot rather than assumed from filenames:
 *
 * - variables.png — the `Palettes` group (108 of the collection's 174
 *   variables): a raw tonal ramp, Primary 100 down to Primary 0, eighteen
 *   steps. Every one of those steps resolves to the identical hex across
 *   all four visible modes (Light, Light High Contrast, Light Medium
 *   Contrast, Dark) — the palette itself doesn't vary by mode.
 * - variables2.png — the `Schemes` group (49 variables): the same
 *   palette assigned to roles (Primary, On Primary, Primary Container,
 *   Secondary, Error...). Here the four mode columns genuinely diverge —
 *   e.g. Secondary resolves to 645E53 / 262219 / 474239 / FFFFFF across
 *   the four modes, four distinct real values, confirmed by reading the
 *   hex codes directly off the capture.
 *
 * That contrast between the two captures — identical values one group
 * over, divergent values the next — is a real, observable fact about how
 * this system is built (mode-switching lives in the scheme layer, not the
 * palette layer), not an inference or a claim borrowed from another
 * chapter. It's the spine of the rewritten first two subsections below.
 *
 * The collection sidebar visible in both captures also confirms, for the
 * first time anywhere in this case study, that Light High Contrast and
 * Light Medium Contrast exist as real Figma modes — previously an
 * unconfirmed placeholder in the asset manifest, explicitly left
 * unclaimed by the original Sprint 18.4 comment. That gap is closed here
 * because the evidence for it now exists, not asserted ahead of the
 * evidence the way the manifest once guessed it might.
 */
function Tokens() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-tokens">
      <Container size="content">
        <SectionKicker>Design Tokens</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          Foundations became tokens the moment they needed to survive being used
          by someone else — a hex value in a Figma layer doesn&rsquo;t travel to
          a developer&rsquo;s codebase. A named variable does.
        </motion.p>

        {/* The palette layer — mode-agnostic */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={palette}
            alt="The Figma Variables panel for SPF's material-theme collection, Palettes group selected — a raw tonal ramp from Primary 100 through Primary 0, with four mode columns (Light, Light High Contrast, Light Medium Contrast, Dark) all showing identical hex values per step."
            caption="Primary 100 through 0 — the same hex in all four modes. The palette doesn't know what a theme is yet."
            aspectClassName="aspect-[3/2]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              The Palette, Independent of Mode
            </p>
            <SubsectionText className="mt-4">
              <p>
                Before a color means anything, it&rsquo;s a position on a ramp.
                Eighteen steps per hue, named by position — Primary 100, 90, 80,
                down to 0 — sitting inside a{" "}
                <code className="font-mono text-base">Palettes</code> group
                holding 108 of this one collection&rsquo;s 174 variables,
                alongside <code className="font-mono text-base">Schemes</code>,{" "}
                <code className="font-mono text-base">Surfaces</code> and{" "}
                <code className="font-mono text-base">Extended Colors</code> as
                siblings in the same file, not a palette re-copied per project.
              </p>
              <p>
                Four modes already exist at this layer — Light, Light High
                Contrast, Light Medium Contrast, Dark — but every one of them
                resolves to the same value here. Primary 90 is D9E3F1 whichever
                mode is active. The palette is raw material, built once; it
                hasn&rsquo;t been asked to carry meaning yet.
              </p>
              <p>
                This one collection sits beside two much larger ones in the same
                file —{" "}
                <code className="font-mono text-base">material-theme/Dark</code>{" "}
                and{" "}
                <code className="font-mono text-base">
                  material-theme/Light
                </code>
                , 1,568 variables each — the fully expanded palette a single
                mode draws from. A system built at that scale isn&rsquo;t
                maintained by hand, one swatch at a time.
              </p>
            </SubsectionText>
          </div>
        </div>

        {/* The scheme layer — where mode actually diverges */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Where the Modes Actually Diverge
            </p>
            <SubsectionText className="mt-4">
              <p>
                One group over, the same palette gets assigned meaning.{" "}
                <code className="font-mono text-base">Schemes</code> — 49
                variables — resolves the raw ramp into roles a component can
                actually ask for:{" "}
                <code className="font-mono text-base">Primary</code>,{" "}
                <code className="font-mono text-base">On Primary</code>,{" "}
                <code className="font-mono text-base">Primary Container</code>,
                and an &ldquo;On&rdquo; pairing for every single role, not just
                the ones someone remembered to check.
              </p>
              <p>
                This is also where the four modes stop agreeing.{" "}
                <code className="font-mono text-base">Secondary</code> resolves
                to <code className="font-mono text-base">645E53</code> in Light,{" "}
                <code className="font-mono text-base">262219</code> in Light
                High Contrast,{" "}
                <code className="font-mono text-base">474239</code> in Light
                Medium Contrast, and{" "}
                <code className="font-mono text-base">FFFFFF</code> in Dark —
                the same semantic name, four independently defined values.
                Contrast is a decision made in the scheme, not a property of the
                palette underneath it.
              </p>
            </SubsectionText>
          </div>
          <CroppedCapture
            src={schemes}
            alt="The Figma Variables panel for SPF's material-theme collection, Schemes group selected — semantic roles including Primary, On Primary, Primary Container, Secondary and Error, each resolving to different hex values across the Light, Light High Contrast, Light Medium Contrast and Dark mode columns."
            caption="Primary, Secondary, Error and their on-colors — one name, four independently resolvable values."
            aspectClassName="aspect-[4/3]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
        </div>

        {/* Tooling & accessibility-in-tokens */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={tokensStudio}
            alt="Tokens Studio for Figma's panel, showing the material-theme color set under a light theme, with a tooltip reporting a WCAG contrast check: Level AA pass, Level AAA pass."
            caption="Tokens Studio for Figma — contrast checked at the token, before a component ever consumes it."
            aspectClassName="aspect-[3/4]"
            zoomClassName="scale-[1.15]"
            positionClassName="object-[70%_35%]"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Built and Checked in Tooling
            </p>
            <SubsectionText className="mt-4">
              <p>
                The tokens were built and maintained in Tokens Studio for Figma,
                not styled by hand per screen — the same Collections-and-Groups
                structure the Variables panel already showed, organized under
                one shared structure rather than a palette copied into each new
                file.
              </p>
              <p>
                A tooltip reading "Level AA — Pass, Level AAA — Pass" on a
                background/text pairing means that contrast check happened here,
                at the source, before a single component consumed the token —
                not discovered later in an audit, after it had already shipped
                everywhere.
              </p>
            </SubsectionText>
          </div>
        </div>

        {/* Exported as code — full-width break */}
        <div className="mt-24">
          <motion.div
            {...(shouldReduceMotion ? { initial: false } : REVEAL())}
            className="max-w-2xl"
          >
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Exported as Code
            </p>
            <SubsectionText className="mt-4">
              <p>
                The tokens don&rsquo;t stop at Figma. Exported as structured
                JSON — <code className="font-mono text-base">$type</code>,{" "}
                <code className="font-mono text-base">$value</code>, one file
                per collection, a dedicated{" "}
                <code className="font-mono text-base">$themes.json</code>{" "}
                defining how they combine — the same values a developer opens in
                their own editor, not a screenshot handed across the gap between
                design and engineering.
              </p>
            </SubsectionText>
          </motion.div>

          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
            className="mt-10 w-full"
          >
            <div className="aspect-[16/9] w-full overflow-hidden border border-border bg-secondary/50 md:aspect-[21/9]">
              <img
                src={tokensCode}
                alt="The exported SPF design tokens as JSON in a code editor — files named SPF Foreign Affairs foundations.tokens.json, Color Styles.tokens.json, $themes.json and global.json, using the $type/$value token format."
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              The same tokens, exported — real file names, real values.
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </Section>
  )
}

export { Tokens }
