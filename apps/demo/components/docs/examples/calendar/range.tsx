"use client"

import { useState } from "react"
import { Calendar, type DateRange } from "@multidash/ui/components/calendar"

export default function CalendarRange() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 9, 8),
    to: new Date(2026, 9, 17),
  })

  return (
    <Calendar
      mode="range"
      numberOfMonths={2}
      selected={range}
      onSelect={setRange}
      defaultMonth={new Date(2026, 9)}
      className="rounded-lg border shadow-xs"
    />
  )
}
