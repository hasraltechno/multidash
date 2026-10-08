import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@multidash/ui/components/card"

import { CodeBlock } from "@/components/docs/code-block"
import { PageHeader } from "@/components/page-header"
import { componentDocs } from "@/lib/docs/components"

export const metadata: Metadata = {
  title: "UI Elements · Introduction",
  description: "Documentation for every free Multidash component — live examples, code and installation.",
}

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

      <section aria-labelledby="install-heading" className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle id="install-heading">Use in this project</CardTitle>
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
            <CardTitle>Use in another Next.js project</CardTitle>
            <CardDescription>Components are plain source files — copy the ones you need.</CardDescription>
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
                    className="font-medium text-primary underline underline-offset-4"
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
