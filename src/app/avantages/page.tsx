import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Avantages des SCPI en 2026 : 10 raisons d'investir en pierre-papier",
  description:
    "Découvrez les 10 principaux avantages des SCPI : diversification immobilière, gestion déléguée, rendement potentiel attractif, protection contre l'inflation, fiscalité optimisable et transmission patrimoniale facilitée. Guide complet et indépendant 2026.",
  alternates: {
    canonical: "https://scpi-gouv.org/avantages",
  },
  openGraph: {
    title: "Avantages des SCPI en 2026 : 10 raisons d'investir en pierre-papier",
    description:
      "Tout ce qu'il faut savoir sur les avantages de l'investissement en SCPI : rendement, fiscalité optimisable, gestion passive, diversification patrimoniale et préparation de la retraite.",
    url: "https://scpi-gouv.org/avantages",
    siteName: "SCPI Gouv",
    locale: "fr_FR",
    type: "article",
  },
};

const faqItems = [
  {
    question:
      "Pourquoi les SCPI attirent-elles autant d'investisseurs en 2026 ?",
    answer:
      "Les SCPI (Sociétés Civiles de Placement Immobilier) séduisent un nombre croissant d'épargnants parce qu'elles combinent plusieurs atouts rares sur un seul support : diversification immédiate sur de nombreux actifs professionnels, gestion totalement déléguée à une société de gestion agréée par l'AMF, ticket d'entrée accessible et revenus potentiels distribués régulièrement. Contrairement à l'achat immobilier direct, l'investisseur n'a aucune contrainte de gestion locative, de travaux ou de recherche de locataires. C'est notamment pour cette raison que les SCPI figurent parmi les placements immobiliers les plus recherchés pour préparer un complément de revenus ou diversifier un patrimoine.",
  },
  {
    question:
      "Les SCPI permettent-elles vraiment de diversifier un patrimoine ?",
    answer:
      "Oui, c'est l'un de leurs avantages structurels les plus importants. En souscrivant à une SCPI, l'investisseur détient une fraction d'un parc immobilier constitué de dizaines voire de centaines d'actifs : bureaux, commerces, entrepôts, cliniques, hôtels ou résidences gérées. Ces actifs sont souvent répartis entre plusieurs zones géographiques — en France et en Europe — et hébergent de nombreux locataires issus de secteurs d'activité variés. Cette mutualisation du risque locatif est beaucoup plus difficile à atteindre avec un ou deux biens immobiliers détenus en direct, et représente l'un des principaux avantages investissement SCPI par rapport à l'immobilier classique.",
  },
  {
    question: "La gestion est-elle totalement déléguée avec une SCPI ?",
    answer:
      "Oui, dans sa totalité. La société de gestion prend en charge l'ensemble des aspects opérationnels : acquisition et arbitrage des actifs, gestion des baux et des relations avec les locataires, réalisation des travaux d'entretien et de rénovation, recouvrement des loyers, production des comptes annuels et des rapports trimestriels. L'associé reçoit sa quote-part de revenus potentiels sans avoir à intervenir dans aucune de ces étapes. Pour un investisseur souhaitant une exposition à l'immobilier professionnel sans les contraintes d'une gestion en direct, les SCPI représentent une solution particulièrement adaptée.",
  },
  {
    question:
      "Les SCPI sont-elles adaptées à une logique de revenus réguliers ?",
    answer:
      "Elles sont souvent positionnées dans cette logique. La grande majorité des SCPI de rendement distribuent leurs revenus trimestriellement, voire mensuellement pour certaines d'entre elles. Ces distributions proviennent des loyers encaissés sur l'ensemble du parc immobilier, nets des charges de gestion. Il est important de rappeler que ces revenus ne sont jamais garantis et dépendent du taux d'occupation financier (TOF) et des performances globales de la SCPI. Historiquement, les meilleures SCPI ont affiché des taux de distribution compris entre 4 % et 7 % par an, mais ces performances passées ne préjugent pas des performances futures.",
  },
  {
    question: "Les SCPI protègent-elles contre l'inflation ?",
    answer:
      "Les SCPI offrent une protection partielle contre l'inflation, supérieure à celle de nombreux placements à revenu fixe. La raison principale est l'indexation des loyers commerciaux sur des indices comme l'ILC (Indice des Loyers Commerciaux) ou l'ILAT (Indice des Loyers des Activités Tertiaires), qui évoluent en partie en fonction de l'inflation. Ainsi, en période de hausse des prix, les loyers perçus par la SCPI peuvent augmenter, ce qui soutient le niveau des distributions. Cette protection n'est cependant pas totale : en cas de vacance locative importante ou de renégociation à la baisse des baux, l'effet de l'indexation peut être atténué.",
  },
  {
    question:
      "Quel est le rendement moyen des SCPI et en quoi est-il avantageux ?",
    answer:
      "Le rendement moyen des SCPI de rendement, mesuré par le Taux de Distribution (TD), oscille généralement entre 4 % et 6 % bruts par an selon les années et les véhicules. Ce niveau est significativement supérieur à celui du Livret A ou de la plupart des fonds en euros d'assurance-vie. L'avantage du rendement SCPI réside dans la combinaison d'un revenu potentiel régulier issu des loyers et d'une potentielle revalorisation du prix des parts sur le long terme. Certaines SCPI européennes profitent par ailleurs d'un traitement fiscal favorable sur les revenus étrangers, réduisant l'impact des prélèvements sociaux pour les résidents français.",
  },
  {
    question: "Quels sont les avantages fiscaux des SCPI ?",
    answer:
      "Les avantages fiscaux des SCPI dépendent fortement du mode de détention choisi. Détenues en direct, les revenus fonciers sont soumis à l'impôt sur le revenu et aux prélèvements sociaux (17,2 %), mais le régime réel permet de déduire de nombreuses charges. Souscrites via une assurance-vie, les revenus bénéficient de la fiscalité avantageuse du contrat (abattements après 8 ans, absence de prélèvements sociaux annuels). Les SCPI détenant des actifs en Europe hors France offrent souvent un avantage supplémentaire : les revenus étrangers sont imposés dans le pays d'origine avec un taux souvent inférieur et sans prélèvements sociaux français. La SCPI fiscalité avantages est donc une réalité concrète dès lors que la stratégie de détention est bien choisie.",
  },
  {
    question: "Comment les SCPI facilitent-elles la transmission patrimoniale ?",
    answer:
      "Les SCPI sont des outils particulièrement souples pour organiser une transmission patrimoniale. Il est possible de procéder à une donation de parts en pleine propriété, en nue-propriété ou en usufruit. La technique du démembrement temporaire de propriété est très utilisée : l'investisseur donne la nue-propriété de ses parts à ses enfants tout en conservant l'usufruit (et donc les revenus) pendant une période définie. À l'issue de cette période, les enfants récupèrent la pleine propriété sans droits de succession supplémentaires sur l'usufruit. Les parts de SCPI peuvent également être logées dans une SCI pour faciliter la gestion et la transmission.",
  },
  {
    question:
      "Peut-on investir en SCPI à crédit et est-ce avantageux ?",
    answer:
      "Oui, l'investissement en SCPI à crédit est possible et peut présenter des avantages significatifs. Le principal mécanisme est l'effet de levier : les intérêts d'emprunt sont déductibles des revenus fonciers perçus, ce qui réduit la base imposable. Si le rendement de la SCPI est supérieur au coût net du crédit, l'investisseur peut constituer un patrimoine immobilier plus important avec un apport personnel réduit. Ce schéma est particulièrement adapté aux investisseurs dans une tranche marginale d'imposition élevée, car la déductibilité des intérêts est d'autant plus avantageuse. Il convient toutefois de bien mesurer le risque de liquidité en cas de besoin de revente.",
  },
  {
    question:
      "Quelle est la différence entre une SCPI de rendement et une SCPI fiscale ?",
    answer:
      "Une SCPI de rendement vise à distribuer des revenus réguliers issus de loyers d'actifs professionnels (bureaux, commerces, logistique). Son objectif principal est d'optimiser le taux de distribution. Une SCPI fiscale, en revanche, est construite autour d'un dispositif de défiscalisation (Pinel, Malraux, Déficit foncier) et vise à réduire l'impôt de l'investisseur. Ses revenus locatifs sont généralement plus faibles et sa durée de détention est contrainte. Pour un investisseur cherchant avant tout des revenus complémentaires et une diversification patrimoniale dans une logique de pierre-papier bénéfices, les SCPI de rendement sont généralement plus adaptées.",
  },
  {
    question:
      "Quels sont les frais d'une SCPI et quel est leur impact sur le rendement ?",
    answer:
      "Les frais d'une SCPI se répartissent en deux catégories principales. Les frais de souscription (ou d'entrée), compris entre 8 % et 12 % du montant investi selon les SCPI, sont prélevés lors de l'acquisition des parts. Les frais de gestion annuels, compris entre 8 % et 12 % des loyers encaissés, sont déduits avant distribution aux associés — le rendement affiché est donc un rendement net de frais de gestion. En raison des frais d'entrée, il est essentiel de raisonner sur un horizon long terme (8 à 10 ans minimum) pour les amortir et bénéficier pleinement du potentiel de rendement de la SCPI.",
  },
  {
    question: "Sur quel horizon de temps faut-il investir en SCPI ?",
    answer:
      "Les SCPI sont des placements conçus pour un horizon long terme, généralement recommandé entre 8 et 10 ans minimum. Cette durée permet d'amortir les frais d'entrée (8 à 12 % en moyenne) et de lisser les éventuelles variations du marché immobilier. Un investissement trop court expose l'investisseur à récupérer moins que son capital initial après imputation des frais de cession et d'une éventuelle baisse du prix de part. Sur le long terme, la combinaison des revenus potentiels distribués et d'une éventuelle revalorisation des parts peut constituer un rendement global intéressant, sous réserve des conditions de marché et des performances de la SCPI choisie.",
  },
  {
    question: "Y a-t-il un risque de perte en capital avec les SCPI ?",
    answer:
      "Oui, et ce risque doit être clairement intégré dans l'analyse. Le prix de la part peut baisser si la valeur des actifs immobiliers détenus se déprécie — en cas de retournement du marché, de hausse des taux d'intérêt ou de forte vacance locative. Les distributions peuvent également être réduites ou suspendues en cas de difficultés locatives. Les performances passées, aussi solides soient-elles, ne garantissent jamais les résultats futurs. Il est donc recommandé de ne jamais investir en SCPI des sommes dont on pourrait avoir besoin à court terme.",
  },
  {
    question: "Comment comparer et choisir entre plusieurs SCPI ?",
    answer:
      "Plusieurs indicateurs permettent une comparaison objective : le Taux de Distribution (TD) sur les dernières années, le Taux d'Occupation Financier (TOF), l'écart entre le prix de souscription et la valeur de reconstitution, la stratégie géographique et sectorielle (SCPI françaises, européennes, thématiques), la taille du portefeuille et la solidité de la société de gestion. Il est recommandé de ne pas se focaliser uniquement sur le TD, qui peut être gonflé par des éléments exceptionnels. Comparer plusieurs SCPI sur l'ensemble de ces critères permet une décision plus éclairée.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function AvantagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              Découvrez pourquoi les SCPI (Sociétés Civiles de Placement
              Immobilier) attirent autant d'épargnants en quête de
              diversification patrimoniale et de revenus complémentaires :
              diversification immédiate sur des dizaines d'actifs
              professionnels, gestion entièrement déléguée à une société de
              gestion agréée par l'AMF, accessibilité avec un ticket d'entrée
              progressif, revenus potentiels réguliers, protection partielle
              contre l'inflation grâce à l'indexation des loyers commerciaux,
              et outils de transmission patrimoniale souples. Que vous cherchiez
              à comprendre les avantages investissement SCPI, à comparer la
              pierre-papier avec l'immobilier direct, ou à identifier les
              meilleures stratégies de détention pour optimiser votre fiscalité,
              ce guide indépendant vous présente les 10 points clés à connaître
              avant d'investir.
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
                Accéder à <strong>des dizaines ou centaines d'actifs</strong>{" "}
                immobiliers professionnels avec un seul investissement, répartis
                sur plusieurs secteurs et zones géographiques pour mutualiser
                le risque locatif.
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
                Profiter d'une{" "}
                <strong>gestion locative et technique externalisée</strong> à la
                société de gestion agréée par l'AMF : acquisition des actifs,
                gestion des baux, travaux, recouvrement des loyers et reporting
                régulier — sans aucune intervention de votre part.
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
                Utiliser les SCPI pour{" "}
                <strong>développer un patrimoine immobilier</strong> de manière
                progressive, générer des revenus potentiels sur le long terme
                et préparer une transmission patrimoniale organisée dans un
                cadre juridique souple.
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
                Vous cherchez l'avantage clé des SCPI ?{" "}
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
              L'un des avantages majeurs des SCPI est leur capacité à mutualiser
              le risque sur plusieurs actifs immobiliers, zones géographiques et
              locataires. Quand vous investissez en pierre-papier, vous ne misez
              pas sur un seul bureau parisien ou un seul local commercial : vous
              accédez d'emblée à un portefeuille constitué de dizaines voire de
              centaines d'actifs soigneusement sélectionnés par des équipes de
              gestion spécialisées.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Plutôt que de dépendre d'un seul bien ou d'un seul locataire,
              l'investisseur accède à un portefeuille plus large, souvent mieux
              réparti sur le territoire français et européen. Ainsi, si un
              locataire fait défaut ou si un marché locatif local se dégrade,
              l'impact sur la distribution globale reste limité grâce à la
              mutualisation du risque.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Cette diversification s'étend également aux typologies d'actifs :
              bureaux, commerces, entrepôts logistiques, établissements de santé,
              hôtels, résidences gérées ou encore actifs de type « flex office ».
              Certaines SCPI dites « diversifiées » ou « thématiques » misent
              sur des secteurs porteurs comme la santé, l'éducation ou
              l'immobilier européen, offrant ainsi une exposition encore plus
              large. C'est l'un des arguments les plus forts en faveur de
              l'investissement SCPI avantages par rapport à l'achat immobilier
              direct.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Du point de vue patrimonial, cette diversification réduit
              significativement la volatilité des revenus potentiels dans le
              temps. Un parc de 200 actifs répartis dans 10 pays européens
              présente un profil de risque très différent d'un appartement
              unique dont la rentabilité dépend d'un seul locataire et d'un
              seul marché local.
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
              administrative et comptable à la société de gestion. C'est l'un
              des avantages les plus appréciés des investisseurs qui souhaitent
              bénéficier d'une exposition à l'immobilier professionnel sans en
              subir les contraintes opérationnelles au quotidien.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              L'investisseur n'a pas à gérer lui-même les travaux, les loyers,
              les relances ou la recherche de locataires. La société de gestion
              — agréée et contrôlée par l'Autorité des Marchés Financiers (AMF)
              — prend en charge l'intégralité du cycle de vie de chaque actif :
              depuis sa sélection et son acquisition jusqu'à son arbitrage
              éventuel, en passant par les appels de loyers, la gestion des
              sinistres, les travaux de rénovation et l'optimisation du taux
              d'occupation.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              En contrepartie de cette gestion déléguée, la société perçoit des
              frais de gestion annuels, généralement compris entre 8 % et 12 %
              des loyers encaissés. Ces frais sont déjà déduits des revenus
              distribués aux associés, ce qui rend la lecture du rendement net
              plus directe. La transparence et l'encadrement réglementaire de
              ces frais constituent également un gage de sécurité pour
              l'investisseur.
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
              Cette logique de délégation permet de profiter de l'immobilier
              professionnel dans un format souvent plus fluide à gérer que
              l'immobilier détenu en direct. Concrètement, l'investisseur reçoit
              chaque trimestre (ou chaque mois selon la SCPI) un virement
              correspondant à sa quote-part de revenus, accompagné d'un bulletin
              de situation détaillant la performance et l'état du patrimoine.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Cette gestion passive est particulièrement précieuse pour les
              profils actifs manquant de temps, les expatriés, les investisseurs
              non résidents ou encore les personnes souhaitant préparer leur
              retraite sans s'impliquer dans la gestion quotidienne d'un
              patrimoine immobilier. Pourquoi investir en SCPI plutôt que
              d'acheter seul ? La réponse tient souvent à cette liberté de
              délégation totale.
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
              3. Un ticket d'entrée plus accessible
            </h2>

            <p className="text-[18px] leading-8 text-slate-800">
              Les SCPI permettent souvent d'accéder à l'immobilier avec un
              montant de départ plus progressif que l'achat d'un bien en direct,
              tout en mutualisant immédiatement plusieurs actifs. Selon les SCPI,
              il est possible d'investir à partir de quelques centaines ou
              quelques milliers d'euros, là où l'achat d'un appartement ou d'un
              local commercial requiert généralement plusieurs dizaines voire
              centaines de milliers d'euros d'apport.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              Cette accessibilité permet également d'investir de manière
              progressive, en augmentant son exposition au fil du temps par
              souscriptions successives. Certains contrats d'assurance-vie
              proposent même des versements programmés mensuels sur des SCPI,
              rendant cet investissement accessible à presque tous les profils
              d'épargnants souhaitant construire progressivement un patrimoine
              immobilier pierre-papier.
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
              SCPI et des conditions de marché. La grande majorité des SCPI de
              rendement distribuent leurs revenus trimestriellement, certaines
              mensuellement, ce qui en fait un outil adapté à la construction
              d'un complément de revenus ou à la préparation de la retraite.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              Le Taux de Distribution (TD) moyen des SCPI oscille historiquement
              entre 4 % et 6 % bruts par an, un niveau nettement supérieur au
              Livret A ou aux fonds en euros. Ces revenus proviennent
              exclusivement des loyers encaissés sur le parc immobilier, ce qui
              leur confère une certaine lisibilité par rapport aux revenus issus
              de placements financiers plus volatils. L'avantage rendement SCPI
              est ainsi l'un des arguments centraux de ce type de placement.
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
              5. Une bonne protection contre l'inflation
            </h2>

            <p className="text-[18px] leading-8 text-slate-700">
              La plupart des baux immobiliers commerciaux et professionnels
              comportent des clauses d'indexation automatique sur des indices
              officiels : l'ILC (Indice des Loyers Commerciaux) pour les locaux
              commerciaux, l'ILAT (Indice des Loyers des Activités Tertiaires)
              pour les bureaux et locaux d'activité, ou encore l'ICC (Indice du
              Coût de la Construction). Ces indices évoluent en partie en
              fonction de l'inflation, ce qui permet aux loyers perçus par la
              SCPI de s'ajuster à la hausse dans les périodes inflationnistes.
            </p>

            <ul className="mt-6 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                En période d'inflation, les loyers perçus peuvent augmenter
                mécaniquement grâce à ces clauses d'indexation, ce qui soutient
                le niveau des distributions versées aux associés de la SCPI.
              </li>
              <li className="mb-3">
                Historiquement, les SCPI ont souvent mieux résisté à certaines
                périodes inflationnistes que des placements à revenu fixe comme
                les obligations d'État ou les fonds en euros, dont la valeur
                réelle s'érode en période de forte inflation.
              </li>
              <li>
                La valeur des actifs immobiliers détenus par la SCPI peut
                également évoluer à la hausse avec l'inflation, soutenant ainsi
                la valeur de reconstitution des parts sur le long terme.
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
              L'immobilier papier peut mieux absorber certains chocs de prix
            </h3>

            <p className="text-[18px] leading-8 text-slate-700">
              Grâce à l'indexation des loyers et à la diversification
              géographique et sectorielle, la SCPI reste souvent mieux armée
              qu'un placement à revenu fixe face à l'érosion monétaire. Dans un
              contexte de retour de l'inflation en zone euro, cet avantage
              structurel de la pierre-papier bénéfices prend une importance
              renouvelée.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Il convient toutefois de nuancer : en cas de forte hausse des
              taux d'intérêt consécutive à l'inflation, la valeur des actifs
              immobiliers peut également se corriger à la baisse, comme on l'a
              observé en 2023. La SCPI n'est pas un rempart absolu contre
              l'inflation, mais son profil de résistance reste généralement
              supérieur à celui de nombreux autres placements.
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
              6. Une liquidité relative supérieure à l'immobilier direct
            </h2>

            <p className="text-[18px] leading-8 text-slate-800">
              La revente de parts peut rester plus simple que la cession d'un
              actif immobilier détenu seul, même si la liquidité n'est jamais
              garantie. Pour les SCPI à capital variable, il existe un marché
              primaire animé par la société de gestion qui collecte de nouveaux
              capitaux et rachète les parts à sortir. Pour les SCPI à capital
              fixe, un marché secondaire organisé permet aux associés d'acheter
              et de vendre des parts à un prix qui reflète l'offre et la demande.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              Contrairement à la vente d'un bien immobilier — processus qui peut
              durer plusieurs mois, nécessite un notaire et des frais de cession
              élevés — la cession de parts de SCPI peut s'effectuer plus
              rapidement, même si des délais de traitement existent. Cet
              avantage de liquidité relative est particulièrement apprécié dans
              une stratégie patrimoniale nécessitant de la flexibilité.
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
              Les sociétés de gestion assurent l'acquisition, l'arbitrage, la
              sélection des locataires et le pilotage du patrimoine immobilier.
              Ces équipes sont composées de professionnels de l'immobilier
              d'entreprise — experts en valorisation, juristes, gestionnaires
              locatifs — qui bénéficient d'un accès privilégié à des
              opportunités d'investissement rarement accessibles aux particuliers.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              La due diligence réalisée avant chaque acquisition (audit
              technique, analyse locative, étude de marché, valorisation
              indépendante) apporte un niveau de rigueur que peu d'investisseurs
              particuliers peuvent reproduire seuls. Ce professionnalisme
              constitue l'un des avantages investissement SCPI les plus
              sous-estimés : vous bénéficiez d'une gestion institutionnelle pour
              un investissement individuel.
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
              Les SCPI peuvent s'intégrer dans une stratégie patrimoniale plus
              large, notamment pour organiser progressivement la détention et la
              transmission d'un capital. La nature divisible des parts de SCPI
              facilite la donation fractionnée entre plusieurs héritiers ou
              donataires, évitant les situations d'indivision souvent complexes
              à gérer dans l'immobilier direct.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              La technique du démembrement de propriété est particulièrement
              adaptée aux SCPI : l'investisseur peut conserver l'usufruit (et
              donc les revenus) tout en transmettant la nue-propriété à ses
              enfants. À l'extinction de l'usufruit, la pleine propriété se
              reconstitue automatiquement sans droits de succession
              supplémentaires sur la valeur de l'usufruit. Cette stratégie de
              SCPI fiscalité avantages est l'une des plus utilisées en gestion
              de patrimoine pour transmettre efficacement un capital immobilier.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Il est également possible d'acquérir des parts de SCPI en
              démembrement temporaire croisé : acheter la nue-propriété à prix
              décoté, sans percevoir de revenus pendant une durée définie
              (généralement 5 à 10 ans), puis récupérer la pleine propriété à
              terme. Cette approche convient aux investisseurs qui n'ont pas
              besoin de revenus immédiats et souhaitent préparer leur retraite
              à horizon moyen terme.
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
              d'anticipation successorale ou de diversification patrimoniale.
              Intégrées dans une SCI (Société Civile Immobilière) ou logées
              dans un contrat d'assurance-vie ou de capitalisation, elles
              offrent des possibilités d'optimisation fiscale supplémentaires
              qui renforcent encore leurs avantages patrimoniaux.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Les parts détenues via une assurance-vie bénéficient du cadre
              fiscal avantageux du contrat : imposition réduite après 8 ans,
              abattements successoraux de 152 500 € par bénéficiaire, et
              absence de prélèvements sociaux annuels sur les revenus
              capitalisés. C'est l'une des meilleures façons de cumuler les
              avantages de la pierre-papier et ceux de l'assurance-vie.
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
              d'entrée, de diversification et de délégation que certains schémas
              immobiliers classiques. Pas de compromis de vente, pas de notaire
              pour la souscription, pas de démarches administratives complexes :
              la souscription à une SCPI peut souvent s'effectuer directement
              en ligne ou via un conseiller en gestion de patrimoine (CGP) en
              quelques jours.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              Cette souplesse s'étend aussi à la sortie : il est possible de
              céder une partie seulement de ses parts si l'on a besoin de
              liquidités partielles, ce qui n'est pas envisageable avec un bien
              immobilier physique. Pourquoi investir en SCPI plutôt qu'en
              immobilier direct ? Cette flexibilité opérationnelle est souvent
              citée parmi les premiers arguments.
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
              Comparer plusieurs SCPI permet d'éviter une lecture trop rapide et
              de mieux apprécier les différences de stratégie, d'exposition et
              de positionnement. Les SCPI sont des produits réglementés dont
              la documentation (Document d'Information Clé — DIC, rapport
              annuel, bulletins trimestriels) est standardisée et accessible,
              facilitant la comparaison objective entre différents véhicules.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-800">
              Indicateurs à comparer systématiquement : le Taux de Distribution
              (TD), le Taux d'Occupation Financier (TOF), le prix de la part
              par rapport à la valeur de reconstitution, la stratégie
              géographique et sectorielle, l'ancienneté et la taille de la
              collecte. Cette lisibilité comparative est un avantage réel de la
              pierre-papier bénéfices par rapport à l'immobilier direct, dont
              la valorisation est moins transparente et moins standardisée.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION : RÉCAPITULATIF ── */}
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
              Les avantages des SCPI en résumé : ce qu'il faut retenir avant d'investir
            </h2>

            <p className="text-[18px] leading-8 text-slate-700">
              Pour synthétiser, voici les dix points essentiels à retenir sur
              les avantages d'un investissement en SCPI. Ces éléments
              constituent la base de toute analyse sérieuse de ce placement
              immobilier, et doivent toujours être mis en perspective avec les
              risques inhérents à tout investissement, notamment le risque de
              perte en capital que nous détaillons dans la section suivante.
            </p>

            <ul className="mt-6 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                <strong>Diversification immédiate :</strong> accès à un
                portefeuille de dizaines ou centaines d'actifs professionnels
                avec un seul investissement, réduisant la dépendance à un seul
                bien ou à un seul locataire.
              </li>
              <li className="mb-3">
                <strong>Gestion entièrement déléguée :</strong> aucune
                contrainte opérationnelle pour l'investisseur, qui confie
                l'intégralité de la gestion à une société de gestion agréée
                par l'AMF — acquisition, baux, travaux, recouvrement, reporting.
              </li>
              <li className="mb-3">
                <strong>Ticket d'entrée progressif :</strong> possibilité
                d'investir à partir de quelques centaines ou milliers d'euros,
                bien en deçà du coût d'un bien immobilier physique, avec la
                possibilité d'augmenter son exposition par souscriptions
                successives.
              </li>
              <li className="mb-3">
                <strong>Revenus potentiels réguliers :</strong> distributions
                trimestrielles ou mensuelles issues des loyers encaissés, selon
                les performances de la SCPI et les conditions de marché — sans
                garantie de montant ni de régularité.
              </li>
              <li className="mb-3">
                <strong>Protection partielle contre l'inflation :</strong>{" "}
                indexation des baux commerciaux sur l'ILC ou l'ILAT, permettant
                aux loyers de suivre partiellement l'évolution des prix.
              </li>
              <li className="mb-3">
                <strong>Liquidité relative :</strong> revente de parts
                généralement plus accessible qu'un bien immobilier physique,
                même si aucune liquidité immédiate n'est garantie.
              </li>
              <li className="mb-3">
                <strong>Expertise institutionnelle :</strong> sélection
                rigoureuse des actifs, due diligence approfondie, arbitrages
                stratégiques réalisés par des professionnels — pour un
                investissement individuel accessible.
              </li>
              <li className="mb-3">
                <strong>Outil de transmission patrimoniale :</strong>{" "}
                démembrement de propriété, donation de parts, intégration dans
                une SCI ou dans un contrat d'assurance-vie ou de
                capitalisation.
              </li>
              <li className="mb-3">
                <strong>Souplesse d'entrée et de sortie :</strong> souscription
                rapide, parfois entièrement en ligne, et cession partielle
                possible selon les conditions du marché.
              </li>
              <li className="mb-3">
                <strong>Lisibilité comparative :</strong> documentation
                standardisée — DIC, rapports trimestriels, comptes annuels —
                permettant une comparaison structurée entre différentes SCPI.
              </li>
            </ul>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Pour approfondir chaque dimension de cet investissement, consultez
              nos pages dédiées :{" "}
              <Link
                href="/fiscalite"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                fiscalité des SCPI
              </Link>
              ,{" "}
              <Link
                href="/revente"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                comment revendre ses parts
              </Link>
              ,{" "}
              <Link
                href="/scpi-credit"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                investir en SCPI à crédit
              </Link>{" "}
              ou encore notre{" "}
              <Link
                href="/comparaison"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                outil de comparaison gratuit
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION : SCPI VS IMMOBILIER DIRECT ── */}
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
              SCPI vs immobilier locatif en direct : les principales différences
            </h2>

            <p className="text-[18px] leading-8 text-slate-700">
              L'un des arbitrages patrimoniaux les plus fréquents est celui entre
              l'investissement en SCPI et l'achat d'un bien immobilier locatif
              en direct. Ces deux approches présentent des profils très différents
              en termes de gestion, de ticket d'entrée, de diversification et de
              liquidité. Voici les principales différences à connaître pour faire
              un choix éclairé.
            </p>

            <ul className="mt-6 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                <strong>Ticket d'entrée :</strong> l'immobilier direct requiert
                généralement plusieurs dizaines de milliers d'euros d'apport,
                contre quelques centaines ou milliers d'euros pour une SCPI.
              </li>
              <li className="mb-3">
                <strong>Gestion :</strong> l'immobilier direct implique de gérer
                soi-même (ou via une agence) les locataires, les travaux et la
                comptabilité. La SCPI délègue tout à la société de gestion.
              </li>
              <li className="mb-3">
                <strong>Diversification :</strong> un bien en direct expose
                l'investisseur à un seul actif et un seul locataire. La SCPI
                mutualise le risque sur des dizaines ou centaines d'actifs.
              </li>
              <li className="mb-3">
                <strong>Liquidité :</strong> revendre un appartement peut prendre
                plusieurs mois et nécessite un notaire. Les parts de SCPI peuvent
                être cédées plus rapidement, même si la liquidité n'est jamais
                garantie. Consultez notre page{" "}
                <Link
                  href="/revente"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  revente des parts
                </Link>{" "}
                pour comprendre les mécanismes.
              </li>
              <li className="mb-3">
                <strong>Frais :</strong> l'immobilier direct génère des frais de
                notaire (7 à 8 % dans l'ancien), des charges de copropriété et
                des travaux. La SCPI a des frais de souscription (8 à 12 %) et
                des frais de gestion annuels déduits avant distribution.
              </li>
              <li className="mb-3">
                <strong>Fiscalité :</strong> dans les deux cas, les revenus
                fonciers sont soumis à l'IR et aux prélèvements sociaux. Mais la
                SCPI offre davantage de schémas d'optimisation : assurance-vie,
                démembrement, revenus européens. Consultez notre page{" "}
                <Link
                  href="/fiscalite"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  fiscalité des SCPI
                </Link>{" "}
                pour les détails.
              </li>
              <li className="mb-3">
                <strong>Horizon de placement :</strong> les deux requièrent un
                horizon long terme. La SCPI recommande généralement 8 à 10 ans
                minimum pour amortir les frais d'entrée. Il est également
                possible d'investir{" "}
                <Link
                  href="/scpi-credit"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  en SCPI à crédit
                </Link>{" "}
                pour amplifier l'effet de levier.
              </li>
            </ul>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Ni l'immobilier direct, ni la SCPI n'est universellement supérieur :
              le meilleur choix dépend du profil de l'investisseur, de ses
              objectifs patrimoniaux, de sa capacité à gérer des contraintes
              opérationnelles et de son horizon de placement. Utilisez notre{" "}
              <Link
                href="/comparaison"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                outil de comparaison
              </Link>{" "}
              pour analyser les SCPI disponibles.
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
              Pour qui la SCPI est-elle plus adaptée ?
            </h3>

            <p className="text-[18px] leading-8 text-slate-700">
              La SCPI convient particulièrement aux profils souhaitant investir
              dans l'immobilier sans en subir les contraintes de gestion
              quotidiennes : actifs manquant de temps, expatriés, investisseurs
              souhaitant diversifier un patrimoine existant ou préparer leur
              retraite avec un complément de revenus potentiels.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Elle est également adaptée aux investisseurs disposant d'un apport
              limité qui souhaitent s'exposer à l'immobilier professionnel —
              bureaux, commerces, logistique — difficile d'accès en direct pour
              un particulier.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              En revanche, l'immobilier direct peut être plus adapté à ceux qui
              souhaitent un contrôle total sur leur bien, bénéficier d'un fort
              effet de levier via le crédit, ou profiter de dispositifs de
              défiscalisation sur des biens résidentiels (Pinel, Denormandie).
              Aucune solution ne remplace une analyse personnalisée de la
              situation patrimoniale.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION : RISQUES ET LIMITES ── */}
      <section className="section" style={{ background: "#f3ecd8" }}>
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
              Quels sont les risques et les limites des SCPI ?
            </h2>

            <p className="text-[18px] leading-8 text-slate-700">
              Présenter les avantages des SCPI sans évoquer leurs risques serait
              incomplet et trompeur. Tout investissement immobilier comporte des
              aléas, et les SCPI ne font pas exception. Voici les principaux
              points de vigilance à intégrer impérativement dans votre analyse
              avant d'investir.
            </p>

            <ul className="mt-6 list-disc pl-7 text-[18px] leading-8 text-slate-700">
              <li className="mb-3">
                <strong>Risque de perte en capital :</strong> le prix de la part
                peut baisser si la valeur des actifs détenus par la SCPI se
                déprécie — en cas de retournement du marché immobilier, de forte
                hausse des taux d'intérêt ou de tension locative importante.
                Les performances passées ne garantissent pas les performances
                futures.
              </li>
              <li className="mb-3">
                <strong>Risque locatif :</strong> une hausse de la vacance
                locative ou des impayés peut réduire les revenus distribués. Le
                Taux d'Occupation Financier (TOF) est l'indicateur clé à
                surveiller pour évaluer ce risque avant d'investir.
              </li>
              <li className="mb-3">
                <strong>Risque de liquidité :</strong> même si la cession de
                parts est généralement plus simple qu'un bien en direct, elle
                n'est jamais garantie — en particulier lors de tensions sur le
                marché immobilier ou de collecte insuffisante. La{" "}
                <Link
                  href="/revente"
                  className="font-semibold text-[var(--primary)] underline underline-offset-2"
                >
                  revente de parts de SCPI
                </Link>{" "}
                mérite d'être anticipée.
              </li>
              <li className="mb-3">
                <strong>Frais d'entrée significatifs :</strong> avec des frais
                de souscription de 8 à 12 % en moyenne, un investissement en
                SCPI n'est pertinent que sur un horizon long terme (8 à 10 ans
                minimum). Un désinvestissement prématuré est coûteux.
              </li>
              <li className="mb-3">
                <strong>Risque de taux :</strong> en période de forte hausse des
                taux d'intérêt, la valeur des actifs immobiliers peut se corriger,
                entraînant une baisse potentielle du prix des parts, comme on l'a
                observé sur plusieurs SCPI en 2023.
              </li>
              <li className="mb-3">
                <strong>Revenus non garantis :</strong> les distributions sont
                variables et peuvent être réduites, suspendues ou modifiées à
                tout moment selon les performances du portefeuille et les décisions
                de la société de gestion.
              </li>
              <li className="mb-3">
                <strong>Risque de change :</strong> pour les SCPI investissant
                hors zone euro (Royaume-Uni, pays nordiques, etc.), une évolution
                défavorable des taux de change peut affecter les revenus
                rapatriés et la valeur des actifs.
              </li>
            </ul>

            <p className="mt-6 text-[18px] leading-8 text-slate-700">
              Ces risques ne disqualifient pas les SCPI comme outil patrimonial,
              mais ils soulignent l'importance d'une sélection rigoureuse, d'une
              diversification entre plusieurs véhicules et d'un horizon de placement
              adapté. Utilisez notre{" "}
              <Link
                href="/comparaison"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                outil de comparaison
              </Link>{" "}
              pour analyser les SCPI disponibles et{" "}
              <Link
                href="/guide-pdf"
                className="font-semibold text-[var(--primary)] underline underline-offset-2"
              >
                téléchargez notre guide gratuit
              </Link>{" "}
              pour approfondir votre analyse avant d'investir.
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
              de SCPI : rendement SCPI avantages, stratégie géographique,
              fiscalité et profil de risque.
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
              rapidement. Aucun conseil en investissement, uniquement de
              l'information patrimoniale objective.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
