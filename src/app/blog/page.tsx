import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Blog SCPI : fiscalité, rendement, revente et conseils",
  description:
    "Articles pédagogiques sur les SCPI : fiscalité, rendement, déclaration, revente, investissement à crédit, comparaison et bonnes pratiques.",
  alternates: {
    canonical: "https://www.scpi-gouv.org/blog",
  },
};

const articles = [
  {
    slug: "scpi-fiscalite-ce-qu-il-faut-savoir",
    title: "Fiscalité des SCPI : ce qu’il faut savoir avant d’investir",
    excerpt:
      "Comprendre la fiscalité des SCPI en direct, les prélèvements sociaux, l’impact de la tranche marginale d’imposition et les points de vigilance avant toute souscription.",
  },
  {
    slug: "scpi-ou-immobilier-locatif",
    title: "SCPI ou immobilier locatif en direct : quelles différences ?",
    excerpt:
      "Gestion, diversification, liquidité, fiscalité, montant investi, effort de gestion : une comparaison claire entre SCPI et investissement locatif classique.",
  },
  {
    slug: "acheter-des-scpi-a-credit",
    title: "Acheter des SCPI à crédit : avantages, limites et points d’attention",
    excerpt:
      "Pourquoi certains investisseurs choisissent les SCPI à crédit, comment fonctionne l’effet de levier et quels critères analyser avant de se lancer.",
  },
  {
    slug: "scpi-en-assurance-vie",
    title: "SCPI en assurance-vie : la combinaison gagnante pour optimiser votre fiscalité",
    excerpt:
      "Pourquoi loger ses SCPI dans une assurance-vie peut transformer la fiscalité des revenus, faciliter la transmission et améliorer la liquidité — avec les limites à connaître.",
  },
  {
    slug: "scpi-vs-immobilier-locatif",
    title: "SCPI vs immobilier locatif direct : le grand comparatif",
    excerpt:
      "Comparaison complète entre SCPI et immobilier locatif direct : rendement, fiscalité, liquidité, gestion et contraintes — pour faire le meilleur choix patrimonial.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <h1>Blog SCPI</h1>
          <p>
            Retrouvez des articles pédagogiques sur les SCPI : fiscalité,
            comparaison, investissement à crédit, avantages, revente et points
            de vigilance. Cette rubrique a pour objectif d’apporter des contenus
            utiles, structurés et durables pour mieux comprendre les enjeux liés
            à l’investissement en SCPI.
          </p>
        </div>
      </section>

      {/* ── INTRO ÉDITORIALE ── */}
      <section className="section" style={{ background: "#f3ecd8" }}>
        <div className="container-site">
          <div className="content-block">
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                fontWeight: 800,
                color: "var(--primary)",
                marginBottom: 20,
              }}
            >
              Comprendre les SCPI en profondeur
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              Ce blog a pour objectif de répondre aux questions que se posent
              les épargnants avant, pendant et après un investissement en SCPI.
              Les sujets abordés couvrent l'ensemble du cycle de vie d'un
              placement pierre-papier : de la compréhension du mécanisme de base
              jusqu'à la fiscalité, en passant par les stratégies de financement
              à crédit, les arbitrages entre immobilier direct et SCPI, et les
              points de vigilance liés à la revente et à la liquidité.
            </p>
            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Chaque article a été rédigé dans une logique pédagogique et
              indépendante, sans référence à une société de gestion ou à un
              produit spécifique. L'objectif n'est pas de promouvoir un
              investissement particulier, mais de permettre à chaque lecteur de
              construire une analyse plus solide avant de consulter un
              professionnel ou d'utiliser nos outils interactifs.
            </p>
            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Les SCPI sont des placements dont la lecture nécessite de comprendre
              simultanément plusieurs dimensions : la performance brute affichée
              n'est pas le seul critère. Il faut également évaluer l'impact de
              la{" "}
              <Link
                href="/fiscalite"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                fiscalité des SCPI
              </Link>{" "}
              sur le rendement net, les risques de liquidité en cas de besoin
              de{" "}
              <Link
                href="/revente"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                revente de parts
              </Link>
              , les frais d'entrée qui imposent un horizon long terme, et les
              différences entre les nombreuses familles de SCPI disponibles.
            </p>
            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Ce blog vient compléter les pages guides disponibles sur ce site —
              notamment notre guide sur la{" "}
              <Link
                href="/declaration-scpi-2026"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                déclaration SCPI 2026
              </Link>
              , notre{" "}
              <Link
                href="/comparaison"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                comparateur de SCPI
              </Link>{" "}
              et notre{" "}
              <Link
                href="/scpi-credit"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                simulateur SCPI à crédit
              </Link>{" "}
              — pour offrir une lecture plurielle et accessible de ces sujets
              patrimoniaux.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionTitle
            eyebrow="Articles"
            title="Nos contenus pédagogiques sur les SCPI"
            description="Ces contenus ont vocation à répondre aux principales questions des investisseurs et à proposer une lecture claire des sujets patrimoniaux liés aux SCPI."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-4 text-slate-600">{article.excerpt}</p>
                <div className="mt-6 text-sm font-semibold text-[var(--primary)]">
                  Lire l’article
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS THÈMES PRINCIPAUX ── */}
      <section className="section" style={{ background: "#f3ecd8" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.1,
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 8,
            }}
          >
            Nos thèmes principaux
          </h2>
          <p className="mb-8 text-[18px] leading-8 text-slate-700">
            Chaque thème ci-dessous renvoie à une page guide dédiée du site,
            conçue pour approfondir le sujet de manière structurée et complète.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="card"
              style={{ borderRadius: 24, padding: 32, background: "white" }}
            >
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Fiscalité des SCPI
              </h3>
              <p className="mb-4 text-[16px] leading-7 text-slate-600">
                Les revenus de SCPI sont soumis au barème progressif de l'impôt
                sur le revenu et aux prélèvements sociaux de 17,2 %. Le régime
                applicable (micro-foncier ou réel) dépend du montant perçu et
                du mode de détention. Les SCPI investissant hors de France
                peuvent bénéficier de conventions fiscales spécifiques.
              </p>
              <Link
                href="/fiscalite"
                className="text-sm font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                Guide complet fiscalité SCPI →
              </Link>
            </div>

            <div
              className="card"
              style={{ borderRadius: 24, padding: 32, background: "white" }}
            >
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Déclaration SCPI 2026
              </h3>
              <p className="mb-4 text-[16px] leading-7 text-slate-600">
                Chaque année, les associés reçoivent un document fiscal (IFU)
                de leur société de gestion précisant les montants à reporter en
                déclaration. Les formulaires 2042, 2044 et 2047 peuvent être
                concernés selon la nature et l'origine géographique des revenus.
              </p>
              <Link
                href="/declaration-scpi-2026"
                className="text-sm font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                Guide déclaration SCPI 2026 →
              </Link>
            </div>

            <div
              className="card"
              style={{ borderRadius: 24, padding: 32, background: "white" }}
            >
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Revente et liquidité
              </h3>
              <p className="mb-4 text-[16px] leading-7 text-slate-600">
                La revente de parts de SCPI n'est ni immédiate ni garantie. Les
                délais varient selon le type de SCPI et les conditions du
                marché. Des risques de blocage temporaire existent en période de
                tensions. La plus-value éventuelle est soumise au régime des
                plus-values immobilières.
              </p>
              <Link
                href="/revente"
                className="text-sm font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                Guide revente de parts SCPI →
              </Link>
            </div>

            <div
              className="card"
              style={{ borderRadius: 24, padding: 32, background: "white" }}
            >
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                SCPI à crédit
              </h3>
              <p className="mb-4 text-[16px] leading-7 text-slate-600">
                L'investissement à crédit permet d'utiliser l'effet de levier
                et de déduire les intérêts d'emprunt des revenus fonciers en
                régime réel. Le simulateur disponible sur ce site permet
                d'estimer l'effort d'épargne mensuel et les revenus à terme
                une fois le crédit remboursé.
              </p>
              <Link
                href="/scpi-credit"
                className="text-sm font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                Simulateur SCPI à crédit →
              </Link>
            </div>

            <div
              className="card"
              style={{ borderRadius: 24, padding: 32, background: "white" }}
            >
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Comparer les SCPI
              </h3>
              <p className="mb-4 text-[16px] leading-7 text-slate-600">
                Une comparaison pertinente ne se limite pas au taux de
                distribution. Il faut analyser le taux d'occupation financier,
                la valeur de reconstitution, la stratégie géographique et
                sectorielle, la taille de la collecte et la solidité de la
                société de gestion. Notre comparateur permet de visualiser ces
                critères côte à côte.
              </p>
              <Link
                href="/comparaison"
                className="text-sm font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                Accéder au comparateur SCPI →
              </Link>
            </div>

            <div
              className="card"
              style={{ borderRadius: 24, padding: 32, background: "white" }}
            >
              <h3 className="mb-3 text-xl font-bold text-[var(--primary)]">
                Avantages des SCPI
              </h3>
              <p className="mb-4 text-[16px] leading-7 text-slate-600">
                Diversification immédiate sur plusieurs actifs professionnels,
                gestion entièrement déléguée à une société agréée AMF, ticket
                d'entrée progressif, revenus potentiels réguliers et protection
                partielle contre l'inflation via l'indexation des loyers
                commerciaux : les atouts des SCPI sont multiples, à condition
                de bien comprendre les risques associés.
              </p>
              <Link
                href="/avantages"
                className="text-sm font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                Guide avantages des SCPI →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAGES ESSENTIELLES ── */}
      <section className="section" style={{ background: "#eaf0fb" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 8,
            }}
          >
            Pages essentielles sur les SCPI
          </h2>
          <p className="mb-6 text-[17px] leading-7 text-slate-600">
            Pour aller plus loin, retrouvez nos guides thématiques sur la fiscalité, la déclaration et l’investissement à crédit.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            <Link
              href="/revente"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Revente de parts SCPI →
            </Link>
            <Link
              href="/scpi-credit"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              SCPI à crédit →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}