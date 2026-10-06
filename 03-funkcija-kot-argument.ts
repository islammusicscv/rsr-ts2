// =====================================================
// TS 2 · 03 Tip funkcije kot parametra
// Preverjanje:  npx.cmd tsc
//
//   fn: (n: number) => number
//   parameter fn je funkcija, ki dobi število in vrne število
//
// tsc javi napake v tej datoteki. Popravi kodo tako, da tsc
// za to datoteko ne javi nobene napake. Tipov ne spreminjaj.
// =====================================================

interface Dogodek {
  naslov: string;
  cenaCenti: number;
}

const podvoji = (x: number): number => x * 2;
const jePoceni = (cena: number): boolean => cena < 15;


// ---------- 1 ----------
// Popravi klic.
function uporabi(x: number, fn: (n: number) => number): number {
  return fn(x);
}
console.log("1:", uporabi(5, podvoji()));


// ---------- 2 ----------
// uporabiDvakrat naj fn uporabi dvakrat: fn(fn(x)).
// Popravi funkcijo. Želen izpis: 2: 20
function uporabiDvakrat(x: number, fn: (n: number) => number): number {
  return fn;
}
console.log("2:", uporabiDvakrat(5, podvoji));


// ---------- 3 ----------
// Popravi funkcijo.
function preveri(vrednost: number, pogoj: (n: number) => boolean): string {
  if (pogoj) {
    return "Poceni";
  }
  return "Drago";
}
console.log("3:", preveri(30, jePoceni));


// ---------- 4 ----------
// Popravi samo arrow funkcijo v klicu.
function izracunaj(a: number, b: number, operacija: (x: number, y: number) => number): number {
  return operacija(a, b);
}
console.log("4:", izracunaj(10, 5, (x, y) => `${x + y}`));


// ---------- 5 ----------
// Popravi samo arrow funkcijo v klicu. Cena je v centih.
function opisi(d: Dogodek, oblikuj: (d: Dogodek) => string): string {
  return oblikuj(d);
}
const jazz: Dogodek = { naslov: "Jazz večer", cenaCenti: 2500 };
console.log("5:", opisi(jazz, (d) => `${d.naslov}: ${d.cena / 100} €`));
