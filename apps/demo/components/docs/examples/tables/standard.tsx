"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Input } from "@multidash/ui/components/input"
import { NativeSelect } from "@multidash/ui/components/native-select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@multidash/ui/components/table"

import { OrderStatusBadge } from "@/components/dashboard/order-status-badge"
import { orders, type OrderStatus } from "@/lib/data"
import { formatCurrency } from "@/lib/format"

const PAGE_SIZE = 8

// Search, filter and pagination with plain React state — no table library needed.
export default function StandardTable() {
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
  }, [query, status])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const current = Math.min(page, pageCount - 1)
  const rows = filtered.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE)

  return (
    <div className="w-full space-y-4">
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

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-4">Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="pr-4 text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length ? (
              rows.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="pl-4 font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="text-muted-foreground tabular-nums">{order.date}</TableCell>
                  <TableCell>
                    <OrderStatusBadge status={order.status} />
                  </TableCell>
                  <TableCell className="pr-4 text-right tabular-nums">{formatCurrency(order.amount)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No orders match your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>{filtered.length} order(s)</p>
        <div className="flex items-center gap-2">
          <span className="tabular-nums">
            Page {current + 1} of {pageCount}
          </span>
          <Button variant="outline" size="icon-sm" onClick={() => setPage(current - 1)} disabled={current === 0} aria-label="Previous page">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon-sm" onClick={() => setPage(current + 1)} disabled={current >= pageCount - 1} aria-label="Next page">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
