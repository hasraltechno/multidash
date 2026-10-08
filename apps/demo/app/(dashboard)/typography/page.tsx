import type { Metadata } from "next"

import { ComponentPreview } from "@/components/docs/component-preview"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Typography",
  description: "Type styles for headings, body text, lists, quotes and code — built with Tailwind CSS utility classes.",
}

const styles = [
  { id: "h1", title: "Heading 1" },
  { id: "h2", title: "Heading 2" },
  { id: "h3", title: "Heading 3" },
  { id: "h4", title: "Heading 4" },
  { id: "p", title: "Paragraph" },
  { id: "lead", title: "Lead" },
  { id: "large-small-muted", title: "Large, small and muted" },
  { id: "blockquote", title: "Blockquote" },
  { id: "list", title: "Lists" },
  { id: "inline-code", title: "Inline code" },
  { id: "link", title: "Link" },
]

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        title="Typography"
        description="Type styles are plain Tailwind classes — copy the class names, no extra component needed. Text uses the system font stack defined in the theme."
      />
      <div className="w-full max-w-6xl space-y-10">
        {styles.map((style) => (
          <section key={style.id} aria-labelledby={`type-${style.id}`} className="space-y-3">
            <h2 id={`type-${style.id}`} className="font-semibold tracking-tight">
              {style.title}
            </h2>
            <ComponentPreview path={`typography/${style.id}`} align="start" className="min-h-0" />
          </section>
        ))}
      </div>
    </>
  )
}
