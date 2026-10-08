import { Info } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@multidash/ui/components/tooltip"

// Wrap your app (or a subtree) in <TooltipProvider> once — Multidash does this in app/layout.tsx.
export default function TooltipBasic() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <Info /> Hover me
        </Button>
      </TooltipTrigger>
      <TooltipContent>Tooltips also open on keyboard focus</TooltipContent>
    </Tooltip>
  )
}
