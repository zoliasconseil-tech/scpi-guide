import SectionTitle from "@/components/SectionTitle";

const faqItems = [
  {
    q: "Qu’est-ce qu’une SCPI ?",
    a: "Une SCPI est une société civile de placement immobilier qui permet à des investisseurs de détenir des parts d’un patrimoine immobilier géré par une société de gestion.",
  },
  {
    q: "Les SCPI versent-elles forcément un revenu ?",
    a: "Non. Les revenus peuvent varier dans le temps selon l’occupation des immeubles, la stratégie de gestion, les arbitrages réalisés et l’environnement économique.",
  },
  {
    q: "Le capital est-il garanti ?",
    a: "Non. Comme tout placement immobilier, les SCPI comportent un risque de perte en capital et une variation possible de la valeur des parts.",
  },
  {
    q: "Peut-on revendre facilement ses parts ?",
    a: "La revente est possible, mais elle peut prendre du temps selon les conditions de marché et la demande existante.",
  },
  {
    q: "Les SCPI sont-elles adaptées à tous les profils ?",
    a: "Non. Elles doivent être analysées selon la situation fiscale, le besoin de liquidité, l’horizon d’investissement et les objectifs patrimoniaux.",
  },
  {
    q: "Pourquoi comparer plusieurs SCPI avant de choisir ?",
    a: "Parce qu’une SCPI se juge sur un ensemble de critères et non sur un seul indicateur. Une approche comparative permet d’éviter les lectures trop simplistes.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <h1>Questions fréquentes sur les SCPI</h1>
          <p>
            Cette rubrique rassemble les questions les plus courantes sur le
            fonctionnement des SCPI, leur fiscalité, leur liquidité et les
            critères à observer avant une éventuelle souscription.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionTitle
            eyebrow="FAQ"
            title="Réponses aux questions les plus courantes"
          />

          <div className="faq-list">
            {faqItems.map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}