"use client"

import { useState } from "react"
import { Calendar } from "@multidash/ui/components/calendar"

export default function CalendarBasic() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 9, 14))

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      defaultMonth={new Date(2026, 9)}
      className="rounded-lg border shadow-xs"
    />
  )
}
