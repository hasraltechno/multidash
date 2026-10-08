import { Input } from "@multidash/ui/components/input"
import { Label } from "@multidash/ui/components/label"

export default function InputStates() {
  return (
    <div className="grid w-full max-w-sm gap-5">
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="jane" aria-invalid aria-describedby="username-error" />
        <p id="username-error" className="text-xs text-destructive">
          This username is already taken.
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="disabled-input">Disabled</Label>
        <Input id="disabled-input" placeholder="Not editable" disabled />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="avatar">Avatar</Label>
        <Input id="avatar" type="file" />
      </div>
    </div>
  )
}
