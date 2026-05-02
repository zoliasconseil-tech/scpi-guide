# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server on http://localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

There are no tests in this project.

## Architecture

**Stack**: Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4

**What the site is**: A French-language educational and lead-generation site about SCPI (Sociétés Civiles de Placement Immobilier — a type of French real estate fund). Domain: `scpi-gouv.org`. Owned/operated by ZOLIAS.

### Routing (App Router pages)

| Route | Purpose |
|---|---|
| `/` | Homepage — definition, why invest, conditions, fiscal overview |
| `/fiscalite` | Detailed taxation page |
| `/avantages` | Benefits of SCPI |
| `/revente` | How to sell shares |
| `/comparaison` | Interactive SCPI comparison tool |
| `/scpi-credit` | Credit-financed SCPI simulator |
| `/guide-pdf` | Guide download page (gated behind lead form) |
| `/faq` | FAQ |
| `/blog` | Blog index + articles |
| `/api/lead` | POST-only route — receives lead form submissions |

### Lead generation flow

Every interactive CTA ultimately sends data to `/api/lead` (POST), which:
1. Validates required fields (firstName, lastName, email, phone)
2. Sends an HTML email notification via **Resend** to `LEAD_NOTIFICATION_TO`
3. Required env vars: `RESEND_API_KEY`, `LEAD_NOTIFICATION_TO`, `LEAD_FROM`

`LeadForm` (`src/components/LeadForm.tsx`) is the shared client-side form component used across the site. It accepts a `source` prop (`"guide" | "comparaison" | "contact" | "scpi_credit"`), optional `selectedScpi[]`, `extraData`, `downloadUrl`, and an `onSuccess` callback.

### Interactive components

- **`ComparisonTool`** — lets users select 2–3 SCPIs (max), view a comparison table, then fill a lead form; on `onSuccess` generates a PDF via jsPDF/jspdf-autotable.
- **`ScpiCreditSimulator`** — takes envelope, down-payment, and term; computes monthly savings effort and post-credit net revenues with fixed assumptions (TMI 30%, yield 5%, credit rate 5.10%, social charges 17.2%); similarly gates PDF export behind a lead form.

### SCPI data

All SCPI metadata is a static array in `src/lib/scpi-data.ts` (type `Scpi`). Fields: id, name, manager, category, sharePrice, sri, nominalValue, enjoymentDelay, dividendFrequency. Currently 9 entries. This is the single source of truth for both `ComparisonTool` and the comparison page.

### Styling conventions

The project uses two parallel styling systems — both are intentional:

1. **Global CSS utility classes** in `src/app/globals.css`: `.section`, `.container-site`, `.card`, `.btn-primary`, `.btn-secondary`, `.form-shell`, `.input-grid`, `.input-full`, `.label`, `.input`, `.notice-box`, `.faq-item`, `.table-wrap`, `.grid-2/3/4`. These are used in most content pages.

2. **Tailwind inline classes** (`className="..."`) used heavily on the homepage (`src/app/page.tsx`) and in components.

**Design tokens** (CSS custom properties): `--primary` (#17365d navy), `--primary-hover`, `--background`, `--foreground`, `--muted`, `--soft`, `--border`, `--container` (1180px). Additional brand colors used inline: `#1f3b77` (dark navy), `#4d7fd6` (blue), `#f5c455` (yellow/gold), `#f8f0df` (cream), `#eaf1fb` (light blue).

Responsive breakpoint for global grid classes: 980px (collapses to single column).

### Homepage structure

`src/app/page.tsx` defines several local primitive components (`Section`, `Container`, `Title`, `InfoCard`, `BluePanel`, `BeigePanel`, `CheckList`, `SimpleTable`) used only on that page — not exported.

## Publication d'articles de blog

Quand l'utilisateur envoie un article (Word, Google Doc, texte brut) :

1. **Créer** `src/app/blog/<slug>/page.tsx` en respectant exactement cette structure :

```tsx
import Link from "next/link";

export default function Article<PascalSlug>Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Blog SCPI
          </p>
          <h1>Titre de l'article</h1>
          <p>Chapeau introductif.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <article className="content-block">
            <p>...</p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Titre de section
            </h2>

            <p>...</p>

            <ul>
              <li>...</li>
            </ul>

            <div className="mt-10">
              <Link href="/..." className="btn-primary">
                Texte du CTA
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
```

Règles :
- Le `<slug>` est en kebab-case et correspond exactement au nom du dossier.
- Les `<h2>` portent toujours `className="mt-10 mb-4 text-3xl font-bold text-slate-900"`.
- Le CTA final est un `<Link>` vers la page la plus pertinente du site (`/scpi-credit`, `/comparaison`, `/guide-pdf`, etc.).
- Ne pas ajouter de métadonnées `export const metadata` sauf si l'utilisateur en fournit explicitement.

2. **Committer et pousser** immédiatement après la création :

```bash
git add src/app/blog/<slug>/page.tsx
git commit -m "add article: <titre>"
git push
```
