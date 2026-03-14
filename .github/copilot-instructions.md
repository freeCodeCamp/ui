# Copilot Instructions for freeCodeCamp UI

## Overview

This is the freeCodeCamp UI component library, built with React and Tailwind CSS. It provides accessible, reusable components for use in freeCodeCamp and other projects. The codebase is designed for easy customization and theming.

## Architecture & Patterns

- All components are in `src/`, each in its own folder (e.g., `src/col/`, `src/button/`).
- Each component folder typically contains:
  - `*.tsx`: Component implementation
  - `*.stories.tsx`: Storybook stories
  - `*.test.tsx`: Vitest tests
  - `types.ts`: TypeScript types for props
- Components are exported via `src/index.ts`.
- Styles are managed with Tailwind CSS. The main stylesheet is `src/base.css`, built to `dist/base.css`.
- Theming is handled by the `getThemingClass` util.

## Developer Workflows

- **Install dependencies:** `pnpm install`
- **Run Storybook:** `pnpm run storybook` (see components in isolation)
- **Run tests:** `pnpm test` (Vitest, Testing Library)
- **Lint:** `pnpm lint`
- **Typecheck:** `pnpm typecheck`
- **Build:** `pnpm run build` (runs clean, CSS build, JS build)
- **Generate new component:** `pnpm run gen-component`
- **Start development:** `pnpm start` (parallel dev:css, dev:js, storybook)

## Testing

- Tests use Vitest and React Testing Library.
- CSS imports are stubbed in tests via `__mocks__/styleMock.ts`.
- Use the `should` style for assertions.

## Conventions

- Use only pnpm for package management (`npx only-allow pnpm` enforced).
- All props and types for components are defined in `types.ts` in each component folder.
- Use Tailwind utility classes for layout and spacing. For RTL support, prefer logical properties (e.g., `ms-*` for margin-start).
- Storybook stories are in `*.stories.tsx` files.
- Accessibility is a priority: use semantic HTML and ARIA attributes as needed.

## CI/CD

- GitHub Actions run lint, test, typecheck, and build on PRs and pushes to main.
- Storybook is deployed via GitHub Actions (`.github/workflows/storybook-deploy.yml`).

## Key Files & Directories

- `src/`: All components
- `src/index.ts`: Component exports
- `src/base.css`: Main stylesheet
- `package.json`: Scripts and dependencies
- `.github/workflows/`: CI/CD pipelines
- `README.md`: Basic usage and setup

## Example: Adding a New Component

1. Run `pnpm run gen-component` to scaffold.
2. Implement in `src/[component]/[component].tsx`.
3. Add types in `src/[component]/types.ts`.
4. Write tests in `src/[component]/[component].test.tsx`.
5. Add Storybook stories in `src/[component]/[component].stories.tsx`.
6. Export from `src/index.ts`.

## Integration Points

- Peer dependencies: React 16/17/18, ReactDOM
- External: FontAwesome, HeadlessUI, Radix UI, PrismJS

## PR and Commit Convention

- PR title and commit messages MUST follow Conventional Commits (https://www.conventionalcommits.org/).
- The PR title should describe what the change does. Use the conventional-commit prefix as the PR title prefix, for example:
  - `feat(col): add support for all 12 grid columns`
  - `refactor(button): simplify disabled state logic`
- For commits, use the commit body to explain why the change was made and any important implementation notes.
- PR descriptions should be concise: what changed, why, and any migration steps or risk notes. Reference related issues using `#<issue-number>`.
