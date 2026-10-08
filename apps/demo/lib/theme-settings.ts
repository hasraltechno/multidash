// Theme customizer settings. Applied as data attributes on <html> and styled in app/theme-presets.css.

export const themeOptions = {
  primary: [
    { value: "blue", label: "Blue", swatch: "oklch(0.546 0.245 262.881)" },
    { value: "indigo", label: "Indigo", swatch: "oklch(0.511 0.262 276.966)" },
    { value: "purple", label: "Purple", swatch: "oklch(0.558 0.288 302.321)" },
    { value: "green", label: "Green", swatch: "oklch(0.527 0.154 150.069)" },
    { value: "amber", label: "Amber", swatch: "oklch(0.769 0.188 70.08)" },
    { value: "rose", label: "Rose", swatch: "oklch(0.514 0.222 16.935)" },
  ],
  light: [
    { value: "gray", label: "Gray", swatch: "oklch(0.96 0.005 250)" },
    { value: "slate", label: "Slate", swatch: "oklch(0.929 0.013 255.508)" },
    { value: "neutral", label: "Neutral", swatch: "oklch(0.922 0 0)" },
  ],
  dark: [
    { value: "default", label: "Default", swatch: "oklch(0.2 0.005 260)" },
    { value: "navy", label: "Navy", swatch: "oklch(0.208 0.042 265.755)" },
    { value: "zinc", label: "Zinc", swatch: "oklch(0.21 0.006 285.885)" },
    { value: "black", label: "Black", swatch: "oklch(0.1 0 0)" },
    { value: "mint", label: "Mint", swatch: "oklch(0.21 0.03 190)" },
  ],
  card: [
    { value: "default", label: "Default" },
    { value: "bordered", label: "Bordered" },
    { value: "shadow", label: "Shadow" },
  ],
  radius: [
    { value: "0", label: "0" },
    { value: "sm", label: "0.375" },
    { value: "md", label: "0.625" },
    { value: "lg", label: "0.875" },
    { value: "xl", label: "1.25" },
  ],
} as const

type Values<K extends keyof typeof themeOptions> = (typeof themeOptions)[K][number]["value"]

export type ThemeSettings = {
  primary: Values<"primary">
  light: Values<"light">
  dark: Values<"dark">
  card: Values<"card">
  radius: Values<"radius">
  mono: boolean
}

export const defaultThemeSettings: ThemeSettings = {
  primary: "blue",
  light: "gray",
  dark: "default",
  card: "default",
  radius: "md",
  mono: false,
}

export const THEME_STORAGE_KEY = "multidash-theme"

// The default value of each setting maps to "no attribute", so the base tokens apply.
const attributeDefaults = { primary: "blue", light: "gray", dark: "default", card: "default", radius: "md" } as const

export function applyThemeSettings(settings: ThemeSettings) {
  const root = document.documentElement
  for (const key of Object.keys(attributeDefaults) as (keyof typeof attributeDefaults)[]) {
    const value = settings[key]
    if (value === attributeDefaults[key]) root.removeAttribute(`data-${key}`)
    else root.setAttribute(`data-${key}`, value)
  }
  root.toggleAttribute("data-mono", settings.mono)
}

/**
 * Inline script for <head>: applies saved settings before first paint so the page never flashes
 * the default theme. Kept dependency-free on purpose — it runs before React.
 */
export const themeSettingsScript = `(function(){try{var s=JSON.parse(localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY
)})||"{}");var d=${JSON.stringify(attributeDefaults)};var r=document.documentElement;for(var k in d){if(s[k]&&s[k]!==d[k])r.setAttribute("data-"+k,s[k])}if(s.mono)r.setAttribute("data-mono","")}catch(e){}})()`
