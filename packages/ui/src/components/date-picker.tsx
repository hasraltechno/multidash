"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

type DatePickerProps = {
  /** Controlled value. Omit it (and use defaultValue) for an uncontrolled picker. */
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  placeholder?: string
  /** BCP 47 locale for the button label, e.g. "id-ID". */
  locale?: string
  formatOptions?: Intl.DateTimeFormatOptions
  /** Disable days, e.g. `{ before: new Date() }` — any DayPicker matcher. */
  disabled?: React.ComponentProps<typeof Calendar>["disabled"]
  id?: string
  className?: string
  "aria-label"?: string
}

function DatePicker({
  value,
  defaultValue,
  onValueChange,
  placeholder = "Pick a date",
  locale = "en-US",
  formatOptions = { dateStyle: "medium" },
  disabled,
  id,
  className,
  "aria-label": ariaLabel,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [internal, setInternal] = React.useState<Date | undefined>(defaultValue)
  const current = value === undefined && onValueChange === undefined ? internal : value

  function select(date: Date | undefined) {
    setInternal(date)
    onValueChange?.(date)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          aria-label={ariaLabel}
          className={cn("w-full justify-start font-normal", !current && "text-muted-foreground", className)}
        >
          <CalendarIcon aria-hidden />
          {current ? new Intl.DateTimeFormat(locale, formatOptions).format(current) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={current} onSelect={select} defaultMonth={current} disabled={disabled} autoFocus />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
