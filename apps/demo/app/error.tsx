"use client"

import { useEffect } from "react"
import Link from "next/link"
import { RotateCcw, ServerCrash } from "lucide-react"
import { Button } from "@multidash/ui/components/button"

import { ErrorPage } from "@/components/error-page"

// Error boundary for every route: shows the 500 screen with a retry.
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <ErrorPage
      code="500"
      icon={ServerCrash}
      title="Something went wrong"
      description="An unexpected error occurred on our side. Please try again — if it keeps happening, let us know."
    >
      <Button onClick={reset}>
        <RotateCcw /> Try again
      </Button>
      <Button variant="outline" asChild>
        <Link href="/">Back to dashboard</Link>
      </Button>
    </ErrorPage>
  )
}
