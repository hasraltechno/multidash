"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Lock, Sparkles } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { cn } from "@multidash/ui/lib/utils"

import { Logo } from "@/components/icons"
import { navGroups } from "@/lib/nav"
import { siteConfig } from "@/lib/site"

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 shrink-0 items-center gap-2.5 px-5">
        <Logo className="size-7" />
        <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          FREE
        </span>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        active
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
                      )}
                    >
                      <item.icon className="size-4 shrink-0" />
                      <span className="flex-1">{item.title}</span>
                      {item.pro && (
                        <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                          <Lock className="size-2.5" />
                          PRO
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-3">
        <div className="rounded-lg border bg-gradient-to-br from-primary/10 to-transparent p-4">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <Sparkles className="size-4 text-primary" />
            Multidash Pro
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            5 dashboards, 6 apps, auth, database & payments.
          </p>
          <Button asChild size="sm" className="mt-3 w-full">
            <a href={siteConfig.links.pro} target="_blank" rel="noreferrer">
              Get Pro
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
