// Demo notifications. In a real app these come from your API or a realtime channel.

export type NotificationTone = "success" | "destructive" | "info" | "primary" | "highlight" | "warning"

export type Notification = {
  id: string
  type: "order" | "payment" | "customer" | "report" | "mention" | "system"
  title: string
  description: string
  time: string
  href: string
  read: boolean
}

export const initialNotifications: Notification[] = [
  {
    id: "n1",
    type: "order",
    title: "New order INV-1048",
    description: "Olivia Martin bought a Pro License for $249.",
    time: "2 min ago",
    href: "/tables",
    read: false,
  },
  {
    id: "n2",
    type: "payment",
    title: "Payment failed",
    description: "Budi Santoso's card was declined for INV-1043.",
    time: "1 hour ago",
    href: "/tables",
    read: false,
  },
  {
    id: "n3",
    type: "mention",
    title: "Sofia mentioned you",
    description: "“Can you review the Q3 revenue numbers?”",
    time: "3 hours ago",
    href: "/",
    read: false,
  },
  {
    id: "n4",
    type: "customer",
    title: "12 new customers",
    description: "Your store gained 12 customers today.",
    time: "Yesterday",
    href: "/",
    read: true,
  },
  {
    id: "n5",
    type: "report",
    title: "Monthly report is ready",
    description: "September sales report is available to download.",
    time: "2 days ago",
    href: "/",
    read: true,
  },
  {
    id: "n6",
    type: "system",
    title: "Scheduled maintenance",
    description: "Sunday, 01:00–02:00 UTC. Expect brief downtime.",
    time: "3 days ago",
    href: "/errors/maintenance",
    read: true,
  },
]
