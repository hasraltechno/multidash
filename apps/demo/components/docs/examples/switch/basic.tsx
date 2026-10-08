import { Label } from "@multidash/ui/components/label"
import { Switch } from "@multidash/ui/components/switch"

export default function SwitchBasic() {
  return (
    <div className="w-full max-w-sm space-y-5">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-xs text-muted-foreground">Receive product news and offers.</p>
        </div>
        <Switch id="marketing" defaultChecked />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="airplane">Airplane mode</Label>
        <Switch id="airplane" />
      </div>
    </div>
  )
}
