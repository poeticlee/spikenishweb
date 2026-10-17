/**
 * ------------------------------------------------------------------
 * PRODUCT CATALOGUE
 * Easy to expand: copy any product block, paste it, then edit it.
 *
 *  - image    : file inside public/images (keep the file name in sync)
 *  - price    : leave as null → the card shows
 *               "Contact us for current price"
 *  - sizes    : array of size strings, e.g. ["25kg", "50kg"] — or null
 *  - stock    : "In stock" / "Limited" / null (null = not maintained)
 *  - featured : true → shows in the "Featured" section on the homepage
 *
 * Never leave an invented price here — use null until you have one.
 * ------------------------------------------------------------------
 */

export const CATEGORIES = [
  { id: "general", name: "General Raw Materials", hint: "Core formulation chemicals" },
  { id: "liquid-soap", name: "Liquid Soap Production", hint: "Soaps & surfactants" },
  { id: "disinfectant", name: "Disinfectants & Hygiene", hint: "Izal / Dettol type, sanitisers" },
  { id: "cleaning", name: "Bleach & Cleaning Products", hint: "Bleach, toilet & tile, laundry" },
  { id: "insecticide", name: "Insecticides", hint: "Formulation ingredients" },
  { id: "air-freshener", name: "Air Fresheners", hint: "Bases & fragrances" },
  { id: "cosmetics", name: "Cosmetics & Personal Care", hint: "Vaseline, shampoo, conditioner" },
];

export const PRODUCTS = [
  /* ---------------- A. GENERAL CHEMICAL RAW MATERIALS ---------------- */
  {
    id: "caustic-soda",
    name: "Caustic Soda",
    category: "general",
    image: "/images/caustic-soda.jpg",
    imageAlt: "Caustic soda (sodium hydroxide) flakes in a container",
    description:
      "A core raw material used across many cleaning and soap formulations, including liquid soap and detergent production.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Commonly used in liquid soap and detergent formulation",
      "Ask us about the pack sizes currently available",
      "Availability is confirmed on WhatsApp before purchase",
    ],
  },
  {
    id: "soda-ash",
    name: "Soda Ash",
    category: "general",
    image: "/images/soda-ash.jpg",
    imageAlt: "Soda ash (sodium carbonate) white powder",
    description:
      "Sodium carbonate, widely used as a builder in detergent, soap and general cleaning product formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Used in detergent and cleaning powder formulations",
      "Pack sizes vary — message us for what is on ground",
      "Current price confirmed on WhatsApp",
    ],
  },
  {
    id: "sulphonic-acid",
    name: "Sulphonic Acid",
    category: "general",
    image: "/images/sulphonic-acid.jpg",
    imageAlt: "Sulphonic acid surfactant used in cleaning product production",
    description:
      "A key surfactant used in liquid soap, detergent and general cleaning product formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Central surfactant for liquid soap and detergent production",
      "Available pack sizes confirmed on WhatsApp",
      "Ask about current pricing when you enquire",
    ],
  },
  {
    id: "texapon",
    name: "Texapon",
    category: "general",
    image: "/images/texapon.jpg",
    imageAlt: "Texapon surfactant gel for personal care formulations",
    description:
      "A mild surfactant base commonly used in liquid soap, shampoo and cleanser formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Popular in liquid soap and personal-care formulations",
      "Ask us about the grade and pack size available",
      "Availability confirmed on WhatsApp",
    ],
  },
  {
    id: "sls",
    name: "SLS (Sodium Lauryl Sulphate)",
    category: "general",
    image: "/images/sls.jpg",
    imageAlt: "SLS (sodium lauryl sulphate) powder raw material",
    description:
      "A surfactant used to boost foam and cleaning action in soaps, shampoos and detergent formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Foam boosting and cleansing support in formulations",
      "Used in soap, shampoo and detergent production",
      "Message us for sizes and current price",
    ],
  },
  {
    id: "stpp",
    name: "STPP (Sodium Tripolyphosphate)",
    category: "general",
    image: "/images/stpp.jpg",
    imageAlt: "STPP (sodium tripolyphosphate) granules for detergent production",
    description:
      "A builder commonly used in detergent powder and general cleaning product formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Common builder in laundry and cleaning powders",
      "Pack sizes confirmed on WhatsApp",
      "Current price available on request",
    ],
  },
  {
    id: "natrosol",
    name: "Natrosol (Hydroxyethyl Cellulose)",
    category: "general",
    image: "/images/natrosol.jpg",
    imageAlt: "Natrosol thickener powder in a container",
    description:
      "A thickener used to give body and stability to liquid soap, sanitisers and personal-care formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Thickening and stabilising agent",
      "Used in liquid soap, sanitiser and personal-care production",
      "Ask about availability and pack sizes",
    ],
  },
  {
    id: "glycerine",
    name: "Glycerine",
    category: "general",
    image: "/images/glycerine.jpg",
    imageAlt: "Glycerine liquid raw material for personal-care formulations",
    description:
      "A popular humectant used in soaps, sanitisers, lotions and other personal-care formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Used in soap, sanitiser and skincare formulations",
      "Availability confirmed on WhatsApp",
      "Message us for current pricing",
    ],
  },
  {
    id: "citric-acid",
    name: "Citric Acid",
    category: "general",
    image: "/images/citric-acid.jpg",
    imageAlt: "Citric acid crystals used in cleaning and cosmetic formulations",
    description:
      "Used across cleaning, descaling and cosmetic formulations as a pH adjuster and all-round formulation ingredient.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Common in cleaning and personal-care formulations",
      "Pack sizes confirmed on WhatsApp",
      "Enquire for current availability",
    ],
  },
  {
    id: "edta",
    name: "EDTA (Chelating Agent)",
    category: "general",
    image: "/images/edta.jpg",
    imageAlt: "EDTA chelating agent powder for detergent formulations",
    description:
      "A chelating agent used in detergent, soap and cleaning formulations to improve product performance.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Used in detergent and cleaning formulations",
      "Availability confirmed on WhatsApp",
      "Message us for sizes and price",
    ],
  },
  {
    id: "isopropyl-alcohol",
    name: "Isopropyl Alcohol (IPA)",
    category: "general",
    image: "/images/isopropyl-alcohol.jpg",
    imageAlt: "Isopropyl alcohol solvent for formulations",
    description:
      "A solvent used in sanitisers, cleaning products and various industrial formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Solvent for sanitiser and cleaning formulations",
      "Confirm current availability on WhatsApp",
      "Pack sizes vary",
    ],
  },
  {
    id: "hydrogen-peroxide",
    name: "Hydrogen Peroxide",
    category: "general",
    image: "/images/hydrogen-peroxide.jpg",
    imageAlt: "Hydrogen peroxide chemical container",
    description:
      "A bleaching and oxidising agent used in some cleaning and bleach formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Used in bleach and cleaning formulations",
      "Availability confirmed on WhatsApp",
      "Ask about current pack sizes and price",
    ],
  },

  /* ---------------- B. LIQUID SOAP PRODUCTION ---------------- */
  {
    id: "liquid-soap-raw-materials",
    name: "Liquid Soap Production Raw Materials",
    category: "liquid-soap",
    image: "/images/liquid-soap.webp",
    imageAlt: "Bottles of freshly produced liquid soap",
    description:
      "The surfactants, builders, thickeners and additives used to produce liquid soap. Tell us your recipe and we will confirm what is available.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Includes sulphonic acid, texapon, caustic soda, soda ash and natrosol",
      "Colours, preservatives and fragrances available on request",
      "Ask us about the full set for your formulation",
    ],
  },
  {
    id: "liquid-soap-thickeners",
    name: "Foam Boosters & Thickeners for Liquid Soap",
    category: "liquid-soap",
    image: "/images/natrosol.jpg",
    imageAlt: "Thickener and foam boosting materials for liquid soap",
    description:
      "Materials such as natrosol and SLS that control thickness, stability and foam in your liquid soap formulation.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Natrosol and SLS for body and foam",
      "Usage guidance available during training",
      "Confirm availability on WhatsApp",
    ],
  },
  {
    id: "liquid-soap-additives",
    name: "Preservatives, Colourants & Fragrances for Liquid Soap",
    category: "liquid-soap",
    image: "/images/fragrance.jpg",
    imageAlt: "Fragrance oils and additives used in liquid soap production",
    description:
      "The finishing materials that give liquid soap its colour, scent and shelf stability. Ask for the range currently available.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Fragrances, dyes and preservatives",
      "Suitable for soap and general cleaning products",
      "Availability confirmed on WhatsApp",
    ],
  },

  /* ---------------- C. DISINFECTANTS & HYGIENE ---------------- */
  {
    id: "izal-type-materials",
    name: "Izal-Type Disinfectant Raw Materials",
    category: "disinfectant",
    image: "/images/izal-type.webp",
    imageAlt: "Bottle of concentrated Izal-type liquid disinfectant",
    description:
      "Raw materials for producing Izal-type emulsifiable disinfectants for homes, offices and institutions.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Materials for Izal-type disinfectant formulation",
      "Fragrances and colourants available on request",
      "Ask us about formulation guidance and training",
    ],
  },
  {
    id: "dettol-type-materials",
    name: "Dettol-Type Disinfectant Raw Materials",
    category: "disinfectant",
    image: "/images/disinfectant.webp",
    imageAlt: "Trigger-spray bottle of antibacterial disinfectant",
    description:
      "Raw materials used in Dettol-type antiseptic disinfectant formulations, including pine and related ingredients.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "For antiseptic / Dettol-type formulations",
      "Availability confirmed on WhatsApp",
      "Formulation support available through our training",
    ],
  },
  {
    id: "sanitiser-materials",
    name: "Hand Sanitiser Production Materials",
    category: "disinfectant",
    image: "/images/sanitiser.jpg",
    imageAlt: "Hand sanitiser produced from available raw materials",
    description:
      "The ingredients used to produce hand sanitisers, including alcohol bases, thickeners and additives.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Alcohol base, thickeners and additives",
      "Ask for the current set available for your formulation",
      "Training available on sanitiser production",
    ],
  },

  /* ---------------- D. BLEACH & CLEANING PRODUCTS ---------------- */
  {
    id: "bleach-materials",
    name: "Bleach Production Materials",
    category: "cleaning",
    image: "/images/bleach.jpg",
    imageAlt: "Bleach bottle produced from chemical raw materials",
    description:
      "Chemical materials used to produce household bleach and related cleaning products.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Materials for bleach formulation",
      "Related cleaning chemicals available on request",
      "Confirm current availability on WhatsApp",
    ],
  },
  {
    id: "toilet-wash-chemicals",
    name: "Toilet Wash Chemicals",
    category: "cleaning",
    image: "/images/cleaner.jpg",
    imageAlt: "Toilet wash and bathroom cleaning products",
    description:
      "Raw materials for toilet wash and bathroom cleaning product formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Acids, surfactants and fragrances for toilet care",
      "Availability confirmed on WhatsApp",
      "Ask about our training for formulation guidance",
    ],
  },
  {
    id: "tile-cleaner-materials",
    name: "Tile Cleaner Materials",
    category: "cleaning",
    image: "/images/cleaner.jpg",
    imageAlt: "Tile and surface cleaner spray produced from raw materials",
    description:
      "Materials for producing tile and surface cleaners for homes and commercial spaces.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Formulation ingredients for tile and surface cleaners",
      "Pack sizes confirmed on WhatsApp",
      "Current price on request",
    ],
  },
  {
    id: "scouring-powder-materials",
    name: "Scouring Powder Materials",
    category: "cleaning",
    image: "/images/scouring-powder.webp",
    imageAlt: "Scouring powder with a cleaning sponge and fresh lemon",
    description:
      "Abrasives, binders and additives used in scouring powder and heavy-duty cleaning formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "For abrasive and heavy-duty cleaning products",
      "Ask which materials are currently available",
      "Current price confirmed on WhatsApp",
    ],
  },
  {
    id: "laundry-detergent-materials",
    name: "Laundry Detergent Materials",
    category: "cleaning",
    image: "/images/laundry-detergent.webp",
    imageAlt: "Bottles and packs of laundry detergent",
    description:
      "Surfactants, builders and additives used in laundry detergent powder and liquid formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Includes STPP, soda ash and surfactants",
      "For powder and liquid detergent production",
      "Availability confirmed on WhatsApp",
    ],
  },

  /* ---------------- E. INSECTICIDES ---------------- */
  {
    id: "insecticide-raw-materials",
    name: "Insecticide Production Raw Materials",
    category: "insecticide",
    image: "/images/insecticide.webp",
    imageAlt: "Trigger-spray bottle of insecticide on a green background",
    description:
      "Raw materials and formulation ingredients used in insecticide production. Tell us the product you want to make.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Materials for different insecticide formulations",
      "Fragrances and additives available on request",
      "Ask us about our production training",
    ],
  },
  {
    id: "insecticide-additives",
    name: "Insecticide Fragrances & Additives",
    category: "insecticide",
    image: "/images/fragrance.jpg",
    imageAlt: "Fragrance and additive materials for insecticide production",
    description:
      "Fragrances and supporting ingredients that finish an insecticide formulation and give it a pleasant scent.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Scent and finishing materials",
      "Availability confirmed on WhatsApp",
      "Pack sizes vary by material",
    ],
  },

  /* ---------------- F. AIR FRESHENERS ---------------- */
  {
    id: "air-freshener-raw-materials",
    name: "Air Freshener Raw Materials",
    category: "air-freshener",
    image: "/images/air-freshener.jpg",
    imageAlt: "Air freshener spray produced from chemical raw materials",
    description:
      "Chemicals and supporting materials used to produce air fresheners — aerosol, pump spray and gel types.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Materials for aerosol, spray and gel air fresheners",
      "Ask which types you can produce with what is available",
      "Training available on air freshener production",
    ],
  },
  {
    id: "air-freshener-fragrances",
    name: "Air Freshener Fragrances",
    category: "air-freshener",
    image: "/images/fragrance.jpg",
    imageAlt: "Assorted fragrance oils for air freshener production",
    description:
      "Perfume and fragrance oils that give air fresheners, soaps and cleaning products their scent.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "A range of scents for home-care and personal-care products",
      "Ask for the fragrance list currently available",
      "Current price confirmed on WhatsApp",
    ],
  },
  {
    id: "air-freshener-bases",
    name: "Air Freshener Bases & Carriers",
    category: "air-freshener",
    image: "/images/air-freshener.jpg",
    imageAlt: "Air freshener base materials and carriers",
    description:
      "Base liquids and carriers used to carry fragrance in air freshener and room-spray formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Carrier materials for spray and gel formulations",
      "Availability confirmed on WhatsApp",
      "Enquire for pack sizes and price",
    ],
  },

  /* ---------------- G. COSMETICS & PERSONAL CARE ---------------- */
  {
    id: "petroleum-jelly-materials",
    name: "Vaseline & Petroleum Jelly Production Materials",
    category: "cosmetics",
    image: "/images/petroleum-jelly.jpg",
    imageAlt: "Jar of petroleum jelly produced from raw materials",
    description:
      "Base materials and additives used to produce petroleum jelly and vaseline-style products.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Base materials for jelly and vaseline production",
      "Fragrances and additives available on request",
      "Training available on production",
    ],
  },
  {
    id: "shampoo-materials",
    name: "Shampoo Production Materials",
    category: "cosmetics",
    image: "/images/shampoo.jpg",
    imageAlt: "Shampoo bottle produced from personal-care raw materials",
    description:
      "Surfactants, thickeners, conditioners and additives used in shampoo formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: true,
    details: [
      "Includes texapon, SLS and natrosol",
      "Fragrances and preservatives available",
      "Ask about our shampoo production training",
    ],
  },
  {
    id: "conditioner-materials",
    name: "Conditioner Production Materials",
    category: "cosmetics",
    image: "/images/conditioner.jpg",
    imageAlt: "Hair conditioner bottle produced from raw materials",
    description:
      "Fatty alcohols, thickeners and additives used to produce hair conditioners.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Materials for cream and rinse-out conditioners",
      "Availability confirmed on WhatsApp",
      "Training available on formulation",
    ],
  },
  {
    id: "cosmetic-base-materials",
    name: "Cosmetic & Personal-Care Base Materials",
    category: "cosmetics",
    image: "/images/glycerine.jpg",
    imageAlt: "Base materials for cosmetic and personal-care formulation",
    description:
      "General base materials, oils, humectants and additives used across cosmetic and personal-care formulations.",
    sizes: null,
    price: null,
    stock: null,
    featured: false,
    details: [
      "Glycerine, oils and formulation additives",
      "Ask for the specific material you need",
      "Availability confirmed on WhatsApp",
    ],
  },
];

/** Products shown in the homepage "Featured" carousel/grid. */
export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);
