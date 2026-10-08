"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Lock, Sparkles } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@multidash/ui/components/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@multidash/ui/components/tooltip"
import { cn } from "@multidash/ui/lib/utils"

import { Logo } from "@/components/icons"
import { navGroups, type NavItem } from "@/lib/nav"
import { useSidebarCollapsed } from "@/lib/sidebar"
import { siteConfig } from "@/lib/site"

/*
 * The `collapsed:` variant (app/globals.css) only applies inside the desktop panel when
 * <html data-sidebar="collapsed">, so the mobile sheet always renders the full sidebar.
 */
const itemClass =
  "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors collapsed:mx-auto collapsed:size-10 collapsed:justify-center collapsed:px-0"
const idleClass = "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
const activeClass = "bg-sidebar-accent text-sidebar-accent-foreground"

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
}

/** Shows a label to the right of an icon-only item, but only while the desktop sidebar is minimized. */
function CollapsedTooltip({ label, enabled, children }: { label: React.ReactNode; enabled: boolean; children: React.ReactNode }) {
  return (
    <Tooltip open={enabled ? undefined : false}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="right" sideOffset={8}>
        {label}
      </TooltipContent>
    </Tooltip>
  )
}

function ProBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary-text collapsed:hidden">
      <Lock className="size-2.5" />
      PRO
    </span>
  )
}

function NavLink({
  item,
  pathname,
  tooltips,
  onNavigate,
}: {
  item: NavItem
  pathname: string
  tooltips: boolean
  onNavigate?: () => void
}) {
  const active = isActive(item.href, pathname)
  return (
    <CollapsedTooltip label={item.pro ? `${item.title} · PRO` : item.title} enabled={tooltips}>
      <Link
        href={item.href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={cn(itemClass, active ? activeClass : idleClass)}
      >
        <item.icon className="size-4 shrink-0" />
        {/* sr-only (not hidden) when minimized, so the link keeps its accessible name. */}
        <span className="flex-1 collapsed:sr-only">{item.title}</span>
        {item.pro && <ProBadge />}
      </Link>
    </CollapsedTooltip>
  )
}

function NavCollapsible({
  item,
  pathname,
  tooltips,
  onNavigate,
}: {
  item: NavItem
  pathname: string
  tooltips: boolean
  onNavigate?: () => void
}) {
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
      {/* Expanded sidebar: inline sub-menu */}
      <div className="collapsed:hidden">
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
      </div>

      {/* Minimized sidebar: the sub-menu opens as a flyout */}
      <div className="hidden collapsed:block">
        <DropdownMenu>
          <CollapsedTooltip label={item.title} enabled={tooltips}>
            <DropdownMenuTrigger asChild>
              <button type="button" className={cn(itemClass, inSection ? activeClass : idleClass)} aria-label={item.title}>
                <item.icon className="size-4 shrink-0" />
              </button>
            </DropdownMenuTrigger>
          </CollapsedTooltip>
          <DropdownMenuContent side="right" align="start" sideOffset={8} className="max-h-[70svh] w-52">
            <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {item.children!.map((child) => (
              <DropdownMenuItem key={child.href} asChild className={cn(pathname === child.href && "bg-accent font-medium")}>
                <Link href={child.href} aria-current={pathname === child.href ? "page" : undefined}>
                  {child.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export function SidebarNav({
  variant = "mobile",
  onNavigate,
}: {
  /** "desktop" enables the minimized mode; the mobile sheet is always full width. */
  variant?: "desktop" | "mobile"
  onNavigate?: () => void
}) {
  const pathname = usePathname()
  const collapsed = useSidebarCollapsed()
  const tooltips = variant === "desktop" && collapsed

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 shrink-0 items-center gap-2.5 px-5 collapsed:justify-center collapsed:px-0">
        <Logo className="size-7 shrink-0" />
        <span className="text-lg font-semibold tracking-tight collapsed:hidden">{siteConfig.name}</span>
        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground collapsed:hidden">
          FREE
        </span>
      </div>

      <nav className="flex-1 space-y-6 overflow-x-hidden overflow-y-auto px-3 py-4 collapsed:space-y-3 collapsed:px-2">
        {navGroups.map((group, index) => (
          <div key={group.label}>
            <p className="mb-2 px-3 text-xs font-medium tracking-wide text-muted-foreground uppercase collapsed:sr-only">
              {group.label}
            </p>
            {index > 0 && <div aria-hidden className="mx-2 mb-3 hidden h-px bg-sidebar-border collapsed:block" />}
            <ul className="space-y-0.5 collapsed:space-y-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <NavCollapsible item={item} pathname={pathname} tooltips={tooltips} onNavigate={onNavigate} />
                  ) : (
                    <NavLink item={item} pathname={pathname} tooltips={tooltips} onNavigate={onNavigate} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-3 collapsed:px-2">
        <div className="rounded-lg border bg-gradient-to-br from-primary/10 to-transparent p-4 collapsed:hidden">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <Sparkles className="size-4 text-primary-text" />
            Multidash Pro
          </p>
          <p className="mt-1 text-xs text-muted-foreground">5 dashboards, 6 apps, auth, database & payments.</p>
          <Button asChild size="sm" className="mt-3 w-full">
            <Link href={siteConfig.links.pro} onClick={onNavigate}>
              Get Pro
            </Link>
          </Button>
        </div>
        <div className="hidden justify-center collapsed:flex">
          <CollapsedTooltip label="Get Multidash Pro" enabled={tooltips}>
            <Button asChild size="icon" aria-label="Get Multidash Pro">
              <Link href={siteConfig.links.pro}>
                <Sparkles />
              </Link>
            </Button>
          </CollapsedTooltip>
        </div>
      </div>
    </div>
  )
}
