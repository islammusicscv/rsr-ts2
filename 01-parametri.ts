// =====================================================
// TS 2 · 01 Tipi parametrov
// Preverjanje:  npx.cmd tsc
//
// tsc javi napake v tej datoteki. Popravi kodo tako, da tsc
// za to datoteko ne javi nobene napake. Ne uporabljaj any.
// Pri vsakem primeru piše, ali popraviš funkcijo ali klic.
// =====================================================


// ---------- 1 ----------
// Parametra sta števili. Popravi funkcijo.
function razlika(vecje, manjse) {
  return vecje - manjse;
}
console.log("1:", razlika(10, 3));


// ---------- 2 ----------
// Popravi klic.
function opis(naslov: string, cena: number): string {
  return `${naslov}: ${cena} €`;
}
console.log("2:", opis(25, "Jazz večer"));


// ---------- 3 ----------
// Če popusta ne podamo, je 0. Popravi funkcijo, ne klica.
function cenaSPopustom(cena: number, popust: number): number {
  return cena - popust;
}
console.log("3:", cenaSPopustom(20));


// ---------- 4 ----------
// Priimek ni obvezen. Če ga ni, se izpiše samo ime.
// Popravi funkcijo.
function polnoIme(ime: string, priimek?: string): string {
  return `${ime} ${priimek.toUpperCase()}`;
}
console.log("4:", polnoIme("Ana"), "/", polnoIme("Bor", "Novak"));


// ---------- 5 ----------
// Vnos pride iz obrazca kot besedilo. Popravi klic.
function podvoji(x: number): number {
  return x * 2;
}
const vnos: string = "4";
console.log("5:", podvoji(vnos));
