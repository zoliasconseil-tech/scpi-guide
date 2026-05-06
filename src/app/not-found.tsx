import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Erreur 404
          </p>
          <h1>Page introuvable</h1>
          <p>
            La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez
            nos ressources ci-dessous.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="btn-primary">
              Retour à l'accueil
            </Link>
            <Link href="/fiscalite" className="btn-secondary">
              Fiscalité SCPI
            </Link>
            <Link href="/guide-pdf" className="btn-secondary">
              Télécharger le guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
