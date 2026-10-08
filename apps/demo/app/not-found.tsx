import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, LifeBuoy, SearchX } from "lucide-react"
import { Button } from "@multidash/ui/components/button"

import { ErrorPage } from "@/components/error-page"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = { title: "Page not found" }

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      icon={SearchX}
      title="Page not found"
      description="Sorry, we couldn't find the page you're looking for. It may have been moved or deleted."
    >
      <Button asChild>
        <Link href="/">
          <ArrowLeft /> Back to dashboard
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <a href={`${siteConfig.links.github}/issues`} target="_blank" rel="noreferrer">
          <LifeBuoy /> Report a problem
        </a>
      </Button>
    </ErrorPage>
  )
}
