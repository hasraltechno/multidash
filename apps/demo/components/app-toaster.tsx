"use client"

import { useTheme } from "next-themes"
import { Toaster } from "@multidash/ui/components/toast"

/** Toaster that follows the light/dark toggle, not only the OS setting. */
export function AppToaster() {
  const { resolvedTheme } = useTheme()
  return <Toaster theme={resolvedTheme === "dark" ? "dark" : "light"} position="bottom-right" />
}
