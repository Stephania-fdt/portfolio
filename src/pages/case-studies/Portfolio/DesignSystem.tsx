import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  AssetFrame,
  SubsectionText,
} from "@/components/ui/case-study-capture"
import navCapture from "@/assets/case-studies/portfolio/nav.png"
import buttonsCapture from "@/assets/case-studies/portfolio/buttons.png"
import workCardCapture from "@/assets/case-studies/portfolio/work-card-detail.png"

/** Real values, copied directly from `src/index.css` — nothing here is invented. */
const COLOR_TOKENS = [
  { name: "background", value: "#faf8f5" },
  { name: "foreground", value: "#141414" },
  { name: "brand", value: "#590f29" },
  { name: "secondary", value: "#e7ded3" },
  { name: "accent", value: "#92a8d1" },
  { name: "border", value: "#ece8e2" },
]

const TYPE_TOKENS = [
  { name: "--font-heading", value: "General Sans" },
  { name: "--font-sans", value: "Inter" },
  { name: "--font-mono", value: "IBM Plex Mono" },
]

const SPACING_TOKENS = [
  { name: "--spacing-container", value: "clamp(1.25rem, 4vw, 4rem)" },
  { name: "--spacing-section", value: "clamp(5rem, 10vw, 9rem)" },
  { name: "--spacing-section-sm", value: "clamp(2rem, 5vw, 4rem)" },
]

const MOTION_TOKENS = [
  { name: "--ease-standard", value: "cubic-bezier(0.22, 1, 0.36, 1)" },
  { name: "--duration-fast", value: "150ms" },
  { name: "--duration-standard", value: "250ms" },
  { name: "--duration-slow", value: "400ms" },
]

/**
 * Portfolio case study — Chapter 6, Design System. Real tokens, copied
 * verbatim from `src/index.css` — no invented values — paired with three
 * real screenshots of the implementation actually running (navigation,
 * buttons, a Selected Work project card). Layout/grid and responsive
 * behavior are named here but detailed in their own later chapters
 * (Front-end Implementation, Responsive Design) rather than repeated.
 */
function DesignSystem() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-design-system">
      <Container size="content">
        <SectionKicker>Design System</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          Every section on this site draws from the same small set of tokens —
          three type families, a fluid spacing scale, one motion curve, one
          accent color used deliberately rather than often.
        </motion.p>

        {/* Typography */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Typography
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              Three families, each with one job: General Sans for headings,
              Inter for body and UI text, IBM Plex Mono reserved for
              construction-language moments — numerals, edition marks, category
              labels — never body copy. The type scale itself is fluid above the
              2xl step, sized with{" "}
              <code className="font-mono text-base">clamp()</code> so headings
              resize smoothly across viewports instead of jumping at
              breakpoints.
            </p>
          </SubsectionText>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {TYPE_TOKENS.map((token) => (
              <div key={token.name} className="bg-background p-6">
                <p className="font-mono text-2xs text-muted-foreground">
                  {token.name}
                </p>
                <p className="mt-2 text-lg font-medium text-foreground">
                  {token.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Color system */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Color System
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              A warm, near-neutral background and foreground carry almost every
              screen. One brand color — a deep burgundy — is reserved for
              deliberate moments (an active nav link, a category tag, a hover
              state), not wired in as a general UI color. Its own token comment
              says why directly:{" "}
              <code className="font-mono text-sm">
                reserved for deliberate brand moments, not a replacement for
                --primary/--accent in general UI
              </code>
              .
            </p>
          </SubsectionText>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {COLOR_TOKENS.map((token) => (
              <div key={token.name} className="bg-background p-4">
                <div
                  aria-hidden="true"
                  className="aspect-square w-full border border-border"
                  style={{ backgroundColor: token.value }}
                />
                <p className="mt-3 font-mono text-2xs text-muted-foreground">
                  {token.name}
                </p>
                <p className="font-mono text-2xs text-foreground">
                  {token.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Spacing
            </p>
            <SubsectionText className="mt-4">
              <p>
                Three named, fluid steps instead of a fixed pixel scale —
                container padding, section rhythm, and a smaller
                &ldquo;section-sm&rdquo; step for tighter chapters. Each one is
                a <code className="font-mono text-base">clamp()</code>, so the
                same token stays proportionate from a 320px screen to a 1440px
                one, rather than needing per-breakpoint overrides.
              </p>
            </SubsectionText>
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border">
            {SPACING_TOKENS.map((token) => (
              <div key={token.name} className="bg-background p-6">
                <p className="font-mono text-2xs text-muted-foreground">
                  {token.name}
                </p>
                <p className="mt-2 font-mono text-sm text-foreground">
                  {token.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Motion & interaction */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="grid gap-px overflow-hidden border border-border bg-border">
            {MOTION_TOKENS.map((token) => (
              <div key={token.name} className="bg-background p-6">
                <p className="font-mono text-2xs text-muted-foreground">
                  {token.name}
                </p>
                <p className="mt-2 font-mono text-sm text-foreground">
                  {token.value}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Motion & Interaction Patterns
            </p>
            <SubsectionText className="mt-4">
              <p>
                One easing curve, three durations, used consistently rather than
                tuned per component. Interactions stay deliberately quiet: a
                hover shifts an arrow 2px, lightens a border, nudges an image
                scale — never a bounce, never an overshoot. Every animated
                component checks{" "}
                <code className="font-mono text-base">useReducedMotion()</code>{" "}
                and a site-wide{" "}
                <code className="font-mono text-base">
                  prefers-reduced-motion
                </code>{" "}
                media query collapses every transition to near-zero for anyone
                who has asked for that.
              </p>
            </SubsectionText>
          </div>
        </div>

        {/* Components — real screenshots */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Components, as Built
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              Navigation, buttons and the Selected Work project card are the
              system&rsquo;s three most-repeated components — shown here exactly
              as the live site renders them, not redrawn for this page.
            </p>
          </SubsectionText>

          <div className="mt-10 space-y-10">
            <div>
              <AssetFrame
                src={navCapture}
                alt="The site's primary navigation bar — logo, Work/About/Experience/Contact links, and the 'Let's talk' CTA button."
              />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                Navigation — the real header, captured live.
              </p>
            </div>

            <div>
              <AssetFrame
                src={buttonsCapture}
                alt="The two button variants used across the site — a solid brand-colored primary button and an outlined secondary button, both with visible borders and no drop shadows."
                className="max-w-md"
              />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                Buttons — solid primary, outlined secondary. No shadows, no
                gradients.
              </p>
            </div>

            <div>
              <AssetFrame
                src={workCardCapture}
                alt="A Selected Work project card at rest — the Harmony entry, showing the numbered eyebrow, title, description, technology tags and a real project screenshot."
              />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                Project card — the same component this case study is linked
                from.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export { DesignSystem }
