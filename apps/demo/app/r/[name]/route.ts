import { getRegistryItem, registryItemNames } from "@/lib/docs/registry"

// shadcn registry items, e.g. /r/button.json — generated at build time.
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return registryItemNames().map((name) => ({ name: `${name}.json` }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
  const item = await getRegistryItem((await params).name.replace(/\.json$/, ""))
  if (!item) return Response.json({ error: "Not found" }, { status: 404 })
  return Response.json(item)
}
