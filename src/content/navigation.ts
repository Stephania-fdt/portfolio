export type NavLink = {
  label: string
  href: string
}

export type NavigationContent = {
  links: NavLink[]
  cta: NavLink
}

/**
 * Every link resolves to a real destination — no forward declarations.
 * "About" is a real, standalone route (`/about`, `pages/About/About.tsx`).
 * "Experience" still reuses The Process, the closest existing stand-in
 * for a timeline until real chronology content exists — an honest reuse
 * of real content, not a fake anchor. "Contact" is its own dedicated
 * route (`/contact`, `pages/Contact/Contact.tsx`) — it used to be a
 * homepage anchor (`#contact`) before the Homepage was simplified to
 * Hero → Selected Work → a closing prompt. Every link here is now a real
 * route; `resolveNavHref` still handles a "#" hash prefix (used by the
 * Hero's own in-page "View my work" button, `#work` — not part of this
 * link set) resolved against the home page.
 */
export const navigationContent: NavigationContent = {
  links: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Let's talk", href: "/contact" },
}

function getNavigationContent(language: "en" | "fr"): NavigationContent {
  if (language === "fr") {
    return {
      links: [
        { label: "Projets", href: "/work" },
        { label: "À propos", href: "/about" },
        { label: "Expérience", href: "/experience" },
        { label: "Contact", href: "/contact" },
      ],
      cta: { label: "Échangeons", href: "/contact" },
    }
  }
  return navigationContent
}

/**
 * A hash href (e.g. "#work") means "that section, on the home page" —
 * resolved to "/#work" so it works from any route. A path href (e.g.
 * "/about") is already a real, complete route. Naively prefixing every
 * `href` with "/" (the previous, hash-only approach) would turn "/about"
 * into "//about".
 */
function resolveNavHref(href: string): string {
  return href.startsWith("#") ? `/${href}` : href
}

/** True when this link's destination is the current page — a real route
 *  match for path hrefs, a section-in-view match (via `activeId`, from
 *  `useActiveSection`) for hash hrefs. Same `isActive` boolean either way,
 *  so the existing active styling needs no new states. */
function isNavLinkActive(
  href: string,
  pathname: string,
  activeId: string | null,
): boolean {
  return href.startsWith("#") ? activeId === href.slice(1) : pathname === href
}

export { resolveNavHref, isNavLinkActive, getNavigationContent }
