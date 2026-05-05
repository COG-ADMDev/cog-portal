# CLAUDE.md — cog-portal

@AGENTS.md

## What This Is

The client-facing portal for **Command Ops Group LLC**. Domain: portal.commandopsgroup.com (planned). Source-of-truth for client task visibility, project status, and deliverable downloads.

This is **production code with confidentiality stakes**. It exposes selected vault data to authenticated, whitelisted client stakeholders. Every architectural choice should be evaluated against client confidentiality first, ergonomics second.

## Architecture (planned, evolving)

- **Framework:** Next.js 16 (App Router) + TypeScript
- **UI:** Tailwind v4 + shadcn/ui (base-nova style, neutral)
- **Auth:** Email OTP + whitelist + per-client JWT scoping (decision logged in COG-Vault Open-Decisions.md)
- **Data store:** TBD — Supabase (free tier) or SQLite leading candidates
- **Sync:** Real-time event-driven from Obsidian vault on save of project files or task files with `portal-visible: true`
- **Hosting:** Vercel
- **Repo:** github.com/COG-ADMDev/cog-portal

## Hard Rules

- **Confidentiality is absolute.** No client data is rendered to a session that isn't authenticated AND scoped to that client's `client-id`.
- **No vault content lives in this repo.** Data flows in via API at request time (or via cached datastore writes from sync events). The repo contains code only.
- **No secrets in code.** Tokens, DB URLs, JWT secrets all go in `.env.local` (untracked) and Vercel environment variables.
- **No client-mutating writes from the portal in v1.** Read-only client surface. Comments / approvals are a future feature behind explicit FJ approval.
- **Logs strip PII.** No client emails, names, or task content in production logs.

## Vault → Portal Data Contract

The portal reads (eventually, via sync engine):

- **Tasks:** files with `#task` tag, `portal-visible: true`, `client-id` set
- **Projects:** files with `#project` tag, `client-id` set
- **Reports:** files with `#report` tag, `client-id` set, `status: sent`
- **Contacts:** files with `#contact` tag — used for whitelist mapping (email → client-ids)

The portal does **not** read:
- Internal CLAUDE.md content
- Open-Decisions.md
- Communication logs
- Anything tagged `internal: true` or `portal-visible: false`

## Phase 4 Build State

| Sub-phase | Status |
|---|---|
| 4A — Skeleton (Next.js + shadcn + GitHub) | ✅ done |
| 4B — Auth (email OTP + whitelist) | ⏳ next |
| 4C — Data layer + API routes | ⏸ |
| 4D — UI (dashboard, tasks, projects, downloads) | ⏸ |
| 4E — Vault sync (Obsidian plugin → portal API) | ⏸ |

## Default Tone (when generating UI copy)

Professional, direct, no fluff. The portal is a B2B operating tool, not a marketing site. Microcopy should sound like it was written by an operator, not a SaaS marketer.
