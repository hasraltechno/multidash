import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { TooltipProvider } from "@multidash/ui/components/tooltip"

import { AppToaster } from "@/components/app-toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/site"
import { inputModalityScript } from "@/lib/input-modality"
import { sidebarScript } from "@/lib/sidebar-script"
import { themeSettingsScript } from "@/lib/theme-settings"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: "Hasral Techno", url: "https://github.com/hasraltechno" }],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d0f" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies saved customizer settings before first paint (no flash). */}
        <script dangerouslySetInnerHTML={{ __html: `${themeSettingsScript};${sidebarScript};${inputModalityScript}` }} />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
          <AppToaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
