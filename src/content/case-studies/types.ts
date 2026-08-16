export type CaseStudyImage = {
  /** Vite-imported module path — the built, hashed asset URL, not a raw string path. */
  src: string
  /** Describes what the image shows, not what it's called — this is what a screen reader announces. */
  alt: string
  /** Optional localized alternative for images outside a translated section. */
  frenchAlt?: string
  caption?: string
  /** A concise editorial annotation shown above the image caption. */
  label?: string
  /** Marks a client-approved direction without turning it into a decorative badge. */
  selected?: boolean
  /** Keeps diagram-like assets fully visible inside the shared editorial frame. */
  contain?: boolean
  /** Gives the primary screen the full row in an editorial image grid. */
  featured?: boolean
  /** Centers a vertical screen at a readable width without cropping it. */
  portrait?: boolean
  /**
   * Opts an image into the click-to-enlarge lightbox. Reserved for dense,
   * text-heavy artifacts (research decks, wireframe sheets) where the
   * inline size can't carry full legibility on its own.
   */
  zoomable?: boolean
  /** Limits the inline presentation while preserving the full-resolution lightbox. */
  displayWidth?: "reference" | "wide"
  /** Real source-file pixel dimensions — reserves the right aspect ratio before load, so nothing jumps. */
  width?: number
  height?: number
}

export type CaseStudyVisualLayout =
  "single" | "two-up" | "three-up" | "comparison" | "editorial"

export type CaseStudyProcessStep = {
  title: string
  description: string
}

export type CaseStudyFact = {
  label: string
  value: string
  emphasizeValue?: boolean
}

export type CaseStudyVideo = {
  /** Public-path URL (from `/public`), not a Vite-bundled import — these files are too large to run through the asset pipeline. */
  src: string
  /** A real project still used as the click-to-play cover, never a fabricated frame grab. */
  poster: string
  posterAlt: string
  label?: string
  caption?: string
  /** Shown next to the play affordance so nobody's mobile data is spent by surprise. */
  sizeNote?: string
  /** Centers prototype previews at a readable, non-dominant desktop width. */
  displayWidth?: "mobile" | "website"
  /** The poster image's real pixel dimensions — reserves its aspect ratio before load. */
  width?: number
  height?: number
}

export type CaseStudyDocument = {
  href: string
  label: string
  frenchLabel: string
  sizeNote?: string
}

export type CaseStudySection = {
  heading: string
  /** Optional editorial title displayed below the section eyebrow. */
  title?: string
  paragraphs: string[]
  /** Section-specific French copy when a direct heading translation is insufficient. */
  french?: {
    heading: string
    title?: string
    paragraphs: string[]
    imageAlts?: string[]
    /** Translated labels for `facts` — falls back to the English facts when absent. */
    facts?: CaseStudyFact[]
  }
  /**
   * Real project artifacts only — flat, honest screenshots, per the
   * Editorial Assets Bible's Image Rules. Never a device mockup, never
   * decorative. Optional: a section with nothing real to show stays text-only
   * rather than force an image that doesn't exist.
   */
  images?: CaseStudyImage[]
  /**
   * A small set of evidence-backed editorial arrangements. `single` keeps
   * the established case-study treatment; the other options are used only
   * when a project has a meaningful visual sequence to show.
   */
  imageLayout?: CaseStudyVisualLayout
  /** Compact project facts or verified process counts. */
  facts?: CaseStudyFact[]
  /** A compact, evidence-backed process summary when a project benefits from one. */
  processSteps?: CaseStudyProcessStep[]
  /** Real prototype recordings — click-to-play, never autoplayed or preloaded. */
  videos?: CaseStudyVideo[]
  /** A source deliverable too large or too paginated to flatten into screenshots (e.g. a full design-system PDF). */
  document?: CaseStudyDocument
}

export type CaseStudy = {
  /** Matches the slug segment of the project's `href` in `content/work.ts` (e.g. "spf-design-system"). */
  slug: string
  /** A real final artefact used to establish the project before its story begins. */
  heroImage?: CaseStudyImage
  /** Optional project-specific destination displayed with the hero metadata. */
  liveSite?: {
    href: string
    label: string
    frenchLabel: string
  }
  sections: CaseStudySection[]
}
