import Link from "next/link"

export default function TypographyLink() {
  return (
    <p className="leading-7">
      Read the{" "}
      <Link href="/ui-elements" className="font-medium text-primary underline underline-offset-4">
        component docs
      </Link>{" "}
      to learn more.
    </p>
  )
}
