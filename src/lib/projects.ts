/**
 * Progetti mostrati nella sezione "03 — Lavori".
 *
 * Finché l'array è vuoto la sezione mostra lo stato "in aggiornamento".
 * Per aggiungere un progetto, inserisci un oggetto in `progetti`:
 *
 *   {
 *     titolo: "Nome del progetto",
 *     anno: "2026",
 *     ruolo: "Design & sviluppo",
 *     descrizione: "Una frase su cosa risolveva e cosa hai costruito.",
 *     stack: ["Next.js", "TypeScript", "Tailwind"],
 *     url: "https://esempio.com",        // opzionale
 *     immagine: "/lavori/nome-progetto.jpg", // opzionale, in /public
 *   }
 */

export type Progetto = {
  titolo: string;
  anno: string;
  ruolo: string;
  descrizione: string;
  stack: string[];
  url?: string;
  immagine?: string;
};

export const progetti: Progetto[] = [];
