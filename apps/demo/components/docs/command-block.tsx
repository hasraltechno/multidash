"use client"

import { useSyncExternalStore } from "react"
import { cn } from "@multidash/ui/lib/utils"

import { formatCommand, packageManagers, type Command, type PackageManager } from "@/lib/docs/install"

import { CopyButton } from "./copy-button"

// The chosen package manager is shared by every command on the page and remembered between visits.
const STORAGE_KEY = "multidash-package-manager"
const listeners = new Set<() => void>()

function readPackageManager(): PackageManager {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && (packageManagers as readonly string[]).includes(saved)) return saved as PackageManager
  } catch {
    // Storage can be unavailable (private mode, blocked cookies) — fall back to the default.
  }
  return "pnpm"
}

function setPackageManager(pm: PackageManager) {
  try {
    localStorage.setItem(STORAGE_KEY, pm)
  } catch {}
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function usePackageManager() {
  return useSyncExternalStore(subscribe, readPackageManager, () => "pnpm" as const)
}

/** A shell command with a pnpm / npm / yarn / bun switcher. `compact` drops the switcher (page header). */
export function CommandBlock({
  command,
  compact = false,
  className,
}: {
  command: Command
  compact?: boolean
  className?: string
}) {
  const pm = usePackageManager()
  const text = formatCommand(command, pm)

  const line = (
    <div className="flex min-w-0 items-center gap-2">
      <pre className="min-w-0 flex-1 overflow-x-auto py-0.5 font-mono text-[13px]">
        <span className="text-muted-foreground select-none">$ </span>
        {text}
      </pre>
      <CopyButton value={text} className="shrink-0" />
    </div>
  )

  if (compact) {
    return <div className={cn("rounded-lg border bg-muted/40 py-1.5 pr-1.5 pl-3", className)}>{line}</div>
  }

  return (
    <div className={cn("overflow-hidden rounded-lg border bg-muted/40", className)}>
      <div role="group" aria-label="Package manager" className="flex gap-1 border-b px-2 py-1.5">
        {packageManagers.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={option === pm}
            onClick={() => setPackageManager(option)}
            className={cn(
              "rounded-md px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground",
              option === pm && "bg-background text-foreground shadow-xs"
            )}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="py-2 pr-2 pl-4">{line}</div>
    </div>
  )
}
