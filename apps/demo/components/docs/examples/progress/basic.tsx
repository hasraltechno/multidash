import { Progress } from "@multidash/ui/components/progress"

export default function ProgressBasic() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex justify-between text-sm">
        <span>Storage used</span>
        <span className="text-muted-foreground tabular-nums">64%</span>
      </div>
      <Progress value={64} aria-label="Storage used" />
    </div>
  )
}
