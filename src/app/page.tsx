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
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
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

  const titleClass = `text-3xl font-bold leading-tight tracking-tight text-[#1f3b77] sm:text-4xl lg:text-5xl ${
    center ? "text-center" : ""
  }`;

  if (typeof content !== "string") {
    return <h2 className={titleClass}>{children}</h2>;
  }

  const parts = content.split("__ACCENT__");

  return (
    <h2 className={titleClass}>
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
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf1fb] text-2xl sm:h-14 sm:w-14">
        <span aria-hidden="true">◌</span>
      </div>
      <h3 className="text-xl font-bold uppercase tracking-tight text-[#4d7fd6] sm:text-2xl">
        {title}
      </h3>
      <div className="mt-4 text-base leading-8 text-slate-700 sm:mt-5 sm:text-lg sm:leading-9">
        {children}
      </div>
    </div>
  );
}

function BluePanel({
  title,
  children,
  compact = false,
}: {
  title: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-[24px] bg-[#4d7fd6] text-white shadow-[0_16px_40px_rgba(31,59,119,0.18)] ${
        compact ? "p-6 sm:p-8" : "p-6 sm:p-10"
      }`}
    >
      <h3 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
        {title}
      </h3>
      <div className="mt-5 text-base leading-8 text-white/95 sm:mt-6 sm:text-lg sm:leading-9">
        {children}
      </div>
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
    <div className="rounded-[24px] bg-[#f5c455] p-6 text-[#1f3b77] shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-8">
      <h3 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
        {title}
      </h3>
      <div className="mt-5 text-base leading-8 sm:mt-6 sm:text-lg sm:leading-9">
        {children}
      </div>
    </div>
  );
}

function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-6 sm:space-y-7">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 sm:gap-4">
          <div className="mt-1 text-xl font-bold text-[#1f3b77] sm:text-2xl">✓</div>
          <div className="text-base leading-8 text-slate-700 sm:text-xl sm:leading-9">
            {item}
          </div>
        </li>
      ))}
    </ul>
  );
}

function SimpleTable() {
  const rows = [
    ["Gestion", "100 % déléguée", "À la charge du propriétaire"],
    ["Ticket d’entrée", "Accessible dès quelques milliers d’euros", "Beaucoup plus élevé"],
    ["Diversification", "Immédiate", "Limitée à un ou deux biens"],
    ["Liquidité", "Variable selon la SCPI", "Plus lente en pratique"],
    ["Risque locatif", "Mutualisé", "Concentré sur un bien"],
    ["Temps de gestion", "Très faible", "Plus important"],
  ];

  return (
    <div className="overflow-x-auto rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <table className="min-w-[720px] text-left">
        <thead className="bg-[#eaf1fb] text-[#1f3b77]">
          <tr>
            <th className="px-4 py-4 text-base font-bold sm:px-6 sm:py-5 sm:text-lg">
              Critère
            </th>
            <th className="px-4 py-4 text-base font-bold sm:px-6 sm:py-5 sm:text-lg">
              SCPI
            </th>
            <th className="px-4 py-4 text-base font-bold sm:px-6 sm:py-5 sm:text-lg">
              Immobilier en direct
            </th>
          </tr>
        </thead>
        <tbody className="text-slate-700">
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-slate-200">
              {row.map((cell) => (
                <td key={cell} className="px-4 py-4 text-base leading-8 sm:px-6 sm:py-5 sm:text-lg">
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

export default function Home() {
  return (
    <>
      <Section tone="blue" className="relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-white [clip-path:polygon(0_35%,100%_0,100%_100%,0_100%)]" />
        <Container className="relative z-10 py-12 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Title accent="Qu’est-ce qu’une SCPI ?">Qu’est-ce qu’une SCPI ?</Title>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 sm:mt-8 sm:text-xl sm:leading-9">
                <p>
                  Une <strong className="text-[#1f3b77]">SCPI</strong> (Société Civile de
                  Placement Immobilier) est une solution d’investissement immobilier
                  collectif. Au lieu d’acheter seul un bien, l’épargnant acquiert des
                  parts dans une société qui détient et gère un parc immobilier.
                </p>

                <p>
                  Les immeubles peuvent être composés de bureaux, commerces, actifs de
                  santé, logistique ou encore immobilier européen. Les loyers perçus sont
                  redistribués aux associés, généralement sous forme de revenus
                  périodiques.
                </p>

                <p>
                  La SCPI permet ainsi de mutualiser le risque locatif, d’accéder plus
                  facilement à l’immobilier et de déléguer totalement la gestion à une
                  société spécialisée.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#1f3b77] p-6 text-white shadow-[0_18px_40px_rgba(31,59,119,0.25)] sm:rounded-[32px] sm:p-10">
              <div className="mx-auto mb-6 h-6 w-16 rounded-full bg-[#f5c455]" />
              <h3 className="text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Comment allez-vous investir en SCPI ?
              </h3>

              <p className="mt-6 text-center text-xl font-semibold text-[#f5c455] sm:text-2xl">
                Guide pédagogique + comparatif gratuit
              </p>

              <p className="mt-4 text-center text-base leading-8 text-white/90 sm:text-lg">
                Obtenez une vision claire de la fiscalité, des avantages, des critères de
                choix et des points de vigilance avant d’investir.
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  href="/guide-pdf"
                  className="block rounded-full bg-[#f5c455] px-6 py-4 text-center text-lg font-bold text-[#1f3b77] transition hover:opacity-95 sm:text-xl"
                >
                  Télécharger le guide
                </Link>
                <Link
                  href="/comparaison"
                  className="block rounded-full border border-white/20 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:text-lg"
                >
                  Accéder au comparateur
                </Link>
              </div>

              <p className="mt-6 text-sm leading-7 text-white/70">
                Contenu informatif, gratuit et sans jargon inutile.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-6 sm:py-8">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard title="Pourquoi ?">
              <p>
                Pour accéder à l’immobilier de rendement de manière plus simple, avec un
                ticket d’entrée plus faible et une gestion entièrement déléguée.
              </p>
            </InfoCard>

            <InfoCard title="Pour qui ?">
              <p>
                Pour les épargnants qui souhaitent se{" "}
                <strong className="text-[#1f3b77]">constituer un patrimoine</strong>,
                percevoir de potentiels{" "}
                <strong className="text-[#1f3b77]">revenus complémentaires</strong> et
                diversifier leur épargne.
              </p>
            </InfoCard>

            <InfoCard title="Comment ?">
              <p>
                En achetant des parts d’une société qui investit dans un parc immobilier
                sélectionné et géré par des professionnels, sans acheter un bien en direct.
              </p>
            </InfoCard>
          </div>

          <div className="mt-8 rounded-[24px] bg-[#1f3b77] px-5 py-6 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(31,59,119,0.18)] sm:flex sm:items-center sm:justify-between sm:px-8 sm:py-7 sm:text-2xl">
            <span>
              Vous cherchez une information en particulier ?{" "}
              <span className="text-[#f5c455]">Consultez nos accès rapides :</span>
            </span>
            <span className="mt-3 block text-3xl text-[#f5c455] sm:mt-0">⌄</span>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-12 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Title accent="Pourquoi">Pourquoi investir en SCPI ?</Title>

              <p className="mt-6 text-base leading-8 text-slate-700 sm:text-xl sm:leading-9">
                Parmi les raisons d’investir en SCPI, voici les principales :
              </p>

              <div className="mt-8 sm:mt-10">
                <CheckList
                  items={[
                    <>
                      <strong className="text-[#1f3b77]">Des actifs accessibles</strong>
                      <br />
                      La SCPI permet d’accéder à l’immobilier avec un effort financier plus
                      progressif qu’un achat immobilier en direct.
                    </>,
                    <>
                      <strong className="text-[#1f3b77]">
                        Une recherche de rendement
                      </strong>
                      <br />
                      Certaines SCPI visent la distribution de revenus potentiellement
                      réguliers, en contrepartie des risques propres à l’immobilier.
                    </>,
                    <>
                      <strong className="text-[#1f3b77]">
                        La construction d’un patrimoine
                      </strong>
                      <br />
                      Les SCPI peuvent s’intégrer dans une stratégie patrimoniale de long
                      terme et de diversification.
                    </>,
                    <>
                      <strong className="text-[#1f3b77]">Une gestion déléguée</strong>
                      <br />
                      La recherche des locataires, la gestion des actifs et le suivi
                      administratif sont assurés par la société de gestion.
                    </>,
                    <>
                      <strong className="text-[#1f3b77]">
                        Une fiscalité à étudier
                      </strong>
                      <br />
                      Selon le mode de détention, la TMI, l’assurance-vie ou le
                      démembrement, le traitement fiscal peut varier.
                    </>,
                    <>
                      <strong className="text-[#1f3b77]">
                        Une transmission facilitée
                      </strong>
                      <br />
                      Les parts peuvent être plus simples à transmettre ou à répartir dans
                      certaines stratégies familiales.
                    </>,
                  ]}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative flex h-[260px] w-[260px] items-center justify-center sm:h-[340px] sm:w-[340px]">
                <div className="absolute left-4 top-8 h-20 w-20 rounded-full bg-[#f5c455] sm:left-6 sm:top-10 sm:h-28 sm:w-28" />
                <div className="absolute right-4 top-0 h-16 w-16 rounded-full border-[6px] border-[#f5c455] sm:h-20 sm:w-20" />
                <div className="absolute inset-0 rounded-full bg-[#4d7fd6]" />
                <div className="relative z-10 max-w-[210px] text-center text-2xl font-bold leading-tight text-white sm:max-w-[260px] sm:text-4xl">
                  Investir en SCPI offre des conditions d’accès facilitées.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="blue">
        <Container className="py-12 sm:py-20">
          <Title accent="conditions" center>
            Quelles sont les conditions pour investir en SCPI ?
          </Title>

          <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-[24px] bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                  <div className="text-sm font-bold uppercase tracking-wide text-[#4d7fd6]">
                    Règle 1
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-8 text-[#1f3b77] sm:text-xl">
                    Le placement doit correspondre à votre horizon patrimonial.
                  </p>
                </div>

                <div className="rounded-[24px] bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                  <div className="text-sm font-bold uppercase tracking-wide text-[#4d7fd6]">
                    Règle 2
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-8 text-[#1f3b77] sm:text-xl">
                    Le niveau de risque, de liquidité et de frais doit être compris.
                  </p>
                </div>

                <div className="rounded-[24px] bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                  <div className="text-sm font-bold uppercase tracking-wide text-[#4d7fd6]">
                    Règle 3
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-8 text-[#1f3b77] sm:text-xl">
                    Le mode de détention doit être adapté à votre fiscalité.
                  </p>
                </div>
              </div>

              <p className="mt-8 text-base leading-8 text-slate-700 sm:mt-10 sm:text-xl sm:leading-9">
                Une SCPI est un investissement immobilier indirect. Elle peut être
                souscrite au comptant, à crédit, en démembrement, via l’assurance-vie ou
                dans d’autres cadres selon les offres disponibles.
              </p>
            </div>

            <div className="text-base leading-8 text-slate-700 sm:text-xl sm:leading-9">
              <p>
                Avant toute souscription, il faut analyser le document d’informations
                clés, la note d’information, les bulletins périodiques et les rapports de
                gestion.
              </p>

              <p className="mt-6">
                Il est aussi indispensable d’étudier la stratégie de la SCPI, la nature
                des actifs détenus, la diversification géographique, le niveau des frais
                et les modalités de revente des parts.
              </p>

              <p className="mt-6">
                Enfin, l’investissement doit s’inscrire dans une logique de moyen ou long
                terme, avec un niveau de risque cohérent avec votre situation
                patrimoniale.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="blue">
        <Container className="pb-12 sm:pb-20">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <BluePanel title="Quels types de SCPI existent aujourd’hui ?">
              <p>Il existe plusieurs grandes familles de SCPI :</p>
              <ul className="mt-5 space-y-3">
                <li><strong>SCPI de rendement</strong></li>
                <li><strong>SCPI de capitalisation</strong></li>
                <li><strong>SCPI fiscales</strong></li>
                <li><strong>SCPI thématiques ou diversifiées</strong></li>
                <li><strong>SCPI européennes</strong></li>
              </ul>
            </BluePanel>

            <BluePanel title="Quels sont les critères de sélection d’une SCPI ?">
              <p>
                Pour comparer plusieurs SCPI, les critères restent finalement assez
                simples à identifier :
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <div className="mb-3 text-4xl">◔</div>
                  <p>
                    <strong>Qualité du patrimoine</strong>, diversification, typologie
                    d’actifs, localisation, taux d’occupation et stratégie de gestion.
                  </p>
                </div>
                <div>
                  <div className="mb-3 text-4xl">⌘</div>
                  <p>
                    <strong>Performance et structure de frais</strong>, historique de
                    distribution, évolution du prix de part et liquidité.
                  </p>
                </div>
              </div>
            </BluePanel>
          </div>

          <div className="mt-10">
            <Title accent="Focus">Focus sur la comparaison entre SCPI</Title>

            <div className="mt-8">
              <SimpleTable />
            </div>

            <div className="mt-8 text-base leading-8 text-slate-700 sm:text-xl sm:leading-9">
              <p>
                La SCPI peut convenir à des investisseurs recherchant un{" "}
                <strong className="text-[#1f3b77]">investissement plus passif</strong>,
                avec une meilleure mutualisation que l’immobilier détenu seul.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-12 sm:py-20">
          <Title accent="fiscalité" center>
            Quelle est la fiscalité des SCPI ?
          </Title>

          <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[0.95fr_1.05fr_1.05fr_1.05fr]">
            <div className="text-base leading-8 text-slate-700 sm:text-xl sm:leading-9 lg:pr-4">
              <p>
                La fiscalité des SCPI dépend principalement de la nature des revenus
                perçus, du mode de détention choisi et de la situation personnelle de
                l’investisseur.
              </p>

              <p className="mt-6">
                Les revenus sont généralement imposés dans la catégorie des revenus
                fonciers, avec une attention particulière à la TMI, aux prélèvements
                sociaux et, selon les cas, à l’IFI.
              </p>

              <p className="mt-6">
                Il peut donc exister plusieurs approches patrimoniales pour optimiser la
                détention.
              </p>
            </div>

            {["Revenus fonciers", "Plus-values", "Structuration"].map((title) => (
              <div key={title} className="rounded-[24px] bg-[#eaf1fb] p-6 sm:p-7">
                <div className="h-32 rounded-[18px] bg-[#cfdcf3] sm:h-40" />
                <h3 className="mt-6 text-2xl font-bold leading-tight text-[#1f3b77]">
                  {title}
                </h3>
                <ul className="mt-4 space-y-2 text-base leading-8 text-slate-700 sm:text-lg">
                  {title === "Revenus fonciers" && (
                    <>
                      <li>• Imposition selon votre situation</li>
                      <li>• Prélèvements sociaux</li>
                      <li>• Étude du régime applicable</li>
                    </>
                  )}
                  {title === "Plus-values" && (
                    <>
                      <li>• Revente des parts</li>
                      <li>• Durée de détention à considérer</li>
                      <li>• Règles applicables au moment de la cession</li>
                    </>
                  )}
                  {title === "Structuration" && (
                    <>
                      <li>• Assurance-vie</li>
                      <li>• Démembrement</li>
                      <li>• SCPI européennes</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="py-12 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <Title accent="avantages fiscaux">
                Quels sont les avantages fiscaux des SCPI ?
              </Title>

              <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700 sm:mt-8 sm:text-xl sm:leading-9">
                Selon la SCPI choisie et le mode de détention, l’investisseur peut
                rechercher une meilleure maîtrise de son imposition, notamment via
                l’assurance-vie, certaines SCPI investies à l’étranger ou des montages
                patrimoniaux adaptés.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#1f3b77] p-6 text-white shadow-[0_18px_40px_rgba(31,59,119,0.18)] sm:p-8">
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                Fiscalité des SCPI : étudiez votre situation avant d’investir.
              </h3>
              <Link
                href="/fiscalite"
                className="mt-8 inline-block rounded-full bg-[#f5c455] px-7 py-4 text-base font-bold text-[#1f3b77] sm:text-lg"
              >
                Voir la page fiscalité →
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <BeigePanel title="La fiscalité classique">
              <p>
                Les revenus issus des SCPI sont le plus souvent intégrés dans votre
                fiscalité immobilière. Il faut donc tenir compte de votre tranche
                marginale d’imposition, des prélèvements sociaux et de l’horizon de
                détention.
              </p>
              <Link
                href="/fiscalite"
                className="mt-8 inline-block rounded-full bg-[#4d7fd6] px-7 py-4 text-base font-bold text-white sm:text-lg"
              >
                En savoir plus →
              </Link>
            </BeigePanel>

            <BeigePanel title="Les solutions de structuration">
              <p>
                Assurance-vie, démembrement, crédit ou SCPI européennes peuvent parfois
                modifier le cadre fiscal ou patrimonial de la détention. Ces solutions
                doivent toujours être analysées au cas par cas.
              </p>
              <Link
                href="/guide-pdf"
                className="mt-8 inline-block rounded-full bg-[#4d7fd6] px-7 py-4 text-base font-bold text-white sm:text-lg"
              >
                En savoir plus →
              </Link>
            </BeigePanel>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-12 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="rounded-[24px] bg-[#f8f0df] p-6 sm:p-10">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1f3b77] sm:text-5xl">
                Différence entre <span className="text-[#f5c455]">SCPI</span> et achat
                immobilier en direct
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 sm:mt-8 sm:text-xl sm:leading-9">
                <p>
                  La SCPI ne doit pas être confondue avec l’achat d’un bien immobilier
                  détenu en propre. Dans un cas, l’investisseur détient des parts d’une
                  société ; dans l’autre, il gère directement un actif précis.
                </p>

                <ul className="list-disc pl-6">
                  <li>Gestion déléguée contre gestion personnelle</li>
                  <li>Diversification plus large contre concentration sur un bien</li>
                  <li>Ticket d’entrée plus progressif</li>
                  <li>Modalités de liquidité différentes</li>
                </ul>
              </div>

              <Link
                href="/comparaison"
                className="mt-8 inline-block rounded-full bg-[#f5c455] px-7 py-4 text-base font-bold text-[#1f3b77] sm:text-lg"
              >
                En savoir plus
              </Link>
            </div>

            <div className="flex min-h-[260px] items-center justify-center rounded-[24px] bg-[#f8f0df] p-6 sm:min-h-[340px]">
              <div className="max-w-[280px] text-center text-2xl font-bold leading-tight text-[#1f3b77] sm:text-3xl">
                Comparer avant d’investir permet de mieux choisir sa SCPI.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="pb-16 sm:pb-20">
          <Title accent="Comment">Comment aller plus loin ?</Title>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.05)] sm:p-7">
              <h3 className="text-2xl font-bold text-[#1f3b77]">Guide PDF</h3>
              <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
                Une synthèse claire pour comprendre rapidement le fonctionnement des SCPI.
              </p>
              <Link href="/guide-pdf" className="mt-6 inline-block font-semibold text-[#4d7fd6]">
                Télécharger →
              </Link>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.05)] sm:p-7">
              <h3 className="text-2xl font-bold text-[#1f3b77]">Comparateur</h3>
              <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
                Un outil pour comparer plusieurs SCPI à partir de critères concrets.
              </p>
              <Link href="/comparaison" className="mt-6 inline-block font-semibold text-[#4d7fd6]">
                Comparer →
              </Link>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.05)] sm:p-7">
              <h3 className="text-2xl font-bold text-[#1f3b77]">Simulation à crédit</h3>
              <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
                Estimez l’effort d’épargne et les revenus potentiels dans une logique de
                financement à crédit.
              </p>
              <Link href="/scpi-credit" className="mt-6 inline-block font-semibold text-[#4d7fd6]">
                Simuler →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}