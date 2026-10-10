import "server-only"

import { componentDocs, getComponentDoc } from "@/lib/docs/components"
import { formatCommand, registryNamespace } from "@/lib/docs/install"
import { registryUrl, THEME } from "@/lib/docs/registry"
import {
  getAllDependencies,
  getComponentDependencies,
  getExports,
  readComponentSource,
  readExampleSource,
} from "@/lib/docs/source"
import { siteConfig } from "@/lib/site"

// Plain-Markdown versions of the docs, for LLMs and anyone who prefers text: /ui-elements/<slug>.md and /llms.txt.

const fence = (code: string, lang: string) => `\`\`\`${lang}\n${code}\n\`\`\``

/** Examples import from the monorepo package; readers paste them into a shadcn-style project. */
function toProjectImports(code: string) {
  return code.replaceAll("@multidash/ui/components/", "@/components/ui/").replaceAll("@multidash/ui/lib/utils", "@/lib/utils")
}

export function markdownUrl(slug: string) {
  return `${siteConfig.url}/ui-elements/${slug}.md`
}

export async function componentMarkdown(slug: string) {
  const doc = getComponentDoc(slug)
  if (!doc) return undefined

  const source = await readComponentSource(slug)
  const dependencies = await getAllDependencies(slug)
  const required = getComponentDependencies(source)
    .map((dep) => getComponentDoc(dep)?.name)
    .filter(Boolean)
  const exports = getExports(source)
  const examples = await Promise.all(
    doc.examples.map(async (example) => ({ ...example, code: toProjectImports(await readExampleSource(`${slug}/${example.id}`)) }))
  )

  return [
    `# ${doc.name}`,
    doc.description,
    `Docs: ${siteConfig.url}/ui-elements/${slug}`,
    "## Installation",
    "### shadcn CLI",
    "Adds the component, the components it builds on, its npm packages and the theme tokens it uses:",
    fence(formatCommand({ kind: "add", args: registryUrl(slug) }, "npm"), "bash"),
    `With the \`${registryNamespace}\` registry in \`components.json\`: \`${formatCommand({ kind: "add", args: `${registryNamespace}/${slug}` }, "npm")}\``,
    "### Manual",
    "Install the dependencies:",
    fence(formatCommand({ kind: "install", args: dependencies.join(" ") }, "npm"), "bash"),
    `Copy the source below into \`components/ui/${slug}.tsx\`. It needs the \`cn()\` helper in \`lib/utils.ts\` and the Multidash theme tokens (\`${registryUrl(THEME)}\`).` +
      (required.length > 0 ? ` It also uses: ${required.join(", ")}.` : ""),
    "## Usage",
    fence(`import { ${exports.join(", ")} } from "@/components/ui/${slug}"`, "tsx"),
    "## Examples",
    ...examples.flatMap((example) => [
      `### ${example.title}`,
      ...(example.description ? [example.description] : []),
      fence(example.code, "tsx"),
    ]),
    "## Source",
    fence(source, "tsx"),
  ].join("\n\n")
}

export function llmsTxt() {
  return [
    `# ${siteConfig.name}`,
    `> ${siteConfig.description}`,
    `Built with Next.js, React 19, TypeScript, Tailwind CSS v4 and Radix UI. MIT licensed. Every component is a shadcn registry item: \`npx shadcn@latest add ${registryUrl("<name>")}\`.`,
    "## Components",
    componentDocs.map((doc) => `- [${doc.name}](${markdownUrl(doc.slug)}): ${doc.description}`).join("\n"),
    "## Registry",
    [
      `- [Registry index](${registryUrl("registry")}): every item with its dependencies`,
      `- [Theme](${registryUrl(THEME)}): the full Multidash color theme for light and dark mode`,
    ].join("\n"),
    "## Links",
    [`- [Live demo](${siteConfig.links.demo})`, `- [Source code](${siteConfig.links.github})`].join("\n"),
  ].join("\n\n")
}
