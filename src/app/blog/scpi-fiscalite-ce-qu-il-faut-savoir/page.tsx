import Link from "next/link";

export default function ArticleFiscaliteScpiPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Blog SCPI
          </p>
          <h1>Fiscalité des SCPI : ce qu’il faut savoir avant d’investir</h1>
          <p>
            La fiscalité des SCPI constitue l’un des sujets les plus importants
            à analyser avant toute souscription. Beaucoup d’investisseurs
            s’intéressent d’abord au taux de distribution affiché, mais la
            performance nette réellement perçue dépend en grande partie du cadre
            fiscal applicable à leur situation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <article className="content-block">
            <p>
              Lorsqu’un investisseur détient des SCPI en direct, les revenus
              distribués relèvent en principe de la catégorie des revenus
              fonciers lorsqu’ils proviennent de loyers encaissés par la SCPI.
              À cette imposition s’ajoutent les prélèvements sociaux. Cela
              signifie qu’une même distribution brute peut produire un résultat
              net très différent selon la tranche marginale d’imposition de
              l’investisseur.
            </p>

            <p>
              En pratique, la fiscalité des SCPI doit toujours être analysée en
              lien avec le patrimoine global, les objectifs de revenus, l’horizon
              d’investissement et le mode de détention retenu. Une détention en
              direct ne produit pas les mêmes effets qu’une détention via une
              assurance-vie ou via une structure sociétaire.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Pourquoi la fiscalité est-elle un sujet central ?
            </h2>

            <p>
              Parce qu’elle influence directement l’intérêt réel d’un placement.
              Un investisseur fortement fiscalisé n’aura pas la même lecture
              qu’un investisseur disposant d’un cadre plus favorable. Il est
              donc essentiel de ne jamais se limiter à une approche purement
              commerciale fondée sur le seul rendement annoncé.
            </p>

            <p>
              La lecture de la fiscalité doit également intégrer les éventuels
              revenus issus de patrimoines détenus hors de France. Certaines SCPI
              investissent une part significative de leur patrimoine en Europe,
              ce qui peut modifier le traitement fiscal selon les conventions
              applicables.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Quels éléments faut-il regarder avant de souscrire ?
            </h2>

            <ul>
              <li>la tranche marginale d’imposition du foyer ;</li>
              <li>le niveau de prélèvements sociaux supportés ;</li>
              <li>le besoin de revenus immédiats ou différés ;</li>
              <li>le mode de détention envisagé ;</li>
              <li>la part éventuelle d’actifs européens ;</li>
              <li>l’horizon d’investissement retenu.</li>
            </ul>

            <p>
              Une SCPI peut être pertinente d’un point de vue patrimonial, mais
              moins cohérente d’un point de vue fiscal si le cadre de détention
              n’est pas adapté. C’est pourquoi une approche structurée est
              indispensable avant toute décision.
            </p>

            <div className="mt-10">
              <Link href="/guide-pdf" className="btn-primary">
                Télécharger le guide SCPI
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}