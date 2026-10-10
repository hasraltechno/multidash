"use client"

import { useState } from "react"
import { Check, ChevronDown, Copy, ExternalLink, FileText, Link2, SquareTerminal } from "lucide-react"
import { Button } from "@multidash/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@multidash/ui/components/dropdown-menu"

import { ClaudeIcon, OpenAIIcon } from "@/components/icons"
import { formatCommand, type Command } from "@/lib/docs/install"

import { usePackageManager } from "./command-block"

async function copyText(text: string | Promise<string>) {
  try {
    if (typeof text !== "string" && typeof ClipboardItem !== "undefined") {
      // Safari only allows clipboard writes started inside the click, so hand it the pending text.
      const blob = text.then((value) => new Blob([value], { type: "text/plain" }))
      await navigator.clipboard.write([new ClipboardItem({ "text/plain": blob })])
    } else {
      await navigator.clipboard.writeText(await text)
    }
    return true
  } catch {
    return false
  }
}

/** Copy the page as Markdown, or hand it to an AI assistant. */
export function CopyPageMenu({
  name,
  pageUrl,
  markdownUrl,
  installCommand,
}: {
  name: string
  pageUrl: string
  markdownUrl: string
  installCommand: Command
}) {
  const pm = usePackageManager()
  const [copied, setCopied] = useState(false)

  async function copy(text: string | Promise<string>) {
    if (await copyText(text)) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Fetch by path so it works on any host serving the docs (preview deployments, custom domains).
  const copyMarkdown = () => copy(fetch(new URL(markdownUrl).pathname).then((res) => res.text()))
  const prompt = `Read ${markdownUrl}, the docs for the ${name} component from Multidash, so I can ask you questions about it.`

  return (
    <div className="flex shrink-0">
      <Button variant="outline" size="sm" onClick={copyMarkdown} className="rounded-r-none">
        {copied ? <Check aria-hidden /> : <Copy aria-hidden />}
        {copied ? "Copied" : "Copy page"}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" aria-label="More copy options" className="rounded-l-none border-l-0 px-2">
            <ChevronDown aria-hidden />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuItem onSelect={copyMarkdown}>
            <Copy aria-hidden /> Copy page as Markdown
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={markdownUrl} target="_blank" rel="noreferrer">
              <FileText aria-hidden /> View as Markdown
              <ExternalLink className="ml-auto" aria-hidden />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => copy(pageUrl)}>
            <Link2 aria-hidden /> Copy page link
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => copy(formatCommand(installCommand, pm))}>
            <SquareTerminal aria-hidden /> Copy install command
            <span className="ml-auto font-mono text-xs text-muted-foreground">{pm}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Ask about this component</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`} target="_blank" rel="noreferrer">
              <OpenAIIcon /> Open in ChatGPT
              <ExternalLink className="ml-auto" aria-hidden />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={`https://claude.ai/new?q=${encodeURIComponent(prompt)}`} target="_blank" rel="noreferrer">
              <ClaudeIcon /> Open in Claude
              <ExternalLink className="ml-auto" aria-hidden />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
