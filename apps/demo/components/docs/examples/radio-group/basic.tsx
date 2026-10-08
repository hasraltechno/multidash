import { Label } from "@multidash/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@multidash/ui/components/radio-group"

export default function RadioGroupBasic() {
  return (
    <RadioGroup defaultValue="weekly" aria-label="Report frequency">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="daily" id="daily" />
        <Label htmlFor="daily">Daily</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="weekly" id="weekly" />
        <Label htmlFor="weekly">Weekly</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="monthly" id="monthly" />
        <Label htmlFor="monthly">Monthly</Label>
      </div>
    </RadioGroup>
  )
}
