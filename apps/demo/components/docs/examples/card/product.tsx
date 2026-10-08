"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Card, CardContent, CardFooter } from "@multidash/ui/components/card"
import { toast } from "@multidash/ui/components/toast"
import { cn } from "@multidash/ui/lib/utils"

export default function CardProduct() {
  const [liked, setLiked] = useState(false)

  return (
    <Card className="w-full max-w-xs gap-4 overflow-hidden pt-0">
      <div className="relative">
        <img
          src="https://picsum.photos/id/250/600/600"
          alt="Vintage film camera"
          width={600}
          height={600}
          className="aspect-square w-full object-cover"
        />
        <span className="absolute top-3 left-3 rounded-md bg-destructive px-2 py-0.5 text-xs font-semibold text-destructive-foreground">
          -20%
        </span>
        <Button
          variant="secondary"
          size="icon-sm"
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 rounded-full bg-background/90 shadow-sm backdrop-blur"
        >
          <Heart className={cn(liked && "fill-destructive text-destructive-text")} />
        </Button>
      </div>
      <CardContent className="space-y-1.5">
        <p className="text-xs text-muted-foreground">Cameras</p>
        <h3 className="font-semibold leading-snug">Retro 35mm Film Camera</h3>
        <div className="flex items-center gap-1 text-sm">
          <Star className="size-4 fill-warning text-warning-text" aria-hidden />
          <span className="font-medium">4.8</span>
          <span className="text-muted-foreground">(212 reviews)</span>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div>
          <span className="text-lg font-semibold">$159</span>{" "}
          <span className="text-sm text-muted-foreground line-through">$199</span>
        </div>
        <Button size="sm" onClick={() => toast.success("Added to cart")}>
          <ShoppingCart /> Add
        </Button>
      </CardFooter>
    </Card>
  )
}
