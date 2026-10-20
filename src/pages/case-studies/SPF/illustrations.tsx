import { cn } from "@/lib/utils"

/**
 * SPF-only illustrative language (personalization pass 3): a small family
 * of hand-drawn icons plus two fine ornaments, replacing pass 2's large
 * hand/workspace scenes — those read as decorative set-pieces competing
 * with the title and content; this is closer to a personal signature
 * mark reused in a few precise spots. Built from two real references in
 * `design-reference/` (`icones-dessinees.png.png`, an existing hand-drawn
 * icon sheet in this exact burgundy/rounded-line language, and
 * `ornements-graphiques*.jpg.jpg`, stock ornament sheets — inspiration
 * only, never reproduced: their own text/watermarks are not copied, and
 * no sheet is used whole as a page image). Same three-color language as
 * the earlier pass: burgundy `#590f29`, powder pink `#f2d9df`, a deeper
 * rose `#a33a55` for the rare small accent mark. Static (no motion),
 * `aria-hidden`, no label baked into any SVG — the real heading beside
 * each one already carries that.
 */

const burgundy = "#590f29"
const rose = "#a33a55"
const powderPink = "#f2d9df"

type IconProps = { className?: string }

/** Design System: four soft squares, one filled — the hero's small signature mark. */
function DesignSystemIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="12"
        y="12"
        width="34"
        height="34"
        rx="9"
        fill="none"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinejoin="round"
        transform="rotate(-2 29 29)"
      />
      <rect
        x="54"
        y="13"
        width="33"
        height="33"
        rx="9"
        fill={powderPink}
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinejoin="round"
        transform="rotate(2 70 30)"
      />
      <rect
        x="13"
        y="55"
        width="33"
        height="33"
        rx="9"
        fill="none"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinejoin="round"
        transform="rotate(1.5 29 71)"
      />
      <rect
        x="55"
        y="54"
        width="34"
        height="34"
        rx="9"
        fill="none"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinejoin="round"
        transform="rotate(-1.5 72 71)"
      />
    </svg>
  )
}

/** Tokens: three fanned swatches, the middle one filled — beside the tokens decision. */
function TokensIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="14"
        y="30"
        width="21"
        height="46"
        rx="10.5"
        fill="none"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinejoin="round"
        transform="rotate(-16 24.5 53)"
      />
      <rect
        x="37.5"
        y="20"
        width="21"
        height="52"
        rx="10.5"
        fill={powderPink}
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <rect
        x="61"
        y="30"
        width="21"
        height="46"
        rx="10.5"
        fill="none"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinejoin="round"
        transform="rotate(16 71.5 53)"
      />
    </svg>
  )
}

/** Accessibility: an open figure inside an interrupted circle — beside the accessibility decision. */
function AccessibilityIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="48"
        cy="48"
        r="34"
        fill="none"
        stroke={burgundy}
        strokeWidth="4"
        strokeDasharray="38 20"
        strokeLinecap="round"
        transform="rotate(-20 48 48)"
      />
      <circle
        cx="48"
        cy="30"
        r="8"
        fill="none"
        stroke={burgundy}
        strokeWidth="4.5"
      />
      <path
        d="M48 41 L48 60"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M48 47 L30 40"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M48 47 L66 40"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M48 60 L32 75"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M48 60 L64 75"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Collaboration: two offset speech bubbles — beside the closing reflection. */
function CollaborationIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M14 16 q-2 -3 1.5 -4.5 q26 -9 50 -1 q4 1.5 3.5 5.5 l-2.5 24 q-0.5 4.5 -5 4.3 l-27 -1 l-11 10 l0.5 -10.5 l-6 -1 q-4.3 -0.6 -4 -5 z"
        fill="none"
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M40 52 q-2 -3 1.5 -4.3 q20 -6.5 38 0.3 q3.7 1.4 3.3 5 l-2 18 q-0.5 4 -4.5 4 l-20 -0.5 l-8.5 8 l0.5 -8.5 l-4.5 -0.8 q-3.8 -0.6 -3.5 -4.5 z"
        fill={powderPink}
        stroke={burgundy}
        strokeWidth="4.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M86 10 l6 -7"
        stroke={rose}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M91 20 l8 -3"
        stroke={rose}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Ornament: two decentered, overlapping ellipses — near the opening introduction. Finer stroke than the icons, secondary by design. */
function DecenteredEllipses({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <ellipse
        cx="46"
        cy="30"
        rx="40"
        ry="15"
        fill="none"
        stroke={burgundy}
        strokeWidth="1.4"
        transform="rotate(-9 46 30)"
      />
      <ellipse
        cx="72"
        cy="33"
        rx="34"
        ry="12.5"
        fill="none"
        stroke={burgundy}
        strokeWidth="1.4"
        transform="rotate(7 72 33)"
      />
      <circle cx="58" cy="31" r="2.6" fill={burgundy} />
    </svg>
  )
}

/** Ornament: a fine divider with a small four-point accent — before the closing reflection. */
function DividerAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 40"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <line
        x1="0"
        y1="20"
        x2="58"
        y2="20"
        stroke={burgundy}
        strokeWidth="1.2"
      />
      <line
        x1="82"
        y1="20"
        x2="140"
        y2="20"
        stroke={burgundy}
        strokeWidth="1.2"
      />
      <path
        d="M70 8 L70 15 M70 25 L70 32 M58 20 L65 20 M75 20 L82 20"
        stroke={burgundy}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M70 12 L70 28 M62 20 L78 20"
        stroke={burgundy}
        strokeWidth="0.9"
        opacity="0.5"
      />
    </svg>
  )
}

/**
 * A small corner "look here" mark — a filled dot with a short curved
 * tail — placed near a real deliverable, never inside it. Purely
 * decorative: the actual claim it points at is already real HTML text
 * beside it (a caption or paragraph), never text baked into the SVG.
 */
function AnnotationMark({
  className,
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 64 44"
      className={cn("h-11 w-16", className)}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 8 C22 6, 34 16, 30 32"
        fill="none"
        stroke={burgundy}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="6" cy="8" r="4" fill={burgundy} />
    </svg>
  )
}

export {
  DesignSystemIcon,
  TokensIcon,
  AccessibilityIcon,
  CollaborationIcon,
  DecenteredEllipses,
  DividerAccent,
  AnnotationMark,
}
