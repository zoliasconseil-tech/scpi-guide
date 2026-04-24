import Link from "next/link";

export default function ArticleScpiCreditPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Blog SCPI
          </p>
          <h1>Acheter des SCPI à crédit : avantages, limites et points d’attention</h1>
          <p>
            L’achat de SCPI à crédit intéresse de nombreux investisseurs qui
            souhaitent utiliser l’effet de levier du financement bancaire pour
            constituer un patrimoine immobilier indirect. Cette approche peut
            être pertinente, mais elle suppose une lecture rigoureuse des
            paramètres financiers, fiscaux et patrimoniaux.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <article className="content-block">
            <p>
              Souscrire des SCPI à crédit consiste à financer tout ou partie de
              l’investissement par emprunt. L’objectif recherché peut être la
              constitution progressive d’un patrimoine, la mutualisation du
              financement, ou encore la recherche d’un équilibre entre effort
              d’épargne et revenus futurs.
            </p>

            <p>
              L’intérêt d’une telle stratégie dépend principalement du niveau de
              rendement envisagé, du taux de crédit, de la fiscalité des revenus
              et de la capacité de l’investisseur à supporter l’effort d’épargne
              pendant la durée du financement.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Pourquoi utiliser le crédit ?
            </h2>

            <p>
              Le crédit permet d’étaler l’investissement dans le temps et
              d’éviter de mobiliser immédiatement la totalité de l’épargne
              disponible. Il peut aussi permettre d’organiser plus efficacement
              un projet patrimonial lorsque l’investisseur souhaite conserver de
              la liquidité.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Quels sont les points de vigilance ?
            </h2>

            <ul>
              <li>le taux de crédit retenu ;</li>
              <li>la durée de financement ;</li>
              <li>le niveau de rendement retenu dans la simulation ;</li>
              <li>la fiscalité des revenus ;</li>
              <li>la capacité à supporter l’effort d’épargne ;</li>
              <li>la cohérence globale avec les objectifs patrimoniaux.</li>
            </ul>

            <p>
              Une simulation sérieuse ne doit jamais être lue comme une promesse
              de résultat. Elle constitue une base de travail qui permet
              d’évaluer un ordre de grandeur et d’organiser la réflexion.
            </p>

            <div className="mt-10">
              <Link href="/scpi-credit" className="btn-primary">
                Accéder au simulateur SCPI à crédit
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}