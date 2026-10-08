import Link from "next/link"
import { Button } from "@multidash/ui/components/button"

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-sm font-semibold text-primary-text">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <Button asChild>
        <Link href="/">Back to dashboard</Link>
      </Button>
    </main>
  )
}
