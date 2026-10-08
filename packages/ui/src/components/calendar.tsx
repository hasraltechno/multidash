"use client"

import * as React from "react"
import { DayPicker, getDefaultClassNames, type DayButtonProps } from "@daypicker/react"
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "../lib/utils"
import { buttonVariants } from "./button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaults = getDefaultClassNames()

  return (
    <DayPicker
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      className={cn("w-fit bg-background p-3 [--cell-size:2.25rem] [[data-slot=popover-content]_&]:bg-transparent", className)}
      classNames={{
        root: cn("w-fit", defaults.root),
        months: cn("relative flex flex-col gap-4 sm:flex-row", defaults.months),
        month: cn("flex w-full flex-col gap-4", defaults.month),
        nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaults.nav),
        button_previous: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaults.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaults.button_next
        ),
        month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaults.month_caption),
        caption_label: cn("text-sm font-medium select-none", defaults.caption_label),
        month_grid: "w-full border-collapse",
        weekdays: cn("flex", defaults.weekdays),
        weekday: cn("flex-1 text-[0.8rem] font-normal text-muted-foreground select-none", defaults.weekday),
        week: cn("mt-1 flex w-full", defaults.week),
        day: cn("group/day relative aspect-square size-(--cell-size) p-0 text-center select-none", defaults.day),
        range_start: cn("rounded-l-md bg-accent", defaults.range_start),
        range_middle: cn("rounded-none bg-accent", defaults.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaults.range_end),
        today: cn("[&>button]:font-semibold [&>button]:text-primary-text", defaults.today),
        outside: cn("text-muted-foreground opacity-60", defaults.outside),
        disabled: cn("text-muted-foreground opacity-50", defaults.disabled),
        hidden: cn("invisible", defaults.hidden),
        ...classNames,
      }}
      components={{
        Chevron: ({ className, orientation }) => {
          const Icon =
            orientation === "left" ? ChevronLeftIcon : orientation === "right" ? ChevronRightIcon : ChevronDownIcon
          return <Icon className={cn("size-4", className)} aria-hidden />
        },
        DayButton: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({ className, day, modifiers, ...props }: DayButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  const single = modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle

  return (
    <button
      ref={ref}
      data-selected-single={single || undefined}
      data-range-start={modifiers.range_start || undefined}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      className={cn(
        "flex size-(--cell-size) items-center justify-center rounded-md text-sm font-normal tabular-nums outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "data-[selected-single]:bg-primary data-[selected-single]:text-primary-foreground data-[selected-single]:hover:bg-primary/90",
        "data-[range-start]:bg-primary data-[range-start]:text-primary-foreground data-[range-end]:bg-primary data-[range-end]:text-primary-foreground",
        "data-[range-middle]:rounded-none data-[range-middle]:bg-transparent data-[range-middle]:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
export type { DateRange } from "@daypicker/react"
