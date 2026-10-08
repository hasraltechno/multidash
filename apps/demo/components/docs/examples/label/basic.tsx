import { Input } from "@multidash/ui/components/input"
import { Label } from "@multidash/ui/components/label"

export default function LabelBasic() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="full-name">Full name</Label>
      <Input id="full-name" placeholder="Jane Doe" />
    </div>
  )
}
