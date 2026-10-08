import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@multidash/ui/components/badge"
import { Button } from "@multidash/ui/components/button"

import { ComponentPreview } from "@/components/docs/component-preview"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Tables",
  description: "Three levels of tables: a static table, a standard table with search and pagination, and an advanced TanStack data table.",
}

const levels = [
  {
    id: "basic",
    path: "table/basic",
    title: "Basic table",
    description: "Static markup for small, fixed datasets — just the Table component.",
    tags: ["No dependencies"],
    docs: "/ui-elements/table",
  },
  {
    id: "standard",
    path: "tables/standard",
    title: "Standard table",
    description: "Search, a status filter and pagination with plain React state. Easy to read and adapt.",
    tags: ["No dependencies", "Search", "Filter", "Pagination"],
  },
  {
    id: "advanced",
    path: "data-table/advanced",
    title: "Advanced data table",
    description:
      "The DataTable component built on TanStack Table v9 (formerly React Table): sortable columns, faceted filters, column visibility, row selection with bulk actions, row actions and page sizes.",
    tags: ["TanStack Table", "Sorting", "Faceted filters", "Selection", "Column visibility"],
    docs: "/ui-elements/data-table",
  },
]

export default function TablesPage() {
  return (
    <>
      <PageHeader
        title="Tables"
        description="Pick the level that fits your data — every example shows its full source in the Code tab."
      />

      <div className="space-y-12">
        {levels.map((level, index) => (
          <section key={level.id} aria-labelledby={`table-${level.id}`} className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <h2 id={`table-${level.id}`} className="text-lg font-semibold tracking-tight">
                  <span className="text-muted-foreground">{index + 1}.</span> {level.title}
                </h2>
                <p className="max-w-3xl text-sm text-muted-foreground">{level.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {level.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              {level.docs && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={level.docs}>
                    Docs <ArrowRight />
                  </Link>
                </Button>
              )}
            </div>
            <ComponentPreview path={level.path} align="start" />
          </section>
        ))}
      </div>
    </>
  )
}
