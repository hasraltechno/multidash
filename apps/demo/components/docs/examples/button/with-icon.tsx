import { Download, Loader2, Trash2 } from "lucide-react"
import { Button } from "@multidash/ui/components/button"

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline">
        <Download /> Export
      </Button>
      <Button variant="destructive">
        <Trash2 /> Delete
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" /> Saving...
      </Button>
    </div>
  )
}
