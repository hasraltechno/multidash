import type { Metadata } from "next"
import Link from "next/link"
import { RotateCcw, ServerCrash } from "lucide-react"
import { Button } from "@multidash/ui/components/button"

import { ErrorPage } from "@/components/error-page"

export const metadata: Metadata = { title: "Server error" }

// Demo route — app/error.tsx renders the same screen when a page throws.
export default function ServerErrorPage() {
  return (
    <ErrorPage
      code="500"
      icon={ServerCrash}
      title="Something went wrong"
      description="An unexpected error occurred on our side. Please try again — if it keeps happening, let us know."
    >
      <Button asChild>
        <Link href="/errors/500">
          <RotateCcw /> Try again
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="/">Back to dashboard</Link>
      </Button>
    </ErrorPage>
  )
}
