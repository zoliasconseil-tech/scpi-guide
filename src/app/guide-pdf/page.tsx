import LeadForm from "@/components/LeadForm";

export default function GuidePdfPage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "#eaf0fb", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-site">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Guide PDF
            </p>

            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 66px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 800,
                margin: "0 0 24px",
                color: "var(--primary)",
                maxWidth: "1000px",
              }}
            >
              Télécharger gratuitement le guide SCPI
            </h1>

            <div className="max-w-4xl space-y-6 text-[18px] leading-8 text-slate-700">
              <p>
                Ce guide a été conçu pour permettre une lecture claire et
                structurée des SCPI. Il rassemble les notions essentielles à
                connaître avant toute décision : fonctionnement général,
                fiscalité, principaux avantages, conditions de revente et
                critères de comparaison.
              </p>

              <p>
                L’objectif est de fournir un support pédagogique simple,
                professionnel et lisible, afin d’aider à mieux comprendre les
                grands mécanismes des SCPI avant d’aller plus loin dans une
                démarche d’investissement.
              </p>

              <p>
                Ce document s’adresse aussi bien aux personnes qui découvrent
                les SCPI qu’à celles qui souhaitent remettre à plat les bases
                avant de comparer plusieurs solutions. Il permet de clarifier
                les grands sujets patrimoniaux sans entrer immédiatement dans
                une logique trop technique.
              </p>

              <p>
                Vous y retrouverez notamment les principaux repères utiles pour
                mieux comprendre le fonctionnement de la pierre-papier, les
                différences entre les grandes familles de SCPI, les points à
                analyser avant toute souscription et les questions les plus
                fréquentes liées à la fiscalité, à la revente et au financement.
              </p>

              <p>
                Le guide a été pensé comme un point d’entrée simple pour
                structurer une réflexion patrimoniale et avancer avec une base
                plus claire avant d’utiliser le comparateur ou le simulateur
                SCPI à crédit du site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="card" style={{ borderRadius: 28, padding: 40 }}>
              <h2 className="mb-6 text-3xl font-bold text-[var(--primary)]">
                Ce que contient le guide
              </h2>

              <ul className="list-disc pl-6 text-[18px] leading-8 text-slate-700">
                <li className="mb-3">Le fonctionnement général des SCPI</li>
                <li className="mb-3">Les avantages et points de vigilance</li>
                <li className="mb-3">Les grands principes de fiscalité</li>
                <li className="mb-3">Les mécanismes de revente</li>
                <li className="mb-3">
                  Les repères utiles pour comparer plusieurs SCPI
                </li>
                <li>
                  Une lecture synthétique pour mieux structurer votre réflexion
                </li>
              </ul>
            </div>

            <div className="notice-box mt-8">
              <h3>Pourquoi télécharger ce guide ?</h3>
              <p>
                Parce qu’il permet d’avoir une base claire, neutre et
                structurée avant d’approfondir votre réflexion sur les SCPI.
                C’est un support utile pour gagner du temps et mieux comprendre
                les notions essentielles avant toute décision.
              </p>
            </div>
          </div>

          <div id="form-guide">
            <LeadForm
              title="Recevoir gratuitement votre guide SCPI"
              description="Complétez ce formulaire pour accéder au guide PDF."
              source="guide"
              buttonLabel="Télécharger le guide"
              downloadUrl="/guide-scpi-2026.pdf"
            />
          </div>
        </div>
      </section>
    </>
  );
}