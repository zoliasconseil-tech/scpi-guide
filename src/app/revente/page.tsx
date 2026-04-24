import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const faqItems = [
  {
    question: "Peut-on revendre ses parts à tout moment ?",
    answer:
      "Oui, techniquement, mais sans garantie de délai ni de prix. La revente dépend du type de SCPI, de la demande existante et du mécanisme de sortie applicable.",
  },
  {
    question:
      "Quelle est la différence de délai entre capital variable et capital fixe ?",
    answer:
      "Le capital variable peut être plus fluide si la collecte reste active. Le capital fixe dépend davantage du marché secondaire et de la confrontation entre l’offre et la demande.",
  },
  {
    question: "Les décotes sont-elles systématiques ?",
    answer:
      "Non, mais elles peuvent apparaître lorsque l’offre de vente est supérieure à la demande ou lorsque le marché perçoit un risque plus élevé sur certaines SCPI.",
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
];

export default function ReventePage() {
  return (
    <>
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

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              Les parts de SCPI ne sont pas cotées en bourse et ne bénéficient
              pas d’une liquidité immédiate comme des actions. La revente
              dépend du type de SCPI, du marché, de la présence d’une
              contrepartie et du mécanisme de sortie applicable.
            </p>

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              En pratique, il faut distinguer la revente sur le marché
              primaire, le marché secondaire, les différences entre capital
              variable et capital fixe, ainsi que les sujets de fiscalité, de
              décote et de délai.
            </p>

            <p className="text-[18px] leading-8 text-slate-700">
              Cette page regroupe les principaux éléments à connaître pour mieux
              comprendre <strong>la revente des parts de SCPI</strong>, ses
              contraintes, ses coûts et les facteurs qui influencent réellement
              la liquidité.
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
                sortie d’une SCPI.
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
                mieux gérer le moment, le prix et l’impact patrimonial global.
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
                Vous cherchez à mieux comprendre la sortie d’une SCPI ?{" "}
                <span style={{ color: "#f0c24f" }}>
                  Consultez les 8 points ci-dessous :
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
              pas d’une liquidité immédiate comme des actions. La revente
              s’effectue via :
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
              La sortie d’un associé doit généralement être compensée par
              l’entrée d’un nouvel associé, notamment pour les SCPI à capital
              fixe.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              En 2025-2026, le volume de parts en attente de retrait a atteint
              environ 2,4 à 2,8 milliards d’euros selon les trimestres,
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
              d’acheteurs, de la collecte et de la perception globale de la
              qualité du patrimoine.
            </p>
          </div>
        </div>
      </section>

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
                    En cas d’excédent de retraits, mise en place d’un marché
                    secondaire organisé.
                  </li>
                </ul>

                <p className="mb-4">
                  <strong>SCPI à capital fixe :</strong>
                </p>
                <ul className="list-disc pl-6">
                  <li>Nombre de parts fixe.</li>
                  <li>Sortie uniquement par cession à un nouvel investisseur.</li>
                  <li>Confrontation obligatoire de l’offre et de la demande.</li>
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
                Parce qu’elle influence directement la fluidité de la sortie, la
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
                Transmettre l’ordre : demande de retrait pour capital variable
                ou dépôt d’un ordre de vente sur le marché secondaire.
              </p>
            </div>

            <div className="card" style={{ borderRadius: 28, padding: 34 }}>
              <h3 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Étape 3
              </h3>
              <p className="text-[17px] leading-8 text-slate-700">
                Attendre la confrontation entre l’offre et la demande jusqu’à la
                mise en relation d’un vendeur et d’un acheteur.
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
                Le prix d’exécution sur le marché secondaire peut différer de la
                valeur de retrait officielle publiée par la SCPI.
              </p>

              <ul className="mt-6 list-disc pl-7 text-[18px] leading-8 text-slate-700">
                <li className="mb-3">
                  <strong>Décote :</strong> elle peut apparaître lorsque l’offre
                  de vente dépasse la demande ou lorsque le marché perçoit un
                  risque plus élevé.
                </li>
                <li className="mb-3">
                  <strong>Surcote :</strong> plus rare, elle peut concerner des
                  SCPI très recherchées avec un bon TOF et une forte demande.
                </li>
                <li>
                  <strong>Facteurs influençant le prix :</strong> taux
                  d’occupation, évolution des loyers, marché immobilier,
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
                résister aux tensions de marché. À l’inverse, certaines SCPI
                plus exposées peuvent subir des ajustements de prix plus
                importants.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                <strong>Frais d’intermédiation :</strong> 1 à 2 % selon la
                plateforme ou l’intervenant.
              </li>
              <li className="mb-3">
                <strong>Droits d’enregistrement :</strong> environ 5 % sur le
                marché secondaire.
              </li>
              <li className="mb-3">
                <strong>Frais notariés :</strong> variables selon le type
                d’acte.
              </li>
              <li>
                <strong>Frais de gestion :</strong> ils peuvent courir jusqu’à
                la date effective de cession.
              </li>
            </ul>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              Les frais d’entrée initiaux doivent être appréciés sur la durée de
              détention : une revente trop rapide réduit mécaniquement le
              rendement global.
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
              régime des plus-values immobilières des particuliers.
            </p>

            <ul className="mt-6 list-disc pl-6 text-[18px] leading-8 text-slate-800">
              <li>Impôt sur le revenu : 19 %</li>
              <li>Prélèvements sociaux : 17,2 %</li>
              <li>Taux global brut : 36,2 % avant abattements</li>
            </ul>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              Le calcul tient compte du prix de cession, du prix d’acquisition,
              des frais de souscription, des frais de cession et de la durée de
              détention.
            </p>
          </div>
        </div>
      </section>

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
              d’acquisition (augmenté des frais de souscription) – frais de
              cession.
            </p>
            <p>
              <strong>Surtaxe :</strong> elle peut s’ajouter si la plus-value
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
          </div>
        </div>
      </section>

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
                Les SCPI les plus capitalisées disposent souvent d’une meilleure
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
                Vendre par tranches pour limiter l’impact sur le prix.
              </li>
              <li className="mb-3">
                Utiliser l’assurance-vie dans certains cas pour une sortie plus
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
              Une bonne stratégie de sortie se prépare aussi au moment de l’entrée
            </h3>

            <p className="text-[18px] leading-8 text-slate-700">
              Avant d’acheter ou de revendre, il peut être utile de simuler un
              projet global afin de mieux comprendre l’impact du financement,
              du rendement et de l’horizon de détention.
            </p>

            <div className="cta-row mt-8">
              <Link href="/scpi-credit" className="btn-primary">
                Tester le simulateur
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              10. FAQ – Questions fréquentes sur la revente des parts de SCPI
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
              d’investissement.
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