import Link from "next/link";

export default function ArticleScpiEnAssuranceViePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Blog SCPI
          </p>
          <h1>SCPI en assurance-vie : la combinaison gagnante pour optimiser votre fiscalité</h1>
          <p>
            Investir en SCPI est déjà une décision patrimoniale intelligente. Mais
            le faire via une assurance-vie, c'est franchir un nouveau palier :
            celui de l'optimisation fiscale. Cette stratégie, encore sous-estimée
            par de nombreux épargnants, permet de cumuler les atouts de
            l'immobilier pierre-papier avec l'une des enveloppes fiscales les plus
            efficaces du droit français.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <article className="content-block">
            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Qu'est-ce qu'une SCPI en assurance-vie ?
            </h2>

            <p>
              Dans un contrat d'assurance-vie multisupport, vous pouvez investir
              dans des unités de compte (UC) — parmi lesquelles figurent certaines
              SCPI. Concrètement, vous demandez à votre assureur d'allouer une
              partie de votre contrat à des parts de SCPI. C'est l'assureur qui
              détient techniquement les parts (en son nom propre), et vous
              bénéficiez d'une valeur de référence indexée sur la valeur de ces
              SCPI.
            </p>

            <p>
              Attention : toutes les SCPI ne sont pas disponibles dans tous les
              contrats. Chaque assureur propose une liste restreinte de SCPI
              référencées. Avant de souscrire, vérifiez les SCPI disponibles sur
              votre contrat.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Les avantages de la SCPI en assurance-vie
            </h2>

            <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">
              1. Une fiscalité nettement plus douce
            </h3>

            <p>
              C'est le principal argument. En détention directe, les revenus des
              SCPI sont imposés comme des revenus fonciers : tranche marginale
              d'imposition (TMI) + 17,2 % de prélèvements sociaux. Pour un
              contribuable à 41 %, cela représente une ponction de 58,2 % sur
              chaque euro de loyer perçu.
            </p>

            <p>
              Via l'assurance-vie, les revenus générés par les SCPI sont
              capitalisés au sein du contrat (ils ne sont pas fiscalisés au fil de
              l'eau). L'imposition ne s'applique qu'au moment d'un rachat partiel
              ou total, et uniquement sur la quote-part de plus-value.
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Durée de détention</th>
                    <th>Fiscalité des rachats (sur les gains)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Moins de 4 ans</td>
                    <td>PFU 30 % (12,8 % IR + 17,2 % PS)</td>
                  </tr>
                  <tr>
                    <td>4 à 8 ans</td>
                    <td>PFU 30 %</td>
                  </tr>
                  <tr>
                    <td>Après 8 ans</td>
                    <td>
                      7,5 % IR + 17,2 % PS + abattement annuel 4 600 €
                      (célibataire) / 9 200 € (couple)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Un investisseur à 41 % de TMI qui laisse ses SCPI capitaliser pendant
              10 ans dans son assurance-vie ne paiera que 24,7 % sur ses gains à la
              sortie (7,5 % + 17,2 %) au lieu de 58,2 % en direct — soit une
              économie considérable.
            </p>

            <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">
              2. Un avantage successoral incomparable
            </h3>

            <p>
              L'assurance-vie bénéficie d'un régime successoral spécifique : les
              capitaux transmis au décès échappent aux droits de succession dans la
              limite de 152 500 € par bénéficiaire désigné (pour les primes versées
              avant 70 ans). Vos SCPI en assurance-vie peuvent donc être transmises
              à vos enfants, neveux, ou tout autre bénéficiaire avec une fiscalité
              très allégée. C'est un avantage que l'achat direct de parts de SCPI
              ne peut pas offrir.
            </p>

            <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">
              3. Une liquidité améliorée
            </h3>

            <p>
              Dans un contrat d'assurance-vie, le rachat est généralement plus
              rapide qu'une cession de parts sur le marché secondaire d'une SCPI.
              L'assureur s'engage à racheter les unités de compte dans des délais
              précis (en général sous 15 à 30 jours ouvrés), ce qui donne une
              certaine flexibilité.
            </p>

            <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">
              4. Une mutualisation avec d'autres supports
            </h3>

            <p>
              Votre contrat peut mixer SCPI, fonds euros (sécurisé), actions,
              obligations, ETF immobiliers… Vous gérez votre allocation en un seul
              contrat, avec une vision consolidée de votre patrimoine financier.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Les limites à connaître
            </h2>

            <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">
              Décote sur les rendements
            </h3>

            <p>
              L'assureur ne vous reverse pas 100 % des loyers perçus par la SCPI.
              Il prélève des frais de gestion sur les unités de compte (généralement
              0,5 % à 1 % par an sur l'encours). Certains assureurs appliquent
              également une décote sur la valeur de retrait (souvent 90 à 97 % de
              la valeur nominale de la part). Résultat : le rendement net de votre
              SCPI en assurance-vie sera légèrement inférieur à celui d'une
              détention en direct.
            </p>

            <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">
              Pas de financement à crédit
            </h3>

            <p>
              Contrairement à l'achat direct de parts, il est impossible d'investir
              à crédit dans une SCPI via une assurance-vie. Vous investissez
              obligatoirement sur fonds propres. L'effet de levier du crédit est
              donc inaccessible dans ce cadre.
            </p>

            <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">
              Liste de SCPI restreinte
            </h3>

            <p>
              Chaque assureur sélectionne les SCPI qu'il référence dans ses
              contrats. Vous n'aurez pas accès à l'intégralité du marché. Si vous
              souhaitez une SCPI spécifique, vérifiez qu'elle est disponible dans
              votre contrat avant de le souscrire.
            </p>

            <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">
              Revenus non versés directement
            </h3>

            <p>
              En assurance-vie, les loyers des SCPI sont réinvestis dans le contrat
              (ou arbitrés vers le fonds euros). Ils ne sont pas versés sur votre
              compte bancaire. Si vous avez besoin de revenus immédiats, la
              détention directe est plus adaptée.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              SCPI en direct vs SCPI en assurance-vie : le comparatif
            </h2>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th>SCPI en direct</th>
                    <th>SCPI en assurance-vie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fiscalité sur les revenus</td>
                    <td>Revenus fonciers (TMI + 17,2 %)</td>
                    <td>Capitalisés, imposition au rachat uniquement</td>
                  </tr>
                  <tr>
                    <td>Fiscalité après 8 ans</td>
                    <td>Inchangée (TMI + 17,2 %)</td>
                    <td>7,5 % + 17,2 % + abattement annuel</td>
                  </tr>
                  <tr>
                    <td>Avantage succession</td>
                    <td>Droits de succession classiques</td>
                    <td>Jusqu'à 152 500 € exonérés par bénéficiaire</td>
                  </tr>
                  <tr>
                    <td>Revenus réguliers</td>
                    <td>Oui (versés trimestriellement)</td>
                    <td>Non (capitalisés dans le contrat)</td>
                  </tr>
                  <tr>
                    <td>Financement à crédit</td>
                    <td>Oui</td>
                    <td>Non</td>
                  </tr>
                  <tr>
                    <td>Choix des SCPI</td>
                    <td>Accès à l'ensemble du marché</td>
                    <td>Liste restreinte par l'assureur</td>
                  </tr>
                  <tr>
                    <td>Liquidité</td>
                    <td>Marché secondaire (1–6 mois)</td>
                    <td>Rachat par l'assureur (15–30 jours)</td>
                  </tr>
                  <tr>
                    <td>Frais supplémentaires</td>
                    <td>Frais de souscription SCPI uniquement</td>
                    <td>+ Frais de gestion UC (0,5 à 1 %/an)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Qui devrait privilégier la SCPI en assurance-vie ?
            </h2>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Votre profil</th>
                    <th>Pertinence de la SCPI en AV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tranche marginale à 30 % ou plus</td>
                    <td>Très fort — économie fiscale très significative</td>
                  </tr>
                  <tr>
                    <td>Préparation de la transmission patrimoniale</td>
                    <td>Très fort — abattement successoral puissant</td>
                  </tr>
                  <tr>
                    <td>Horizon long terme (10 ans et plus)</td>
                    <td>Fort — temps d'optimiser la fiscalité AV</td>
                  </tr>
                  <tr>
                    <td>Besoin de revenus complémentaires immédiats</td>
                    <td>Faible — détention directe préférable</td>
                  </tr>
                  <tr>
                    <td>Souhait d'investir à crédit</td>
                    <td>Non adapté — incompatible avec l'AV</td>
                  </tr>
                  <tr>
                    <td>Profil patrimonial diversifié</td>
                    <td>Fort — gestion centralisée dans un seul contrat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              La stratégie gagnante : combiner les deux modes
            </h2>

            <p>
              Les investisseurs les plus avisés ne choisissent pas entre SCPI en
              direct et SCPI en assurance-vie — ils combinent les deux.
            </p>

            <p>Exemple de stratégie à double détente :</p>

            <ul>
              <li>
                <strong>SCPI à crédit en direct</strong> : effet de levier
                bancaire, déduction des intérêts d'emprunt — optimisation pendant
                la phase de remboursement.
              </li>
              <li>
                <strong>SCPI en assurance-vie sur fonds propres</strong> :
                capitalisation des loyers, fiscalité douce à long terme,
                préparation de la transmission.
              </li>
            </ul>

            <p>
              Cette double approche permet de maximiser le rendement net sur la
              durée tout en gérant efficacement la fiscalité et la succession.
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-bold text-slate-900">
              Ce qu'il faut retenir
            </h2>

            <p>
              La SCPI en assurance-vie n'est pas un produit de rendement à court
              terme — c'est un outil d'optimisation patrimoniale sur le long terme.
              Elle s'adresse particulièrement aux contribuables fortement imposés et
              à ceux qui souhaitent préparer leur succession avec efficacité.
            </p>

            <p>
              La combinaison SCPI + assurance-vie est l'une des stratégies les plus
              puissantes en gestion de patrimoine, mais elle nécessite un contrat
              bien choisi, des SCPI adaptées à votre profil et une vision long
              terme.
            </p>

            <p className="mt-6 text-sm text-slate-500">
              Cet article est fourni à titre informatif et ne constitue pas un
              conseil en investissement ni un conseil fiscal. Les règles fiscales
              peuvent évoluer. Consultez un conseiller en gestion de patrimoine ou
              un avocat fiscaliste avant toute décision d'investissement.
            </p>

            <div className="mt-10">
              <Link href="/fiscalite" className="btn-primary">
                Comprendre la fiscalité des SCPI
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
