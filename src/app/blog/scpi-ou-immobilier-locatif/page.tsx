import Link from "next/link";

export default function ArticleScpiOuLocatifPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Blog SCPI
          </p>
          <h1>SCPI ou immobilier locatif en direct : quelles différences ?</h1>
          <p>
            De nombreux investisseurs hésitent entre acheter un bien immobilier
            locatif en direct et souscrire des parts de SCPI. Ces deux approches
            reposent sur des logiques patrimoniales différentes et ne présentent
            ni les mêmes contraintes ni les mêmes avantages.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <article className="content-block">
            <p>
              L’investissement locatif en direct suppose le choix d’un bien, la
              mise en place du financement, la gestion locative, les travaux,
              les risques d’impayés et l’ensemble des décisions liées à la
              détention d’un actif immobilier identifié. En contrepartie,
              l’investisseur garde une maîtrise directe du bien et de sa gestion.
            </p>

            <p>
              Les SCPI proposent une approche différente. L’investisseur ne
              détient pas un immeuble unique mais des parts d’un patrimoine
              mutualisé. La gestion est assurée par une société de gestion, ce
              qui réduit fortement l’implication opérationnelle du porteur de parts.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Les grandes différences à connaître
            </h2>

            <ul>
              <li>la gestion est déléguée dans les SCPI ;</li>
              <li>le risque locatif est mutualisé ;</li>
              <li>le ticket d’entrée peut être plus progressif ;</li>
              <li>la revente des parts ne suit pas la même logique qu’un bien ;</li>
              <li>la fiscalité doit être étudiée séparément selon chaque cas.</li>
            </ul>

            <p>
              En réalité, il ne s’agit pas de dire qu’un support est
              systématiquement meilleur qu’un autre. Le vrai sujet consiste à
              déterminer lequel répond le mieux au profil de l’investisseur, à
              son temps disponible, à sa capacité d’endettement et à ses
              objectifs patrimoniaux.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Quelle approche choisir ?
            </h2>

            <p>
              Les SCPI peuvent convenir à des investisseurs qui recherchent une
              approche plus passive, plus diversifiée et plus simple à gérer.
              L’immobilier locatif en direct peut convenir à des profils qui
              souhaitent conserver une maîtrise forte sur l’actif, sur les
              travaux et sur la stratégie patrimoniale.
            </p>

            <div className="mt-10">
              <Link href="/comparaison" className="btn-primary">
                Comparer plusieurs SCPI
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}