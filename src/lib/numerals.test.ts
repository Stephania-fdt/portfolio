import { describe, expect, it } from "vitest"

import { formatNumeral } from "./numerals"

describe("formatNumeral", () => {
  it("zero-pads arabic numerals by default", () => {
    expect(formatNumeral(0)).toBe("01")
    expect(formatNumeral(9)).toBe("10")
  })

  it("returns roman numerals for indices within the lookup table", () => {
    expect(formatNumeral(0, "roman")).toBe("I")
    expect(formatNumeral(3, "roman")).toBe("IV")
    expect(formatNumeral(9, "roman")).toBe("X")
  })

  it("falls back to a plain arabic number when the roman table is exhausted", () => {
    expect(formatNumeral(10, "roman")).toBe("11")
  })
})
