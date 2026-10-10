import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@multidash/ui/components/card"

import { CodeBlock } from "@/components/docs/code-block"
import { CommandBlock } from "@/components/docs/command-block"
import { PageHeader } from "@/components/page-header"
import { componentDocs } from "@/lib/docs/components"
import { registryConfig, registryNamespace } from "@/lib/docs/install"
import { registryUrl, THEME } from "@/lib/docs/registry"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "UI Elements · Introduction",
  description: "Documentation for every free Multidash component — live examples, code and installation.",
}

const cloneCode = `git clone ${siteConfig.links.github}.git
cd multidash
pnpm install
pnpm dev`

const inRepoCode = `import { Button } from "@multidash/ui/components/button"

export default function Page() {
  return <Button>Click me</Button>
}`

const depsCode = "pnpm add radix-ui class-variance-authority clsx tailwind-merge lucide-react tw-animate-css"

const utilsCode = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="relative space-y-3 pl-10">
      <span className="absolute top-0 left-0 flex size-7 items-center justify-center rounded-full border bg-card text-xs font-semibold">
        {n}
      </span>
      <h3 className="pt-0.5 font-medium">{title}</h3>
      {children}
    </li>
  )
}

export default function UiElementsPage() {
  return (
    <>
      <PageHeader
        title="Introduction"
        description={`${componentDocs.length} free components with live examples and copy-paste code, built on Radix UI and Tailwind CSS. Pick a component from the UI Elements menu in the sidebar.`}
      />

      <section aria-labelledby="choose-heading" className="space-y-4">
        <h2 id="choose-heading" className="text-lg font-semibold tracking-tight">
          Two ways to use Multidash
        </h2>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Start a new dashboard</CardTitle>
              <CardDescription>
                Clone the template. Every page, component and the theme are included — no shadcn setup needed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={cloneCode} lang="bash" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Add components to your project</CardTitle>
              <CardDescription>
                Already have a React project with Tailwind CSS v4? Add only the components you need with the shadcn CLI,
                or copy the source by hand.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                The shadcn CLI isn&apos;t a dependency: <code>npx</code> runs it once and it copies the source into your
                project, so the code is yours to edit. It needs a <code>components.json</code>, created by{" "}
                <code>npx shadcn@latest init</code>.
              </p>
              <p>
                <a href="#install-heading" className="font-medium text-primary-text underline underline-offset-4">
                  Install with the shadcn CLI
                </a>{" "}
                ·{" "}
                <a href="#manual-install" className="font-medium text-primary-text underline underline-offset-4">
                  Copy by hand
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section aria-labelledby="install-heading" className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle id="install-heading" className="scroll-mt-24">Install with the shadcn CLI</CardTitle>
            <CardDescription>
              Every component is also a shadcn registry item. In a project with a <code>components.json</code>, one
              command adds the component, the components it builds on, its npm packages and the extra theme tokens it
              uses. Your existing colors are left alone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CommandBlock command={{ kind: "add", args: registryUrl("button") }} />
            <p className="text-sm text-muted-foreground">
              Using Multidash often? Add the registry to <code>components.json</code> once, then add components by
              name, e.g. <code>{registryNamespace}/button</code>:
            </p>
            <CodeBlock code={registryConfig(siteConfig.url)} title="components.json" />
            <p className="text-sm text-muted-foreground">
              Want the full Multidash look? Add the theme too. It replaces your color tokens with the Multidash light
              and dark palette:
            </p>
            <CommandBlock command={{ kind: "add", args: registryUrl(THEME) }} />
            <p className="text-sm text-muted-foreground">
              Working with an AI assistant? Point it at <a href="/llms.txt" className="font-medium text-primary-text underline underline-offset-4">llms.txt</a>{" "}
              — every component page is also available as Markdown.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Use in this project</CardTitle>
            <CardDescription>
              Every component is already available in the monorepo through the <code>@multidash/ui</code> package.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock code={inRepoCode} title="app/page.tsx" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle id="manual-install" className="scroll-mt-24">Copy by hand</CardTitle>
            <CardDescription>Prefer not to use the CLI? Components are plain source files — copy the ones you need.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-6">
              <Step n={1} title="Install dependencies">
                <CodeBlock code={depsCode} lang="bash" />
              </Step>
              <Step n={2} title="Add the cn() helper">
                <CodeBlock code={utilsCode} title="lib/utils.ts" />
              </Step>
              <Step n={3} title="Add the theme tokens">
                <p className="text-sm text-muted-foreground">
                  Copy{" "}
                  <a
                    href="https://github.com/hasraltechno/multidash/blob/main/packages/ui/src/styles/globals.css"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-primary-text underline underline-offset-4"
                  >
                    globals.css
                  </a>{" "}
                  into your app and import it in your root layout.
                </p>
              </Step>
              <Step n={4} title="Copy a component">
                <p className="text-sm text-muted-foreground">
                  Open a component from the sidebar and copy its source from the Installation section into{" "}
                  <code>components/ui/</code>.
                </p>
              </Step>
            </ol>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
