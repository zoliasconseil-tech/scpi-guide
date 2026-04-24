import Link from "next/link";

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
  return (
    <header className="site-header sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <div className="container-site">
        <div className="grid min-h-[84px] grid-cols-[auto_1fr_auto] items-center gap-4">
          <div className="justify-self-start">
            <Link href="/" className="text-2xl font-bold text-[var(--primary)]">
              Guide<span className="text-slate-500">SCPI</span>
            </Link>
          </div>

          <div className="flex justify-center overflow-x-auto">
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

          <div className="justify-self-end">
            <Link href="/guide-pdf" className="btn-primary">
              Télécharger le guide
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}