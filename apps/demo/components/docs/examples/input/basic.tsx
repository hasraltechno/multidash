import { Input } from "@multidash/ui/components/input"
import { Label } from "@multidash/ui/components/label"

export default function InputBasic() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
      <p className="text-xs text-muted-foreground">We'll never share your email.</p>
    </div>
  )
}
