export type Guest = {
  slug: string;
  name: string;
  house: string;
  houseNumber: number;
  mapPosition: { x: number; y: number };
  note?: string;
};

export const guests: Guest[] = [
  // --- Maison haute du lac · N°1 ---
  { slug: "christine", name: "Christine", house: "Maison haute du lac", houseNumber: 1, mapPosition: { x: 20, y: 25 }, note: "Chambre 3" },
  { slug: "pascal", name: "Pascal", house: "Maison haute du lac", houseNumber: 1, mapPosition: { x: 20, y: 25 }, note: "Chambre 3" },
  { slug: "arthur", name: "Arthur", house: "Maison haute du lac", houseNumber: 1, mapPosition: { x: 20, y: 25 }, note: "Chambre 1" },
  { slug: "marion", name: "Marion", house: "Maison haute du lac", houseNumber: 1, mapPosition: { x: 20, y: 25 }, note: "Chambre 1" },
  { slug: "theo", name: "Théo", house: "Maison haute du lac", houseNumber: 1, mapPosition: { x: 20, y: 25 }, note: "Chambre 2" },
  { slug: "priscilia", name: "Priscilia", house: "Maison haute du lac", houseNumber: 1, mapPosition: { x: 20, y: 25 }, note: "Chambre 2" },

  // --- Maisonnette du Lac · N°2 ---
  { slug: "frederic", name: "Frédéric", house: "Maisonnette du Lac", houseNumber: 2, mapPosition: { x: 55, y: 20 }, note: "Banquette lit" },
  { slug: "patou", name: "Patou", house: "Maisonnette du Lac", houseNumber: 2, mapPosition: { x: 55, y: 20 }, note: "Chambre" },
  { slug: "jackie", name: "Jackie", house: "Maisonnette du Lac", houseNumber: 2, mapPosition: { x: 55, y: 20 }, note: "Chambre" },

  // --- Gîte nature & détente · N°3 ---
  { slug: "jeannine", name: "Jeannine", house: "Gîte nature & détente", houseNumber: 3, mapPosition: { x: 75, y: 40 }, note: "Chambre 3" },
  { slug: "thomas-tacquin", name: "Thomas Tacquin", house: "Gîte nature & détente", houseNumber: 3, mapPosition: { x: 75, y: 40 }, note: "Chambre 3" },
  { slug: "maude", name: "Maude", house: "Gîte nature & détente", houseNumber: 3, mapPosition: { x: 75, y: 40 }, note: "Chambre 2" },
  { slug: "alex", name: "Alex", house: "Gîte nature & détente", houseNumber: 3, mapPosition: { x: 75, y: 40 }, note: "Chambre 2" },
  { slug: "armand", name: "Armand", house: "Gîte nature & détente", houseNumber: 3, mapPosition: { x: 75, y: 40 }, note: "Chambre 1" },
  { slug: "melissa", name: "Mélissa", house: "Gîte nature & détente", houseNumber: 3, mapPosition: { x: 75, y: 40 }, note: "Chambre 1" },

  // --- Gîte de groupe · N°4 ---
  { slug: "gabriel", name: "Gabriel", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 2" },
  { slug: "romain", name: "Romain", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 2" },
  { slug: "lou", name: "Lou", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 2" },
  { slug: "mathieu", name: "Mathieu", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 1" },
  { slug: "ninon", name: "Ninon", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 1" },
  { slug: "jordan", name: "Jordan", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 3" },
  { slug: "julia", name: "Julia", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 3" },
  { slug: "julien-belier", name: "Julien Bélier", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 3" },
  { slug: "julien-buckens", name: "Julien Buckens", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 1" },
  { slug: "lauranne", name: "Lauranne", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 1" },
  { slug: "ivan", name: "Ivan", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 2" },
  { slug: "marjo", name: "Marjo", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 4" },
  { slug: "francois", name: "François", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 4" },
  { slug: "estelle", name: "Estelle", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 4" },
  { slug: "lea", name: "Léa", house: "Gîte de groupe", houseNumber: 4, mapPosition: { x: 30, y: 65 }, note: "Chambre 4" },

  // --- Maison Landaise · N°5 ---
  { slug: "carmen", name: "Carmen", house: "Maison Landaise", houseNumber: 5, mapPosition: { x: 65, y: 70 }, note: "Chambre 1" },
  { slug: "didier", name: "Didier", house: "Maison Landaise", houseNumber: 5, mapPosition: { x: 65, y: 70 }, note: "Chambre 1" },
  { slug: "sandrine", name: "Sandrine", house: "Maison Landaise", houseNumber: 5, mapPosition: { x: 65, y: 70 }, note: "Chambre 2" },
  { slug: "fabrice", name: "Fabrice", house: "Maison Landaise", houseNumber: 5, mapPosition: { x: 65, y: 70 }, note: "Chambre 2" },
  { slug: "mariana", name: "Mariana", house: "Maison Landaise", houseNumber: 5, mapPosition: { x: 65, y: 70 }, note: "Chambre 3" },
  { slug: "thibault", name: "Thibault", house: "Maison Landaise", houseNumber: 5, mapPosition: { x: 65, y: 70 }, note: "Chambre 3" },
  { slug: "lucie", name: "Lucie", house: "Maison Landaise", houseNumber: 5, mapPosition: { x: 65, y: 70 }, note: "Chambre 3" },
  { slug: "jean-marc", name: "Jean Marc", house: "Maison Landaise", houseNumber: 5, mapPosition: { x: 65, y: 70 }, note: "Chambre 3" },
];

export function getGuestBySlug(slug: string): Guest | undefined {
  return guests.find((g) => g.slug === slug);
}
