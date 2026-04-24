export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-slate-900">GuideSCPI</h3>
            <p>
              Site pédagogique d’information sur les SCPI : fonctionnement,
              fiscalité, avantages, revente, comparaison et guide PDF gratuit.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-slate-900">Rubriques</h3>
            <ul className="space-y-2">
              <li>Accueil</li>
              <li>Fiscalité SCPI</li>
              <li>Avantages</li>
              <li>Revente</li>
              <li>Guide PDF</li>
              <li>Comparaison</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-slate-900">Informations</h3>
            <ul className="space-y-2">
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>Gestion des cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}