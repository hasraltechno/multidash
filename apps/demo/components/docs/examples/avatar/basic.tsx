import { Avatar, AvatarFallback, AvatarImage } from "@multidash/ui/components/avatar"

// Sample portraits from randomuser.me — replace with your users' photos.
export default function AvatarBasic() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="size-10">
        <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Olivia Martin" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <Avatar className="size-10">
        <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Liam Johnson" />
        <AvatarFallback>LJ</AvatarFallback>
      </Avatar>
      <Avatar className="size-10">
        <AvatarFallback className="bg-primary/15 text-primary">JD</AvatarFallback>
      </Avatar>
    </div>
  )
}
