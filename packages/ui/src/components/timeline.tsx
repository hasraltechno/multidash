import * as React from "react"

import { cn } from "../lib/utils"

function Timeline({ className, ...props }: React.ComponentProps<"ol">) {
  return <ol data-slot="timeline" className={cn("relative", className)} {...props} />
}

function TimelineItem({
  icon,
  className,
  children,
  ...props
}: React.ComponentProps<"li"> & {
  /** An icon element; defaults to a dot. Color it with the iconClassName on TimelineDot. */
  icon?: React.ReactNode
}) {
  return (
    <li data-slot="timeline-item" className={cn("relative flex gap-4 pb-6 last:pb-0", className)} {...props}>
      {/* Connector line */}
      <span aria-hidden className="absolute top-8 bottom-0 left-4 w-px -translate-x-1/2 bg-border [li:last-child>&]:hidden" />
      <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-card text-muted-foreground [&_svg]:size-4">
        {icon ?? <span className="size-2 rounded-full bg-primary" />}
      </span>
      <div className="min-w-0 flex-1 pt-1">{children}</div>
    </li>
  )
}

function TimelineTitle({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="timeline-title" className={cn("text-sm font-medium", className)} {...props} />
}

function TimelineTime({ className, ...props }: React.ComponentProps<"time">) {
  return (
    <time
      data-slot="timeline-time"
      className={cn("text-xs text-muted-foreground tabular-nums", className)}
      {...props}
    />
  )
}

function TimelineDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="timeline-description" className={cn("mt-1 text-sm text-muted-foreground", className)} {...props} />
  )
}

export { Timeline, TimelineItem, TimelineTitle, TimelineTime, TimelineDescription }
