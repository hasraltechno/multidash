import { Avatar, AvatarFallback } from "@multidash/ui/components/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@multidash/ui/components/table"

import type { Order } from "@/lib/data"
import { formatCurrency } from "@/lib/format"

import { OrderStatusBadge } from "./order-status-badge"

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
}

export function OrdersTable({ orders, compact = false }: { orders: Order[]; compact?: boolean }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          {!compact && <TableHead>Product</TableHead>}
          {!compact && <TableHead>Date</TableHead>}
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="size-8">
                  <AvatarFallback>{initials(order.customer)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{order.customer}</p>
                  <p className="text-xs text-muted-foreground">{order.email}</p>
                </div>
              </div>
            </TableCell>
            {!compact && <TableCell>{order.product}</TableCell>}
            {!compact && (
              <TableCell className="text-muted-foreground tabular-nums">{order.date}</TableCell>
            )}
            <TableCell>
              <OrderStatusBadge status={order.status} />
            </TableCell>
            <TableCell className="text-right font-medium tabular-nums">
              {formatCurrency(order.amount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
