import { Button } from "@multidash/ui/components/button"
import { Spinner } from "@multidash/ui/components/spinner"

export default function SpinnerBasic() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" className="text-primary" />
      <Spinner size="xl" className="text-muted-foreground" />
      <Button disabled>
        <Spinner size="sm" label="Saving" /> Saving...
      </Button>
    </div>
  )
}
