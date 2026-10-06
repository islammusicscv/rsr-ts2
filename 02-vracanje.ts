// =====================================================
// TS 2 · 02 Tip vrnjene vrednosti
// Preverjanje:  npx.cmd tsc
//
// Za ) napišeš tip, ki ga funkcija vrne:  function f(): number { … }
// tsc javi napake v tej datoteki. Popravi FUNKCIJO tako, da tsc
// za to datoteko ne javi nobene napake. Tipov ne spreminjaj.
// =====================================================


// ---------- 1 ----------
function podvoji(x: number): number {
  console.log(x * 2);
}


// ---------- 2 ----------
// 50 točk ali več je "opravil", sicer "ni opravil".
function ocena(tocke: number): string {
  if (tocke >= 50) {
    return "opravil";
  }
}


// ---------- 3 ----------
// Poceni je vse pod 15 €.
const jePoceni = (cena: number): boolean => {
  if (cena < 15) {
    return "da";
  }
  return "ne";
};


// ---------- 4 ----------
const kvadrat = (x: number): number => {
  x * x;
};


// ---------- 5 ----------
// Cene v centih pretvori v evre, da jih lahko seštevaš.
function vEvre(centi: number): number {
  return (centi / 100).toFixed(2);
}
const skupaj: number = vEvre(2500) + vEvre(1500);

console.log(podvoji(4), ocena(30), jePoceni(20), kvadrat(3), skupaj);
