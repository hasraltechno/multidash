import Link from "next/link"
import { Button } from "@multidash/ui/components/button"

// asChild passes the button styles to its child — here a Next.js <Link>.
export default function ButtonAsLink() {
  return (
    <Button asChild variant="outline">
      <Link href="/pricing">View pricing</Link>
    </Button>
  )
}
