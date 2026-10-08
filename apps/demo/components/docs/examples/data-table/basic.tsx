"use client"

import {
  createDataTableColumnHelper,
  DataTable,
  DataTableColumnHeader,
} from "@multidash/ui/components/data-table"

type Payment = { id: string; email: string; amount: number; status: string }

const payments: Payment[] = [
  { id: "p1", email: "olivia@example.com", amount: 316, status: "Success" },
  { id: "p2", email: "budi@example.com", amount: 242, status: "Success" },
  { id: "p3", email: "liam@example.com", amount: 837, status: "Processing" },
  { id: "p4", email: "ayu@example.com", amount: 874, status: "Success" },
  { id: "p5", email: "noah@example.com", amount: 721, status: "Failed" },
  { id: "p6", email: "mia@example.com", amount: 129, status: "Success" },
]

// Define columns once, outside the component, so they stay stable between renders.
const helper = createDataTableColumnHelper<Payment>()

const columns = helper.columns([
  helper.accessor("email", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
  }),
  helper.accessor("status", { header: "Status" }),
  helper.accessor("amount", {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    cell: ({ getValue }) => <span className="tabular-nums">${getValue()}</span>,
  }),
])

export default function DataTableBasic() {
  return (
    <DataTable
      className="w-full"
      columns={columns}
      data={payments}
      getRowId={(row) => row.id}
      searchPlaceholder="Search payments..."
      pageSizes={[5, 10]}
    />
  )
}
