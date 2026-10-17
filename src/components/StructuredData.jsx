import { useEffect } from "react";
import { BUSINESS, FAQS, LOCATIONS, WHATSAPP_NUMBERS } from "../data/site";
import { PRODUCTS } from "../data/products";
import { TRAINING_PROGRAMS } from "../data/training";

/**
 * Injects structured data (schema.org JSON-LD) built from the content files,
 * so search engines always see markup that matches what's on the page.
 *
 * - LocalBusiness for each shop
 * - FAQPage matching the visible FAQ
 * - ItemList of products + Courses for training
 *
 * Google reads JSON-LD from the rendered DOM, so injecting it here keeps a
 * single source of truth in src/data.
 */
export default function StructuredData() {
  useEffect(() => {
    const base = BUSINESS.websiteUrl.replace(/\/$/, "");

    const branches = LOCATIONS.map((loc, i) => ({
      "@type": "LocalBusiness",
      "@id": `${base}/#branch-${loc.id}`,
      name: `${BUSINESS.name} — ${loc.name}`,
      description: `Chemical and raw material shop: ${loc.address}`,
      url: base,
      telephone: `+${(i === 0 ? WHATSAPP_NUMBERS[0] : WHATSAPP_NUMBERS[1]).intl}`,
      parentOrganization: { "@id": `${base}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.shortAddress,
        addressLocality: "Ibadan",
        addressRegion: "Oyo State",
        addressCountry: "NG",
      },
      areaServed: { "@type": "City", name: "Ibadan" },
      currenciesAccepted: "NGN",
      image: `${base}/images/hero-main.jpg`,
    }));

    const faq = {
      "@type": "FAQPage",
      "@id": `${base}/#faq`,
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };

    const itemList = {
      "@type": "ItemList",
      "@id": `${base}/#products`,
      name: "Chemical raw materials available from Spikenish Chemicals",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.description,
          image: `${base}${p.image}`,
          url: `${base}/?product=${p.id}`,
          category: p.category,
          brand: { "@type": "Brand", name: BUSINESS.name },
          // No offers/price markup: prices are only confirmed on WhatsApp,
          // and we never publish unconfirmed prices or stock status.
          manufacturer: { "@id": `${base}/#organization` },
        },
      })),
    };

    const training = {
      "@type": "ItemList",
      "@id": `${base}/#training`,
      name: "Formulation and production training programmes",
      numberOfItems: TRAINING_PROGRAMS.length,
      itemListElement: TRAINING_PROGRAMS.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Course",
          name: t.name,
          description: t.intro,
          image: `${base}${t.image}`,
          provider: { "@id": `${base}/#organization` },
          inLanguage: "en-NG",
          url: `${base}/#training`,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-runtime", "structured-data");
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      // Flat list of nodes (branch entries spread in) — plain, valid JSON-LD.
      "@graph": [...branches, faq, itemList, training],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
