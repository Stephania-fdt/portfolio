import { Hero } from "@/components/sections/Hero/Hero"
import { Work } from "@/components/sections/Work/Work"
import { HomeClosing } from "@/components/sections/HomeClosing/HomeClosing"

/**
 * The single continuous scroll — three beats, not five. Hero orients
 * (who, what), Work proves it (the projects), HomeClosing hands off to
 * `/contact` with one quiet line. HeroExpertise, HomeProfile and the
 * full Contact section used to render here too; they're still real,
 * working components (Experience's own page still uses the generic
 * `Contact`), just no longer part of the Homepage's own render — About
 * and Experience already own that depth on their own pages, and
 * `/contact` now owns getting in touch. Navigation stays outside this
 * component (shared across every route).
 *
 * Title/meta description come from `<Seo />` alone (Sprint "SEO title race
 * fix") — this page used to set `document.title` itself too, racing
 * `<Seo />`'s own effect and unpredictably showing a shorter, less specific
 * title depending on which effect committed last.
 */
function Home() {
  return (
    // `<main>` — one landmark per page (Sprint "Finalisation — Lighthouse
    // landmark-one-main"); Home was the one route with no wrapper at all.
    <main>
      <Hero />
      <Work />
      <HomeClosing />
    </main>
  )
}

export { Home }
