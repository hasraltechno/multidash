import { CircleCheck, CircleX, TriangleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@multidash/ui/components/alert"

export default function AlertVariants() {
  return (
    <div className="grid w-full max-w-lg gap-3">
      <Alert variant="success">
        <CircleCheck />
        <AlertTitle>Payment received</AlertTitle>
        <AlertDescription>Invoice INV-1048 has been paid.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>Storage almost full</AlertTitle>
        <AlertDescription>You have used 92% of your storage quota.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleX />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>Your card was declined. Please update your billing details.</AlertDescription>
      </Alert>
    </div>
  )
}
