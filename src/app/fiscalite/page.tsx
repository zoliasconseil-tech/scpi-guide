import Link from "next/link";
import type { ReactNode } from "react";

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

      <Section tone="blue" className="relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-white [clip-path:polygon(0_35%,100%_0,100%_100%,0_100%)]" />
        <Container className="relative z-10 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Title accent="Fiscalité des SCPI">
                Fiscalité des SCPI en 2026 : les bases à connaître
              </Title>

              <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
                <p>
                  Bienvenue dans la section{" "}
                  <strong className="text-[#1f3b77]">Fiscalité des SCPI</strong> de
                  GuideSCPI.fr. Cette page regroupe{" "}
                  <strong className="text-[#1f3b77]">
                    toutes les informations officielles et actualisées au 1er janvier 2026
                  </strong>{" "}
                  sur l’imposition des Sociétés Civiles de Placement Immobilier.
                </p>

                <p>
                  Elle est conçue pour vous permettre de comprendre précisément comment
                  sont taxés les revenus, les plus-values, l’IFI, les stratégies
                  d’optimisation et les déclarations fiscales.
                </p>

                <p>
                  Toutes les explications sont basées sur le Code général des impôts
                  (CGI), les bulletins officiels de la DGFiP, les documents des sociétés
                  de gestion et les données de l’ASPIM. La fiscalité des SCPI est une{" "}
                  <strong className="text-[#1f3b77]">fiscalité de transparence</strong> :
                  la SCPI elle-même ne paie pas d’impôt ; ce sont les associés qui sont
                  imposés directement sur leur quote-part de résultats.
                </p>

                <p>
                  <strong className="text-[#1f3b77]">Avertissement :</strong> les
                  informations ci-dessous sont générales et ne remplacent pas un conseil
                  fiscal personnalisé. Les règles peuvent évoluer et dépendent de votre
                  situation individuelle. Consultez toujours votre conseiller fiscal ou
                  les documents officiels.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#1f3b77] p-8 text-white shadow-[0_18px_40px_rgba(31,59,119,0.25)] sm:p-10">
              <div className="mx-auto mb-6 h-6 w-16 rounded-full bg-[#f5c455]" />
              <h3 className="text-center text-4xl font-bold leading-tight tracking-tight">
                Comprendre votre fiscalité SCPI en quelques minutes
              </h3>

              <p className="mt-6 text-center text-2xl font-semibold text-[#f5c455]">
                Revenus, IFI, plus-values et déclaration
              </p>

              <p className="mt-4 text-center text-lg leading-8 text-white/90">
                Une page claire pour identifier les bons régimes, éviter les erreurs
                fréquentes et mieux lire votre IFU.
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
                  Voir aussi la simulation
                </Link>
              </div>

              <p className="mt-6 text-sm leading-7 text-white/70">
                Contenu pédagogique, indépendant et rédigé pour être simple à utiliser.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-4 sm:py-8">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard title="Revenus">
              <p>
                Distinguer les{" "}
                <strong className="text-[#1f3b77]">revenus fonciers</strong>, les{" "}
                <strong className="text-[#1f3b77]">revenus financiers</strong> et les{" "}
                <strong className="text-[#1f3b77]">plus-values immobilières</strong>.
              </p>
            </InfoCard>

            <InfoCard title="Régimes">
              <p>
                Comprendre la différence entre{" "}
                <strong className="text-[#1f3b77]">micro-foncier</strong> et{" "}
                <strong className="text-[#1f3b77]">régime réel</strong>, et savoir quand
                chacun s’applique.
              </p>
            </InfoCard>

            <InfoCard title="Déclaration">
              <p>
                Retrouver les{" "}
                <strong className="text-[#1f3b77]">cases à remplir</strong>, les
                formulaires utiles et les principales erreurs à éviter.
              </p>
            </InfoCard>
          </div>

          <div className="mt-8 rounded-[24px] bg-[#1f3b77] px-8 py-7 text-xl font-semibold text-white shadow-[0_10px_25px_rgba(31,59,119,0.18)] sm:flex sm:items-center sm:justify-between sm:text-2xl">
            <span>
              Vous cherchez une réponse rapide ?{" "}
              <span className="text-[#f5c455]">Consultez les points clés ci-dessous :</span>
            </span>
            <span className="mt-3 block text-3xl text-[#f5c455] sm:mt-0">⌄</span>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="trois grandes catégories">
            1. Les trois grandes catégories de revenus imposables dans une SCPI
          </Title>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              Les distributions d’une SCPI se décomposent en trois types de revenus,
              chacun avec sa propre fiscalité :
            </p>
          </div>

          <div className="mt-10">
            <SimpleTable
              headers={[
                "Type de revenu",
                "Origine",
                "Pourcentage approximatif des distributions",
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
                  "Cessions d’immeubles par la SCPI",
                  "Ponctuel (lors des ventes)",
                  "Régime des plus-values immobilières des particuliers",
                ],
              ]}
            />
          </div>

          <p className="mt-8 text-lg leading-9 text-slate-700 sm:text-xl">
            <strong className="text-[#1f3b77]">Source :</strong> IFU fourni par chaque
            société de gestion (formulaire n°2561).
          </p>
        </Container>
      </Section>

      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <BluePanel title="2. Imposition des revenus fonciers (la part principale)">
              <p>
                Les loyers nets perçus via la SCPI sont imposés dans la catégorie{" "}
                <strong>revenus fonciers</strong>.
              </p>

              <p className="mt-5">
                <strong>a) Régime micro-foncier</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Condition : revenus fonciers bruts annuels inférieurs à{" "}
                  <strong>15 000 €</strong> pour l’ensemble du foyer fiscal et absence de
                  dispositif fiscal particulier.
                </li>
                <li>Fonctionnement : abattement forfaitaire automatique de 30 %.</li>
                <li>Vous déclarez uniquement le montant brut indiqué sur l’IFU.</li>
                <li>Case à remplir : 4BE du formulaire 2042.</li>
                <li>Exemple : 10 000 € bruts → 7 000 € imposables.</li>
              </ul>

              <p className="mt-6">
                <strong>b) Régime réel</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Obligatoire si revenus &gt; 15 000 € ou si vous choisissez ce régime.
                </li>
                <li>
                  Déduction des charges réelles : frais de gestion, intérêts d’emprunt,
                  travaux, assurances, provisions, comptabilité, etc.
                </li>
                <li>Annexe à remplir : 2044 ou 2044 spéciale selon les cas.</li>
                <li>
                  Les montants à reporter proviennent directement de l’IFU : revenus
                  bruts, charges déductibles et résultat net.
                </li>
              </ul>

              <p className="mt-6">
                <strong>Prélèvements sociaux :</strong> 17,2 % appliqués sur le revenu net.
              </p>

              <p className="mt-4">
                <strong>Tranche marginale d’imposition (TMI) :</strong> le revenu net
                s’ajoute à vos autres revenus et est imposé selon le barème progressif de
                l’IR.
              </p>
            </BluePanel>

            <div className="space-y-6">
              <InfoCard title="Micro-foncier">
                <p>
                  Solution la plus simple quand les conditions sont réunies, avec un
                  abattement forfaitaire de 30 %.
                </p>
              </InfoCard>

              <InfoCard title="Régime réel">
                <p>
                  Souvent plus adapté lorsqu’il existe des charges déductibles ou un
                  financement à crédit.
                </p>
              </InfoCard>

              <InfoCard title="Point pratique">
                <p>
                  L’IFU reste votre document de base pour identifier les montants à
                  reporter dans votre déclaration.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="blue">
        <Container className="pb-16 sm:pb-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <BluePanel title="3. Imposition des revenus financiers">
              <p>
                La part de trésorerie placée par la SCPI génère des intérêts imposés au{" "}
                <strong>Prélèvement Forfaitaire Unique</strong> (PFU ou « flat tax ») de{" "}
                <strong>31,4 %</strong> (12,8 % IR + 17,2 % PS + éventuelle contribution
                additionnelle).
              </p>

              <p className="mt-5">
                Vous pouvez opter pour le barème progressif de l’IR si cela est plus
                favorable.
              </p>

              <p className="mt-5">
                Ces revenus sont généralement indiqués dans une rubrique spécifique de
                l’IFU et reportés en case 2TR ou équivalente du formulaire 2042.
              </p>
            </BluePanel>

            <BluePanel title="4. L’Impôt sur la Fortune Immobilière (IFI) en 2026">
              <p>
                Les parts de SCPI entrent dans l’assiette de l’IFI pour la{" "}
                <strong>fraction représentative d’actifs immobiliers nets</strong>.
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-6">
                <li>
                  Seule la valeur immobilière est taxable, après retraitement éventuel de
                  la part financière.
                </li>
                <li>
                  La société de gestion communique chaque année la valeur IFI par part.
                </li>
                <li>
                  Vous multipliez ce montant par le nombre de parts détenues au 1er
                  janvier 2026.
                </li>
                <li>
                  Seuil d’imposition : patrimoine immobilier net supérieur à{" "}
                  <strong>1,3 million d’euros</strong>.
                </li>
                <li>Barème progressif de 0,5 % à 1,5 %.</li>
              </ul>

              <p className="mt-6">
                <strong>Cas particulier du démembrement :</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Nu-propriétaire : les parts en nue-propriété ne sont pas soumises à
                  l’IFI pendant toute la durée du démembrement.
                </li>
                <li>
                  Usufruitier : il déclare la valeur totale de la pleine propriété.
                </li>
              </ul>
            </BluePanel>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="plus-values">
            5. Fiscalité des plus-values à la revente des parts
          </Title>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              Lorsque vous vendez vos parts de SCPI, la plus-value réalisée est imposée
              selon le <strong className="text-[#1f3b77]">régime des plus-values immobilières des particuliers</strong>.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Impôt sur le revenu : 19 %</li>
              <li>Prélèvements sociaux : 17,2 %</li>
              <li>Total brut : 36,2 % avant abattements</li>
            </ul>

            <p>
              <strong className="text-[#1f3b77]">Abattements pour durée de détention :</strong>
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
                ["6 à 21 ans", "Progressif (6 % par an)", "Progressif (1,65 % par an)"],
                ["22 ans et plus", "Exonération totale", "Abattement partiel"],
                ["30 ans et plus", "Exonération totale", "Exonération totale"],
              ]}
            />
          </div>

          <div className="mt-8 space-y-5 text-lg leading-9 text-slate-700 sm:text-xl">
            <p>
              <strong className="text-[#1f3b77]">Note importante :</strong> la loi de
              finances 2026 prévoit un raccourcissement possible de l’exonération IR à 17
              ans, mais cette mesure entre en vigueur au 1er janvier 2027. Pour les
              cessions réalisées en 2026, le délai reste donc de 22 ans / 30 ans.
            </p>

            <p>
              <strong className="text-[#1f3b77]">Surtaxe :</strong> si la plus-value brute
              dépasse 50 000 €, une surtaxe de 2 % à 6 % s’applique.
            </p>

            <p>
              <strong className="text-[#1f3b77]">Prix d’acquisition :</strong> il inclut
              les frais de souscription et les frais d’acquisition. La société de gestion
              calcule la plus-value et vous fournit le montant imposable dans l’IFU de
              l’année de cession.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <BeigePanel title="6. Les stratégies d’optimisation fiscale">
              <div className="space-y-5">
                <div>
                  <p>
                    <strong>a) Le démembrement de propriété</strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>
                      Achat de la nue-propriété avec une décote selon l’âge de
                      l’usufruitier.
                    </li>
                    <li>
                      Pendant le démembrement : aucun revenu perçu, donc pas d’impôt sur
                      le revenu ni de prélèvements sociaux.
                    </li>
                    <li>Sortie de l’assiette IFI pour le nu-propriétaire.</li>
                    <li>
                      Reconstitution de la pleine propriété sans fiscalité
                      supplémentaire.
                    </li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>b) Détention en assurance-vie ou contrat de capitalisation</strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>Revenus et plus-values capitalisés à l’intérieur du contrat.</li>
                    <li>Aucune imposition annuelle.</li>
                    <li>Fiscalité au moment des rachats selon les règles de l’assurance-vie.</li>
                    <li>Transmission facilitée.</li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>c) Investissement à crédit</strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>Intérêts d’emprunt déductibles en régime réel.</li>
                    <li>Effet de levier fiscal et financier.</li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>d) SCPI européennes</strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>
                      Revenus souvent exonérés de prélèvements sociaux français grâce aux
                      conventions fiscales.
                    </li>
                    <li>Crédit d’impôt pour l’impôt payé à l’étranger.</li>
                    <li>Toujours soumises à l’IFI sur la fraction immobilière.</li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>e) Autres enveloppes</strong>
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>Les SCPI ne sont pas éligibles au PEA ni au PEA-PME.</li>
                    <li>
                      Elles peuvent être logées dans un PER avec avantage à l’entrée et
                      sortie en rente ou capital.
                    </li>
                  </ul>
                </div>
              </div>
            </BeigePanel>

            <div className="space-y-6">
              <InfoCard title="Démembrement">
                <p>
                  Solution souvent étudiée pour les profils fortement imposés ou dans une
                  logique de capitalisation patrimoniale.
                </p>
              </InfoCard>

              <InfoCard title="Assurance-vie">
                <p>
                  Permet une fiscalité différente de la détention en direct, sous réserve
                  des supports effectivement proposés par l’assureur.
                </p>
              </InfoCard>

              <InfoCard title="SCPI européennes">
                <p>
                  Intéressantes sur le plan fiscal dans certains cas, mais à analyser avec
                  précision selon votre situation.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <Title accent="déclarer">
                7. Comment déclarer ses revenus SCPI en 2026 : guide pas à pas
              </Title>

              <ol className="mt-10 list-decimal space-y-5 pl-6 text-lg leading-9 text-slate-700 sm:text-xl">
                <li>
                  <strong className="text-[#1f3b77]">Réception de l’IFU :</strong> chaque
                  société de gestion vous envoie avant le mois d’avril l’Imprimé Fiscal
                  Unique.
                </li>
                <li>
                  <strong className="text-[#1f3b77]">Choix du régime :</strong>{" "}
                  micro-foncier ou réel selon votre niveau de charges.
                </li>
                <li>
                  <strong className="text-[#1f3b77]">Remplissage des formulaires :</strong>{" "}
                  déclaration principale 2042, annexe 2044 en régime réel, annexe 2047 si
                  SCPI européennes.
                </li>
                <li>
                  <strong className="text-[#1f3b77]">Cases principales (2026) :</strong>
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
                  <strong className="text-[#1f3b77]">Erreurs courantes à éviter :</strong>
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Oublier de déduire les charges réelles</li>
                  <li>Ne pas reporter la valeur IFI correcte</li>
                  <li>Mauvaise ventilation entre revenus fonciers et financiers</li>
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
                    <li>Revenu distribué : 4 500 € bruts</li>
                    <li>Micro-foncier : 4 500 € × 70 % = 3 150 € imposables</li>
                    <li>IR : 3 150 € × 30 % = 945 €</li>
                    <li>PS 17,2 % : 543 €</li>
                    <li>Net après impôt : environ 3 012 €</li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong className="text-[#1f3b77]">
                      Exemple 2 – Nue-propriété 15 ans – TMI 41 %
                    </strong>
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>Achat avec décote 40 %</li>
                    <li>Aucun revenu → 0 € d’impôt et 0 € d’IFI pendant 15 ans</li>
                    <li>À la reconstitution : pleine propriété sans taxation immédiate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="blue">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <BluePanel title="9. FAQ – Questions les plus fréquentes sur la fiscalité SCPI 2026">
              <div className="space-y-6">
                <div>
                  <p>
                    <strong>Les revenus SCPI augmentent-ils ma TMI ?</strong>
                  </p>
                  <p>Oui, ils s’ajoutent à vos autres revenus.</p>
                </div>

                <div>
                  <p>
                    <strong>Peut-on avoir un déficit foncier avec des SCPI ?</strong>
                  </p>
                  <p>Oui, en régime réel si les charges dépassent les revenus.</p>
                </div>

                <div>
                  <p>
                    <strong>La SCPI paie-t-elle des impôts ?</strong>
                  </p>
                  <p>Non, transparence fiscale totale.</p>
                </div>

                <div>
                  <p>
                    <strong>
                      Quelle est la fiscalité en cas de donation ou succession ?
                    </strong>
                  </p>
                  <p>
                    Les parts sont transmises comme des valeurs mobilières, avec les
                    abattements classiques en vigueur.
                  </p>
                </div>

                <div>
                  <p>
                    <strong>
                      Les SCPI résidentielles ou thématiques ont-elles une fiscalité
                      différente ?
                    </strong>
                  </p>
                  <p>Non, même régime pour toutes les SCPI de droit français.</p>
                </div>
              </div>
            </BluePanel>

            <div className="space-y-6">
              <InfoCard title="FAQ utile">
                <p>
                  Cette section permet de retrouver rapidement les réponses les plus
                  fréquentes avant de regarder votre IFU ou votre déclaration.
                </p>
              </InfoCard>

              <InfoCard title="Toujours vérifier">
                <p>
                  En cas de doute, confrontez toujours les explications générales à votre
                  situation personnelle et aux documents officiels reçus.
                </p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-16 sm:py-20">
          <Title accent="Textes de référence">10. Textes de référence officiels (2026)</Title>

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
                  fiscalité, comparaison, avantages, points de vigilance et critères de
                  choix.
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