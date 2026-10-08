import { Tabs, TabsContent, TabsList, TabsTrigger } from "@multidash/ui/components/tabs"
import { cn } from "@multidash/ui/lib/utils"

import { readExampleSource } from "@/lib/docs/source"

import { CodeBlock } from "./code-block"
import { examples } from "./examples"

/** Live example + its exact source, read from the same file. */
export async function ComponentPreview({
  path,
  align = "center",
  className,
}: {
  path: string
  align?: "center" | "start"
  className?: string
}) {
  const Example = examples[path]
  if (!Example) throw new Error(`Unknown example "${path}"`)
  const code = await readExampleSource(path)

  return (
    <Tabs defaultValue="preview" className="gap-3">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div
          className={cn(
            "flex min-h-48 w-full rounded-lg border bg-card p-6 sm:p-10",
            align === "center" ? "items-center justify-center" : "items-start",
            className
          )}
        >
          <Example />
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={code} />
      </TabsContent>
    </Tabs>
  )
}
