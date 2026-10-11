"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./button"

type ScrollShadowProps<T extends React.ElementType> = {
  /** The element that scrolls. A `div` by default; pass `"ul"` for a list. */
  as?: T
  orientation?: "vertical" | "horizontal"
  /** Length of the fade at each edge, in px. */
  size?: number
  /** Show the scrollbar as well as the fade. */
  scrollbar?: boolean
  /**
   * Horizontal only: round ‹ › buttons at an edge that has more to show, for mouse users without a trackpad.
   * Keyboard users reach hidden content by tabbing through it, which scrolls it into view.
   */
  arrows?: boolean
  /** How far one arrow click scrolls, in px. Defaults to 80% of the visible width. */
  step?: number
  ref?: React.Ref<HTMLElement>
} & Omit<React.ComponentPropsWithoutRef<T>, "as">

/**
 * A scroll area whose edges fade out while there's more to scroll that way, so the fade itself says the
 * content continues. The scrollbar is hidden unless you ask for it; wheel, trackpad, touch and keyboard
 * scrolling all still work.
 */
function ScrollShadow<T extends React.ElementType = "div">({
  as,
  orientation = "vertical",
  size = 40,
  scrollbar = false,
  arrows = false,
  step,
  className,
  style,
  children,
  ref,
  ...props
}: ScrollShadowProps<T>) {
  const Component = (as ?? "div") as React.ElementType
  const node = React.useRef<HTMLElement | null>(null)
  const [edges, setEdges] = React.useState({ start: false, end: false })
  const horizontal = orientation === "horizontal"

  React.useEffect(() => {
    const el = node.current
    if (!el) return
    const update = () => {
      const position = horizontal ? el.scrollLeft : el.scrollTop
      const max = horizontal ? el.scrollWidth - el.clientWidth : el.scrollHeight - el.clientHeight
      const start = position > 1
      const end = position < max - 1
      setEdges((current) => (current.start === start && current.end === end ? current : { start, end }))
    }
    update()
    el.addEventListener("scroll", update, { passive: true })
    // A resize (window, sidebar) or new content (an item added) changes what's out of view.
    const resize = new ResizeObserver(update)
    resize.observe(el)
    const mutations = new MutationObserver(update)
    mutations.observe(el, { childList: true, subtree: true })
    return () => {
      el.removeEventListener("scroll", update)
      resize.disconnect()
      mutations.disconnect()
    }
  }, [horizontal])

  const fade = `${size}px`
  const mask = `linear-gradient(${horizontal ? "to right" : "to bottom"}, ${edges.start ? "transparent" : "#000"}, #000 ${fade}, #000 calc(100% - ${fade}), ${edges.end ? "transparent" : "#000"})`

  const area = (
    <Component
      data-slot="scroll-shadow"
      data-orientation={orientation}
      {...props}
      ref={(el: HTMLElement | null) => {
        node.current = el
        if (typeof ref === "function") ref(el)
        else if (ref) (ref as React.RefObject<HTMLElement | null>).current = el
      }}
      className={cn(
        horizontal ? "overflow-x-auto" : "overflow-y-auto",
        !scrollbar && "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
      style={{ ...style, maskImage: mask, WebkitMaskImage: mask }}
    >
      {children}
    </Component>
  )

  if (!horizontal || !arrows) return area

  const scroll = (direction: 1 | -1) => {
    const el = node.current
    if (!el) return
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.scrollBy({ left: direction * (step ?? el.clientWidth * 0.8), behavior: smooth ? "smooth" : "auto" })
  }

  const arrow = "absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-background shadow-sm"
  return (
    <div data-slot="scroll-shadow-arrows" className="relative min-w-0">
      {area}
      {edges.start && (
        <Button variant="outline" size="icon-sm" tabIndex={-1} aria-hidden onClick={() => scroll(-1)} className={cn(arrow, "left-1")}>
          <ChevronLeftIcon />
        </Button>
      )}
      {edges.end && (
        <Button variant="outline" size="icon-sm" tabIndex={-1} aria-hidden onClick={() => scroll(1)} className={cn(arrow, "right-1")}>
          <ChevronRightIcon />
        </Button>
      )}
    </div>
  )
}

export { ScrollShadow }
