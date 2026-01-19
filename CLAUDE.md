# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Type-check and build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Tech Stack

- React 19 with TypeScript
- Vite 6 for bundling
- Tailwind CSS 4 (using `@tailwindcss/vite` plugin)
- Shadcn UI (new-york style) with Radix primitives
- Preline for UI components
- React Router DOM for routing
- Recharts for data visualization

## Architecture

This is a single-page portfolio website with the following structure:

**Entry Point**: `src/main.tsx` wraps the app in `BrowserRouter` and a custom `ThemeProvider`

**App Structure** (`src/App.tsx`): Renders sections in order: Navbar → Hero → Skills → Timeline → DemoGraph → PictureCard → Footer

**Directory Organization**:
- `src/sections/` - Page sections (Hero, Navbar, Footer, Projects, Skills)
- `src/components/` - Reusable components (Timeline, DemoGraph, PictureCard)
- `src/components/ui/` - Shadcn UI components
- `src/common/` - Shared utilities (ThemeContext, ProjectCard, SkillList)
- `src/lib/` - Utility functions (utils.ts for cn helper)

**Theme System**: Custom `ThemeContext` in `src/common/ThemeContext.tsx` manages light/dark theme via React Context, persisted to localStorage

**Preline Integration**: Uses `HSStaticMethods.autoInit()` in App.tsx useEffect for Preline components

## Code Conventions

- Use `@/` path alias for absolute imports (configured in vite.config.ts)
- Add Shadcn components with: `npx shadcn@latest add <component-name>`
- Prefer interfaces over types; use `as const` instead of enums
- Use functional components with explicit return types
- Named exports for components and utilities

## Git Commit Prefixes

- `fix:` bug fixes
- `feat:` new features
- `perf:` performance improvements
- `docs:` documentation
- `style:` formatting
- `refactor:` refactoring
- `test:` tests
- `chore:` maintenance
