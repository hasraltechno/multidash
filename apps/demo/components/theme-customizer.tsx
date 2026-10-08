"use client"

import { useEffect, useState } from "react"
import { Check, Monitor, Moon, Paintbrush, RotateCcw, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@multidash/ui/components/button"
import { Label } from "@multidash/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@multidash/ui/components/radio-group"
import { Separator } from "@multidash/ui/components/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@multidash/ui/components/sheet"
import { Switch } from "@multidash/ui/components/switch"
import { cn } from "@multidash/ui/lib/utils"

import {
  applyThemeSettings,
  defaultThemeSettings,
  THEME_STORAGE_KEY,
  themeOptions,
  type ThemeSettings,
} from "@/lib/theme-settings"

function readSettings(): ThemeSettings {
  try {
    return { ...defaultThemeSettings, ...JSON.parse(localStorage.getItem(THEME_STORAGE_KEY) ?? "{}") }
  } catch {
    return defaultThemeSettings
  }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-medium">{title}</h3>
      {children}
    </section>
  )
}

/** A radio group whose options are styled tiles; the native-like radio stays for keyboard and screen readers. */
function OptionGroup<T extends string>({
  name,
  value,
  onChange,
  options,
  columns = 3,
  renderOption,
}: {
  name: string
  value: T
  onChange: (value: T) => void
  options: readonly { value: T; label: string }[]
  columns?: number
  renderOption?: (option: { value: T; label: string }, checked: boolean) => React.ReactNode
}) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(v) => onChange(v as T)}
      aria-label={name}
      className="gap-2"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {options.map((option) => {
        const id = `${name}-${option.value}`
        const checked = option.value === value
        return (
          <div key={option.value}>
            <RadioGroupItem value={option.value} id={id} className="peer sr-only" />
            <Label
              htmlFor={id}
              className={cn(
                "flex h-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md border px-2 py-2.5 text-xs font-normal transition-colors hover:bg-accent/60",
                "peer-focus-visible:ring-[3px] peer-focus-visible:ring-ring/50",
                checked && "border-primary bg-primary/5 font-medium text-primary-text"
              )}
            >
              {renderOption ? renderOption(option, checked) : option.label}
            </Label>
          </div>
        )
      })}
    </RadioGroup>
  )
}

function Swatch({ color, checked }: { color: string; checked: boolean }) {
  return (
    <span className="flex size-6 items-center justify-center rounded-full ring-1 ring-black/10 dark:ring-white/15" style={{ background: color }}>
      {checked && <Check className="size-3.5 text-white mix-blend-difference" aria-hidden />}
    </span>
  )
}

export function ThemeCustomizer() {
  const { theme, setTheme } = useTheme()
  const [settings, setSettings] = useState<ThemeSettings>(defaultThemeSettings)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setSettings(readSettings())
    setMounted(true)
  }, [])

  function update<K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) {
    const next = { ...settings, [key]: value }
    setSettings(next)
    applyThemeSettings(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(next))
    } catch {
      // Storage can be unavailable (private mode); the change still applies to this page.
    }
  }

  function reset() {
    setSettings(defaultThemeSettings)
    applyThemeSettings(defaultThemeSettings)
    setTheme("system")
    try {
      localStorage.removeItem(THEME_STORAGE_KEY)
    } catch {}
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Customize theme">
          <Paintbrush />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full gap-0 sm:max-w-sm">
        <SheetHeader className="border-b">
          <SheetTitle>Customize</SheetTitle>
          <SheetDescription>Pick a style for this dashboard. Saved in your browser.</SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-6 overflow-y-auto p-4">
          <Section title="Mode">
            <OptionGroup
              name="mode"
              value={(mounted ? theme : "system") as "light" | "dark" | "system"}
              onChange={setTheme}
              options={[
                { value: "light", label: "Light" },
                { value: "dark", label: "Dark" },
                { value: "system", label: "System" },
              ]}
              renderOption={(option) => {
                const Icon = option.value === "light" ? Sun : option.value === "dark" ? Moon : Monitor
                return (
                  <>
                    <Icon className="size-4" aria-hidden />
                    {option.label}
                  </>
                )
              }}
            />
          </Section>

          <Section title="Primary color">
            <OptionGroup
              name="primary"
              value={settings.primary}
              onChange={(v) => update("primary", v)}
              options={themeOptions.primary}
              renderOption={(option, checked) => (
                <>
                  <Swatch color={themeOptions.primary.find((o) => o.value === option.value)!.swatch} checked={checked} />
                  {option.label}
                </>
              )}
            />
          </Section>

          <Section title="Light background">
            <OptionGroup
              name="light"
              value={settings.light}
              onChange={(v) => update("light", v)}
              options={themeOptions.light}
              renderOption={(option, checked) => (
                <>
                  <Swatch color={themeOptions.light.find((o) => o.value === option.value)!.swatch} checked={checked} />
                  {option.label}
                </>
              )}
            />
          </Section>

          <Section title="Dark background">
            <OptionGroup
              name="dark"
              value={settings.dark}
              onChange={(v) => update("dark", v)}
              options={themeOptions.dark}
              columns={5}
              renderOption={(option, checked) => (
                <>
                  <Swatch color={themeOptions.dark.find((o) => o.value === option.value)!.swatch} checked={checked} />
                  {option.label}
                </>
              )}
            />
          </Section>

          <Section title="Card style">
            <OptionGroup
              name="card"
              value={settings.card}
              onChange={(v) => update("card", v)}
              options={themeOptions.card}
              renderOption={(option) => (
                <>
                  <span
                    aria-hidden
                    className={cn(
                      "h-6 w-10 rounded bg-card",
                      option.value === "default" && "border shadow-xs",
                      option.value === "bordered" && "border-2 border-input",
                      option.value === "shadow" && "shadow-md ring-1 ring-black/5 dark:ring-white/10"
                    )}
                  />
                  {option.label}
                </>
              )}
            />
          </Section>

          <Section title="Radius">
            <OptionGroup
              name="radius"
              value={settings.radius}
              onChange={(v) => update("radius", v)}
              options={themeOptions.radius}
              columns={5}
            />
          </Section>

          <Separator />

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="mono">Monochrome</Label>
              <p className="text-xs text-muted-foreground">Render the whole dashboard in grayscale.</p>
            </div>
            <Switch id="mono" checked={settings.mono} onCheckedChange={(v) => update("mono", v)} />
          </div>
        </div>

        <div className="border-t p-4">
          <Button variant="outline" className="w-full" onClick={reset}>
            <RotateCcw /> Reset to defaults
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
