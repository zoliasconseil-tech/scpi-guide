import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScpiCreditSimulator from "@/components/ScpiCreditSimulator";

export const metadata: Metadata = {
  title: "Simulation SCPI à crédit : calcul, effort d'épargne et exemple",
  description:
    "Comprenez comment simuler une SCPI à crédit : mensualité, revenus, effort d'épargne, fiscalité et points de vigilance avant d'investir.",
  alternates: {
    canonical: "https://www.scpi-gouv.org/scpi-credit",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment fonctionne une SCPI à crédit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une SCPI à crédit consiste à financer tout ou partie de l'acquisition de parts de SCPI par un emprunt bancaire. Les revenus potentiels distribués par la SCPI peuvent contribuer au remboursement du crédit, réduisant ainsi l'effort d'épargne mensuel. La différence entre la mensualité du crédit et les revenus nets perçus constitue l'effort d'épargne. Les revenus ne sont pas garantis et le capital peut varier.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi faire une simulation SCPI à crédit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une simulation permet d'estimer l'effort d'épargne mensuel, de comparer plusieurs durées ou montants de crédit, et de mieux comprendre l'impact du taux, de la fiscalité et du rendement distribué sur l'équilibre du projet. Il ne s'agit pas d'une projection garantie mais d'un outil d'aide à la réflexion patrimoniale.",
      },
    },
    {
      "@type": "Question",
      name: "Comment calculer l'effort d'épargne d'une SCPI à crédit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'effort d'épargne s'estime en soustrayant les revenus SCPI nets disponibles de la mensualité du crédit : Effort d'épargne = mensualité du crédit – revenus SCPI nets. Les revenus nets dépendent du rendement distribué, de la fiscalité (tranche marginale d'imposition + prélèvements sociaux), du délai de jouissance et des charges éventuelles. Ce calcul est indicatif et doit être adapté à la situation personnelle.",
      },
    },
    {
      "@type": "Question",
      name: "Les intérêts d'emprunt sont-ils déductibles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En régime réel, les intérêts d'emprunt versés pour financer l'acquisition de parts de SCPI sont potentiellement déductibles des revenus fonciers. Cette déduction n'est pas applicable en micro-foncier. Elle nécessite la conservation des justificatifs (tableau d'amortissement, relevés d'intérêts). L'avantage fiscal dépend de la tranche marginale d'imposition et de la situation individuelle. Il convient de vérifier avec un conseiller fiscal.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on acheter des SCPI européennes à crédit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, il est possible d'acquérir des parts de SCPI investissant hors de France à crédit. La fiscalité des revenus de ces SCPI diffère des SCPI françaises : les revenus ne sont généralement pas soumis aux prélèvements sociaux français (17,2 %), selon les conventions fiscales bilatérales applicables. Il convient de vérifier le traitement fiscal selon chaque convention et sa situation personnelle.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les risques d'une SCPI à crédit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investir en SCPI à crédit comporte plusieurs risques : risque de perte en capital, revenus non garantis pouvant évoluer à la baisse, prix des parts pouvant varier, liquidité non garantie lors d'une revente, endettement à maîtriser sur la durée, et fiscalité à anticiper. L'effort d'épargne peut augmenter si les revenus distribués diminuent.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle durée choisir pour un crédit SCPI ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le choix de la durée dépend de plusieurs paramètres : capacité de remboursement mensuelle, objectif patrimonial, horizon d'investissement et coût total du crédit. Une durée longue réduit la mensualité et donc l'effort d'épargne, mais augmente le coût total des intérêts. Une durée courte réduit le coût global mais augmente la mensualité. Une simulation comparative sur plusieurs durées est utile pour arbitrer.",
      },
    },
  ],
};

export default function ScpiCreditPage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "#eaf0fb", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-site grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="content-block">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              SCPI à crédit
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
              Simulateur SCPI à crédit : effort d’épargne et revenus à terme
            </h1>

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              Cette page permet d’estimer rapidement l’équilibre d’un projet
              d’investissement en SCPI financé à crédit. Le simulateur a été
              conçu pour donner une lecture simple, pédagogique et structurée
              de deux indicateurs clés : l’effort d’épargne moyen pendant la
              durée du financement et les revenus à terme une fois le crédit
              remboursé.
            </p>

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              L’objectif n’est pas de remplacer une étude patrimoniale complète,
              mais d’obtenir un premier ordre de grandeur à partir de trois
              données seulement : l’enveloppe totale investie, l’apport et la
              durée du crédit.
            </p>

            <p className="text-[18px] leading-8 text-slate-700">
              Le simulateur peut donc être utile pour comparer plusieurs
              scénarios, mesurer l’impact de la durée de financement et mieux
              comprendre la logique économique d’un investissement en SCPI à
              crédit avant d’aller plus loin.
            </p>
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
              Pourquoi utiliser ce simulateur ?
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
              Une lecture simple d’un projet SCPI à crédit
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
              Obtenez rapidement une estimation de l’effort d’épargne moyen et
              des revenus futurs à partir d’hypothèses fixes, dans un cadre
              pédagogique clair et cohérent avec votre réflexion patrimoniale.
            </p>

            <div className="space-y-4">
              <a
                href="#simulateur-scpi-credit"
                className="block rounded-full px-6 py-4 text-center text-xl font-bold text-slate-900 transition"
                style={{ background: "#f0c24f" }}
              >
                Accéder au simulateur
              </a>

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
                ESTIMER
              </h3>
              <p className="text-[18px] leading-8 text-slate-700">
                Mesurer rapidement l’impact d’une <strong>enveloppe</strong>,
                d’un <strong>apport</strong> et d’une{" "}
                <strong>durée de crédit</strong> sur l’équilibre global du
                projet.
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
                COMPRENDRE
              </h3>
              <p className="text-[18px] leading-8 text-slate-700">
                Visualiser deux repères utiles :{" "}
                <strong>l’effort d’épargne moyen</strong> et les{" "}
                <strong>revenus à terme</strong>, pour mieux lire un projet
                financé par emprunt.
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
                COMPARER
              </h3>
              <p className="text-[18px] leading-8 text-slate-700">
                Tester plusieurs hypothèses avant d’approfondir, afin de mieux
                structurer une réflexion patrimoniale cohérente autour des SCPI
                à crédit.
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
                Vous souhaitez mieux lire un projet SCPI à crédit ?{" "}
                <span style={{ color: "#f0c24f" }}>
                  Commencez par une simulation simple.
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

      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="content-block">
            <SectionTitle
              eyebrow="Utilité"
              title="À quoi sert concrètement ce simulateur ?"
              description="Le simulateur a pour vocation de fournir une première lecture simple, avant toute analyse plus poussée."
            />

            <p className="text-[18px] leading-8 text-slate-700">
              Un investissement en SCPI à crédit repose sur plusieurs éléments :
              le montant investi, le niveau d’apport, la durée de financement,
              le coût du crédit, le rendement retenu et la fiscalité associée.
              Il n’est pas toujours simple d’avoir une vision claire de
              l’ensemble dès le départ.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Ce simulateur permet de simplifier cette lecture en mettant en
              avant deux repères utiles :
            </p>

            <ul className="mt-6 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                <strong>l’effort d’épargne moyen</strong>, c’est-à-dire
                l’effort mensuel estimé pendant la durée du financement ;
              </li>
              <li>
                <strong>les revenus à terme</strong>, c’est-à-dire les revenus
                mensuels estimés une fois le crédit remboursé, selon les
                hypothèses retenues.
              </li>
            </ul>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Il s’agit donc d’un outil de pré-lecture patrimoniale, utile pour
              comparer plusieurs configurations, ajuster la durée ou le niveau
              d’apport, et mieux comprendre la logique financière du projet.
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
                fontSize: "clamp(26px, 3vw, 40px)",
                lineHeight: 1.15,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              Un outil pédagogique, pas une promesse de résultat
            </h3>

            <p className="text-[18px] leading-8 text-slate-700">
              Les résultats affichés restent indicatifs et dépendent des
              hypothèses intégrées dans la simulation. Ils servent avant tout à
              structurer une première réflexion et à donner des ordres de
              grandeur cohérents.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f3ecd8" }}>
        <div className="container-site grid gap-8 lg:grid-cols-2">
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
              Ce que vous renseignez
            </h2>

            <ul className="list-disc pl-6 text-[18px] leading-8 text-slate-800">
              <li className="mb-3">
                <strong>Enveloppe totale :</strong> le montant global investi
                en SCPI.
              </li>
              <li className="mb-3">
                <strong>Apport :</strong> la part financée immédiatement par
                l’épargnant.
              </li>
              <li>
                <strong>Durée de crédit :</strong> l’horizon retenu pour le
                financement.
              </li>
            </ul>
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
              Ce que vous obtenez
            </h2>

            <ul className="list-disc pl-6 text-[18px] leading-8 text-slate-800">
              <li className="mb-3">
                <strong>Effort d’épargne moyen :</strong> une estimation du
                coût mensuel réel du projet pendant la durée du prêt.
              </li>
              <li>
                <strong>Revenus à terme :</strong> une estimation des revenus
                mensuels futurs une fois le crédit remboursé.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="simulateur-scpi-credit">
        <div className="container-site">
          <SectionTitle
            eyebrow="Simulation"
            title="Renseignez les 3 données nécessaires"
            description="Le simulateur ci-dessous reste inchangé. Seule la présentation de la page a été harmonisée avec le reste du site."
          />

          <div className="content-block mb-8">
            <p>
              Vous pouvez maintenant saisir vos hypothèses directement dans le
              simulateur. Une fois la simulation générée, vous pourrez visualiser
              les résultats et télécharger votre PDF comme auparavant.
            </p>
          </div>

          <ScpiCreditSimulator />
        </div>
      </section>

      {/* ── CONTENU SEO ── */}

      {/* 1. Qu'est-ce qu'une SCPI à crédit ? */}
      <section className="section">
        <div className="container-site">
          <div className="content-block" style={{ maxWidth: 820 }}>
            <h2 className="mt-0 mb-4 text-3xl font-bold text-slate-900">
              Qu'est-ce qu'une SCPI à crédit ?
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              Investir en SCPI à crédit consiste à financer tout ou partie de
              l'acquisition de parts de{" "}
              <Link
                href="/"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                SCPI (Sociétés Civiles de Placement Immobilier)
              </Link>{" "}
              par un emprunt bancaire plutôt que par des fonds propres. L'investisseur
              souscrit un prêt auprès d'un établissement de crédit, acquiert les parts
              avec le capital emprunté, puis rembourse le prêt sur la durée convenue.
            </p>
            <p className="mt-5 text-[18px] leading-8 text-slate-700">
              Pendant la durée du financement, la SCPI peut distribuer des revenus
              potentiels — généralement issus des loyers perçus sur son patrimoine
              immobilier. Ces revenus peuvent contribuer, en partie, au remboursement
              des mensualités du crédit. La différence entre la mensualité et les
              revenus nets perçus constitue l'effort d'épargne.
            </p>
            <p className="mt-5 text-[18px] leading-8 text-slate-700">
              Une fois le crédit remboursé, l'investisseur conserve ses parts de SCPI
              et peut percevoir l'intégralité des revenus distribués, sous réserve que
              la SCPI maintienne son niveau de distribution. Il convient de rappeler que
              les revenus et le capital ne sont pas garantis et peuvent varier.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Pourquoi faire une simulation ? */}
      <section className="section" style={{ background: "#f3ecd8" }}>
        <div className="container-site">
          <div className="content-block" style={{ maxWidth: 820 }}>
            <h2 className="mt-0 mb-4 text-3xl font-bold text-slate-900">
              Pourquoi faire une simulation SCPI à crédit ?
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              La{" "}
              <strong>simulation SCPI à crédit</strong> est un outil de
              réflexion patrimoniale. Elle permet d'obtenir un premier ordre de
              grandeur avant d'approfondir l'analyse avec un conseiller. Plusieurs
              raisons justifient de réaliser une simulation :
            </p>
            <ul className="mt-5 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                <strong>Estimer l'effort d'épargne mensuel</strong> selon le montant
                investi, le taux et la durée du crédit.
              </li>
              <li className="mb-3">
                <strong>Comparer plusieurs durées de crédit</strong> pour mesurer
                l'impact sur la mensualité et le coût total du financement.
              </li>
              <li className="mb-3">
                <strong>Anticiper les revenus fonciers potentiels</strong> à terme,
                une fois le crédit remboursé.
              </li>
              <li>
                <strong>Comprendre l'impact de la fiscalité</strong> sur le rendement
                net effectivement disponible, selon la tranche marginale d'imposition.
              </li>
            </ul>
            <p className="mt-5 text-[18px] leading-8 text-slate-700">
              Une simulation reste un outil pédagogique. Elle repose sur des
              hypothèses fixes et ne constitue pas une projection financière garantie
              ni un conseil en investissement personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Exemple de simulation */}
      <section className="section">
        <div className="container-site">
          <div className="content-block" style={{ maxWidth: 820 }}>
            <h2 className="mt-0 mb-4 text-3xl font-bold text-slate-900">
              Exemple de simulation SCPI à crédit
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              Voici un exemple pédagogique basé sur des hypothèses simplifiées,
              uniquement à titre illustratif. Ces chiffres ne constituent pas une
              projection personnalisée ni un conseil en investissement.
            </p>

            <div
              className="mt-8 overflow-x-auto rounded-[20px] border"
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
                    ["Montant investi en SCPI", "100 000 €"],
                    ["Apport personnel", "10 000 €"],
                    ["Montant emprunté", "90 000 €"],
                    ["Taux du crédit (indicatif)", "5,10 %"],
                    ["Durée du crédit", "15 ans"],
                    ["Mensualité estimée", "~714 €/mois"],
                    ["Rendement distribué (indicatif)", "5 % brut annuel"],
                    ["Revenus SCPI bruts estimés", "~417 €/mois"],
                    ["Prélèvements sociaux (17,2 %)", "~72 €/mois"],
                    ["TMI retenue", "30 %"],
                    ["Impôt sur le revenu estimé", "~125 €/mois"],
                    ["Revenus nets estimés", "~220 €/mois"],
                    ["Effort d'épargne estimé", "~494 €/mois"],
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
          </div>
        </div>
      </section>

      {/* 4. Comment calculer l'effort d'épargne */}
      <section className="section" style={{ background: "#eaf0fb" }}>
        <div className="container-site">
          <div className="content-block" style={{ maxWidth: 820 }}>
            <h2 className="mt-0 mb-4 text-3xl font-bold text-slate-900">
              Comment calculer l'effort d'épargne d'une SCPI à crédit ?
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              L'effort d'épargne représente la somme mensuelle que l'investisseur
              doit effectivement décaisser pour financer son projet. Il s'estime
              simplement avec la formule suivante :
            </p>
            <div
              className="my-6 rounded-[16px] px-8 py-6 text-center text-[20px] font-bold"
              style={{ background: "#26478f", color: "white" }}
            >
              Effort d'épargne = mensualité du crédit − revenus SCPI nets disponibles
            </div>
            <p className="text-[18px] leading-8 text-slate-700">
              Les revenus SCPI nets dépendent de plusieurs facteurs qui influencent
              le résultat :
            </p>
            <ul className="mt-5 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                <strong>La fiscalité :</strong> les revenus fonciers des SCPI
                françaises sont soumis au barème progressif de l'IR et aux
                prélèvements sociaux (17,2 %), ce qui réduit le revenu net
                disponible de manière significative selon la TMI.
              </li>
              <li className="mb-3">
                <strong>Le délai de jouissance :</strong> lors d'une souscription,
                un délai de plusieurs mois s'écoule généralement avant le premier
                versement de revenus.
              </li>
              <li className="mb-3">
                <strong>Les charges et frais :</strong> certaines SCPI prélèvent des
                frais de gestion ou disposent d'une trésorerie de réserve qui peut
                affecter le montant distribué.
              </li>
              <li className="mb-3">
                <strong>La vacance et les aléas locatifs :</strong> le taux d'occupation
                financier peut varier, ce qui influe sur le niveau de distribution.
              </li>
              <li>
                <strong>L'évolution des taux :</strong> dans le cas d'un crédit à taux
                variable, la mensualité peut changer selon les conditions du marché.
              </li>
            </ul>
            <p className="mt-5 text-[18px] leading-8 text-slate-700">
              Pour approfondir ce calcul, consultez notre article dédié :{" "}
              <Link
                href="/blog/calcul-effort-epargne-scpi-credit"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                Comment calculer l'effort d'épargne d'une SCPI à crédit ?
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 5. Fiscalité */}
      <section className="section">
        <div className="container-site">
          <div className="content-block" style={{ maxWidth: 820 }}>
            <h2 className="mt-0 mb-4 text-3xl font-bold text-slate-900">
              Fiscalité d'une SCPI à crédit
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              La{" "}
              <Link
                href="/fiscalite"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                fiscalité des SCPI
              </Link>{" "}
              est un paramètre central dans l'évaluation d'un projet à crédit. Pour
              les SCPI françaises, les revenus distribués sont généralement imposés
              comme des <strong>revenus fonciers</strong>, soumis au barème progressif
              de l'impôt sur le revenu et aux prélèvements sociaux de 17,2 %.
            </p>
            <p className="mt-5 text-[18px] leading-8 text-slate-700">
              En régime réel, les intérêts d'emprunt sont potentiellement déductibles
              des revenus fonciers, ce qui peut réduire la base imposable. Cette
              déduction n'est pas applicable en micro-foncier. Elle nécessite la
              conservation des justificatifs appropriés et dépend de la situation
              personnelle de l'investisseur. Un conseiller fiscal peut aider à évaluer
              cet avantage potentiel.
            </p>
            <p className="mt-5 text-[18px] leading-8 text-slate-700">
              <strong>Cas particulier des SCPI européennes :</strong> les SCPI
              investissant hors de France bénéficient dans la plupart des cas de
              conventions fiscales bilatérales qui peuvent réduire ou supprimer les
              prélèvements sociaux français (17,2 %). Le traitement fiscal exact dépend
              de chaque convention et doit être vérifié selon la situation personnelle.
            </p>
            <p className="mt-5 text-[18px] leading-8 text-slate-700">
              La{" "}
              <Link
                href="/declaration-scpi-2026"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                déclaration SCPI 2026
              </Link>{" "}
              nécessite de reporter les montants indiqués dans l'IFU (Imprimé Fiscal
              Unique) transmis par la société de gestion, sur les formulaires 2042, 2044
              ou 2047 selon les cas.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Avantages possibles */}
      <section className="section" style={{ background: "#f3ecd8" }}>
        <div className="container-site">
          <div className="content-block" style={{ maxWidth: 820 }}>
            <h2 className="mt-0 mb-4 text-3xl font-bold text-slate-900">
              Avantages possibles de la SCPI à crédit
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              L'investissement en SCPI à crédit peut présenter plusieurs intérêts
              selon la situation patrimoniale de l'investisseur. Ces avantages
              potentiels doivent toujours être mis en regard des risques associés.
            </p>
            <ul className="mt-5 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                <strong>Utilisation de l'effet de levier du crédit :</strong> le crédit
                permet d'investir un montant supérieur à l'épargne disponible, avec pour
                objectif de constituer un patrimoine plus important à terme.
              </li>
              <li className="mb-3">
                <strong>Constitution progressive d'un patrimoine immobilier indirect :</strong>{" "}
                les parts de SCPI représentent une fraction d'un patrimoine immobilier
                diversifié géré par une société agréée AMF.
              </li>
              <li className="mb-3">
                <strong>Diversification du patrimoine :</strong> la SCPI offre une
                exposition à l'immobilier professionnel sans les contraintes de gestion
                directe (locataires, travaux, vacance).
              </li>
              <li>
                <strong>Revenus potentiels contribuant au remboursement :</strong> les
                distributions périodiques de la SCPI peuvent réduire l'effort d'épargne
                effectif pendant la durée du financement.
              </li>
            </ul>
            <p className="mt-5 text-[18px] leading-8 text-slate-700">
              Pour une analyse complète des avantages et des points de vigilance, consultez
              notre article :{" "}
              <Link
                href="/blog/scpi-credit-avantages-limites"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                SCPI à crédit : avantages et limites à connaître
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 7. Limites et points de vigilance */}
      <section className="section">
        <div className="container-site">
          <div className="content-block" style={{ maxWidth: 820 }}>
            <h2 className="mt-0 mb-4 text-3xl font-bold text-slate-900">
              Limites et points de vigilance
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              Investir en SCPI à crédit comporte des risques qu'il est important
              d'identifier et d'anticiper avant toute décision.
            </p>
            <ul className="mt-5 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                <strong>Risque de perte en capital :</strong> la valeur des parts de
                SCPI n'est pas garantie et peut évoluer à la baisse selon les conditions
                du marché immobilier.
              </li>
              <li className="mb-3">
                <strong>Revenus non garantis :</strong> les distributions peuvent être
                réduites ou suspendues en fonction des conditions locatives et de la
                gestion de la SCPI.
              </li>
              <li className="mb-3">
                <strong>Liquidité non garantie :</strong> la revente de parts de SCPI
                n'est pas immédiate. Des délais variables existent selon le type de SCPI
                et les conditions du marché.
              </li>
              <li className="mb-3">
                <strong>Endettement à maîtriser :</strong> contracter un crédit augmente
                l'exposition financière. En cas de baisse des revenus SCPI, l'effort
                d'épargne augmente mécaniquement.
              </li>
              <li className="mb-3">
                <strong>Fiscalité à anticiper :</strong> selon la tranche marginale
                d'imposition, l'impact fiscal peut être significatif et réduire le revenu
                net disponible.
              </li>
              <li>
                <strong>Importance de comparer plusieurs scénarios :</strong> une
                simulation sur une seule configuration ne suffit pas. Il est recommandé de
                tester différentes durées, montants et hypothèses fiscales avant toute
                décision.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section" style={{ background: "#eaf0fb" }}>
        <div className="container-site">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <div style={{ maxWidth: 820 }}>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800,
                color: "var(--primary)",
                marginBottom: 32,
              }}
            >
              Questions fréquentes sur la SCPI à crédit
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                <details
                  key={i}
                  className="rounded-[16px] border bg-white px-6 py-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <summary className="cursor-pointer text-[17px] font-semibold text-[var(--primary)]">
                    {item.name}
                  </summary>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">
                    {item.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── À LIRE AUSSI ── */}
      <section className="section" style={{ background: "#26478f" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 800,
              color: "white",
              marginBottom: 20,
            }}
          >
            À lire aussi sur les SCPI
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/blog/scpi-credit-avantages-limites"
              className="rounded-[16px] border border-white/20 bg-white/10 px-5 py-4 text-[16px] font-semibold text-white shadow-sm transition hover:bg-white/20"
            >
              SCPI à crédit : avantages et limites →
            </Link>
            <Link
              href="/blog/calcul-effort-epargne-scpi-credit"
              className="rounded-[16px] border border-white/20 bg-white/10 px-5 py-4 text-[16px] font-semibold text-white shadow-sm transition hover:bg-white/20"
            >
              Calculer l'effort d'épargne SCPI à crédit →
            </Link>
            <Link
              href="/fiscalite"
              className="rounded-[16px] border border-white/20 bg-white/10 px-5 py-4 text-[16px] font-semibold text-white shadow-sm transition hover:bg-white/20"
            >
              Fiscalité des SCPI →
            </Link>
            <Link
              href="/declaration-scpi-2026"
              className="rounded-[16px] border border-white/20 bg-white/10 px-5 py-4 text-[16px] font-semibold text-white shadow-sm transition hover:bg-white/20"
            >
              Déclaration SCPI 2026 →
            </Link>
            <Link
              href="/comparaison"
              className="rounded-[16px] border border-white/20 bg-white/10 px-5 py-4 text-[16px] font-semibold text-white shadow-sm transition hover:bg-white/20"
            >
              Comparer les SCPI →
            </Link>
            <Link
              href="/guide-pdf"
              className="rounded-[16px] border border-white/20 bg-white/10 px-5 py-4 text-[16px] font-semibold text-white shadow-sm transition hover:bg-white/20"
            >
              Guide SCPI gratuit →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}