# Spikenish Chemicals — Website

A modern, mobile-responsive, sales-focused website for **Spikenish Chemicals**, a chemical supply
business in Ibadan, Nigeria. Built with **React + Vite + JavaScript + Tailwind CSS + Lucide icons**.

- Searchable & filterable product catalogue (shareable filtered links, e.g. `?q=caustic-soda`)
- WhatsApp ordering system (floating button, per-product and per-training enquiry buttons, number selector)
- Formulation & production training section
- Two-location contact section, map, FAQ, contact form (WhatsApp-based — no backend)
- Local-SEO layer: Nigeria/Ibadan-focused metadata, structured data (branches, FAQ, products,
  training), service-area content, shareable product links — Lighthouse SEO score **100/100**

> Nothing is paid for or ordered online. Prices, sizes and availability are always confirmed on WhatsApp,
> so no prices are shown unless you add them yourself.

---

## 1. Run it locally (beginner friendly)

**One-time setup**

1. Install **Node.js** (LTS version) from https://nodejs.org — click *Next* through the installer.
2. Open a terminal (VS Code terminal, or Command Prompt on Windows) **inside this folder**.
3. Install the project packages:

   ```bash
   npm install
   ```

**Every time you want to work on the site**

```bash
npm run dev
```

Then open the link it prints (usually http://localhost:5173).

**Build the production version**

```bash
npm run build
```

This creates a `dist/` folder — that is the final website.

**Preview the production build locally**

```bash
npm run preview
```

---

## 2. Deploy

### Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com → **Add New → Project** → import your repository.
3. Vercel detects Vite automatically. Keep the defaults:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**.

### Netlify

1. Go to https://app.netlify.com → **Add new site → Import an existing project**.
2. Pick your repository and set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Click **Deploy**.

After deploying, update the website URL inside `index.html` (canonical/OG tags) and
`src/data/site.js` (`websiteUrl`), plus `public/robots.txt` and `public/sitemap.xml`.

---

## 3. Editing content (for the business owner)

### Phone numbers & WhatsApp

- `src/data/site.js` → `WHATSAPP_NUMBERS` (international format, e.g. `2347066457617`)
- `src/data/site.js` → `PHONE_NUMBERS` (local format for `tel:` links, e.g. `07066457617`)

### Locations

- `src/data/site.js` → `LOCATIONS` (name, address, map search query).

The map uses **searchable Google Maps links**, not invented coordinates — update `mapQuery`
to whatever customers should search for.

### Products (prices, sizes, stock, new items)

Everything lives in **`src/data/products.js`** with instructions at the top of the file.

```js
{
  id: "my-product",             // unique, url-safe
  name: "My Product",
  category: "general",          // must match an id in CATEGORIES above
  image: "/images/my-product.jpg",
  imageAlt: "Describe the photo",
  description: "Short description shown on the card.",
  sizes: null,                  // or ["25kg", "50kg"]
  price: null,                  // null shows "Contact us for current price"
  stock: null,                  // e.g. "In stock", or null
  featured: false,              // true → homepage featured section
  details: ["Extra point", ...] // shown in the "View Details" popup
}
```

Drop your own photo in `public/images/` using the same file name (recommended: 1200×900 px,
`.jpg`). If a photo is missing, the card automatically shows a tidy fallback tile instead of
a broken image.

### Training programmes

- `src/data/training.js` → add, remove or edit cards.

### FAQ, selling points, services, form options

- `src/data/site.js` → `FAQS`, `WHY_CHOOSE_US`, `SERVICES`, `AREA_OF_INTEREST_OPTIONS`,
  `SERVICE_AREAS` (the neighbourhood chips shown in the "Chemical Suppliers in Ibadan" section).

Write FAQ answers the way customers actually ask on Google (e.g. "Where can I buy caustic
soda in Ibadan?") — every FAQ is automatically added to the page's structured data.

### Colour / fonts

- `src/index.css` → the `@theme` block (deep blue, vibrant green, yellow accents).

---

## 4. SEO (how the site gets found on Google)

The site is built to rank for Nigerian searches such as *"chemical suppliers in Ibadan"*,
*"buy caustic soda Ibadan"* or *"liquid soap raw materials Nigeria"*. What's included:

| Feature | Where it lives |
| --- | --- |
| Keyword-focused title, description, `geo.region`/`geo.placename`, canonical, robots, Open Graph & Twitter cards | `index.html` |
| Structured data for the organisation + website (with a `SearchAction`) | `index.html` |
| Structured data generated from the content: 2 shop branches (`LocalBusiness`), the full FAQ (`FAQPage`), 32 products (`ItemList`) and the training courses (`Course`) — always in sync with what's on the page | `src/components/StructuredData.jsx` |
| Keyword-rich section headings and copy (Ibadan / Oyo State / Nigeria) | component files + `src/data/site.js` |
| Neighbourhood service-area section (honest proximity content, no delivery promises) | `ServiceAreas.jsx` + `SERVICE_AREAS` in `site.js` |
| Shareable deep links: `/?q=…`, `/?category=…`, `/?product=…` (also used by the `SearchAction` markup) | `src/utils/urlState.js` |
| `sitemap.xml` + `robots.txt` | `public/` |
| No-JS fallback with the core business info | `<noscript>` in `index.html` |

**After you deploy**, do these three things:

1. **Replace the placeholder domain** `https://spikenishchemicals.com/` with your real domain in:
   `index.html` (canonical, OG/Twitter URLs, `Organization`/`WebSite` JSON-LD),
   `src/data/site.js` → `websiteUrl`, `public/robots.txt`, `public/sitemap.xml`.
   Also update `<lastmod>` in `sitemap.xml` whenever you change content.
2. **Google Search Console** — add your property, submit the sitemap
   (`https://yourdomain.com/sitemap.xml`) and request indexing.
3. **Check your structured data** with the Rich Results Test (search.google.com/test/rich-results)
   once the real domain is live.

**Growing traffic later:** add real prices and sizes to `products.js`, keep the FAQ growing with
questions customers actually ask, and replace the stock photos with photos of your actual shop
and products — original photos and unique content are what move a local business up the rankings.

---

## 5. Notes

- **No backend, database or payments.** The contact form prepares a WhatsApp message; the site
  never claims an order was placed.
- **Images** were sourced from Wikimedia Commons — see `public/images/CREDITS.md`.
  Replace them with your own product photos for best results.
- Every WhatsApp message is URL-encoded and prefilled; buttons open the customer's chosen number.

## 6. Project structure

```
index.html              SEO metadata, fonts, organisation/website structured data
public/
  images/               photos (+ CREDITS.md)
  favicon.svg, robots.txt, sitemap.xml
src/
  App.jsx               page composition
  index.css             design tokens (Tailwind v4)
  context/              WhatsApp dialog provider
  data/                 site.js · products.js · training.js  ← edit these
  utils/                whatsapp.js · navigation.js · urlState.js
  components/           Navbar, HeroSection, ProductCard, ProductCatalogue,
                        CategoryFilter, TrainingSection, WhyChooseUs,
                        LocationCard, LocationsSection, ServiceAreas,
                        ContactSection, FAQ, Footer, WhatsAppButton,
                        StructuredData, …
```
