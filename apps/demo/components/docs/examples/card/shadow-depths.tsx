import { Card, CardDescription, CardHeader, CardTitle } from "@multidash/ui/components/card"

// Any Tailwind shadow utility works on top of the shadow variant.
const depths = ["shadow-sm", "shadow-md", "shadow-lg", "shadow-xl"]

export default function CardShadowDepths() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {depths.map((depth) => (
        <Card key={depth} variant="shadow" className={depth}>
          <CardHeader>
            <CardTitle className="font-mono text-sm">{depth}</CardTitle>
            <CardDescription>Static depth</CardDescription>
          </CardHeader>
        </Card>
      ))}
      <Card
        variant="shadow"
        className="shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        <CardHeader>
          <CardTitle className="text-sm">Hover me</CardTitle>
          <CardDescription>Lifts on hover</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
