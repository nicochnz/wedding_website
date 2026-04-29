# Règles — Ce que l'IA ne doit pas faire

## Code

- Ne pas installer de librairie sans demander d'abord
- Ne pas modifier `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs` sans confirmation explicite
- Ne pas toucher aux fichiers de config à la racine pour régler un bug — chercher la vraie cause
- Ne pas créer de nouveaux fichiers sans les justifier
- Ne pas utiliser `any` en TypeScript
- Ne pas ajouter de commentaires évidents dans le code

## Comportement

- Ne pas lancer `npm run dev` en arrière-plan de sa propre initiative
- Ne pas tuer des processus Node ou modifier des fichiers système sans confirmation
- Ne pas renommer ou déplacer des fichiers hors du projet (`Dev-Web/`, etc.)
- Ne pas proposer plusieurs solutions — trancher et proposer la meilleure
- Ne pas expliquer ce que le code fait ligne par ligne sauf si demandé

## Périmètre

- Ce projet est un site vitrine statique + système d'invitation — ne pas over-engineer
- Pas de backend, pas de base de données, pas d'auth pour l'instant
- Pas de nouveaux packages UI (shadcn, etc.) — utiliser ce qui est déjà là (Radix, Lucide, Tailwind)
