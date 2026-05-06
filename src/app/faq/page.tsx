import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "FAQ SCPI : questions fréquentes avant d'investir",
  description:
    "Réponses aux questions fréquentes sur les SCPI : fonctionnement, fiscalité, rendement, risques, revente, liquidité et déclaration.",
  alternates: {
    canonical: "https://www.scpi-gouv.org/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <h1>Questions fréquentes sur les SCPI</h1>
          <p>
            Cette rubrique rassemble les questions les plus courantes sur le
            fonctionnement des SCPI, leur fiscalité, leur liquidité et les
            critères à observer avant une éventuelle souscription. Les réponses
            proposées sont d'ordre général et informatif : elles ne constituent
            pas un conseil en investissement et ne remplacent pas une analyse
            personnalisée par un professionnel agréé.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionTitle
            eyebrow="FAQ"
            title="Réponses aux questions les plus courantes"
            description="Douze questions essentielles sur les SCPI, de leur fonctionnement jusqu'à leur déclaration fiscale et leur comparaison."
          />

          <div className="faq-list">
            <div className="faq-item">
              <h3>Qu'est-ce qu'une SCPI ?</h3>
              <p className="text-slate-600">
                Une SCPI (Société Civile de Placement Immobilier) est un
                véhicule d'investissement collectif qui permet à plusieurs
                épargnants de détenir ensemble des parts d'un parc immobilier
                professionnel — bureaux, commerces, entrepôts, établissements de
                santé, résidences gérées. Ce parc est constitué et géré par une
                société de gestion agréée par l'AMF (Autorité des Marchés
                Financiers). En contrepartie de leur investissement, les
                associés perçoivent une quote-part des loyers encaissés, sous
                forme de distributions régulières (trimestrielles ou mensuelles
                selon la SCPI). L'investisseur n'intervient pas dans la gestion
                quotidienne des actifs : c'est l'un des principaux atouts de ce
                type de placement par rapport à l'immobilier détenu en direct.
              </p>
            </div>

            <div className="faq-item">
              <h3>Quels sont les risques d'une SCPI ?</h3>
              <p className="text-slate-600">
                Plusieurs risques doivent être clairement identifiés avant toute
                souscription. Le <strong>risque de perte en capital</strong> est
                réel : le prix des parts peut baisser si la valeur des actifs
                immobiliers se déprécie. Le <strong>risque locatif</strong>{" "}
                correspond à la possibilité d'une hausse de la vacance ou
                d'impayés, qui réduirait les distributions. Le{" "}
                <strong>risque de liquidité</strong> désigne la difficulté
                potentielle à revendre ses parts rapidement, notamment en
                période de marché tendu. Le <strong>risque de taux</strong> peut
                affecter la valorisation des actifs si les taux d'intérêt
                remontent fortement. Enfin, les revenus distribués ne sont jamais
                garantis dans leur montant ni dans leur régularité. Ces risques
                ne disqualifient pas les SCPI, mais ils doivent être pleinement
                intégrés dans l'analyse avant toute décision.
              </p>
            </div>

            <div className="faq-item">
              <h3>Le capital est-il garanti ?</h3>
              <p className="text-slate-600">
                Non. Les SCPI ne comportent aucune garantie en capital. La
                valeur d'une part peut évoluer à la hausse comme à la baisse
                selon la performance du portefeuille immobilier, les conditions
                de marché, la stratégie de la société de gestion et
                l'environnement de taux. Les performances passées, aussi solides
                soient-elles, ne préjugent jamais des performances futures. Il
                est essentiel de considérer les SCPI comme un placement à long
                terme — au moins 8 à 10 ans — et de ne jamais y investir des
                sommes dont on pourrait avoir besoin à court terme.
              </p>
            </div>

            <div className="faq-item">
              <h3>Les SCPI versent-elles forcément un revenu ?</h3>
              <p className="text-slate-600">
                Non. Les distributions dépendent directement du taux d'occupation
                financier des actifs, des performances globales du portefeuille
                et des décisions de la société de gestion. En cas de forte
                vacance locative, de travaux importants ou de difficultés
                économiques sectorielles, les revenus distribués peuvent être
                réduits ou temporairement reportés. La plupart des SCPI de
                rendement distribuent trimestriellement, certaines
                mensuellement, mais aucune ne garantit un montant fixe ni une
                régularité absolue sur la durée. Les revenus passés ne
                présagent pas des revenus futurs.
              </p>
            </div>

            <div className="faq-item">
              <h3>Peut-on revendre ses parts facilement ?</h3>
              <p className="text-slate-600">
                La revente est techniquement possible, mais elle n'est ni
                garantie ni immédiate. Pour les SCPI à capital variable, un
                marché primaire est animé par la société de gestion tant que la
                collecte reste active. Pour les SCPI à capital fixe, la cession
                se fait sur un marché secondaire organisé, où prix et délais
                dépendent de l'offre et de la demande. Les délais de revente
                peuvent aller de quelques semaines à plusieurs mois. En période
                de tensions sur le marché immobilier ou de collecte nette
                négative, des blocages temporaires peuvent survenir. Notre page
                dédiée à la{" "}
                <Link
                  href="/revente"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  revente de parts de SCPI
                </Link>{" "}
                détaille l'ensemble de ces mécanismes et les points de
                vigilance.
              </p>
            </div>

            <div className="faq-item">
              <h3>Comment sont imposés les revenus d'une SCPI ?</h3>
              <p className="text-slate-600">
                Dans la majorité des cas, les revenus perçus via une SCPI sont
                imposés dans la catégorie des revenus fonciers. Ils s'ajoutent
                aux autres revenus du foyer et sont soumis au barème progressif
                de l'impôt sur le revenu, ainsi qu'aux prélèvements sociaux de
                17,2 %. En régime micro-foncier (revenus fonciers totaux
                inférieurs à 15 000 € par an), un abattement forfaitaire de
                30 % s'applique. En régime réel, les charges réelles sont
                déductibles, ce qui peut permettre de créer un déficit foncier.
                Les SCPI détenant des actifs en Europe hors France peuvent
                bénéficier d'un traitement différent grâce aux conventions
                fiscales bilatérales. Notre guide complet sur la{" "}
                <Link
                  href="/fiscalite"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  fiscalité des SCPI
                </Link>{" "}
                détaille toutes ces situations.
              </p>
            </div>

            <div className="faq-item">
              <h3>Comment déclarer ses revenus SCPI en 2026 ?</h3>
              <p className="text-slate-600">
                Chaque année, la société de gestion envoie à ses associés un
                document fiscal (IFU ou équivalent) qui précise les montants à
                déclarer, ventilés par nature de revenu et par pays d'origine
                des actifs. Pour les revenus fonciers de source française, ils
                se reportent en case 4BE du formulaire 2042 (micro-foncier) ou
                via l'annexe 2044 (régime réel). Les revenus issus d'actifs
                situés hors de France nécessitent le formulaire 2047. En cas de
                cession de parts, la plus-value est calculée par la société de
                gestion et reportée dans la déclaration. Notre page{" "}
                <Link
                  href="/declaration-scpi-2026"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  déclaration SCPI 2026
                </Link>{" "}
                fournit un guide pratique complet avec les cases à remplir.
              </p>
            </div>

            <div className="faq-item">
              <h3>Peut-on acheter des SCPI à crédit ?</h3>
              <p className="text-slate-600">
                Oui. L'investissement en SCPI peut être financé à crédit, et ce
                mécanisme présente un avantage fiscal notable en régime réel :
                les intérêts d'emprunt sont déductibles des revenus fonciers,
                ce qui réduit la base imposable. Pour un investisseur fortement
                imposé, cet effet de levier peut améliorer le rendement net de
                l'opération. Il faut toutefois mesurer le risque de liquidité en
                cas de besoin de revente et s'assurer de la capacité à supporter
                l'effort d'épargne mensuel pendant toute la durée du
                financement. Notre{" "}
                <Link
                  href="/scpi-credit"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  simulateur SCPI à crédit
                </Link>{" "}
                permet d'estimer l'effort d'épargne et les revenus à terme à
                partir de trois données seulement.
              </p>
            </div>

            <div className="faq-item">
              <h3>SCPI ou immobilier locatif direct : quelle différence ?</h3>
              <p className="text-slate-600">
                Ces deux approches répondent à des logiques différentes.
                L'immobilier locatif direct offre un contrôle total sur le bien,
                un effet de levier potentiellement plus fort et des possibilités
                de défiscalisation spécifiques. Les SCPI, en revanche, permettent
                une diversification immédiate sur plusieurs actifs professionnels,
                une gestion entièrement déléguée, un ticket d'entrée plus
                progressif et une documentation standardisée facilitant la
                comparaison. La principale limite des SCPI reste leur liquidité
                relative et les frais d'entrée élevés (8 à 12 %) qui imposent
                un horizon long terme d'au moins 8 à 10 ans. Le meilleur choix
                dépend du profil de chaque investisseur, de son temps disponible
                et de ses objectifs. Utilisez notre{" "}
                <Link
                  href="/comparaison"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  outil de comparaison de SCPI
                </Link>{" "}
                pour analyser les véhicules disponibles.
              </p>
            </div>

            <div className="faq-item">
              <h3>Les SCPI sont-elles adaptées à tous les profils ?</h3>
              <p className="text-slate-600">
                Non. Les SCPI ne sont pas universellement adaptées. Elles
                supposent un horizon d'investissement long (8 à 10 ans minimum)
                pour amortir les frais d'entrée et bénéficier pleinement du
                potentiel de distribution. Elles ne conviennent pas aux personnes
                ayant besoin de liquidités à court terme, ni à celles pour qui
                l'impact fiscal des revenus fonciers serait trop lourd sans
                stratégie d'optimisation. La pertinence d'une SCPI dépend aussi
                du mode de détention choisi (direct, assurance-vie, démembrement
                de propriété) et de la situation fiscale de l'investisseur. Une
                analyse personnalisée reste indispensable avant toute décision.
              </p>
            </div>

            <div className="faq-item">
              <h3>Pourquoi comparer plusieurs SCPI avant de choisir ?</h3>
              <p className="text-slate-600">
                Parce qu'une SCPI ne se résume pas à son taux de distribution.
                Deux SCPI affichant un rendement similaire peuvent présenter des
                profils de risque très différents selon leur stratégie
                géographique (France, Europe, international), la qualité de leur
                patrimoine, leur taux d'occupation financier (TOF), leur solidité
                managériale et la part de leurs actifs investis hors de France.
                Comparer sur l'ensemble de ces critères permet d'éviter une
                lecture trop superficielle et de mieux aligner son choix avec
                ses objectifs patrimoniaux. Notre{" "}
                <Link
                  href="/comparaison"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  outil de comparaison SCPI
                </Link>{" "}
                permet de visualiser ces différences de manière structurée.
              </p>
            </div>

            <div className="faq-item">
              <h3>Quels sont les frais d'une SCPI ?</h3>
              <p className="text-slate-600">
                Les frais se répartissent en deux grandes catégories. Les{" "}
                <strong>frais de souscription</strong> (ou d'entrée), compris
                généralement entre 8 % et 12 % du montant investi, sont
                prélevés lors de l'acquisition des parts. Ils constituent
                l'une des raisons pour lesquelles un horizon long terme est
                recommandé, afin de les amortir sur la durée. Les{" "}
                <strong>frais de gestion annuels</strong>, compris entre 8 % et
                12 % des loyers encaissés, sont déduits avant distribution aux
                associés — le rendement affiché est donc net de ces frais de
                gestion. Certaines SCPI facturent également des frais de
                cession lors de la revente, notamment sur le marché secondaire.
                Il n'existe pas de frais cachés à proprement parler, mais une
                lecture attentive de la documentation officielle (DIC, note
                d'information) reste indispensable avant toute souscription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="section" style={{ background: "#eaf0fb" }}>
        <div className="container-site">
          <div
            className="rounded-[28px] px-8 py-10 shadow-[0_16px_30px_rgba(31,68,138,0.12)]"
            style={{ background: "#26478f" }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2
                  style={{
                    color: "white",
                    fontSize: "clamp(24px, 3vw, 38px)",
                    lineHeight: 1.2,
                    fontWeight: 800,
                    margin: 0,
                  }}
                >
                  Approfondir votre réflexion sur les SCPI
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: 17,
                    lineHeight: 1.7,
                    marginTop: 12,
                  }}
                >
                  Téléchargez le guide gratuit, comparez plusieurs SCPI ou
                  découvrez les mécanismes fiscaux en détail.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/guide-pdf"
                  className="rounded-full px-6 py-3 text-center text-lg font-bold text-slate-900 transition"
                  style={{ background: "#f0c24f" }}
                >
                  Guide gratuit
                </Link>
                <Link
                  href="/comparaison"
                  className="rounded-full border px-6 py-3 text-center text-lg font-bold text-white transition"
                  style={{
                    borderColor: "rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  Comparateur SCPI
                </Link>
                <Link
                  href="/fiscalite"
                  className="rounded-full border px-6 py-3 text-center text-lg font-bold text-white transition"
                  style={{
                    borderColor: "rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  Fiscalité SCPI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
