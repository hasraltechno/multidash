"use client"

import { useState } from "react"
import { Label } from "@multidash/ui/components/label"
import { Slider } from "@multidash/ui/components/slider"

// Pass two values to get two thumbs.
export default function SliderRange() {
  const [range, setRange] = useState([49, 199])

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center justify-between">
        <Label>Price range</Label>
        <span className="text-sm text-muted-foreground tabular-nums">
          ${range[0]} – ${range[1]}
        </span>
      </div>
      <Slider value={range} onValueChange={setRange} min={0} max={300} step={10} minStepsBetweenThumbs={2} aria-label="Price range" />
    </div>
  )
}
