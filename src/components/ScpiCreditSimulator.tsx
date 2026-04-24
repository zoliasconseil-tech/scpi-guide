"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import jsPDF from "jspdf";
import LeadForm from "@/components/LeadForm";

const TMI = 0.30;
const YIELD_RATE = 0.05;
const CREDIT_RATE = 0.051;
const SOCIAL_TAX = 0.172;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function round(value: number) {
  return Math.round(value);
}

export default function ScpiCreditSimulator() {
  const [enveloppe, setEnveloppe] = useState("");
  const [apport, setApport] = useState("");
  const [duree, setDuree] = useState("");
  const [showForm, setShowForm] = useState(false);

  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showForm]);

  const simulation = useMemo(() => {
    const enveloppeNum = Number(enveloppe);
    const apportNum = Number(apport);
    const dureeYears = Number(duree);

    if (
      !enveloppeNum ||
      !dureeYears ||
      enveloppeNum <= 0 ||
      dureeYears <= 0 ||
      apportNum < 0 ||
      apportNum > enveloppeNum
    ) {
      return null;
    }

    const financed = enveloppeNum - apportNum;
    const months = Math.round(dureeYears * 12);
    const monthlyRate = CREDIT_RATE / 12;

    const mensualite =
      financed <= 0
        ? 0
        : financed *
          (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));

    let balance = financed;
    const annualInterests = Array.from({ length: dureeYears }, () => 0);

    for (let month = 1; month <= months; month++) {
      const interest = balance * monthlyRate;
      const principal = mensualite - interest;
      balance = Math.max(0, balance - principal);

      const yearIndex = Math.ceil(month / 12) - 1;
      if (annualInterests[yearIndex] !== undefined) {
        annualInterests[yearIndex] += interest;
      }
    }

    const grossAnnualRevenue = enveloppeNum * YIELD_RATE;
    const annualDebtService = mensualite * 12;

const monthlySavingsByYear = annualInterests.map((annualInterest) => {
  const taxableIncome = grossAnnualRevenue - annualInterest;

  const incomeTax = taxableIncome * TMI;
  const socialTax = taxableIncome * SOCIAL_TAX;

  const totalTax = incomeTax + socialTax;
  const netAnnualRevenueAfterTax = grossAnnualRevenue - totalTax;
  const annualSavings = netAnnualRevenueAfterTax - annualDebtService;

  return annualSavings / 12;
});

    const avgMonthlySavings =
      monthlySavingsByYear.reduce((sum, value) => sum + value, 0) /
      monthlySavingsByYear.length;

    const effortEpargneMoyen = Math.max(0, -avgMonthlySavings);

    const taxableIncomeTerm = grossAnnualRevenue;
    const incomeTaxTerm = taxableIncomeTerm * TMI;
    const socialTaxTerm = taxableIncomeTerm * SOCIAL_TAX;
    const totalTaxTerm = incomeTaxTerm + socialTaxTerm;

    const netAnnualRevenueTerm = grossAnnualRevenue - totalTaxTerm;
    const revenusTermeMensuels = netAnnualRevenueTerm / 12;

    return {
      enveloppe: enveloppeNum,
      apport: apportNum,
      financed,
      dureeYears,
      months,
      mensualite,
      annualDebtService,
      grossAnnualRevenue,
      effortEpargneMoyen,
      revenusTermeMensuels,
    };
  }, [enveloppe, apport, duree]);

  function generatePdf() {
  if (!simulation) return;

  const doc = new jsPDF();

  const navy: [number, number, number] = [23, 54, 93];
  const softBg: [number, number, number] = [245, 247, 250];
  const textDark: [number, number, number] = [20, 33, 61];
  const textSoft: [number, number, number] = [91, 100, 114];
  const border: [number, number, number] = [217, 224, 231];
  const purple: [number, number, number] = [109, 61, 245];

  const pageWidth = doc.internal.pageSize.getWidth();

  doc.setFillColor(...softBg);
  doc.rect(0, 0, pageWidth, 38, "F");

  doc.setTextColor(...navy);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("GuideSCPI", 14, 18);

  doc.setFontSize(18);
  doc.text("Simulation SCPI à crédit", 14, 30);

  doc.setDrawColor(...border);
  doc.line(14, 42, 196, 42);

  doc.setTextColor(...textSoft);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(
    "Document généré à partir de votre simulation en ligne",
    14,
    49
  );

  doc.setFillColor(...softBg);
  doc.roundedRect(14, 58, 88, 34, 4, 4, "F");
  doc.roundedRect(108, 58, 88, 34, 4, 4, "F");

  doc.setTextColor(...textDark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Effort d’épargne moyen", 20, 70);

  doc.setTextColor(...purple);
  doc.setFontSize(18);
  doc.text(
    `${formatCurrency(round(simulation.effortEpargneMoyen))} / mois`,
    20,
    82
  );

  doc.setTextColor(...textDark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Revenus à terme", 114, 70);

  doc.setTextColor(...purple);
  doc.setFontSize(18);
  doc.text(
    `${formatCurrency(round(simulation.revenusTermeMensuels))} / mois`,
    114,
    82
  );

  doc.setFont("helvetica", "bold");
  doc.setTextColor(...navy);
  doc.setFontSize(13);
  doc.text("Données saisies", 14, 108);

  doc.setDrawColor(...border);
  doc.roundedRect(14, 114, 182, 42, 4, 4, "S");

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...textDark);
  doc.setFontSize(11);
  doc.text(`Enveloppe totale : ${formatCurrency(simulation.enveloppe)}`, 20, 126);
  doc.text(`Apport : ${formatCurrency(simulation.apport)}`, 20, 136);
  doc.text(`Montant financé : ${formatCurrency(simulation.financed)}`, 20, 146);
  doc.text(`Durée de crédit : ${simulation.dureeYears} ans`, 110, 126);
  doc.text(
    `Mensualité estimée : ${formatCurrency(round(simulation.mensualite))} / mois`,
    110,
    136
  );
  doc.text(`Taux de crédit : 5,10%`, 110, 146);

  doc.setFont("helvetica", "bold");
  doc.setTextColor(...navy);
  doc.setFontSize(13);
  doc.text("Hypothèses de calcul", 14, 172);

  doc.setDrawColor(...border);
  doc.roundedRect(14, 178, 182, 28, 4, 4, "S");

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...textDark);
  doc.setFontSize(11);
  doc.text("TMI : 30%", 20, 190);
  doc.text("Taux de rendement : 5%", 70, 190);
  doc.text("Prélèvements sociaux : 17,2%", 130, 190);

  doc.setFont("helvetica", "bold");
  doc.setTextColor(...navy);
  doc.setFontSize(13);
  doc.text("Lecture des résultats", 14, 222);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...textDark);
  doc.setFontSize(11);
  const explanation = doc.splitTextToSize(
    "L’effort d’épargne moyen correspond à l’effort mensuel estimé pendant la durée du financement. Les revenus à terme correspondent aux revenus mensuels estimés une fois le crédit remboursé, sur la base des hypothèses retenues dans la simulation.",
    182
  );
  doc.text(explanation, 14, 230);

  doc.setDrawColor(...border);
  doc.line(14, 272, 196, 272);

  doc.setFontSize(9);
  doc.setTextColor(...textSoft);
  doc.text(
    "Simulation indicative sans valeur contractuelle - GuideSCPI",
    14,
    279
  );

  doc.save("simulation-scpi-credit.pdf");
}

  return (
    <div className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="form-shell">
          <h3>Renseignez votre projet</h3>
          <p>
            Indiquez les trois informations ci-dessous pour obtenir une estimation.
          </p>

          <div className="input-grid">
            <div className="input-full">
              <label className="label">Enveloppe totale (€)</label>
              <input
                type="number"
                className="input"
                value={enveloppe}
                onChange={(e) => setEnveloppe(e.target.value)}
                placeholder="Exemple : 100000"
                min="0"
              />
            </div>

            <div>
              <label className="label">Apport (€)</label>
              <input
                type="number"
                className="input"
                value={apport}
                onChange={(e) => setApport(e.target.value)}
                placeholder="Exemple : 10000"
                min="0"
              />
            </div>

            <div>
              <label className="label">Durée de crédit (années)</label>
              <input
                type="number"
                className="input"
                value={duree}
                onChange={(e) => setDuree(e.target.value)}
                placeholder="Exemple : 15"
                min="1"
              />
            </div>
          </div>
        </div>

        <div className="notice-box">
          <h3>Hypothèses de calcul</h3>
          <ul className="mt-4 list-disc pl-5">
            <li>TMI : 30%</li>
            <li>Taux de rendement : 5%</li>
            <li>Taux de crédit : 5,10%</li>
          </ul>
          <p className="mt-4">
            Les résultats affichés sont donnés à titre indicatif à partir des
            hypothèses fixées pour cette simulation.
          </p>
        </div>
      </div>

    {simulation ? (
        <div className="grid gap-6 md:grid-cols-2">
             <div
                className="card"
                style={{
                    background: "linear-gradient(135deg, #17365d 0%, #224a7d 100%)",
                    color: "white",
                    borderColor: "#17365d",
                    boxShadow: "0 14px 30px rgba(23,54,93,0.18)",
                }}
             >
                <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 8 }}>
                 Résultat de simulation
                </p>
                <h3 style={{ color: "white", marginBottom: 12 }}>
                 Effort d’épargne moyen
                </h3>
                <p style={{ color: "white", fontSize: "30px", fontWeight: 700 }}>
                 {formatCurrency(round(simulation.effortEpargneMoyen))} / mois
                </p>
             </div>

             <div
                className="card"
                style={{
                    background: "linear-gradient(135deg, #17365d 0%, #224a7d 100%)",
                    color: "white",
                    borderColor: "#17365d",
                    boxShadow: "0 14px 30px rgba(23,54,93,0.18)",
                }}
             >
                <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 8 }}>
                    Résultat de simulation
                </p>
                <h3 style={{ color: "white", marginBottom: 12 }}>Revenus à terme</h3>
                <p style={{ color: "white", fontSize: "30px", fontWeight: 700 }}>
                    {formatCurrency(round(simulation.revenusTermeMensuels))} / mois
                </p>
            </div>
        </div>
    ) : null}

      {simulation ? (
        <div className="notice-box">
          <h3>Télécharger la simulation PDF</h3>
          <p className="mt-2">
            Pour recevoir votre simulation PDF, merci de compléter vos coordonnées.
          </p>
          <div className="cta-row">
            <button
              type="button"
              className="btn-primary"
              onClick={() => setShowForm(true)}
            >
              Recevoir ma simulation PDF
            </button>
          </div>
        </div>
      ) : null}

      {showForm && simulation ? (
        <div ref={formRef}>
          <LeadForm
            title="Recevoir gratuitement votre simulation SCPI à crédit"
            description="Complétez ce formulaire pour générer et télécharger votre simulation PDF."
            source="scpi_credit"
            buttonLabel="Valider et générer le PDF"
            onSuccess={generatePdf}
            extraData={{
              "Enveloppe totale": formatCurrency(simulation.enveloppe),
              Apport: formatCurrency(simulation.apport),
              Financement: formatCurrency(simulation.financed),
              "Durée de crédit": `${simulation.dureeYears} ans`,
              Mensualité: `${formatCurrency(round(simulation.mensualite))} / mois`,
              "Effort d'épargne moyen": `${formatCurrency(
                round(simulation.effortEpargneMoyen)
              )} / mois`,
              "Revenus à terme": `${formatCurrency(
                round(simulation.revenusTermeMensuels)
              )} / mois`,
            }}
          />
        </div>
      ) : null}
    </div>
  );
}