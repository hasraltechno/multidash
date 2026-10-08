import { Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@multidash/ui/components/avatar"
import { Badge } from "@multidash/ui/components/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@multidash/ui/components/card"

// Images: Lorem Picsum (Unsplash photos). In Next.js you can swap <img> for next/image.
export default function CardImageTop() {
  return (
    <Card className="w-full max-w-sm overflow-hidden pt-0">
      <img
        src="https://picsum.photos/id/180/800/450"
        alt="Laptop and notebook on a wooden desk"
        width={800}
        height={450}
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <Badge variant="secondary">Design</Badge>
        <CardTitle className="text-lg leading-snug">Building a design system that scales</CardTitle>
        <CardDescription>
          How tokens, primitives and documentation keep a growing product consistent.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="size-7">
            <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Olivia Martin" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Olivia Martin</span>
        </div>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3.5" aria-hidden /> 6 min read
        </span>
      </CardFooter>
    </Card>
  )
}
