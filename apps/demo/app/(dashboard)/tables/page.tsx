import type { Metadata } from "next"
import { Lock } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@multidash/ui/components/card"

import { OrdersExplorer } from "@/components/dashboard/orders-explorer"
import { PageHeader } from "@/components/page-header"
import { orders } from "@/lib/data"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = { title: "Tables" }

export default function TablesPage() {
  return (
    <>
      <PageHeader title="Tables" description="Search, filter and paginate tabular data.">
        <Button variant="outline" asChild>
          <a href={siteConfig.links.pro} target="_blank" rel="noreferrer">
            <Lock /> Export CSV (Pro)
          </a>
        </Button>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
          <CardDescription>All transactions from the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <OrdersExplorer orders={orders} />
        </CardContent>
      </Card>
    </>
  )
}
