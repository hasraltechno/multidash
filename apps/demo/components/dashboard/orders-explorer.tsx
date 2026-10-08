"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Input } from "@multidash/ui/components/input"
import { NativeSelect } from "@multidash/ui/components/native-select"

import type { Order, OrderStatus } from "@/lib/data"

import { OrdersTable } from "./orders-table"

const PAGE_SIZE = 6

export function OrdersExplorer({ orders }: { orders: Order[] }) {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState<OrderStatus | "all">("all")
  const [page, setPage] = useState(0)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return orders.filter(
      (o) =>
        (status === "all" || o.status === status) &&
        (!q || [o.id, o.customer, o.email, o.product].some((v) => v.toLowerCase().includes(q)))
    )
  }, [orders, query, status])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const current = Math.min(page, pageCount - 1)
  const rows = filtered.slice(current * PAGE_SIZE, current * PAGE_SIZE + PAGE_SIZE)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search invoice, customer, product..."
            className="pl-9"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(0)
            }}
            aria-label="Search orders"
          />
        </div>
        <div className="sm:w-44">
          <NativeSelect
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as OrderStatus | "all")
              setPage(0)
            }}
            aria-label="Filter by status"
          >
            <option value="all">All statuses</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="refunded">Refunded</option>
            <option value="failed">Failed</option>
          </NativeSelect>
        </div>
      </div>

      {rows.length > 0 ? (
        <OrdersTable orders={rows} />
      ) : (
        <p className="py-12 text-center text-sm text-muted-foreground">No orders match your filters.</p>
      )}

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>
          {filtered.length} order{filtered.length === 1 ? "" : "s"}
        </p>
        <div className="flex items-center gap-2">
          <span>
            Page {current + 1} of {pageCount}
          </span>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setPage(current - 1)}
            disabled={current === 0}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setPage(current + 1)}
            disabled={current >= pageCount - 1}
            aria-label="Next page"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
