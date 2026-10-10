// Install commands per package manager. Shared by the docs pages, the Markdown docs and the client switcher.

export const packageManagers = ["pnpm", "npm", "yarn", "bun"] as const
export type PackageManager = (typeof packageManagers)[number]

/** A command the docs show: `add` runs the shadcn CLI, `install` adds npm packages. */
export type Command = { kind: "add" | "install"; args: string }

export function formatCommand({ kind, args }: Command, pm: PackageManager) {
  if (kind === "add") {
    const runner = { pnpm: "pnpm dlx", npm: "npx", yarn: "yarn dlx", bun: "bunx --bun" }[pm]
    return `${runner} shadcn@latest add ${args}`
  }
  const install = { pnpm: "pnpm add", npm: "npm install", yarn: "yarn add", bun: "bun add" }[pm]
  return `${install} ${args}`
}

/** Registry namespace for `npx shadcn add @multidash/<name>` once it's in components.json. */
export const registryNamespace = "@multidash"

export function registryConfig(siteUrl: string) {
  return JSON.stringify({ registries: { [registryNamespace]: `${siteUrl}/r/{name}.json` } }, null, 2)
}
