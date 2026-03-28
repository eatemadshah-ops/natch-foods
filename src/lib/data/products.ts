export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  origin: string;
  packaging: string[];
}

export const categories = [
  "All",
  "Spices & Seasonings",
  "Grains & Pulses",
  "Snacks & Confections",
  "Beverages",
  "Oils & Condiments",
  "Ready-to-Eat",
];

export const products: Product[] = [
  {
    id: "turmeric-powder",
    name: "Premium Turmeric Powder",
    category: "Spices & Seasonings",
    description:
      "High-curcumin turmeric sourced from select farms. Vibrant color and robust flavor for culinary and wellness applications.",
    features: ["High curcumin content", "Lab tested", "Non-irradiated"],
    origin: "India",
    packaging: ["50g", "100g", "500g", "25kg bulk"],
  },
  {
    id: "smoked-paprika",
    name: "Smoked Paprika",
    category: "Spices & Seasonings",
    description:
      "Traditional oak-smoked paprika with a deep, smoky sweetness. Perfect for rubs, stews, and marinades.",
    features: ["Oak-smoked", "Sweet variety", "Rich color"],
    origin: "Spain",
    packaging: ["75g", "250g", "5kg bulk"],
  },
  {
    id: "black-cardamom",
    name: "Black Cardamom Pods",
    category: "Spices & Seasonings",
    description:
      "Whole dried black cardamom pods with an intense smoky aroma. Essential for curries and biryanis.",
    features: ["Whole pods", "Smoky flavor", "Hand-selected"],
    origin: "Nepal",
    packaging: ["50g", "200g", "10kg bulk"],
  },
  {
    id: "basmati-rice",
    name: "Aged Basmati Rice",
    category: "Grains & Pulses",
    description:
      "Extra-long grain basmati rice aged 12 months for optimal aroma and fluffy texture when cooked.",
    features: ["12-month aged", "Extra-long grain", "Low starch"],
    origin: "India",
    packaging: ["1kg", "5kg", "25kg"],
  },
  {
    id: "red-lentils",
    name: "Split Red Lentils",
    category: "Grains & Pulses",
    description:
      "Cleaned and polished red lentils. Quick-cooking with a creamy texture, ideal for soups and dals.",
    features: ["Quick cooking", "High protein", "Stone-free"],
    origin: "Turkey",
    packaging: ["500g", "1kg", "25kg bulk"],
  },
  {
    id: "quinoa-tricolor",
    name: "Tricolor Quinoa",
    category: "Grains & Pulses",
    description:
      "A blend of white, red, and black quinoa. Complete protein source with a nutty flavor and varied texture.",
    features: ["Complete protein", "Pre-washed", "Gluten-free"],
    origin: "Peru",
    packaging: ["500g", "1kg", "10kg bulk"],
  },
  {
    id: "plantain-chips",
    name: "Plantain Chips",
    category: "Snacks & Confections",
    description:
      "Crispy plantain chips lightly salted and fried in coconut oil. A tropical snack with a satisfying crunch.",
    features: ["Coconut oil fried", "Lightly salted", "No preservatives"],
    origin: "Ecuador",
    packaging: ["75g", "150g", "1kg bulk"],
  },
  {
    id: "sesame-brittle",
    name: "Sesame Honey Brittle",
    category: "Snacks & Confections",
    description:
      "Traditional sesame brittle made with raw honey and toasted sesame seeds. Sweet and crunchy.",
    features: ["Raw honey", "Toasted sesame", "All natural"],
    origin: "Lebanon",
    packaging: ["100g", "250g"],
  },
  {
    id: "mango-chutney",
    name: "Mango Chutney",
    category: "Oils & Condiments",
    description:
      "Sweet and tangy mango chutney with ginger and spices. Perfect as a dip or accompaniment.",
    features: ["Real mango pieces", "No artificial colors", "Mild heat"],
    origin: "India",
    packaging: ["300g jar", "1kg jar", "5kg bulk"],
  },
  {
    id: "extra-virgin-olive-oil",
    name: "Extra Virgin Olive Oil",
    category: "Oils & Condiments",
    description:
      "Cold-pressed extra virgin olive oil from century-old groves. Fruity, peppery, and ideal for finishing dishes.",
    features: ["Cold-pressed", "First harvest", "Low acidity"],
    origin: "Greece",
    packaging: ["250ml", "500ml", "1L", "5L tin"],
  },
  {
    id: "hibiscus-tea",
    name: "Dried Hibiscus Flowers",
    category: "Beverages",
    description:
      "Whole dried hibiscus flowers for brewing a tart, ruby-red herbal tea. Rich in antioxidants.",
    features: ["Whole flowers", "Caffeine-free", "Vibrant color"],
    origin: "Egypt",
    packaging: ["100g", "500g", "5kg bulk"],
  },
  {
    id: "instant-chai",
    name: "Masala Chai Blend",
    category: "Beverages",
    description:
      "An authentic blend of CTC black tea with cardamom, cinnamon, ginger, and cloves. Ready to brew.",
    features: ["Authentic spice blend", "CTC tea base", "Pre-mixed"],
    origin: "India",
    packaging: ["200g", "500g", "5kg bulk"],
  },
  {
    id: "coconut-milk",
    name: "Organic Coconut Milk",
    category: "Beverages",
    description:
      "Rich, creamy coconut milk made from fresh organic coconuts. Ideal for curries, smoothies, and desserts.",
    features: ["Organic certified", "No additives", "High fat content"],
    origin: "Sri Lanka",
    packaging: ["400ml can", "1L carton", "Case of 24"],
  },
  {
    id: "biryani-kit",
    name: "Biryani Spice Kit",
    category: "Ready-to-Eat",
    description:
      "Complete spice kit for authentic biryani. Includes measured spices, fried onions, and saffron strands.",
    features: ["Complete kit", "Serves 4-6", "Authentic recipe"],
    origin: "India",
    packaging: ["Single kit", "Box of 12"],
  },
  {
    id: "falafel-mix",
    name: "Falafel Mix",
    category: "Ready-to-Eat",
    description:
      "Just-add-water falafel mix made from ground chickpeas, herbs, and spices. Crispy outside, fluffy inside.",
    features: ["Just add water", "Vegan", "No artificial flavors"],
    origin: "Jordan",
    packaging: ["200g", "500g", "5kg bulk"],
  },
];

export const featuredCategories = [
  {
    name: "Spices & Seasonings",
    description: "Aromatic spices sourced from the finest growing regions worldwide.",
    icon: "fire",
  },
  {
    name: "Grains & Pulses",
    description: "Premium grains and protein-rich pulses for every cuisine.",
    icon: "grain",
  },
  {
    name: "Snacks & Confections",
    description: "Unique snacks and sweets from culinary traditions around the globe.",
    icon: "snack",
  },
  {
    name: "Beverages",
    description: "Teas, blends, and specialty drinks from expert producers.",
    icon: "beverage",
  },
];
