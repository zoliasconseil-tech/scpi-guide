import ComparisonTool from "@/components/ComparisonTool";
import SectionTitle from "@/components/SectionTitle";

export default function ComparaisonPage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "#eaf0fb", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-site grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="content-block">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Comparaison SCPI
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
              Comparer 2 à 3 SCPI selon les critères essentiels
            </h1>

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              Une comparaison de plusieurs SCPI ne doit pas se limiter à un
              seul indicateur. Le tableau ci-dessous permet de sélectionner
              jusqu’à trois SCPI et de visualiser les critères les plus utiles
              avant toute décision.
            </p>

            <p className="mb-5 text-[18px] leading-8 text-slate-700">
              L’objectif est de proposer une lecture simple, structurée et
              pédagogique de plusieurs véhicules d’investissement, afin de mieux
              comprendre leurs différences de positionnement, de typologie, de
              minimum de souscription, de géographie ou encore d’exposition
              sectorielle.
            </p>

            <p className="text-[18px] leading-8 text-slate-700">
              Cette page permet aussi de générer un document comparatif PDF
              après remplissage du formulaire, pour conserver une synthèse
              claire des SCPI sélectionnées.
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
              Pourquoi utiliser le comparateur SCPI ?
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
              Une lecture claire avant de choisir
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
              Comparez rapidement plusieurs SCPI sur les critères les plus
              utiles et générez ensuite un comparatif PDF synthétique pour
              garder une vision structurée de votre sélection.
            </p>

            <div className="space-y-4">
              <a
                href="#comparateur-scpi"
                className="block rounded-full px-6 py-4 text-center text-xl font-bold text-slate-900 transition"
                style={{ background: "#f0c24f" }}
              >
                Accéder au comparateur
              </a>
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
          <SectionTitle
            eyebrow="Comparatif"
            title="Méthode de lecture comparative"
            description="L’objectif n’est pas de désigner une “meilleure SCPI” de manière universelle, mais de comparer plusieurs véhicules selon des critères simples et cohérents avec votre projet."
          />

          <div className="content-block mb-8">
            <p>
              Une comparaison pertinente suppose d’intégrer le profil de
              l’investisseur, son horizon de placement, sa fiscalité et son
              besoin de revenus ou de capitalisation. Le tableau ci-dessous a
              donc vocation à simplifier la lecture des informations les plus
              utiles.
            </p>

            <p>
              Vous pouvez sélectionner jusqu’à trois SCPI pour faire apparaître
              un tableau récapitulatif. Une fois votre sélection effectuée, il
              est également possible de générer un comparatif PDF après avoir
              rempli le formulaire dédié.
            </p>
          </div>

          <div id="comparateur-scpi">
            <ComparisonTool />
          </div>
        </div>
      </section>
    </>
  );
}