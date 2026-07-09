import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

/**
 * Tracks which of the given section ids is currently most in view, via a
 * thin detection band around the viewport's vertical center rather than
 * "any pixel visible" — a section barely peeking in at the bottom edge
 * shouldn't flip the active nav item before a reader has actually reached it.
 */
function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)
  // The effect below only re-runs when `ids` changes, but `ids` is a stable
  // module-level array — without `pathname` in the dependency array, routing
  // away from "/" (where none of these ids exist) would never re-evaluate,
  // leaving a stale active id highlighted on a page it doesn't apply to.
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) {
      setActiveId(null)
      return
    }

    // IntersectionObserver callbacks only report entries whose state changed
    // since the last call, not every observed element every time — picking
    // the "best" purely from the current batch means a section that exits
    // reports no other candidate in that same batch, and the old active id
    // never clears. Tracking every element's last-known ratio here fixes it.
    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          )
        }

        let bestId: string | null = null
        let bestRatio = 0
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }

        setActiveId(bestId)
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, pathname])

  return activeId
}

export { useActiveSection }
