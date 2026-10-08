import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@multidash/ui/components/select"

export default function SelectGroups() {
  return (
    <Select>
      <SelectTrigger className="w-60" aria-label="Timezone">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="wib">Jakarta (WIB, UTC+7)</SelectItem>
          <SelectItem value="wita">Makassar (WITA, UTC+8)</SelectItem>
          <SelectItem value="wit">Jayapura (WIT, UTC+9)</SelectItem>
          <SelectItem value="sgt">Singapore (UTC+8)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">London (UTC+0)</SelectItem>
          <SelectItem value="cet">Berlin (UTC+1)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Americas</SelectLabel>
          <SelectItem value="est">New York (UTC−5)</SelectItem>
          <SelectItem value="pst">Los Angeles (UTC−8)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
