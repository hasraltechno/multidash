"use client"

import { useState } from "react"
import {
  getPageRange,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@multidash/ui/components/pagination"

const TOTAL_PAGES = 20

// In a real app, use real URLs (e.g. ?page=3) so pages are linkable; here clicks update state.
export default function PaginationBasic() {
  const [page, setPage] = useState(6)
  const go = (next: number) => (event: React.MouseEvent) => {
    event.preventDefault()
    setPage(Math.min(Math.max(next, 1), TOTAL_PAGES))
  }

  return (
    <div className="space-y-4 text-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={go(page - 1)} aria-disabled={page === 1} />
          </PaginationItem>
          {getPageRange(page, TOTAL_PAGES).map((item, i) => (
            <PaginationItem key={i}>
              {item === "ellipsis" ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink href="#" isActive={item === page} onClick={go(item)}>
                  {item}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={go(page + 1)} aria-disabled={page === TOTAL_PAGES} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="text-sm text-muted-foreground">
        Page {page} of {TOTAL_PAGES}
      </p>
    </div>
  )
}
