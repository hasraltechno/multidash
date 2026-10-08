"use client"

import { useState } from "react"
import { Check, MapPin, UserPlus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@multidash/ui/components/avatar"
import { Button } from "@multidash/ui/components/button"
import { Card, CardContent } from "@multidash/ui/components/card"
import { Separator } from "@multidash/ui/components/separator"

const stats = [
  { label: "Projects", value: "48" },
  { label: "Followers", value: "12.4K" },
  { label: "Following", value: "312" },
]

export default function CardProfile() {
  const [following, setFollowing] = useState(false)

  return (
    <Card className="w-full max-w-sm gap-0 overflow-hidden pt-0">
      <img
        src="https://picsum.photos/id/1068/900/300"
        alt=""
        width={900}
        height={300}
        className="h-28 w-full object-cover"
      />
      <CardContent className="-mt-10 space-y-4 text-center">
        <Avatar className="mx-auto size-20 ring-4 ring-card">
          <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sofia Davis" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">Sofia Davis</h3>
          <p className="text-sm text-muted-foreground">Product Designer at Multidash</p>
          <p className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden /> Jakarta, Indonesia
          </p>
        </div>
        <Separator />
        <dl className="grid grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs text-muted-foreground">{stat.label}</dt>
              <dd className="text-lg font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={following ? "secondary" : "default"}
            onClick={() => setFollowing(!following)}
            aria-pressed={following}
          >
            {following ? <Check /> : <UserPlus />}
            {following ? "Following" : "Follow"}
          </Button>
          <Button variant="outline">Message</Button>
        </div>
      </CardContent>
    </Card>
  )
}
