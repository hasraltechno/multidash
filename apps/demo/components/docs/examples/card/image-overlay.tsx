import { ArrowRight } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Card } from "@multidash/ui/components/card"

// Text sits on a dark gradient so it stays readable on any photo.
export default function CardImageOverlay() {
  return (
    <Card variant="shadow" className="relative isolate w-full max-w-md overflow-hidden py-0">
      <img
        src="https://picsum.photos/id/1039/1000/700"
        alt="Waterfall in a green forest"
        width={1000}
        height={700}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className="flex min-h-80 flex-col justify-end gap-3 p-6 text-white">
        <p className="text-xs font-semibold tracking-wide uppercase text-white/80">New collection</p>
        <h3 className="text-2xl font-semibold leading-tight">Explore the wild side of the Pacific Northwest</h3>
        <p className="text-sm text-white/80">Curated trails, waterfalls and campsites for your next weekend.</p>
        {/* Fixed light colors: the photo stays dark in both themes. */}
        <Button className="mt-2 w-fit bg-white text-neutral-900 hover:bg-white/90">
          Start exploring <ArrowRight />
        </Button>
      </div>
    </Card>
  )
}
