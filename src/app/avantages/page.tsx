import Link from "next/link";

const faqItems = [
  {
    question: "Pourquoi les SCPI attirent-elles autant d’investisseurs ?",
    answer:
      "Parce qu’elles permettent d’accéder à l’immobilier professionnel dans un cadre plus simple, diversifié et géré par une société de gestion.",
  },
  {
    question: "Les SCPI permettent-elles vraiment de diversifier un patrimoine ?",
    answer:
      "Oui, elles donnent accès à un ensemble d’actifs immobiliers souvent répartis entre plusieurs zones géographiques, locataires et secteurs d’activité.",
  },
  {
    question: "La gestion est-elle totalement déléguée ?",
    answer:
      "La gestion locative, technique et administrative est assurée par la société de gestion, ce qui rend le support plus simple à piloter qu’un bien détenu en direct.",
  },
  {
    question: "Les SCPI sont-elles adaptées à une logique de revenus ?",
    answer:
      "Elles peuvent répondre à une logique de revenus potentiels réguliers, mais ces revenus ne sont jamais garantis et dépendent des performances de la SCPI.",
  },
  {
    question: "Les SCPI protègent-elles totalement contre l’inflation ?",
    answer:
      "Non, pas totalement. En revanche, l’indexation de certains loyers et la diversification peuvent offrir une meilleure résistance que certains placements purement monétaires.",
  },
];

export default function AvantagesPage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "#eaf0fb", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-site">
          <div className="max-w-5xl">
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
              Avantages des SCPI en 2026 : guide complet, détaillé et indépendant
            </h1>

            <p className="mb-5 max-w-4xl text-[18px] leading-8 text-slate-700">
              Découvrez pourquoi les SCPI attirent autant d’épargnants :
              diversification, gestion déléguée, accessibilité, revenus
              potentiels, protection contre l’inflation et transmission
              patrimoniale.
            </p>

            <div className="cta-row">
              <Link href="/guide-pdf" className="btn-primary">
                Télécharger le guide gratuit
              </Link>
              <Link href="/comparaison" className="btn-secondary">
                Comparer les SCPI
              </Link>
            </div>
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
                DIVERSIFIER
              </h3>
              <p className="text-[18px] leading-8 text-slate-700">
                Accéder à <strong>des dizaines ou centaines d’actifs</strong>{" "}
                avec un seul investissement.
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
                DÉLÉGUER
              </h3>
              <p className="text-[18px] leading-8 text-slate-700">
                Profiter d’une <strong>gestion locative et technique externalisée</strong>{" "}
                à la société de gestion.
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
                CONSTRUIRE
              </h3>
              <p className="text-[18px] leading-8 text-slate-700">
                Utiliser les SCPI pour <strong>développer un patrimoine</strong>,
                générer des revenus potentiels et préparer une transmission.
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
                Vous cherchez l’avantage clé des SCPI ?{" "}
                <span style={{ color: "#f0c24f" }}>
                  Consultez les 10 points ci-dessous :
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
        <div className="container-site">
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
              1. Une diversification immobilière immédiate et large
            </h2>

            <p className="text-[18px] leading-8 text-slate-700">
              L’un des avantages majeurs des SCPI est leur capacité à mutualiser
              le risque sur plusieurs actifs immobiliers, zones géographiques et
              locataires.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Plutôt que de dépendre d’un seul bien ou d’un seul locataire,
              l’investisseur accède à un portefeuille plus large, souvent mieux
              réparti.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
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
              2. Une gestion totalement déléguée
            </h2>

            <p className="text-[18px] leading-8 text-slate-700">
              Les SCPI permettent de déléguer la gestion locative, technique,
              administrative et comptable à la société de gestion.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              L’investisseur n’a pas à gérer lui-même les travaux, les loyers,
              les relances ou la recherche de locataires.
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
              Un cadre plus simple à piloter
            </h3>

            <p className="text-[18px] leading-8 text-slate-700">
              Cette logique de délégation permet de profiter de l’immobilier
              professionnel dans un format souvent plus fluide à gérer que
              l’immobilier détenu en direct.
            </p>
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
              3. Un ticket d’entrée plus accessible
            </h2>

            <p className="text-[18px] leading-8 text-slate-800">
              Les SCPI permettent souvent d’accéder à l’immobilier avec un
              montant de départ plus progressif que l’achat d’un bien en direct,
              tout en mutualisant immédiatement plusieurs actifs.
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
              4. Une recherche de revenus potentiels réguliers
            </h2>

            <p className="text-[18px] leading-8 text-slate-800">
              Les SCPI sont souvent recherchées dans une logique de revenus
              potentiels réguliers, sous réserve bien sûr des performances de la
              SCPI et des conditions de marché.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
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
              5. Une bonne protection contre l’inflation
            </h2>

            <p className="text-[18px] leading-8 text-slate-700">
              La plupart des baux immobiliers comportent des clauses
              d’indexation.
            </p>

            <ul className="mt-6 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                En période d’inflation, les loyers perçus peuvent augmenter
                mécaniquement, ce qui soutient le niveau des distributions.
              </li>
              <li>
                Historiquement, les SCPI ont souvent mieux résisté à certaines
                périodes inflationnistes que des placements à revenu fixe.
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
              L’immobilier papier peut mieux absorber certains chocs de prix
            </h3>

            <p className="text-[18px] leading-8 text-slate-700">
              Grâce à l’indexation des loyers et à la diversification, la SCPI
              reste souvent mieux armée qu’un placement à revenu fixe face à
              l’érosion monétaire.
            </p>
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
              6. Une liquidité relative supérieure à l’immobilier direct
            </h2>

            <p className="text-[18px] leading-8 text-slate-800">
              La revente de parts peut rester plus simple que la cession d’un
              actif immobilier détenu seul, même si la liquidité n’est jamais
              garantie.
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
              7. Une expertise professionnelle et une sélection rigoureuse des actifs
            </h2>

            <p className="text-[18px] leading-8 text-slate-800">
              Les sociétés de gestion assurent l’acquisition, l’arbitrage, la
              sélection des locataires et le pilotage du patrimoine immobilier.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
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
              8. Un outil utile pour préparer la transmission
            </h2>

            <p className="text-[18px] leading-8 text-slate-700">
              Les SCPI peuvent s’intégrer dans une stratégie patrimoniale plus
              large, notamment pour organiser progressivement la détention et la
              transmission d’un capital.
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
              Un support à intégrer dans une logique patrimoniale
            </h3>

            <p className="text-[18px] leading-8 text-slate-700">
              Les SCPI peuvent répondre à des objectifs de structuration,
              d’anticipation successorale ou de diversification patrimoniale.
            </p>
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
              9. Une logique plus souple que certains investissements immobiliers directs
            </h2>

            <p className="text-[18px] leading-8 text-slate-800">
              Les SCPI peuvent permettre une approche plus souple en matière
              d’entrée, de diversification et de délégation que certains schémas
              immobiliers classiques.
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
              10. Une meilleure lisibilité grâce à une approche comparative
            </h2>

            <p className="text-[18px] leading-8 text-slate-800">
              Comparer plusieurs SCPI permet d’éviter une lecture trop rapide et
              de mieux apprécier les différences de stratégie, d’exposition et
              de positionnement.
            </p>
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
              FAQ – Questions fréquentes sur les avantages des SCPI
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
              Téléchargez le guide ou comparez plusieurs SCPI
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
              Complétez votre réflexion avec un guide PDF pédagogique et un
              comparateur structuré pour mieux analyser les différents profils
              de SCPI.
            </p>

            <div className="space-y-4">
              <Link
                href="/guide-pdf"
                className="block rounded-full px-6 py-4 text-center text-xl font-bold text-slate-900 transition"
                style={{ background: "#f0c24f" }}
              >
                Télécharger le guide PDF
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