import { Label } from "@multidash/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@multidash/ui/components/radio-group"

const plans = [
  { value: "starter", name: "Starter", price: "$0", detail: "Up to 3 projects" },
  { value: "growth", name: "Growth", price: "$19", detail: "Unlimited projects" },
  { value: "scale", name: "Scale", price: "$49", detail: "Teams & SSO" },
]

// The whole card is the label, so clicking anywhere selects the option.
export default function RadioGroupCards() {
  return (
    <RadioGroup defaultValue="growth" className="w-full max-w-xl gap-3 sm:grid-cols-3" aria-label="Plan">
      {plans.map((plan) => (
        <Label
          key={plan.value}
          htmlFor={`plan-${plan.value}`}
          className="flex cursor-pointer flex-col items-start gap-3 rounded-lg border p-4 font-normal transition-colors hover:bg-accent/50 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
        >
          <div className="flex w-full items-center justify-between">
            <span className="font-medium">{plan.name}</span>
            <RadioGroupItem value={plan.value} id={`plan-${plan.value}`} />
          </div>
          <div>
            <p className="text-2xl font-semibold">{plan.price}</p>
            <p className="text-xs text-muted-foreground">{plan.detail}</p>
          </div>
        </Label>
      ))}
    </RadioGroup>
  )
}
