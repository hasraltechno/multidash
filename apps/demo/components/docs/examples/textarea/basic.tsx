import { Label } from "@multidash/ui/components/label"
import { Textarea } from "@multidash/ui/components/textarea"

export default function TextareaBasic() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" rows={4} placeholder="Type your message here." />
      <p className="text-xs text-muted-foreground">Your message will be sent to the support team.</p>
    </div>
  )
}
