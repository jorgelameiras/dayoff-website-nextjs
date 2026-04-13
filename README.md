# DayOff Website — Next.js

Full-stack marketing and booking website for DayOff, built with Next.js and Supabase.

## What It Does

An upgraded version of the DayOff marketing site with a backend, booking flow, and database integration via Supabase.

## Features

- Modern marketing landing page
- Service pages (cleaning + AC maintenance)
- Client booking/quote request form
- Supabase backend for storing form submissions
- Mobile-first, responsive design
- Tailwind CSS styling system

## Tech Stack

- **Next.js** — React full-stack framework
- **TypeScript** — type safety
- **Tailwind CSS** — utility-first styling
- **Supabase** — backend database and auth

## Getting Started

```bash
npm install
```

Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |

## Business Context

DayOff offers vacation home cleaning + AC maintenance in Florida. This site is the primary client-facing marketing and booking platform.