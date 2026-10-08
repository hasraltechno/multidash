type TooltipItem = {
  name?: string | number
  value?: number | string | ReadonlyArray<number | string>
  color?: string
  dataKey?: string | number | ((obj: unknown) => unknown)
}

type ChartTooltipProps = {
  active?: boolean
  payload?: ReadonlyArray<TooltipItem>
  label?: string | number
  /** Human labels per dataKey. */
  labels?: Record<string, string>
  formatter?: (value: number) => string
}

/** Shared tooltip: text stays in text tokens, identity comes from the swatch. */
export function ChartTooltip({
  active,
  payload,
  label,
  labels,
  formatter = (v) => v.toLocaleString("en-US"),
}: ChartTooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div className="min-w-36 rounded-lg border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="mb-1.5 font-medium text-foreground">{label}</p>
      <ul className="space-y-1">
        {payload.map((item) => {
          const key = String(item.dataKey ?? item.name)
          return (
            <li key={key} className="flex items-center gap-2">
              <span className="size-2.5 shrink-0 rounded-sm" style={{ background: item.color }} />
              <span className="text-muted-foreground">{labels?.[key] ?? item.name}</span>
              <span className="ml-auto font-medium text-foreground tabular-nums">
                {formatter(Number(item.value))}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
