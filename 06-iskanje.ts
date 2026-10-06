// =====================================================
// TS 2 · 06 Iskanje dogodkov
// Preverjanje:  npx.cmd tsc
// Zagon:        node 06-iskanje.ts
//
// PRAVILA za funkcijo poisci(seznam, filter)
//   Vsa polja v filtru so neobvezna. Polje, ki ga ni, ne omejuje.
//   1. maxCena: obdrži samo dogodke s ceno do vključno maxCena.
//   2. samoProsti: če je true, obdrži samo dogodke s prostimi mesti.
//   3. razvrsti: "cena" razvrsti po ceni naraščajoče,
//      "naslov" po naslovu (slovenska abeceda).
//      Če razvrsti ni podan, vrstni red ostane.
//   4. Vrne seznam naslovov.
//
// Pomoč: Infinity je število, večje od vseh drugih števil.
//
// Koda ima 3 napake. Dve ti pokaže tsc, tretjo scenarij.
//
// KONČAL SI, KO tsc za to datoteko ne javi napak in so vsi
// scenariji ✓. Podatkov, scenarijev in funkcije preveri ne spreminjaj.
// =====================================================

interface Dogodek {
  naslov: string;
  cena: number;
  prostaMesta: number;
}
interface Filter {
  maxCena?: number;
  samoProsti?: boolean;
  razvrsti?: "cena" | "naslov";
}

function poisci(seznam: Dogodek[], filter: Filter): string[] {
  let rezultat = seznam;
  const meja: number = filter.maxCena;
  rezultat = rezultat.filter((d) => d.cena <= meja);
  if (filter.samoProsti) {
    rezultat = rezultat.filter((d) => d.prostaMesta === 0);
  }
  if (filter.razvrsti === "Cena") {
    rezultat = rezultat.toSorted((a, b) => a.cena - b.cena);
  }
  if (filter.razvrsti === "naslov") {
    rezultat = rezultat.toSorted((a, b) => a.naslov.localeCompare(b.naslov, "sl"));
  }
  return rezultat.map((d) => d.naslov);
}


// ===== SCENARIJI (ne spreminjaj) =====
const dogodki: Dogodek[] = [
  { naslov: "Rock koncert", cena: 40, prostaMesta: 0 },
  { naslov: "Jazz večer", cena: 25, prostaMesta: 10 },
  { naslov: "Čarovniški šov", cena: 15, prostaMesta: 4 },
  { naslov: "Opera", cena: 60, prostaMesta: 2 },
];
function preveri(oznaka: string, dobljeno: string[], pricakovano: string[]): void {
  const d = JSON.stringify(dobljeno);
  const p = JSON.stringify(pricakovano);
  console.log(`${d === p ? "✓" : "✗"} ${oznaka}: ${d}`);
  if (d !== p) {
    console.log(`    pričakovano: ${p}`);
  }
}

preveri("A brez filtra", poisci(dogodki, {}), ["Rock koncert", "Jazz večer", "Čarovniški šov", "Opera"]);
preveri("B maxCena 40", poisci(dogodki, { maxCena: 40 }), ["Rock koncert", "Jazz večer", "Čarovniški šov"]);
preveri("C samo prosti", poisci(dogodki, { samoProsti: true }), ["Jazz večer", "Čarovniški šov", "Opera"]);
preveri("D po ceni", poisci(dogodki, { razvrsti: "cena" }), ["Čarovniški šov", "Jazz večer", "Rock koncert", "Opera"]);
preveri("E po naslovu", poisci(dogodki, { razvrsti: "naslov" }), ["Čarovniški šov", "Jazz večer", "Opera", "Rock koncert"]);
preveri("F prosti do 30, po ceni", poisci(dogodki, { maxCena: 30, samoProsti: true, razvrsti: "cena" }), ["Čarovniški šov", "Jazz večer"]);
