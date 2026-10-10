import { componentDocs } from "@/lib/docs/components"
import { componentMarkdown } from "@/lib/docs/markdown"

// Served at /ui-elements/<slug>.md through a rewrite in next.config.ts.
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return componentDocs.map((doc) => ({ name: `${doc.slug}.md` }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
  const markdown = await componentMarkdown((await params).name.replace(/\.md$/, ""))
  if (!markdown) return new Response("Not found", { status: 404 })
  return new Response(markdown, { headers: { "Content-Type": "text/markdown; charset=utf-8" } })
}
