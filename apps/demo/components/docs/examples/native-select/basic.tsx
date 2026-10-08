import { Label } from "@multidash/ui/components/label"
import { NativeSelect } from "@multidash/ui/components/native-select"

export default function NativeSelectBasic() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="country">Country</Label>
      <NativeSelect id="country" defaultValue="id">
        <option value="id">Indonesia</option>
        <option value="my">Malaysia</option>
        <option value="sg">Singapore</option>
        <option value="us">United States</option>
      </NativeSelect>
    </div>
  )
}
