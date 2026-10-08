"use client"

import { useEffect, useState } from "react"
import { FileText, LayoutDashboard, Settings, Users } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@multidash/ui/components/command"
import { toast } from "@multidash/ui/components/toast"

// Opens with ⌘K / Ctrl+K — the same pattern powers the search box in the header.
export default function CommandDialogExample() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "j" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  function run(label: string) {
    setOpen(false)
    toast(`Opening ${label}`)
  }

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open command palette
        <kbd className="ml-2 rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">⌘J</kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => run("Overview")}>
              <LayoutDashboard /> Overview
            </CommandItem>
            <CommandItem onSelect={() => run("Customers")}>
              <Users /> Customers
            </CommandItem>
            <CommandItem onSelect={() => run("Reports")}>
              <FileText /> Reports
            </CommandItem>
            <CommandItem onSelect={() => run("Settings")}>
              <Settings /> Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
