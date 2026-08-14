import { CaseStudyHero } from "@/components/ui/case-study-hero"
import heroCover from "@/assets/case-studies/portfolio/hero-preview.png"

const META = [
  { label: "Role", value: "Product Designer & Front-end Implementer" },
  { label: "Timeline", value: "2026 — Present" },
  { label: "Focus", value: "Design Systems · Accessibility · AI Workflow" },
  { label: "Stack", value: "React · TypeScript · Tailwind CSS" },
]

/** The reference cover, now rendered by the shared case-study hero unchanged. */
function Hero() {
  return (
    <CaseStudyHero
      eyebrow="Product Design · Stéphania — Portfolio"
      title="Stéphania — Portfolio"
      summary="Designing and building my own product experience from strategy to front-end."
      detail="A self-initiated Product Design + front-end project: this site itself, designed, systemized and built by me — a working demonstration of Product Design, Design Systems, accessibility and an AI-assisted workflow, not a description of them."
      meta={META}
      image={{
        src: heroCover,
        alt: "This portfolio's own Hero section — the headline 'Building scalable products through Design Systems, Accessibility & AI', the primary navigation and the CTA buttons, captured from the live site.",
      }}
    />
  )
}

export { Hero }
