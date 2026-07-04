const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

export type NumeralStyle = "arabic" | "roman"

/** Zero-padded arabic ("01") by default, or roman ("I"–"X") for a distinct chapter voice. */
export function formatNumeral(index: number, style: NumeralStyle = "arabic"): string {
  if (style === "roman") return ROMAN_NUMERALS[index] ?? String(index + 1)
  return String(index + 1).padStart(2, "0")
}
