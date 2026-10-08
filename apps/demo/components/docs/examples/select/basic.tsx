import { Label } from "@multidash/ui/components/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@multidash/ui/components/select"

export default function SelectBasic() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="status">Status</Label>
      <Select defaultValue="active">
        <SelectTrigger id="status" className="w-full">
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="paused">Paused</SelectItem>
          <SelectItem value="archived">Archived</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
