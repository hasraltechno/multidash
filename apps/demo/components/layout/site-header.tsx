import { Bell, Search } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Input } from "@multidash/ui/components/input"

import { GitHubIcon } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/lib/site"

import { MobileNav } from "./mobile-nav"
import { UserNav } from "./user-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <MobileNav />
      <div className="relative hidden max-w-sm flex-1 sm:block">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search..." className="pl-9" aria-label="Search" />
      </div>
      <div className="ml-auto flex items-center gap-1">
        <Button variant="ghost" size="icon" asChild>
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
            <GitHubIcon className="size-4" />
          </a>
        </Button>
        <ThemeToggle />
        <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
          <Bell />
          <span className="absolute top-2 right-2 size-2 rounded-full bg-destructive ring-2 ring-background" />
        </Button>
        <div className="ml-2">
          <UserNav />
        </div>
      </div>
    </header>
  )
}
