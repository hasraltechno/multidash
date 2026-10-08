import { CircleCheck, CircleX, Clock, RotateCcw } from "lucide-react"
import { Badge } from "@multidash/ui/components/badge"

import type { OrderStatus } from "@/lib/data"

// Status is always icon + label — never color alone.
const statusMap = {
  paid: { label: "Paid", icon: CircleCheck, variant: "success" },
  pending: { label: "Pending", icon: Clock, variant: "warning" },
  refunded: { label: "Refunded", icon: RotateCcw, variant: "secondary" },
  failed: { label: "Failed", icon: CircleX, variant: "destructive" },
} as const

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const { label, icon: Icon, variant } = statusMap[status]
  return (
    <Badge variant={variant}>
      <Icon aria-hidden />
      {label}
    </Badge>
  )
}
