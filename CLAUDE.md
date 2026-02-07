# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Turbopack) at localhost:3000
npm run build        # Production build (Turbopack) + sitemap generation via postbuild
npm run start        # Run production server
npm run lint         # ESLint (flat config, Next.js + TypeScript rules)
```

No test framework is configured.

## Architecture

Next.js 15 App Router site (React 19, TypeScript, Tailwind CSS 4). Deployed on Vercel.

**Routing:** `app/` directory with two pages (`/` and `/padel-culture`) plus an API route (`app/api/send/route.ts` using Resend for email).

**Homepage** (`app/page.tsx`) composes section components in order: Hero, Mission, PadelCulture, FocusArea, AboutUs, Multisports, ContactSection.

**Root layout** (`app/layout.tsx`) loads four font families as CSS variables, renders NavBar/Footer around all pages, includes Vercel Analytics, and loads the Web3Forms client script.

**Components:** `components/` holds page-section components; `components/ui/` holds reusable primitives (Button, Tape marquee, Globe, StatsCard). Client components are marked `"use client"` — NavBar (GSAP animations), ContactSection (form state), Globe (canvas), Tape (animation).

**Styling:** Tailwind v4 via PostCSS. Theme tokens defined in `app/globals.css` with `@theme inline`. Custom CSS classes: `.copy` (paragraph text), `.homepage-title` (section headers), `.tape-3d` / `.tape-aria-hidden` (marquee helpers). Prettier with `prettier-plugin-tailwindcss` for class sorting.

**Fonts:** Clash Display (`font-clash-display`) for headlines, Satoshi (`font-satoshi`) for body text. Loaded as local variable fonts from `public/fonts/`.

**Animations:** GSAP (`@gsap/react`) for NavBar menu transitions. Motion library for spring-physics animations on the Globe. CSS keyframes (`move-left`/`move-right`) for Tape marquee.

**Path alias:** `@/*` maps to project root.

**Utility:** `cn()` in `lib/utils.ts` — merges Tailwind classes via clsx + tailwind-merge.

**Button component** (`components/ui/button.tsx`) supports variants (default, destructive, outline, secondary, ghost, link), sizes, and polymorphic rendering via Radix UI `Slot` (`asChild` prop).

## Environment Variables

- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — public, used client-side for contact form
- `RESEND_API_KEY` — server-side, used in API route for email sending
- `CONTACT_EMAIL` — server-side, recipient for contact form submissions
- `SITE_URL` — used by next-sitemap for sitemap generation (default: `https://www.courtculture.com.au`)

## Conventions

- Conventional commits: `feat:`, `fix:`, `refactor:`, `chore:`
- Main branch is `master`
