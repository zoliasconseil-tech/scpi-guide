import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fiscalité des SCPI en 2026 : guide complet et indépendant",
  description:
    "Tout comprendre sur la fiscalité des SCPI : revenus fonciers, impôt sur le revenu, prélèvements sociaux 17,2 %, IFI, plus-values, démembrement, assurance-vie, SCPI européennes et intérêts d'emprunt déductibles. Guide 2026.",
  alternates: {
    canonical: "https://scpi-gouv.org/fiscalite",
  },
  openGraph: {
    title: "Fiscalité des SCPI en 2026 : guide complet et indépendant",
    description:
      "Revenus fonciers, IFI, plus-values, assurance-vie, démembrement, SCPI européennes et intérêts d'emprunt — tous les régimes fiscaux des SCPI expliqués clairement.",
    url: "https://scpi-gouv.org/fiscalite",
    siteName: "SCPI Gouv",
    locale: "fr_FR",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Les revenus SCPI augmentent-ils ma tranche marginale d'imposition ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les revenus fonciers issus de SCPI s'ajoutent à vos autres revenus et sont imposés au barème progressif de l'IR. Ils peuvent faire passer une partie de vos revenus dans une tranche marginale d'imposition supérieure, selon le montant investi et votre situation fiscale.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on avoir un déficit foncier avec des SCPI ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, en régime réel, si les charges déductibles (dont les intérêts d'emprunt) dépassent les revenus fonciers perçus, un déficit foncier se forme. Il peut être imputé sur les autres revenus fonciers du foyer, voire sur le revenu global dans la limite de 10 700 € par an (hors intérêts d'emprunt).",
      },
    },
    {
      "@type": "Question",
      name: "La SCPI paie-t-elle des impôts ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. La SCPI est fiscalement transparente : elle ne paie pas d'impôt. Ce sont les associés qui sont imposés directement sur leur quote-part de résultats — dans les catégories revenus fonciers, revenus financiers ou plus-values immobilières selon la nature des distributions.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la fiscalité en cas de donation ou succession de parts de SCPI ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les parts de SCPI sont transmises comme des valeurs mobilières, avec les abattements classiques (100 000 € en ligne directe tous les 15 ans). La valeur à retenir est généralement le prix de souscription ou la valeur de retrait selon les SCPI. Un notaire peut être nécessaire selon le montant.",
      },
    },
    {
      "@type": "Question",
      name: "Les SCPI résidentielles ou thématiques ont-elles une fiscalité différente ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, le régime fiscal est identique pour toutes les SCPI de droit français : revenus fonciers au barème IR + prélèvements sociaux 17,2 %, quelle que soit la stratégie immobilière de la SCPI.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on déduire les frais de souscription SCPI de ses revenus imposables ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, les frais de souscription ne sont pas déductibles des revenus fonciers annuels. Ils s'ajoutent en revanche au prix d'acquisition pour le calcul de la plus-value immobilière lors de la revente des parts, ce qui réduit la plus-value imposable.",
      },
    },
    {
      "@type": "Question",
      name: "Les prélèvements sociaux à 17,2 % s'appliquent-ils aux revenus de SCPI européennes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans la majorité des cas, les revenus de source étrangère issus de SCPI européennes ne sont pas soumis aux prélèvements sociaux français à 17,2 %, grâce aux conventions fiscales bilatérales. Le traitement exact dépend de chaque convention et de la situation individuelle. Une vérification s'impose avant toute décision.",
      },
    },
    {
      "@type": "Question",
      name: "Comment sont imposées les parts de SCPI détenues dans une assurance-vie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans une assurance-vie, les revenus SCPI ne sont pas imposés annuellement. La fiscalité s'applique uniquement au moment des rachats, selon les règles classiques de l'assurance-vie : abattement après 8 ans, PFU 7,5 % ou barème sur option. Aucun prélèvement social annuel sur les revenus capitalisés.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la plus-value imposable si je vends mes parts après 10 ans ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Après 10 ans, des abattements progressifs s'appliquent. Pour l'IR, l'abattement est de 6 % par an à partir de la 6e année (soit 30 % après 10 ans). Pour les prélèvements sociaux, il est de 1,65 % par an à partir de la 6e année. La plus-value nette restante est imposée à 19 % (IR) + 17,2 % (PS) sur la base abattue.",
      },
    },
    {
      "@type": "Question",
      name: "Comment les parts de SCPI sont-elles évaluées pour l'IFI ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque société de gestion communique annuellement la valeur IFI par part, correspondant à la fraction représentative d'actifs immobiliers nets. Il suffit de multiplier ce montant par le nombre de parts au 1er janvier. En nue-propriété, les parts sont exclues de l'assiette IFI du nu-propriétaire.",
      },
    },
  ],
};

type SectionTone = "white" | "blue" | "cream";

function Section({
  tone = "white",
  children,
  className = "",
}: {
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
}) {
  const tones = {
    white: "bg-white text-slate-900",
    blue: "bg-[#eaf1fb] text-slate-900",
    cream: "bg-[#f8f0df] text-slate-900",
  };

  return <section className={`${tones[tone]} ${className}`}>{children}</section>;
}

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-site ${className}`}>{children}</div>;
}

function Title({
  children,
  accent,
  center = false,
}: {
  children: ReactNode;
  accent?: string;
  center?: boolean;
}) {
  const content =
    typeof children === "string" && accent
      ? children.replace(accent, `__ACCENT__${accent}__ACCENT__`)
      : children;

  if (typeof content !== "string") {
    return (
      <h2
        className={`text-4xl font-bold leading-tight tracking-tight text-[#1f3b77] sm:text-5xl ${
          center ? "text-center" : ""
        }`}
      >
        {children}
      </h2>
    );
  }

  const parts = content.split("__ACCENT__");

  return (
    <h2
      className={`text-4xl font-bold leading-tight tracking-tight text-[#1f3b77] sm:text-5xl ${
        center ? "text-center" : ""
      }`}
    >
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span key={`${part}-${index}`} className="text-[#4d7fd6]">
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        )
      )}
    </h2>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf1fb] text-2xl text-[#4d7fd6]">
        <span aria-hidden="true">◌</span>
      </div>
      <h3 className="text-2xl font-bold uppercase tracking-tight text-[#4d7fd6]">
        {title}
      </h3>
      <div className="mt-5 text-lg leading-9 text-slate-700">{children}</div>
    </div>
  );
}

function BluePanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[28px] bg-[#4d7fd6] p-8 text-white shadow-[0_16px_40px_rgba(31,59,119,0.18)] sm:p-10">
      <h3 className="text-3xl font-bold leading-tight tracking-tight">{title}</h3>
      <div className="mt-6 text-lg leading-9 text-white/95">{children}</div>
    </div>
  );
}

function BeigePanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[28px] bg-[#f5c455] p-8 text-[#1f3b77] shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
      <h3 className="text-3xl font-bold leading-tight tracking-tight">{title}</h3>
      <div className="mt-6 text-lg leading-9">{children}</div>
    </div>
  );
}

function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <table className="min-w-full text-left">
        <thead className="bg-[#eaf1fb] text-[#1f3b77]">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-5 text-lg font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-700">
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-slate-200">
              {row.map((cell, cellIndex) => (
                <td key={`${index}-${cellIndex}`} className="px-6 py-5 text-base leading-8 sm:text-lg">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FiscalitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <Section tone="blue" className="relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-white [clip-path:polygon(0_35%,100%_0,100%_100%,0_100%)]" />
        <Container className="relative z-10 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1f3b77] sm:text-5xl">
                <span className="text-[#4d7fd6]">Fiscalité des SCPI</span> en
                2026 : guide complet et indépendant
              </h1>

              <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
                <p>
                  Bienvenue dans la section{" "}
                  <strong className="text-[#1f3b77]">Fiscalité des SCPI</strong>{" "}
                  de scpi-gouv.org. Cette page regroupe{" "}
                  <strong className="text-[#1f3b77]">
                    toutes les informations officielles et actualisées au
                    1er janvier 2026
                  </strong>{" "}
                  sur l'imposition des Sociétés Civiles de Placement Immobilier
                  (SCPI). Qu'il s'agisse de comprendre comment sont imposés vos
                  revenus fonciers, d'évaluer l'impact des prélèvements sociaux
                  à 17,2 % sur votre rendement net, de choisir entre le régime
                  micro-foncier et le régime réel, ou encore d'optimiser votre
                  détention via l'assurance-vie, le démembrement ou un
                  investissement à crédit, vous trouverez ici une réponse
                  claire et pédagogique.
                </p>

                <p>
                  La fiscalité des SCPI varie significativement selon votre{" "}
                  <strong className="text-[#1f3b77]">
                    tranche marginale d'imposition (TMI)
                  </strong>
                  , votre mode de détention (direct, assurance-vie, démembrement)
                  et la nature des actifs détenus par la SCPI (France ou Europe).
                  Cette page couvre l'ensemble de ces régimes pour vous permettre
                  d'identifier celui qui correspond le mieux à votre situation.
                </p>

                <p>
                  Toutes les explications sont basées sur le Code général des
                  impôts (CGI), les bulletins officiels de la DGFiP, les
                  documents des sociétés de gestion et les données de l'ASPIM.
                  La fiscalité des SCPI est une{" "}
                  <strong className="text-[#1f3b77]">
                    fiscalité de transparence
                  </strong>{" "}
                  : la SCPI elle-même ne paie pas d'impôt ; ce sont les associés
                  qui sont imposés directement sur leur quote-part de résultats.
                </p>

                <p>
                  <strong className="text-[#1f3b77]">Avertissement :</strong>{" "}
                  les informations ci-dessous sont générales et ne remplacent pas
                  un conseil fiscal personnalisé. Les règles fiscales peuvent
                  évoluer et dépendent de votre situation individuelle. Consultez
                  toujours votre conseiller fiscal ou un conseiller en gestion de
                  patrimoine avant de prendre une décision d'investissement.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#1f3b77] p-8 text-white shadow-[0_18px_40px_rgba(31,59,119,0.25)] sm:p-10">
              <div className="mx-auto mb-6 h-6 w-16 rounded-full bg-[#f5c455]" />
              <h2 className="text-center text-4xl font-bold leading-tight tracking-tight">
                Comprendre votre fiscalité SCPI en quelques minutes
              </h2>

              <p className="mt-6 text-center text-2xl font-semibold text-[#f5c455]">
                Revenus, IFI, plus-values et déclaration
              </p>

              <p className="mt-4 text-center text-lg leading-8 text-white/90">
                Une page claire pour identifier les bons régimes, éviter les
                erreurs fréquentes et mieux lire votre IFU.
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  href="/guide-pdf"
                  className="block rounded-full bg-[#f5c455] px-6 py-4 text-center text-xl font-bold text-[#1f3b77] transition hover:opacity-95"
                >
                  Télécharger le guide PDF
                </Link>
                <Link
                  href="/scpi-credit"
                  className="block rounded-full border border-white/20 px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-white/10"
                >
                  Voir aussi la simulation crédit
                </Link>
              </div>

              <p className="mt-6 text-sm leading-7 text-white/70">
                Contenu pédagogique, indépendant et rédigé pour être simple à
                utiliser. Aucun conseil fiscal personnalisé.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3 InfoCards + bannière ── */}
      <Section tone="white">
        <Container className="py-4 sm:py-8">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard title="Revenus">
              <p>
                Distinguer les{" "}
                <strong className="text-[#1f3b77]">revenus fonciers</strong>,
                les{" "}
                <strong className="text-[#1f3b77]">revenus financiers</strong>{" "}
                et les{" "}
                <strong className="text-[#1f3b77]">
                  plus-values immobilières
                </strong>{" "}
                — trois catégories avec des régimes fiscaux distincts.
              </p>
            </InfoCard>

            <InfoCard title="Régimes">
              <p>
                Comprendre la différence entre{" "}
                <strong className="text-[#1f3b77]">micro-foncier</strong> et{" "}
                <strong className="text-[#1f3b77]">régime réel</strong>, et
                savoir quand chacun s'applique selon votre niveau de revenus et
                de charges déductibles.
              </p>
            </InfoCard>

            <InfoCard title="Déclaration">
              <p>
                Retrouver les{" "}
                <strong className="text-[#1f3b77]">cases à remplir</strong>,
                les formulaires utiles (2042, 2044, 2047) et les principales
                erreurs à éviter dans votre déclaration annuelle.
              </p>
            </InfoCard>
          </div>

          <div className="mt-8 rounded-[24px] bg-[#1f3b77] px-8 py-7 text-xl font-semibold text-white shadow-[0_10px_25px_rgba(31,59,119,0.18)] sm:flex sm:items-center sm:justify-between sm:text-2xl">
            <span>
              Vous cherchez une réponse rapide ?{" "}
              <span className="text-[#f5c455]">
                Consultez les points clés ci-dessous :
              </span>
            </span>
            <span className="mt-3 block text-3xl text-[#f5c455] sm:mt-0">
              ⌄
            </span>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 1 : 3 catégories ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="trois grandes catégories">
            1. Les trois grandes catégories de revenus imposables dans une SCPI
          </Title>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              Les distributions d'une SCPI se décomposent en trois types de
              revenus, chacun avec sa propre fiscalité. Cette distinction est
              fondamentale pour comprendre comment lire votre IFU (Imprimé
              Fiscal Unique) et remplir correctement votre déclaration de
              revenus. La grande majorité des distributions — entre 85 % et
              95 % selon les SCPI — correspond à des revenus fonciers issus
              des loyers encaissés sur les actifs immobiliers détenus.
            </p>
          </div>

          <div className="mt-10">
            <SimpleTable
              headers={[
                "Type de revenu",
                "Origine",
                "Part approximative",
                "Fiscalité applicable en 2026",
              ]}
              rows={[
                [
                  "Revenus fonciers",
                  "Loyers des immeubles",
                  "85 à 95 %",
                  "Barème IR + prélèvements sociaux 17,2 %",
                ],
                [
                  "Revenus financiers",
                  "Intérêts de la trésorerie placée",
                  "2 à 8 %",
                  "PFU 31,4 % ou barème sur option",
                ],
                [
                  "Plus-values immobilières",
                  "Cessions d'immeubles par la SCPI",
                  "Ponctuel (lors des ventes)",
                  "Régime des plus-values immobilières des particuliers",
                ],
              ]}
            />
          </div>

          <p className="mt-8 text-lg leading-9 text-slate-700 sm:text-xl">
            <strong className="text-[#1f3b77]">Source :</strong> IFU fourni
            par chaque société de gestion (formulaire n°2561). Ce document
            est indispensable pour compléter votre déclaration fiscale annuelle.
          </p>
        </Container>
      </Section>

      {/* ── SECTION 2 : Revenus fonciers ── */}
      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <BluePanel title="2. Imposition des revenus fonciers (la part principale)">
              <p>
                Les loyers nets perçus via la SCPI sont imposés dans la
                catégorie{" "}
                <strong>revenus fonciers</strong>.
              </p>

              <p className="mt-5">
                <strong>a) Régime micro-foncier</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Condition : revenus fonciers bruts annuels inférieurs à{" "}
                  <strong>15 000 €</strong> pour l'ensemble du foyer fiscal et
                  absence de dispositif fiscal particulier.
                </li>
                <li>
                  Fonctionnement : abattement forfaitaire automatique de 30 %.
                </li>
                <li>
                  Vous déclarez uniquement le montant brut indiqué sur l'IFU.
                </li>
                <li>Case à remplir : 4BE du formulaire 2042.</li>
                <li>Exemple : 10 000 € bruts → 7 000 € imposables.</li>
              </ul>

              <p className="mt-6">
                <strong>b) Régime réel</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Obligatoire si revenus &gt; 15 000 € ou si vous choisissez
                  ce régime.
                </li>
                <li>
                  Déduction des charges réelles : frais de gestion, intérêts
                  d'emprunt, travaux, assurances, provisions, comptabilité, etc.
                </li>
                <li>
                  Annexe à remplir : 2044 ou 2044 spéciale selon les cas.
                </li>
                <li>
                  Les montants à reporter proviennent directement de l'IFU :
                  revenus bruts, charges déductibles et résultat net.
                </li>
              </ul>

              <p className="mt-6">
                <strong>Prélèvements sociaux :</strong> 17,2 % appliqués sur
                le revenu net foncier imposable.
              </p>

              <p className="mt-4">
                <strong>Tranche marginale d'imposition (TMI) :</strong> le
                revenu net s'ajoute à vos autres revenus et est imposé selon le
                barème progressif de l'IR (11 %, 30 %, 41 % ou 45 % selon votre
                situation).
              </p>
            </BluePanel>

            <div className="space-y-6">
              <InfoCard title="Micro-foncier">
                <p>
                  Solution la plus simple quand les conditions sont réunies,
                  avec un abattement forfaitaire de 30 %. Adapté aux investisseurs
                  avec peu ou pas de charges déductibles.
                </p>
              </InfoCard>

              <InfoCard title="Régime réel">
                <p>
                  Souvent plus avantageux lorsqu'il existe des charges
                  déductibles importantes ou un financement à crédit. Les
                  intérêts d'emprunt sont déductibles uniquement dans ce régime.
                </p>
              </InfoCard>

              <InfoCard title="Point pratique">
                <p>
                  L'IFU reste votre document de base pour identifier les montants
                  à reporter dans votre déclaration. Conservez-le soigneusement
                  jusqu'à la fin du délai de reprise fiscale (3 ans en général).
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 3 + 4 : Revenus financiers + IFI ── */}
      <Section tone="blue">
        <Container className="pb-16 sm:pb-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <BluePanel title="3. Imposition des revenus financiers">
              <p>
                La part de trésorerie placée par la SCPI génère des intérêts
                imposés au{" "}
                <strong>Prélèvement Forfaitaire Unique</strong> (PFU ou
                « flat tax ») de <strong>31,4 %</strong> (12,8 % IR + 17,2 %
                PS + éventuelle contribution additionnelle).
              </p>

              <p className="mt-5">
                Vous pouvez opter pour le barème progressif de l'IR si cela est
                plus favorable selon votre TMI — cette option est globale et
                s'applique à l'ensemble des revenus du capital de votre foyer.
              </p>

              <p className="mt-5">
                Ces revenus sont généralement indiqués dans une rubrique
                spécifique de l'IFU et reportés en case 2TR ou équivalente du
                formulaire 2042.
              </p>
            </BluePanel>

            <BluePanel title="4. L'Impôt sur la Fortune Immobilière (IFI) en 2026">
              <p>
                Les parts de SCPI entrent dans l'assiette de l'IFI pour la{" "}
                <strong>
                  fraction représentative d'actifs immobiliers nets
                </strong>
                .
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-6">
                <li>
                  Seule la valeur immobilière est taxable, après retraitement
                  éventuel de la part financière.
                </li>
                <li>
                  La société de gestion communique chaque année la valeur IFI
                  par part.
                </li>
                <li>
                  Vous multipliez ce montant par le nombre de parts détenues au
                  1er janvier 2026.
                </li>
                <li>
                  Seuil d'imposition : patrimoine immobilier net supérieur à{" "}
                  <strong>1,3 million d'euros</strong>.
                </li>
                <li>Barème progressif de 0,5 % à 1,5 %.</li>
              </ul>

              <p className="mt-6">
                <strong>Cas particulier du démembrement :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Nu-propriétaire : les parts en nue-propriété ne sont pas
                  soumises à l'IFI pendant toute la durée du démembrement.
                </li>
                <li>
                  Usufruitier : il déclare la valeur totale de la pleine
                  propriété à l'IFI.
                </li>
              </ul>
            </BluePanel>
          </div>
        </Container>
      </Section>

      {/* ── NOUVELLE SECTION : Impact sur le rendement net ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="rendement net">
            Quel est l'impact réel de la fiscalité sur votre rendement net ?
          </Title>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              Le Taux de Distribution (TD) affiché par une SCPI est un
              rendement <strong className="text-[#1f3b77]">brut</strong>, avant
              déduction de l'impôt sur le revenu et des prélèvements sociaux.
              Pour évaluer le rendement que vous percevrez effectivement — le
              rendement net d'impôt — il est indispensable d'intégrer votre
              tranche marginale d'imposition (TMI) et votre mode de détention.
            </p>

            <p>
              À titre d'illustration indicative, pour une SCPI distribuant
              5 % bruts avec des revenus principalement fonciers, en régime
              micro-foncier (abattement 30 %) :
            </p>
          </div>

          <div className="mt-10">
            <SimpleTable
              headers={[
                "TMI",
                "Rendement brut",
                "IR estimé (sur 70 % du brut)",
                "PS 17,2 % (sur 100 %)",
                "Rendement net estimé",
              ]}
              rows={[
                ["11 %", "5,00 %", "0,39 %", "0,86 %", "≈ 3,75 %"],
                ["30 %", "5,00 %", "1,05 %", "0,86 %", "≈ 3,09 %"],
                ["41 %", "5,00 %", "1,44 %", "0,86 %", "≈ 2,70 %"],
                ["45 %", "5,00 %", "1,58 %", "0,86 %", "≈ 2,56 %"],
              ]}
            />
          </div>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              <strong className="text-[#1f3b77]">Important :</strong> ces
              chiffres sont indicatifs et supposent un régime micro-foncier,
              des revenus 100 % fonciers et aucune charge déductible. Ils
              varient selon la composition réelle des distributions (fonciers
              vs financiers), le régime applicable et la situation personnelle
              de chaque investisseur. Les performances passées et les revenus
              ne sont jamais garantis.
            </p>

            <p>
              Cet impact fiscal souligne l'importance du choix du mode de
              détention. Pour les TMI élevées (41 % ou 45 %), des alternatives
              comme la{" "}
              <strong className="text-[#1f3b77]">détention en assurance-vie</strong>
              , le{" "}
              <strong className="text-[#1f3b77]">démembrement de propriété</strong>{" "}
              ou les{" "}
              <strong className="text-[#1f3b77]">SCPI européennes</strong>{" "}
              peuvent, selon la situation, réduire la pression fiscale et
              améliorer le rendement net. Ces stratégies sont détaillées
              ci-dessous. Pour une vue d'ensemble des bénéfices de
              l'investissement SCPI, consultez notre page{" "}
              <Link
                href="/avantages"
                className="font-semibold text-[#1f3b77] underline underline-offset-2"
              >
                avantages des SCPI
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5 : Plus-values ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="plus-values">
            5. Fiscalité des plus-values à la revente des parts de SCPI
          </Title>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              Lorsque vous vendez vos parts de SCPI, la plus-value réalisée est
              imposée selon le{" "}
              <strong className="text-[#1f3b77]">
                régime des plus-values immobilières des particuliers
              </strong>
              . Ce régime est différent de celui des plus-values mobilières
              (actions, obligations) et prévoit des abattements progressifs
              selon la durée de détention, avec une exonération totale à terme.
              En cas de moins-value, aucun impôt n'est dû mais la perte n'est
              pas déductible d'autres revenus.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Impôt sur le revenu : 19 %</li>
              <li>Prélèvements sociaux : 17,2 %</li>
              <li>Total brut avant abattements : 36,2 %</li>
            </ul>

            <p>
              <strong className="text-[#1f3b77]">
                Abattements pour durée de détention :
              </strong>
            </p>
          </div>

          <div className="mt-10">
            <SimpleTable
              headers={[
                "Durée de détention",
                "Abattement IR (19 %)",
                "Abattement PS (17,2 %)",
              ]}
              rows={[
                ["Moins de 6 ans", "0 %", "0 %"],
                [
                  "6 à 21 ans",
                  "Progressif (6 % par an)",
                  "Progressif (1,65 % par an)",
                ],
                ["22 ans et plus", "Exonération totale IR", "Abattement partiel (9 % par an)"],
                ["30 ans et plus", "Exonération totale IR", "Exonération totale PS"],
              ]}
            />
          </div>

          <div className="mt-8 space-y-5 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              <strong className="text-[#1f3b77]">Note importante :</strong> la
              loi de finances 2026 prévoit un raccourcissement possible de
              l'exonération IR à 17 ans, mais cette mesure entre en vigueur au
              1er janvier 2027. Pour les cessions réalisées en 2026, le délai
              reste donc de 22 ans (IR) / 30 ans (PS).
            </p>

            <p>
              <strong className="text-[#1f3b77]">Surtaxe :</strong> si la
              plus-value brute dépasse 50 000 €, une surtaxe de 2 % à 6 %
              s'applique en plus.
            </p>

            <p>
              <strong className="text-[#1f3b77]">Prix d'acquisition :</strong>{" "}
              il inclut le prix de souscription, les frais d'entrée et les
              éventuels frais d'acquisition. La société de gestion calcule la
              plus-value et fournit le montant imposable dans l'IFU de l'année
              de cession. Pour tout comprendre sur les conditions de revente,
              consultez notre page{" "}
              <Link
                href="/revente"
                className="font-semibold text-[#1f3b77] underline underline-offset-2"
              >
                revente des parts de SCPI
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* ── NOUVELLE SECTION : Tableau comparatif modes de détention ── */}
      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <Title accent="mode de détention">
            Fiscalité des SCPI selon le mode de détention : tableau comparatif
          </Title>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              La fiscalité applicable à vos investissements SCPI dépend
              fortement du mode de détention que vous choisissez. Ce tableau
              synthétise les principaux régimes fiscaux selon cinq configurations
              courantes. Il est fourni à titre indicatif : votre situation
              personnelle peut conduire à un traitement différent. Un conseil
              patrimonial ou fiscal est recommandé avant de faire votre choix.
            </p>
          </div>

          <div className="mt-10">
            <SimpleTable
              headers={[
                "Mode de détention",
                "Fiscalité principale",
                "Points d'attention",
              ]}
              rows={[
                [
                  "SCPI en direct",
                  "Revenus fonciers au barème IR + PS 17,2 %. Régime micro-foncier ou réel selon les revenus et charges.",
                  "Imposition annuelle systématique. Impact TMI important pour les tranches hautes.",
                ],
                [
                  "SCPI via assurance-vie",
                  "Aucune imposition annuelle. Fiscalité différée au rachat (PFU ou barème, avec abattements après 8 ans).",
                  "Dépend des supports disponibles chez l'assureur. Les frais du contrat s'ajoutent aux frais SCPI.",
                ],
                [
                  "SCPI européennes (hors France)",
                  "IR français selon convention bilatérale (méthode d'exemption ou crédit d'impôt). Généralement sans PS 17,2 %.",
                  "Vérifier la convention applicable. Déclaration 2047 obligatoire. Toujours soumises à l'IFI.",
                ],
                [
                  "SCPI en nue-propriété (démembrement)",
                  "0 € d'IR et 0 € de PS pendant le démembrement. Aucun revenu perçu. Hors assiette IFI.",
                  "Aucun revenu pendant la période. Prix d'achat décoté selon la durée. Horizon 5 à 15 ans.",
                ],
                [
                  "SCPI à crédit",
                  "Régime réel obligatoire. Intérêts d'emprunt déductibles des revenus fonciers. Possible déficit foncier.",
                  "Ne fonctionne que si le rendement SCPI excède le coût net du crédit. Risque de perte en capital.",
                ],
              ]}
            />
          </div>

          <p className="mt-8 text-lg leading-9 text-slate-700 sm:text-xl">
            Utilisez notre{" "}
            <Link
              href="/comparaison"
              className="font-semibold text-[#1f3b77] underline underline-offset-2"
            >
              outil de comparaison
            </Link>{" "}
            pour analyser les SCPI disponibles selon leurs caractéristiques,
            et notre{" "}
            <Link
              href="/scpi-credit"
              className="font-semibold text-[#1f3b77] underline underline-offset-2"
            >
              simulateur crédit
            </Link>{" "}
            pour estimer l'effort d'épargne net selon votre TMI.
          </p>
        </Container>
      </Section>

      {/* ── SECTION 6 : Stratégies ── */}
      <Section tone="cream">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <BeigePanel title="6. Les stratégies d'optimisation fiscale">
              <div className="space-y-5">
                <div>
                  <p>
                    <strong>a) Le démembrement de propriété</strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>
                      Achat de la nue-propriété avec une décote selon l'âge de
                      l'usufruitier.
                    </li>
                    <li>
                      Pendant le démembrement : aucun revenu perçu, donc pas
                      d'impôt sur le revenu ni de prélèvements sociaux.
                    </li>
                    <li>Sortie de l'assiette IFI pour le nu-propriétaire.</li>
                    <li>
                      Reconstitution de la pleine propriété sans fiscalité
                      supplémentaire à l'extinction de l'usufruit.
                    </li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>
                      b) Détention en assurance-vie ou contrat de
                      capitalisation
                    </strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>
                      Revenus et plus-values capitalisés à l'intérieur du
                      contrat.
                    </li>
                    <li>Aucune imposition annuelle sur les revenus.</li>
                    <li>
                      Fiscalité au moment des rachats selon les règles de
                      l'assurance-vie.
                    </li>
                    <li>Transmission facilitée hors succession.</li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>c) Investissement à crédit</strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>
                      Intérêts d'emprunt déductibles en régime réel uniquement.
                    </li>
                    <li>
                      Effet de levier fiscal et financier, particulièrement
                      intéressant aux TMI élevées.
                    </li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>d) SCPI européennes</strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>
                      Revenus souvent exonérés de prélèvements sociaux français
                      grâce aux conventions fiscales.
                    </li>
                    <li>Crédit d'impôt possible pour l'impôt payé à l'étranger.</li>
                    <li>Toujours soumises à l'IFI sur la fraction immobilière.</li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>e) Autres enveloppes</strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>
                      Les SCPI ne sont pas éligibles au PEA ni au PEA-PME.
                    </li>
                    <li>
                      Elles peuvent être logées dans un PER avec avantage à
                      l'entrée et sortie en rente ou capital.
                    </li>
                  </ul>
                </div>
              </div>
            </BeigePanel>

            <div className="space-y-6">
              <InfoCard title="Démembrement">
                <p>
                  Solution souvent étudiée pour les profils fortement imposés
                  ou dans une logique de capitalisation patrimoniale sans besoin
                  de revenus immédiats.
                </p>
              </InfoCard>

              <InfoCard title="Assurance-vie">
                <p>
                  Permet une fiscalité différente de la détention en direct,
                  sous réserve des supports effectivement proposés par
                  l'assureur et de la durée de détention du contrat.
                </p>
              </InfoCard>

              <InfoCard title="SCPI européennes">
                <p>
                  Intéressantes sur le plan fiscal dans certains cas, mais à
                  analyser avec précision selon votre résidence fiscale et la
                  convention applicable au pays d'origine des revenus.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── NOUVELLE SECTION : SCPI en assurance-vie ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="assurance-vie">
            Fiscalité des SCPI logées dans une assurance-vie
          </Title>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
              <p>
                Détenues via un contrat d'assurance-vie, les parts de SCPI
                sont des unités de compte (UC) dont les revenus sont capitalisés
                à l'intérieur du contrat{" "}
                <strong className="text-[#1f3b77]">
                  sans imposition annuelle
                </strong>
                . La fiscalité ne s'applique qu'au moment des rachats partiels
                ou totaux.
              </p>

              <p>
                <strong className="text-[#1f3b77]">
                  Fiscalité au rachat (contrat de plus de 8 ans) :
                </strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Abattement annuel sur les gains : 4 600 € (personne seule)
                  ou 9 200 € (couple soumis à imposition commune).
                </li>
                <li>
                  Au-delà de l'abattement et jusqu'à 150 000 € de primes
                  versées : PFU de 7,5 % + PS 17,2 %.
                </li>
                <li>
                  Au-delà de 150 000 € de primes : PFU de 12,8 % + PS 17,2 %.
                </li>
                <li>
                  Option pour le barème progressif possible si plus favorable.
                </li>
              </ul>

              <p>
                <strong className="text-[#1f3b77]">En cas de décès :</strong>{" "}
                les capitaux transmis aux bénéficiaires désignés bénéficient
                d'un abattement de 152 500 € par bénéficiaire (pour les primes
                versées avant 70 ans), hors succession classique.
              </p>

              <p>
                <strong className="text-[#1f3b77]">Points de vigilance :</strong>{" "}
                l'assurance-vie ne supprime pas l'impôt, elle le diffère. Les
                frais du contrat (frais de gestion annuels de l'assureur)
                s'ajoutent aux frais propres des SCPI. La disponibilité des
                SCPI en UC dépend de chaque assureur. Les performances ne sont
                pas garanties.
              </p>
            </div>

            <div className="space-y-6">
              <InfoCard title="Avantage principal">
                <p>
                  Aucune déclaration fiscale annuelle liée aux revenus SCPI
                  dans le contrat. Pas de prélèvements sociaux sur les revenus
                  capitalisés chaque année — un gain de trésorerie significatif
                  pour les TMI élevées.
                </p>
              </InfoCard>

              <InfoCard title="À vérifier">
                <p>
                  Tous les contrats d'assurance-vie ne proposent pas de SCPI
                  en unités de compte. Vérifiez auprès de votre assureur les
                  supports disponibles et leurs conditions de souscription et
                  de rachat.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── NOUVELLE SECTION : SCPI européennes ── */}
      <Section tone="cream">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <BeigePanel title="SCPI européennes : conventions fiscales et traitement des revenus étrangers">
              <p>
                De plus en plus de SCPI investissent hors de France — Allemagne,
                Pays-Bas, Espagne, Portugal, Belgique, Irlande, etc. Ces actifs
                génèrent des revenus étrangers dont la fiscalité dépend des
                conventions bilatérales conclues entre la France et chaque pays.
              </p>

              <p className="mt-5">
                <strong>Mécanisme général :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Les loyers étrangers sont d'abord imposés dans le pays de
                  situation du bien (souvent à un taux inférieur au barème
                  français).
                </li>
                <li>
                  En France, selon la convention applicable : les revenus sont
                  soit exonérés d'IR français (méthode d'exemption avec
                  taux effectif), soit soumis à l'IR avec un crédit d'impôt
                  égal à l'impôt étranger.
                </li>
                <li>
                  Dans la majorité des cas, les{" "}
                  <strong>
                    prélèvements sociaux français à 17,2 % ne s'appliquent pas
                  </strong>{" "}
                  aux revenus de source étrangère — ce qui peut constituer un
                  avantage significatif pour les TMI élevées.
                </li>
              </ul>

              <p className="mt-5">
                <strong>Points de vigilance :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Le traitement varie d'une convention à l'autre : ne pas
                  généraliser.
                </li>
                <li>
                  Certains pays appliquent une retenue à la source qui peut être
                  imputée sur l'impôt français.
                </li>
                <li>
                  Les revenus étrangers doivent être déclarés en France sur le
                  formulaire 2047.
                </li>
                <li>
                  Ces revenus sont toujours soumis à l'IFI pour la fraction
                  immobilière.
                </li>
                <li>
                  Les SCPI européennes ne suppriment pas l'impôt — elles
                  peuvent le réduire dans certains cas, selon la situation.
                </li>
              </ul>
            </BeigePanel>

            <div className="space-y-6">
              <InfoCard title="Formulaire 2047">
                <p>
                  Tout investisseur percevant des revenus de SCPI détenant des
                  actifs hors de France doit compléter le formulaire 2047
                  (revenus étrangers) en complément de sa déclaration 2042.
                  La société de gestion fournit les montants ventilés par pays
                  dans l'IFU.
                </p>
              </InfoCard>

              <InfoCard title="Crédit d'impôt">
                <p>
                  Selon la convention applicable, un crédit d'impôt peut être
                  accordé en France pour l'impôt acquitté à l'étranger.
                  Ce mécanisme évite la double imposition mais ne supprime
                  pas nécessairement toute imposition française.
                </p>
              </InfoCard>

              <InfoCard title="Conseil recommandé">
                <p>
                  Avant d'investir dans une SCPI européenne principalement pour
                  un avantage fiscal, vérifiez la convention applicable à votre
                  résidence fiscale et consultez un conseiller fiscal spécialisé.
                  La situation peut différer selon les pays et évoluer dans le
                  temps.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── NOUVELLE SECTION : SCPI à crédit ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="crédit">
            SCPI à crédit : déductibilité des intérêts d'emprunt et impact fiscal
          </Title>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
              <p>
                L'investissement en SCPI à crédit est possible et peut
                présenter un intérêt fiscal dans certaines configurations. Les
                intérêts d'emprunt versés à l'établissement prêteur sont{" "}
                <strong className="text-[#1f3b77]">
                  déductibles des revenus fonciers
                </strong>{" "}
                en régime réel, réduisant ainsi la base imposable.
              </p>

              <p>
                <strong className="text-[#1f3b77]">Fonctionnement :</strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Les intérêts versés dans l'année sont déduits des loyers
                  bruts perçus par la SCPI (résultat net foncier réduit).
                </li>
                <li>
                  Si les intérêts dépassent les revenus fonciers, un déficit
                  foncier se forme, imputable sur les autres revenus fonciers
                  du foyer ou sur le revenu global (dans la limite de 10 700 €
                  par an, hors intérêts d'emprunt).
                </li>
                <li>
                  L'avantage fiscal est d'autant plus significatif que la TMI
                  est élevée : à 41 %, chaque euro d'intérêts déduit économise
                  41 centimes d'IR + 17,2 centimes de PS.
                </li>
              </ul>

              <p>
                <strong className="text-[#1f3b77]">
                  Exemple simplifié (TMI 41 %) :
                </strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Revenus fonciers SCPI : 5 000 € / an</li>
                <li>Intérêts d'emprunt déductibles : 2 500 € / an</li>
                <li>Base imposable réduite : 2 500 €</li>
                <li>
                  Économie IR : 2 500 € × 41 % = 1 025 € (vs 2 050 € sans
                  crédit)
                </li>
                <li>Économie PS : 2 500 € × 17,2 % = 430 €</li>
              </ul>

              <p>
                <strong className="text-[#1f3b77]">Points de vigilance :</strong>{" "}
                le régime réel est obligatoire (incompatible avec le
                micro-foncier). L'effet de levier ne fonctionne que si le
                rendement net SCPI excède le coût net du crédit sur la durée.
                Un risque de perte en capital demeure si la valeur des parts
                baisse. Utilisez notre{" "}
                <Link
                  href="/scpi-credit"
                  className="font-semibold text-[#1f3b77] underline underline-offset-2"
                >
                  simulateur SCPI à crédit
                </Link>{" "}
                pour estimer l'effort d'épargne mensuel selon votre situation.
              </p>
            </div>

            <div className="space-y-6">
              <InfoCard title="Régime réel obligatoire">
                <p>
                  La déduction des intérêts d'emprunt est réservée au régime
                  réel. Si vous êtes en micro-foncier (abattement 30 %),
                  vous ne pouvez pas déduire les intérêts. Le passage au régime
                  réel est irrévocable pendant 3 ans.
                </p>
              </InfoCard>

              <InfoCard title="Risque à mesurer">
                <p>
                  L'investissement à crédit amplifie les gains potentiels mais
                  aussi les pertes. Si le prix des parts baisse, la dette
                  subsiste. Les revenus ne sont jamais garantis. Une analyse
                  complète de votre capacité de remboursement est indispensable.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── NOUVELLE SECTION : Démembrement ── */}
      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <BluePanel title="Démembrement de propriété : nue-propriété, usufruit et traitement fiscal">
              <p>
                Le démembrement consiste à dissocier la pleine propriété en
                deux droits : la{" "}
                <strong>nue-propriété</strong> (valeur du capital) et l'
                <strong>usufruit</strong> (droit aux revenus). Cette technique
                peut présenter des avantages fiscaux significatifs selon la
                situation de l'investisseur.
              </p>

              <p className="mt-5">
                <strong>Achat de la nue-propriété :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Prix d'achat décoté (la décote dépend de la durée du
                  démembrement et des tables fiscales en vigueur).
                </li>
                <li>
                  Aucun revenu perçu → 0 € d'IR et 0 € de prélèvements sociaux
                  pendant toute la durée du démembrement.
                </li>
                <li>
                  Parts exclues de l'assiette IFI pour le nu-propriétaire.
                </li>
                <li>
                  À l'extinction de l'usufruit : reconstitution automatique de
                  la pleine propriété sans fiscalité supplémentaire.
                </li>
                <li>Horizon typique : 5, 10 ou 15 ans.</li>
              </ul>

              <p className="mt-5">
                <strong>Détention de l'usufruit :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  L'usufruitier perçoit les revenus et les déclare en revenus
                  fonciers (IR + PS 17,2 %).
                </li>
                <li>
                  Il doit déclarer la valeur totale de la pleine propriété à
                  l'IFI.
                </li>
              </ul>

              <p className="mt-5">
                <strong>Cession d'un usufruit temporaire :</strong> imposée
                comme un revenu ordinaire (intégration au barème), non comme
                une plus-value immobilière.
              </p>

              <p className="mt-5">
                <strong>Attention :</strong> les règles du démembrement sont
                complexes. Un conseil patrimonial est fortement recommandé
                avant toute opération.
              </p>
            </BluePanel>

            <div className="space-y-6">
              <InfoCard title="Pour qui ?">
                <p>
                  Le démembrement temporaire convient aux profils fortement
                  imposés (TMI 41 % ou 45 %) souhaitant constituer un capital
                  immobilier sans payer d'impôt annuel, dans une logique de
                  préparation de retraite à moyen terme.
                </p>
              </InfoCard>

              <InfoCard title="Durée minimale">
                <p>
                  L'efficacité du démembrement dépend de la durée choisie.
                  Plus elle est longue, plus la décote d'achat est importante.
                  Les durées les plus fréquentes sont 5, 10 ou 15 ans selon
                  les SCPI et les usufructuaires institutionnels.
                </p>
              </InfoCard>

              <InfoCard title="Risque résiduel">
                <p>
                  Même en nue-propriété, le risque de perte en capital existe
                  si la valeur des parts baisse sur la période. La
                  reconstitution de la pleine propriété ne préjuge pas de la
                  valeur des parts à terme.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 7 + 8 : Déclaration + Exemples ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <Title accent="déclarer">
                7. Comment déclarer ses revenus SCPI en 2026 : guide pas à pas
              </Title>

              <ol className="mt-10 list-decimal space-y-5 pl-6 text-lg leading-9 text-slate-700 sm:text-xl">
                <li>
                  <strong className="text-[#1f3b77]">
                    Réception de l'IFU :
                  </strong>{" "}
                  chaque société de gestion vous envoie avant le mois d'avril
                  l'Imprimé Fiscal Unique (formulaire n°2561).
                </li>
                <li>
                  <strong className="text-[#1f3b77]">Choix du régime :</strong>{" "}
                  micro-foncier ou réel selon votre niveau de charges et votre
                  situation fiscale globale.
                </li>
                <li>
                  <strong className="text-[#1f3b77]">
                    Remplissage des formulaires :
                  </strong>{" "}
                  déclaration principale 2042, annexe 2044 en régime réel,
                  annexe 2047 si SCPI européennes.
                </li>
                <li>
                  <strong className="text-[#1f3b77]">
                    Cases principales (2026) :
                  </strong>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>4BE : micro-foncier</li>
                    <li>4BA à 4BD : régime réel</li>
                    <li>4EA : revenus fonciers étrangers</li>
                    <li>Cases IFI : rubrique dédiée sur la déclaration IFI</li>
                  </ul>
                </li>
              </ol>

              <div className="mt-8 text-lg leading-9 text-slate-700 sm:text-xl">
                <p>
                  <strong className="text-[#1f3b77]">
                    Erreurs courantes à éviter :
                  </strong>
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Oublier de déduire les charges réelles en régime réel</li>
                  <li>Ne pas reporter la valeur IFI correcte par part</li>
                  <li>
                    Mauvaise ventilation entre revenus fonciers et financiers
                  </li>
                  <li>
                    Omettre le formulaire 2047 pour les SCPI européennes
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#f8f0df] p-10">
              <h3 className="text-3xl font-bold leading-tight tracking-tight text-[#1f3b77]">
                8. Exemples chiffrés concrets (2026)
              </h3>

              <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
                <div>
                  <p>
                    <strong className="text-[#1f3b77]">
                      Exemple 1 – Investisseur TMI 30 % – 50 000 € investis
                    </strong>
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>Revenu distribué : 4 500 € bruts (TD 9 %)</li>
                    <li>
                      Micro-foncier : 4 500 € × 70 % = 3 150 € imposables
                    </li>
                    <li>IR : 3 150 € × 30 % = 945 €</li>
                    <li>PS 17,2 % sur 4 500 € : 774 €</li>
                    <li>Net après impôt : environ 2 781 €</li>
                    <li>Rendement net estimé : ≈ 5,6 %</li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong className="text-[#1f3b77]">
                      Exemple 2 – Nue-propriété 15 ans – TMI 41 %
                    </strong>
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>Achat avec décote 40 % (investissement 60 000 € au lieu de 100 000 €)</li>
                    <li>
                      Aucun revenu → 0 € d'impôt et 0 € d'IFI pendant 15 ans
                    </li>
                    <li>
                      À la reconstitution : pleine propriété sans taxation
                      immédiate supplémentaire
                    </li>
                  </ul>
                </div>

                <p className="text-base text-slate-500">
                  Ces exemples sont indicatifs. Les performances et les revenus
                  ne sont jamais garantis. La fiscalité dépend de la situation
                  personnelle de chaque investisseur.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── NOUVELLE SECTION : Erreurs fréquentes ── */}
      <Section tone="cream">
        <Container className="py-16 sm:py-20">
          <Title accent="erreurs fréquentes">
            Les erreurs fréquentes à éviter dans la fiscalité des SCPI
          </Title>

          <p className="mt-6 text-lg leading-9 text-slate-700 sm:text-xl">
            Plusieurs erreurs récurrentes peuvent entraîner une sur-imposition,
            des pénalités fiscales ou une mauvaise lecture du rendement net
            réel. Voici les principales à connaître selon les retours des
            investisseurs et des professionnels du patrimoine.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard title="Rendement brut ≠ net">
              <p>
                Confondre le Taux de Distribution (rendement brut avant impôts)
                avec le rendement net après IR et prélèvements sociaux. La
                différence peut être de 1 à 2,5 points selon la TMI. Toujours
                calculer le rendement net avant de comparer des placements.
              </p>
            </InfoCard>

            <InfoCard title="Oublier le formulaire 2047">
              <p>
                Ne pas compléter le formulaire 2047 pour les revenus de SCPI
                investies hors de France. Cette omission peut entraîner une
                double imposition ou une régularisation fiscale ultérieure.
                L'IFU de la SCPI indique les montants par pays à reporter.
              </p>
            </InfoCard>

            <InfoCard title="Mauvais régime choisi">
              <p>
                Rester au micro-foncier alors que le régime réel serait plus
                avantageux (charges importantes, financement à crédit), ou
                inversement. Attention : le passage au régime réel est
                irrévocable pendant 3 ans.
              </p>
            </InfoCard>

            <InfoCard title="IFI mal calculé">
              <p>
                Utiliser le prix de la part plutôt que la valeur IFI
                communiquée par la société de gestion. La valeur IFI est
                inférieure au prix de part car elle exclut la fraction
                financière (liquidités, créances) du portefeuille.
              </p>
            </InfoCard>

            <InfoCard title="Horizon trop court">
              <p>
                Investir en SCPI avec un horizon inférieur à 8-10 ans sans
                tenir compte des frais d'entrée (8 à 12 %) qui s'amortissent
                dans la durée. Un désinvestissement prématuré peut conduire à
                une perte nette même avec un bon rendement brut.
              </p>
            </InfoCard>

            <InfoCard title="Fiscalité étrangère surestimée">
              <p>
                Croire que les SCPI européennes suppriment totalement l'impôt
                français. Selon la convention applicable, l'IR français peut
                s'appliquer partiellement ou via un mécanisme de taux effectif.
                Vérifier la convention avant d'investir.
              </p>
            </InfoCard>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 9 : FAQ élargie ── */}
      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <BluePanel title="9. FAQ – Questions les plus fréquentes sur la fiscalité SCPI 2026">
              <div className="space-y-6">
                <div>
                  <p>
                    <strong>
                      Les revenus SCPI augmentent-ils ma TMI ?
                    </strong>
                  </p>
                  <p>
                    Oui, ils s'ajoutent à vos autres revenus et sont imposés
                    selon le barème progressif. Selon votre niveau de revenus,
                    cela peut vous faire basculer dans une tranche supérieure.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Peut-on avoir un déficit foncier avec des SCPI ?
                    </strong>
                  </p>
                  <p>
                    Oui, en régime réel, si les charges déductibles (intérêts
                    d'emprunt notamment) dépassent les revenus fonciers. Le
                    déficit est imputable sur les revenus fonciers globaux et,
                    dans la limite de 10 700 €, sur le revenu global.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>La SCPI paie-t-elle des impôts ?</strong>
                  </p>
                  <p>
                    Non. Transparence fiscale totale : la SCPI ne paie aucun
                    impôt. Chaque associé est imposé sur sa quote-part de
                    résultats dans ses catégories fiscales personnelles.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Quelle est la fiscalité en cas de donation ou succession ?
                    </strong>
                  </p>
                  <p>
                    Les parts sont transmises comme des valeurs mobilières, avec
                    les abattements classiques en vigueur (100 000 € en ligne
                    directe tous les 15 ans). La valeur à retenir est en général
                    le prix de souscription ou la valeur de retrait.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Les SCPI résidentielles ou thématiques ont-elles une
                      fiscalité différente ?
                    </strong>
                  </p>
                  <p>
                    Non, même régime pour toutes les SCPI de droit français,
                    quelle que soit leur stratégie d'investissement.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Peut-on déduire les frais de souscription de ses revenus ?
                    </strong>
                  </p>
                  <p>
                    Non. Les frais d'entrée ne sont pas déductibles des revenus
                    fonciers annuels. Ils s'ajoutent au prix d'acquisition pour
                    le calcul de la plus-value lors de la revente, réduisant
                    ainsi la plus-value imposable.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Les PS à 17,2 % s'appliquent-ils aux SCPI européennes ?
                    </strong>
                  </p>
                  <p>
                    Dans la majorité des cas, non — grâce aux conventions
                    fiscales bilatérales. Mais le traitement varie selon chaque
                    convention et la situation personnelle. Une vérification
                    s'impose avant d'investir.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Comment sont imposées les SCPI en assurance-vie ?
                    </strong>
                  </p>
                  <p>
                    Aucune imposition annuelle sur les revenus capitalisés dans
                    le contrat. Fiscalité appliquée uniquement aux rachats, avec
                    abattement après 8 ans (4 600 € / 9 200 €) et PFU réduit
                    à 7,5 % pour les primes sous 150 000 €.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Comment les parts sont-elles évaluées pour l'IFI ?
                    </strong>
                  </p>
                  <p>
                    Chaque société de gestion communique la valeur IFI par part,
                    représentant la fraction immobilière nette du portefeuille.
                    En nue-propriété, les parts sont exclues de l'assiette IFI
                    du nu-propriétaire.
                  </p>
                </div>
              </div>
            </BluePanel>

            <div className="space-y-6">
              <InfoCard title="FAQ utile">
                <p>
                  Cette section permet de retrouver rapidement les réponses les
                  plus fréquentes avant de consulter votre IFU ou de remplir
                  votre déclaration. Pour aller plus loin, consultez notre{" "}
                  <Link
                    href="/guide-pdf"
                    className="font-semibold text-[#1f3b77] underline underline-offset-2"
                  >
                    guide PDF complet
                  </Link>
                  .
                </p>
              </InfoCard>

              <InfoCard title="Toujours vérifier">
                <p>
                  En cas de doute, confrontez toujours les explications
                  générales à votre situation personnelle et aux documents
                  officiels reçus (IFU, relevés de gestion). Un conseiller
                  fiscal ou patrimonial peut être nécessaire pour les situations
                  complexes.
                </p>
              </InfoCard>

              <InfoCard title="Maillage interne">
                <p>
                  Consultez également :{" "}
                  <Link
                    href="/avantages"
                    className="font-semibold text-[#1f3b77] underline underline-offset-2"
                  >
                    avantages des SCPI
                  </Link>
                  ,{" "}
                  <Link
                    href="/revente"
                    className="font-semibold text-[#1f3b77] underline underline-offset-2"
                  >
                    revente des parts
                  </Link>
                  ,{" "}
                  <Link
                    href="/comparaison"
                    className="font-semibold text-[#1f3b77] underline underline-offset-2"
                  >
                    comparateur SCPI
                  </Link>
                  .
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 10 : Textes de référence ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="Textes de référence">
            10. Textes de référence officiels (2026)
          </Title>

          <div className="mt-8 text-lg leading-9 text-slate-700 sm:text-xl">
            <ul className="list-disc space-y-3 pl-6">
              <li>Articles L.214-50 et suivants du Code monétaire et financier</li>
              <li>Articles 14, 28, 150 U, 150 UB, 669 et 779 du CGI</li>
              <li>Loi de finances pour 2026</li>
              <li>Bulletins officiels de la DGFiP et rapports ASPIM</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* ── CTA FINAL ── */}
      <Section tone="cream">
        <Container className="py-16 sm:py-20">
          <div className="rounded-[30px] bg-[#1f3b77] p-8 text-white shadow-[0_18px_40px_rgba(31,59,119,0.2)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                  Téléchargez le guide PDF SCPI
                </h2>
                <p className="mt-6 text-lg leading-9 text-white/90 sm:text-xl">
                  Retrouvez une synthèse claire sur les SCPI : fonctionnement,
                  fiscalité complète, comparaison, avantages, points de
                  vigilance et critères de choix — en un document pédagogique
                  et indépendant.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/guide-pdf"
                  className="rounded-full bg-[#f5c455] px-7 py-4 text-center text-lg font-bold text-[#1f3b77]"
                >
                  Télécharger le guide PDF
                </Link>
                <Link
                  href="/comparaison"
                  className="rounded-full border border-white/20 px-7 py-4 text-center text-lg font-semibold text-white"
                >
                  Voir aussi le comparateur
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
