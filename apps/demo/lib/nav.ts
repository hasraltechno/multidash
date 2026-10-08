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
  Tag,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react"

export type NavItem = {
  title: string
  href: string
  icon: LucideIcon
  /** Available in Multidash Pro only — links to the upgrade page. */
  pro?: boolean
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
      { title: "UI Elements", href: "/ui-elements", icon: Shapes },
      { title: "Pricing", href: "/pricing", icon: Tag },
      { title: "Sign in", href: "/login", icon: LogIn },
      { title: "Sign up", href: "/register", icon: UserPlus },
    ],
  },
]
