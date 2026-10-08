import { CircleCheck, Info, Sparkles, TriangleAlert, Trash2 } from "lucide-react"
import { Button } from "@multidash/ui/components/button"

export default function ButtonStatus() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="info">
        <Info /> Details
      </Button>
      <Button variant="success">
        <CircleCheck /> Approve
      </Button>
      <Button variant="warning">
        <TriangleAlert /> Review
      </Button>
      <Button variant="highlight">
        <Sparkles /> Upgrade
      </Button>
      <Button variant="destructive">
        <Trash2 /> Delete
      </Button>
    </div>
  )
}
