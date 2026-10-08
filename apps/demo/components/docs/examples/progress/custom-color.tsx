import { Progress } from "@multidash/ui/components/progress"

export default function ProgressCustomColor() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <Progress value={40} aria-label="Task progress" />
      <Progress
        value={75}
        aria-label="Upload progress"
        className="bg-success/15"
        indicatorClassName="bg-success"
      />
      <Progress
        value={92}
        aria-label="Quota used"
        className="bg-destructive/15"
        indicatorClassName="bg-destructive"
      />
    </div>
  )
}
