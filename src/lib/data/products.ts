export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  origin: string;
  packaging: string[];
  image: string;
}

export const categories = [
  "All",
  "Wine",
  "Coffee & Tea",
  "Olive Oil",
  "Spices & Condiments",
  "Canned & Packaged",
];

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=85`;

export const products: Product[] = [
  // ── WINE ──────────────────────────────────────────────────────────────────
  {
    id: "bordeaux-reserve-rouge",
    name: "Bordeaux Réserve Rouge",
    category: "Wine",
    description:
      "A structured Bordeaux blend of Merlot and Cabernet Sauvignon from the Left Bank. Rich dark fruit, cedar notes, and a long, velvety finish.",
    features: ["AOC Bordeaux certified", "Aged 18 months in French oak", "Limited annual release"],
    origin: "France",
    packaging: ["750ml bottle", "Case of 6", "Case of 12"],
    image: u("1553361371-9b22f78e8b1d"),
  },
  {
    id: "champagne-brut-nv",
    name: "Champagne Brut NV",
    category: "Wine",
    description:
      "Classic non-vintage Champagne from the Marne Valley. Fine persistent bubbles with notes of green apple, brioche, and citrus zest.",
    features: ["AOC Champagne", "Traditional méthode champenoise", "12% ABV"],
    origin: "France",
    packaging: ["750ml bottle", "Magnum (1.5L)", "Case of 6"],
    image: u("1510812431401-41d2bd2722f3"),
  },
  {
    id: "chianti-classico-docg",
    name: "Chianti Classico DOCG",
    category: "Wine",
    description:
      "100% Sangiovese from the historic heart of Tuscany. Bright ruby red with aromas of cherry, dried herbs, and a clean, tannic structure.",
    features: ["DOCG certified", "Estate bottled", "Suitable for aging 5–8 years"],
    origin: "Italy",
    packaging: ["750ml bottle", "Case of 6", "Case of 12"],
    image: u("1578911373434-0cb395d2cbfb"),
  },
  {
    id: "prosecco-doc-extra-dry",
    name: "Prosecco DOC Extra Dry",
    category: "Wine",
    description:
      "Fresh and lively Prosecco from the Veneto region. Delicate white peach, pear, and floral aromas with a crisp, refreshing finish.",
    features: ["DOC Prosecco certified", "Charmat method", "11% ABV"],
    origin: "Italy",
    packaging: ["750ml bottle", "Case of 6", "Case of 12"],
    image: u("1568702846914-96b305d2aaeb"),
  },

  // ── COFFEE & TEA ──────────────────────────────────────────────────────────
  {
    id: "ceremonial-grade-matcha",
    name: "Ceremonial Grade Matcha",
    category: "Coffee & Tea",
    description:
      "First-harvest ceremonial matcha stone-ground from shaded Uji tea leaves. Vivid emerald color, umami-rich, with a naturally sweet finish.",
    features: ["First-flush harvest", "Stone-ground", "No additives or fillers"],
    origin: "Japan",
    packaging: ["30g tin", "100g tin", "500g bulk resealable bag"],
    image: u("1556679343-c7306c1976bc"),
  },
  {
    id: "sencha-green-tea",
    name: "Premium Sencha Green Tea",
    category: "Coffee & Tea",
    description:
      "High-grade loose-leaf sencha from Shizuoka Prefecture. Grassy, vegetal notes with a clean sweetness — Japan's most beloved everyday green tea.",
    features: ["Shizuoka Prefecture origin", "Loose-leaf whole grade", "Rich in catechins"],
    origin: "Japan",
    packaging: ["50g pouch", "200g resealable bag", "1kg bulk"],
    image: u("1564890369478-c89ca6d9cde9"),
  },
  {
    id: "single-origin-arabica-coffee",
    name: "Single-Origin Arabica Coffee",
    category: "Coffee & Tea",
    description:
      "Small-batch roasted Arabica from a single estate in Hawaii's Kona belt. Smooth, low-acid cup with notes of milk chocolate, walnut, and caramel.",
    features: ["100% Kona Arabica", "Light-medium roast", "Ethically sourced & direct trade"],
    origin: "United States",
    packaging: ["250g bag", "500g bag", "1kg bag", "Case of 12 × 250g"],
    image: u("1447933601403-0c6688de566e"),
  },

  // ── OLIVE OIL ─────────────────────────────────────────────────────────────
  {
    id: "evoo-dop-italy",
    name: "Extra Virgin Olive Oil DOP",
    category: "Olive Oil",
    description:
      "Cold-pressed EVOO from century-old Taggiasca olive groves in Liguria. Delicate, fruity, and low in acidity — ideal for finishing and dipping.",
    features: ["DOP certified", "First cold-press", "Acidity below 0.3%"],
    origin: "Italy",
    packaging: ["250ml bottle", "500ml bottle", "1L bottle", "5L tin"],
    image: u("1474979266404-7eaacbcd87c5"),
  },
  {
    id: "white-truffle-olive-oil",
    name: "White Truffle Infused Olive Oil",
    category: "Olive Oil",
    description:
      "Premium Italian EVOO infused with Piedmontese white truffle. A few drops transform pasta, risotto, or eggs into a luxury dish.",
    features: ["Real truffle infusion", "No artificial flavoring", "Gift-ready presentation"],
    origin: "Italy",
    packaging: ["100ml bottle", "250ml bottle"],
    image: u("1611270629569-8b357cb88da9"),
  },

  // ── SPICES & CONDIMENTS ───────────────────────────────────────────────────
  {
    id: "thai-red-curry-paste",
    name: "Thai Red Curry Paste",
    category: "Spices & Condiments",
    description:
      "Authentic red curry paste made from fresh red chilies, galangal, lemongrass, and shrimp paste. The cornerstone of Thai curries and soups.",
    features: ["Traditional recipe", "No artificial preservatives", "Gluten-free"],
    origin: "Thailand",
    packaging: ["100g jar", "400g jar", "1kg bulk tub"],
    image: u("1606914501449-5a96b6ce24ca"),
  },
  {
    id: "herbes-de-provence",
    name: "Herbes de Provence",
    category: "Spices & Condiments",
    description:
      "Classic Provençal blend of thyme, rosemary, savory, marjoram, and lavender flowers. Aromatic and versatile for roasted meats, vegetables, and breads.",
    features: ["Sourced from Provence farms", "No fillers or anti-caking agents", "Hand-blended"],
    origin: "France",
    packaging: ["50g jar", "150g jar", "500g bulk bag"],
    image: u("1509358271058-acd22cc93898"),
  },
  {
    id: "japanese-shoyu",
    name: "Japanese Shoyu Soy Sauce",
    category: "Spices & Condiments",
    description:
      "Naturally brewed koikuchi shoyu fermented for 18 months in cedar barrels. Rich, complex umami — the essential condiment of Japanese cuisine.",
    features: ["18-month barrel fermented", "Non-GMO soybeans", "No artificial additives"],
    origin: "Japan",
    packaging: ["150ml bottle", "500ml bottle", "1.8L bottle", "Case of 12"],
    image: u("1583623025817-d180a2221d0a"),
  },
  {
    id: "dijon-mustard",
    name: "Original Dijon Mustard",
    category: "Spices & Condiments",
    description:
      "Sharp, smooth Dijon mustard made with Burgundy mustard seeds and white wine. Indispensable for vinaigrettes, marinades, and charcuterie boards.",
    features: ["IGP Dijon certified", "Whole mustard seed option available", "No artificial colors"],
    origin: "France",
    packaging: ["200g jar", "500g jar", "5kg bulk pail"],
    image: u("1589985270826-4b7bb135bc9d"),
  },

  // ── CANNED & PACKAGED ─────────────────────────────────────────────────────
  {
    id: "thai-coconut-milk",
    name: "Organic Coconut Milk",
    category: "Canned & Packaged",
    description:
      "Rich, creamy organic coconut milk from mature Thai coconuts. High fat content for authentic curries, soups, and desserts.",
    features: ["Organic certified", "BPA-free can", "No stabilizers or thickeners"],
    origin: "Thailand",
    packaging: ["400ml can", "Case of 24 cans"],
    image: u("1596797038530-2c107229654b"),
  },
  {
    id: "japanese-ramen-noodles",
    name: "Artisan Ramen Noodles",
    category: "Canned & Packaged",
    description:
      "Sun-dried wheat ramen noodles made with alkaline water (kansui) for the signature springy, chewy texture authentic to Japanese ramen shops.",
    features: ["Kansui alkaline noodles", "Sun-dried (not fried)", "No MSG"],
    origin: "Japan",
    packaging: ["200g pack", "Case of 12 packs"],
    image: u("1569718212165-3a8278d5f624"),
  },
  {
    id: "german-sauerkraut",
    name: "Traditional German Sauerkraut",
    category: "Canned & Packaged",
    description:
      "Naturally fermented white cabbage following a 200-year-old Bavarian recipe. Tangy, crunchy, and rich in probiotics — no vinegar added.",
    features: ["Naturally lacto-fermented", "No vinegar or preservatives", "Probiotic-rich"],
    origin: "Germany",
    packaging: ["400g jar", "850g jar", "Case of 12"],
    image: u("1540420773420-3366772f4999"),
  },
  {
    id: "dutch-stroopwafels",
    name: "Dutch Stroopwafels",
    category: "Canned & Packaged",
    description:
      "The iconic Dutch caramel waffle — two thin crisp wafers sandwiching a rich, buttery stroop (caramel syrup). Best enjoyed atop a hot cup of coffee.",
    features: ["Original Gouda recipe", "Individually wrapped", "No artificial flavors"],
    origin: "Netherlands",
    packaging: ["8-pack (box)", "24-pack (display box)", "Case of 12 boxes"],
    image: u("1549007994-cb92caebd54b"),
  },
];

export const featuredCategories = [
  {
    name: "Wine",
    description: "Premier wines from Bordeaux, Champagne, Tuscany, and Veneto.",
    icon: "wine",
  },
  {
    name: "Coffee & Tea",
    description: "Ceremonial matcha, artisan sencha, and single-origin Arabica.",
    icon: "beverage",
  },
  {
    name: "Olive Oil",
    description: "Cold-pressed Italian DOP oils and luxury truffle infusions.",
    icon: "oil",
  },
  {
    name: "Spices & Condiments",
    description: "Authentic Thai curry pastes, French herbs, and Japanese condiments.",
    icon: "spice",
  },
];
