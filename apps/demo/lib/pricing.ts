// Pricing content. Edit prices, plan limits and copy here — the pricing page renders from this file.

import { componentDocs } from "@/lib/docs/components"

export type Plan = {
  id: string
  name: string
  price: number
  /** Shown under the price, e.g. "one-time payment". */
  billing: string
  description: string
  features: string[]
  highlighted?: boolean
}

export const proAvailable = false

/** Incentive shown next to the waitlist form. Set to null to hide it. */
export const waitlistPerk: string | null = "Waitlist members get early-bird pricing at launch."

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    billing: "MIT license, forever",
    description: "Everything in this demo, open source.",
    features: [
      "Overview dashboard",
      "Tables, forms & auth pages",
      `${componentDocs.length} UI components with docs`,
      "Light & dark mode",
      "Community support",
    ],
  },
  {
    id: "personal",
    name: "Personal",
    price: 49,
    billing: "one-time payment",
    description: "For freelancers and solo developers.",
    features: ["All Pro dashboards & apps", "1 developer", "Unlimited personal & client projects", "Lifetime updates"],
  },
  {
    id: "team",
    name: "Team",
    price: 129,
    billing: "one-time payment",
    description: "For small teams and agencies.",
    features: ["Everything in Personal", "Up to 5 developers", "Priority support"],
    highlighted: true,
  },
  {
    id: "extended",
    name: "Extended",
    price: 249,
    billing: "one-time payment",
    description: "For SaaS products sold to end users.",
    features: ["Everything in Team", "Unlimited developers", "Use in paid SaaS products", "Private Discord channel"],
  },
]

export const comparison: { feature: string; free: boolean }[] = [
  { feature: "Overview dashboard", free: true },
  { feature: "Base UI components", free: true },
  { feature: "Light / dark mode", free: true },
  { feature: "Analytics, E-commerce, CRM, SaaS & Finance dashboards", free: false },
  { feature: "Kanban, Calendar, Chat, Inbox & Invoice apps", free: false },
  { feature: "Working authentication & role-based access", free: false },
  { feature: "Database layer (Drizzle ORM)", free: false },
  { feature: "Payments — Stripe, Midtrans & Xendit", free: false },
  { feature: "i18n (English, Bahasa Indonesia)", free: false },
  { feature: "Data tables: sorting, filters, selection (TanStack)", free: true },
  { feature: "Data table CSV/Excel export & server-side pagination", free: false },
]

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Is the free version really free?",
    answer:
      "Yes. Multidash Free is MIT licensed — use it in personal and commercial projects without attribution or fees.",
  },
  {
    question: "When will Multidash Pro be available?",
    answer:
      "Pro is in active development. Join the waitlist and you'll get an email the moment it launches — no spam, one email.",
  },
  {
    question: "Is it a subscription?",
    answer: "No. Every Pro license is a one-time payment with lifetime updates.",
  },
  {
    question: "How do I get the Pro source code?",
    answer:
      "After purchase you're invited to the private GitHub repository, so you can pull updates with git like any other project.",
  },
  {
    question: "Which payment methods are supported?",
    answer: "Cards and PayPal worldwide. Indonesian payment methods are planned for launch.",
  },
]
