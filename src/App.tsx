import { Navigate, Route, Routes } from "react-router-dom"

import { Navigation } from "@/components/layout/Navigation/Navigation"
import { ScrollManager } from "@/components/layout/ScrollManager"
import { Home } from "@/pages/Home"
import { Work } from "@/pages/Work/Work"
import { About } from "@/pages/About/About"
import { Experience } from "@/pages/Experience/Experience"
import { CaseStudy } from "@/pages/CaseStudy/CaseStudy"
import { SPFCaseStudy } from "@/pages/case-studies/SPF/SPFCaseStudy"
import { WellPackCaseStudy } from "@/pages/case-studies/WellPack/WellPackCaseStudy"
import { PortfolioCaseStudy } from "@/pages/case-studies/Portfolio/PortfolioCaseStudy"
import { Seo } from "@/components/seo/Seo"

function App() {
  return (
    <>
      <ScrollManager />
      <Navigation />
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
        <Route path="/work/wellpack" element={<WellPackCaseStudy />} />
        <Route
          path="/work/wellpack/preview"
          element={<Navigate replace to="/work/wellpack" />}
        />
        <Route
          path="/work/harmony/preview"
          element={<Navigate replace to="/work/harmony" />}
        />
        <Route path="/work/portfolio" element={<PortfolioCaseStudy />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
      <Seo />
    </>
  )
}

export default App
