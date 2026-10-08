"use client"

import { useState } from "react"
import { Button } from "@multidash/ui/components/button"
import { Step, Steps } from "@multidash/ui/components/steps"

const steps = [
  { title: "Account", description: "Your details" },
  { title: "Store", description: "Name & currency" },
  { title: "Payments", description: "Connect provider" },
  { title: "Launch", description: "Go live" },
]

export default function StepsBasic() {
  const [current, setCurrent] = useState(1)

  return (
    <div className="w-full max-w-2xl space-y-8">
      <Steps current={current}>
        {steps.map((step) => (
          <Step key={step.title} title={step.title} description={step.description} />
        ))}
      </Steps>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrent(current - 1)} disabled={current === 0}>
          Back
        </Button>
        <Button onClick={() => setCurrent(current + 1)} disabled={current === steps.length}>
          {current >= steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  )
}
