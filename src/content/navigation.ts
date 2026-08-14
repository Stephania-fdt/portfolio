export type NavLink = {
  label: string
  href: string
}

export type NavigationContent = {
  links: NavLink[]
  cta: NavLink
}

/**
 * Every link resolves to a real section id — no forward declarations.
 * "About" and "Experience" deliberately reuse existing chapters rather
 * than invent new ones: Design Principles already functions as this
 * site's philosophy/about chapter (`PORTFOLIO_CONSTITUTION.md`'s
 * "Chapter II — Belief"), and The Process is the closest existing stand-in
 * for "Experience" until real timeline content exists. Both are honest
 * reuses of real content, not fake anchors — the nav label describes what
 * a visitor is looking for, the target is what actually answers it.
 */
export const navigationContent: NavigationContent = {
  links: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#principles" },
    { label: "Experience", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Let's talk", href: "#contact" },
}
