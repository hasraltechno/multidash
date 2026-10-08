import Link from "next/link"
import { CreditCard, LogOut, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@multidash/ui/components/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@multidash/ui/components/dropdown-menu"

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="rounded-full outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        aria-label="Account menu"
      >
        <Avatar className="size-8">
          {/* Sample portrait from randomuser.me — replace with the signed-in user's photo. */}
          <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="Jane Doe" />
          <AvatarFallback className="bg-primary/15 text-primary-text">JD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <p className="text-sm font-medium">Jane Doe</p>
          <p className="text-xs text-muted-foreground">jane@example.com</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard /> Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings /> Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/login">
            <LogOut /> Sign out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
