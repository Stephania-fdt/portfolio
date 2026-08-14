import { Route, Routes } from "react-router-dom"

import { Navigation } from "@/components/layout/Navigation/Navigation"
import { ScrollManager } from "@/components/layout/ScrollManager"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About/About"
import { CaseStudy } from "@/pages/CaseStudy/CaseStudy"
import { SPFCaseStudy } from "@/pages/case-studies/SPF/SPFCaseStudy"
import { WellPackCaseStudy } from "@/pages/case-studies/WellPack/WellPackCaseStudy"
import { PortfolioCaseStudy } from "@/pages/case-studies/Portfolio/PortfolioCaseStudy"

function App() {
  return (
    <>
      <ScrollManager />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Sprint 18.1 — the real SPF case study (/work/spf-design-system,
            matched below by :slug) stays exactly as it is, complete and
            live. This is a separate, additive preview of the new
            asset-driven structure being prepared for it, so it can be
            checked as Figma exports land without touching what visitors
            see today. Promote it by swapping :slug's target when Sprint
            18 actually writes the case study — not before. */}
        <Route
          path="/work/spf-design-system/preview"
          element={<SPFCaseStudy />}
        />
        {/* WellPack Sprint 1 — same additive pattern as the SPF preview
            above: the real, live WellPack case study (/work/wellpack,
            content/case-studies/wellpack.ts) stays exactly as it is.
            This checks the new chapter-by-chapter structure separately,
            reachable only at /preview, until it's ready to promote. */}
        <Route path="/work/wellpack/preview" element={<WellPackCaseStudy />} />
        {/* Portfolio (Project 02) has no generic-registry entry to protect —
            unlike SPF/WellPack above, this is a brand-new case study, so it
            goes live directly at its real URL rather than behind /preview. */}
        <Route path="/work/portfolio" element={<PortfolioCaseStudy />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  )
}

export default App
