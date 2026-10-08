"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { FileText, Search } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@multidash/ui/components/command"

import { navGroups } from "@/lib/nav"

/** Header search: a ⌘K command palette over every page and component. */
export function SearchCommand() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  function go(href: string) {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      {/* Icon trigger on small screens, full search box from sm up. */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors outline-none hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:hidden"
      >
        <Search className="size-4" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-9 w-full max-w-sm items-center gap-2 rounded-md sm:flex border border-input bg-transparent px-3 text-sm text-muted-foreground shadow-xs transition-colors outline-none hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <Search className="size-4" aria-hidden />
        <span className="flex-1 text-left">Search...</span>
        <kbd className="hidden rounded border bg-muted px-1.5 font-mono text-[10px] sm:inline">⌘K</kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Search" description="Jump to a page or component">
        <CommandInput placeholder="Search pages and components..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {navGroups.map((group) => (
            <CommandGroup key={group.label} heading={group.label}>
              {group.items.flatMap((item) =>
                item.children
                  ? []
                  : [
                      <CommandItem key={item.href} value={`${group.label} ${item.title}`} onSelect={() => go(item.href)}>
                        <item.icon /> {item.title}
                        {item.pro && <span className="ml-auto text-[10px] font-semibold text-primary-text">PRO</span>}
                      </CommandItem>,
                    ]
              )}
            </CommandGroup>
          ))}
          {navGroups
            .flatMap((group) => group.items)
            .filter((item) => item.children)
            .map((item) => (
              <CommandGroup key={item.href} heading={item.title}>
                {item.children!.map((child) => (
                  <CommandItem key={child.href} value={`${item.title} ${child.title}`} onSelect={() => go(child.href)}>
                    {child.href === item.href ? <FileText /> : <item.icon />} {child.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
