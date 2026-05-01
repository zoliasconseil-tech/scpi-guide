import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Déclarer ses SCPI en 2026 : guide complet, formulaires et exemples",
  description:
    "Comment déclarer ses revenus SCPI en 2026 : formulaires 2042, 2044, 2047, revenus étrangers, assurance-vie, SCPI à crédit et IFI. Guide pédagogique et indépendant avec exemples chiffrés.",
  alternates: {
    canonical: "https://scpi-gouv.org/declaration-scpi-2026",
  },
  openGraph: {
    title: "Déclarer ses SCPI en 2026 : guide complet, formulaires et exemples",
    description:
      "Tout comprendre sur la déclaration de vos revenus SCPI en 2026 — revenus fonciers, SCPI européennes, assurance-vie, IFI, plus-values et formulaires.",
    url: "https://scpi-gouv.org/declaration-scpi-2026",
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
      name: "Comment déclarer ses revenus de SCPI en 2026 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les revenus de SCPI doivent être déclarés chaque année selon leur nature. Pour les revenus fonciers (détention directe), ils se reportent en case 4BE du formulaire 2042 (micro-foncier) ou via l'annexe 2044 (régime réel). Pour les SCPI investissant hors de France, le formulaire 2047 est nécessaire. La société de gestion fournit chaque année un document fiscal (IFU ou équivalent) qui indique les montants à reporter. Ce contenu est informatif et ne remplace pas un conseil fiscal personnalisé.",
      },
    },
    {
      "@type": "Question",
      name: "Quel formulaire utiliser pour déclarer des SCPI ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le formulaire principal est le 2042. L'annexe 2044 s'ajoute en régime réel pour détailler les charges déductibles. Le formulaire 2047 est requis pour les revenus de SCPI investissant hors de France. En cas de cession de parts, la plus-value est calculée par la société de gestion et reportée dans la déclaration. L'IFI fait l'objet d'une déclaration spécifique si votre patrimoine immobilier net dépasse 1,3 million d'euros.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il déclarer les SCPI européennes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les revenus de SCPI détenant des actifs hors de France doivent être déclarés en France via le formulaire 2047. Le traitement fiscal dépend de la convention bilatérale entre la France et le pays de situation des immeubles. La société de gestion fournit une ventilation par pays dans son document fiscal annuel. Ces revenus ne sont généralement pas soumis aux prélèvements sociaux français de 17,2 %, selon les conventions applicables, mais cela ne signifie pas l'absence totale d'impôt.",
      },
    },
    {
      "@type": "Question",
      name: "Les revenus de SCPI sont-ils des revenus fonciers ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans la grande majorité des cas, oui. Les distributions d'une SCPI proviennent principalement des loyers encaissés, ce qui correspond à la catégorie des revenus fonciers pour l'impôt sur le revenu. Une partie peut relever des revenus de capitaux mobiliers (intérêts de trésorerie) ou des plus-values immobilières lors de cessions d'actifs. Le document fiscal transmis par la société de gestion précise la ventilation exacte.",
      },
    },
    {
      "@type": "Question",
      name: "Comment déclarer des SCPI détenues en assurance-vie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si les parts de SCPI sont logées dans un contrat d'assurance-vie, les revenus sont en principe capitalisés à l'intérieur du contrat et ne font généralement pas l'objet d'une déclaration annuelle par l'investisseur en tant que revenus fonciers. La fiscalité s'applique au moment des rachats (partiels ou totaux), selon les règles de l'assurance-vie. Il convient de vérifier les modalités précises auprès de votre assureur.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on déduire les intérêts d'emprunt d'une SCPI à crédit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, sous conditions. En régime réel, les intérêts d'emprunt versés pour financer l'acquisition de parts de SCPI sont potentiellement déductibles des revenus fonciers. Cette déduction n'est pas possible en micro-foncier. Elle nécessite de conserver les justificatifs (tableau d'amortissement, relevés d'intérêts). L'avantage fiscal dépend de la tranche marginale d'imposition. Les revenus ne sont pas garantis et un risque de perte en capital existe.",
      },
    },
    {
      "@type": "Question",
      name: "Les SCPI doivent-elles être déclarées à l'IFI ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, si votre patrimoine immobilier net dépasse 1,3 million d'euros au 1er janvier 2026. La valeur à déclarer correspond à la fraction représentative d'actifs immobiliers nets, communiquée chaque année par la société de gestion (valeur IFI par part). Les parts détenues en nue-propriété sont en principe exclues de l'assiette IFI du nu-propriétaire.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il si j'oublie de déclarer mes revenus SCPI ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un oubli de déclaration peut entraîner un redressement fiscal assorti d'intérêts de retard (0,2 % par mois) et, selon les cas, de pénalités supplémentaires. En cas de bonne foi et de régularisation spontanée, les pénalités peuvent être réduites. La société de gestion transmet les informations fiscales à la DGFiP, ce qui permet à l'administration de vérifier la cohérence des déclarations. En cas de doute, consultez un conseiller fiscal.",
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
                <td
                  key={`${index}-${cellIndex}`}
                  className="px-6 py-5 text-base leading-8 sm:text-lg"
                >
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

export default function DeclarationScpi2026Page() {
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
                <span className="text-[#4d7fd6]">Comment déclarer</span> ses
                SCPI en 2026 ?
              </h1>

              <p className="mt-5 rounded-[16px] border-l-4 border-[#4d7fd6] bg-white/70 px-5 py-4 text-lg font-semibold leading-8 text-[#1f3b77] sm:text-xl">
                Une mauvaise déclaration peut fausser le rendement net réel de
                vos SCPI — et exposer à un redressement fiscal.
              </p>

              <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
                <p>
                  Les revenus issus d'une SCPI doivent être déclarés chaque
                  année aux impôts. Les modalités varient selon{" "}
                  <strong className="text-[#1f3b77]">
                    le type de revenus perçus
                  </strong>{" "}
                  (fonciers, financiers, plus-values),{" "}
                  <strong className="text-[#1f3b77]">
                    le mode de détention
                  </strong>{" "}
                  (direct, assurance-vie, nue-propriété, crédit) et{" "}
                  <strong className="text-[#1f3b77]">
                    la localisation des actifs
                  </strong>{" "}
                  (France ou Europe). Cette page vous guide pas à pas.
                </p>

                <p>
                  La{" "}
                  <Link
                    href="/fiscalite"
                    className="font-semibold text-[#1f3b77] underline underline-offset-2"
                  >
                    fiscalité des SCPI
                  </Link>{" "}
                  est une fiscalité de transparence : la SCPI elle-même ne
                  paie pas d'impôt. Ce sont les associés qui sont imposés
                  directement sur leur quote-part de résultats. La société de
                  gestion vous transmet chaque année un document fiscal (IFU
                  ou équivalent) indiquant les montants à reporter dans votre
                  déclaration de revenus.
                </p>

                <p>
                  <strong className="text-[#1f3b77]">Avertissement :</strong>{" "}
                  ce guide est informatif et pédagogique. Il ne remplace pas
                  un conseil fiscal personnalisé. Les règles fiscales dépendent
                  de votre situation individuelle et peuvent évoluer. Consultez
                  un conseiller fiscal ou patrimonial avant toute décision
                  d'investissement.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#1f3b77] p-8 text-white shadow-[0_18px_40px_rgba(31,59,119,0.25)] sm:p-10">
              <div className="mx-auto mb-6 h-6 w-16 rounded-full bg-[#f5c455]" />
              <h2 className="text-center text-4xl font-bold leading-tight tracking-tight">
                Préparez votre déclaration SCPI 2026
              </h2>

              <p className="mt-6 text-center text-2xl font-semibold text-[#f5c455]">
                Formulaires, exemples et checklist
              </p>

              <p className="mt-4 text-center text-lg leading-8 text-white/90">
                Tout ce qu'il faut savoir pour déclarer correctement vos
                revenus SCPI, selon votre mode de détention.
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  href="/guide-pdf"
                  className="block rounded-full bg-[#f5c455] px-6 py-4 text-center text-xl font-bold text-[#1f3b77] transition hover:opacity-95"
                >
                  Télécharger le guide SCPI gratuit
                </Link>
                <Link
                  href="/fiscalite"
                  className="block rounded-full border border-white/20 px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-white/10"
                >
                  Guide complet fiscalité des SCPI
                </Link>
              </div>

              <p className="mt-6 text-sm leading-7 text-white/70">
                Contenu pédagogique et indépendant. Aucun conseil fiscal
                personnalisé.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3 InfoCards intro ── */}
      <Section tone="white">
        <Container className="py-4 sm:py-8">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard title="Quel revenu ?">
              <p>
                Identifier la nature des revenus reçus :{" "}
                <strong className="text-[#1f3b77]">revenus fonciers</strong>,{" "}
                <strong className="text-[#1f3b77]">financiers</strong>,{" "}
                <strong className="text-[#1f3b77]">étrangers</strong> ou{" "}
                <strong className="text-[#1f3b77]">plus-values</strong> —
                chaque catégorie a son propre régime de déclaration.
              </p>
            </InfoCard>

            <InfoCard title="Quel formulaire ?">
              <p>
                Le choix entre le{" "}
                <strong className="text-[#1f3b77]">formulaire 2042</strong>,
                l'annexe{" "}
                <strong className="text-[#1f3b77]">2044</strong> (régime réel)
                et le formulaire{" "}
                <strong className="text-[#1f3b77]">2047</strong> (revenus
                étrangers) dépend de votre situation.
              </p>
            </InfoCard>

            <InfoCard title="Quel document clé ?">
              <p>
                L'<strong className="text-[#1f3b77]">IFU</strong> (Imprimé
                Fiscal Unique) transmis par chaque société de gestion est le
                document de référence. Il détaille les montants à reporter et
                la ventilation par type de revenus.
              </p>
            </InfoCard>
          </div>

          <div className="mt-8 rounded-[24px] bg-[#1f3b77] px-8 py-7 text-xl font-semibold text-white shadow-[0_10px_25px_rgba(31,59,119,0.18)] sm:flex sm:items-center sm:justify-between sm:text-2xl">
            <span>
              Vous souhaitez comparer les SCPI avant d'investir ?{" "}
              <span className="text-[#f5c455]">
                Consultez notre{" "}
                <Link href="/comparaison" className="underline underline-offset-2">
                  outil de comparaison
                </Link>
                .
              </span>
            </span>
          </div>
        </Container>
      </Section>

      {/* ── 1. Quels revenus déclarer ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="revenus de SCPI">
            1. Quels revenus de SCPI faut-il déclarer en 2026 ?
          </Title>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              Les distributions versées par une SCPI se composent de plusieurs
              catégories de revenus, chacune avec sa propre fiscalité et ses
              propres modalités de déclaration. La société de gestion ventile
              ces montants dans le document fiscal annuel qu'elle transmet
              (IFU ou équivalent), généralement avant la période de déclaration.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard title="Revenus fonciers">
              <p>
                La part principale des distributions — généralement{" "}
                <strong className="text-[#1f3b77]">85 à 95 %</strong> selon
                les SCPI — correspond aux loyers nets. Ces revenus sont imposés
                dans la catégorie des{" "}
                <strong className="text-[#1f3b77]">revenus fonciers</strong>{" "}
                au barème progressif de l'IR, plus les prélèvements sociaux à
                17,2 % pour les revenus de source française.
              </p>
            </InfoCard>

            <InfoCard title="Revenus financiers">
              <p>
                Une fraction de la trésorerie placée par la SCPI génère des
                intérêts. Ils relèvent des{" "}
                <strong className="text-[#1f3b77]">
                  revenus de capitaux mobiliers
                </strong>{" "}
                — imposés via le Prélèvement Forfaitaire Unique (PFU) à 31,4 %
                ou sur option au barème progressif de l'IR.
              </p>
            </InfoCard>

            <InfoCard title="Revenus étrangers">
              <p>
                Les SCPI investissant hors de France génèrent des{" "}
                <strong className="text-[#1f3b77]">
                  revenus de source étrangère
                </strong>
                . Ils doivent être déclarés via le formulaire 2047. Leur
                traitement fiscal dépend des conventions bilatérales entre la
                France et le pays concerné.
              </p>
            </InfoCard>

            <InfoCard title="Plus-values de cession">
              <p>
                En cas de revente de vos parts, la{" "}
                <strong className="text-[#1f3b77]">plus-value réalisée</strong>{" "}
                suit le régime des plus-values immobilières des particuliers
                (19 % IR + 17,2 % PS, avec abattements selon la durée de
                détention). Plus d'informations :{" "}
                <Link
                  href="/revente"
                  className="font-semibold text-[#1f3b77] underline underline-offset-2"
                >
                  revente de parts de SCPI
                </Link>
                .
              </p>
            </InfoCard>

            <InfoCard title="IFI (si concerné)">
              <p>
                Si votre patrimoine immobilier net dépasse{" "}
                <strong className="text-[#1f3b77]">1,3 million d'euros</strong>{" "}
                au 1er janvier 2026, la fraction immobilière de vos parts entre
                dans l'assiette de l'IFI. La valeur IFI par part est
                communiquée chaque année par la société de gestion.
              </p>
            </InfoCard>

            <InfoCard title="Nue-propriété (démembrement)">
              <p>
                En cas de détention en{" "}
                <strong className="text-[#1f3b77]">nue-propriété</strong>,
                aucun revenu n'est perçu pendant la durée du démembrement.
                Rien à déclarer au titre des revenus fonciers. Les parts sont
                également exclues de l'assiette IFI pour le nu-propriétaire.
              </p>
            </InfoCard>
          </div>
        </Container>
      </Section>

      {/* ── 2. Dans quelle catégorie ── */}
      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <BluePanel title="2. Dans quelle catégorie fiscale déclarer ses revenus SCPI ?">
              <p>
                La catégorie de déclaration dépend du mode de détention de vos
                parts. Bien l'identifier est la première étape avant de
                remplir votre déclaration.
              </p>

              <p className="mt-6">
                <strong>SCPI détenues en direct</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Revenus fonciers au barème progressif de l'IR +
                  prélèvements sociaux 17,2 %.
                </li>
                <li>
                  <strong>Micro-foncier</strong> : abattement forfaitaire de
                  30 % si revenus fonciers bruts &lt; 15 000 €. Déclaration
                  en case 4BE du formulaire 2042.
                </li>
                <li>
                  <strong>Régime réel</strong> : déduction des charges réelles
                  (intérêts d'emprunt, frais de gestion, assurances…) via
                  l'annexe 2044. Irrévocable pendant 3 ans.
                </li>
              </ul>

              <p className="mt-6">
                <strong>SCPI via assurance-vie</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Les revenus sont capitalisés dans le contrat — pas de
                  déclaration annuelle en revenus fonciers.
                </li>
                <li>
                  Fiscalité applicable au moment des rachats, selon les règles
                  de l'assurance-vie (abattements après 8 ans, PFU ou barème).
                </li>
              </ul>

              <p className="mt-6">
                <strong>SCPI européennes</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Formulaire 2047 obligatoire pour les revenus de source
                  étrangère.
                </li>
                <li>
                  Traitement selon la convention bilatérale applicable
                  (méthode d'exemption avec taux effectif ou crédit d'impôt).
                </li>
                <li>
                  Généralement pas soumis aux prélèvements sociaux français
                  de 17,2 % — mais pas d'absence totale d'impôt.
                </li>
              </ul>

              <p className="mt-6">
                <strong>SCPI à crédit</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Régime réel obligatoire pour déduire les intérêts d'emprunt.
                </li>
                <li>
                  Les intérêts versés sont potentiellement déductibles des
                  revenus fonciers, réduisant la base imposable.
                </li>
                <li>
                  Conserver impérativement les justificatifs (tableau
                  d'amortissement, relevés d'intérêts).
                </li>
              </ul>

              <p className="mt-6">
                <strong>SCPI en nue-propriété</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Aucun revenu perçu = aucune imposition sur les revenus
                  pendant la période de démembrement.
                </li>
                <li>Parts exclues de l'assiette IFI pour le nu-propriétaire.</li>
              </ul>
            </BluePanel>

            <div className="space-y-6">
              <InfoCard title="Micro-foncier">
                <p>
                  Solution la plus simple si vos revenus fonciers bruts totaux
                  (SCPI + autres biens) sont inférieurs à 15 000 € et en
                  l'absence de dispositif fiscal particulier. Abattement de
                  30 % automatique, sans justificatifs à fournir.
                </p>
              </InfoCard>

              <InfoCard title="Régime réel">
                <p>
                  Obligatoire au-delà de 15 000 € ou sur option (irrévocable
                  3 ans). Permet de déduire les charges réelles — notamment
                  les intérêts d'emprunt. Plus avantageux quand les charges
                  déductibles sont importantes selon votre situation.
                </p>
              </InfoCard>

              <InfoCard title="L'IFU : votre document clé">
                <p>
                  L'Imprimé Fiscal Unique transmis par la société de gestion
                  avant la période de déclaration détaille les revenus
                  fonciers, financiers, étrangers et la valeur IFI par part.
                  Reportez les montants indiqués sans les modifier.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. Quels formulaires ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="formulaires">
            3. Quels formulaires pour déclarer ses SCPI en 2026 ?
          </Title>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              Ce tableau récapitule les principaux formulaires selon les
              situations courantes. Les informations exactes à reporter
              proviennent des documents transmis par la société de gestion.
              En cas de doute, consultez un conseiller fiscal.
            </p>
          </div>

          <div className="mt-10">
            <SimpleTable
              headers={[
                "Situation",
                "Formulaire généralement utilisé",
                "Points d'attention",
              ]}
              rows={[
                [
                  "Revenus fonciers SCPI en direct — micro-foncier",
                  "Formulaire 2042 (case 4BE)",
                  "Applicable si revenus fonciers bruts < 15 000 €. Abattement forfaitaire de 30 % automatique. Montant brut fourni par l'IFU.",
                ],
                [
                  "Revenus fonciers SCPI en direct — régime réel",
                  "Formulaire 2042 + annexe 2044",
                  "Déduction des charges réelles. Irrévocable 3 ans. Conserver tous les justificatifs. Résultat net reporté sur le 2042.",
                ],
                [
                  "Revenus étrangers — SCPI européennes",
                  "Formulaire 2042 + formulaire 2047",
                  "Ventilation par pays fournie par la société de gestion. Mécanisme d'exemption ou crédit d'impôt selon convention. Généralement sans PS 17,2 %.",
                ],
                [
                  "Plus-value de cession de parts SCPI",
                  "Formulaire 2042 (rubrique plus-values immobilières)",
                  "Plus-value calculée par la société de gestion et communiquée à l'investisseur. Abattements progressifs selon la durée de détention.",
                ],
                [
                  "IFI (Impôt sur la Fortune Immobilière)",
                  "Déclaration IFI — annexe ou formulaire dédié",
                  "Si patrimoine immobilier net > 1,3 M€. Valeur IFI par part communiquée par la société de gestion. Parts en nue-propriété exclues pour le nu-propriétaire.",
                ],
                [
                  "SCPI via assurance-vie — rachat dans l'année",
                  "Formulaire 2042 (section rachats AV) — les revenus capitalisés ne se déclarent pas annuellement",
                  "Fiscalité au moment du rachat selon règles de l'AV. L'assureur transmet les informations nécessaires. Abattements après 8 ans.",
                ],
              ]}
            />
          </div>

          <p className="mt-8 text-base italic text-slate-500 sm:text-lg">
            Ce tableau est indicatif et simplifié. Les modalités exactes
            dépendent de votre situation personnelle et des informations
            transmises par la société de gestion selon les cas. Ce contenu
            ne remplace pas un conseil fiscal personnalisé.
          </p>
        </Container>
      </Section>

      {/* ── 4. Exemple simplifié ── */}
      <Section tone="cream">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <BeigePanel title="4. Exemple simplifié de déclaration SCPI">
              <p>
                Un investisseur perçoit{" "}
                <strong>5 000 € de revenus SCPI</strong> (revenus fonciers
                français, détention directe, TMI 30 %).
              </p>

              <p className="mt-5">
                <strong>a) En régime micro-foncier (abattement 30 %)</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Revenus bruts reportés de l'IFU : 5 000 €</li>
                <li>Abattement forfaitaire 30 % : − 1 500 €</li>
                <li>Base imposable à l'IR : 3 500 €</li>
                <li>IR (TMI 30 %) : 3 500 × 30 % = 1 050 €</li>
                <li>
                  Prélèvements sociaux 17,2 % sur 5 000 € : 860 €
                </li>
                <li>
                  <strong>Fiscalité totale théorique : ≈ 1 910 €</strong>
                </li>
                <li>Revenu net théorique : ≈ 3 090 €</li>
              </ul>

              <p className="mt-5">
                <strong>
                  b) En régime réel (avec 1 500 € de charges déductibles)
                </strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Revenus bruts : 5 000 €</li>
                <li>Charges déductibles (ex. intérêts d'emprunt) : − 1 500 €</li>
                <li>Base imposable nette : 3 500 €</li>
                <li>IR (TMI 30 %) : 1 050 €</li>
                <li>PS 17,2 % sur 3 500 € : 602 €</li>
                <li>
                  <strong>Fiscalité totale théorique : ≈ 1 652 €</strong>
                </li>
                <li>Revenu net théorique : ≈ 3 348 €</li>
              </ul>

              <p className="mt-6 text-base italic">
                Ces exemples sont volontairement simplifiés et ne tiennent pas
                compte de toutes les charges ou particularités. La situation
                réelle dépend de chaque investisseur. Les revenus ne sont pas
                garantis. Un risque de perte en capital existe.
              </p>
            </BeigePanel>

            <div className="space-y-6">
              <div className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <h3 className="text-2xl font-bold text-[#1f3b77]">
                  Comparatif micro-foncier / régime réel
                </h3>

                <div className="mt-6 overflow-x-auto rounded-[16px] border border-slate-200">
                  <table className="min-w-full text-left text-base">
                    <thead className="bg-[#eaf1fb] text-[#1f3b77]">
                      <tr>
                        <th className="px-5 py-4 font-bold">Poste</th>
                        <th className="px-5 py-4 font-bold">Micro-foncier</th>
                        <th className="px-5 py-4 font-bold">Réel*</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr className="border-t border-slate-200">
                        <td className="px-5 py-4">Revenus bruts</td>
                        <td className="px-5 py-4">5 000 €</td>
                        <td className="px-5 py-4">5 000 €</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-5 py-4">Déduction</td>
                        <td className="px-5 py-4">– 1 500 € (forfait)</td>
                        <td className="px-5 py-4">– 1 500 € (charges)</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-5 py-4">IR (30 %)</td>
                        <td className="px-5 py-4">1 050 €</td>
                        <td className="px-5 py-4">1 050 €</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-5 py-4">PS 17,2 %</td>
                        <td className="px-5 py-4">860 €</td>
                        <td className="px-5 py-4">602 €</td>
                      </tr>
                      <tr className="border-t border-slate-200 bg-[#eaf1fb] font-bold">
                        <td className="px-5 py-4 text-[#1f3b77]">Net théorique</td>
                        <td className="px-5 py-4 text-[#1f3b77]">≈ 3 090 €</td>
                        <td className="px-5 py-4 text-[#1f3b77]">≈ 3 348 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm italic text-slate-500">
                  *Hypothèse 1 500 € de charges réelles déductibles.
                  Exemple simplifié non contractuel.
                </p>
              </div>

              <InfoCard title="À retenir">
                <p>
                  Le régime réel est souvent plus avantageux quand les charges
                  déductibles sont significatives. Mais le passage au régime
                  réel est{" "}
                  <strong className="text-[#1f3b77]">irrévocable 3 ans</strong>
                  . Comparez les deux régimes avant de décider selon votre
                  situation.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 5. SCPI européennes ── */}
      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <BluePanel title="5. Comment déclarer les SCPI européennes en 2026 ?">
              <p>
                Les SCPI investissant hors de France génèrent des{" "}
                <strong>revenus de source étrangère</strong> dont la
                déclaration suit des règles spécifiques.
              </p>

              <p className="mt-6">
                <strong>Étape 1 — Récupérer la ventilation par pays</strong>
              </p>
              <p className="mt-2">
                La société de gestion transmet une ventilation des revenus par
                pays dans son document fiscal annuel. Chaque montant doit être
                reporté dans le bon formulaire, pays par pays.
              </p>

              <p className="mt-5">
                <strong>Étape 2 — Remplir le formulaire 2047</strong>
              </p>
              <p className="mt-2">
                Ce formulaire liste les revenus de source étrangère, pays par
                pays. Il est utilisé en complément du formulaire principal 2042.
                Son omission peut entraîner un redressement fiscal.
              </p>

              <p className="mt-5">
                <strong>
                  Étape 3 — Appliquer la convention fiscale applicable
                </strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Méthode d'exemption avec taux effectif :</strong>{" "}
                  les revenus étrangers sont exonérés d'IR en France mais
                  intégrés dans le calcul du taux moyen applicable aux revenus
                  français.
                </li>
                <li>
                  <strong>Méthode du crédit d'impôt :</strong> les revenus
                  sont imposés en France, mais l'impôt payé à l'étranger vient
                  en déduction de l'IR français dû.
                </li>
              </ul>

              <p className="mt-5">
                <strong>Prélèvements sociaux :</strong> dans la majorité des
                cas, les revenus de source étrangère ne sont pas soumis aux
                prélèvements sociaux français de 17,2 % — ce qui peut
                constituer un avantage selon la TMI. Cela ne signifie pas
                l'absence totale d'impôt.
              </p>

              <p className="mt-5">
                <strong>Points de vigilance :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Le traitement varie d'une convention à l'autre. Ne
                  généralisez pas selon votre situation.
                </li>
                <li>
                  Un impôt peut avoir été retenu à la source dans le pays
                  d'origine — à vérifier dans l'IFU.
                </li>
                <li>
                  Ces revenus restent soumis à l'IFI sur la fraction
                  immobilière si concerné.
                </li>
                <li>
                  Les SCPI européennes ne suppriment pas toute imposition —
                  elles peuvent la réduire dans certains cas selon votre
                  situation.
                </li>
              </ul>
            </BluePanel>

            <div className="space-y-6">
              <InfoCard title="Formulaire 2047 obligatoire">
                <p>
                  Tout investisseur percevant des revenus de SCPI détenant des
                  actifs hors de France doit remplir le formulaire 2047.
                  Les montants par pays sont indiqués dans le document fiscal
                  de la société de gestion. L'oublier peut entraîner une
                  double imposition ou un redressement.
                </p>
              </InfoCard>

              <InfoCard title="Crédit d'impôt">
                <p>
                  Selon la convention applicable, un crédit d'impôt peut être
                  accordé en France pour l'impôt acquitté à l'étranger. Ce
                  mécanisme évite la double imposition mais ne supprime pas
                  nécessairement toute imposition française. La société de
                  gestion précise les montants dans l'IFU.
                </p>
              </InfoCard>

              <InfoCard title="Conseil recommandé">
                <p>
                  Avant d'investir dans une SCPI européenne principalement
                  pour un avantage fiscal, vérifiez la convention applicable
                  et consultez un conseiller fiscal spécialisé. La situation
                  peut différer selon les pays et évoluer dans le temps.
                </p>
              </InfoCard>

              <InfoCard title="SCPI européennes fiscalité">
                <p>
                  Pour aller plus loin sur la{" "}
                  <Link
                    href="/fiscalite"
                    className="font-semibold text-[#1f3b77] underline underline-offset-2"
                  >
                    fiscalité des SCPI
                  </Link>{" "}
                  européennes, consultez notre guide complet qui détaille les
                  conventions fiscales, les mécanismes de crédit d'impôt et
                  les cas pratiques.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 6. SCPI et assurance-vie ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="assurance-vie">
            6. Déclaration SCPI et assurance-vie
          </Title>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
              <p>
                Si vos parts de SCPI sont logées dans un contrat
                d'assurance-vie sous forme d'unités de compte (UC), la
                déclaration suit les{" "}
                <strong className="text-[#1f3b77]">
                  règles de l'assurance-vie
                </strong>
                , et non celles des revenus fonciers. Cette distinction est
                fondamentale.
              </p>

              <p>
                <strong className="text-[#1f3b77]">
                  Pendant la durée de vie du contrat :
                </strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Les revenus générés par les SCPI sont capitalisés dans le
                  contrat.
                </li>
                <li>
                  Ils ne font pas l'objet d'une déclaration annuelle en
                  revenus fonciers par l'investisseur.
                </li>
                <li>
                  Aucun prélèvement social annuel sur les revenus capitalisés.
                </li>
              </ul>

              <p>
                <strong className="text-[#1f3b77]">
                  Au moment d'un rachat (partiel ou total) :
                </strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  La fiscalité s'applique sur la fraction de gains incluse
                  dans le rachat, selon les règles de l'assurance-vie.
                </li>
                <li>
                  Après 8 ans : abattement annuel de 4 600 € (personne seule)
                  ou 9 200 € (couple), puis PFU de 7,5 % jusqu'à 150 000 €
                  de primes + prélèvements sociaux.
                </li>
                <li>
                  L'assureur transmet un relevé fiscal indiquant la quote-part
                  de gains imposables — c'est ce document qui sert de base à
                  la déclaration.
                </li>
              </ul>

              <p>
                <strong className="text-[#1f3b77]">Points de vigilance :</strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Tous les contrats ne proposent pas de SCPI en unités de
                  compte. Vérifiez auprès de votre assureur.
                </li>
                <li>
                  Les frais du contrat s'ajoutent aux frais propres des SCPI
                  selon le mode de détention.
                </li>
                <li>
                  L'assurance-vie ne supprime pas l'impôt, elle le diffère.
                  Les revenus ne sont pas garantis.
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <InfoCard title="Aucune déclaration annuelle">
                <p>
                  Si vos SCPI sont en assurance-vie, vous ne déclarez pas de
                  revenus fonciers chaque année. La fiscalité n'intervient
                  qu'au moment des rachats — un avantage de trésorerie
                  significatif pour les TMI élevées.
                </p>
              </InfoCard>

              <InfoCard title="Document à récupérer">
                <p>
                  En cas de rachat dans l'année, récupérez le relevé fiscal
                  de votre assureur. C'est lui qui indique la part de gains
                  imposables à reporter sur votre 2042 — et non les documents
                  transmis par la SCPI elle-même.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 7. SCPI à crédit ── */}
      <Section tone="cream">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <BeigePanel title="7. Déclaration SCPI à crédit : intérêts d'emprunt et régime réel">
              <p>
                Si vous avez financé vos parts de SCPI à l'aide d'un emprunt,
                les{" "}
                <strong>intérêts d'emprunt</strong> versés dans l'année sont
                potentiellement déductibles de vos revenus fonciers — mais
                uniquement en régime réel.
              </p>

              <p className="mt-5">
                <strong>Ce qu'il faut faire :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Adopter le régime réel (irrévocable 3 ans) et remplir
                  l'annexe 2044.
                </li>
                <li>
                  Reporter les intérêts d'emprunt de l'année dans les charges
                  déductibles.
                </li>
                <li>
                  Conserver les justificatifs : tableau d'amortissement,
                  relevés d'intérêts annuels, contrat de crédit.
                </li>
              </ul>

              <p className="mt-5">
                <strong>Avantage fiscal possible :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  La déduction réduit la base imposable → moins d'IR et de
                  prélèvements sociaux selon votre situation.
                </li>
                <li>
                  Si les intérêts dépassent les revenus fonciers, un{" "}
                  <strong>déficit foncier</strong> peut se former — imputable
                  sur d'autres revenus fonciers ou sur le revenu global dans
                  la limite de 10 700 € par an (hors intérêts d'emprunt).
                </li>
              </ul>

              <p className="mt-5">
                <strong>Points de prudence :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Cet avantage fiscal n'est pas automatique — il dépend du
                  montant des intérêts, de la TMI et du niveau de revenus.
                </li>
                <li>
                  Un risque de perte en capital existe si la valeur des parts
                  baisse.
                </li>
                <li>Les revenus SCPI ne sont jamais garantis.</li>
              </ul>
            </BeigePanel>

            <div className="space-y-6">
              <InfoCard title="Régime réel obligatoire">
                <p>
                  La déduction des intérêts d'emprunt est réservée au régime
                  réel. Si vous êtes en micro-foncier, vous ne pouvez pas
                  déduire les intérêts. Le passage au régime réel engage
                  pour 3 ans minimum — anticipez avant d'opter.
                </p>
              </InfoCard>

              <InfoCard title="Conserver les justificatifs">
                <p>
                  En cas de contrôle fiscal, vous devrez fournir le tableau
                  d'amortissement du prêt et les relevés d'intérêts annuels.
                  Ces documents doivent être conservés au moins jusqu'à la
                  fin du délai de reprise (3 ans en général).
                </p>
              </InfoCard>

              <InfoCard title="Simuler votre situation">
                <p>
                  Notre{" "}
                  <Link
                    href="/scpi-credit"
                    className="font-semibold text-[#1f3b77] underline underline-offset-2"
                  >
                    simulateur SCPI à crédit
                  </Link>{" "}
                  vous aide à estimer l'effort d'épargne net mensuel et
                  l'impact fiscal selon votre TMI. Les résultats sont
                  indicatifs — les revenus ne sont pas garantis.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 8. Erreurs fréquentes ── */}
      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <Title accent="erreurs fréquentes">
            8. Erreurs fréquentes à éviter dans la déclaration SCPI
          </Title>

          <p className="mt-6 text-lg leading-9 text-slate-700 sm:text-xl">
            Ces erreurs sont récurrentes. Les identifier à l'avance permet
            d'éviter sur-imposition, redressement fiscal ou mauvaise lecture
            du rendement net réel.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard title="Confondre brut et net imposable">
              <p>
                Le Taux de Distribution affiché par la SCPI est un rendement
                brut, avant impôts. Votre revenu net imposable peut être
                significativement inférieur selon le régime et les charges.
                Toujours calculer le rendement net d'impôt avant de comparer
                des placements.
              </p>
            </InfoCard>

            <InfoCard title="Oublier les prélèvements sociaux">
              <p>
                Les prélèvements sociaux de 17,2 % s'appliquent aux revenus
                fonciers de source française en plus de l'IR, quelle que soit
                la TMI. Les omettre conduit à surestimer le revenu disponible
                d'environ 1 à 2 points par an selon les cas.
              </p>
            </InfoCard>

            <InfoCard title="Oublier les revenus étrangers">
              <p>
                Ne pas remplir le formulaire 2047 pour les SCPI investissant
                hors de France est une erreur fréquente. Ces revenus doivent
                être déclarés même s'ils bénéficient d'un traitement fiscal
                favorable. L'omission peut entraîner une régularisation.
              </p>
            </InfoCard>

            <InfoCard title="Mal reporter les informations">
              <p>
                Les montants fournis par la société de gestion dans l'IFU
                doivent être reportés dans les bonnes cases sans modification.
                Confondre les cases ou les montants peut créer des écarts avec
                les données transmises à la DGFiP.
              </p>
            </InfoCard>

            <InfoCard title="Oublier les intérêts d'emprunt">
              <p>
                En régime réel, les intérêts d'emprunt sont potentiellement
                déductibles. Les oublier revient à payer plus d'impôts que
                nécessaire. Conserver les justificatifs et les reporter
                dans l'annexe 2044.
              </p>
            </InfoCard>

            <InfoCard title="SCPI européenne = zéro impôt ?">
              <p>
                Les SCPI européennes peuvent bénéficier d'un traitement
                favorable (absence de PS 17,2 % dans certains cas), mais
                elles ne suppriment pas toute imposition. Une retenue à la
                source ou un taux effectif en France peut s'appliquer selon
                la convention et votre situation.
              </p>
            </InfoCard>

            <InfoCard title="Oublier l'IFI">
              <p>
                Si votre patrimoine immobilier net approche 1,3 M€, n'oubliez
                pas la valeur IFI de vos parts. Cette valeur est inférieure
                au prix de la part et est communiquée chaque année par la
                société de gestion.
              </p>
            </InfoCard>

            <InfoCard title="Confondre AV et direct">
              <p>
                Si vos parts sont en assurance-vie, vous ne déclarez pas des
                revenus fonciers annuels — mais les gains au moment des rachats.
                Confondre les deux situations entraîne des erreurs de cases
                et de régimes.
              </p>
            </InfoCard>

            <InfoCard title="Ne pas garder les justificatifs">
              <p>
                Conservez l'IFU, les relevés d'intérêts d'emprunt et les
                relevés de gestion au moins 3 ans. En cas de contrôle, ces
                documents sont indispensables pour justifier les montants
                déclarés selon le mode de détention.
              </p>
            </InfoCard>
          </div>
        </Container>
      </Section>

      {/* ── 9. Checklist ── */}
      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="Checklist déclaration">
            9. Checklist déclaration SCPI 2026 : avant de déclarer
          </Title>

          <p className="mt-6 text-lg leading-9 text-slate-700 sm:text-xl">
            Vérifiez chacun de ces points avant de remplir votre déclaration.
            Cette checklist est indicative et pédagogique — elle ne remplace
            pas un accompagnement fiscal personnalisé.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] bg-[#eaf1fb] p-8">
              <h3 className="text-2xl font-bold text-[#1f3b77]">
                Documents à récupérer
              </h3>
              <ul className="mt-6 space-y-4 text-lg leading-9 text-slate-700">
                {[
                  "Récupérer le document fiscal annuel (IFU ou équivalent) de chaque SCPI détenue",
                  "Vérifier la ventilation : revenus fonciers français, financiers, étrangers par pays",
                  "Récupérer les relevés d'intérêts du prêt si SCPI à crédit (pour le régime réel)",
                  "Récupérer le relevé de votre assureur si SCPI en AV et rachat effectué dans l'année",
                  "Récupérer la valeur IFI par part si patrimoine immobilier net proche de 1,3 M€",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4d7fd6] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] bg-[#eaf1fb] p-8">
              <h3 className="text-2xl font-bold text-[#1f3b77]">
                Vérifications à effectuer
              </h3>
              <ul className="mt-6 space-y-4 text-lg leading-9 text-slate-700">
                {[
                  "Identifier le mode de détention de chaque SCPI : direct, AV, nue-propriété ou crédit",
                  "Distinguer les revenus français (2042 / 2044) des revenus étrangers (2047)",
                  "Vérifier le régime applicable : micro-foncier ou réel — et ses conséquences sur 3 ans",
                  "Confirmer si des cessions de parts ont eu lieu dans l'année (plus-value à déclarer)",
                  "Conserver tous les justificatifs jusqu'à la fin du délai de reprise fiscale (3 ans min.)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#f5c455] text-sm font-bold text-[#1f3b77]">
                      {i + 6}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] bg-[#1f3b77] px-8 py-7 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(31,59,119,0.18)] sm:flex sm:items-center sm:justify-between sm:text-xl">
            <span>
              Vous souhaitez aller plus loin sur la{" "}
              <span className="text-[#f5c455]">
                <Link
                  href="/fiscalite"
                  className="underline underline-offset-2"
                >
                  fiscalité des SCPI
                </Link>{" "}
                ou{" "}
                <Link
                  href="/comparaison"
                  className="underline underline-offset-2"
                >
                  comparer les SCPI
                </Link>{" "}
                disponibles ?
              </span>
            </span>
            <Link
              href="/guide-pdf"
              className="mt-4 block rounded-full bg-[#f5c455] px-6 py-3 text-center text-lg font-bold text-[#1f3b77] sm:mt-0 sm:ml-6 sm:flex-shrink-0"
            >
              Guide PDF gratuit
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── 10. FAQ ── */}
      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <BluePanel title="10. FAQ — Déclaration SCPI 2026 : questions fréquentes">
              <div className="space-y-6">
                <div>
                  <p>
                    <strong>
                      Comment déclarer ses revenus de SCPI en 2026 ?
                    </strong>
                  </p>
                  <p>
                    Les revenus fonciers se déclarent via le formulaire 2042
                    (case 4BE en micro-foncier ou via l'annexe 2044 en régime
                    réel). Les revenus étrangers nécessitent le formulaire
                    2047. La société de gestion fournit un document fiscal
                    annuel détaillant les montants à reporter dans votre
                    déclaration.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Quel formulaire utiliser pour déclarer des SCPI ?
                    </strong>
                  </p>
                  <p>
                    Le formulaire principal est le 2042. L'annexe 2044 s'ajoute
                    en régime réel. Le formulaire 2047 est nécessaire pour les
                    SCPI européennes. En cas de cession, la plus-value est
                    calculée par la société de gestion. L'IFI fait l'objet
                    d'une déclaration spécifique si votre patrimoine immobilier
                    net dépasse 1,3 million d'euros.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Faut-il déclarer les SCPI européennes ?</strong>
                  </p>
                  <p>
                    Oui, obligatoirement via le formulaire 2047. Même si les
                    revenus bénéficient d'un traitement fiscal favorable selon
                    les conventions, ils doivent être déclarés. L'omission peut
                    entraîner un redressement fiscal.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Les revenus de SCPI sont-ils des revenus fonciers ?
                    </strong>
                  </p>
                  <p>
                    Dans la grande majorité des cas, oui. Les distributions
                    proviennent principalement des loyers — revenus fonciers au
                    barème IR. Une fraction peut relever des revenus de capitaux
                    mobiliers. La ventilation exacte figure dans l'IFU.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Comment déclarer des SCPI en assurance-vie ?
                    </strong>
                  </p>
                  <p>
                    Les revenus capitalisés dans le contrat ne se déclarent pas
                    annuellement. La fiscalité s'applique au moment des rachats
                    selon les règles de l'assurance-vie. L'assureur transmet
                    le relevé fiscal nécessaire.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Peut-on déduire les intérêts d'emprunt d'une{" "}
                      <Link
                        href="/scpi-credit"
                        className="text-white underline underline-offset-2"
                      >
                        SCPI à crédit
                      </Link>{" "}
                      ?
                    </strong>
                  </p>
                  <p>
                    Oui, en régime réel uniquement. Les intérêts sont
                    potentiellement déductibles des revenus fonciers. Il faut
                    conserver les justificatifs. L'avantage dépend de la TMI
                    et du montant des charges. Risque de perte en capital —
                    revenus non garantis.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Les SCPI doivent-elles être déclarées à l'IFI ?
                    </strong>
                  </p>
                  <p>
                    Oui si votre patrimoine immobilier net dépasse 1,3 M€.
                    La valeur IFI par part est communiquée par la société de
                    gestion. Les parts en nue-propriété sont en principe
                    exclues de l'assiette IFI du nu-propriétaire.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Que se passe-t-il si j'oublie de déclarer mes SCPI ?
                    </strong>
                  </p>
                  <p>
                    Un oubli peut entraîner un redressement avec intérêts de
                    retard (0,2 % par mois) et pénalités. La DGFiP reçoit les
                    informations transmises par les sociétés de gestion. En
                    cas de bonne foi, une régularisation spontanée peut réduire
                    les pénalités. En cas de doute, consultez un conseiller
                    fiscal.
                  </p>
                </div>
              </div>
            </BluePanel>

            <div className="space-y-6">
              <InfoCard title="Ressources complémentaires">
                <p>
                  Consultez également nos pages dédiées :{" "}
                  <Link
                    href="/fiscalite"
                    className="font-semibold text-[#1f3b77] underline underline-offset-2"
                  >
                    fiscalité des SCPI
                  </Link>
                  ,{" "}
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
                    revente de parts de SCPI
                  </Link>
                  ,{" "}
                  <Link
                    href="/comparaison"
                    className="font-semibold text-[#1f3b77] underline underline-offset-2"
                  >
                    comparer les SCPI
                  </Link>
                  .
                </p>
              </InfoCard>

              <InfoCard title="Ce contenu est informatif">
                <p>
                  Les informations de cette page sont générales et
                  pédagogiques. Elles ne constituent pas un conseil fiscal
                  personnalisé. En cas de doute ou de situation complexe,
                  consultez un conseiller fiscal ou patrimonial agréé avant
                  toute décision.
                </p>
              </InfoCard>

              <InfoCard title="Textes de référence">
                <p>
                  Articles 14, 28, 150 U, 150 UB du CGI. Bulletins officiels
                  de la DGFiP. Loi de finances pour 2026. Documents émis par
                  les sociétés de gestion (IFU, rapports annuels). ASPIM.
                </p>
              </InfoCard>
            </div>
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
                  Téléchargez le guide SCPI gratuit
                </h2>
                <p className="mt-6 text-lg leading-9 text-white/90 sm:text-xl">
                  Fiscalité complète, modes de détention, déclaration pas à
                  pas, exemples chiffrés et points de vigilance — tout en un
                  document pédagogique et indépendant.
                </p>
                <p className="mt-4 text-base text-white/60">
                  Les revenus et performances des SCPI ne sont pas garantis.
                  Un risque de perte en capital existe. Ce contenu est
                  informatif et ne remplace pas un conseil fiscal personnalisé.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/guide-pdf"
                  className="rounded-full bg-[#f5c455] px-7 py-4 text-center text-lg font-bold text-[#1f3b77]"
                >
                  Télécharger le guide gratuit
                </Link>
                <Link
                  href="/comparaison"
                  className="rounded-full border border-white/20 px-7 py-4 text-center text-lg font-semibold text-white"
                >
                  Comparer les SCPI disponibles
                </Link>
                <Link
                  href="/fiscalite"
                  className="rounded-full border border-white/20 px-7 py-4 text-center text-lg font-semibold text-white"
                >
                  Guide complet fiscalité SCPI
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
