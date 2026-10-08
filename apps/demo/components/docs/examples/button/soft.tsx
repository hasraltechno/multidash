import { CircleCheck, Info, Plus, TriangleAlert, Trash2 } from "lucide-react"
import { Button } from "@multidash/ui/components/button"

// Soft variants: a light tint of the color with colored text — less emphasis than solid buttons.
export default function ButtonSoft() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="soft">
        <Plus /> New report
      </Button>
      <Button variant="soft-info">
        <Info /> Learn more
      </Button>
      <Button variant="soft-success">
        <CircleCheck /> Mark as paid
      </Button>
      <Button variant="soft-warning">
        <TriangleAlert /> Needs review
      </Button>
      <Button variant="soft-destructive">
        <Trash2 /> Remove
      </Button>
    </div>
  )
}
