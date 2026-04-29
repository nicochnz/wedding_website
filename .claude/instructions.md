# Instructions — Génération de la documentation

Quand on te demande de mettre à jour `docs.md`, suis ces règles :

## Ce que docs.md doit contenir

1. **Vue d'ensemble** — ce que fait le projet en 2-3 phrases
2. **Stack technique** — Next.js, TypeScript, Tailwind, packages notables
3. **Structure des dossiers** — arborescence commentée (pas les node_modules)
4. **Pages et routes** — liste de toutes les routes avec leur rôle
5. **Données** — structure du type `Guest`, comment ajouter un invité
6. **Variables d'environnement** — liste et description
7. **Commandes utiles** — dev, build, lint

## Comment générer

- Lis les fichiers clés : `data/guests.ts`, `app/**/page.tsx`, `next.config.ts`, `package.json`
- Ne documente pas le code évident — seulement ce qui n'est pas visible à la lecture
- Format : titres Markdown `##`, listes, blocs de code pour les exemples
- Reste concis : une ligne par route, pas de paragraphes longs
- Mets à jour `docs.md` à chaque ajout de route ou de feature significative
