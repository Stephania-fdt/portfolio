export type CaseStudyImage = {
  /** Vite-imported module path — the built, hashed asset URL, not a raw string path. */
  src: string
  /** Describes what the image shows, not what it's called — this is what a screen reader announces. */
  alt: string
  caption?: string
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
}

export type CaseStudy = {
  /** Matches the slug segment of the project's `href` in `content/work.ts` (e.g. "spf-design-system"). */
  slug: string
  sections: CaseStudySection[]
}
