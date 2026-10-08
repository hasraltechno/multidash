"use client"

import { useState } from "react"
import { DatePicker } from "@multidash/ui/components/date-picker"
import { Label } from "@multidash/ui/components/label"

// The label follows any locale; past days are disabled with a DayPicker matcher.
export default function DatePickerLocale() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 11, 24))

  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="tanggal">Tanggal pengiriman</Label>
      <DatePicker
        id="tanggal"
        value={date}
        onValueChange={setDate}
        locale="id-ID"
        formatOptions={{ weekday: "long", day: "numeric", month: "long", year: "numeric" }}
        placeholder="Pilih tanggal"
        disabled={{ before: new Date(2026, 9, 8) }}
      />
    </div>
  )
}
