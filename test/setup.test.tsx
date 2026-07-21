import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { cn } from "@/lib/utils"

describe("scaffold", () => {
  it("merges class names with cn", () => {
    expect(cn("a", false && "b", "c")).toBe("a c")
  })

  it("renders a component into jsdom", () => {
    render(<h1>Webber</h1>)
    expect(screen.getByRole("heading", { name: "Webber" })).toBeInTheDocument()
  })
})
