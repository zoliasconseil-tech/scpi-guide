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