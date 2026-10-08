import "server-only"

/**
 * Waitlist storage. Configure ONE of these on your host (e.g. Vercel → Settings → Environment Variables):
 *
 *   RESEND_API_KEY (+ optional RESEND_SEGMENT_ID)  → adds the email as a Resend contact
 *   WAITLIST_WEBHOOK_URL                           → POSTs { email, source, createdAt } as JSON
 *
 * With neither set, signups are only logged in development and rejected in production.
 */

export type WaitlistResult = { ok: true } | { ok: false; reason: "not-configured" | "failed" }

async function addToResend(email: string, apiKey: string): Promise<boolean> {
  const segmentId = process.env.RESEND_SEGMENT_ID
  const res = await fetch("https://api.resend.com/contacts", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      unsubscribed: false,
      ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
    }),
  })
  // An address that is already on the list is still a successful signup.
  if (res.ok || res.status === 409) return true
  console.error("[waitlist] Resend error", res.status, await res.text())
  return false
}

async function postToWebhook(email: string, url: string): Promise<boolean> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source: "multidash-pricing", createdAt: new Date().toISOString() }),
  })
  if (res.ok) return true
  console.error("[waitlist] Webhook error", res.status)
  return false
}

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  const resendKey = process.env.RESEND_API_KEY
  const webhookUrl = process.env.WAITLIST_WEBHOOK_URL

  try {
    if (resendKey) return (await addToResend(email, resendKey)) ? { ok: true } : { ok: false, reason: "failed" }
    if (webhookUrl) return (await postToWebhook(email, webhookUrl)) ? { ok: true } : { ok: false, reason: "failed" }
  } catch (error) {
    console.error("[waitlist] Request failed", error)
    return { ok: false, reason: "failed" }
  }

  if (process.env.NODE_ENV !== "production") {
    console.info(`[waitlist] (dev, not stored) ${email}`)
    return { ok: true }
  }
  return { ok: false, reason: "not-configured" }
}
