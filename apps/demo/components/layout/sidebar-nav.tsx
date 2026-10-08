"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Lock, Sparkles } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { cn } from "@multidash/ui/lib/utils"

import { Logo } from "@/components/icons"
import { navGroups, type NavItem } from "@/lib/nav"
import { siteConfig } from "@/lib/site"

const itemClass = "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors"
const idleClass = "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
const activeClass = "bg-sidebar-accent text-sidebar-accent-foreground"

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
}

function NavLink({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate?: () => void }) {
  const active = isActive(item.href, pathname)
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(itemClass, active ? activeClass : idleClass)}
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
  )
}

function NavCollapsible({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate?: () => void }) {
  const inSection = isActive(item.href, pathname)
  const [open, setOpen] = useState(inSection)
  const listId = useId()
  const activeRef = useRef<HTMLAnchorElement>(null)

  // Open the section when navigating into it, and keep the current page visible in a long list.
  useEffect(() => {
    if (inSection) setOpen(true)
  }, [inSection])
  useEffect(() => {
    if (open) activeRef.current?.scrollIntoView({ block: "nearest" })
  }, [open, pathname])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={listId}
        className={cn(itemClass, inSection && !open ? activeClass : idleClass, inSection && "text-sidebar-accent-foreground")}
      >
        <item.icon className="size-4 shrink-0" />
        <span className="flex-1 text-left">{item.title}</span>
        <ChevronRight
          className={cn("size-4 shrink-0 text-muted-foreground transition-transform duration-200", open && "rotate-90")}
          aria-hidden
        />
      </button>
      {open && (
        <ul id={listId} className="mt-0.5 ml-5 space-y-0.5 border-l pl-2">
          {item.children!.map((child) => {
            const active = pathname === child.href
            return (
              <li key={child.href}>
                <Link
                  ref={active ? activeRef : undefined}
                  href={child.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
                  )}
                >
                  {child.title}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

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
              {group.items.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <NavCollapsible item={item} pathname={pathname} onNavigate={onNavigate} />
                  ) : (
                    <NavLink item={item} pathname={pathname} onNavigate={onNavigate} />
                  )}
                </li>
              ))}
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
            <Link href={siteConfig.links.pro} onClick={onNavigate}>
              Get Pro
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
