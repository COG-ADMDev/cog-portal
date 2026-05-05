# cog-portal

Client portal for **Command Ops Group LLC** — a fractional COO and consulting firm operating under reputation-only intake.

Live: [portal.commandopsgroup.com](https://portal.commandopsgroup.com) *(planned)*

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind v4 + shadcn/ui
- Auth: email OTP + per-client JWT (Phase 4B)
- Data: TBD (Supabase or SQLite — Phase 4C)
- Hosting: Vercel

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in. Required vars are added during Phases 4B–4E.

## Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── layout.tsx
│   ├── page.tsx            # Public landing
│   └── globals.css
├── components/
│   └── ui/                 # shadcn components
└── lib/
    └── utils.ts            # cn() and helpers
```

## Deployment

This project deploys to Vercel via GitHub push. Production branch: `main`.

## Security Posture

- All client data is scoped server-side by `client-id` derived from the authenticated user's JWT.
- Whitelist of authorized emails maintained in environment / database. Adding stakeholders requires explicit FJ approval.
- Portal is read-only in v1. Comments and approvals are future scope.
- No vault content stored in the repo. All client data flows in via authenticated API at request time, or is written by the vault sync engine.

## Build Phases

| Phase | Description | Status |
|---|---|---|
| 4A | Scaffold (Next.js + shadcn + GitHub + Vercel) | ✅ in progress |
| 4B | Auth (email OTP, whitelist, JWT) | ⏳ |
| 4C | Data layer (datastore + API routes) | ⏸ |
| 4D | UI (dashboard, task list, project tree, downloads) | ⏸ |
| 4E | Vault → Portal sync (Obsidian plugin) | ⏸ |

## License

Proprietary. All rights reserved by Command Ops Group LLC.
