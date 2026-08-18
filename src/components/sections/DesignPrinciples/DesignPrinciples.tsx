import { useRef, useState, type KeyboardEvent } from "react"

import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { cn } from "@/lib/utils"
import {
  designPrinciplesSectionContent,
  type DesignPrinciplesSectionContent,
} from "@/content/design-principles-section"
import { getLocalizedContent, useLanguage } from "@/i18n"

const TABS = ["Tokens", "Components", "Grid"] as const
type Tab = (typeof TABS)[number]

const tokenSwatches = [
  { name: "background", value: "#faf8f5" },
  { name: "foreground", value: "#141414", contrast: "16.2:1" },
  { name: "brand", value: "#590f29", contrast: "12.9:1" },
  { name: "primary", value: "#35404a" },
  { name: "secondary", value: "#e7ded3" },
  { name: "muted-fg", value: "#6e6a63", contrast: "5.1:1" },
]

const TECHNICAL_LABEL = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: "0.625rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#6e6a63",
}

function TokensSpecimen({
  copy,
}: {
  copy: DesignPrinciplesSectionContent["tokens"]
}) {
  return (
    <div className="flex flex-col gap-8 p-7 sm:px-6">
      <div>
        <p className="mb-[0.9rem]" style={TECHNICAL_LABEL}>
          {copy.color}
        </p>
        <div className="grid grid-cols-1 gap-px border border-border bg-border min-[480px]:grid-cols-2 sm:grid-cols-3">
          {tokenSwatches.map((token) => (
            <div key={token.name} className="bg-white p-[0.9rem]">
              <div
                aria-hidden="true"
                className="h-[3.25rem]"
                style={{
                  background: token.value,
                  border:
                    token.name === "background"
                      ? "1px solid #ece8e2"
                      : undefined,
                }}
              />
              <p
                className="mt-[0.65rem]"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: "0.625rem",
                  color: "#141414",
                }}
              >
                {token.name}
              </p>
              <p
                className="mt-[0.15rem]"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: "0.625rem",
                  color: "#6e6a63",
                }}
              >
                {token.value}
                {token.contrast ? ` · ${token.contrast}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-[0.9rem]" style={TECHNICAL_LABEL}>
          {copy.typeScale}
        </p>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-5 border-t border-border py-[0.7rem]">
            <span className="w-20 shrink-0 font-mono text-2xs text-muted-foreground">
              7xl / 700
            </span>
            <span
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: "2.6rem",
                lineHeight: 1,
                fontWeight: 600,
                letterSpacing: "-0.04em",
              }}
            >
              {copy.headline}
            </span>
          </div>
          <div className="flex items-baseline gap-5 border-t border-border py-[0.7rem]">
            <span className="w-20 shrink-0 font-mono text-2xs text-muted-foreground">
              4xl / 500
            </span>
            <span
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: "1.7rem",
                lineHeight: 1.1,
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
            >
              {copy.sectionTitle}
            </span>
          </div>
          <div className="flex items-baseline gap-5 border-t border-border py-[0.7rem]">
            <span className="w-20 shrink-0 font-mono text-2xs text-muted-foreground">
              base / 400
            </span>
            <span className="text-base leading-[1.6]">{copy.body}</span>
          </div>
          <div className="flex items-baseline gap-5 border-t border-border py-[0.7rem]">
            <span className="w-20 shrink-0 font-mono text-2xs text-muted-foreground">
              2xs / mono
            </span>
            <span
              className="font-mono text-2xs text-muted-foreground uppercase"
              style={{ letterSpacing: "0.16em" }}
            >
              {copy.annotation}
            </span>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-[0.9rem]" style={TECHNICAL_LABEL}>
          {copy.spacing}
        </p>
        <div className="flex items-end gap-3">
          {[8, 16, 24, 40, 64].map((space) => (
            <div
              key={space}
              className="flex flex-col items-center gap-[0.4rem]"
            >
              <span
                aria-hidden="true"
                className="block bg-brand"
                style={{
                  width: `${space / 16}rem`,
                  height: `${space / 16}rem`,
                  opacity: 1 - (space - 8) / 80,
                }}
              />
              <span
                className="font-mono text-muted-foreground"
                style={{ fontSize: "0.5625rem" }}
              >
                {space}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ComponentsSpecimen({
  copy,
}: {
  copy: DesignPrinciplesSectionContent["components"]
}) {
  return (
    <div className="flex flex-col gap-7 p-7 sm:px-6">
      <div className="flex flex-col gap-[0.9rem]">
        <p style={TECHNICAL_LABEL}>{copy.buttons}</p>
        <div className="flex flex-wrap items-center gap-[0.85rem]">
          <button
            type="button"
            tabIndex={-1}
            className="h-12 border-0 bg-brand px-6 text-sm font-medium text-brand-foreground"
            style={{ borderRadius: "0.3rem" }}
          >
            {copy.primary}
          </button>
          <button
            type="button"
            tabIndex={-1}
            className="h-12 border border-border bg-transparent px-6 text-sm font-medium text-foreground"
            style={{ borderRadius: "0.3rem" }}
          >
            {copy.outline}
          </button>
          <button
            type="button"
            tabIndex={-1}
            className="h-10 border-0 bg-secondary px-[1.1rem] text-[0.8125rem] font-medium text-secondary-foreground"
            style={{ borderRadius: "0.3rem" }}
          >
            {copy.secondary}
          </button>
          <span
            className="font-mono text-muted-foreground"
            style={{ fontSize: "0.5625rem", letterSpacing: "0.1em" }}
          >
            {copy.target}
          </span>
        </div>
      </div>

      <div className="grid gap-5 min-[480px]:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[0.8125rem] font-medium">{copy.email}</span>
          <input
            type="email"
            placeholder={copy.placeholder}
            className="h-11 border border-border bg-background px-[0.85rem] text-sm text-foreground"
            style={{ borderRadius: "0.3rem" }}
          />
          <span
            className="font-mono text-muted-foreground"
            style={{ fontSize: "0.5625rem", letterSpacing: "0.1em" }}
          >
            {copy.hint}
          </span>
        </label>
        <div className="flex flex-col gap-2">
          <span className="text-[0.8125rem] font-medium">{copy.focus}</span>
          <div
            className="flex h-11 items-center border border-border bg-background px-[0.85rem] text-sm text-muted-foreground"
            style={{
              borderRadius: "0.3rem",
              outline: "2px solid #590f29",
              outlineOffset: "3px",
            }}
          >
            {copy.visible}
          </div>
          <span
            className="font-mono text-muted-foreground"
            style={{ fontSize: "0.5625rem", letterSpacing: "0.1em" }}
          >
            {copy.outlineHint}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-[0.9rem]">
        <p style={TECHNICAL_LABEL}>{copy.tags}</p>
        <div className="flex flex-wrap gap-2">
          <span
            className="border border-brand-border bg-brand-soft px-[0.6rem] py-[0.35rem] font-mono text-2xs text-brand"
            style={{ letterSpacing: "0.1em" }}
          >
            {copy.pass}
          </span>
          <span
            className="bg-muted px-[0.6rem] py-[0.35rem] font-mono text-2xs text-muted-foreground"
            style={{ letterSpacing: "0.1em" }}
          >
            {copy.token}
          </span>
          <span
            className="bg-secondary px-[0.6rem] py-[0.35rem] font-mono text-2xs text-secondary-foreground"
            style={{ letterSpacing: "0.1em" }}
          >
            {copy.deprecated}
          </span>
        </div>
      </div>

      <div
        className="flex items-center justify-between border-t border-border pt-4 font-mono text-muted-foreground uppercase"
        style={{ fontSize: "0.5625rem", letterSpacing: "0.12em" }}
      >
        <span>{copy.source}</span>
        <span className="text-brand">{copy.governed}</span>
      </div>
    </div>
  )
}

function GridSpecimen({
  copy,
}: {
  copy: DesignPrinciplesSectionContent["grid"]
}) {
  return (
    <div className="flex flex-col gap-6 p-7 sm:px-6">
      <p style={TECHNICAL_LABEL}>{copy.title}</p>
      <div className="grid h-44 grid-cols-12 gap-2" aria-label={copy.ariaLabel}>
        {Array.from({ length: 12 }, (_, index) => (
          <span
            key={index}
            aria-hidden="true"
            style={{
              background:
                index < 4 ? "rgba(89,15,41,0.08)" : "rgba(20,20,20,0.04)",
              borderTop:
                index === 0 || index === 11 ? "2px solid #590f29" : undefined,
            }}
          />
        ))}
      </div>
      <div
        className="flex justify-between font-mono text-muted-foreground"
        style={{ fontSize: "0.5625rem", letterSpacing: "0.12em" }}
      >
        <span>{copy.start}</span>
        <span>{copy.span}</span>
        <span>{copy.end}</span>
      </div>
      <p className="max-w-[30rem] text-[0.9375rem] leading-[1.6] text-muted-foreground">
        {copy.description}
      </p>
    </div>
  )
}

function SpecimenContent({
  activeTab,
  copy,
}: {
  activeTab: Tab
  copy: DesignPrinciplesSectionContent
}) {
  if (activeTab === "Tokens") return <TokensSpecimen copy={copy.tokens} />
  if (activeTab === "Components")
    return <ComponentsSpecimen copy={copy.components} />
  return <GridSpecimen copy={copy.grid} />
}

function DesignPrinciples() {
  const { language } = useLanguage()
  const copy = getLocalizedContent(designPrinciplesSectionContent, language)
  const [activeTab, setActiveTab] = useState<Tab>("Tokens")
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const selectTab = (index: number) => {
    const nextTab = TABS[index]
    if (!nextTab) return

    setActiveTab(nextTab)
    tabRefs.current[index]?.focus()
  }

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = TABS.indexOf(activeTab)
    let nextIndex: number | null = null

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % TABS.length
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + TABS.length) % TABS.length
    } else if (event.key === "Home") {
      nextIndex = 0
    } else if (event.key === "End") {
      nextIndex = TABS.length - 1
    }

    if (nextIndex !== null) {
      event.preventDefault()
      selectTab(nextIndex)
    }
  }

  return (
    <Section
      id="principles"
      aria-label={copy.ariaLabel}
      spacing="none"
      container={false}
      style={{
        padding: "clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 4vw, 4rem)",
        borderBottom: "1px solid #ece8e2",
      }}
    >
      <div className="grid grid-cols-1 gap-6 min-[900px]:grid-cols-12 min-[900px]:gap-6">
        <div className="flex flex-col gap-6 min-[900px]:sticky min-[900px]:top-24 min-[900px]:col-span-4">
          <SectionKicker>{copy.kicker}</SectionKicker>
          <h2
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: "clamp(2.2rem, 3.4vw, 3.6rem)",
              lineHeight: 0.98,
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            {copy.heading[0]}
            <br />
            {copy.heading[1]}
          </h2>
          <p className="max-w-96 leading-[1.65] text-muted-foreground">
            {copy.intro}
          </p>
          <div
            role="tablist"
            aria-label={copy.specimen}
            className="flex self-start border border-border"
          >
            {TABS.map((tab, index) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  ref={(element) => {
                    tabRefs.current[index] = element
                  }}
                  id={`design-system-tab-${tab.toLowerCase()}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`design-system-panel-${tab.toLowerCase()}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(tab)}
                  onKeyDown={handleTabKeyDown}
                  className={cn(
                    "border-r border-border px-[1.1rem] py-[0.65rem] font-mono text-[0.625rem] uppercase last:border-r-0",
                    isActive
                      ? "bg-brand text-brand-foreground"
                      : "bg-transparent text-muted-foreground",
                  )}
                  style={{ letterSpacing: "0.16em" }}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>

        <div
          id={`design-system-panel-${activeTab.toLowerCase()}`}
          role="tabpanel"
          aria-labelledby={`design-system-tab-${activeTab.toLowerCase()}`}
          tabIndex={0}
          className="border border-border bg-white min-[900px]:col-span-7 min-[900px]:col-start-6"
        >
          <div className="flex items-center justify-between border-b border-border bg-background px-5 py-[0.85rem]">
            <span
              className="font-mono text-muted-foreground uppercase"
              style={{ fontSize: "0.625rem", letterSpacing: "0.16em" }}
            >
              Specimen / {activeTab}
            </span>
            <span
              className="font-mono text-brand"
              style={{ fontSize: "0.625rem", letterSpacing: "0.16em" }}
            >
              v1.4
            </span>
          </div>
          <SpecimenContent activeTab={activeTab} copy={copy} />
        </div>
      </div>
    </Section>
  )
}

export { DesignPrinciples }
