import type { Metadata } from "next"
import { Check, Minus, Sparkles } from "lucide-react"
import { Badge } from "@multidash/ui/components/badge"
import { Button } from "@multidash/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@multidash/ui/components/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@multidash/ui/components/table"
import { cn } from "@multidash/ui/lib/utils"

import { GitHubIcon } from "@/components/icons"
import { PageHeader } from "@/components/page-header"
import { WaitlistForm } from "@/components/pricing/waitlist-form"
import { comparison, faqs, plans, proAvailable, waitlistPerk } from "@/lib/pricing"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Multidash is free and open source. Multidash Pro adds more dashboards, apps, auth, database and payments.",
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing"
        description="Start free. Upgrade to Pro when you need more — one-time payment, lifetime updates."
      />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Plans">
        {plans.map((plan) => {
          const free = plan.price === 0
          return (
            <Card key={plan.id} className={cn("relative", plan.highlighted && "border-primary ring-1 ring-primary")}>
              {plan.highlighted && (
                <Badge className="absolute -top-2.5 left-6">Most popular</Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="sm:min-h-10">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div>
                  <p className="text-4xl font-semibold tracking-tight">${plan.price}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{plan.billing}</p>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {free ? (
                  <Button variant="outline" className="w-full" asChild>
                    <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                      <GitHubIcon className="size-4" /> Get it on GitHub
                    </a>
                  </Button>
                ) : (
                  <Button variant={plan.highlighted ? "default" : "outline"} className="w-full" asChild>
                    <a href="#waitlist">{proAvailable ? "Buy now" : "Join waitlist"}</a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </section>

      <Card id="waitlist" className="scroll-mt-24 border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card">
        <CardContent className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              <Sparkles className="size-3.5" aria-hidden /> Coming soon
            </p>
            <h2 className="text-xl font-semibold tracking-tight">Get notified when Multidash Pro launches</h2>
            <p className="text-sm text-muted-foreground">
              One email at launch, no spam. {waitlistPerk}
            </p>
          </div>
          <WaitlistForm />
        </CardContent>
      </Card>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-5">
        <Card className="xl:col-span-3">
          <CardHeader>
            <CardTitle>Compare plans</CardTitle>
            <CardDescription>All paid plans include every Pro feature.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Feature</TableHead>
                  <TableHead className="w-20 text-center">Free</TableHead>
                  <TableHead className="w-20 text-center">Pro</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparison.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="whitespace-normal">{row.feature}</TableCell>
                    <TableCell className="text-center">
                      {row.free ? (
                        <Check className="mx-auto size-4 text-success" aria-label="Included" />
                      ) : (
                        <Minus className="mx-auto size-4 text-muted-foreground" aria-label="Not included" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto size-4 text-success" aria-label="Included" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>Common questions about licenses.</CardDescription>
          </CardHeader>
          <CardContent className="divide-y">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-3 first:pt-0 last:pb-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span aria-hidden className="text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </CardContent>
        </Card>
      </section>
    </>
  )
}
