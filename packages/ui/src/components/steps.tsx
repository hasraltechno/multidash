"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { cn } from "../lib/utils"

type StepStatus = "complete" | "current" | "upcoming"

const StepContext = React.createContext<{ index: number; status: StepStatus; orientation: "horizontal" | "vertical"; last: boolean }>({
  index: 0,
  status: "upcoming",
  orientation: "horizontal",
  last: false,
})

/** A progress indicator for multi-step flows. `current` is the zero-based index of the active step. */
function Steps({
  current,
  orientation = "horizontal",
  className,
  children,
  ...props
}: React.ComponentProps<"ol"> & { current: number; orientation?: "horizontal" | "vertical" }) {
  const items = React.Children.toArray(children)
  return (
    <ol
      data-slot="steps"
      data-orientation={orientation}
      className={cn(
        "flex",
        orientation === "horizontal" ? "w-full items-start" : "flex-col",
        className
      )}
      {...props}
    >
      {items.map((child, index) => (
        <StepContext.Provider
          key={index}
          value={{
            index,
            status: index < current ? "complete" : index === current ? "current" : "upcoming",
            orientation,
            last: index === items.length - 1,
          }}
        >
          {child}
        </StepContext.Provider>
      ))}
    </ol>
  )
}

function Step({
  title,
  description,
  className,
  ...props
}: Omit<React.ComponentProps<"li">, "title"> & { title: React.ReactNode; description?: React.ReactNode }) {
  const { index, status, orientation, last } = React.useContext(StepContext)
  const horizontal = orientation === "horizontal"

  return (
    <li
      data-slot="step"
      data-status={status}
      aria-current={status === "current" ? "step" : undefined}
      className={cn(
        "relative flex",
        horizontal ? "flex-1 flex-col items-center text-center" : "gap-4 pb-8 last:pb-0",
        className
      )}
      {...props}
    >
      {!last && (
        <span
          aria-hidden
          className={cn(
            "absolute bg-border",
            status === "complete" && "bg-primary",
            horizontal ? "top-4 left-[calc(50%+1.25rem)] h-0.5 w-[calc(100%-2.5rem)]" : "top-9 left-4 h-[calc(100%-2.5rem)] w-0.5 -translate-x-1/2"
          )}
        />
      )}
      <span
        className={cn(
          "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold tabular-nums",
          status === "complete" && "border-primary bg-primary text-primary-foreground",
          status === "current" && "border-primary bg-background text-primary-text",
          status === "upcoming" && "border-border bg-background text-muted-foreground"
        )}
      >
        {status === "complete" ? <CheckIcon className="size-4" aria-hidden /> : index + 1}
      </span>
      <div className={cn(horizontal ? "mt-2 px-2" : "pt-1")}>
        <p className={cn("text-sm font-medium", status === "upcoming" && "text-muted-foreground")}>
          {title}
          {status === "complete" && <span className="sr-only"> (completed)</span>}
        </p>
        {description && <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>}
      </div>
    </li>
  )
}

export { Steps, Step }
