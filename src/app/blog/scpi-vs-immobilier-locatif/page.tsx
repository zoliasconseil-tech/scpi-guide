import Link from "next/link";

export default function ArticleScpiVsImmobilierLocatifPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Blog SCPI
          </p>
          <h1>SCPI vs immobilier locatif direct : le grand comparatif</h1>
          <p>
            Vous envisagez d'investir dans l'immobilier, mais vous hésitez entre
            acheter un bien en direct et souscrire des parts de SCPI ? Les deux
            approches permettent d'investir dans la pierre, de percevoir des
            revenus réguliers et de constituer un patrimoine immobilier — mais
            elles fonctionnent de manière radicalement différente.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <article className="content-block">
            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Le tableau de comparaison en un coup d'œil
            </h2>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th>SCPI</th>
                    <th>Immobilier locatif direct</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ticket d'entrée</td>
                    <td>À partir de quelques centaines d'euros</td>
                    <td>80 000 – 100 000 € (studio dans une ville moyenne)</td>
                  </tr>
                  <tr>
                    <td>Gestion</td>
                    <td>100 % déléguée à la société de gestion</td>
                    <td>À la charge du propriétaire (ou mandat de gestion)</td>
                  </tr>
                  <tr>
                    <td>Diversification</td>
                    <td>Automatique (dizaines d'actifs, plusieurs zones géographiques)</td>
                    <td>Limitée</td>
                  </tr>
                  <tr>
                    <td>Rendement brut moyen</td>
                    <td>4,5 à 5,5 %</td>
                    <td>4 à 7 % (selon localisation)</td>
                  </tr>
                  <tr>
                    <td>Rendement net (après charges et fiscalité)</td>
                    <td>3 à 4 %</td>
                    <td>2,5 à 4,5 % (très variable)</td>
                  </tr>
                  <tr>
                    <td>Liquidité</td>
                    <td>Modérée (marché secondaire, délai 1–6 mois)</td>
                    <td>Faible (vente = 3 à 12 mois)</td>
                  </tr>
                  <tr>
                    <td>Travaux / vacance</td>
                    <td>Mutualisés sur l'ensemble du parc</td>
                    <td>À la charge du propriétaire</td>
                  </tr>
                  <tr>
                    <td>Levier crédit</td>
                    <td>Oui</td>
                    <td>Oui</td>
                  </tr>
                  <tr>
                    <td>Risque de concentration</td>
                    <td>Très faible</td>
                    <td>Élevé (tout misé sur un ou deux biens)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Le rendement : à chiffres équivalents, pourquoi la SCPI résiste ?
            </h2>

            <p>
              Sur le papier, le locatif direct affiche souvent un rendement brut
              supérieur à celui d'une SCPI, surtout en province. Un T2 à
              120 000 € loué 700 €/mois génère un rendement brut d'environ 7 %.
              Séduisant.
            </p>

            <p>
              Mais le rendement net après déduction de toutes les charges raconte
              une autre histoire.
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Simulation comparative : 200 000 € investis</th>
                    <th>SCPI (200 000 €)</th>
                    <th>Locatif direct (200 000 €)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rendement brut</td>
                    <td>5 % = 10 000 €/an</td>
                    <td>6 % = 12 000 €/an</td>
                  </tr>
                  <tr>
                    <td>Frais de gestion</td>
                    <td>Inclus dans le taux</td>
                    <td>8 % des loyers = −960 €/an</td>
                  </tr>
                  <tr>
                    <td>Charges de copropriété</td>
                    <td>Incluses</td>
                    <td>−800 €/an (moyenne)</td>
                  </tr>
                  <tr>
                    <td>Travaux / entretien</td>
                    <td>Mutualisés</td>
                    <td>−600 €/an (moyenne sur 10 ans)</td>
                  </tr>
                  <tr>
                    <td>Vacance locative</td>
                    <td>Mutualisée</td>
                    <td>−480 €/an (1 mois / 2 ans en moyenne)</td>
                  </tr>
                  <tr>
                    <td>Assurance propriétaire non occupant</td>
                    <td>Incluse</td>
                    <td>−200 €/an</td>
                  </tr>
                  <tr>
                    <td>Revenu net avant impôt</td>
                    <td>~10 000 €/an</td>
                    <td>~8 960 €/an</td>
                  </tr>
                  <tr>
                    <td>Rendement net estimé</td>
                    <td>~5,0 %</td>
                    <td>~4,5 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Simulation indicative. Charges variables selon les situations.
            </p>

            <p>
              La SCPI efface son rendement brut légèrement inférieur grâce à la
              mutualisation des coûts et à l'absence de surprises (vacance,
              travaux imprévus, litige locataire).
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              La gestion : la différence fondamentale
            </h2>

            <p>
              En locatif direct, même avec un mandat de gestion, vous restez
              propriétaire et donc responsable : décisions de travaux, contentieux
              locataires, gestion des sinistres, suivi des charges de
              copropriété… La pierre en direct exige du temps, de l'énergie, et
              parfois des nerfs solides. Gérer seul 1 ou 2 biens représente en
              moyenne 3 à 5 heures par mois — plus en cas de problème.
            </p>

            <p>
              En SCPI, vous êtes associé, pas gestionnaire. La société de gestion
              (agréée AMF) prend en charge tout : sélection des actifs, recherche
              des locataires, recouvrement des loyers, entretien, arbitrage… Votre
              rôle se résume à recevoir vos revenus trimestriels et à déclarer vos
              revenus fonciers.
            </p>

            <p>
              Si vous valorisez votre temps, cherchez une gestion zéro stress ou
              gérez déjà un patrimoine immobilier complexe, la SCPI est clairement
              plus adaptée.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              La fiscalité : deux régimes similaires, une marge de manœuvre différente
            </h2>

            <p>
              Les deux modes d'investissement génèrent des revenus fonciers,
              imposés de la même façon : imposition à votre tranche marginale
              d'imposition (TMI) et prélèvements sociaux de 17,2 %. La différence
              réside dans les possibilités d'optimisation.
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Dispositif</th>
                    <th>SCPI</th>
                    <th>Locatif direct</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Régime micro-foncier (&lt; 15 000 €/an)</td>
                    <td>Oui (abattement 30 %) sous conditions</td>
                    <td>Oui (abattement 30 %)</td>
                  </tr>
                  <tr>
                    <td>Régime réel (déduction charges réelles)</td>
                    <td>Oui (par défaut)</td>
                    <td>Oui</td>
                  </tr>
                  <tr>
                    <td>Déduction des intérêts d'emprunt</td>
                    <td>Oui (si achat à crédit)</td>
                    <td>Oui</td>
                  </tr>
                  <tr>
                    <td>Déduction des travaux</td>
                    <td>Non (sauf SCPI déficit foncier)</td>
                    <td>Oui (gros avantage du locatif)</td>
                  </tr>
                  <tr>
                    <td>Investissement via assurance-vie</td>
                    <td>Oui (fiscalité AV)</td>
                    <td>Non</td>
                  </tr>
                  <tr>
                    <td>Investissement en nue-propriété</td>
                    <td>Oui (aucune fiscalité pendant la durée)</td>
                    <td>Oui mais plus complexe</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Le locatif direct conserve un avantage fiscal important : la
              déductibilité des travaux. Un propriétaire au régime réel qui réalise
              20 000 € de travaux peut les imputer sur ses revenus fonciers, voire
              créer un déficit foncier de 10 700 €/an déductible du revenu global.
              C'est un levier fiscal puissant que la SCPI classique ne permet pas.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              La liquidité : un écart qui compte
            </h2>

            <p>
              Vendre un appartement prend en moyenne 3 à 6 mois (parfois plus en
              période de crise). La SCPI dispose d'un marché secondaire et de
              délais de retrait qui varient selon les SCPI et les conditions de
              marché, mais restent généralement plus courts qu'une cession
              immobilière classique.
            </p>

            <p>
              Cela dit, aucun des deux investissements n'est « liquide » au sens
              financier du terme. Ni la SCPI ni le locatif ne sont faits pour des
              horizons courts — on recommande dans les deux cas un minimum de 8 à
              10 ans.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Le crédit : un accélérateur dans les deux cas
            </h2>

            <p>
              Les deux stratégies sont compatibles avec le financement à crédit —
              et c'est précisément là que l'effet de levier prend tout son sens.
              Emprunter à 3–4 % pour investir dans un actif qui rapporte 4,5–5,5 %
              net crée une plus-value patrimoniale immédiate.
            </p>

            <p>
              Notez cependant que les banques acceptent plus facilement de financer
              l'immobilier direct (garantie hypothécaire plus simple) que les SCPI
              (nantissement de parts). Les conditions d'octroi pour la SCPI à crédit
              sont plus sélectives — mais les établissements spécialisés existent.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Deux stratégies complémentaires, pas opposées
            </h2>

            <p>
              La vraie réponse à la question « SCPI ou locatif ? » n'est pas
              binaire. Ces deux approches sont souvent complémentaires :
            </p>

            <ul>
              <li>
                Un propriétaire qui détient déjà un bien locatif en direct peut
                diversifier son risque avec des SCPI.
              </li>
              <li>
                Un épargnant sans expérience immobilière peut commencer par les
                SCPI pour s'exposer à l'immobilier sans les contraintes.
              </li>
              <li>
                Un investisseur à forte fiscalité peut combiner : SCPI en
                nue-propriété + locatif avec travaux pour optimiser son bilan
                fiscal.
              </li>
            </ul>

            <div className="table-wrap mt-8">
              <table>
                <thead>
                  <tr>
                    <th>Votre situation</th>
                    <th>Recommandation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vous débutez, peu de temps à consacrer</td>
                    <td>SCPI en priorité</td>
                  </tr>
                  <tr>
                    <td>Vous êtes bricoleur, vous aimez gérer</td>
                    <td>Locatif direct envisageable</td>
                  </tr>
                  <tr>
                    <td>Vous avez déjà 1–2 biens en direct</td>
                    <td>Diversifiez avec des SCPI</td>
                  </tr>
                  <tr>
                    <td>Vous êtes fortement imposé</td>
                    <td>SCPI + locatif déficit foncier</td>
                  </tr>
                  <tr>
                    <td>Vous souhaitez investir à crédit sans apport élevé</td>
                    <td>SCPI à crédit plus accessible</td>
                  </tr>
                  <tr>
                    <td>Vous préparez votre retraite sur 15–20 ans</td>
                    <td>Les deux, selon votre capacité de gestion</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Ce qu'il faut retenir
            </h2>

            <p>
              La SCPI n'est pas « mieux » que l'immobilier locatif, ni l'inverse.
              Chaque stratégie a ses avantages et ses contraintes propres. Là où le
              locatif direct offre un potentiel de rendement brut plus élevé et une
              déductibilité des travaux, la SCPI se distingue par sa simplicité de
              gestion, sa diversification automatique et son accessibilité.
            </p>

            <p>
              La clé, c'est d'aligner votre stratégie immobilière avec votre
              profil : disponibilité, fiscalité, horizon d'investissement et
              appétence pour la gestion.
            </p>

            <p className="mt-6 text-sm text-slate-500">
              Cet article est fourni à titre informatif et ne constitue pas un
              conseil en investissement. Les rendements mentionnés sont des
              estimations moyennes. Consultez un professionnel avant toute décision
              d'investissement.
            </p>

            <div className="mt-10">
              <Link href="/comparaison" className="btn-primary">
                Accéder au comparateur de SCPI
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
