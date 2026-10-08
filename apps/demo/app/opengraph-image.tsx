import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/site"

export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const fontDir = join(process.cwd(), "node_modules/@fontsource/inter/files")

const colors = {
  bg: "#0c0d0f",
  card: "#17181b",
  border: "#2a2b30",
  text: "#f5f5f6",
  muted: "#9b9ca3",
  blue: "#3987e5",
  orange: "#d95926",
  green: "#22c55e",
}

const bars: [online: number, store: number][] = [
  [62, 27],
  [70, 33],
  [81, 41],
  [59, 38],
  [72, 45],
  [92, 56],
  [74, 49],
]

function Kpi({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "18px 20px",
        borderRadius: 14,
        border: `1px solid ${colors.border}`,
        background: colors.card,
      }}
    >
      <div style={{ fontSize: 15, color: colors.muted }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700, marginTop: 6 }}>{value}</div>
      <div style={{ fontSize: 14, color: colors.green, marginTop: 6 }}>{delta}</div>
    </div>
  )
}

export default async function OpenGraphImage() {
  const font = (weight: number) => readFile(join(fontDir, `inter-latin-${weight}-normal.woff`))
  const [regular, semibold, bold] = await Promise.all([font(400), font(600), font(700)])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: colors.bg,
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(57,135,229,0.28), transparent 45%)",
          color: colors.text,
          fontFamily: "Inter",
          padding: 64,
        }}
      >
        {/* Left: copy */}
        <div style={{ display: "flex", flexDirection: "column", width: 520 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#155dfc",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                gap: 4,
                paddingBottom: 12,
              }}
            >
              <div style={{ width: 6, height: 12, borderRadius: 2, background: "white" }} />
              <div style={{ width: 6, height: 19, borderRadius: 2, background: "white" }} />
              <div style={{ width: 6, height: 25, borderRadius: 2, background: "white", opacity: 0.7 }} />
            </div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>{siteConfig.name}</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              marginTop: 56,
            }}
          >
            <span>Free Next.js</span>
            <span>Admin Dashboard</span>
          </div>
          <div style={{ fontSize: 24, color: colors.muted, marginTop: 22, lineHeight: 1.4 }}>
            Open source template with light & dark mode, accessible charts and a reusable UI kit.
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
            {["Next.js 16", "React 19", "Tailwind v4", "TypeScript"].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: `1px solid ${colors.border}`,
                  background: colors.card,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right: dashboard preview */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginLeft: 56,
            flex: 1,
            padding: 22,
            borderRadius: 22,
            border: `1px solid ${colors.border}`,
            background: "rgba(23,24,27,0.75)",
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            <Kpi label="Revenue" value="$8,900" delta="+8.5% vs last month" />
            <Kpi label="Orders" value="1,284" delta="+8.1% vs last month" />
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: "18px 20px",
              borderRadius: 14,
              border: `1px solid ${colors.border}`,
              background: colors.card,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 600 }}>Orders this week</div>
              <div style={{ display: "flex", gap: 14, fontSize: 14, color: colors.muted }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: colors.blue }} />
                  Online
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: colors.orange }} />
                  In store
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginTop: 18,
                paddingBottom: 2,
                borderBottom: `1px solid ${colors.border}`,
              }}
            >
              {bars.map(([a, b], i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-end", gap: 3 }}>
                  <div style={{ width: 16, height: a * 2.4, background: colors.blue, borderRadius: "4px 4px 0 0" }} />
                  <div style={{ width: 16, height: b * 2.4, background: colors.orange, borderRadius: "4px 4px 0 0" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    }
  )
}
