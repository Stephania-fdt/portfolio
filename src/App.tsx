import { Route, Routes } from "react-router-dom"

import { Navigation } from "@/components/layout/Navigation/Navigation"
import { ScrollManager } from "@/components/layout/ScrollManager"
import { Home } from "@/pages/Home"
import { CaseStudy } from "@/pages/CaseStudy/CaseStudy"
import { SPFCaseStudy } from "@/pages/case-studies/SPF/SPFCaseStudy"

function App() {
  return (
    <>
      <ScrollManager />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  )
}

export default App
