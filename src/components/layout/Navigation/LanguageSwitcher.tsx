import { Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/i18n"

type LanguageSwitcherProps = {
  className?: string
  variant?: "segmented" | "compact"
  fullWidth?: boolean
}

const OPTIONS = ["fr", "en"] as const

function LanguageSwitcher({
  className,
  variant = "segmented",
  fullWidth = false,
}: LanguageSwitcherProps) {
  const { language, setLanguage, copy } = useLanguage()

  if (variant === "compact") {
    const nextLanguage = language === "fr" ? "en" : "fr"
    return (
      <button
        type="button"
        onClick={() => setLanguage(nextLanguage)}
        aria-label={
          nextLanguage === "fr"
            ? copy.controls.switchToFrench
            : copy.controls.switchToEnglish
        }
        title={copy.controls.changeLanguage}
        className={cn(
          "inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-md border border-brand-border bg-brand-soft px-2.5 font-mono text-xs font-semibold tracking-wider text-brand transition-[background-color,border-color,color] duration-200 ease-standard hover:border-brand hover:bg-brand hover:text-brand-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          className,
        )}
      >
        <Globe aria-hidden="true" className="size-4" />
        <span>{language.toUpperCase()}</span>
      </button>
    )
  }

  return (
    <div
      role="group"
      aria-label={copy.controls.chooseLanguage}
      title={copy.controls.changeLanguage}
      className={cn(
        "inline-flex min-h-11 items-stretch overflow-hidden rounded-md border border-brand-border bg-background p-0.5 font-mono text-xs tracking-wider shadow-xs",
        fullWidth && "w-full",
        className,
      )}
    >
      {OPTIONS.map((option) => {
        const active = language === option
        const ariaLabel =
          option === "en"
            ? copy.controls.switchToEnglish
            : copy.controls.switchToFrench

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLanguage(option)}
            aria-label={ariaLabel}
            aria-pressed={active}
            className={cn(
              "relative inline-flex min-h-11 min-w-11 flex-1 items-center justify-center rounded-sm border px-3 font-medium transition-[background-color,border-color,color] duration-200 ease-standard focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand",
              active
                ? "border-brand bg-brand font-bold text-brand-foreground shadow-xs"
                : "border-transparent bg-transparent text-foreground hover:border-brand-border hover:bg-brand-soft hover:text-brand",
            )}
          >
            {option.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export { LanguageSwitcher }
