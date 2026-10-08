import "server-only"

import { getSingletonHighlighter } from "shiki"

export type CodeLang = "tsx" | "bash" | "css"

export async function highlight(code: string, lang: CodeLang = "tsx") {
  const highlighter = await getSingletonHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["tsx", "bash", "css"],
  })
  return highlighter.codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  })
}
