import { Search } from "lucide-react"
import { Input } from "@multidash/ui/components/input"

export default function InputWithIcon() {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input type="search" placeholder="Search..." className="pl-9" aria-label="Search" />
    </div>
  )
}
