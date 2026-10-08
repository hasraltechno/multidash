import type { LucideIcon } from "lucide-react"
import Link from "next/link"

import { Logo } from "@/components/icons"
import { siteConfig } from "@/lib/site"

/** Full-page status screen shared by 404, 500 and maintenance pages. */
export function ErrorPage({
  code,
  icon: Icon,
  title,
  description,
  children,
}: {
  code?: string
  icon: LucideIcon
  title: string
  description: string
  /** Action buttons. */
  children?: React.ReactNode
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold">
          <Logo className="size-7" />
          {siteConfig.name}
        </Link>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-24 text-center">
        <div className="relative">
          {code && (
            <p
              aria-hidden
              className="pointer-events-none bg-gradient-to-b from-primary/25 to-transparent bg-clip-text text-[9rem] leading-none font-bold tracking-tighter text-transparent select-none sm:text-[12rem]"
            >
              {code}
            </p>
          )}
          <span
            className={
              code
                ? "absolute inset-x-0 bottom-2 mx-auto flex size-14 items-center justify-center rounded-full border bg-card shadow-sm"
                : "mx-auto flex size-16 items-center justify-center rounded-full border bg-card shadow-sm"
            }
          >
            <Icon className="size-6 text-primary-text" aria-hidden />
          </span>
        </div>
        <h1 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
        <p className="mt-3 max-w-md text-muted-foreground">{description}</p>
        {children && <div className="mt-8 flex flex-wrap justify-center gap-2">{children}</div>}
        {code && <p className="mt-10 font-mono text-xs text-muted-foreground">Error code: {code}</p>}
      </main>
    </div>
  )
}
