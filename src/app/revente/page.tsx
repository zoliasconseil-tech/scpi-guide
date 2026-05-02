import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const faqItems = [
  {
    question: "Combien de temps faut-il pour revendre une SCPI ?",
    answer:
      "Le délai varie selon le type de SCPI et les conditions du marché. Comptez quelques semaines pour les SCPI les plus liquides, 1 à 3 mois pour la majorité, et parfois plusieurs mois voire davantage pour les SCPI moins liquides ou en période de marché tendu.",
  },
  {
    question: "Peut-on revendre ses parts à tout moment ?",
    answer:
      "Oui, techniquement, mais sans garantie de délai ni de prix. La revente dépend du type de SCPI, de la demande existante et du mécanisme de sortie applicable.",
  },
  {
    question: "La revente de SCPI est-elle garantie ?",
    answer:
      "Non. Contrairement à un actif coté, la revente de parts de SCPI n'est pas garantie. Elle dépend de la présence d'acheteurs, du type de SCPI et de la conjoncture du marché. Un risque de perte en capital existe.",
  },
  {
    question:
      "Quelle est la différence de délai entre capital variable et capital fixe ?",
    answer:
      "Le capital variable peut être plus fluide si la collecte reste active. Le capital fixe dépend davantage du marché secondaire et de la confrontation entre l'offre et la demande.",
  },
  {
    question: "Quelle fiscalité s'applique sur la revente de SCPI ?",
    answer:
      "La plus-value réalisée est soumise au régime des plus-values immobilières : 19 % d'impôt sur le revenu et 17,2 % de prélèvements sociaux, soit 36,2 % avant abattements. Des abattements progressifs s'appliquent selon la durée de détention, avec une exonération totale à partir de 30 ans.",
  },
  {
    question: "Les décotes sont-elles systématiques ?",
    answer:
      "Non, mais elles peuvent apparaître lorsque l'offre de vente est supérieure à la demande ou lorsque le marché perçoit un risque plus élevé sur certaines SCPI.",
  },
  {
    question: "Peut-on vendre ses parts rapidement en cas d'urgence ?",
    answer:
      "Pas nécessairement. Les SCPI ne sont pas des placements liquides. En cas de besoin urgent de trésorerie, la revente peut prendre plusieurs semaines ou mois selon la SCPI et le marché. Il est conseillé d'anticiper ce risque avant d'investir.",
  },
  {
    question: "Y a-t-il un risque de blocage de la revente ?",
    answer:
      "Oui, dans certains contextes de marché tendu. Si les demandes de retrait dépassent la collecte ou les liquidités disponibles, la société de gestion peut suspendre temporairement les retraits. Ce risque varie selon la SCPI.",
  },
  {
    question: "Que se passe-t-il en cas de décès ?",
    answer:
      "Les héritiers reçoivent les parts et peuvent les conserver ou les céder selon les procédures successorales applicables.",
  },
  {
    question:
      "La revente annule-t-elle certains avantages fiscaux antérieurs ?",
    answer:
      "Non en principe, mais elle peut déclencher la fiscalité sur la plus-value au moment de la cession selon le cadre de détention.",
  },
  {
    question: "Existe-t-il des plateformes pour vendre plus rapidement ?",
    answer:
      "Oui, certaines plateformes de marché secondaire existent, mais elles impliquent souvent des ajustements de prix et ne garantissent pas une liquidité immédiate.",
  },
  {
    question: "Pourquoi certaines SCPI sont-elles difficiles à revendre ?",
    answer:
      "Plusieurs facteurs peuvent expliquer une faible liquidité : une collecte nette négative, un patrimoine perçu comme risqué, un marché immobilier tendu, ou une SCPI à capital fixe avec peu d'acheteurs disponibles. Toutes les SCPI ne présentent pas le même niveau de liquidité selon les SCPI et le marché.",
  },
  {
    question: "Peut-on rester bloqué avec des parts de SCPI ?",
    answer:
      "Oui, dans certains contextes de marché défavorable. Si les demandes de retrait dépassent durablement les nouvelles souscriptions, la société de gestion peut organiser un marché secondaire où les délais peuvent s'allonger significativement. Ce risque de blocage varie selon la SCPI et doit être anticipé avant d'investir.",
  },
  {
    question: "Faut-il vendre ses SCPI en période de baisse ?",
    answer:
      "Pas nécessairement. Vendre dans un marché défavorable peut entraîner une décote et réduire le rendement global. Si l'horizon long terme est respecté et que les revenus locatifs restent stables, il peut être préférable de conserver ses parts plutôt que de vendre à un prix défavorable.",
  },
  {
    question: "Comment savoir si une SCPI est liquide ?",
    answer:
      "Plusieurs indicateurs peuvent aider : le volume de parts en attente de retrait, la collecte nette, le taux d'occupation (TOF) et la communication de la société de gestion. Comparer les SCPI sur ces critères avant d'investir permet d'anticiper ce risque.",
  },
  {
    question: "Peut-on revendre une partie seulement de ses parts ?",
    answer:
      "Oui, il est généralement possible de vendre une fraction de ses parts sans être obligé de tout céder. Cela permet de récupérer une partie de son capital tout en conservant une exposition à la SCPI. Les modalités varient selon la société de gestion.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ReventePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section
        className="section"
        style={{ background: "#eaf0fb", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-site grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="content-block">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Revente SCPI
            </p>

            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 66px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 800,
                margin: "0 0 24px",
                color: "var(--primary)",
              }}
            >
              Revente des parts de SCPI en 2026 : les points essentiels à
              connaître
            </h1>

            <p
              className="mb-6 text-[19px] font-medium leading-8 text-slate-500"
              style={{ borderLeft: "3px solid #5b84dc", paddingLeft: 20 }}
            >
              Contrairement à un produit financier classique, la revente de
              parts de SCPI peut être longue et dépend fortement du marché.
            </p>

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              Les parts de SCPI ne sont pas cotées en bourse et ne bénéficient
              pas d'une liquidité immédiate comme des actions. La revente
              dépend du type de SCPI, du marché, de la présence d'une
              contrepartie et du mécanisme de sortie applicable.
            </p>

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              En pratique, il faut distinguer la revente sur le marché
              primaire, le marché secondaire, les différences entre capital
              variable et capital fixe, ainsi que les sujets de fiscalité, de
              décote et de délai.
            </p>

            <p className="mb-6 text-[18px] leading-8 text-slate-700">
              Cette page regroupe les principaux éléments à connaître pour mieux
              comprendre <strong>la revente des parts de SCPI</strong>, ses
              contraintes, ses coûts et les facteurs qui influencent réellement
              la liquidité.
            </p>

            <div
              className="rounded-[16px] px-6 py-4"
              style={{
                background: "rgba(240,194,79,0.18)",
                borderLeft: "4px solid #f0c24f",
              }}
            >
              <p
                className="text-[17px] font-semibold leading-7 text-slate-800"
                style={{ margin: 0 }}
              >
                La revente de parts de SCPI n'est pas garantie et peut prendre
                plusieurs mois selon les conditions de marché. Un risque de
                perte en capital existe.
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              background: "#26478f",
              color: "white",
              borderColor: "#26478f",
              borderRadius: "32px",
              padding: "40px 34px",
              boxShadow: "0 20px 40px rgba(31,68,138,0.16)",
            }}
          >
            <div
              style={{
                width: 84,
                height: 18,
                borderRadius: 999,
                background: "#f0c24f",
                margin: "0 auto 28px",
              }}
            />

            <h2
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "clamp(34px, 4vw, 46px)",
                lineHeight: 1.15,
                marginBottom: 24,
                fontWeight: 800,
              }}
            >
              Pourquoi bien anticiper la revente des SCPI ?
            </h2>

            <p
              style={{
                color: "#f0c24f",
                textAlign: "center",
                fontSize: 20,
                lineHeight: 1.45,
                fontWeight: 700,
                marginBottom: 22,
              }}
            >
              Une sortie plus claire, plus maîtrisée et mieux préparée
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.92)",
                textAlign: "center",
                fontSize: 17,
                lineHeight: 1.7,
                marginBottom: 30,
              }}
            >
              Comprenez rapidement les mécanismes de retrait, les différences
              entre capital fixe et variable, les risques de décote, les délais
              possibles et les stratégies utiles pour optimiser une sortie.
            </p>

            <div className="space-y-4">
              <Link
                href="/scpi-credit"
                className="block rounded-full px-6 py-4 text-center text-xl font-bold text-slate-900 transition"
                style={{ background: "#f0c24f" }}
              >
                Voir le simulateur SCPI
              </Link>

              <Link
                href="/guide-pdf"
                className="block rounded-full border px-6 py-4 text-center text-xl font-bold text-white transition"
                style={{
                  borderColor: "rgba(255,255,255,0.22)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                Télécharger le guide PDF
              </Link>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 14,
                lineHeight: 1.8,
                marginTop: 28,
              }}
            >
              Contenu pédagogique, indépendant et conçu pour être lisible
              rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* 3 CARDS + BLUE BANNER */}
      <section className="section">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card" style={{ borderRadius: 28, padding: 40 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: "#eaf0fb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#5b84dc",
                  fontSize: 28,
                  marginBottom: 24,
                }}
              >
                ○
              </div>
              <h3
                style={{
                  color: "#5b84dc",
                  fontSize: 30,
                  fontWeight: 800,
                  marginBottom: 20,
                }}
              >
                COMPRENDRE
              </h3>
              <p className="text-[18px] leading-8 text-slate-700">
                Identifier le <strong>marché primaire</strong>, le{" "}
                <strong>marché secondaire</strong> et les conditions réelles de
                sortie d'une SCPI.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 40 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: "#eaf0fb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#5b84dc",
                  fontSize: 28,
                  marginBottom: 24,
                }}
              >
                ○
              </div>
              <h3
                style={{
                  color: "#5b84dc",
                  fontSize: 30,
                  fontWeight: 800,
                  marginBottom: 20,
                }}
              >
                ANTICIPER
              </h3>
              <p className="text-[18px] leading-8 text-slate-700">
                Mieux intégrer les <strong>délais</strong>, les{" "}
                <strong>décotes</strong>, les <strong>frais</strong> et la{" "}
                <strong>fiscalité</strong> avant une décision de sortie.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 40 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: "#eaf0fb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#5b84dc",
                  fontSize: 28,
                  marginBottom: 24,
                }}
              >
                ○
              </div>
              <h3
                style={{
                  color: "#5b84dc",
                  fontSize: 30,
                  fontWeight: 800,
                  marginBottom: 20,
                }}
              >
                OPTIMISER
              </h3>
              <p className="text-[18px] leading-8 text-slate-700">
                Utiliser les bonnes <strong>stratégies de cession</strong> pour
                mieux gérer le moment, le prix et l'impact patrimonial global.
              </p>
            </div>
          </div>

          <div
            className="mt-10 rounded-[28px] px-10 py-8 shadow-[0_16px_30px_rgba(31,68,138,0.12)]"
            style={{ background: "#26478f" }}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <h2
                style={{
                  color: "white",
                  fontSize: "clamp(24px, 3vw, 42px)",
                  lineHeight: 1.2,
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Vous cherchez à mieux comprendre la sortie d'une SCPI ?{" "}
                <span style={{ color: "#f0c24f" }}>
                  Consultez les points essentiels ci-dessous :
                </span>
              </h2>

              <div
                style={{
                  color: "#f0c24f",
                  fontSize: 34,
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                ˅
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DÉLAIS RÉELS + TABLEAU COMPARATIF */}
      <section className="section" style={{ background: "#f8faff" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 12,
            }}
          >
            Délais réels de revente des SCPI
          </h2>
          <p className="mb-10 text-[18px] leading-8 text-slate-600">
            La liquidité est un élément clé à analyser avant d'investir en SCPI.
            Toutes les SCPI ne présentent pas le même niveau de liquidité.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#d4edda",
                  color: "#1a6a33",
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 999,
                  padding: "4px 14px",
                  marginBottom: 18,
                }}
              >
                Liquide
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--primary)]">
                SCPI très demandée
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Pour les SCPI à fort niveau de collecte et bien demandées, la
                revente peut s'effectuer en quelques semaines. Cette
                configuration reste liée au maintien de la collecte et peut
                évoluer selon le marché.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#fff3cd",
                  color: "#856404",
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 999,
                  padding: "4px 14px",
                  marginBottom: 18,
                }}
              >
                Standard
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--primary)]">
                SCPI standard
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Dans la majorité des cas, il faut compter 1 à 3 mois pour
                finaliser une revente. Ce délai dépend de la confrontation entre
                l'offre et la demande, et peut varier selon la conjoncture.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#f8d7da",
                  color: "#842029",
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 999,
                  padding: "4px 14px",
                  marginBottom: 18,
                }}
              >
                Sous tension
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--primary)]">
                Marché tendu
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                En période de marché moins favorable ou pour les SCPI moins
                liquides, le délai peut dépasser plusieurs mois, voire être
                indéterminé. Ce risque doit être anticipé avant tout
                investissement.
              </p>
            </div>
          </div>

          <div className="notice-box mt-10">
            <h3>Facteurs déterminants du délai de revente</h3>
            <ul className="mt-4 list-disc pl-5 text-slate-700">
              <li>Le niveau de demande au moment de la cession</li>
              <li>Le type de SCPI (capital variable ou capital fixe)</li>
              <li>L'état général du marché immobilier</li>
              <li>Le volume de parts en attente de retrait sur la SCPI</li>
              <li>La qualité perçue du patrimoine immobilier détenu</li>
            </ul>
          </div>

          <h3 className="mt-12 mb-6 text-2xl font-bold text-slate-900">
            Tableau comparatif : liquidité selon le type de SCPI
          </h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Type de SCPI</th>
                  <th>Liquidité</th>
                  <th>Délai indicatif</th>
                  <th>Risque de blocage</th>
                  <th>Dépendance acheteurs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SCPI à capital variable (très demandée)</td>
                  <td>Élevée</td>
                  <td>2 à 8 semaines</td>
                  <td>Faible</td>
                  <td>Modérée</td>
                </tr>
                <tr>
                  <td>SCPI à capital variable (standard)</td>
                  <td>Moyenne</td>
                  <td>1 à 3 mois</td>
                  <td>Modéré</td>
                  <td>Élevée</td>
                </tr>
                <tr>
                  <td>SCPI à capital fixe</td>
                  <td>Variable</td>
                  <td>1 à 6 mois</td>
                  <td>Modéré à élevé</td>
                  <td>Très élevée</td>
                </tr>
                <tr>
                  <td>SCPI moins liquide / marché tendu</td>
                  <td>Faible</td>
                  <td>6 mois à plus</td>
                  <td>Élevé</td>
                  <td>Très élevée</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[15px] text-slate-500">
            Les délais indiqués sont des estimations observées sur le marché. Les
            conditions de revente varient selon les SCPI et le contexte de marché.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="content-block">
            <h2
              style={{
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 800,
                color: "var(--primary)",
                marginBottom: 24,
              }}
            >
              1. Principes généraux de la revente des parts de SCPI
            </h2>

            <p className="text-[18px] leading-8 text-slate-700">
              Les parts de SCPI ne sont pas cotées en bourse et ne bénéficient
              pas d'une liquidité immédiate comme des actions. La revente
              s'effectue via :
            </p>

            <ul className="mt-6 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                <strong>Le marché primaire</strong> (retrait/rachat par la SCPI
                elle-même, principalement pour les SCPI à capital variable).
              </li>
              <li>
                <strong>Le marché secondaire</strong> (cession de gré à gré
                entre investisseurs ou via le registre tenu par la société de
                gestion).
              </li>
            </ul>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              La SCPI elle-même ne garantit ni le rachat ni le délai de sortie.
              La sortie d'un associé doit généralement être compensée par
              l'entrée d'un nouvel associé, notamment pour les SCPI à capital
              fixe.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              En 2025-2026, le volume de parts en attente de retrait a atteint
              environ 2,4 à 2,8 milliards d'euros selon les trimestres,
              représentant environ 2,7 % à 3,2 % de la capitalisation totale du
              marché.
            </p>
          </div>

          <div
            className="card"
            style={{
              background: "#f3ecd8",
              borderColor: "#f3ecd8",
              borderRadius: 28,
              padding: 40,
            }}
          >
            <h3
              style={{
                color: "var(--primary)",
                fontSize: "clamp(26px, 3vw, 44px)",
                lineHeight: 1.15,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              Une sortie qui dépend toujours de la réalité du marché
            </h3>

            <p className="text-[18px] leading-8 text-slate-700">
              Contrairement à un actif coté, la part de SCPI ne se revend pas
              instantanément. La liquidité dépend du type de SCPI, du flux
              d'acheteurs, de la collecte et de la perception globale de la
              qualité du patrimoine.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section" style={{ background: "#f3ecd8" }}>
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-2">
            <div
              className="card"
              style={{
                background: "#f0c24f",
                borderColor: "#f0c24f",
                borderRadius: 28,
                padding: 40,
              }}
            >
              <h2
                style={{
                  color: "var(--primary)",
                  fontSize: "clamp(30px, 4vw, 52px)",
                  lineHeight: 1.08,
                  fontWeight: 800,
                }}
              >
                2. Différence entre SCPI à capital variable et à capital fixe
              </h2>

              <div className="mt-8 text-[18px] leading-8 text-slate-800">
                <p className="mb-4">
                  <strong>SCPI à capital variable :</strong>
                </p>
                <ul className="mb-6 list-disc pl-6">
                  <li>La société de gestion peut créer ou annuler des parts.</li>
                  <li>Demande de retrait adressée à la société de gestion.</li>
                  <li>Rachat possible si la collecte ou la trésorerie le permet.</li>
                  <li>
                    En cas d'excédent de retraits, mise en place d'un marché
                    secondaire organisé.
                  </li>
                </ul>

                <p className="mb-4">
                  <strong>SCPI à capital fixe :</strong>
                </p>
                <ul className="list-disc pl-6">
                  <li>Nombre de parts fixe.</li>
                  <li>Sortie uniquement par cession à un nouvel investisseur.</li>
                  <li>Confrontation obligatoire de l'offre et de la demande.</li>
                  <li>Prix libre avec possible surcote ou décote.</li>
                </ul>
              </div>
            </div>

            <div
              className="card"
              style={{
                background: "#f0c24f",
                borderColor: "#f0c24f",
                borderRadius: 28,
                padding: 40,
              }}
            >
              <h3
                style={{
                  color: "var(--primary)",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  lineHeight: 1.15,
                  fontWeight: 800,
                  marginBottom: 24,
                }}
              >
                Pourquoi cette distinction est-elle essentielle ?
              </h3>

              <p className="text-[18px] leading-8 text-slate-800">
                Parce qu'elle influence directement la fluidité de la sortie, la
                manière dont la demande est traitée, le rôle de la collecte et
                le prix final de cession. Comprendre la structure de capital est
                indispensable avant toute décision.
              </p>

              <div className="cta-row mt-8">
                <Link href="/comparaison" className="btn-secondary">
                  Comparer les SCPI
                </Link>
                <Link href="/scpi-credit" className="btn-primary">
                  Simuler un projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="section">
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 28,
            }}
          >
            3. Procédure détaillée de revente étape par étape
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Étape 1
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Préparer la demande : formulaire, valeur de retrait, nombre de
                parts, délai de jouissance et documents justificatifs.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Étape 2
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Transmettre l'ordre : demande de retrait pour capital variable
                ou dépôt d'un ordre de vente sur le marché secondaire.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Étape 3
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Attendre la confrontation entre l'offre et la demande jusqu'à la
                mise en relation d'un vendeur et d'un acheteur.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Étape 4
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Finaliser le règlement, le transfert des parts et la mise à jour
                du registre des associés.
              </p>
            </div>
          </div>

          <div className="notice-box mt-10">
            <h3>Délais moyens observés en 2025-2026</h3>
            <ul className="mt-4 list-disc pl-5 text-slate-700">
              <li>SCPI très liquides : 2 à 8 semaines.</li>
              <li>SCPI moyennes : 3 à 12 mois.</li>
              <li>SCPI sous tension : 12 à 24 mois, voire plus.</li>
              <li>Délai global moyen estimé : 4 à 12 mois selon la conjoncture.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3 SCÉNARIOS */}
      <section className="section" style={{ background: "#26478f" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 800,
              color: "white",
              marginBottom: 12,
            }}
          >
            3 scénarios possibles lors de la revente
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: 18,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Selon les SCPI et le marché, la revente peut se dérouler de façon
            très différente. Voici les trois situations les plus courantes
            observées par les investisseurs.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div
              className="card"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.14)",
                borderRadius: 28,
                padding: 34,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#d4edda",
                  color: "#1a6a33",
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 999,
                  padding: "4px 14px",
                  marginBottom: 18,
                }}
              >
                Scénario 1 — Marché fluide
              </div>
              <h3
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: 800,
                  marginBottom: 16,
                }}
              >
                Revente possible en quelques semaines
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 17,
                  lineHeight: 1.7,
                }}
              >
                La collecte de la SCPI est active et les demandes de retrait
                sont inférieures aux nouvelles souscriptions. La revente peut
                s'effectuer en quelques semaines selon les SCPI les plus
                demandées. Ce scénario favorable reste conditionné au maintien
                de la collecte.
              </p>
            </div>

            <div
              className="card"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.14)",
                borderRadius: 28,
                padding: 34,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#fff3cd",
                  color: "#856404",
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 999,
                  padding: "4px 14px",
                  marginBottom: 18,
                }}
              >
                Scénario 2 — Marché normal
              </div>
              <h3
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: 800,
                  marginBottom: 16,
                }}
              >
                Délai de plusieurs semaines à quelques mois
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 17,
                  lineHeight: 1.7,
                }}
              >
                L'offre et la demande s'équilibrent progressivement selon le
                marché. La revente peut prendre de quelques semaines à
                plusieurs mois. Un léger ajustement de prix peut être nécessaire
                pour trouver un acheteur dans les délais souhaités.
              </p>
            </div>

            <div
              className="card"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.14)",
                borderRadius: 28,
                padding: 34,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#f8d7da",
                  color: "#842029",
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 999,
                  padding: "4px 14px",
                  marginBottom: 18,
                }}
              >
                Scénario 3 — Marché bloqué
              </div>
              <h3
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: 800,
                  marginBottom: 16,
                }}
              >
                Parts en attente, délai long, décote possible
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 17,
                  lineHeight: 1.7,
                }}
              >
                Les demandes de retrait dépassent significativement les achats.
                Les parts s'accumulent en liste d'attente avec un délai long et
                un risque de perte en capital. Liquidité non garantie : la
                décote peut réduire significativement le capital récupéré.
              </p>
            </div>
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 14,
              marginTop: 24,
            }}
          >
            Les scénarios présentés sont indicatifs. Les conditions de revente
            varient selon les SCPI et le marché. Aucune liquidité n'est
            garantie.
          </p>
        </div>
      </section>

      {/* FAUT-IL S'INQUIÉTER */}
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="content-block">
            <h2
              style={{
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 800,
                color: "var(--primary)",
                marginBottom: 24,
              }}
            >
              Faut-il s'inquiéter d'une revente difficile ?
            </h2>

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              La liquidité est l'un des principaux risques à analyser avant
              d'investir en SCPI. Mais ce risque doit être mis en perspective :
              une difficulté à revendre n'est pas forcément problématique si
              l'investissement est prévu sur un horizon long terme.
            </p>

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              Une SCPI peut distribuer des revenus réguliers tout en étant plus
              difficile à revendre. Ce sont deux dimensions distinctes : la
              performance locative ne garantit pas la liquidité de la sortie.
            </p>

            <p className="mb-6 text-[18px] leading-8 text-slate-700">
              En revanche, cela devient problématique si l'investisseur a
              besoin de récupérer rapidement son capital. D'où l'importance de
              ne jamais investir en SCPI des fonds dont on pourrait avoir besoin
              à court terme, et de choisir une SCPI adaptée à son horizon
              d'investissement.
            </p>

            <div
              className="rounded-[16px] px-6 py-4"
              style={{
                background: "rgba(240,194,79,0.15)",
                borderLeft: "4px solid #f0c24f",
              }}
            >
              <p
                className="text-[17px] font-semibold leading-7 text-slate-800"
                style={{ margin: 0 }}
              >
                Les SCPI sont des placements à horizon long terme. La liquidité
                non garantie est une caractéristique connue de ce type
                d'investissement, pas une anomalie.
              </p>
            </div>

            <div className="cta-row mt-8">
              <Link href="/avantages" className="btn-secondary">
                Avantages des SCPI
              </Link>
              <Link href="/guide-pdf" className="btn-primary">
                Guide SCPI gratuit
              </Link>
            </div>
          </div>

          <div
            className="card"
            style={{
              background: "#f3ecd8",
              borderColor: "#f3ecd8",
              borderRadius: 28,
              padding: 40,
            }}
          >
            <h3
              style={{
                color: "var(--primary)",
                fontSize: "clamp(26px, 3vw, 40px)",
                lineHeight: 1.15,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              Quand la difficulté à vendre devient-elle vraiment un problème ?
            </h3>

            <ul className="list-disc pl-6 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                Quand l'investisseur a besoin de liquidités à court terme.
              </li>
              <li className="mb-3">
                Quand l'horizon d'investissement initial n'a pas été respecté.
              </li>
              <li className="mb-3">
                Quand la SCPI choisie présente un niveau de liquidité
                structurellement faible selon le marché.
              </li>
              <li className="mb-3">
                Quand la revente s'accompagne d'une décote significative
                réduisant le capital récupéré.
              </li>
              <li>
                Quand le contexte immobilier se dégrade simultanément à un
                besoin urgent de sortie.
              </li>
            </ul>

            <p className="mt-6 text-[17px] leading-7 text-slate-600">
              Toutes les SCPI ne présentent pas le même niveau de liquidité.{" "}
              <Link
                href="/comparaison"
                className="font-semibold underline text-[var(--primary)]"
              >
                Comparer les SCPI
              </Link>{" "}
              avant d'investir reste la meilleure façon d'anticiper ce risque.
            </p>
          </div>
        </div>
      </section>

      {/* QUAND VENDRE */}
      <section className="section-tight" style={{ background: "#f3ecd8" }}>
        <div className="container-site grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div
            className="card"
            style={{
              background: "#f0c24f",
              borderColor: "#f0c24f",
              borderRadius: 28,
              padding: 40,
            }}
          >
            <h2
              style={{
                color: "var(--primary)",
                fontSize: "clamp(30px, 4vw, 52px)",
                lineHeight: 1.08,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              Quand vendre une SCPI ?
            </h2>

            <p className="mb-6 text-[18px] leading-8 text-slate-800">
              La décision de revendre des parts de SCPI peut répondre à
              différentes situations patrimoniales ou personnelles :
            </p>

            <ul className="list-disc pl-6 text-[18px] leading-8 text-slate-800">
              <li className="mb-3">
                <strong>Besoin de liquidité :</strong> récupérer des fonds pour
                un projet ou une dépense imprévue.
              </li>
              <li className="mb-3">
                <strong>Changement de stratégie patrimoniale :</strong>{" "}
                réorienter le capital vers d'autres classes d'actifs.
              </li>
              <li className="mb-3">
                <strong>Baisse du prix de part :</strong> arbitrage pour limiter
                les pertes ou réallouer sur une SCPI plus performante selon le
                marché.
              </li>
              <li className="mb-3">
                <strong>Anticipation fiscale :</strong> profiter des abattements
                progressifs liés à la durée de détention pour optimiser la
                fiscalité de la plus-value.
              </li>
              <li>
                <strong>Opportunité de réallocation :</strong> arbitrer vers une
                SCPI mieux positionnée selon les conditions de marché actuelles.
              </li>
            </ul>
          </div>

          <div
            className="card"
            style={{
              background: "#f3ecd8",
              borderColor: "#f3ecd8",
              borderRadius: 28,
              padding: 40,
            }}
          >
            <h3
              style={{
                color: "var(--primary)",
                fontSize: "clamp(26px, 3vw, 40px)",
                lineHeight: 1.15,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              La décision dépend de votre situation globale
            </h3>

            <p className="mb-4 text-[18px] leading-8 text-slate-700">
              Il n'y a pas de moment idéal universel pour vendre une SCPI. La
              décision doit tenir compte du contexte de marché, de votre horizon
              de placement, de vos besoins de trésorerie et de la fiscalité
              applicable selon la durée de détention.
            </p>

            <p className="text-[18px] leading-8 text-slate-700">
              La liquidité est un élément clé à analyser avant d'investir en
              SCPI. Une anticipation dès l'entrée permet d'éviter des situations
              de sortie contrainte.
            </p>

            <div className="cta-row mt-8">
              <Link href="/avantages" className="btn-secondary">
                Voir les avantages SCPI
              </Link>
              <Link href="/fiscalite" className="btn-primary">
                Fiscalité SCPI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="section-tight">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="content-block">
              <h2
                style={{
                  fontSize: "clamp(34px, 5vw, 58px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  fontWeight: 800,
                  color: "var(--primary)",
                  marginBottom: 24,
                }}
              >
                4. Prix de revente et décotes / surcotes
              </h2>

              <p className="text-[18px] leading-8 text-slate-700">
                Le prix d'exécution sur le marché secondaire peut différer de la
                valeur de retrait officielle publiée par la SCPI.
              </p>

              <ul className="mt-6 list-disc pl-7 text-[18px] leading-8 text-slate-700">
                <li className="mb-3">
                  <strong>Décote :</strong> elle peut apparaître lorsque l'offre
                  de vente dépasse la demande ou lorsque le marché perçoit un
                  risque plus élevé.
                </li>
                <li className="mb-3">
                  <strong>Surcote :</strong> plus rare, elle peut concerner des
                  SCPI très recherchées avec un bon TOF et une forte demande.
                </li>
                <li>
                  <strong>Facteurs influençant le prix :</strong> taux
                  d'occupation, évolution des loyers, marché immobilier,
                  réserves, conjoncture des taux.
                </li>
              </ul>
            </div>

            <div
              className="card"
              style={{
                background: "#f3ecd8",
                borderColor: "#f3ecd8",
                borderRadius: 28,
                padding: 40,
              }}
            >
              <h3
                style={{
                  color: "var(--primary)",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  lineHeight: 1.15,
                  fontWeight: 800,
                  marginBottom: 24,
                }}
              >
                Le prix de cession dépend autant du marché que de la qualité de
                la SCPI
              </h3>

              <p className="text-[18px] leading-8 text-slate-700">
                Une SCPI bien gérée, bien occupée et bien diversifiée peut mieux
                résister aux tensions de marché. À l'inverse, certaines SCPI
                plus exposées peuvent subir des ajustements de prix plus
                importants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6 */}
      <section className="section" style={{ background: "#f3ecd8" }}>
        <div className="container-site grid gap-8 md:grid-cols-2">
          <div
            className="card"
            style={{
              background: "#f0c24f",
              borderColor: "#f0c24f",
              borderRadius: 28,
              padding: 40,
            }}
          >
            <h2
              style={{
                color: "var(--primary)",
                fontSize: "clamp(30px, 4vw, 50px)",
                lineHeight: 1.08,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              5. Frais liés à la revente
            </h2>

            <ul className="list-disc pl-6 text-[18px] leading-8 text-slate-800">
              <li className="mb-3">
                <strong>Commission de sortie :</strong> 0 à 3 %, parfois
                davantage sur certains montages.
              </li>
              <li className="mb-3">
                <strong>Frais d'intermédiation :</strong> 1 à 2 % selon la
                plateforme ou l'intervenant.
              </li>
              <li className="mb-3">
                <strong>Droits d'enregistrement :</strong> environ 5 % sur le
                marché secondaire.
              </li>
              <li className="mb-3">
                <strong>Frais notariés :</strong> variables selon le type
                d'acte.
              </li>
              <li>
                <strong>Frais de gestion :</strong> ils peuvent courir jusqu'à
                la date effective de cession.
              </li>
            </ul>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              Les frais d'entrée initiaux doivent être appréciés sur la durée de
              détention : une revente trop rapide réduit mécaniquement le
              rendement global. Ne pas oublier les frais de sortie dans le
              calcul de rentabilité.
            </p>
          </div>

          <div
            className="card"
            style={{
              background: "#f0c24f",
              borderColor: "#f0c24f",
              borderRadius: 28,
              padding: 40,
            }}
          >
            <h2
              style={{
                color: "var(--primary)",
                fontSize: "clamp(30px, 4vw, 50px)",
                lineHeight: 1.08,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              6. Fiscalité de la plus-value à la revente
            </h2>

            <p className="text-[18px] leading-8 text-slate-800">
              La plus-value réalisée lors de la cession des parts relève du
              régime des <strong>plus-values immobilières des particuliers</strong>.
              Ce régime est distinct de celui des plus-values mobilières.
            </p>

            <ul className="mt-6 list-disc pl-6 text-[18px] leading-8 text-slate-800">
              <li className="mb-2">
                <strong>Impôt sur le revenu : 19 %</strong>
              </li>
              <li className="mb-2">
                <strong>Prélèvements sociaux : 17,2 %</strong>
              </li>
              <li className="mb-2">
                <strong>Taux global brut : 36,2 %</strong> avant abattements
              </li>
            </ul>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              Des <strong>abattements progressifs</strong> s'appliquent en
              fonction de la durée de détention. L'exonération totale d'IR est
              atteinte à 22 ans, et l'exonération totale des prélèvements
              sociaux à 30 ans de détention.
            </p>

            <p className="mt-4 text-[18px] leading-8 text-slate-800">
              Le calcul tient compte du prix de cession, du prix d'acquisition,
              des frais de souscription, des frais de cession et de la durée de
              détention.
            </p>

            <div className="mt-8">
              <Link href="/fiscalite" className="btn-secondary">
                Approfondir la fiscalité SCPI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABATTEMENTS TABLE */}
      <section className="section">
        <div className="container-site">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Durée de détention</th>
                  <th>Abattement IR (19 %)</th>
                  <th>Abattement PS (17,2 %)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Moins de 6 ans</td>
                  <td>0 %</td>
                  <td>0 %</td>
                </tr>
                <tr>
                  <td>6 à 21 ans révolus</td>
                  <td>6 % par an</td>
                  <td>1,65 % par an</td>
                </tr>
                <tr>
                  <td>22 ans révolus</td>
                  <td>Exonération totale</td>
                  <td>1,60 % supplémentaire</td>
                </tr>
                <tr>
                  <td>23 à 30 ans</td>
                  <td>Exonération totale</td>
                  <td>9 % par an</td>
                </tr>
                <tr>
                  <td>30 ans et plus</td>
                  <td>Exonération totale</td>
                  <td>Exonération totale</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-block mt-8">
            <p>
              <strong>Calcul :</strong> Plus-value = Prix de cession – Prix
              d'acquisition (augmenté des frais de souscription) – frais de
              cession.
            </p>
            <p>
              <strong>Surtaxe :</strong> elle peut s'ajouter si la plus-value
              nette dépasse certains seuils.
            </p>
            <p>
              La société de gestion calcule souvent la plus-value et opère la
              retenue à la source.
            </p>

            <h3 className="mt-8 mb-3 text-2xl font-bold text-slate-900">
              Cas particuliers
            </h3>
            <ul>
              <li>Parts détenues en assurance-vie.</li>
              <li>Démembrement : règles spécifiques selon usufruit et nue-propriété.</li>
            </ul>
          </div>

          <div className="cta-row mt-8">
            <Link href="/scpi-credit" className="btn-primary">
              Accéder au simulateur SCPI
            </Link>
            <Link href="/fiscalite" className="btn-secondary">
              Voir la page fiscalité complète
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="section-tight">
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 28,
            }}
          >
            7. Facteurs influençant la liquidité en 2026
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Qualité du patrimoine
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                TOF élevé, diversification géographique et sectorielle,
                conformité énergétique et qualité locative influencent fortement
                la liquidité.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Taille de la SCPI
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Les SCPI les plus capitalisées disposent souvent d'une meilleure
                profondeur de marché.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Conjoncture
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Hausse des taux, évolution des valeurs vénales, niveau de
                collecte et contexte immobilier général jouent un rôle majeur.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Politique de gestion
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Réserves, mécanismes de liquidité et communication transparente
                renforcent la confiance du marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNAUX À SURVEILLER */}
      <section className="section" style={{ background: "#f8faff" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 12,
            }}
          >
            Signaux à surveiller avant de vendre
          </h2>
          <p className="mb-10 text-[18px] leading-8 text-slate-600">
            La liquidité est l'un des principaux risques à analyser avant
            d'investir en SCPI. Ces indicateurs permettent d'évaluer le bon
            moment et les conditions de marché avant toute décision de cession.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Parts en attente de retrait
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Un volume élevé de parts en attente de cession signale une
                demande insuffisante selon le marché. Ce chiffre est
                généralement disponible dans les bulletins trimestriels de la
                société de gestion.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Évolution du prix de part
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Une baisse du prix de part sur plusieurs trimestres peut
                indiquer une pression sur la valeur du patrimoine. Une
                stabilisation ou une hausse peut signaler de meilleures
                conditions pour revendre selon les SCPI.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Taux d'occupation (TOF)
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Un TOF élevé (supérieur à 90 %) est généralement rassurant sur
                la qualité locative du patrimoine. Un TOF en baisse peut peser
                sur la perception de la SCPI et la demande des acheteurs
                potentiels.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Collecte nette
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Une collecte nette positive (plus d'acheteurs que de vendeurs)
                est un signal de liquidité favorable selon le marché. À
                l'inverse, une collecte négative peut allonger les délais de
                revente de façon significative.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Communication de la société de gestion
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Une communication transparente et régulière sur l'état du
                patrimoine, les retraits en attente et la stratégie de la SCPI
                est un indicateur de confiance important avant de prendre une
                décision de cession.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Contexte immobilier général
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                L'environnement de taux, l'état du marché immobilier commercial
                et les évolutions réglementaires influencent les acheteurs
                potentiels. La{" "}
                <Link
                  href="/fiscalite"
                  className="font-semibold underline text-[var(--primary)]"
                >
                  fiscalité de la revente
                </Link>{" "}
                peut également évoluer selon le contexte.
              </p>
            </div>
          </div>

          <div className="notice-box mt-10">
            <h3>Où trouver ces informations ?</h3>
            <ul className="mt-4 list-disc pl-5 text-slate-700">
              <li>Bulletins trimestriels publiés par la société de gestion</li>
              <li>Rapports annuels et documents d'information clé (DIC)</li>
              <li>Site de l'AMF (Autorité des marchés financiers)</li>
              <li>
                Notre{" "}
                <Link
                  href="/comparaison"
                  className="font-semibold underline text-[var(--primary)]"
                >
                  outil de comparaison des SCPI
                </Link>{" "}
                pour croiser les indicateurs de plusieurs SCPI côte à côte
              </li>
              <li>
                Notre{" "}
                <Link
                  href="/guide-pdf"
                  className="font-semibold underline text-[var(--primary)]"
                >
                  guide SCPI gratuit
                </Link>{" "}
                pour comprendre les mécanismes de sortie en détail
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CAS CONCRET */}
      <section className="section" style={{ background: "#eaf0fb" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 28,
            }}
          >
            Cas concret : revente dans un marché moins liquide
          </h2>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div
              className="card"
              style={{
                background: "white",
                borderRadius: 28,
                padding: 40,
                borderLeft: "6px solid #17365d",
              }}
            >
              <p className="text-[18px] leading-8 text-slate-700">
                Un investisseur souhaitant vendre 50 000 € de parts dans une
                SCPI à capital variable, dans un contexte où la collecte
                ralentit, peut devoir attendre{" "}
                <strong>plusieurs semaines ou plusieurs mois</strong> avant que
                sa demande de retrait soit exécutée.
              </p>

              <p className="mt-4 text-[18px] leading-8 text-slate-700">
                Si les retraits dépassent les nouvelles souscriptions, la
                société de gestion peut déclencher un{" "}
                <strong>marché secondaire</strong> organisé, où le prix de
                cession peut être inférieur à la valeur de retrait officielle —
                ce qu'on appelle une décote.
              </p>

              <p className="mt-4 text-[18px] leading-8 text-slate-700">
                Dans un scénario de marché tendu, cet investisseur peut soit
                attendre la reprise de la collecte, soit accepter une décote sur
                le marché secondaire pour vendre plus rapidement.
              </p>

              <div
                className="mt-6 rounded-[14px] px-5 py-4"
                style={{
                  background: "rgba(240,194,79,0.15)",
                  borderLeft: "4px solid #f0c24f",
                }}
              >
                <p
                  className="text-[16px] font-medium leading-7 text-slate-700"
                  style={{ margin: 0 }}
                >
                  Les conditions de revente varient selon les SCPI et le marché.
                  Un risque de perte en capital existe. Il est recommandé
                  d'anticiper la liquidité avant d'investir.
                </p>
              </div>
            </div>

            <div
              className="card"
              style={{
                background: "#f3ecd8",
                borderColor: "#f3ecd8",
                borderRadius: 28,
                padding: 40,
              }}
            >
              <h3
                style={{
                  color: "var(--primary)",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  lineHeight: 1.15,
                  fontWeight: 800,
                  marginBottom: 24,
                }}
              >
                Ce que cela implique concrètement
              </h3>

              <ul className="list-disc pl-6 text-[18px] leading-8 text-slate-700">
                <li className="mb-3">
                  La revente n'est pas immédiate, même pour une SCPI réputée
                  liquide.
                </li>
                <li className="mb-3">
                  En cas d'urgence de trésorerie, les délais peuvent être
                  pénalisants.
                </li>
                <li className="mb-3">
                  Une décote peut réduire le rendement global de
                  l'investissement.
                </li>
                <li>
                  Anticiper la sortie dès l'entrée est une bonne pratique
                  patrimoniale.
                </li>
              </ul>

              <div className="cta-row mt-8">
                <Link href="/comparaison" className="btn-primary">
                  Comparer les SCPI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section className="section" style={{ background: "#f3ecd8" }}>
        <div className="container-site grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="card"
            style={{
              background: "#f0c24f",
              borderColor: "#f0c24f",
              borderRadius: 28,
              padding: 40,
            }}
          >
            <h2
              style={{
                color: "var(--primary)",
                fontSize: "clamp(30px, 4vw, 50px)",
                lineHeight: 1.08,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              8. Stratégies pour optimiser une revente
            </h2>

            <ul className="list-disc pl-6 text-[18px] leading-8 text-slate-800">
              <li className="mb-3">
                Anticiper : ne pas attendre un besoin urgent de liquidités.
              </li>
              <li className="mb-3">
                Diversifier : détenir plusieurs SCPI pour céder seulement une
                partie du portefeuille.
              </li>
              <li className="mb-3">
                Suivre régulièrement la valeur de retrait, le TOF et les
                bulletins trimestriels.
              </li>
              <li className="mb-3">
                Vendre par tranches pour limiter l'impact sur le prix.
              </li>
              <li className="mb-3">
                Utiliser l'assurance-vie dans certains cas pour une sortie plus
                souple.
              </li>
              <li>
                Consulter un expert pour évaluer le moment et le canal optimal.
              </li>
            </ul>
          </div>

          <div
            className="card"
            style={{
              background: "#f3ecd8",
              borderColor: "#f3ecd8",
              borderRadius: 28,
              padding: 40,
            }}
          >
            <h3
              style={{
                color: "var(--primary)",
                fontSize: "clamp(26px, 3vw, 40px)",
                lineHeight: 1.15,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              Une bonne stratégie de sortie se prépare aussi au moment de
              l'entrée
            </h3>

            <p className="text-[18px] leading-8 text-slate-700">
              Avant d'acheter ou de revendre, il peut être utile de simuler un
              projet global afin de mieux comprendre l'impact du financement,
              du rendement et de l'horizon de détention.
            </p>

            <div className="cta-row mt-8">
              <Link href="/scpi-credit" className="btn-primary">
                Tester le simulateur
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ERREURS FRÉQUENTES */}
      <section className="section">
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 28,
            }}
          >
            Erreurs fréquentes à éviter lors de la revente
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-xl font-bold text-[var(--primary)]">
                Croire que la revente est immédiate
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Les SCPI ne sont pas des actifs cotés. La revente peut prendre
                plusieurs semaines à plusieurs mois selon la SCPI et le marché.
                Ne pas l'anticiper peut créer des difficultés de trésorerie.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-xl font-bold text-[var(--primary)]">
                Ignorer la liquidité de la SCPI
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Toutes les SCPI ne présentent pas le même niveau de liquidité.
                La liquidité est un élément clé à analyser avant d'investir,
                pas seulement au moment de la sortie.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-xl font-bold text-[var(--primary)]">
                Vendre dans un marché défavorable
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Revendre dans un contexte de marché tendu peut entraîner une
                décote sur le prix de cession. Si la situation le permet, il
                peut être préférable d'attendre une période plus favorable.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-xl font-bold text-[var(--primary)]">
                Oublier les frais de sortie
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Commission de sortie, droits d'enregistrement, frais
                d'intermédiation : ces coûts peuvent peser significativement sur
                la rentabilité finale, surtout pour une courte durée de
                détention.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-xl font-bold text-[var(--primary)]">
                Ne pas anticiper la fiscalité
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                La plus-value immobilière est imposée à 36,2 % avant
                abattements. Une sortie avant 6 ans ne bénéficie d'aucun
                abattement. Anticiper la fiscalité peut changer le moment
                optimal de la vente.
              </p>
            </div>

            <div
              className="card"
              style={{
                borderRadius: 28,
                padding: 34,
                background: "#eaf0fb",
                borderColor: "#eaf0fb",
              }}
            >
              <h3 className="mb-4 text-xl font-bold text-[var(--primary)]">
                Pour aller plus loin
              </h3>
              <p className="mb-6 text-[17px] leading-8 text-slate-700">
                Comparez les SCPI selon leur liquidité ou simulez l'impact d'un
                financement avec nos outils pédagogiques.
              </p>
              <div className="cta-row">
                <Link href="/comparaison" className="btn-secondary">
                  Comparer les SCPI
                </Link>
                <Link href="/avantages" className="btn-primary">
                  Avantages SCPI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <h2
              style={{
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 800,
                color: "var(--primary)",
                marginBottom: 28,
              }}
            >
              FAQ – Questions fréquentes sur la revente des parts de SCPI
            </h2>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-[22px] border border-[var(--border)] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition"
                >
                  <summary
                    className="cursor-pointer list-none pr-8 text-xl font-bold text-slate-900"
                    style={{ lineHeight: 1.4 }}
                  >
                    {item.question}
                  </summary>
                  <p className="mt-4 text-[17px] leading-8 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div
            className="card"
            style={{
              background: "#26478f",
              color: "white",
              borderColor: "#26478f",
              borderRadius: "32px",
              padding: "40px 34px",
              boxShadow: "0 20px 40px rgba(31,68,138,0.16)",
            }}
          >
            <div
              style={{
                width: 84,
                height: 18,
                borderRadius: 999,
                background: "#f0c24f",
                margin: "0 auto 28px",
              }}
            />

            <h2
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "clamp(34px, 4vw, 46px)",
                lineHeight: 1.15,
                marginBottom: 24,
                fontWeight: 800,
              }}
            >
              Aller plus loin sur les SCPI ?
            </h2>

            <p
              style={{
                color: "#f0c24f",
                textAlign: "center",
                fontSize: 20,
                lineHeight: 1.45,
                fontWeight: 700,
                marginBottom: 22,
              }}
            >
              Simulez votre projet ou comparez plusieurs SCPI
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.92)",
                textAlign: "center",
                fontSize: 17,
                lineHeight: 1.7,
                marginBottom: 30,
              }}
            >
              Complétez votre réflexion avec un simulateur SCPI à crédit et un
              comparateur pédagogique pour mieux analyser votre projet
              d'investissement.
            </p>

            <div className="space-y-4">
              <Link
                href="/scpi-credit"
                className="block rounded-full px-6 py-4 text-center text-xl font-bold text-slate-900 transition"
                style={{ background: "#f0c24f" }}
              >
                Télécharger le simulateur PDF
              </Link>

              <Link
                href="/comparaison"
                className="block rounded-full border px-6 py-4 text-center text-xl font-bold text-white transition"
                style={{
                  borderColor: "rgba(255,255,255,0.22)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                Voir aussi le comparateur
              </Link>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 14,
                lineHeight: 1.8,
                marginTop: 28,
              }}
            >
              Contenu pédagogique, indépendant et conçu pour être lisible
              rapidement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
