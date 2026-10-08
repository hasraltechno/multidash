import { Avatar, AvatarFallback } from "@multidash/ui/components/avatar"

const team = ["JD", "AL", "BS", "RP"]

export default function AvatarGroup() {
  return (
    <div className="flex -space-x-2">
      {team.map((initials) => (
        <Avatar key={initials} className="size-9 ring-2 ring-card">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      ))}
      <Avatar className="size-9 ring-2 ring-card">
        <AvatarFallback className="text-xs text-muted-foreground">+5</AvatarFallback>
      </Avatar>
    </div>
  )
}
