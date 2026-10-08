import { Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@multidash/ui/components/alert"

export default function AlertBasic() {
  return (
    <Alert className="max-w-lg">
      <Info />
      <AlertTitle>Scheduled maintenance</AlertTitle>
      <AlertDescription>
        The dashboard will be unavailable on Sunday from 01:00 to 02:00 UTC.
      </AlertDescription>
    </Alert>
  )
}
