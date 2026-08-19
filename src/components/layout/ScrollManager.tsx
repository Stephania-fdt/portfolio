import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * React Router doesn't restore scroll position or honor a URL hash on
 * navigation the way a full page load does — this replaces both. A fresh
 * route (no hash) scrolls to top; a route with a hash (e.g. Navigation
 * linking back to "/#work" from a case-study page) scrolls to that section
 * once it's actually in the DOM.
 *
 * Depends on `key`, not just `[pathname, hash]`: two different links can
 * legitimately share a target hash (e.g. the Hero's own "View my work"
 * button and a case-study back-link, both resolving to "/#work"). If a
 * visitor lands on "/#work" via one, then clicks the other, `pathname`/
 * `hash` don't change — but `key` does, since React Router mints a new
 * one on every navigation regardless of whether the resulting URL is
 * identical. Without it, that second click silently did nothing.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return null
}

export { ScrollManager }
