import { useState, type MouseEvent } from "react"
import { useReducedMotion } from "framer-motion"

import { heroSpecimenContent } from "@/content/hero-specimen"
import { getLocalizedContent, useLanguage } from "@/i18n"

type MousePosition = {
  x: number
  y: number
  inside: boolean
}

const EASE_STANDARD = "cubic-bezier(0.22, 1, 0.36, 1)"

/**
 * The Hero's type specimen, ported from `reference/design-reference.html`.
 * Its interaction is intentionally local: coordinate state is measured from
 * this plate alone, so it never affects the reading column or page layout.
 */
function HeroBackground() {
  const { language } = useLanguage()
  const copy = getLocalizedContent(heroSpecimenContent, language)
  const shouldReduceMotion = useReducedMotion()
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0.5,
    y: 0.42,
    inside: false,
  })

  const dx = mouse.x - 0.5
  const dy = mouse.y - 0.5
  const gridShiftX = `translateX(${(-dx * 16).toFixed(2)}px)`
  const gridShiftY = `translateY(${(-dy * 12).toFixed(2)}px)`
  const letterShift = `translate(${(dx * 9).toFixed(2)}px, ${(dy * 7).toFixed(2)}px) skewX(${(-dx * 3).toFixed(2)}deg)`
  const crossX = `${(mouse.x * 100).toFixed(1)}%`
  const crossY = `${(mouse.y * 100).toFixed(1)}%`
  const readX = (mouse.x * 100).toFixed(1)
  const readY = (mouse.y * 100).toFixed(1)
  const crosshairVisible = mouse.inside && !shouldReduceMotion

  const onHeroMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const rect = event.currentTarget.getBoundingClientRect()
    const clamp = (value: number) => Math.min(1, Math.max(0, value))
    setMouse({
      x: clamp((event.clientX - rect.left) / rect.width),
      y: clamp((event.clientY - rect.top) / rect.height),
      inside: true,
    })
  }

  const onHeroLeave = () => {
    if (!shouldReduceMotion) {
      setMouse((current) => ({ ...current, inside: false }))
    }
  }

  return (
    <div
      data-hero-specimen
      onMouseMove={onHeroMove}
      onMouseLeave={onHeroLeave}
      className="relative z-0 hidden overflow-hidden border-l border-border md:flex md:items-center md:justify-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          data-hero-grid-x
          className="absolute -inset-8 opacity-90"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #e7e2da 0, #e7e2da 1px, transparent 1px, transparent 8.3333%)",
            transition: shouldReduceMotion
              ? undefined
              : `transform 600ms ${EASE_STANDARD}`,
            transform: shouldReduceMotion ? undefined : gridShiftX,
          }}
        />
        <div
          data-hero-grid-y
          className="absolute -inset-8"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #efeae2 0, #efeae2 1px, transparent 1px, transparent 7.5rem)",
            transition: shouldReduceMotion
              ? undefined
              : `transform 900ms ${EASE_STANDARD}`,
            transform: shouldReduceMotion ? undefined : gridShiftY,
          }}
        />
      </div>

      <div className="absolute top-6 right-6 left-6 z-10 flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-2xs tracking-wider text-muted-foreground">
        <span>{copy.header}</span>
        <span>
          x {readX} · y {readY}
        </span>
      </div>

      <div
        aria-hidden="true"
        className="relative z-10 aspect-square w-full max-w-[32rem]"
      >
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect
            x="6"
            y="6"
            width="88"
            height="88"
            fill="none"
            stroke="#e2ddd4"
            strokeWidth="0.3"
          />
          {[28.3, 50, 71.7].map((position) => (
            <line
              key={`vertical-${position}`}
              x1={position}
              y1="6"
              x2={position}
              y2="94"
              stroke="#ece8e2"
              strokeWidth="0.15"
            />
          ))}
          {[28.3, 50, 71.7].map((position) => (
            <line
              key={`horizontal-${position}`}
              x1="6"
              y1={position}
              x2="94"
              y2={position}
              stroke="#ece8e2"
              strokeWidth="0.15"
            />
          ))}

          <g
            data-hero-letter
            style={{
              transition: shouldReduceMotion
                ? undefined
                : `transform 500ms ${EASE_STANDARD}`,
              transform: shouldReduceMotion ? undefined : letterShift,
              transformOrigin: "center",
            }}
          >
            <text
              x="50"
              y="78"
              textAnchor="middle"
              dominantBaseline="alphabetic"
              fontFamily="'General Sans', sans-serif"
              fontWeight="600"
              fontSize="72"
              fill="#590f29"
              opacity="0.14"
            >
              S
            </text>
            <text
              x="50"
              y="78"
              textAnchor="middle"
              dominantBaseline="alphabetic"
              fontFamily="'General Sans', sans-serif"
              fontWeight="600"
              fontSize="72"
              fill="none"
              stroke="#590f29"
              strokeWidth="0.22"
            >
              S
            </text>
          </g>

          <g stroke="#6e6a63" strokeWidth="0.28">
            <line x1="10" y1="30" x2="90" y2="30" strokeDasharray="1.2 2" />
            <line x1="10" y1="44" x2="90" y2="44" strokeDasharray="1.2 2" />
            <line x1="10" y1="78" x2="90" y2="78" strokeDasharray="1.2 2" />
            <line x1="10" y1="86" x2="90" y2="86" strokeDasharray="0.6 1.6" />
            <line x1="30" y1="24" x2="30" y2="86" strokeDasharray="1.2 2" />
            <line x1="70" y1="24" x2="70" y2="86" strokeDasharray="1.2 2" />
          </g>
          <g
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="2.3"
            fill="#6e6a63"
          >
            <text x="10" y="28.2">
              {copy.capHeight}
            </text>
            <text x="10" y="42.2">
              {copy.xHeight}
            </text>
            <text x="10" y="76.2">
              {copy.baseline}
            </text>
            <text x="10" y="89.6">
              {copy.descender}
            </text>
            <text x="72" y="22.4" fill="#590f29">
              General Sans · 600
            </text>
          </g>
          <g stroke="#590f29" strokeWidth="0.5">
            <line x1="30" y1="78" x2="30" y2="82" />
            <line x1="70" y1="78" x2="70" y2="82" />
            <line x1="30" y1="80" x2="70" y2="80" strokeWidth="0.22" />
          </g>
          <text
            x="50"
            y="84.6"
            textAnchor="middle"
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="2.1"
            fill="#590f29"
          >
            {copy.units}
          </text>
          <g stroke="#6e6a63" strokeWidth="0.3" opacity="0.5">
            <line x1="10.5" y1="8" x2="10.5" y2="13" />
            <line x1="8" y1="10.5" x2="13" y2="10.5" />
            <circle
              cx="10.5"
              cy="10.5"
              r="2.4"
              fill="none"
              strokeWidth="0.22"
            />
          </g>
        </svg>

        <div
          data-hero-crosshair
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: crosshairVisible ? 1 : 0,
            transition: shouldReduceMotion ? undefined : "opacity 300ms ease",
          }}
        >
          <div
            className="absolute top-0 bottom-0 w-px bg-brand/45"
            style={{ left: crossX }}
          />
          <div
            className="absolute right-0 left-0 h-px bg-brand/45"
            style={{ top: crossY }}
          />
          <div
            className="absolute translate-x-2 translate-y-2 font-mono text-[0.5625rem] tracking-wider text-brand"
            style={{ left: crossX, top: crossY }}
          >
            {readX} / {readY}
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeroBackground }
