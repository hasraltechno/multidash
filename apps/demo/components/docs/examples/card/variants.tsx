import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@multidash/ui/components/card"

const variants = [
  { variant: "default", title: "Default", description: "Thin border with a subtle shadow." },
  { variant: "bordered", title: "Bordered", description: "A 2px border and no shadow — for flat layouts." },
  { variant: "shadow", title: "Shadow", description: "No border, a deeper shadow — for cards that should stand out." },
] as const

export default function CardVariants() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-3">
      {variants.map(({ variant, title, description }) => (
        <Card key={variant} variant={variant}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">variant=&quot;{variant}&quot;</code>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
