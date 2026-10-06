// =====================================================
// TS 2 · 05 Nakup vstopnic
// Preverjanje:  npx.cmd tsc
// Zagon:        node 05-nakup.ts
//
// PRAVILA za funkcijo kupi(seznam, nakup)
//   1. Količina mora biti od 1 do vključno 10, sicer "Neveljavna količina".
//   2. Dogodek z nakup.dogodekId mora obstajati, sicer "Dogodek ne obstaja".
//   3. Prostih mest mora biti vsaj toliko, kot je količina,
//      sicer "Ni dovolj mest".
//   4. Sicer vrne "OK: X €", kjer je X = cena × količina v evrih
//      z dvema decimalkama.
//
// Koda ima 3 napake. Dve ti pokaže tsc, tretjo scenarij.
// Dokler tsc javlja napake, se program pri zagonu lahko zruši:
// to je ravno tisto, pred čimer te tsc svari.
//
// KONČAL SI, KO tsc za to datoteko ne javi napak in so vsi
// scenariji ✓. Podatkov, scenarijev in funkcije preveri ne spreminjaj.
// =====================================================

interface Dogodek {
  id: number;
  naslov: string;
  cenaCenti: number;
  prostaMesta: number;
}
interface Nakup {
  dogodekId: number;
  kolicina: number;
}

function vEvre(centi: number): string {
  return (centi / 100).toFixed(2);
}

function kupi(seznam: Dogodek[], nakup: Nakup): string {
  if (nakup.kolicina < 1 || nakup.kolicina > 10) {
    return "Neveljavna količina";
  }
  const d = seznam.find((x) => x.id === nakup.dogodekId);
  if (d.prostaMesta <= nakup.kolicina) {
    return "Ni dovolj mest";
  }
  return `OK: ${vEvre(nakup.kolicina, d.cenaCenti)} €`;
}


// ===== SCENARIJI (ne spreminjaj) =====
const dogodki: Dogodek[] = [
  { id: 1, naslov: "Jazz večer", cenaCenti: 2500, prostaMesta: 10 },
  { id: 2, naslov: "Opera", cenaCenti: 6050, prostaMesta: 2 },
];
function preveri(oznaka: string, dobljeno: string, pricakovano: string): void {
  const znak = dobljeno === pricakovano ? "✓" : "✗";
  console.log(`${znak} ${oznaka}: ${dobljeno} (pričakovano ${pricakovano})`);
}

preveri("A", kupi(dogodki, { dogodekId: 1, kolicina: 2 }), "OK: 50.00 €");
preveri("B", kupi(dogodki, { dogodekId: 2, kolicina: 2 }), "OK: 121.00 €");
preveri("C", kupi(dogodki, { dogodekId: 2, kolicina: 3 }), "Ni dovolj mest");
preveri("D", kupi(dogodki, { dogodekId: 1, kolicina: 0 }), "Neveljavna količina");
preveri("E", kupi(dogodki, { dogodekId: 1, kolicina: 11 }), "Neveljavna količina");
preveri("F", kupi(dogodki, { dogodekId: 9, kolicina: 1 }), "Dogodek ne obstaja");
