import { CalendarDays, MapPin, Users } from "lucide-react"
import { Badge } from "@multidash/ui/components/badge"
import { Button } from "@multidash/ui/components/button"
import { Card } from "@multidash/ui/components/card"

// Stacks vertically on small screens, side by side from `sm` up.
export default function CardHorizontal() {
  return (
    <Card className="w-full max-w-2xl flex-col gap-0 overflow-hidden py-0 sm:flex-row">
      <img
        src="https://picsum.photos/id/1015/600/600"
        alt="Fjord between steep mountains"
        width={600}
        height={600}
        className="aspect-video w-full object-cover sm:aspect-auto sm:w-56"
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <Badge variant="success">Available</Badge>
          <h3 className="text-lg font-semibold leading-snug">Norway Fjords Hiking Trip</h3>
          <p className="text-sm text-muted-foreground">
            Five days of guided hikes, cabin stays and boat tours through the western fjords.
          </p>
        </div>
        <ul className="grid gap-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <MapPin className="size-4" aria-hidden /> Bergen, Norway
          </li>
          <li className="flex items-center gap-2">
            <CalendarDays className="size-4" aria-hidden /> 12 – 17 June 2027
          </li>
          <li className="flex items-center gap-2">
            <Users className="size-4" aria-hidden /> 8 of 12 spots left
          </li>
        </ul>
        <div className="mt-auto flex items-center justify-between gap-4">
          <p>
            <span className="text-xl font-semibold">$1,240</span>
            <span className="text-sm text-muted-foreground"> / person</span>
          </p>
          <Button>Book now</Button>
        </div>
      </div>
    </Card>
  )
}
