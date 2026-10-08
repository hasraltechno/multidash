import "server-only"

import { readFile } from "node:fs/promises"
import { join } from "node:path"

// Files are read at build time — every docs page is statically generated.
const examplesDir = join(process.cwd(), "components/docs/examples")
const uiDir = join(process.cwd(), "../../packages/ui/src/components")

export async function readExampleSource(path: string) {
  return (await readFile(join(examplesDir, `${path}.tsx`), "utf8")).trim()
}

/** Component source as a user would paste it into their own project. */
export async function readComponentSource(slug: string) {
  const source = await readFile(join(uiDir, `${slug}.tsx`), "utf8")
  return source
    .replaceAll('from "../lib/utils"', 'from "@/lib/utils"')
    .replace(/from "\.\/([\w-]+)"/g, 'from "@/components/ui/$1"')
    .trim()
}

export function getExports(source: string): string[] {
  const match = source.match(/export\s*\{([^}]+)\}/)
  return match?.[1]?.split(",").map((s) => s.trim()).filter(Boolean) ?? []
}

/** Other Multidash components a component builds on (slugs). */
export function getComponentDependencies(source: string): string[] {
  return [...source.matchAll(/from "@\/components\/ui\/([\w-]+)"/g)].map((m) => m[1]!).sort()
}

/** npm packages for a component and every Multidash component it builds on. */
export async function getAllDependencies(slug: string, seen = new Set<string>()): Promise<string[]> {
  if (seen.has(slug)) return []
  seen.add(slug)
  const source = await readComponentSource(slug)
  const packages = new Set(getDependencies(source))
  for (const dep of getComponentDependencies(source)) {
    for (const pkg of await getAllDependencies(dep, seen)) packages.add(pkg)
  }
  return [...packages].sort()
}

/** npm packages imported by a component (plus the cn() helper's dependencies). */
export function getDependencies(source: string): string[] {
  const packages = new Set(["clsx", "tailwind-merge"])
  for (const [, spec] of source.matchAll(/from\s+"([^"./@][^"]*|@[^"/]+\/[^"/]+)"/g)) {
    if (spec && spec !== "react") packages.add(spec)
  }
  return [...packages].sort()
}
