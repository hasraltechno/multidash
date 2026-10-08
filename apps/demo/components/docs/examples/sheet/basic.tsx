import { Button } from "@multidash/ui/components/button"
import { Input } from "@multidash/ui/components/input"
import { Label } from "@multidash/ui/components/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@multidash/ui/components/sheet"

export default function SheetBasic() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile, then save.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-4">
          <div className="grid gap-2">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" defaultValue="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-email">Email</Label>
            <Input id="sheet-email" defaultValue="jane@example.com" />
          </div>
        </div>
        <div className="mt-auto p-4">
          <SheetClose asChild>
            <Button className="w-full">Save changes</Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
