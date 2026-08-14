export type CaseStudyImage = {
  /** Vite-imported module path — the built, hashed asset URL, not a raw string path. */
  src: string
  /** Describes what the image shows, not what it's called — this is what a screen reader announces. */
  alt: string
  caption?: string
  /** A concise editorial annotation shown above the image caption. */
  label?: string
  /** Marks a client-approved direction without turning it into a decorative badge. */
  selected?: boolean
}

export type CaseStudyVisualLayout =
  "single" | "two-up" | "three-up" | "comparison"

export type CaseStudyProcessStep = {
  title: string
  description: string
}

export type CaseStudyFact = {
  label: string
  value: string
  emphasizeValue?: boolean
}

export type CaseStudySection = {
  heading: string
  paragraphs: string[]
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
}

export type CaseStudy = {
  /** Matches the slug segment of the project's `href` in `content/work.ts` (e.g. "spf-design-system"). */
  slug: string
  /** A real final artefact used to establish the project before its story begins. */
  heroImage?: CaseStudyImage
  sections: CaseStudySection[]
}
