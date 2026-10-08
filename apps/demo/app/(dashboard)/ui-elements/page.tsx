import type { Metadata } from "next"
import { Info, Plus, Trash2 } from "lucide-react"
import { Avatar, AvatarFallback } from "@multidash/ui/components/avatar"
import { Badge } from "@multidash/ui/components/badge"
import { Button } from "@multidash/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@multidash/ui/components/card"
import { Progress } from "@multidash/ui/components/progress"
import { Skeleton } from "@multidash/ui/components/skeleton"
import { Tooltip, TooltipContent, TooltipTrigger } from "@multidash/ui/components/tooltip"

import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = { title: "UI Elements" }

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">{children}</CardContent>
    </Card>
  )
}

export default function UiElementsPage() {
  return (
    <>
      <PageHeader
        title="UI Elements"
        description="The building blocks in @multidash/ui — reuse them in your own pages."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Section title="Buttons" description="Six variants and four sizes.">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">
            <Trash2 /> Delete
          </Button>
          <Button size="sm">
            <Plus /> Small
          </Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </Section>

        <Section title="Badges" description="Status and labels.">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </Section>

        <Section title="Avatars" description="Initials fallback with stacking.">
          <div className="flex -space-x-2">
            {["JD", "AL", "BS", "RP"].map((i) => (
              <Avatar key={i} className="size-9 ring-2 ring-card">
                <AvatarFallback>{i}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <Avatar className="size-12">
            <AvatarFallback className="bg-primary/15 text-primary">MD</AvatarFallback>
          </Avatar>
        </Section>

        <Section title="Tooltip" description="Accessible hover and focus hints.">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <Info /> Hover me
              </Button>
            </TooltipTrigger>
            <TooltipContent>Tooltips work with keyboard focus too</TooltipContent>
          </Tooltip>
        </Section>

        <Section title="Progress" description="Determinate progress bars.">
          <div className="w-full space-y-3">
            <Progress value={25} aria-label="25 percent" />
            <Progress value={60} aria-label="60 percent" />
            <Progress value={90} aria-label="90 percent" />
          </div>
        </Section>

        <Section title="Skeleton" description="Loading placeholders.">
          <div className="flex w-full items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}
