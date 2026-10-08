"use client"

import { useState } from "react"
import { Combobox } from "@multidash/ui/components/combobox"
import { Label } from "@multidash/ui/components/label"

const cities = [
  { value: "jakarta", label: "Jakarta" },
  { value: "surabaya", label: "Surabaya" },
  { value: "bandung", label: "Bandung" },
  { value: "medan", label: "Medan" },
  { value: "semarang", label: "Semarang" },
  { value: "makassar", label: "Makassar" },
  { value: "denpasar", label: "Denpasar" },
  { value: "yogyakarta", label: "Yogyakarta" },
]

export default function ComboboxBasic() {
  const [city, setCity] = useState("bandung")

  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="city">City</Label>
      <Combobox
        id="city"
        options={cities}
        value={city}
        onValueChange={setCity}
        placeholder="Select a city"
        searchPlaceholder="Search cities..."
      />
      <p className="text-xs text-muted-foreground">Selected value: {city || "none"}</p>
    </div>
  )
}
