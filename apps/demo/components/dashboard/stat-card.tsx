import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@multidash/ui/components/card"
import { cn } from "@multidash/ui/lib/utils"

import type { Stat } from "@/lib/data"

export function StatCard({ stat }: { stat: Stat }) {
  const up = stat.delta >= 0
  const good = up === stat.upIsGood
  const Arrow = up ? ArrowUpRight : ArrowDownRight

  return (
    <Card className="gap-0 py-5">
      <CardContent className="px-5">
        <p className="text-sm text-muted-foreground">{stat.label}</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight">{stat.value}</p>
        <p className="mt-2 flex items-center gap-1 text-xs">
          <span
            className={cn(
              "inline-flex items-center gap-0.5 font-medium",
              good ? "text-success" : "text-destructive"
            )}
          >
            <Arrow className="size-3.5" aria-hidden />
            {up ? "+" : ""}
            {stat.delta}%
          </span>
          <span className="text-muted-foreground">vs last month</span>
        </p>
      </CardContent>
    </Card>
  )
}
