import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simulateur SCPI à crédit : comment interpréter les résultats ?",
  description:
    "Découvrez comment lire une simulation SCPI à crédit : mensualité, revenus potentiels, effort d'épargne, fiscalité et limites de l'estimation.",
  alternates: {
    canonical: "https://www.scpi-gouv.org/simulateur-scpi-credit",
  },
};

export default function SimulateurScpiCreditPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Blog SCPI
          </p>
          <h1>Simulateur SCPI à crédit : comment interpréter les résultats ?</h1>
          <p>
            Un{" "}
            <Link
              href="/scpi-credit"
              className="font-semibold text-[var(--primary)] underline underline-offset-2"
            >
              simulateur SCPI à crédit
            </Link>{" "}
            permet d'estimer l'effort d'épargne mensuel d'un projet financé par
            emprunt. Le résultat reste indicatif : il dépend d'hypothèses
            simplifiées et ne constitue pas une projection financière garantie.
            Voici comment lire et interpréter les résultats obtenus.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <article className="content-block">

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              À quoi sert un simulateur SCPI à crédit ?
            </h2>

            <p>
              Un simulateur SCPI à crédit est un outil de pré-lecture
              patrimoniale. Il ne remplace pas une analyse personnalisée, mais
              il permet d'obtenir un premier ordre de grandeur à partir de
              quelques données clés. Les usages principaux sont :
            </p>

            <ul>
              <li>
                <strong>Estimer la mensualité du crédit</strong> selon le
                montant emprunté, le taux et la durée du financement.
              </li>
              <li>
                <strong>Estimer les revenus potentiels de la SCPI</strong>{" "}
                à partir d'un taux de rendement indicatif, avant et après
                fiscalité.
              </li>
              <li>
                <strong>Calculer l'effort d'épargne mensuel</strong>, soit la
                différence entre la mensualité du crédit et les revenus SCPI
                nets disponibles.
              </li>
              <li>
                <strong>Comparer plusieurs durées de crédit</strong> pour
                mesurer l'impact sur l'effort d'épargne et le coût total du
                financement.
              </li>
              <li>
                <strong>Comprendre l'impact du taux et de la fiscalité</strong>{" "}
                sur l'équilibre global du projet.
              </li>
            </ul>

            <p>
              Pour accéder directement à l'outil, consultez notre page de{" "}
              <Link
                href="/scpi-credit"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                simulation SCPI à crédit
              </Link>
              .
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Quels éléments entrent dans une simulation SCPI à crédit ?
            </h2>

            <p>
              Le résultat d'une simulation dépend de plusieurs paramètres,
              certains fixés par l'investisseur, d'autres reposant sur des
              hypothèses simplifiées :
            </p>

            <ul>
              <li>
                <strong>Montant total investi</strong> en parts de SCPI.
              </li>
              <li>
                <strong>Apport personnel</strong> : la part financée
                immédiatement par l'investisseur, qui réduit le capital emprunté.
              </li>
              <li>
                <strong>Durée du crédit</strong> : exprimée en années, elle
                influe directement sur la mensualité et le coût total des
                intérêts.
              </li>
              <li>
                <strong>Taux d'emprunt</strong> : le taux d'intérêt annuel
                appliqué par l'établissement prêteur. Ce taux peut varier selon
                le profil de l'emprunteur, la durée et les conditions du marché.
              </li>
              <li>
                <strong>Assurance emprunteur</strong> : souvent obligatoire,
                son coût s'ajoute à la mensualité et doit être intégré dans
                le calcul réel.
              </li>
              <li>
                <strong>Revenus potentiels de la SCPI</strong> : estimés à
                partir d'un taux de distribution indicatif, exprimé en
                pourcentage du montant investi.
              </li>
              <li>
                <strong>Fiscalité</strong> : la tranche marginale d'imposition
                (TMI) et les prélèvements sociaux (17,2 % pour les SCPI
                françaises) réduisent les revenus bruts disponibles.
              </li>
              <li>
                <strong>Délai de jouissance</strong> : les premiers revenus
                sont généralement versés avec un délai de plusieurs mois après
                la souscription, ce qui décale le début de la compensation.
              </li>
              <li>
                <strong>Frais de souscription et de gestion</strong> : ils
                réduisent le rendement net effectif et doivent être pris en
                compte dans la lecture du résultat.
              </li>
            </ul>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Comment lire le résultat d'un simulateur SCPI ?
            </h2>

            <p>
              Le résultat principal d'un simulateur SCPI à crédit est{" "}
              <strong>l'effort d'épargne mensuel</strong>. Il représente le
              montant que l'investisseur doit effectivement décaisser chaque mois
              pour financer son projet, une fois les revenus SCPI nets déduits
              de la mensualité du crédit :
            </p>

            <div
              className="my-6 rounded-[16px] px-8 py-6 text-center text-[18px] font-bold"
              style={{ background: "#26478f", color: "white" }}
            >
              Effort d'épargne = mensualité du crédit − revenus SCPI nets disponibles
            </div>

            <p>
              Un effort d'épargne faible signifie que les revenus de la SCPI
              contribuent significativement au remboursement du crédit. Un
              effort d'épargne élevé signifie que l'investisseur doit débourser
              davantage chaque mois de sa propre trésorerie.
            </p>

            <p>
              Certains simulateurs affichent également une estimation des{" "}
              <strong>revenus à terme</strong>, c'est-à-dire les revenus mensuels
              théoriques une fois le crédit remboursé. Cette projection reste
              indicative : elle dépend du maintien du niveau de distribution de
              la SCPI, qui n'est pas garanti.
            </p>

            <p>
              Pour approfondir la méthode de calcul, consultez notre article
              dédié au{" "}
              <Link
                href="/calcul-effort-epargne-scpi-credit"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                calcul de l'effort d'épargne SCPI à crédit
              </Link>
              .
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Calcul SCPI à crédit : exemple pédagogique
            </h2>

            <p>
              Voici un exemple indicatif basé sur des hypothèses simplifiées,
              uniquement à titre illustratif. Ces chiffres ne constituent pas
              une projection personnalisée ni un conseil en investissement.
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
                      Hypothèse illustrative
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Montant investi en SCPI", "80 000 €"],
                    ["Apport personnel", "10 000 €"],
                    ["Montant emprunté", "70 000 €"],
                    ["Taux du crédit (indicatif)", "5,10 %"],
                    ["Durée du crédit", "15 ans"],
                    ["Mensualité estimée", "~556 €/mois"],
                    ["Rendement distribué (indicatif)", "5 % brut annuel"],
                    ["Revenus SCPI bruts estimés", "~333 €/mois"],
                    ["Fiscalité estimée (TMI 30 % + PS 17,2 %)", "~157 €/mois"],
                    ["Revenus nets estimés", "~176 €/mois"],
                    ["Effort d'épargne estimé", "~380 €/mois"],
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
              <strong>Note importante :</strong> ces chiffres sont uniquement
              illustratifs. Ils reposent sur des hypothèses fixes de rendement,
              de taux et de fiscalité. Dans la réalité, les revenus distribués
              peuvent évoluer, les taux varient et la situation fiscale de chaque
              investisseur est différente. Ces données ne constituent pas un
              conseil en investissement.
            </div>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Pourquoi le résultat peut varier ?
            </h2>

            <p>
              Le résultat d'une simulation est toujours une estimation. Plusieurs
              facteurs peuvent faire varier l'effort d'épargne réel par rapport
              à la simulation :
            </p>

            <ul>
              <li>
                <strong>Variation des revenus distribués :</strong> les SCPI ne
                garantissent ni le niveau ni la régularité de leurs distributions.
                Un taux d'occupation en baisse ou des arbitrages de patrimoine
                peuvent réduire les revenus.
              </li>
              <li>
                <strong>Fiscalité personnelle :</strong> la TMI applicable, la
                déductibilité des intérêts d'emprunt en régime réel et
                l'éventuel régime micro-foncier influencent le revenu net réel.
                Consulter notre guide sur la{" "}
                <Link
                  href="/fiscalite"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  fiscalité des SCPI
                </Link>{" "}
                pour en savoir plus.
              </li>
              <li>
                <strong>Évolution des taux :</strong> pour un crédit à taux
                variable, la mensualité peut changer selon les conditions du
                marché. Un crédit à taux fixe offre davantage de prévisibilité.
              </li>
              <li>
                <strong>Frais non intégrés :</strong> assurance emprunteur,
                frais de dossier, frais de souscription SCPI et frais de gestion
                peuvent impacter le résultat réel.
              </li>
              <li>
                <strong>Délai de jouissance :</strong> pendant les premiers mois
                suivant la souscription, aucun revenu n'est versé, ce qui
                augmente temporairement l'effort d'épargne effectif.
              </li>
              <li>
                <strong>Liquidité de la SCPI :</strong> en cas de besoin de
                revente anticipée, les conditions de marché peuvent affecter le
                prix de cession.
              </li>
            </ul>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Les limites d'un simulateur SCPI à crédit
            </h2>

            <p>
              Un simulateur repose sur des hypothèses fixes et simplifiées.
              Il ne peut pas prendre en compte l'ensemble des variables propres
              à chaque situation :
            </p>

            <ul>
              <li>
                Il ne garantit ni le rendement, ni le niveau des revenus, ni la
                valeur des parts à terme.
              </li>
              <li>
                Il ne remplace pas une analyse personnalisée réalisée par un
                conseiller en gestion de patrimoine.
              </li>
              <li>
                Il ne tient généralement pas compte de l'assurance emprunteur,
                des frais de dossier ni de l'évolution de la fiscalité dans le
                temps.
              </li>
              <li>
                Il ne préjuge pas de la capacité d'endettement de l'investisseur
                ni de l'acceptation du dossier par un établissement de crédit.
              </li>
            </ul>

            <p>
              Pour une analyse complète des avantages et des points à vérifier,
              consultez notre article sur les{" "}
              <Link
                href="/scpi-credit-avantages-limites"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                avantages et limites de la SCPI à crédit
              </Link>
              . Pour les aspects déclaratifs, consultez notre guide sur la{" "}
              <Link
                href="/declaration-scpi-2026"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                déclaration SCPI 2026
              </Link>
              .
            </p>

            <div
              className="mt-10 rounded-[20px] px-8 py-7"
              style={{
                background: "rgba(240,194,79,0.12)",
                borderLeft: "4px solid #f0c24f",
              }}
            >
              <h2 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Vous souhaitez estimer un projet SCPI à crédit ?
              </h2>
              <p className="mb-6 text-[18px] leading-8 text-slate-700">
                Laissez vos coordonnées pour être recontacté et faire le point
                sur votre montant d'investissement, votre apport, votre durée
                de crédit et votre effort d'épargne estimé.
              </p>
              <Link href="/guide-pdf" className="btn-primary">
                Être recontacté
              </Link>
            </div>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              FAQ sur la simulation SCPI à crédit
            </h2>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Un simulateur SCPI à crédit donne-t-il un résultat garanti ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Non. Un simulateur fournit une estimation indicative basée sur
                des hypothèses fixes. Les revenus réels distribués par la SCPI
                peuvent différer, la fiscalité personnelle peut varier et les
                conditions de crédit peuvent évoluer. Il s'agit d'un outil
                pédagogique, pas d'une projection garantie.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Comment calculer l'effort d'épargne ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                L'effort d'épargne s'obtient en soustrayant les revenus SCPI
                nets disponibles de la mensualité du crédit. Les revenus nets
                dépendent du rendement distribué, de la fiscalité applicable
                (TMI + prélèvements sociaux), du délai de jouissance et des
                éventuels frais de gestion. La formule est : effort d'épargne =
                mensualité du crédit − revenus SCPI nets.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Quels paramètres influencent le plus le résultat ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Les paramètres les plus sensibles sont la durée du crédit (qui
                influe directement sur la mensualité), le taux de rendement
                distribué par la SCPI (qui détermine les revenus bruts) et la
                tranche marginale d'imposition (qui réduit les revenus nets).
                Une variation de l'un de ces paramètres peut changer
                significativement l'effort d'épargne estimé.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Peut-on simuler une SCPI à crédit sans apport ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Sur le plan technique, oui : un apport de 0 € est généralement
                simulable. En pratique, les établissements de crédit exigent
                souvent un apport minimal. Un financement sans apport augmente
                le capital emprunté et donc la mensualité, ce qui accroît
                l'effort d'épargne. La faisabilité réelle dépend du dossier
                et des critères de l'établissement prêteur.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                La fiscalité est-elle prise en compte dans la simulation ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Partiellement. La plupart des simulateurs intègrent une TMI
                indicative et les prélèvements sociaux pour estimer les revenus
                nets. Mais la déductibilité des intérêts d'emprunt en régime
                réel, l'éventuel micro-foncier ou les spécificités des SCPI
                européennes ne sont généralement pas pris en compte. Une analyse
                fiscale personnalisée reste nécessaire.
              </p>
            </details>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/scpi-credit" className="btn-primary">
                Accéder au simulateur SCPI à crédit
              </Link>
              <Link href="/guide-pdf" className="btn-secondary">
                Télécharger le guide SCPI
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
              href="/calcul-effort-epargne-scpi-credit"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Calcul effort d'épargne SCPI →
            </Link>
            <Link
              href="/scpi-credit-avantages-limites"
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
          </div>
        </div>
      </section>
    </>
  );
}
