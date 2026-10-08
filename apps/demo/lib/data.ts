// Static demo data. Multidash Pro replaces this with a real database layer.

export type Stat = {
  label: string
  value: string
  delta: number
  /** Whether an increase is good news for this metric. */
  upIsGood: boolean
}

export const stats: Stat[] = [
  { label: "Revenue this month", value: "$8,900", delta: 8.5, upIsGood: true },
  { label: "Orders", value: "1,284", delta: 8.1, upIsGood: true },
  { label: "New customers", value: "312", delta: -3.2, upIsGood: true },
  { label: "Refund rate", value: "1.8%", delta: -0.4, upIsGood: false },
]

export const monthlyRevenue = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 4800 },
  { month: "Mar", revenue: 4550 },
  { month: "Apr", revenue: 5300 },
  { month: "May", revenue: 5900 },
  { month: "Jun", revenue: 6400 },
  { month: "Jul", revenue: 6100 },
  { month: "Aug", revenue: 7000 },
  { month: "Sep", revenue: 7600 },
  { month: "Oct", revenue: 7350 },
  { month: "Nov", revenue: 8200 },
  { month: "Dec", revenue: 8900 },
]

export const weeklySales = [
  { day: "Mon", online: 186, store: 80 },
  { day: "Tue", online: 205, store: 98 },
  { day: "Wed", online: 237, store: 120 },
  { day: "Thu", online: 173, store: 110 },
  { day: "Fri", online: 209, store: 130 },
  { day: "Sat", online: 264, store: 162 },
  { day: "Sun", online: 214, store: 140 },
]

export const trafficSources = [
  { source: "Organic search", visitors: 12840 },
  { source: "Direct", visitors: 8210 },
  { source: "Social", visitors: 5320 },
  { source: "Referral", visitors: 3150 },
  { source: "Email", visitors: 1890 },
]

export type OrderStatus = "paid" | "pending" | "refunded" | "failed"

export type Order = {
  id: string
  customer: string
  email: string
  product: string
  date: string
  amount: number
  status: OrderStatus
}

const recentOrders: Order[] = [
  { id: "INV-1048", customer: "Olivia Martin", email: "olivia@example.com", product: "Pro License", date: "2026-10-07", amount: 249, status: "paid" },
  { id: "INV-1047", customer: "Jackson Lee", email: "jackson@example.com", product: "Team License", date: "2026-10-07", amount: 129, status: "pending" },
  { id: "INV-1046", customer: "Isabella Nguyen", email: "isabella@example.com", product: "Personal License", date: "2026-10-06", amount: 49, status: "paid" },
  { id: "INV-1045", customer: "William Kim", email: "will@example.com", product: "Team License", date: "2026-10-06", amount: 129, status: "refunded" },
  { id: "INV-1044", customer: "Sofia Davis", email: "sofia@example.com", product: "Personal License", date: "2026-10-05", amount: 49, status: "paid" },
  { id: "INV-1043", customer: "Budi Santoso", email: "budi@example.com", product: "Pro License", date: "2026-10-05", amount: 249, status: "failed" },
  { id: "INV-1042", customer: "Ayu Lestari", email: "ayu@example.com", product: "Personal License", date: "2026-10-04", amount: 49, status: "paid" },
  { id: "INV-1041", customer: "Liam Johnson", email: "liam@example.com", product: "Team License", date: "2026-10-04", amount: 129, status: "paid" },
  { id: "INV-1040", customer: "Emma Wilson", email: "emma@example.com", product: "Pro License", date: "2026-10-03", amount: 249, status: "pending" },
  { id: "INV-1039", customer: "Rizky Pratama", email: "rizky@example.com", product: "Personal License", date: "2026-10-03", amount: 49, status: "paid" },
  { id: "INV-1038", customer: "Noah Brown", email: "noah@example.com", product: "Team License", date: "2026-10-02", amount: 129, status: "paid" },
  { id: "INV-1037", customer: "Mia Garcia", email: "mia@example.com", product: "Personal License", date: "2026-10-01", amount: 49, status: "refunded" },
]

const customers = [
  ["Ethan Clark", "ethan"], ["Dewi Anggraini", "dewi"], ["Lucas Silva", "lucas"], ["Hana Sato", "hana"],
  ["Arjun Mehta", "arjun"], ["Chloe Martin", "chloe"], ["Fajar Nugroho", "fajar"], ["Grace Lee", "grace"],
  ["Mateo Rossi", "mateo"], ["Siti Rahma", "siti"], ["Oliver Wright", "oliver"], ["Nadia Putri", "nadia"],
  ["Daniel Park", "daniel"], ["Ava Thompson", "ava"],
] as const

const products = [
  ["Personal License", 49],
  ["Team License", 129],
  ["Pro License", 249],
] as const

const statuses: OrderStatus[] = ["paid", "paid", "paid", "pending", "paid", "refunded", "paid", "failed"]

// Deterministic older orders so sorting and pagination have something to work with.
const olderOrders: Order[] = Array.from({ length: 28 }, (_, i) => {
  const [customer, handle] = customers[i % customers.length]!
  const [product, amount] = products[(i * 7) % products.length]!
  const day = 30 - Math.floor(i / 2)
  return {
    id: `INV-${1036 - i}`,
    customer,
    email: `${handle}@example.com`,
    product,
    date: `2026-09-${String(day).padStart(2, "0")}`,
    amount,
    status: statuses[(i * 5) % statuses.length]!,
  }
})

export const orders: Order[] = [...recentOrders, ...olderOrders]

export const topProducts = [
  { name: "Pro License", sales: 412, revenue: 102588 },
  { name: "Team License", sales: 538, revenue: 69402 },
  { name: "Personal License", sales: 1260, revenue: 61740 },
]
