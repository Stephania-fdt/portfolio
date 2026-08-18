import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { Navigation } from "@/components/layout/Navigation/Navigation"
import { ScrollManager } from "@/components/layout/ScrollManager"
import { Seo } from "@/components/seo/Seo"
import { Container } from "@/components/ui/container"
import { useLanguage } from "@/i18n"

const Home = lazy(() =>
  import("@/pages/Home").then((module) => ({ default: module.Home })),
)
const Work = lazy(() =>
  import("@/pages/Work/Work").then((module) => ({ default: module.Work })),
)
const About = lazy(() =>
  import("@/pages/About/About").then((module) => ({ default: module.About })),
)
const Experience = lazy(() =>
  import("@/pages/Experience/Experience").then((module) => ({
    default: module.Experience,
  })),
)
const SPFCaseStudy = lazy(() =>
  import("@/pages/case-studies/SPF/SPFCaseStudy").then((module) => ({
    default: module.SPFCaseStudy,
  })),
)
const PortfolioCaseStudy = lazy(() =>
  import("@/pages/case-studies/Portfolio/PortfolioCaseStudy").then(
    (module) => ({ default: module.PortfolioCaseStudy }),
  ),
)
const HarmonyCaseStudy = lazy(() =>
  import("@/pages/case-studies/Harmony/HarmonyCaseStudy").then((module) => ({
    default: module.HarmonyCaseStudy,
  })),
)
const WellPackCaseStudy = lazy(() =>
  import("@/pages/case-studies/WellPack/WellPackCaseStudy").then((module) => ({
    default: module.WellPackCaseStudy,
  })),
)
const JogaAuraCaseStudy = lazy(() =>
  import("@/pages/case-studies/JogaAura/JogaAuraCaseStudy").then((module) => ({
    default: module.JogaAuraCaseStudy,
  })),
)
const NotFound = lazy(() =>
  import("@/pages/NotFound/NotFound").then((module) => ({
    default: module.NotFound,
  })),
)

function RouteLoadingFallback() {
  const { copy } = useLanguage()

  return (
    <main className="min-h-[50vh] pt-16 lg:pt-20">
      <Container
        role="status"
        aria-live="polite"
        className="py-section text-sm text-muted-foreground"
      >
        {copy.common.loading}
      </Container>
    </main>
  )
}

function App() {
  return (
    <>
      <ScrollManager />
      <Navigation />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work/spf-design-system" element={<SPFCaseStudy />} />
          <Route
            path="/work/spf-design-system/preview"
            element={<Navigate replace to="/work/spf-design-system" />}
          />
          <Route path="/work/portfolio" element={<PortfolioCaseStudy />} />
          <Route path="/work/harmony" element={<HarmonyCaseStudy />} />
          <Route
            path="/work/harmony/preview"
            element={<Navigate replace to="/work/harmony" />}
          />
          <Route path="/work/wellpack" element={<WellPackCaseStudy />} />
          <Route
            path="/work/wellpack/preview"
            element={<Navigate replace to="/work/wellpack" />}
          />
          <Route path="/work/joga-aura" element={<JogaAuraCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Seo />
    </>
  )
}

export default App
