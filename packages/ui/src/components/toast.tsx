"use client"

import * as React from "react"
import { CircleCheck, CircleX, Info, Loader2, TriangleAlert } from "lucide-react"
import { Toaster as Sonner, toast, type ToasterProps } from "sonner"

/**
 * Mount <Toaster /> once near the root of your app, then call toast() from anywhere.
 * Pass `theme` from your theme provider (e.g. next-themes' resolvedTheme) so toasts follow dark mode.
 */
function Toaster({ theme = "system", ...props }: ToasterProps) {
  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheck className="size-4 text-success-text" />,
        info: <Info className="size-4 text-info-text" />,
        warning: <TriangleAlert className="size-4 text-warning-text" />,
        error: <CircleX className="size-4 text-destructive-text" />,
        loading: <Loader2 className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster, toast }
