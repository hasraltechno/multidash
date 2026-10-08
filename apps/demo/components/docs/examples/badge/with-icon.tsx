import { CircleCheck, Clock, CircleX } from "lucide-react"
import { Badge } from "@multidash/ui/components/badge"

export default function BadgeWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="success">
        <CircleCheck /> Paid
      </Badge>
      <Badge variant="warning">
        <Clock /> Pending
      </Badge>
      <Badge variant="destructive">
        <CircleX /> Failed
      </Badge>
    </div>
  )
}
