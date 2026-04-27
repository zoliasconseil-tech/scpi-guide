"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/fiscalite", label: "Fiscalité" },
  { href: "/avantages", label: "Avantages" },
  { href: "/revente", label: "Revente" },
  { href: "/guide-pdf", label: "Guide PDF" },
  { href: "/comparaison", label: "Comparaison" },
  { href: "/scpi-credit", label: "SCPI à crédit" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-[var(--primary)]">
              Guide<span className="text-slate-500">SCPI</span>
            </Link>
          </div>

          <div className="hidden justify-center overflow-x-auto lg:flex">
            <nav className="flex items-center rounded-full border border-[var(--border)] bg-white px-3 py-2 shadow-[0_4px_18px_rgba(15,23,42,0.05)] whitespace-nowrap">
              {navItems.map((item, index) => (
                <div key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-[14px] font-semibold text-slate-800 transition hover:text-[var(--primary)]"
                  >
                    {item.label}
                  </Link>

                  {index < navItems.length - 1 ? (
                    <span className="h-5 w-px bg-[var(--border)]" />
                  ) : null}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-full border border-[var(--border)] px-4 py-3 text-sm font-bold text-[var(--primary)] lg:hidden"
              aria-label="Ouvrir le menu"
            >
              Menu
            </button>

            <Link
              href="/guide-pdf"
              className="btn-primary whitespace-nowrap px-4 py-3 text-sm sm:px-6 sm:text-base"
            >
              Télécharger le guide
            </Link>
          </div>
        </div>

        {open ? (
          <nav className="grid gap-2 pb-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}