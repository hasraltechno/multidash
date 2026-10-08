import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Check, Lock, Sparkles } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Card, CardContent } from "@multidash/ui/components/card"

import { getProFeature, proFeatures } from "@/lib/pro-features"
import { siteConfig } from "@/lib/site"

type Props = { params: Promise<{ feature: string }> }

export function generateStaticParams() {
  return proFeatures.map((f) => ({ feature: f.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const feature = getProFeature((await params).feature)
  return { title: feature ? `${feature.title} (Pro)` : "Pro" }
}

export default async function ProFeaturePage({ params }: Props) {
  const feature = getProFeature((await params).feature)
  if (!feature) notFound()

  return (
    <Card className="relative overflow-hidden">
      {/* Blurred mock preview behind the upgrade prompt */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid grid-cols-4 gap-4 p-6 opacity-40 blur-sm">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={i < 4 ? "h-24 rounded-lg bg-muted" : "col-span-2 h-56 rounded-lg bg-muted"} />
        ))}
      </div>

      <CardContent className="relative flex min-h-[32rem] flex-col items-center justify-center text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary-text">
          <Lock className="size-5" />
        </div>
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary-text uppercase">
          <Sparkles className="size-3.5" /> Multidash Pro
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">{feature.title}</h1>
        <p className="mt-2 max-w-md text-muted-foreground">{feature.description}</p>

        <ul className="mt-6 space-y-2 text-left text-sm">
          {feature.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <Check className="size-4 text-success-text" aria-hidden />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Button size="lg" asChild>
            <Link href={siteConfig.links.pro}>
              Get Multidash Pro
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              Star on GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
