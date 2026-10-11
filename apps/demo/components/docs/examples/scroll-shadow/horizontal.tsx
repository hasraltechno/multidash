import { ScrollShadow } from "@multidash/ui/components/scroll-shadow"

const plans = ["Starter", "Basic", "Growth", "Team", "Business", "Scale", "Enterprise", "Custom"]

export default function ScrollShadowHorizontal() {
  return (
    <div className="w-full max-w-xl">
      <ScrollShadow orientation="horizontal" arrows className="flex gap-3 py-1">
        {plans.map((plan, i) => (
          <div key={plan} className="w-40 shrink-0 rounded-lg border bg-card p-4">
            <p className="text-sm font-medium">{plan}</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">${(i + 1) * 9}</p>
            <p className="text-xs text-muted-foreground">per month</p>
          </div>
        ))}
      </ScrollShadow>
    </div>
  )
}
