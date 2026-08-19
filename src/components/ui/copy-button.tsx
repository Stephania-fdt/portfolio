import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"

type CopyButtonProps = {
  value: string
  label: string
  copiedLabel: string
  className?: string
}

/**
 * A discreet clipboard action next to the real `mailto:` link on
 * `/contact` — never the only way to reach the address, just a faster
 * one. Renders nothing when the Clipboard API isn't available (some
 * browsers restrict it to secure/user-activated contexts) rather than
 * showing a control that would silently fail. Keyboard-operable by
 * default (a real `<button>`), with an `aria-live` region announcing the
 * confirmation for screen-reader users the same way sighted users see
 * the icon swap.
 */
function CopyButton({ value, label, copiedLabel, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const clipboardSupported =
    typeof navigator !== "undefined" && Boolean(navigator.clipboard)

  if (!clipboardSupported) return null

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard write blocked or unsupported at click time — the real
      // mailto/tel link this button sits beside still works on its own.
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={
        className ??
        "inline-flex size-9 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors duration-(--duration-fast) ease-standard hover:border-brand hover:text-brand"
      }
    >
      {copied ? (
        <Check aria-hidden="true" className="size-4" />
      ) : (
        <Copy aria-hidden="true" className="size-4" />
      )}
      <span aria-live="polite" className="sr-only">
        {copied ? copiedLabel : ""}
      </span>
    </button>
  )
}

export { CopyButton }
