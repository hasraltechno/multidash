import type { Metadata } from "next"
import { Wrench } from "lucide-react"
import { Button } from "@multidash/ui/components/button"

import { ErrorPage } from "@/components/error-page"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = { title: "Under maintenance" }

export default function MaintenancePage() {
  return (
    <ErrorPage
      icon={Wrench}
      title="We'll be back soon"
      description="Multidash is down for scheduled maintenance. We expect to be back online within the hour — thanks for your patience."
    >
      <Button variant="outline" asChild>
        <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
          Follow updates on GitHub
        </a>
      </Button>
    </ErrorPage>
  )
}
