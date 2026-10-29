# PerfArchitect

Architect high-performance systems with confidence

## Overview

PerfArchitect is a performance tool that continuous performance architecture that catches regressions before merge.

**Problem:** Performance regressions ship to production because they are invisible in CI

**Solution:** Continuous performance architecture that catches regressions before merge

**Target Audience:** Frontend engineers, Platform teams, Performance engineers

## Features

- Continuous performance budgets in CI/CD
- Automatic regression detection with statistical rigor
- Bundle analysis with tree-shaking recommendations
- Real-user monitoring correlation
- Performance regression root-cause attribution

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

## Deployment

This project is configured for static export (`output: 'export'`), making it deployable to:

- **Vercel**: Connect repo and deploy
- **Netlify**: Connect repo, build command `npm run build`, publish directory `out`
- **GitHub Pages**: Use GitHub Actions to build and deploy `out/` directory
- **Cloudflare Pages**: Connect repo, build command `npm run build`, output `out`
- **Any static host**: Upload the `out/` directory

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Landing page
│   ├── globals.css     # Global styles + Tailwind
│   └── components/     # Page-specific components
├── components/         # Shared components
├── lib/                # Utilities
├── public/             # Static assets
└── ...
```

## Brand

- **Primary Color**: #2563eb
- **Secondary Color**: #3b82f6
- **Background**: #eff6ff
- **Text**: #1e3a5f

## License

MIT License - feel free to use for your own projects.

---

Built with ❤️ for developers.