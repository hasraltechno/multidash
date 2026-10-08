"use client"

import { Button } from "@multidash/ui/components/button"
import { toast } from "@multidash/ui/components/toast"

// Requires <Toaster /> mounted once in your root layout.
export default function ToastBasic() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event created", {
          description: "Team sync — Monday, 10:00 AM",
        })
      }
    >
      Show toast
    </Button>
  )
}
