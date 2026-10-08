import {
  BarChart3,
  CalendarDays,
  FormInput,
  KanbanSquare,
  LayoutDashboard,
  LogIn,
  MessageSquare,
  Shapes,
  ShoppingCart,
  Table2,
  Type,
  Tag,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react"

import { componentDocs } from "@/lib/docs/components"

export type NavItem = {
  title: string
  href: string
  icon: LucideIcon
  /** Available in Multidash Pro only — links to the upgrade page. */
  pro?: boolean
  /** Renders a collapsible sub-menu. `href` is the section prefix used for the active state. */
  children?: { title: string; href: string }[]
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

export const navGroups: NavGroup[] = [
  {
    label: "Dashboards",
    items: [
      { title: "Overview", href: "/", icon: LayoutDashboard },
      { title: "Analytics", href: "/pro/analytics", icon: BarChart3, pro: true },
      { title: "E-commerce", href: "/pro/ecommerce", icon: ShoppingCart, pro: true },
      { title: "CRM", href: "/pro/crm", icon: Users, pro: true },
    ],
  },
  {
    label: "Apps",
    items: [
      { title: "Kanban", href: "/pro/kanban", icon: KanbanSquare, pro: true },
      { title: "Calendar", href: "/pro/calendar", icon: CalendarDays, pro: true },
      { title: "Chat", href: "/pro/chat", icon: MessageSquare, pro: true },
    ],
  },
  {
    label: "Pages",
    items: [
      { title: "Tables", href: "/tables", icon: Table2 },
      { title: "Forms", href: "/forms", icon: FormInput },
      {
        title: "UI Elements",
        href: "/ui-elements",
        icon: Shapes,
        children: [
          { title: "Introduction", href: "/ui-elements" },
          ...componentDocs.map((doc) => ({ title: doc.name, href: `/ui-elements/${doc.slug}` })),
        ],
      },
      { title: "Typography", href: "/typography", icon: Type },
      { title: "Pricing", href: "/pricing", icon: Tag },
      { title: "Sign in", href: "/login", icon: LogIn },
      { title: "Sign up", href: "/register", icon: UserPlus },
    ],
  },
]
