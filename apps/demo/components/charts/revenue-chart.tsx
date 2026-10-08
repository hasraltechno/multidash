"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { formatCompactCurrency, formatCurrency } from "@/lib/format"

import { useReducedMotion } from "@/lib/use-reduced-motion"

import { ChartDataTable } from "./chart-data-table"
import { ChartTooltip } from "./chart-tooltip"

type Point = { month: string; revenue: number }

export function RevenueChart({ data }: { data: Point[] }) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
          <XAxis
            dataKey="month"
            interval="equidistantPreserveStart"
            minTickGap={8}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tick={{ fill: "var(--chart-axis)", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={48}
            tickFormatter={formatCompactCurrency}
            tick={{ fill: "var(--chart-axis)", fontSize: 12 }}
          />
          <Tooltip
            cursor={{ stroke: "var(--chart-axis)", strokeWidth: 1 }}
            content={<ChartTooltip labels={{ revenue: "Revenue" }} formatter={formatCurrency} />}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="var(--primary)"
            strokeWidth={2}
            fill="var(--primary)"
            fillOpacity={0.1}
            isAnimationActive={!reducedMotion}
            activeDot={{ r: 5, strokeWidth: 2, stroke: "var(--card)" }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <ChartDataTable
        caption="Monthly revenue"
        rows={data}
        columns={[
          { key: "month", label: "Month" },
          { key: "revenue", label: "Revenue (USD)" },
        ]}
      />
    </div>
  )
}
