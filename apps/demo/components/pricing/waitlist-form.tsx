"use client"

import { useActionState } from "react"
import { CircleCheck, Loader2 } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import { Input } from "@multidash/ui/components/input"

import { joinWaitlistAction, type WaitlistState } from "@/lib/actions/waitlist"

const initialState: WaitlistState = { status: "idle" }

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlistAction, initialState)

  if (state.status === "success") {
    return (
      <p role="status" className="flex items-center gap-2 text-sm font-medium text-success">
        <CircleCheck className="size-4" aria-hidden />
        You&apos;re on the list! We&apos;ll email you when Pro launches.
      </p>
    )
  }

  return (
    <form action={formAction} className="w-full max-w-md space-y-2" noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <Input
          // Remount with the submitted value — React resets the form after every action.
          key={state.status === "error" ? state.message + state.email : "idle"}
          defaultValue={state.status === "error" ? state.email : ""}
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          aria-invalid={state.status === "error" || undefined}
          aria-describedby={state.status === "error" ? "waitlist-error" : undefined}
          className="bg-card"
        />
        {/* Honeypot — hidden from people, tempting for bots. */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
        <Button type="submit" disabled={pending} className="shrink-0">
          {pending && <Loader2 className="animate-spin" aria-hidden />}
          Join waitlist
        </Button>
      </div>
      {state.status === "error" && (
        <p id="waitlist-error" role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}
    </form>
  )
}
