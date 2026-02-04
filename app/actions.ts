"use server";

import nodemailer from "nodemailer";

export async function sendRSVPEmail(formData: FormData) {
  const prenom = formData.get("prenom") as string;
  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const repas = formData.get("repas") as string;
  const allergies = formData.get("allergies") as string;
  // Get all values for 'jours'
  const jours = formData.getAll("jours") as string[];

  // Format the days string
  const dayLabels: Record<string, string> = {
    jour1: "Vendredi",
    jour2: "Samedi",
    jour3: "Dimanche",
  };
  
  const joursLisibles = jours.map(j => dayLabels[j] || j).join(", ");

  const message = `${prenom} ${nom} est présent ${joursLisibles} et il veut manger : ${repas}.${allergies ? `\n\nAllergies/Notes: ${allergies}` : ""}`;

  // Configuration du transporteur (Gmail par défaut ici, mais adaptable)
  // VOUS DEVEZ CONFIGURER CES VARIABLES D'ENVIRONNEMENT DANS VOTRE PROJET (fichier .env.local)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Votre adresse gmail
      pass: process.env.EMAIL_PASS, // Votre mot de passe d'application (pas le mot de passe normal)
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // S'envoyer le mail à soi-même
      replyTo: email,
      subject: `Nouveau RSVP Mariage : ${prenom} ${nom}`,
      text: message,
      html: `<p><strong>${prenom} ${nom}</strong> a répondu au RSVP.</p>
             <p><strong>Présence :</strong> ${joursLisibles}</p>
             <p><strong>Repas :</strong> ${repas}</p>
             ${allergies ? `<p><strong>Allergies/Notes :</strong> ${allergies}</p>` : ""}
             <p><em>Email de contact : ${email}</em></p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur d'envoi email:", error);
    return { success: false, error: "Erreur lors de l'envoi de l'email" };
  }
}
