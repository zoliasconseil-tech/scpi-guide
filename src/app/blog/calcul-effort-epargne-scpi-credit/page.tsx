import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Effort d'épargne SCPI à crédit : méthode de calcul et exemple",
  description:
    "Apprenez à estimer l'effort d'épargne d'une SCPI à crédit avec une méthode simple, un exemple chiffré et les principaux paramètres à prendre en compte.",
  alternates: {
    canonical:
      "https://www.scpi-gouv.org/blog/calcul-effort-epargne-scpi-credit",
  },
};

export default function ArticleCalculEffortEpargnePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Blog SCPI
          </p>
          <h1>Comment calculer l'effort d'épargne d'une SCPI à crédit ?</h1>
          <p>
            L'effort d'épargne est l'un des indicateurs clés d'un projet
            d'investissement en SCPI à crédit. Il représente la somme mensuelle
            que l'investisseur doit effectivement décaisser, après déduction des
            revenus nets distribués par la SCPI. Comprendre comment il se calcule
            permet de mieux évaluer la faisabilité et la cohérence d'un projet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <article className="content-block">

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Définition de l'effort d'épargne
            </h2>

            <p>
              L'effort d'épargne mensuel correspond à la charge nette que
              supporte l'investisseur chaque mois pour maintenir son projet
              de SCPI à crédit. Il s'agit de la différence entre ce qu'il
              rembourse à la banque (la mensualité du crédit) et ce qu'il
              perçoit réellement de la SCPI (les revenus nets disponibles
              après fiscalité).
            </p>

            <p>
              Cet indicateur est central dans l'évaluation d'un projet car il
              conditionne directement la soutenabilité financière de
              l'investissement sur la durée du crédit. Un effort d'épargne trop
              élevé peut fragiliser l'investisseur en cas d'imprévu.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Formule simple de calcul
            </h2>

            <p>La formule de base est la suivante :</p>

            <div
              className="my-6 rounded-[16px] px-8 py-6 text-center text-[20px] font-bold"
              style={{ background: "#26478f", color: "white" }}
            >
              Effort d'épargne = mensualité du crédit − revenus SCPI nets disponibles
            </div>

            <p>
              Les revenus SCPI nets disponibles s'obtiennent en soustrayant des
              revenus bruts distribués l'ensemble des charges fiscales et sociales :
            </p>

            <div
              className="my-6 rounded-[16px] px-8 py-5 text-[17px] leading-8"
              style={{ background: "#eaf0fb" }}
            >
              <p className="font-semibold text-[var(--primary)] mb-2">
                Revenus nets = revenus bruts distribués × (1 − taux global d'imposition)
              </p>
              <p className="text-slate-600 text-[15px]">
                Le taux global d'imposition inclut la tranche marginale d'imposition (IR)
                et les prélèvements sociaux (17,2 % pour les SCPI françaises). Par exemple,
                pour une TMI de 30 % : taux global = 30 % + 17,2 % = 47,2 %.
              </p>
            </div>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Exemple de calcul pédagogique
            </h2>

            <p>
              Voici un exemple chiffré uniquement à titre illustratif. Ces données
              sont basées sur des hypothèses simplifiées et ne constituent pas une
              projection personnalisée.
            </p>

            <div
              className="mt-6 overflow-x-auto rounded-[20px] border"
              style={{ borderColor: "var(--border)" }}
            >
              <table className="w-full text-[16px]">
                <thead>
                  <tr style={{ background: "#eaf0fb" }}>
                    <th className="px-6 py-4 text-left font-bold text-[var(--primary)]">
                      Paramètre
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-[var(--primary)]">
                      Valeur illustrative
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Montant investi", "80 000 €"],
                    ["Apport personnel", "0 €"],
                    ["Montant emprunté", "80 000 €"],
                    ["Taux du crédit (indicatif)", "5,10 %"],
                    ["Durée", "20 ans"],
                    ["Mensualité du crédit", "~534 €/mois"],
                    ["Rendement brut SCPI (indicatif)", "5 % annuel"],
                    ["Revenus SCPI bruts mensuels", "~333 €/mois"],
                    ["TMI retenue", "30 %"],
                    ["Prélèvements sociaux", "17,2 %"],
                    ["Taux global d'imposition", "47,2 %"],
                    ["Revenus SCPI nets mensuels", "~176 €/mois"],
                    ["Effort d'épargne estimé", "~358 €/mois"],
                  ].map(([param, value], i) => (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "white" : "#f8faff" }}
                    >
                      <td className="px-6 py-3 text-slate-700">{param}</td>
                      <td className="px-6 py-3 font-semibold text-slate-900">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="mt-6 rounded-[16px] px-6 py-5 text-[15px] leading-7 text-slate-600"
              style={{ background: "#f3ecd8" }}
            >
              <strong>Rappel :</strong> ces chiffres sont uniquement illustratifs et
              reposent sur des hypothèses fixes. Le rendement distribué, les taux
              d'intérêt et la fiscalité peuvent évoluer. Ces données ne constituent
              pas un conseil en investissement.
            </div>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Paramètres qui influencent le résultat
            </h2>

            <p>
              L'effort d'épargne peut varier sensiblement selon plusieurs paramètres
              qu'il est important d'identifier et de tester dans la simulation.
            </p>

            <h3 className="mt-8 mb-3 text-2xl font-bold text-slate-800">
              Montant investi
            </h3>
            <p>
              Plus le montant investi est élevé, plus les revenus potentiels bruts sont
              importants — mais la mensualité du crédit augmente proportionnellement.
              L'effort d'épargne net dépend donc de l'équilibre entre ces deux variables.
            </p>

            <h3 className="mt-8 mb-3 text-2xl font-bold text-slate-800">
              Taux du crédit
            </h3>
            <p>
              Le taux d'intérêt influence directement le montant de la mensualité. Un
              taux plus élevé augmente mécaniquement l'effort d'épargne. Il est utile
              de tester plusieurs niveaux de taux pour mesurer la sensibilité du projet.
            </p>

            <h3 className="mt-8 mb-3 text-2xl font-bold text-slate-800">
              Durée du crédit
            </h3>
            <p>
              Allonger la durée du crédit réduit la mensualité et donc l'effort
              d'épargne mensuel, mais augmente le coût total des intérêts. Raccourcir
              la durée réduit le coût global mais augmente la mensualité. La durée
              optimale dépend de la capacité de remboursement et de l'objectif
              patrimonial.
            </p>

            <h3 className="mt-8 mb-3 text-2xl font-bold text-slate-800">
              Rendement distribué
            </h3>
            <p>
              Le taux de distribution affiché par une SCPI est un indicateur historique
              et non une promesse de performance future. Il est recommandé de retenir
              une hypothèse prudente dans la simulation, car les revenus peuvent évoluer
              à la baisse.
            </p>

            <h3 className="mt-8 mb-3 text-2xl font-bold text-slate-800">
              Fiscalité
            </h3>
            <p>
              La tranche marginale d'imposition de l'investisseur a un impact direct
              sur les revenus nets disponibles. Plus la TMI est élevée, plus l'effort
              d'épargne réel est important. Pour les{" "}
              <Link
                href="/fiscalite"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                SCPI françaises
              </Link>
              , les prélèvements sociaux de 17,2 % s'ajoutent à l'impôt sur le revenu.
            </p>

            <h3 className="mt-8 mb-3 text-2xl font-bold text-slate-800">
              Délai de jouissance
            </h3>
            <p>
              Lors d'une souscription de parts de SCPI, un délai de plusieurs mois
              s'écoule généralement avant le premier versement de revenus. Pendant
              cette période, l'investisseur supporte la totalité de la mensualité du
              crédit sans revenus SCPI en compensation. Ce délai doit être anticipé
              dans le calcul de l'effort d'épargne initial.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Pourquoi le résultat peut varier
            </h2>

            <p>
              Dans la pratique, l'effort d'épargne réel peut s'écarter significativement
              de l'estimation initiale pour plusieurs raisons :
            </p>

            <ul>
              <li>
                <strong>Variation des revenus distribués :</strong> le taux d'occupation
                financier peut baisser, les arbitrages d'actifs peuvent modifier les
                distributions, ou la politique de réserve de la SCPI peut évoluer.
              </li>
              <li>
                <strong>Évolution de la fiscalité :</strong> les règles fiscales peuvent
                changer, notamment les taux de prélèvements sociaux ou les conventions
                bilatérales pour les SCPI européennes.
              </li>
              <li>
                <strong>Changement de situation personnelle :</strong> une évolution des
                revenus professionnels peut modifier la tranche marginale d'imposition
                et donc l'impôt dû sur les revenus SCPI.
              </li>
              <li>
                <strong>Taux variable :</strong> dans le cas d'un crédit à taux
                variable, la mensualité peut augmenter selon les conditions du marché.
              </li>
            </ul>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Utiliser un simulateur SCPI à crédit
            </h2>

            <p>
              Pour obtenir un ordre de grandeur rapidement, notre{" "}
              <Link
                href="/scpi-credit"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                simulateur SCPI à crédit
              </Link>{" "}
              permet d'estimer l'effort d'épargne mensuel et les revenus à terme à
              partir de trois données : l'enveloppe investie, l'apport et la durée
              du crédit.
            </p>

            <p>
              Il est recommandé de tester plusieurs configurations — durées différentes,
              niveaux d'apport variés — pour mesurer la sensibilité du projet aux
              principaux paramètres. La simulation reste un outil pédagogique et ne
              remplace pas une étude patrimoniale personnalisée.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Conclusion
            </h2>

            <p>
              L'effort d'épargne est un indicateur central dans l'analyse d'un projet
              de SCPI à crédit. Son calcul repose sur la formule simple :
              mensualité − revenus nets. Mais sa valeur réelle dépend de nombreux
              paramètres — fiscalité, rendement distribué, durée, délai de jouissance
              — qui peuvent évoluer dans le temps.
            </p>

            <p>
              Avant toute décision, il est conseillé d'effectuer une simulation
              sérieuse et, si possible, de consulter un conseiller en gestion de
              patrimoine pour évaluer la cohérence du projet avec sa situation
              personnelle.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Questions fréquentes
            </h2>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                L'effort d'épargne diminue-t-il avec le temps ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Pas automatiquement. La mensualité du crédit est en principe fixe
                pour un prêt à taux fixe. Les revenus SCPI peuvent évoluer à la
                hausse ou à la baisse selon les conditions locatives. En cas de
                progression des distributions, l'effort d'épargne peut se réduire
                progressivement, mais rien ne le garantit.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Faut-il inclure les intérêts déductibles dans le calcul ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                La déductibilité des intérêts d'emprunt en régime réel peut réduire
                la base imposable et donc l'impôt dû sur les revenus fonciers. Cet
                avantage potentiel peut améliorer le rendement net effectif. Il est
                cependant conditionné à plusieurs critères et doit être évalué selon
                la situation personnelle avec un conseiller fiscal.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Comment réduire l'effort d'épargne ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Plusieurs leviers permettent de réduire l'effort d'épargne : augmenter
                l'apport initial (ce qui réduit le capital emprunté et donc la
                mensualité), allonger la durée du crédit (ce qui réduit la mensualité
                mais augmente le coût total des intérêts), ou choisir des SCPI avec
                un rendement distribué historiquement plus élevé. Chaque levier a ses
                propres implications patrimoniales et financières.
              </p>
            </details>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/scpi-credit" className="btn-primary">
                Accéder au simulateur SCPI à crédit
              </Link>
              <Link href="/blog/scpi-credit-avantages-limites" className="btn-secondary">
                SCPI à crédit : avantages et limites
              </Link>
            </div>

          </article>
        </div>
      </section>

      {/* ── À LIRE AUSSI ── */}
      <section className="section" style={{ background: "#eaf0fb" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 20,
            }}
          >
            À lire aussi
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/scpi-credit"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Simulateur SCPI à crédit →
            </Link>
            <Link
              href="/blog/scpi-credit-avantages-limites"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Avantages et limites SCPI à crédit →
            </Link>
            <Link
              href="/fiscalite"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Fiscalité des SCPI →
            </Link>
            <Link
              href="/declaration-scpi-2026"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Déclaration SCPI 2026 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
