import { Step, Steps } from "@multidash/ui/components/steps"

export default function StepsVertical() {
  return (
    <Steps current={2} orientation="vertical" className="w-full max-w-sm">
      <Step title="Order placed" description="Oct 7, 09:12" />
      <Step title="Payment confirmed" description="Oct 7, 09:15" />
      <Step title="Packed" description="Preparing your order" />
      <Step title="Shipped" />
      <Step title="Delivered" />
    </Steps>
  )
}
