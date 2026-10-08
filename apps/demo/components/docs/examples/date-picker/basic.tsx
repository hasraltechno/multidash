"use client"

import { useState } from "react"
import { DatePicker } from "@multidash/ui/components/date-picker"
import { Label } from "@multidash/ui/components/label"

export default function DatePickerBasic() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="due-date">Due date</Label>
      <DatePicker id="due-date" value={date} onValueChange={setDate} />
    </div>
  )
}
