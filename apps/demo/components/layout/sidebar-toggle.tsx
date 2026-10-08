"use client"

import { useEffect } from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@multidash/ui/components/tooltip"

import { toggleSidebar, useSidebarCollapsed } from "@/lib/sidebar"

/** Minimizes the desktop sidebar to icons. Shortcut: ⌘B / Ctrl+B. */
export function SidebarToggle() {
  const collapsed = useSidebarCollapsed()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "b" && (event.metaKey || event.ctrlKey) && !event.altKey) {
        event.preventDefault()
        toggleSidebar()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const label = collapsed ? "Expand sidebar" : "Minimize sidebar"
  const Icon = collapsed ? PanelLeftOpen : PanelLeftClose

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label={label} className="hidden lg:inline-flex">
          <Icon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {label} <kbd className="ml-1 font-mono text-[10px] opacity-70">⌘B</kbd>
      </TooltipContent>
    </Tooltip>
  )
}
