export type Scpi = {
  id: string;
  name: string;
  manager: string;
  category: string;
  sharePrice: string;
  sri: string;
  nominalValue: string;
  enjoymentDelay: string;
  dividendFrequency: string;
};

export const scpis: Scpi[] = [
  {
    id: "comete",
    name: "Comète",
    manager: "Alderan",
    category: "Diversifiée",
    sharePrice: "250,00 €",
    sri: "3",
    nominalValue: "150,00 €",
    enjoymentDelay: "1er jour du 6e mois",
    dividendFrequency: "Mensuel",
  },
  {
    id: "epargne-pierre",
    name: "Épargne Pierre",
    manager: "Atland Voisin",
    category: "Bureaux",
    sharePrice: "208,00 €",
    sri: "3",
    nominalValue: "194,01 €",
    enjoymentDelay: "1er jour du 4e mois",
    dividendFrequency: "Trimestriel",
  },
  {
    id: "ncap-regions",
    name: "NCAP Régions",
    manager: "Norma Capital",
    category: "Diversifiée",
    sharePrice: "682,00 €",
    sri: "3",
    nominalValue: "650,00 €",
    enjoymentDelay: "1er jour du 6e mois",
    dividendFrequency: "Mensuel",
  },
  {
    id: "remake-live",
    name: "Remake Live",
    manager: "Remake",
    category: "Diversifiée",
    sharePrice: "204,00 €",
    sri: "3",
    nominalValue: "194,01 €",
    enjoymentDelay: "1er jour du 4e mois",
    dividendFrequency: "Mensuel",
  },
  {
    id: "transitions-europe",
    name: "Transitions Europe",
    manager: "Arkéa REIM",
    category: "Diversifiée",
    sharePrice: "200,00 €",
    sri: "3",
    nominalValue: "190,00 €",
    enjoymentDelay: "1er jour du 6e mois",
    dividendFrequency: "Trimestriel",
  },
  {
    id: "iroko-zen",
    name: "Iroko Zen",
    manager: "Iroko",
    category: "Diversifiée",
    sharePrice: "202,00 €",
    sri: "3",
    nominalValue: "173,00 €",
    enjoymentDelay: "1er jour du 6e mois",
    dividendFrequency: "Mensuel",
  },
  {
    id: "log-in",
    name: "Log In",
    manager: "Theoreim",
    category: "Logistique et locaux d’activité",
    sharePrice: "250,00 €",
    sri: "3",
    nominalValue: "192,00 €",
    enjoymentDelay: "1er jour du 6e mois",
    dividendFrequency: "Trimestriel",
  },
  {
    id: "alta-convictions",
    name: "Alta Convictions",
    manager: "Altarea IM",
    category: "Diversifiée",
    sharePrice: "305,00 €",
    sri: "3",
    nominalValue: "195,00 €",
    enjoymentDelay: "1er jour du 4e mois",
    dividendFrequency: "Mensuel",
  },
  {
    id: "epargne-pierre-europe",
    name: "Épargne Pierre Europe",
    manager: "Atland Voisin",
    category: "Diversifiée",
    sharePrice: "200,00 €",
    sri: "3",
    nominalValue: "190,01 €",
    enjoymentDelay: "1er jour du 6e mois",
    dividendFrequency: "Trimestriel",
  },
];