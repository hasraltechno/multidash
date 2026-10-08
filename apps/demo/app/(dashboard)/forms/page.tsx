import type { Metadata } from "next"
import { Button } from "@multidash/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@multidash/ui/components/card"
import { Checkbox } from "@multidash/ui/components/checkbox"
import { Input } from "@multidash/ui/components/input"
import { Label } from "@multidash/ui/components/label"
import { NativeSelect } from "@multidash/ui/components/native-select"
import { Separator } from "@multidash/ui/components/separator"
import { Switch } from "@multidash/ui/components/switch"
import { Textarea } from "@multidash/ui/components/textarea"

import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = { title: "Forms" }

export default function FormsPage() {
  return (
    <>
      <PageHeader title="Forms" description="Common form layouts built from the base inputs." />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>This information will be displayed publicly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="profile-form" className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" defaultValue="Jane" autoComplete="given-name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" defaultValue="Doe" autoComplete="family-name" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="jane@example.com" autoComplete="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <NativeSelect id="country" defaultValue="id">
                  <option value="id">Indonesia</option>
                  <option value="my">Malaysia</option>
                  <option value="sg">Singapore</option>
                  <option value="us">United States</option>
                </NativeSelect>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <NativeSelect id="role" defaultValue="admin">
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </NativeSelect>
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" rows={4} placeholder="Tell us a little about yourself" />
                <p className="text-xs text-muted-foreground">Max 280 characters.</p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="justify-end gap-2 border-t pt-6">
            <Button variant="outline" type="reset" form="profile-form">
              Cancel
            </Button>
            <Button type="submit" form="profile-form">
              Save changes
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Choose what you want to hear about.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {[
              { id: "orders", label: "New orders", hint: "When a customer places an order", on: true },
              { id: "reviews", label: "Product reviews", hint: "When someone leaves a review", on: true },
              { id: "news", label: "Newsletter", hint: "Product news and updates", on: false },
            ].map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <Label htmlFor={item.id}>{item.label}</Label>
                  <p className="text-xs text-muted-foreground">{item.hint}</p>
                </div>
                <Switch id={item.id} defaultChecked={item.on} />
              </div>
            ))}
            <Separator />
            <div className="space-y-3">
              <p className="text-sm font-medium">Delivery</p>
              {[
                { id: "email-ch", label: "Email", on: true },
                { id: "push-ch", label: "Push notifications", on: false },
                { id: "sms-ch", label: "SMS", on: false },
              ].map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <Checkbox id={c.id} defaultChecked={c.on} />
                  <Label htmlFor={c.id} className="font-normal">
                    {c.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
