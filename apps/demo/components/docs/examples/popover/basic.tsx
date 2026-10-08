import { Settings2 } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Input } from "@multidash/ui/components/input"
import { Label } from "@multidash/ui/components/label"
import { Popover, PopoverContent, PopoverTrigger } from "@multidash/ui/components/popover"

export default function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Settings2 /> Chart size
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="space-y-1">
          <h4 className="font-medium">Dimensions</h4>
          <p className="text-sm text-muted-foreground">Set the size of the chart.</p>
        </div>
        <div className="mt-4 grid gap-3">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="320px" className="col-span-2 h-8" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
