# Contributing to Multidash

Thanks for your interest in improving Multidash! Bug reports, ideas and pull requests are all welcome.

## Development setup

```bash
corepack enable pnpm
pnpm install
pnpm dev        # http://localhost:3000
```

Before opening a pull request, make sure these pass:

```bash
pnpm typecheck
pnpm build
```

## Project layout

- `apps/demo` — the Next.js dashboard app
- `packages/ui` — `@multidash/ui`, shared components and theme tokens
- `packages/typescript-config` — shared tsconfig presets

## Guidelines

- **Keep changes focused.** One feature or fix per pull request.
- **Match the existing style.** Components follow the shadcn/ui conventions used in `packages/ui`.
- **Use theme tokens**, not hard-coded colors, so light and dark mode keep working.
- **Accessibility matters.** Interactive elements need keyboard support and labels; status should never rely on color alone.
- **Update `CHANGELOG.md`** under `[Unreleased]` for user-facing changes.

## Questions

Have a question or an idea? Start a thread in [GitHub Discussions](https://github.com/hasraltechno/multidash/discussions) — issues are reserved for bugs and concrete feature requests.

## Reporting bugs

Open an issue using the bug report template and include steps to reproduce. For security issues, see [SECURITY.md](SECURITY.md) instead.
