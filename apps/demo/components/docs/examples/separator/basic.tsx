import { Separator } from "@multidash/ui/components/separator"

export default function SeparatorBasic() {
  return (
    <div className="w-full max-w-sm">
      <p className="text-sm font-medium">Multidash UI</p>
      <p className="text-sm text-muted-foreground">An open-source component library.</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>GitHub</span>
      </div>
    </div>
  )
}
