import "server-only"

import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { componentDocs, getComponentDoc } from "@/lib/docs/components"
import { getComponentDependencies, getDependencies, readComponentSource } from "@/lib/docs/source"
import { siteConfig } from "@/lib/site"

// shadcn registry (https://ui.shadcn.com/docs/registry), served at /r/<name>.json so any
// project can run `npx shadcn@latest add <url>`. Built from the same sources as the docs pages.

const uiDir = join(process.cwd(), "../../packages/ui/src")

const ITEM_SCHEMA = "https://ui.shadcn.com/schema/registry-item.json"
const UTILS = "utils"
export const THEME = "multidash-theme"

export function registryUrl(name: string) {
  return `${siteConfig.url}/r/${name}.json`
}

export function registryItemNames() {
  return ["registry", UTILS, THEME, ...componentDocs.map((doc) => doc.slug)]
}

type CssVars = { theme?: Record<string, string>; light?: Record<string, string>; dark?: Record<string, string> }

/** Reads `--name: value;` declarations from a block of globals.css, e.g. `:root` or `.dark`. */
function readVars(css: string, selector: string) {
  const start = css.indexOf(`${selector} {`)
  const body = css.slice(start, css.indexOf("\n}", start)).replace(/\/\*[\s\S]*?\*\//g, "")
  return Object.fromEntries([...body.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((m) => [m[1]!, m[2]!.trim()]))
}

async function readTokens() {
  const css = await readFile(join(uiDir, "styles/globals.css"), "utf8")
  return { light: readVars(css, ":root"), dark: readVars(css, ".dark"), theme: readVars(css, "@theme inline") }
}

// Tokens Multidash adds on top of the shadcn defaults. A component that uses one gets the whole
// family (fill, foreground, text) so its variants keep WCAG AA contrast in both themes.
const tokenFamilies: Record<string, string[]> = {
  "primary-text": ["primary-text"],
  destructive: ["destructive-foreground", "destructive-text"],
  info: ["info", "info-foreground", "info-text"],
  success: ["success", "success-foreground", "success-text"],
  warning: ["warning", "warning-foreground", "warning-text"],
  highlight: ["highlight", "highlight-foreground", "highlight-text"],
}

const utilityPrefix = "(?:bg|text|border|ring|outline|fill|stroke|from|via|to|decoration|accent|caret|divide|shadow)"
const familyPatterns: Record<string, RegExp> = {
  "primary-text": new RegExp(`\\b${utilityPrefix}-primary-text\\b`),
  destructive: new RegExp(`\\b${utilityPrefix}-destructive-(?:foreground|text)\\b`),
  info: new RegExp(`\\b${utilityPrefix}-info\\b`),
  success: new RegExp(`\\b${utilityPrefix}-success\\b`),
  warning: new RegExp(`\\b${utilityPrefix}-warning\\b`),
  highlight: new RegExp(`\\b${utilityPrefix}-highlight\\b`),
}

function pick(vars: Record<string, string>, names: string[]) {
  return Object.fromEntries(names.filter((name) => name in vars).map((name) => [name, vars[name]!]))
}

async function componentCssVars(source: string): Promise<CssVars | undefined> {
  const names = Object.keys(tokenFamilies)
    .filter((family) => familyPatterns[family]!.test(source))
    .flatMap((family) => tokenFamilies[family]!)
  if (names.length === 0) return undefined
  const tokens = await readTokens()
  return {
    theme: Object.fromEntries(names.map((name) => [`color-${name}`, `var(--${name})`])),
    light: pick(tokens.light, names),
    dark: pick(tokens.dark, names),
  }
}

async function componentItem(slug: string) {
  const doc = getComponentDoc(slug)!
  const source = await readComponentSource(slug)
  const cssVars = await componentCssVars(source)
  return {
    $schema: ITEM_SCHEMA,
    name: slug,
    type: "registry:ui",
    title: doc.name,
    description: doc.description,
    // clsx and tailwind-merge come with the utils item.
    dependencies: getDependencies(source).filter((pkg) => pkg !== "clsx" && pkg !== "tailwind-merge"),
    registryDependencies: [registryUrl(UTILS), ...getComponentDependencies(source).map(registryUrl)],
    files: [{ path: `registry/multidash/ui/${slug}.tsx`, type: "registry:ui", content: `${source}\n` }],
    ...(cssVars && { cssVars }),
  }
}

async function utilsItem() {
  return {
    $schema: ITEM_SCHEMA,
    name: UTILS,
    type: "registry:lib",
    title: "cn() helper",
    description: "Merges class names and resolves Tailwind CSS conflicts.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "registry/multidash/lib/utils.ts",
        type: "registry:lib",
        content: await readFile(join(uiDir, "lib/utils.ts"), "utf8"),
      },
    ],
  }
}

async function themeItem() {
  const tokens = await readTokens()
  return {
    $schema: ITEM_SCHEMA,
    name: THEME,
    type: "registry:theme",
    title: "Multidash theme",
    description: "The full Multidash color theme for light and dark mode. Every text pairing meets WCAG AA.",
    cssVars: {
      theme: Object.fromEntries(Object.entries(tokens.theme).filter(([name]) => name.startsWith("color-"))),
      light: tokens.light,
      dark: tokens.dark,
    },
  }
}

async function registryIndex() {
  const items: { $schema: string; files?: { path: string; type: string; content: string }[] }[] = [
    await utilsItem(),
    await themeItem(),
    ...(await Promise.all(componentDocs.map((doc) => componentItem(doc.slug)))),
  ]
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "multidash",
    homepage: siteConfig.url,
    // The index lists every item; fetch an item's own URL for its file contents.
    items: items.map(({ $schema: _schema, files, ...item }) => ({
      ...item,
      ...(files && { files: files.map(({ content: _content, ...file }) => file) }),
    })),
  }
}

export async function getRegistryItem(name: string) {
  if (name === "registry") return registryIndex()
  if (name === UTILS) return utilsItem()
  if (name === THEME) return themeItem()
  return getComponentDoc(name) ? componentItem(name) : undefined
}
