# Changelog

All notable changes to this project are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Code of Conduct (Contributor Covenant 2.1)

### Changed

- Pro plan prices on the pricing page show "TBA" until Pro launches

## [0.2.0] - 2026-10-09

`@multidash/ui` now has 35 components (up from 17), each with its own docs page.

### Added

- Notifications panel in the header: unread count badge, All/Unread tabs, mark one or all as read, typed icons, empty state and a link to notification settings
- Minimizable sidebar: a toggle next to the logo or ⌘B / Ctrl+B shrinks the desktop sidebar to icons with tooltips; when minimized the logo becomes the expand button on hover, and sub-menus open as flyouts. The choice persists and is applied before first paint; the mobile sheet stays full width
- Error pages: 404 (also the real not-found page), 500 (also the route error boundary with retry) and Maintenance, plus a global error fallback; listed under Pages → Error pages
- Theme customizer (paintbrush in the header): primary color (blue, indigo, purple, green, amber, rose), light background (gray, slate, neutral), dark background (default, navy, zinc, black, mint), card & layout style (also applied to the sidebar and header), radius and monochrome. Saved in localStorage and applied before first paint; every preset keeps WCAG AA contrast
- New components: Command (cmdk, inline or ⌘K dialog), Combobox, Calendar (DayPicker v10 via `@daypicker/react`) and Date Picker (locale-aware labels, disabled-day matchers)
- Header search is a ⌘K command palette over every page and component
- Component install commands now include the npm packages of the components they build on
- New components: Radio Group, Slider (single and range), Spinner, Pagination (with `getPageRange`), Steps (horizontal/vertical) and Timeline — each with docs and examples
- Highlight color (magenta, `--highlight` / `-foreground` / `-text`) kept separate from the neutral secondary, with Button `highlight` / `soft-highlight` and Badge `highlight`
- Info color (`--info`, `--info-foreground`, `--info-text`) with Button `info` / `soft-info`, Badge `info` and Alert `info` variants
- Button variants: `success`, `warning`, `soft`, `soft-success`, `soft-warning` and `soft-destructive`; Badge `soft` variant
- Component documentation: an overview page plus one page per component with live examples, Preview/Code tabs, copy buttons, dependencies, full source and usage
- Typography page with heading, paragraph, lead, list, blockquote, inline code and link styles
- New components: Accordion, Alert, Data Table, Dialog, Popover, Select, Tabs and Toast (Sonner) — each with a docs page
- Data Table built on TanStack Table v9: global search, faceted filters, sortable headers, column visibility, row selection with bulk actions, row actions and page sizes
- Tables page now shows three levels — basic, standard and advanced — each with Preview/Code
- Dropdown Menu checkbox items and an indeterminate Checkbox state
- Order demo data expanded to 40 rows
- Card `variant` prop: `default`, `bordered` (2px border, no shadow) and `shadow` (no border, deeper shadow with a faint ring in dark mode), plus shadow-depth and hover-lift examples
- Five image card examples: article with cover, product, horizontal listing, image overlay and profile with cover
- Pricing FAQ now uses the Accordion component
- Status colors split into three roles — `--x` (fills, solid backgrounds), `--x-foreground` (text on solid) and `--x-text` (colored text on the page or a soft tint) — plus `--primary-text`. Fills stay bright (e.g. yellow rating stars) while every text pairing meets WCAG AA 4.5:1 in both themes
- Dark-mode primary and destructive buttons now meet 4.5:1 with white text
- Pricing page with plan cards, feature comparison and FAQ
- Pro waitlist form backed by Resend or any JSON webhook, with validation and spam protection
- Vercel Web Analytics
- Issue and pull request templates, contributing guide, security policy and `.env.example`
- README badges and environment variable docs
- GitHub Discussions for questions and ideas, linked from the issue chooser

### Changed

- Dashboard content is fluid (no max width), so it fills the space when the sidebar is minimized and lines up with the header on any screen; docs and typography pages keep a readable max width
- Lighter icon strokes (1.5 instead of Lucide's default 2) across the app
- Buttons and other clickable controls show a pointer cursor again (Tailwind v4 defaults buttons to `cursor: default`); disabled buttons keep the default cursor
- Single-series charts (revenue area, traffic sources) use `--primary` and follow the customizer; the multi-series chart palette starts with Tailwind blue (validated colorblind-safe in both themes)
- Status colors follow a new palette: info (Tailwind sky), success (Tailwind emerald), warning (#F59200 amber) and error (#FF4F1A orange-red), mapped per theme to shades that keep WCAG AA contrast
- Primary color now uses the Tailwind CSS blue scale — blue-600 for fills and buttons, blue-700 (light) / blue-400 (dark) for text — across the UI, app icon, manifest and Open Graph image
- UI Elements is a collapsible sidebar sub-menu listing every component; it opens automatically inside the section and scrolls the current page into view. The index page becomes an Introduction with installation steps
- "Get Pro" buttons now link to the pricing page

## [0.1.0] - 2026-10-08

First public release.

### Added

- **Dashboard pages**
  - Overview: KPI cards, monthly revenue area chart, weekly orders bar chart (online vs in store), recent orders, traffic sources and top products
  - Tables: orders table with search, status filter and pagination
  - Forms: profile form and notification settings
  - UI Elements: showcase of the component library
  - Sign in and Sign up pages (UI only)
  - Locked Pro menu entries (Analytics, E-commerce, CRM, Kanban, Calendar, Chat) linking to upgrade pages
- **`@multidash/ui` component library** with 17 components built on Radix UI: Avatar, Badge, Button, Card, Checkbox, Dropdown Menu, Input, Label, Native Select, Progress, Separator, Sheet, Skeleton, Switch, Table, Textarea and Tooltip
- **Theming**: light, dark and system modes; all colors defined as design tokens in a single CSS file
- **Charts** with Recharts: colorblind-safe palette validated for both themes, hover tooltips, screen-reader data tables and reduced-motion support
- **Responsive layout** with a mobile sidebar drawer
- **SEO & sharing**: app icon, Apple touch icon, web manifest, Open Graph and Twitter images, and canonical URL configuration
- **Monorepo tooling**: Turborepo, pnpm workspaces, shared TypeScript config, Next.js 16, React 19, Tailwind CSS v4 and TypeScript 6

[Unreleased]: https://github.com/hasraltechno/multidash/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/hasraltechno/multidash/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/hasraltechno/multidash/releases/tag/v0.1.0
