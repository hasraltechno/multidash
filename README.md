# Multidash

**Free & open-source admin dashboard template** built with **Next.js 16**, **React 19**, **Tailwind CSS v4** and **Radix UI**.

Clean, accessible and responsive — with light/dark mode, colorblind-safe charts and a reusable component library you can drop into any Next.js project.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./.github/preview-dark.png" />
  <img alt="Multidash dashboard preview" src="./.github/preview.png" />
</picture>

**[Live demo](https://multidash-app.vercel.app)** · [Get Multidash Pro](#-multidash-pro) · [Report a bug](https://github.com/hasraltechno/multidash/issues)

---

## ✨ Features

- ⚡ **Next.js 16 App Router** + React 19 + TypeScript
- 🎨 **Tailwind CSS v4** with a single token file for rebranding
- 🌗 **Light / dark / system** theme
- 📊 **Charts** with Recharts — colorblind-safe palette, tooltips, screen-reader data tables
- 🧩 **17 UI components** (`@multidash/ui`) built on Radix UI primitives
- 📱 **Fully responsive** — mobile sidebar drawer
- ♿ **Accessible** — keyboard navigation, ARIA labels, reduced-motion support
- 📦 **Turborepo monorepo** — share the UI package across apps

### Included pages

| Page | Description |
| --- | --- |
| Overview | KPI cards, revenue area chart, orders bar chart, recent orders, traffic sources |
| Tables | Search, status filter and pagination |
| Forms | Profile and notification settings layouts |
| UI Elements | Buttons, badges, avatars, tooltips, progress, skeletons |
| Sign in / Sign up | Authentication page UI |

## 🚀 Getting started

Requirements: **Node.js 20+** and **pnpm** (`corepack enable pnpm`).

```bash
git clone https://github.com/hasraltechno/multidash.git
cd multidash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm typecheck` | Type-check all packages |

## 📁 Project structure

```
multidash/
├── apps/
│   └── demo/                 # Next.js dashboard app
│       ├── app/(dashboard)/  # Pages with sidebar layout
│       ├── app/(auth)/       # Sign in / sign up
│       ├── components/       # App-specific components & charts
│       └── lib/              # Navigation, mock data, helpers
└── packages/
    ├── ui/                   # @multidash/ui — shared components & theme tokens
    └── typescript-config/    # Shared tsconfig presets
```

## 🎨 Customization

Set your own domain in [`apps/demo/lib/site.ts`](apps/demo/lib/site.ts) (`productionUrl`) or via the `NEXT_PUBLIC_SITE_URL` environment variable — it is used for Open Graph and canonical URLs.

All colors live in [`packages/ui/src/styles/globals.css`](packages/ui/src/styles/globals.css). Change `--primary` to rebrand; chart colors (`--chart-1` … `--chart-5`) are a validated colorblind-safe order — keep the order if you swap hues.

Use a component anywhere in the app:

```tsx
import { Button } from "@multidash/ui/components/button"

<Button variant="outline">Click me</Button>
```

## 💎 Multidash Pro

Need more? **Multidash Pro** builds on this free version with everything you need to ship a real product:

| | Free | Pro |
| --- | :---: | :---: |
| Overview dashboard | ✅ | ✅ |
| Base UI components | ✅ | ✅ |
| Analytics, E-commerce, CRM, SaaS & Finance dashboards | — | ✅ |
| Kanban, Calendar, Chat, Inbox, Invoice apps | — | ✅ |
| Working authentication & role-based access | — | ✅ |
| Database layer (Drizzle ORM) | — | ✅ |
| Payments — Stripe, Midtrans & Xendit | — | ✅ |
| i18n (English, Bahasa Indonesia) | — | ✅ |
| Advanced data tables with CSV/Excel export | — | ✅ |
| Figma file & priority support | — | ✅ |

👉 **[Get Multidash Pro](#)** <!-- TODO: checkout link -->

## 🤝 Contributing

Issues and pull requests are welcome. If Multidash saves you time, please consider giving it a ⭐ — it really helps!

## 📄 License

[MIT](LICENSE) © Hasral Techno
