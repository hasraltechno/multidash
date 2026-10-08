# Changelog

All notable changes to this project are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Component documentation: an overview page plus one page per component with live examples, Preview/Code tabs, copy buttons, dependencies, full source and usage
- Typography page with heading, paragraph, lead, list, blockquote, inline code and link styles
- New components: Accordion, Alert, Data Table, Dialog, Popover, Select, Tabs and Toast (Sonner) — 25 free components in total, each with a docs page
- Data Table built on TanStack Table v9: global search, faceted filters, sortable headers, column visibility, row selection with bulk actions, row actions and page sizes
- Tables page now shows three levels — basic, standard and advanced — each with Preview/Code
- Dropdown Menu checkbox items and an indeterminate Checkbox state
- Order demo data expanded to 40 rows
- Pricing FAQ now uses the Accordion component
- Darker light-mode `--destructive` and `--warning` tokens so status text meets WCAG AA contrast (4.5:1)
- Pricing page with plan cards, feature comparison and FAQ
- Pro waitlist form backed by Resend or any JSON webhook, with validation and spam protection
- Vercel Web Analytics
- Issue and pull request templates, contributing guide, security policy and `.env.example`
- README badges and environment variable docs
- GitHub Discussions for questions and ideas, linked from the issue chooser

### Changed

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

[Unreleased]: https://github.com/hasraltechno/multidash/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/hasraltechno/multidash/releases/tag/v0.1.0
