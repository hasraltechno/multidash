"use client"

import { useState } from "react"
import { Volume2 } from "lucide-react"
import { Slider } from "@multidash/ui/components/slider"

export default function SliderBasic() {
  const [volume, setVolume] = useState([60])

  return (
    <div className="flex w-full max-w-sm items-center gap-4">
      <Volume2 className="size-5 text-muted-foreground" aria-hidden />
      <Slider value={volume} onValueChange={setVolume} max={100} step={1} aria-label="Volume" />
      <span className="w-10 text-right text-sm tabular-nums">{volume[0]}%</span>
    </div>
  )
}
