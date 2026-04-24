import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScpiCreditSimulator from "@/components/ScpiCreditSimulator";

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
    </>
  );
}