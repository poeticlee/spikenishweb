/**
 * WhatsApp message test suite — run with: node scripts/test-whatsapp.mjs
 * Validates every message builder + wa.me link encoding on the site.
 */
import { waLink, productEnquiryMessage, trainingEnquiryMessage, generalEnquiryMessage } from "../src/utils/whatsapp.js";
import { PRODUCTS } from "../src/data/products.js";
import { TRAINING_PROGRAMS } from "../src/data/training.js";
import { WHATSAPP_NUMBERS, PHONE_NUMBERS, GENERAL_WHATSAPP_MESSAGE } from "../src/data/site.js";

let pass = 0;
let fail = 0;
const failures = [];

function check(label, condition, detail) {
  if (condition) {
    pass += 1;
  } else {
    fail += 1;
    failures.push({ label, detail });
  }
}

// ---- 1. Business numbers -------------------------------------------------
check("Two WhatsApp numbers", WHATSAPP_NUMBERS.length === 2, WHATSAPP_NUMBERS);
check(
  "Numbers are valid Nigerian intl format (234 + 10 digits)",
  WHATSAPP_NUMBERS.every((n) => /^234\d{10}$/.test(n.intl)),
  WHATSAPP_NUMBERS
);
check(
  "WhatsApp numbers match PHONE_NUMBERS (0-prefix swapped for 234)",
  WHATSAPP_NUMBERS.every((n, i) => n.intl === PHONE_NUMBERS[i].replace(/^0/, "234")),
  { WHATSAPP_NUMBERS, PHONE_NUMBERS }
);

// ---- 2. waLink encoding --------------------------------------------------
const trickyMessages = [
  "Simple message with spaces.",
  "Special chars: & % ? # = + @ !",
  "Naira price: ₦5,000 and 'quotes' and \"double quotes\"",
  "Multi-line message.\nSecond line with tab\tand & symbol.",
  "Yoruba & Pidgin: ẹ̀ ṣeun — em dash & ellipsis …",
  "Product with &: Foam Boosters & Thickeners",
  "<html> & <script> injection test & 100%",
];
for (const msg of trickyMessages) {
  const url = waLink(WHATSAPP_NUMBERS[0].intl, msg);
  const [base, query] = url.split("?text=");
  check(`waLink base for "${msg.slice(0, 30)}..."`, base === `https://wa.me/${WHATSAPP_NUMBERS[0].intl}`, base);
  check(`waLink has no raw spaces for "${msg.slice(0, 30)}..."`, !/\s/.test(query), query);
  check(`waLink has no raw & in query for "${msg.slice(0, 30)}..."`, !query.includes("&"), query);
  check(
    `waLink decodes back exactly for "${msg.slice(0, 30)}..."`,
    decodeURIComponent(query) === msg,
    { sent: msg, got: decodeURIComponent(query) }
  );
}

// ---- 3. Product enquiries (all 32) ---------------------------------------
check("32 products in catalogue", PRODUCTS.length === 32, PRODUCTS.length);
for (const product of PRODUCTS) {
  const msg = productEnquiryMessage(product.name);
  const url = waLink(WHATSAPP_NUMBERS[0].intl, msg);
  const encoded = url.split("?text=")[1];
  check(`Product message mentions "${product.name}"`, msg.includes(product.name), msg);
  check(`Product message greets business`, msg.startsWith("Hello Spikenish Chemicals"), msg);
  check(`Product message asks for prices`, /current prices/i.test(msg), msg);
  check(`Product URL encodes "${product.name}"`, decodeURIComponent(encoded) === msg, encoded);
}

// ---- 4. Training enquiries (all 9) ---------------------------------------
check("9 training programmes", TRAINING_PROGRAMS.length === 9, TRAINING_PROGRAMS.length);
for (const prog of TRAINING_PROGRAMS) {
  const msg = trainingEnquiryMessage(prog.name);
  const url = waLink(WHATSAPP_NUMBERS[1].intl, msg);
  const encoded = url.split("?text=")[1];
  check(`Training message mentions "${prog.name}"`, msg.includes(prog.name), msg);
  check(`Training URL encodes "${prog.name}"`, decodeURIComponent(encoded) === msg, encoded);
}

// ---- 5. General enquiry ---------------------------------------------------
const generalMsg = generalEnquiryMessage();
check("General message is the site constant", generalMsg === GENERAL_WHATSAPP_MESSAGE, generalMsg);
check("General message greets business", generalMsg.startsWith("Hello Spikenish Chemicals"), generalMsg);

// Both numbers produce valid links with identical message
const links = WHATSAPP_NUMBERS.map((n) => waLink(n.intl, generalMsg));
check("Both lines carry the same encoded message", links[0].split("?text=")[1] === links[1].split("?text=")[1], links);
check("Line 1 link correct", links[0].startsWith(`https://wa.me/${WHATSAPP_NUMBERS[0].intl}?text=`), links[0]);
check("Line 2 link correct", links[1].startsWith(`https://wa.me/${WHATSAPP_NUMBERS[1].intl}?text=`), links[1]);

// ---- Report ---------------------------------------------------------------
console.log(`\n${pass} passed, ${fail} failed\n`);
if (failures.length) {
  for (const f of failures) console.log(`FAIL: ${f.label}\n  detail:`, f.detail);
  process.exit(1);
}
