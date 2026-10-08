import { formatNumber } from "@/lib/format"

type Source = { source: string; visitors: number }

/** Single-series horizontal bars, every bar directly labeled at its tip. */
export function TrafficSources({ data }: { data: Source[] }) {
  const max = Math.max(...data.map((d) => d.visitors))

  return (
    <ul className="space-y-4">
      {data.map((d) => (
        <li key={d.source}>
          <div className="mb-1.5 flex items-baseline justify-between text-sm">
            <span>{d.source}</span>
            <span className="font-medium tabular-nums">{formatNumber(d.visitors)}</span>
          </div>
          <div className="h-2 w-full">
            <div
              className="h-full rounded-r-[4px] bg-primary"
              style={{ width: `${(d.visitors / max) * 100}%` }}
              title={`${d.source}: ${formatNumber(d.visitors)} visitors`}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
