import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@multidash/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@multidash/ui/components/card"
import { Checkbox } from "@multidash/ui/components/checkbox"
import { Input } from "@multidash/ui/components/input"
import { Label } from "@multidash/ui/components/label"

import { GitHubIcon } from "@/components/icons"

export const metadata: Metadata = { title: "Sign up" }

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Create an account</CardTitle>
        <CardDescription>Start your 14-day free trial</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <Button variant="outline" className="w-full">
          <GitHubIcon className="size-4" /> Sign up with GitHub
        </Button>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
        </div>
        {/* UI only — Multidash Pro ships with working authentication. */}
        <form action="/" className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Jane Doe" autoComplete="name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" autoComplete="new-password" minLength={8} required />
            <p className="text-xs text-muted-foreground">At least 8 characters.</p>
          </div>
          <div className="flex items-start gap-2">
            <Checkbox id="terms" required className="mt-0.5" />
            <Label htmlFor="terms" className="leading-snug font-normal">
              I agree to the Terms of Service and Privacy Policy
            </Label>
          </div>
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-foreground underline-offset-4 hover:underline">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
