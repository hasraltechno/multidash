import { Skeleton } from "@multidash/ui/components/skeleton"

export default function SkeletonCard() {
  return (
    <div className="w-full max-w-xs space-y-3 rounded-xl border p-4">
      <Skeleton className="h-32 w-full rounded-lg" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  )
}
