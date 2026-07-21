"use client"

import * as React from "react"
import { Clock } from "lucide-react"

const FORMATTER = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Europe/London",
})

export function LocalTime({ className }: { className?: string }) {
  // Rendered empty on the server: the clock would be stale by hydration and
  // would mismatch the client's first paint.
  const [time, setTime] = React.useState<string | null>(null)

  React.useEffect(() => {
    const tick = () => setTime(FORMATTER.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={className} suppressHydrationWarning>
      <Clock size={13} aria-hidden="true" className="mr-2 inline-block" />
      London
      <span className="ml-2 tabular-nums">{time ?? "--:--"}</span>
    </span>
  )
}
