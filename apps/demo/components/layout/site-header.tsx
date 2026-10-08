import { Button } from "@multidash/ui/components/button"

import { GitHubIcon } from "@/components/icons"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/lib/site"

import { MobileNav } from "./mobile-nav"
import { Notifications } from "./notifications"
import { SearchCommand } from "./search-command"
import { UserNav } from "./user-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <MobileNav />
      <div className="flex max-w-sm sm:flex-1">
        <SearchCommand />
      </div>
      <div className="ml-auto flex items-center gap-1">
        <Button variant="ghost" size="icon" asChild>
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
            <GitHubIcon className="size-4" />
          </a>
        </Button>
        <ThemeToggle />
        <ThemeCustomizer />
        <Notifications />
        <div className="ml-2">
          <UserNav />
        </div>
      </div>
    </header>
  )
}
