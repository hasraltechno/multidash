import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import { Badge } from "@multidash/ui/components/badge"
import { Button } from "@multidash/ui/components/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@multidash/ui/components/tabs"

import { CodeBlock } from "@/components/docs/code-block"
import { CommandBlock } from "@/components/docs/command-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CopyPageMenu } from "@/components/docs/copy-page-menu"
import { componentDocs, getComponentDoc } from "@/lib/docs/components"
import { registryConfig, registryNamespace } from "@/lib/docs/install"
import { markdownUrl } from "@/lib/docs/markdown"
import { registryUrl } from "@/lib/docs/registry"
import { getAllDependencies, getComponentDependencies, getExports, readComponentSource } from "@/lib/docs/source"
import { siteConfig } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return componentDocs.map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = getComponentDoc((await params).slug)
  return doc ? { title: `${doc.name} · UI Elements`, description: doc.description } : {}
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <h2 id={id} className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default async function ComponentDocPage({ params }: Props) {
  const { slug } = await params
  const doc = getComponentDoc(slug)
  if (!doc) notFound()

  const source = await readComponentSource(slug)
  const exports = getExports(source)
  const dependencies = await getAllDependencies(slug)
  const requiredComponents = getComponentDependencies(source)
    .map((dep) => getComponentDoc(dep))
    .filter((dep) => dep !== undefined)
  const align = doc.layout === "full" ? "start" : "center"
  const index = componentDocs.indexOf(doc)
  const prev = componentDocs[index - 1]
  const next = componentDocs[index + 1]

  const addCommand = { kind: "add", args: registryUrl(slug) } as const

  const importCode = `import {\n${exports.map((e) => `  ${e},`).join("\n")}\n} from "@multidash/ui/components/${slug}"`

  return (
    <article className="w-full max-w-6xl space-y-10">
      <header className="space-y-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/ui-elements" className="hover:text-foreground">
            UI Elements
          </Link>
          <ChevronRight className="size-3.5" aria-hidden />
          <span className="text-foreground">{doc.name}</span>
        </nav>
        <h1 className="text-3xl font-semibold tracking-tight">{doc.name}</h1>
        <p className="text-base text-muted-foreground">{doc.description}</p>
        {dependencies.includes("radix-ui") && (
          <Badge variant="secondary">Built on Radix UI</Badge>
        )}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <CommandBlock command={addCommand} compact className="min-w-0 sm:w-fit" />
          <CopyPageMenu
            name={doc.name}
            pageUrl={`${siteConfig.url}/ui-elements/${slug}`}
            markdownUrl={markdownUrl(slug)}
            installCommand={addCommand}
          />
        </div>
      </header>

      <ComponentPreview path={`${slug}/${doc.examples[0]!.id}`} align={align} />

      <Section id="installation" title="Installation">
        <p className="text-sm text-muted-foreground">
          Add {doc.name} with the shadcn CLI, or copy the source by hand. In this repo there&apos;s nothing to install —
          import it from <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@multidash/ui</code>.
        </p>
        <Tabs defaultValue="cli" className="gap-4">
          <TabsList>
            <TabsTrigger value="cli">CLI</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="cli" className="space-y-3">
            <CommandBlock command={addCommand} />
            <p className="text-sm text-muted-foreground">
              Adds the component, the components it builds on, its npm packages and the theme tokens it uses. Using
              Multidash often? Add the registry to{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components.json</code> once:
            </p>
            <CodeBlock code={registryConfig(siteConfig.url)} title="components.json" />
            <p className="text-sm text-muted-foreground">Then add components by name:</p>
            <CommandBlock command={{ kind: "add", args: `${registryNamespace}/${slug}` }} />
          </TabsContent>
          <TabsContent value="manual" className="space-y-3">
            <p className="text-sm text-muted-foreground">Install the dependencies:</p>
            <CommandBlock command={{ kind: "install", args: dependencies.join(" ") }} />
            <p className="text-sm text-muted-foreground">
              Then copy the source into{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui/{slug}.tsx</code>{" "}
              (requires the <Link href="/ui-elements#manual-install" className="text-primary-text underline underline-offset-4">cn() helper and theme tokens</Link>):
            </p>
            {requiredComponents.length > 0 && (
              <p className="text-sm text-muted-foreground">
                It also uses these components — copy them first:{" "}
                {requiredComponents.map((dep, i) => (
                  <span key={dep.slug}>
                    {i > 0 && ", "}
                    <Link href={`/ui-elements/${dep.slug}`} className="font-medium text-primary-text underline underline-offset-4">
                      {dep.name}
                    </Link>
                  </span>
                ))}
                .
              </p>
            )}
            <details className="group rounded-lg border">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
                Show source ({source.split("\n").length} lines)
                <ChevronRight className="size-4 text-muted-foreground transition-transform group-open:rotate-90" aria-hidden />
              </summary>
              <div className="border-t p-3">
                <CodeBlock code={source} title={`components/ui/${slug}.tsx`} />
              </div>
            </details>
          </TabsContent>
        </Tabs>
      </Section>

      <Section id="usage" title="Usage">
        <CodeBlock code={importCode} />
      </Section>

      {doc.examples.length > 1 && (
        <Section id="examples" title="Examples">
          <div className="space-y-10">
            {doc.examples.slice(1).map((example) => (
              <div key={example.id} className="space-y-3">
                <div>
                  <h3 className="font-semibold tracking-tight">{example.title}</h3>
                  {example.description && (
                    <p className="mt-1 text-sm text-muted-foreground">{example.description}</p>
                  )}
                </div>
                <ComponentPreview path={`${slug}/${example.id}`} align={align} />
              </div>
            ))}
          </div>
        </Section>
      )}

      <nav aria-label="Component navigation" className="flex items-center justify-between gap-4 border-t pt-6">
        {prev ? (
          <Button variant="outline" asChild>
            <Link href={`/ui-elements/${prev.slug}`}>
              <ArrowLeft /> {prev.name}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next && (
          <Button variant="outline" asChild>
            <Link href={`/ui-elements/${next.slug}`}>
              {next.name} <ArrowRight />
            </Link>
          </Button>
        )}
      </nav>
    </article>
  )
}
