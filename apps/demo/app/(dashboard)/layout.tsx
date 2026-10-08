import { SidebarNav } from "@/components/layout/sidebar-nav"
import { SiteHeader } from "@/components/layout/site-header"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh">
      <aside
        data-sidebar-panel
        className="sticky top-0 z-40 hidden h-svh w-64 shrink-0 border-r bg-sidebar transition-[width] duration-200 ease-out motion-reduce:transition-none lg:block collapsed:w-16"
      >
        <SidebarNav variant="desktop" />
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <SiteHeader />
        <main className="w-full max-w-7xl flex-1 space-y-6 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
