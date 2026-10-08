"use client"

import { useState } from "react"
import Link from "next/link"
import {
  AtSign,
  Bell,
  BellOff,
  CheckCheck,
  CreditCard,
  FileChartColumn,
  Rocket,
  Settings,
  ShoppingBag,
  UserPlus,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Popover, PopoverContent, PopoverTrigger } from "@multidash/ui/components/popover"
import { Tabs, TabsList, TabsTrigger } from "@multidash/ui/components/tabs"
import { cn } from "@multidash/ui/lib/utils"

import { initialNotifications, type Notification } from "@/lib/notifications"

const typeStyles: Record<Notification["type"], { icon: LucideIcon; className: string }> = {
  order: { icon: ShoppingBag, className: "bg-success/12 text-success-text" },
  payment: { icon: CreditCard, className: "bg-destructive/10 text-destructive-text" },
  mention: { icon: AtSign, className: "bg-highlight/12 text-highlight-text" },
  customer: { icon: UserPlus, className: "bg-info/12 text-info-text" },
  report: { icon: FileChartColumn, className: "bg-primary/12 text-primary-text" },
  system: { icon: Rocket, className: "bg-warning/18 text-warning-text" },
}

export function Notifications() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(initialNotifications)
  const [filter, setFilter] = useState<"all" | "unread">("all")

  const unread = items.filter((n) => !n.read).length
  const visible = filter === "unread" ? items.filter((n) => !n.read) : items

  function markRead(id: string) {
    setItems((list) => list.map((n) => (n.id === id ? { ...n, read: true } : n)))
    setOpen(false)
  }

  function markAllRead() {
    setItems((list) => list.map((n) => ({ ...n, read: true })))
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label={unread ? `Notifications, ${unread} unread` : "Notifications"}
        >
          <Bell />
          {unread > 0 && (
            <span
              aria-hidden
              className="absolute top-1 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] leading-none font-semibold text-destructive-foreground tabular-nums ring-2 ring-background"
            >
              {unread > 9 ? "9+" : unread}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8} collisionPadding={16} className="w-[calc(100vw-2rem)] p-0 sm:w-96">
        <div className="flex items-center justify-between gap-2 px-4 pt-4 pb-3">
          <div>
            <h2 className="font-semibold">Notifications</h2>
            <p className="text-xs text-muted-foreground" aria-live="polite">
              {unread ? `You have ${unread} unread` : "All caught up"}
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={markAllRead} disabled={!unread} className="text-primary-text">
            <CheckCheck /> Mark all as read
          </Button>
        </div>

        <div className="px-4 pb-3">
          <Tabs value={filter} onValueChange={(v) => setFilter(v as "all" | "unread")}>
            <TabsList className="w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                {unread > 0 && (
                  <span className="rounded-full bg-primary/12 px-1.5 text-[10px] font-semibold text-primary-text tabular-nums">
                    {unread}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {visible.length ? (
          <ul className="max-h-96 divide-y overflow-y-auto border-t">
            {visible.map((n) => {
              const { icon: Icon, className } = typeStyles[n.type]
              return (
                <li key={n.id}>
                  <Link
                    href={n.href}
                    onClick={() => markRead(n.id)}
                    className={cn(
                      "flex gap-3 px-4 py-3 transition-colors outline-none hover:bg-accent/60 focus-visible:bg-accent",
                      !n.read && "bg-primary/[0.04]"
                    )}
                  >
                    <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-full", className)}>
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className={cn("text-sm", n.read ? "text-foreground" : "font-semibold")}>
                        {n.title}
                        {!n.read && <span className="sr-only"> (unread)</span>}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{n.description}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{n.time}</p>
                    </div>
                    {!n.read && <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-2 border-t px-4 py-10 text-center">
            <span className="flex size-10 items-center justify-center rounded-full bg-muted">
              <BellOff className="size-4 text-muted-foreground" aria-hidden />
            </span>
            <p className="text-sm font-medium">You&apos;re all caught up</p>
            <p className="text-xs text-muted-foreground">New notifications will show up here.</p>
          </div>
        )}

        <div className="border-t p-2">
          <Button variant="ghost" size="sm" className="w-full" asChild>
            <Link href="/forms" onClick={() => setOpen(false)}>
              <Settings /> Notification settings
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
