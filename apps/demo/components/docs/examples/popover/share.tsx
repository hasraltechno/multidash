import { Share2 } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Input } from "@multidash/ui/components/input"
import { Popover, PopoverContent, PopoverTrigger } from "@multidash/ui/components/popover"

export default function PopoverShare() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <Share2 /> Share
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80">
        <h4 className="font-medium">Share this report</h4>
        <p className="mt-1 text-sm text-muted-foreground">Anyone with the link can view it.</p>
        <div className="mt-3 flex gap-2">
          <Input readOnly defaultValue="https://multidash.app/r/q3-sales" aria-label="Share link" className="h-8" />
          <Button size="sm" variant="secondary">
            Copy
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
