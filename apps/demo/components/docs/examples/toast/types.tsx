"use client"

import { Button } from "@multidash/ui/components/button"
import { toast } from "@multidash/ui/components/toast"

function saveReport() {
  return new Promise((resolve) => setTimeout(resolve, 1500))
}

export default function ToastTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast.success("Changes saved")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error("Payment failed", { description: "Your card was declined." })}>
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Invoice deleted", {
            action: { label: "Undo", onClick: () => toast.success("Invoice restored") },
          })
        }
      >
        With action
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(saveReport(), {
            loading: "Saving report...",
            success: "Report saved",
            error: "Could not save report",
          })
        }
      >
        Promise
      </Button>
    </div>
  )
}
