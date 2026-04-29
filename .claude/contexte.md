# Contexte — Projet Wedding Website

## Le projet

Site web de mariage pour Camille & Nicolas (20-23 août 2026).
Deux parties distinctes : un site vitrine public + un système d'invitation personnalisé par QR code.

## Site vitrine (public)

Page d'accueil à `localhost:3000/` avec les sections :
- Hero (photo de couple)
- Menu (repas du mariage)
- RSVP (formulaire de confirmation avec envoi email via Nodemailer)
- Bandeau de paiement (participation)
- Programme (déroulé général)
- Footer

## Système d'invitation (QR codes)

Chaque invité reçoit un QR code imprimé qui pointe vers une URL unique :
`/invite/[slug]` — ex : `/invite/paul-martin`

Sur cette page :
- Accueil personnalisé avec le nom de l'invité
- Onglet "Plan du domaine" : carte SVG placeholder (à remplacer par le vrai plan) avec la maison de l'invité surlignée
- Onglet "Planning" : programme des 4 jours (20-23 août) avec navigation par jour

Les données sont dans `data/guests.ts` (fichier TypeScript statique, pas de base de données).

Page admin à `/admin` : affiche les QR codes de tous les invités, imprimable en PDF.

## Perspectives d'évolution

- Remplacer le SVG placeholder par la vraie image du plan du domaine
- Compléter le planning avec les vraies heures et activités
- Remplir `data/guests.ts` avec les 50 invités réels
- Déployer sur Vercel + configurer `NEXT_PUBLIC_BASE_URL`
- Éventuellement : ajouter une galerie photo après le mariage

## Stack

- Next.js 16 App Router, React 19, TypeScript strict
- Tailwind CSS v4 (config via `@theme` dans globals.css)
- Lucide React pour les icônes
- Nodemailer pour les emails RSVP
- qrcode pour la génération des QR codes côté serveur

## Variables d'environnement

```
NEXT_PUBLIC_BASE_URL=https://ton-domaine.vercel.app   # URL de prod pour les QR codes
```
