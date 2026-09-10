/**
 * Progetti della sezione "Lavori".
 *
 * NOTA: la sezione "Lavori" è al momento rimossa dalla pagina (nessun progetto
 * reale ancora — vedi docs/2026-09-10-rimozione-lavori-e-ritratto.md). Questo
 * file e il componente <ProjectList> restano come punto di ripristino: quando ci
 * saranno lavori veri, ri-aggiungere la <Section> in `src/app/page.tsx`, la voce
 * "Lavori" nell'IndexRail, e popolare `progetti` qui sotto.
 *
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
