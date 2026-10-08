import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@multidash/ui/components/card"
import { Progress } from "@multidash/ui/components/progress"

import { RevenueChart } from "@/components/charts/revenue-chart"
import { SalesChart } from "@/components/charts/sales-chart"
import { OrdersTable } from "@/components/dashboard/orders-table"
import { StatCard } from "@/components/dashboard/stat-card"
import { TrafficSources } from "@/components/dashboard/traffic-sources"
import { PageHeader } from "@/components/page-header"
import { monthlyRevenue, orders, stats, topProducts, trafficSources, weeklySales } from "@/lib/data"
import { formatCurrency, formatNumber } from "@/lib/format"

export default function OverviewPage() {
  const totalRevenue = monthlyRevenue.reduce((sum, m) => sum + m.revenue, 0)
  const topSales = Math.max(...topProducts.map((p) => p.sales))

  return (
    <>
      <PageHeader title="Overview" description="Here's what's happening with your store today.">
        <Button variant="outline">
          <Download /> Export
        </Button>
      </PageHeader>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Key metrics">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>Monthly revenue, Jan – Dec 2026</CardDescription>
            <CardAction className="text-right">
              <p className="text-xl font-semibold">{formatCurrency(totalRevenue)}</p>
              <p className="text-xs text-muted-foreground">Year to date</p>
            </CardAction>
          </CardHeader>
          <CardContent className="pl-2">
            <RevenueChart data={monthlyRevenue} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Orders this week</CardTitle>
            <CardDescription>Online vs in-store orders per day</CardDescription>
          </CardHeader>
          <CardContent>
            <SalesChart data={weeklySales} />
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Recent orders</CardTitle>
            <CardDescription>The latest transactions from your customers</CardDescription>
            <CardAction>
              <Button variant="outline" size="sm" asChild>
                <Link href="/tables">View all</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <OrdersTable orders={orders.slice(0, 5)} compact />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic sources</CardTitle>
              <CardDescription>Visitors in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <TrafficSources data={trafficSources} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top products</CardTitle>
              <CardDescription>By units sold</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topProducts.map((p) => (
                <div key={p.name} className="space-y-1.5">
                  <div className="flex items-baseline justify-between text-sm">
                    <span>{p.name}</span>
                    <span className="text-muted-foreground tabular-nums">
                      {formatNumber(p.sales)} sold
                    </span>
                  </div>
                  <Progress value={(p.sales / topSales) * 100} aria-label={`${p.name} sales`} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
