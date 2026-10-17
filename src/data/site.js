/**
 * ------------------------------------------------------------------
 * SPIKENISH CHEMICALS — BUSINESS INFORMATION
 * Edit this file to update phone numbers, locations, navigation,
 * frequently asked questions and other company-wide content.
 * ------------------------------------------------------------------
 */

export const BUSINESS = {
  name: "Spikenish Chemicals",
  shortName: "Spikenish",
  description:
    "Supplier of chemicals and raw materials for manufacturing liquid soap, disinfectants, insecticides, bleach, air fresheners, cosmetics, personal-care products, and other household cleaning products.",
  longDescription:
    "Spikenish Chemicals supplies the chemicals and raw materials behind everyday products — from liquid soap and disinfectants to bleach, insecticides, air fresheners, cosmetics and personal-care items. We serve aspiring manufacturers, entrepreneurs and existing producers, and we back our supply with practical formulation and production training.",
  currency: "Naira (₦)",
  // Update these two values when the website domain is known.
  websiteUrl: "https://spikenishchemicals.com/",
};

/** WhatsApp numbers — international Nigerian format (no +, no leading 0). */
export const WHATSAPP_NUMBERS = [
  { id: "line-1", display: "07066457617", intl: "2347066457617", label: "WhatsApp Line 1" },
  { id: "line-2", display: "08065979500", intl: "2348065979500", label: "WhatsApp Line 2" },
];

/** Click-to-call numbers (tel: links use the local format). */
export const PHONE_NUMBERS = ["07066457617", "08065979500"];

export const LOCATIONS = [
  {
    id: "ojoo",
    name: "Ojoo Branch",
    address: "Inside Net Complex, Ojoo, Ibadan, Oyo State, Nigeria",
    shortAddress: "Inside Net Complex, Ojoo",
    city: "Ibadan, Oyo State",
    mapQuery: "Net Complex, Ojoo, Ibadan, Oyo State, Nigeria",
    notes: "Look for us inside the Net Complex market area.",
  },
  {
    id: "iwo-road",
    name: "Iwo Road Branch",
    address: "Opposite Academy Hospital, Iwo Road, Ibadan, Oyo State, Nigeria",
    shortAddress: "Opposite Academy Hospital, Iwo Road",
    city: "Ibadan, Oyo State",
    mapQuery: "Academy Hospital, Iwo Road, Ibadan, Oyo State, Nigeria",
    notes: "We are directly opposite Academy Hospital.",
  },
];

export const SERVICES = [
  { title: "Chemical & raw material sales", text: "Source the materials you need for your production, in the quantities you ask for." },
  { title: "Chemicals for many formulations", text: "Materials for household cleaning, personal-care and industrial product formulations." },
  { title: "Formulation & production training", text: "Practical, hands-on training for people who want to produce real products." },
  { title: "Business guidance", text: "Practical guidance for anyone starting or improving a chemical-based manufacturing business." },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Formulation Training", href: "#training" },
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "FlaskConical",
    title: "A variety of chemical raw materials",
    text: "Browse core raw materials such as caustic soda, soda ash, sulphonic acid, texapon, SLS, STPP and natrosol.",
  },
  {
    icon: "Package",
    title: "Materials for multiple formulations",
    text: "Support for liquid soap, disinfectants, bleach, insecticides, air fresheners, cosmetics and personal-care products.",
  },
  {
    icon: "GraduationCap",
    title: "Practical production training",
    text: "Learn to formulate and produce everyday products with hands-on guidance from our team.",
  },
  {
    icon: "MapPin",
    title: "Convenient locations in Ibadan",
    text: "Find us inside Net Complex, Ojoo and opposite Academy Hospital on Iwo Road.",
  },
  {
    icon: "MessageCircle",
    title: "Direct communication on WhatsApp",
    text: "Ask about sizes, prices and availability and get a direct reply — no complicated ordering process.",
  },
  {
    icon: "Users",
    title: "Support for new and existing manufacturers",
    text: "Whether you are starting out or scaling up, we help you source materials and sharpen your formulation skills.",
  },
];

export const GENERAL_WHATSAPP_MESSAGE =
  "Hello Spikenish Chemicals, I would like to enquire about your chemicals and formulation training.";

export const TRAINING_CTA_MESSAGE =
  "Hello Spikenish Chemicals, I would like to enquire about your formulation and production training.";

export const AREA_OF_INTEREST_OPTIONS = [
  "Chemical & raw material prices",
  "Product availability",
  "Liquid soap production",
  "Disinfectant production (Izal / Dettol type)",
  "Bleach & cleaning products",
  "Insecticide production",
  "Air freshener production",
  "Cosmetics & personal care",
  "Formulation & production training",
  "Other enquiry",
];

export const FAQS = [
  {
    q: "What chemicals do you sell?",
    a: "We supply chemicals and raw materials used to produce liquid soap, disinfectants, insecticides, bleach, air fresheners, cosmetics, personal-care products and other household cleaning products — including caustic soda, soda ash, sulphonic acid, texapon, SLS, STPP and natrosol. Message us on WhatsApp for the current list of available materials.",
  },
  {
    q: "Where can I buy chemicals and raw materials in Ibadan?",
    a: "Visit either of our shops in Ibadan, Oyo State — inside Net Complex, Ojoo, or opposite Academy Hospital, Iwo Road. We sell raw materials for liquid soap, disinfectants, bleach, insecticides, air fresheners and cosmetics. Message us on WhatsApp before you come so we can confirm the material you need is available.",
  },
  {
    q: "Do you sell raw materials for liquid soap production?",
    a: "Yes. We supply raw materials used in liquid soap production — including caustic soda, sulphonic acid, texapon, SLS, STPP and natrosol — as well as materials for other formulations. Message us on WhatsApp with the quantity you need and we will confirm availability and the current price.",
  },
  {
    q: "Where are your shops located?",
    a: "We have two locations in Ibadan, Oyo State: inside Net Complex, Ojoo, and opposite Academy Hospital, Iwo Road. Both are shown on the Locations section of this page with map links.",
  },
  {
    q: "Do you offer production training?",
    a: "Yes. We offer practical formulation and production training covering liquid soap, disinfectants, bleach, air fresheners, insecticides, vaseline and petroleum jelly, shampoo and conditioner, and hand sanitiser. Use any 'Enquire About Training' button on this page to reach us on WhatsApp.",
  },
  {
    q: "How can I get current product prices?",
    a: "Prices can change, so the quickest way to get current pricing is to send us a message on WhatsApp with the product name and the size or quantity you need. We will reply with the available options.",
  },
  {
    q: "How much is caustic soda?",
    a: "We do not publish prices on this website because they change over time. Message us on WhatsApp with the quantity you need — for caustic soda or any other material — and we will send you the current price.",
  },
  {
    q: "Can I buy in small quantities?",
    a: "Message us with the material and the quantity you have in mind. Pack sizes and minimum quantities vary by product, so we will confirm what is currently available on WhatsApp before you buy.",
  },
  {
    q: "How can I enquire about chemical availability?",
    a: "Tap any WhatsApp button on this website, or message 07066457617 / 08065979500 directly, with the material and quantity you need. We will confirm what is currently available.",
  },
  {
    q: "Can I contact you through WhatsApp?",
    a: "Absolutely. WhatsApp is the fastest way to reach us. Choose either of our two numbers — 07066457617 or 08065979500 — from any WhatsApp button on this site.",
  },
  {
    q: "Do you deliver?",
    a: "Delivery arrangements depend on your location and the items involved. Please message us on WhatsApp with your delivery details and we will advise you.",
  },
  {
    q: "Do you supply chemicals outside Ibadan?",
    a: "Our shops are in Ibadan, Oyo State. If you are outside Ibadan, message us on WhatsApp with the materials you need, the quantities and your location, and we will advise you on the options available.",
  },
];

/**
 * Parts of Ibadan listed on the "service areas" section (local SEO content).
 * Keep this a factual list of neighbourhoods and landmarks — no delivery or
 * coverage promises.
 */
export const SERVICE_AREAS = [
  "Ojoo",
  "Iwo Road",
  "Mokola",
  "University of Ibadan",
  "Bodija",
  "Challenge",
  "Dugbe",
  "Ring Road",
  "Akobo",
  "Bashorun",
  "Jericho",
  "Eleyele",
  "Egbeda",
  "Orogun",
  "Idi-Ape",
  "Sango",
  "Oluyole",
  "Molete",
  "Bere",
  "Gate",
];
