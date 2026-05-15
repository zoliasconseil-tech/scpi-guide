import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Délai revente SCPI : combien de temps faut-il prévoir ?",
  description:
    "Comprenez les délais possibles pour revendre des parts de SCPI : capital fixe ou variable, liquidité, marché secondaire, frais et points à vérifier.",
  alternates: {
    canonical: "https://www.scpi-gouv.org/revente-scpi-delai",
  },
};

export default function ReventeScpiDelaiPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Blog SCPI
          </p>
          <h1>Délai de revente SCPI : combien de temps faut-il prévoir ?</h1>
          <p>
            La revente de parts de SCPI n'est pas toujours immédiate. Le délai
            dépend du type de SCPI, de sa liquidité, de l'état du marché, du
            volume de demandes de retrait en cours et du prix d'exécution
            applicable. Voici les repères utiles à connaître avant d'envisager
            une sortie.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <article className="content-block">

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Qu'est-ce que le délai de revente d'une SCPI ?
            </h2>

            <p>
              Le délai de revente d'une SCPI correspond au temps qui s'écoule
              entre le dépôt d'une demande de retrait ou d'un ordre de vente et
              la récupération effective des fonds par l'investisseur. Ce délai
              n'est pas fixe : il varie selon le type de SCPI, les conditions du
              marché et le mécanisme de sortie applicable.
            </p>

            <p>
              Contrairement à une action cotée en bourse, une part de{" "}
              <Link
                href="/revente"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                revente SCPI
              </Link>{" "}
              ne s'exécute pas instantanément. La liquidité n'est pas garantie
              et aucun texte réglementaire n'impose un délai maximum universel.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Pourquoi le délai de revente peut varier ?
            </h2>

            <p>
              Plusieurs facteurs influencent directement la durée d'une revente :
            </p>

            <ul>
              <li>
                <strong>Le type de SCPI (capital fixe ou variable) :</strong>{" "}
                le mécanisme de sortie diffère selon la structure juridique
                retenue.
              </li>
              <li>
                <strong>Le volume de demandes de retrait en cours :</strong>{" "}
                si de nombreux associés souhaitent vendre simultanément, le
                délai s'allonge mécaniquement.
              </li>
              <li>
                <strong>La présence d'acheteurs :</strong> la revente nécessite
                généralement une contrepartie — un nouvel investisseur disposé
                à acquérir les parts cédées.
              </li>
              <li>
                <strong>L'état du marché immobilier :</strong> une conjoncture
                défavorable peut freiner les nouvelles souscriptions et réduire
                la liquidité disponible.
              </li>
              <li>
                <strong>Le prix de retrait ou d'exécution :</strong> un prix
                jugé trop élevé peut décourager les acheteurs potentiels et
                allonger le délai.
              </li>
              <li>
                <strong>Les conditions prévues par la société de gestion :</strong>{" "}
                chaque SCPI dispose de règles spécifiques encadrant les retraits
                et les cessions, précisées dans ses statuts et sa note
                d'information.
              </li>
            </ul>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              SCPI à capital variable : quel délai de revente ?
            </h2>

            <p>
              Dans une SCPI à capital variable, l'investisseur adresse une
              demande de retrait à la société de gestion. Celle-ci peut racheter
              les parts en compensant les retraits avec les nouvelles
              souscriptions reçues sur la même période.
            </p>

            <p>
              Lorsque la collecte nette reste positive — c'est-à-dire lorsque
              les nouvelles souscriptions dépassent les demandes de retrait —
              les retraits peuvent être traités rapidement, parfois en quelques
              semaines. En revanche, si les retraits excèdent les nouvelles
              souscriptions, la société de gestion peut suspendre temporairement
              les rachats et mettre en place un marché secondaire organisé, où
              les délais peuvent s'allonger significativement.
            </p>

            <p>
              Le{" "}
              <Link
                href="/revente"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                délai de revente SCPI
              </Link>{" "}
              à capital variable est donc directement lié à l'équilibre entre
              offre et demande au sein de la SCPI concernée.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              SCPI à capital fixe : quel délai de revente ?
            </h2>

            <p>
              Dans une SCPI à capital fixe, le nombre de parts est limité.
              La sortie s'effectue uniquement par cession de gré à gré sur un
              marché secondaire organisé par la société de gestion. Les ordres
              de vente et d'achat sont confrontés à une date précise (souvent
              mensuelle), et le prix de transaction émerge de cette confrontation.
            </p>

            <p>
              Si l'offre dépasse la demande, certains ordres de vente peuvent
              ne pas être exécutés, et l'investisseur doit attendre la prochaine
              séance. Ce mécanisme peut entraîner des délais variables, ainsi
              que des décotes si le prix proposé est inférieur à la valeur de
              retrait officielle publiée par la SCPI.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Peut-on revendre ses parts de SCPI à tout moment ?
            </h2>

            <p>
              On peut généralement déposer une demande de revente ou un ordre
              de vente à tout moment. Mais l'exécution de cette demande n'est
              pas garantie immédiatement — ni dans un délai précis. La revente
              effective dépend de la liquidité disponible et des conditions du
              marché au moment de la demande.
            </p>

            <p>
              En période de tension sur le marché immobilier ou de fort volume
              de retraits, la revente peut prendre plusieurs mois. Dans certains
              cas exceptionnels, la société de gestion peut être amenée à
              suspendre temporairement les rachats, conformément aux dispositions
              prévues dans les statuts de la SCPI.
            </p>

            <p>
              Les SCPI ne sont pas des placements liquides au sens financier
              strict. Il est recommandé de n'investir que des fonds dont on
              n'aura pas besoin à court terme.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Quels points vérifier avant de revendre ?
            </h2>

            <ul>
              <li>
                <strong>Prix de retrait ou prix d'exécution :</strong> vérifier
                la valeur de retrait publiée par la société de gestion et
                l'éventuelle décote applicable sur le marché secondaire.
              </li>
              <li>
                <strong>Frais éventuels :</strong> certaines SCPI prévoient des
                frais de sortie ou des droits d'enregistrement sur le marché
                secondaire.
              </li>
              <li>
                <strong>Délai annoncé :</strong> consulter les derniers bulletins
                trimestriels pour connaître le volume de parts en attente de
                retrait et le délai indicatif.
              </li>
              <li>
                <strong>Fiscalité en cas de plus-value :</strong> la plus-value
                réalisée lors de la cession est soumise au régime des
                plus-values immobilières. Consulter notre guide sur la{" "}
                <Link
                  href="/fiscalite"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  fiscalité des SCPI
                </Link>{" "}
                pour comprendre les abattements applicables selon la durée de
                détention.
              </li>
              <li>
                <strong>Documents nécessaires :</strong> formulaire de retrait,
                pièce d'identité, RIB et éventuellement justificatifs de
                détention selon le mode de souscription.
              </li>
              <li>
                <strong>Mode de détention :</strong> la procédure de revente
                diffère selon que les parts sont détenues en direct, via une
                assurance-vie, en démembrement ou au travers d'une société.
              </li>
              <li>
                <strong>Besoin de liquidité personnel :</strong> évaluer si la
                revente partielle suffit ou si la cession totale est nécessaire,
                en tenant compte des délais estimés.
              </li>
            </ul>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Comment mieux préparer une revente de parts de SCPI ?
            </h2>

            <p>
              Anticiper la revente dès la phase d'investissement est la meilleure
              façon d'éviter les contraintes de sortie. Quelques repères utiles :
            </p>

            <ul>
              <li>
                Consulter les documents officiels de la SCPI (note d'information,
                statuts, bulletins trimestriels) pour connaître les conditions
                exactes de retrait.
              </li>
              <li>
                Contacter directement la société de gestion ou un conseiller en
                gestion de patrimoine pour obtenir un point à jour sur la
                liquidité de la SCPI.
              </li>
              <li>
                Vérifier la{" "}
                <Link
                  href="/fiscalite"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  fiscalité des SCPI
                </Link>{" "}
                applicable à la plus-value, notamment les abattements liés à
                la durée de détention.
              </li>
              <li>
                Comparer le prix de retrait actuel avec le prix d'acquisition
                initial pour estimer la plus-value ou moins-value potentielle.
              </li>
              <li>
                Anticiper le délai : ne pas attendre un besoin urgent de
                trésorerie pour initier la démarche.
              </li>
              <li>
                Pour les aspects déclaratifs liés à la cession, consulter notre
                guide sur la{" "}
                <Link
                  href="/declaration-scpi-2026"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  déclaration SCPI 2026
                </Link>
                .
              </li>
            </ul>

            <div
              className="mt-10 rounded-[20px] px-8 py-7"
              style={{
                background: "rgba(240,194,79,0.12)",
                borderLeft: "4px solid #f0c24f",
              }}
            >
              <h2 className="mb-4 text-2xl font-bold text-[var(--primary)]">
                Vous envisagez de revendre des parts de SCPI ?
              </h2>
              <p className="mb-6 text-[18px] leading-8 text-slate-700">
                Laissez vos coordonnées pour être recontacté et mieux comprendre
                les délais possibles, la fiscalité et les documents à vérifier.
              </p>
              <Link href="/guide-pdf" className="btn-primary">
                Être recontacté
              </Link>
            </div>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              FAQ sur le délai de revente SCPI
            </h2>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Quel est le délai moyen de revente d'une SCPI ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Il n'existe pas de délai moyen universel. Selon les SCPI et les
                conditions du marché, il peut varier de quelques semaines pour
                les SCPI les plus liquides à plusieurs mois pour les SCPI à
                capital fixe ou en période de tension. Certains bulletins
                trimestriels publient le volume de parts en attente de retrait,
                ce qui donne un indicateur utile.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Peut-on revendre une SCPI rapidement ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Pas nécessairement. La vitesse de la revente dépend du type de
                SCPI, du niveau de la collecte et de la présence d'acheteurs.
                Pour les SCPI à forte demande et collecte active, la revente
                peut être relativement rapide. Pour les SCPI moins liquides ou
                en période de marché tendu, le délai peut s'allonger de façon
                significative.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Une SCPI à capital variable se revend-elle plus vite ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Pas systématiquement. Lorsque la collecte nette est positive,
                les rachats peuvent être traités rapidement. En revanche, si les
                demandes de retrait dépassent les nouvelles souscriptions, un
                marché secondaire peut être mis en place, allongeant les délais.
                La liquidité d'une SCPI à capital variable n'est donc pas
                garantie en toutes circonstances.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                Quels frais peuvent s'appliquer lors d'une revente ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Selon la SCPI et le mode de cession, des frais peuvent inclure :
                commission de sortie (0 à 3 %), droits d'enregistrement sur le
                marché secondaire (environ 5 %), frais d'intermédiation selon
                la plateforme ou le mode de détention. Ces frais doivent être
                vérifiés dans la note d'information de la SCPI concernée.
              </p>
            </details>

            <details className="rounded-[12px] border border-slate-200 px-5 py-4 mb-3">
              <summary className="cursor-pointer font-semibold text-[var(--primary)]">
                La revente de SCPI est-elle garantie ?
              </summary>
              <p className="mt-3 text-slate-600 text-[15px] leading-7">
                Non. Contrairement à un actif coté en bourse, la revente de
                parts de SCPI n'est pas garantie dans un délai déterminé. Elle
                dépend de la présence d'acheteurs, du type de SCPI et des
                conditions du marché. Un risque de perte en capital existe
                également si le prix de cession est inférieur au prix
                d'acquisition.
              </p>
            </details>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/revente" className="btn-primary">
                Guide complet revente SCPI
              </Link>
              <Link href="/guide-pdf" className="btn-secondary">
                Télécharger le guide SCPI
              </Link>
            </div>

          </article>
        </div>
      </section>

      {/* ── À LIRE AUSSI ── */}
      <section className="section" style={{ background: "#eaf0fb" }}>
        <div className="container-site">
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: 20,
            }}
          >
            À lire aussi
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/revente"
              className="rounded-[16px] border border-[var(--border)] bg-white px-5 py-4 text-[16px] font-semibold text-[var(--primary)] shadow-sm transition hover:shadow-md"
            >
              Revente de parts SCPI →
            </Link>
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
