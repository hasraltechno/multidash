"use server"

import { joinWaitlist } from "@/lib/waitlist"

export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; email: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function joinWaitlistAction(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  // Honeypot: real users never see or fill this field.
  if (formData.get("company")) return { status: "success" }

  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { status: "error", message: "Please enter a valid email address.", email }
  }

  const result = await joinWaitlist(email)
  if (result.ok) return { status: "success" }

  return {
    status: "error",
    email,
    message:
      result.reason === "not-configured"
        ? "The waitlist isn't open yet. Please check back soon."
        : "Something went wrong. Please try again in a moment.",
  }
}
