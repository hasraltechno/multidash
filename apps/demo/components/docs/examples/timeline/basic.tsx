import { CircleCheck, CreditCard, MessageSquare, Package, UserPlus } from "lucide-react"
import {
  Timeline,
  TimelineDescription,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@multidash/ui/components/timeline"

export default function TimelineBasic() {
  return (
    <Timeline className="w-full max-w-md">
      <TimelineItem icon={<CircleCheck className="text-success-text" />}>
        <div className="flex items-baseline justify-between gap-4">
          <TimelineTitle>Order delivered</TimelineTitle>
          <TimelineTime dateTime="2026-10-07T14:20">2:20 PM</TimelineTime>
        </div>
        <TimelineDescription>Signed by Olivia Martin at the front desk.</TimelineDescription>
      </TimelineItem>
      <TimelineItem icon={<Package />}>
        <div className="flex items-baseline justify-between gap-4">
          <TimelineTitle>Out for delivery</TimelineTitle>
          <TimelineTime dateTime="2026-10-07T08:05">8:05 AM</TimelineTime>
        </div>
      </TimelineItem>
      <TimelineItem icon={<MessageSquare />}>
        <div className="flex items-baseline justify-between gap-4">
          <TimelineTitle>Customer left a note</TimelineTitle>
          <TimelineTime dateTime="2026-10-06T19:40">Yesterday</TimelineTime>
        </div>
        <TimelineDescription>&ldquo;Please leave the package with reception.&rdquo;</TimelineDescription>
      </TimelineItem>
      <TimelineItem icon={<CreditCard />}>
        <div className="flex items-baseline justify-between gap-4">
          <TimelineTitle>Payment of $249 received</TimelineTitle>
          <TimelineTime dateTime="2026-10-06T09:15">Oct 6</TimelineTime>
        </div>
      </TimelineItem>
      <TimelineItem icon={<UserPlus />}>
        <div className="flex items-baseline justify-between gap-4">
          <TimelineTitle>Account created</TimelineTitle>
          <TimelineTime dateTime="2026-10-06T09:02">Oct 6</TimelineTime>
        </div>
      </TimelineItem>
    </Timeline>
  )
}
