"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { useReducedMotion } from "@/lib/use-reduced-motion"

import { ChartDataTable } from "./chart-data-table"
import { ChartTooltip } from "./chart-tooltip"

type Point = { day: string; online: number; store: number }

const series = [
  { key: "online", label: "Online", color: "var(--chart-1)" },
  { key: "store", label: "In store", color: "var(--chart-2)" },
] as const

const labels = Object.fromEntries(series.map((s) => [s.key, s.label]))

export function SalesChart({ data }: { data: Point[] }) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="w-full">
      <ul className="mb-4 flex gap-4 text-xs text-muted-foreground" aria-label="Legend">
        {series.map((s) => (
          <li key={s.key} className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm" style={{ background: s.color }} />
            {s.label}
          </li>
        ))}
      </ul>
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={2} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fill: "var(--chart-axis)", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={32}
              tick={{ fill: "var(--chart-axis)", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "var(--muted)", opacity: 0.6 }}
              content={<ChartTooltip labels={labels} />}
            />
            {series.map((s) => (
              <Bar
                key={s.key}
                dataKey={s.key}
                name={s.label}
                fill={s.color}
                radius={[4, 4, 0, 0]}
                maxBarSize={16}
                isAnimationActive={!reducedMotion}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable
        caption="Orders per day by channel"
        rows={data}
        columns={[
          { key: "day", label: "Day" },
          { key: "online", label: "Online" },
          { key: "store", label: "In store" },
        ]}
      />
    </div>
  )
}
