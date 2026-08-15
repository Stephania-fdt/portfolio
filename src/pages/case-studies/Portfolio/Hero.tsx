import { CaseStudyHero } from "@/components/ui/case-study-hero"
import heroCover from "@/assets/case-studies/portfolio/hero-preview.png"
import { useLanguage } from "@/i18n"

const COPY = {
  en: {
    eyebrow: "Product Design · Stéphania — Portfolio",
    summary:
      "Designing and building my own product experience from strategy to front-end.",
    detail:
      "A living personal product designed to express my Product Designer identity, make six years of experience legible, and demonstrate how I turn complex problems into simple, accessible and scalable experiences.",
    meta: [
      { label: "Role", value: "Product Designer & Front-end Implementer" },
      { label: "Timeline", value: "2026 — Present" },
      { label: "Focus", value: "Design Systems · Accessibility · AI Workflow" },
      { label: "Stack", value: "React · TypeScript · Tailwind CSS" },
    ],
    alt: "This portfolio's homepage showing its editorial hero, primary navigation and calls to action.",
  },
  fr: {
    eyebrow: "Product Design · Stéphania — Portfolio",
    summary:
      "Concevoir et développer ma propre expérience produit, de la stratégie au front-end.",
    detail:
      "Un produit personnel vivant, conçu pour traduire mon identité de Product Designer, valoriser six années d’expérience et démontrer ma capacité à transformer des problématiques complexes en expériences simples, accessibles et évolutives.",
    meta: [
      { label: "Rôle", value: "Product Designer & intégratrice front-end" },
      { label: "Période", value: "2026 — Aujourd’hui" },
      { label: "Focus", value: "Design Systems · Accessibilité · Workflow IA" },
      { label: "Stack", value: "React · TypeScript · Tailwind CSS" },
    ],
    alt: "Page d’accueil du portfolio montrant son hero éditorial, la navigation principale et les appels à l’action.",
  },
} as const

/** The reference cover, now rendered by the shared case-study hero unchanged. */
function Hero() {
  const { language } = useLanguage()
  const copy = COPY[language]
  return (
    <CaseStudyHero
      eyebrow={copy.eyebrow}
      title="Stéphania — Portfolio"
      summary={copy.summary}
      detail={copy.detail}
      meta={[...copy.meta]}
      image={{
        src: heroCover,
        alt: copy.alt,
      }}
    />
  )
}

export { Hero }
