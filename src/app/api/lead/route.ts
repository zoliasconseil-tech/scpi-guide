import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      postalCode,
      project,
      consent,
      source,
      selectedScpi,
      extraData,
    } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const to = process.env.LEAD_NOTIFICATION_TO;
    const from = process.env.LEAD_FROM;

    if (!process.env.RESEND_API_KEY || !to || !from) {
      console.error("Variables d'environnement manquantes.");
      return NextResponse.json(
        { error: "Configuration email manquante" },
        { status: 500 }
      );
    }

    const scpiList =
      Array.isArray(selectedScpi) && selectedScpi.length > 0
        ? selectedScpi.join(", ")
        : "Aucune";

    const extraDataHtml =
     extraData && typeof extraData === "object"
      ? Object.entries(extraData)
        .map(
          ([key, value]) =>
            `<p><strong>${key} :</strong> ${String(value)}</p>`
        )
        .join("")
    : "";

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 16px;">Nouveau lead SCPI</h2>

        <p><strong>Source :</strong> ${source ?? "Non précisée"}</p>
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Nom :</strong> ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Code postal :</strong> ${postalCode ?? "Non renseigné"}</p>
        <p><strong>Projet :</strong><br>${project ? String(project).replace(/\n/g, "<br>") : "Non renseigné"}</p>
        <p><strong>Consentement :</strong> ${consent ? "Oui" : "Non"}</p>
        <p><strong>SCPI sélectionnées :</strong> ${scpiList}</p>
        ${extraDataHtml}
      </div>
    `;

    await resend.emails.send({
      from,
      to,
      subject: `Nouveau lead SCPI - ${firstName} ${lastName}`,
      replyTo: email,
      html,
    });

    console.log("Nouveau lead reçu :", body);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erreur route /api/lead :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}