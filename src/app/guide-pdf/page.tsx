import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Guide SCPI gratuit : comprendre avant d'investir",
  description:
    "Téléchargez un guide SCPI gratuit pour comprendre le fonctionnement, les avantages, la fiscalité, la revente, les risques et les critères de choix.",
  alternates: {
    canonical: "https://www.scpi-gouv.org/guide-pdf",
  },
};

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

      {/* ── À QUI S'ADRESSE CE GUIDE ── */}
      <section className="section-tight">
        <div className="container-site grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
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
              À qui s'adresse ce guide ?
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              Ce guide s'adresse à tout épargnant souhaitant comprendre les
              fondamentaux des SCPI avant de prendre toute décision patrimoniale.
              Il a été conçu pour être utile aussi bien aux personnes qui
              découvrent la pierre-papier pour la première fois qu'à celles qui
              souhaitent consolider leurs connaissances avant de consulter un
              conseiller ou de comparer plusieurs véhicules d'investissement.
            </p>
            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Il est particulièrement adapté aux profils suivants :
            </p>
            <ul className="mt-4 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-2">
                Les épargnants qui entendent parler des SCPI pour la première
                fois et souhaitent comprendre comment ce type de placement
                fonctionne concrètement avant d'aller plus loin.
              </li>
              <li className="mb-2">
                Les investisseurs immobiliers qui s'interrogent sur les
                différences entre l'immobilier locatif classique et la
                pierre-papier mutualisée.
              </li>
              <li className="mb-2">
                Ceux qui souhaitent mieux comprendre la{" "}
                <Link
                  href="/fiscalite"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  fiscalité des SCPI
                </Link>{" "}
                avant d'évaluer l'impact sur leur situation personnelle.
              </li>
              <li className="mb-2">
                Les personnes qui préparent une consultation avec un conseiller
                en gestion de patrimoine et souhaitent arriver avec une base
                plus solide.
              </li>
              <li>
                Ceux qui envisagent une{" "}
                <Link
                  href="/declaration-scpi-2026"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  déclaration SCPI 2026
                </Link>{" "}
                ou un achat à crédit et veulent comprendre les mécanismes
                sous-jacents.
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
            <h3
              style={{
                color: "var(--primary)",
                fontSize: "clamp(24px, 3vw, 36px)",
                lineHeight: 1.2,
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Pourquoi lire ce guide avant d'investir ?
            </h3>
            <p className="text-[17px] leading-8 text-slate-800">
              Investir en SCPI sans avoir compris les mécanismes de base, c'est
              prendre un risque inutile. Le rendement affiché n'est pas le seul
              critère : il faut aussi comprendre le taux d'occupation financier,
              le délai de jouissance, les frais de souscription, la valeur de
              reconstitution et les conditions de revente.
            </p>
            <p className="mt-5 text-[17px] leading-8 text-slate-800">
              Ce guide vous donne les clés pour lire correctement ces informations
              et poser les bonnes questions avant toute souscription. Deux SCPI
              affichant un rendement similaire peuvent présenter des profils de
              risque très différents selon leur stratégie géographique et leur
              taux d'occupation.
            </p>
            <p className="mt-5 text-[17px] leading-8 text-slate-800">
              Pour aller plus loin, utilisez notre{" "}
              <Link
                href="/comparaison"
                className="font-semibold text-slate-900 underline underline-offset-2"
              >
                outil de comparaison de SCPI
              </Link>{" "}
              ou notre{" "}
              <Link
                href="/scpi-credit"
                className="font-semibold text-slate-900 underline underline-offset-2"
              >
                simulateur SCPI à crédit
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── CE QUE LE GUIDE NE REMPLACE PAS ── */}
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
              Ce que ce guide ne remplace pas
            </h2>
            <p className="text-[18px] leading-8 text-slate-700">
              Ce document est un support pédagogique et informatif. Il ne
              constitue pas un conseil en investissement, une recommandation
              fiscale personnalisée, ni une incitation à souscrire un produit
              financier particulier. Les SCPI comportent des risques réels —
              notamment un risque de perte en capital et l'absence de garantie
              sur les revenus distribués — qui doivent être pleinement intégrés
              dans toute analyse patrimoniale.
            </p>
            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Avant de prendre toute décision, il est essentiel de consulter un
              conseiller en gestion de patrimoine ou un professionnel agréé,
              capable d'évaluer votre situation fiscale, votre horizon
              d'investissement, votre besoin de liquidité et vos objectifs. Ce
              guide peut vous aider à préparer cette consultation en vous
              permettant d'arriver avec une vision plus structurée de vos
              questions.
            </p>
            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Pour compléter votre réflexion, consultez notre page dédiée à la{" "}
              <Link
                href="/revente"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                revente de parts de SCPI
              </Link>
              , qui détaille les mécanismes de liquidité et les risques de
              blocage à connaître avant toute souscription.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.1,
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 24,
            }}
          >
            Questions fréquentes sur le guide
          </h2>
          <div className="space-y-4">
            <details className="rounded-[22px] border border-[var(--border)] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition">
              <summary
                className="cursor-pointer list-none pr-8 text-xl font-bold text-slate-900"
                style={{ lineHeight: 1.4 }}
              >
                Le guide SCPI est-il vraiment gratuit ?
              </summary>
              <p className="mt-4 text-[17px] leading-8 text-slate-600">
                Oui. Ce guide est mis à disposition gratuitement après
                remplissage d'un formulaire simple. Il n'y a aucun abonnement,
                aucun paiement et aucune obligation de souscription. L'objectif
                est uniquement de diffuser un contenu pédagogique utile pour
                toute personne souhaitant mieux comprendre les SCPI.
              </p>
            </details>
            <details className="rounded-[22px] border border-[var(--border)] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition">
              <summary
                className="cursor-pointer list-none pr-8 text-xl font-bold text-slate-900"
                style={{ lineHeight: 1.4 }}
              >
                Ce guide remplace-t-il un conseil personnalisé ?
              </summary>
              <p className="mt-4 text-[17px] leading-8 text-slate-600">
                Non. Ce guide est informatif, pas consultatif. Il n'analyse pas
                votre situation personnelle, votre tranche marginale
                d'imposition ni vos objectifs patrimoniaux spécifiques. Il peut
                en revanche vous aider à préparer une rencontre avec un
                conseiller en gestion de patrimoine en posant les bonnes
                questions sur les mécanismes essentiels.
              </p>
            </details>
            <details className="rounded-[22px] border border-[var(--border)] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition">
              <summary
                className="cursor-pointer list-none pr-8 text-xl font-bold text-slate-900"
                style={{ lineHeight: 1.4 }}
              >
                À qui ce guide s'adresse-t-il réellement ?
              </summary>
              <p className="mt-4 text-[17px] leading-8 text-slate-600">
                À tout épargnant curieux — qu'il soit totalement novice ou
                déjà familier avec l'immobilier locatif. Le guide est
                volontairement rédigé pour être accessible, sans supposer de
                connaissances financières avancées. Il convient aussi aux
                investisseurs confirmés qui souhaitent revoir les fondamentaux
                avant de comparer plusieurs solutions patrimoniales.
              </p>
            </details>
            <details className="rounded-[22px] border border-[var(--border)] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition">
              <summary
                className="cursor-pointer list-none pr-8 text-xl font-bold text-slate-900"
                style={{ lineHeight: 1.4 }}
              >
                Quels sujets sont abordés dans le guide ?
              </summary>
              <p className="mt-4 text-[17px] leading-8 text-slate-600">
                Le guide couvre : le fonctionnement général d'une SCPI, les
                avantages patrimoniaux et les risques à ne pas ignorer, les
                mécanismes de fiscalité sur les revenus fonciers, les
                conditions et délais de revente, les critères pour comparer
                plusieurs SCPI, les modes de détention (direct, assurance-vie,
                démembrement) et les points à vérifier avant toute
                souscription.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── GUIDES COMPLÉMENTAIRES ── */}
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
            Guides complémentaires
          </h2>
          <p className="mb-6 text-[17px] leading-7 text-slate-600">
            Pour approfondir votre réflexion sur les SCPI, consultez nos pages thématiques.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/fiscalite"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Fiscalité des SCPI →
            </Link>
            <Link
              href="/avantages"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Avantages des SCPI →
            </Link>
            <Link
              href="/declaration-scpi-2026"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Déclaration SCPI 2026 →
            </Link>
            <Link
              href="/comparaison"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Comparer les SCPI →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}