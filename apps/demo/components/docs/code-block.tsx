import { cn } from "@multidash/ui/lib/utils"

import { highlight, type CodeLang } from "@/lib/docs/highlight"

import { CopyButton } from "./copy-button"

export async function CodeBlock({
  code,
  lang = "tsx",
  title,
  className,
}: {
  code: string
  lang?: CodeLang
  title?: string
  className?: string
}) {
  const html = await highlight(code, lang)

  const body = (
    <div
      className="code-block max-h-[32rem] min-w-0 flex-1 overflow-auto text-[13px] leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  return (
    <div className={cn("overflow-hidden rounded-lg border bg-muted/40", className)}>
      {title ? (
        <>
          <div className="flex h-10 items-center justify-between border-b px-4">
            <span className="font-mono text-xs text-muted-foreground">{title}</span>
            <CopyButton value={code} />
          </div>
          {body}
        </>
      ) : (
        // The button sits beside the code (not over it), so long lines scroll without being covered.
        <div className="flex items-start">
          {body}
          <CopyButton value={code} className="m-2 shrink-0" />
        </div>
      )}
    </div>
  )
}
