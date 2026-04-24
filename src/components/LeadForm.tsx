"use client";

import { useState } from "react";

type LeadFormProps = {
  title?: string;
  description?: string;
  source: "guide" | "comparaison" | "contact" | "scpi_credit";
  selectedScpi?: string[];
  buttonLabel?: string;
  onSuccess?: () => void;
  extraData?: Record<string, unknown>;
  downloadUrl?: string;
};

export default function LeadForm({
  title = "Recevoir le guide gratuit",
  description = "Remplissez le formulaire pour recevoir votre document gratuit.",
  source,
  selectedScpi = [],
  buttonLabel = "Envoyer",
  onSuccess,
  extraData = {},
  downloadUrl,
}: LeadFormProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      postalCode: formData.get("postalCode"),
      project: formData.get("project"),
      consent: formData.get("consent") === "on",
      source,
      selectedScpi,
      extraData,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Erreur API");
      }

      if (downloadUrl) {
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "guide-scpi-2026.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      onSuccess?.();
    } catch (error) {
      alert("Une erreur est survenue.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-shell">
      <h3>{title}</h3>
      <p>{description}</p>

      <form action={handleSubmit} className="input-grid">
        <div>
          <label className="label" htmlFor="firstName">
            Prénom
          </label>
          <input id="firstName" name="firstName" className="input" required />
        </div>

        <div>
          <label className="label" htmlFor="lastName">
            Nom
          </label>
          <input id="lastName" name="lastName" className="input" required />
        </div>

        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className="input" required />
        </div>

        <div>
          <label className="label" htmlFor="phone">
            Téléphone
          </label>
          <input id="phone" name="phone" className="input" required />
        </div>

        <div>
          <label className="label" htmlFor="postalCode">
            Code postal
          </label>
          <input id="postalCode" name="postalCode" className="input" required />
        </div>

        <div className="input-full">
          <label className="label" htmlFor="project">
            Projet ou objectif
          </label>
          <textarea
            id="project"
            name="project"
            rows={4}
            placeholder="Exemple : recherche d'information sur les SCPI, comparaison de plusieurs SCPI, préparation d'un investissement, diversification patrimoniale..."
          />
        </div>

        <div className="input-full">
          <div className="flex items-start gap-3 text-[11px] leading-5 text-slate-500">
            <input
              id="consent"
              type="checkbox"
              name="consent"
              className="mt-1"
              required
            />

            <div className="leading-6">
              <label htmlFor="consent" className="cursor-pointer font-medium">
                J’accepte que mes données soient utilisées dans le cadre de ma demande.
              </label>

              <p className="mt-2">
                Les informations collectées font l’objet d’un traitement automatisé et
                informatisé destiné notamment à la mise en œuvre des services proposés et à
                des fins de prospection commerciale par ZOLIAS.
              </p>

              <p className="mt-2">
                Pour toute information complémentaire relative au traitement de vos données
                personnelles, consultez notre politique de protection des données
                personnelles.
              </p>

              <p className="mt-2">
                Conformément à la loi du 6 janvier 1978 et au Règlement Général sur la
                Protection des Données (RGPD) du 27 avril 2016 N°2016/679, vous disposez
                d’un droit d’accès, de rectification, d’opposition et d’effacement à
                formuler auprès du responsable de traitement, à l’adresse suivante :
                60 RUE FRANCOIS IER, 75008 PARIS.
              </p>

              <p className="mt-2">
                En validant ce formulaire vous acceptez qu’un conseiller prenne contact avec
                vous pour vous accompagner sur votre projet d’investissement.
              </p>
            </div>
          </div>
        </div>

        <div className="input-full">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Envoi en cours..." : buttonLabel}
          </button>
        </div>
      </form>
    </div>
  );
}