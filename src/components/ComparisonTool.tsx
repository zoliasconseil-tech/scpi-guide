"use client";

import { useMemo, useRef, useState } from "react";
import LeadForm from "@/components/LeadForm";
import { scpis } from "@/lib/scpi-data";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ComparisonTool() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const selectedScpis = useMemo(
    () => scpis.filter((scpi) => selectedIds.includes(scpi.id)),
    [selectedIds]
  );

  const comparisonRows = [
    ["Catégorie", "category"],
    ["Prix de la part", "sharePrice"],
    ["SRI", "sri"],
    ["Valeur nominale de la part", "nominalValue"],
    ["Délai de jouissance", "enjoymentDelay"],
    ["Versement des dividendes", "dividendFrequency"],
  ] as const;

  function toggleScpi(id: string) {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }

      if (prev.length >= 3) {
        return prev;
      }

      return [...prev, id];
    });
  }

  function openForm() {
    if (selectedScpis.length < 2) {
      alert("Sélectionne au moins 2 SCPI.");
      return;
    }

    setShowForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  function generatePdf() {
    if (selectedScpis.length < 2) {
      return;
    }

    const doc = new jsPDF();

    doc.setFillColor(31, 59, 119);
    doc.rect(0, 0, 210, 28, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Comparatif SCPI", 14, 18);

    doc.setTextColor(31, 42, 68);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(
      "Comparaison de SCPI sélectionnées selon les critères essentiels",
      14,
      40
    );

    const tableBody = comparisonRows.map(([label, key]) => [
      label,
      ...selectedScpis.map((scpi) => String(scpi[key] ?? "NC")),
    ]);

    autoTable(doc, {
      startY: 48,
      head: [["Champ", ...selectedScpis.map((scpi) => scpi.name)]],
      body: tableBody,
      theme: "grid",
      headStyles: {
        fillColor: [31, 59, 119],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      styles: {
        fontSize: 10,
        cellPadding: 4,
        textColor: [31, 42, 68],
      },
      alternateRowStyles: {
        fillColor: [245, 247, 251],
      },
      columnStyles: {
        0: { fontStyle: "bold" },
      },
      margin: { left: 14, right: 14 },
    });

    doc.save("comparatif-scpi.pdf");
  }

  return (
    <div className="space-y-10">
      <div className="grid-3">
        {scpis.map((scpi) => {
          const active = selectedIds.includes(scpi.id);

          return (
            <button
              key={scpi.id}
              type="button"
              onClick={() => toggleScpi(scpi.id)}
              className="card text-left transition-all duration-200"
              style={{
                borderColor: active ? "#4d7fd6" : "var(--border)",
                borderWidth: active ? "2px" : "1px",
                borderStyle: "solid",
                background: active ? "#eef4ff" : "#ffffff",
                boxShadow: active
                  ? "0 0 0 4px rgba(77,127,214,0.18)"
                  : "0 10px 30px rgba(15,23,42,0.06)",
                transform: active ? "translateY(-1px)" : "translateY(0)",
              }}
            >
              <h3>{scpi.name}</h3>
              <p className="mb-3 text-sm text-slate-500">{scpi.manager}</p>

              <p>
                <strong>Catégorie :</strong> {scpi.category}
              </p>
              <p>
                <strong>Prix de la part :</strong> {scpi.sharePrice}
              </p>
              <p>
                <strong>SRI :</strong> {scpi.sri}
              </p>
              <p>
                <strong>Valeur nominale :</strong> {scpi.nominalValue}
              </p>
              <p>
                <strong>Délai de jouissance :</strong> {scpi.enjoymentDelay}
              </p>
              <p>
                <strong>Versement des dividendes :</strong>{" "}
                {scpi.dividendFrequency}
              </p>
            </button>
          );
        })}
      </div>

      <div className="rounded-[28px] border border-[var(--border)] bg-[var(--soft)] p-8">
        <h3 className="text-3xl font-bold text-[var(--primary)]">
          SCPI sélectionnées : {selectedScpis.length}/3
        </h3>

        <p className="mt-4 text-lg text-slate-700">
          Sélectionnez 2 ou 3 SCPI pour afficher le tableau comparatif et
          recevoir votre PDF.
        </p>

        {selectedScpis.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {selectedScpis.map((scpi) => (
              <span
                key={scpi.id}
                className="rounded-full border border-[var(--primary)] bg-white px-4 py-2 text-sm font-semibold text-[var(--primary)]"
              >
                {scpi.name}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-8">
          <button type="button" onClick={openForm} className="btn-primary">
            Recevoir le comparatif PDF
          </button>
        </div>
      </div>

      {selectedScpis.length >= 2 ? (
        <div className="overflow-x-auto rounded-[28px] border border-[var(--border)] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <table className="min-w-full text-left">
            <thead className="bg-[var(--primary)] text-white">
              <tr>
                <th className="px-6 py-5 text-lg font-bold">Critère</th>
                {selectedScpis.map((scpi) => (
                  <th key={scpi.id} className="px-6 py-5 text-lg font-bold">
                    {scpi.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {comparisonRows.map(([label, key]) => (
                <tr key={label} className="border-t border-slate-200">
                  <td className="px-6 py-5 text-base font-semibold leading-8 sm:text-lg">
                    {label}
                  </td>
                  {selectedScpis.map((scpi) => (
                    <td
                      key={`${scpi.id}-${key}`}
                      className="px-6 py-5 text-base leading-8 sm:text-lg"
                    >
                      {String(scpi[key] ?? "NC")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {showForm ? (
        <div ref={formRef}>
          <LeadForm
            title="Recevoir gratuitement votre comparatif SCPI"
            description="Remplissez ce formulaire pour générer et télécharger votre comparatif PDF."
            source="comparaison"
            selectedScpi={selectedScpis.map((s) => s.name)}
            buttonLabel="Valider et générer le PDF"
            onSuccess={generatePdf}
          />
        </div>
      ) : null}
    </div>
  );
}