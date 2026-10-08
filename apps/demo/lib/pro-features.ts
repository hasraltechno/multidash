export type ProFeature = {
  slug: string
  title: string
  description: string
  highlights: string[]
}

export const proFeatures: ProFeature[] = [
  {
    slug: "analytics",
    title: "Analytics Dashboard",
    description: "Traffic, conversion funnels and cohort retention in one view.",
    highlights: ["Funnel & cohort charts", "Date-range filters", "Real-time visitors widget"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Dashboard",
    description: "Orders, products, customers and revenue for online stores.",
    highlights: ["Product & order management", "Inventory alerts", "Stripe, Midtrans & Xendit ready"],
  },
  {
    slug: "crm",
    title: "CRM Dashboard",
    description: "Pipeline, deals and contacts for sales teams.",
    highlights: ["Deal pipeline board", "Contact profiles", "Activity timeline"],
  },
  {
    slug: "kanban",
    title: "Kanban Board",
    description: "Drag-and-drop task board with columns, labels and assignees.",
    highlights: ["Drag & drop", "Labels & due dates", "Persisted to database"],
  },
  {
    slug: "calendar",
    title: "Calendar",
    description: "Month, week and day views with event management.",
    highlights: ["Month / week / day views", "Create & edit events", "Recurring events"],
  },
  {
    slug: "chat",
    title: "Chat",
    description: "Team messaging UI with conversations and attachments.",
    highlights: ["Conversation list", "Attachments & emoji", "Unread indicators"],
  },
]

export function getProFeature(slug: string) {
  return proFeatures.find((feature) => feature.slug === slug)
}
