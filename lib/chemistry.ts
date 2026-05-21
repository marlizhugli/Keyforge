export const ELEMENT_NAMES = "Hidrogjen,Helium,Litium,Berilium,Bor,Karbon,Azot,Oksigjen,Fluor,Neon,Natrium,Magnez,Alumin,Silicium,Fosfor,Sulfur,Klor,Argon,Kalium,Kalcium,Skandium,Titan,Vanadium,Krom,Mangan,Hekur,Kobalt,Nikel,Bakër,Zink,Galium,Gjermanium,Arsen,Selen,Brom,Kripton,Rubidium,Stroncium,Itrium,Zirkonium,Niobium,Molibden,Teknecium,Rutenium,Rodium,Paladium,Argjend,Kadmium,Indium,Kallaj,Antimon,Tellur,Jod,Ksenon,Cezium,Barium,Lantan,Cerium,Prazeodim,Neodim,Prometium,Samarium,Europium,Gadolinium,Terbium,Disprozium,Holmium,Erbium,Tulium,Iterbium,Lutetium,Hafnium,Tantal,Tungsten,Rhenium,Osmium,Iridium,Platin,Ari,Merkur,Talium,Plumb,Bizmut,Polonium,Astat,Radon,Francium,Radium,Aktinium,Torium,Protaktinium,Uran,Neptunium,Plutonium,Americium,Curium,Berkelium,Kalifornium,Einsteinium,Fermium,Mendelevium,Nobelium,Laurencium,Rutherfordium,Dubnium,Seaborgium,Bohrium,Hassium,Meitnerium,Darmstadtium,Roentgenium,Kopernicium,Nihonium,Flerovium,Moskovium,Livermorium,Tennessine,Oganeson".split(",");
export const ELEMENT_SYMBOLS = "H,He,Li,Be,B,C,N,O,F,Ne,Na,Mg,Al,Si,P,S,Cl,Ar,K,Ca,Sc,Ti,V,Cr,Mn,Fe,Co,Ni,Cu,Zn,Ga,Ge,As,Se,Br,Kr,Rb,Sr,Y,Zr,Nb,Mo,Tc,Ru,Rh,Pd,Ag,Cd,In,Sn,Sb,Te,I,Xe,Cs,Ba,La,Ce,Pr,Nd,Pm,Sm,Eu,Gd,Tb,Dy,Ho,Er,Tm,Yb,Lu,Hf,Ta,W,Re,Os,Ir,Pt,Au,Hg,Tl,Pb,Bi,Po,At,Rn,Fr,Ra,Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr,Rf,Db,Sg,Bh,Hs,Mt,Ds,Rg,Cn,Nh,Fl,Mc,Lv,Ts,Og".split(",");

export interface KnownIsotope {
  stability: "Stabil" | "Radioaktiv";
  uses: string;
  specificName?: string;
  halfLife?: string;
}

export const KNOWN_ISOTOPES: Record<string, KnownIsotope> = {
  // Hidrogjen
  "1-0": { stability: "Stabil", uses: "Më i bollshëm kudo: ujë, komponime organike, karburant raketash, i përdorur gjerësisht në industri.", specificName: "Protium" },
  "1-1": { stability: "Stabil", uses: "Ujë i rëndë, solvent NMR, reaktorë fuzioni.", specificName: "Deuterium" },
  "1-2": { stability: "Radioaktiv", uses: "Ndriçim i vetë-fuqizuar, reaktorë fuzioni.", specificName: "Tritium", halfLife: "12.3 vite" },

  // Helium
  "2-1": { stability: "Stabil", uses: "Kriogjenikë, detektorë neutronesh, fizikë teorike.", specificName: "Helium-3" },
  "2-2": { stability: "Stabil", uses: "Balona, ftohje e magneteve superpërcjellës (MRI), gaz frymëmarrjeje në thellësi të detit.", specificName: "Helium-4" },

  // Litium
  "3-3": { stability: "Stabil", uses: "Përdoret për të prodhuar tritium dhe si absorbues neutronesh në fuzionin bërthamor." },
  "3-4": { stability: "Stabil", uses: "Litiumi standard i përdorur në bateri, qeramikë dhe medikamente psikotrope." },

  // Berilium
  "4-5": { stability: "Stabil", uses: "Lidhje, komponentë hapësinorë, dritare rrezesh X." },

  // Bor
  "5-5": { stability: "Stabil", uses: "Terapi e kapjes së neutroneve, shufra kontrolli të reaktorit bërthamor." },
  "5-6": { stability: "Stabil", uses: "Qelq borosilikati, bujqësi, detergjentë." },

  // Karbon
  "6-5": { stability: "Radioaktiv", uses: "Emetues pozitronësh me jetë të shkurtër i përdorur në skanimet PET.", halfLife: "20.3 minuta" },
  "6-6": { stability: "Stabil", uses: "Baza e gjithë jetës së njohur, kimi organike, diamante, grafit." },
  "6-7": { stability: "Stabil", uses: "Spektroskopi NMR për komponimet organike." },
  "6-8": { stability: "Radioaktiv", uses: "Datim me radiokarbon, ndjekja e rrugëve metabolike.", halfLife: "5,730 vite" },

  // Azot
  "7-7": { stability: "Stabil", uses: "78% e atmosferës së Tokës, plehëra, eksplozivë, kriogjenikë." },
  "7-8": { stability: "Stabil", uses: "Studime gjurmuese bujqësore dhe mjedisore." },

  // Oksigjen
  "8-8": { stability: "Stabil", uses: "Frymëmarrje, ujë, djegie, prodhim çeliku." },
  "8-10": { stability: "Stabil", uses: "Gjurmues mjedisor, paleoklimatologji (bërthama akulli)." },

  // Fluor
  "9-9": { stability: "Radioaktiv", uses: "Vendimtar për skanimet PET në imazherinë mjekësore (Fluorodeoksiglukozë).", halfLife: "109.7 minuta" },
  "9-10": { stability: "Stabil", uses: "Pastë dhëmbësh, Teflon, pasurim uraniumi." },

  // Natrium
  "11-12": { stability: "Stabil", uses: "Kripë gjelle, funksioni i nervave, ndriçimi i rrugëve." },
  "11-13": { stability: "Radioaktiv", uses: "Gjurmues mjekësor për të ndjekur rrjedhën e gjakut.", halfLife: "14.9 orë" },

  // Fosfor
  "15-16": { stability: "Stabil", uses: "Plehëra, shkrepëse, shtylla kurrizore e ADN-së." },
  "15-17": { stability: "Radioaktiv", uses: "Radiogjurmim në biologjinë molekulare dhe gjenetikë.", halfLife: "14.2 ditë" },

  // Kalium
  "19-20": { stability: "Stabil", uses: "Plehëra, funksioni i nervave, sapunë." },
  "19-21": { stability: "Radioaktiv", uses: "Rrezatimi natyror në sfond (banane), datimi me Kalium-Argon.", halfLife: "1.25 miliard vite" },

  // Kalcium
  "20-20": { stability: "Stabil", uses: "Eshtra, beton, shkumës." },
  "20-28": { stability: "Radioaktiv", uses: "Studime të fizikës teorike për 'numrat magjikë'.", halfLife: "E panjohur" },

  // Kobalt
  "27-32": { stability: "Stabil", uses: "Magnete, lidhje me qëndrueshmëri të lartë, pigment blu." },
  "27-33": { stability: "Radioaktiv", uses: "Radioterapi (trajtimi i kancerit), rrezatimi i ushqimit, radiografi industriale.", halfLife: "5.27 vite" },

  // Stroncium
  "38-52": { stability: "Radioaktiv", uses: "Nënprodukt i rrezikshëm i mbetjeve bërthamore (imiton kalciumin në kocka).", halfLife: "28.9 vite" },

  // Teknecium
  "43-56": { stability: "Radioaktiv", uses: "Radioizotopi mjekësor më i zakonshëm për imazherinë diagnostike.", halfLife: "6 orë" },

  // Jod
  "53-74": { stability: "Stabil", uses: "Shëndeti i tiroides, dezinfektues, fotografi." },
  "53-78": { stability: "Radioaktiv", uses: "Trajtimi dhe imazheria e kancerit të tiroides.", halfLife: "8 ditë" },

  // Cezium
  "55-78": { stability: "Stabil", uses: "Orë atomike, lëngje shpimi." },
  "55-82": { stability: "Radioaktiv", uses: "Terapi rrezatimi, matësa industrialë, rrezik i rëndë nga mbetjet bërthamore.", halfLife: "30.1 vite" },

  // Polonium
  "84-126": { stability: "Radioaktiv", uses: "Furça antistatike, vrasje historike, burim nxehtësie.", halfLife: "138 ditë" },

  // Radium
  "88-138": { stability: "Radioaktiv", uses: "Boja historike që shkëlqen në errësirë, radioterapi e hershme.", halfLife: "1,600 vite" },

  // Uran
  "92-143": { stability: "Radioaktiv", uses: "Materiali kryesor fisionar për karburantin e reaktorit bërthamor dhe armët atomike.", halfLife: "704 milion vite" },
  "92-146": { stability: "Radioaktiv", uses: "Uraniumi natyror më i bollshëm; i përdorur në armaturë dhe mbarështimin e plutoniumit.", halfLife: "4.46 miliard vite" },

  // Plutonium
  "94-145": { stability: "Radioaktiv", uses: "Izotopi kryesor fisionar për armët bërthamore moderne dhe disa reaktorë.", halfLife: "24,100 vite" },
  "94-144": { stability: "Radioaktiv", uses: "Gjeneratorë termoelektrikë radioizotopë (RTG) për anijet kozmike (si Voyager).", halfLife: "87.7 vite" },

  // Amerikium
  "95-146": { stability: "Radioaktiv", uses: "Përdoret globalisht në detektorët shtëpiakë të tymit me jonizim tregtar.", halfLife: "432.2 vite" },
};

export interface IsotopeResult {
  z: number;
  n: number;
  mass: number;
  elementName: string;
  symbol: string;
  isotopeName: string;
  isotopeSymbol: string;
  stability: string;
  uses: string;
}

export function getIsotopeDetails(z: number, n: number): IsotopeResult {
  let elementName = "Element i Panjohur";
  let symbol = "??";

  if (z >= 1 && z <= ELEMENT_NAMES.length) {
    elementName = ELEMENT_NAMES[z - 1];
    symbol = ELEMENT_SYMBOLS[z - 1];
  } else if (z > ELEMENT_NAMES.length) {
    elementName = `Element Super i Rëndë ${z}`;
    symbol = `E${z}`;
  }

  const mass = z + n;

  const key = `${z}-${n}`;
  const known = KNOWN_ISOTOPES[key];

  let stability: string;
  let uses: string;

  const specificName = known?.specificName ? ` / ${known.specificName}` : '';
  const isotopeName = `${elementName}-${mass}${specificName}`;
  const isotopeSymbol = `^${mass}${symbol}`; // e.g. ^14C

  if (known) {
    stability = known.halfLife ? `${known.stability} (t½ ~ ${known.halfLife})` : known.stability;
    uses = known.uses;
  } else {
    // Heuristikë bazë për izotopet e panjohura
    if (z > 82) {
      stability = "Radioaktiv (Elementet përtej Plumbit nuk kanë izotope stabile)";
      uses = "Nuk ka përdorime të gjera tregtare; me shumë gjasa studiohet në kontekste të fizikës së grimcave ose formon pjesë të zinxhirëve natyrorë të shpërbërjes.";
    } else if (z === 43 || z === 61 || z === 84 || z === 85 || z === 87 || z === 88 || z === 89 || z === 91) {
      stability = "Radioaktiv (Elementi nuk ka izotope stabile)";
      uses = "Kryesisht kërkime ose aplikime shumë të specializuara.";
    } else {
      // Kontroll i përafërt për raportin stabil N/Z
      const targetRatio = 1 + (z * 0.006);
      const actualRatio = z > 0 ? n / z : 0;

      const diff = Math.abs(actualRatio - targetRatio);
      if (diff < 0.15) {
        stability = "Gjasa të jetë Stabil (ose me jetë shumë të gjatë)";
        uses = "Me shumë gjasa formon pjesë të përbërjes izotopike natyrore të këtij elementi, i përdorur përgjithësisht së bashku me vetë elementin.";
      } else if (actualRatio < targetRatio) {
        stability = "Radioaktiv (I pasur me protone)";
        uses = "Shpesh i nënshtrohet shpërbërjes beta-plus ose kapjes së elektroneve. Prodhuar artificialisht për kërkime.";
      } else {
        stability = "Radioaktiv (I pasur me neutrone)";
        uses = "Shpesh i nënshtrohet shpërbërjes beta-minus. Produkt tipik i reaktorëve bërthamorë ose procesit r astrofizik.";
      }
    }
  }

  return {
    z,
    n,
    mass,
    elementName,
    symbol,
    isotopeName,
    isotopeSymbol,
    stability,
    uses
  };
}

export type ParsedIsotopeInput =
  | { type: 'isotope'; z: number; n: number }
  | { type: 'element'; z: number };

export function getKnownIsotopesForElement(z: number): IsotopeResult[] {
  const results: IsotopeResult[] = [];
  const prefix = `${z}-`;
  for (const key of Object.keys(KNOWN_ISOTOPES)) {
    if (key.startsWith(prefix)) {
      const parts = key.split('-');
      if (parts.length === 2 && parts[0] === z.toString()) {
        const n = parseInt(parts[1], 10);
        results.push(getIsotopeDetails(z, n));
      }
    }
  }
  return results.sort((a, b) => a.mass - b.mass);
}

export function parseIsotopeInput(input: string): ParsedIsotopeInput | null {
  const normalized = input.trim().toLowerCase();

  // Emra specifikë të zakonshëm
  if (normalized === "protium") return { type: 'isotope', z: 1, n: 0 };
  if (normalized === "deuterium") return { type: 'isotope', z: 1, n: 1 };
  if (normalized === "tritium") return { type: 'isotope', z: 1, n: 2 };

  // Kontrollo vetëm emrin/simbolin e elementit
  let zElementOnly = -1;
  const symbolIndex = ELEMENT_SYMBOLS.findIndex(s => s.toLowerCase() === normalized);
  if (symbolIndex !== -1) {
    zElementOnly = symbolIndex + 1;
  } else {
    const nameIndex = ELEMENT_NAMES.findIndex(nm => nm.toLowerCase() === normalized);
    if (nameIndex !== -1) {
      zElementOnly = nameIndex + 1;
    }
  }

  if (zElementOnly !== -1) {
    return { type: 'element', z: zElementOnly };
  }

  let matchName = "";
  let matchMass = 0;

  // Regex për "Karbon-14", "C-14", "Karbon 14", "C14"
  const regex1 = /^([a-zëç]+)[\s\-]*(\d+)$/i;
  // Regex për "14C", "14-C", "14 Karbon"
  const regex2 = /^(\d+)[\s\-]*([a-zëç]+)$/i;

  let m = input.trim().match(regex1);
  if (m) {
    matchName = m[1].toLowerCase();
    matchMass = parseInt(m[2], 10);
  } else {
    m = input.trim().match(regex2);
    if (m) {
      matchMass = parseInt(m[1], 10);
      matchName = m[2].toLowerCase();
    } else {
      return null;
    }
  }

  let z = -1;

  // Kontrollo simbolet e elementeve
  const symIndex2 = ELEMENT_SYMBOLS.findIndex(s => s.toLowerCase() === matchName);
  if (symIndex2 !== -1) {
    z = symIndex2 + 1;
  } else {
    // Kontrollo emrat e elementeve
    const nameIndex2 = ELEMENT_NAMES.findIndex(nm => nm.toLowerCase() === matchName);
    if (nameIndex2 !== -1) {
      z = nameIndex2 + 1;
    }
  }

  if (z === -1) return null;

  const n = matchMass - z;
  if (n < 0) return null;

  return { type: 'isotope', z, n };
}
