"use client"

import Link from "next/link"
import { CircleCheck, CircleX, Clock, Copy, Eye, Lock, MoreHorizontal, RotateCcw, Trash2 } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import {
  createDataTableColumnHelper,
  DataTable,
  DataTableColumnHeader,
  dataTableSelectColumn,
  type DataTableFilter,
} from "@multidash/ui/components/data-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@multidash/ui/components/dropdown-menu"
import { toast } from "@multidash/ui/components/toast"

import { OrderStatusBadge } from "@/components/dashboard/order-status-badge"
import { orders, type Order } from "@/lib/data"
import { formatCurrency } from "@/lib/format"

const helper = createDataTableColumnHelper<Order>()

const columns = helper.columns([
  dataTableSelectColumn<Order>(),
  helper.accessor("id", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Invoice" />,
    cell: ({ getValue }) => <span className="font-medium">{getValue()}</span>,
    enableHiding: false,
  }),
  helper.accessor("customer", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Customer" />,
    cell: ({ row }) => (
      <div>
        <p className="font-medium">{row.original.customer}</p>
        <p className="text-xs text-muted-foreground">{row.original.email}</p>
      </div>
    ),
  }),
  helper.accessor("product", { header: "Product", filterFn: "oneOf" }),
  helper.accessor("date", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
    cell: ({ getValue }) => <span className="text-muted-foreground tabular-nums">{getValue()}</span>,
  }),
  helper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => <OrderStatusBadge status={getValue()} />,
    filterFn: "oneOf",
  }),
  helper.accessor("amount", {
    header: ({ column }) => (
      <div className="text-right">
        <DataTableColumnHeader column={column} title="Amount" className="-mr-3" />
      </div>
    ),
    cell: ({ getValue }) => <div className="text-right tabular-nums">{formatCurrency(getValue())}</div>,
  }),
  helper.display({
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${row.original.id}`}>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{row.original.id}</DropdownMenuLabel>
          <DropdownMenuItem
            onSelect={() => {
              void navigator.clipboard?.writeText(row.original.id)
              toast.success("Invoice ID copied")
            }}
          >
            <Copy /> Copy invoice ID
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => toast(`Opening ${row.original.id}`)}>
            <Eye /> View details
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onSelect={() => toast.error(`${row.original.id} deleted (demo)`)}>
            <Trash2 /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  }),
])

const filters: DataTableFilter[] = [
  {
    column: "status",
    title: "Status",
    options: [
      { label: "Paid", value: "paid", icon: CircleCheck },
      { label: "Pending", value: "pending", icon: Clock },
      { label: "Refunded", value: "refunded", icon: RotateCcw },
      { label: "Failed", value: "failed", icon: CircleX },
    ],
  },
  {
    column: "product",
    title: "Product",
    options: [
      { label: "Personal License", value: "Personal License" },
      { label: "Team License", value: "Team License" },
      { label: "Pro License", value: "Pro License" },
    ],
  },
]

export default function DataTableAdvanced() {
  return (
    <DataTable
      className="w-full"
      columns={columns}
      data={orders}
      getRowId={(row) => row.id}
      searchPlaceholder="Search orders..."
      filters={filters}
      toolbar={(table) => {
        const selected = Object.keys(table.state.rowSelection).length
        return (
          <>
            {selected > 0 && (
              <Button
                variant="destructive"
                size="sm"
                className="h-8"
                onClick={() => {
                  toast.error(`${selected} order(s) deleted (demo)`)
                  table.resetRowSelection()
                }}
              >
                <Trash2 /> Delete ({selected})
              </Button>
            )}
            <Button variant="outline" size="sm" className="h-8" asChild>
              <Link href="/pricing">
                <Lock /> Export CSV
              </Link>
            </Button>
          </>
        )
      }}
    />
  )
}
