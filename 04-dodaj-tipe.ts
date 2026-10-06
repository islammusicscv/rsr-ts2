// =====================================================
// TS 2 · 04 Dodaj tipe funkcijam
// Preverjanje:  npx.cmd tsc
//
// Funkcije nimajo tipov, zato tsc javi "implicitly has an 'any' type".
// Dodaj tipe parametrom in tip vrnjene vrednosti. Ne uporabljaj any.
//
// Vrstice pod // @ts-expect-error so namerno napačni klici in morajo
// to ostati. Če je tvoj tip preohlapen, tsc javi
// "Unused '@ts-expect-error' directive".
// Na začetku (dokler tipov ni) tsc to javi pri vseh treh vrsticah,
// ker any dovoli vse. Ko napišeš prave tipe, ta sporočila izginejo.
// Kode pod funkcijami ne spreminjaj.
// =====================================================

interface Dogodek {
  naslov: string;
  cena: number;
  prostaMesta: number;
}


// ---------- 1 ----------
// Dobi dogodek, vrne true, če je razprodan.
function jeRazprodan(d) {
  return d.prostaMesta === 0;
}


// ---------- 2 ----------
// Dobi seznam cen in funkcijo, ki eno ceno pretvori v novo ceno.
// Vrne seznam novih cen.
function naVseh(cene, fn) {
  return cene.map(fn);
}


// ---------- 3 ----------
// Dobi seznam dogodkov in pogoj (funkcijo, ki dobi dogodek in vrne
// true ali false). Vrne seznam dogodkov, ki ustrezajo pogoju.
function filtriraj(seznam, pogoj) {
  return seznam.filter(pogoj);
}


// ===== KLICI (ne spreminjaj) =====
const koncert: Dogodek = { naslov: "Koncert", cena: 25, prostaMesta: 0 };
const razprodan: boolean = jeRazprodan(koncert);
// @ts-expect-error manjka polje prostaMesta
jeRazprodan({ naslov: "Opera", cena: 60 });

const zDDV: number[] = naVseh([10, 20], (c: number) => c * 1.22);
// @ts-expect-error funkcija mora vrniti število
naVseh([10, 20], (c: number) => `${c} €`);

const poceni: Dogodek[] = filtriraj([koncert], (d: Dogodek) => d.cena < 30);
// @ts-expect-error pogoj mora vrniti true ali false
filtriraj([koncert], (d: Dogodek) => d.naslov);

console.log(razprodan, zDDV, poceni);
