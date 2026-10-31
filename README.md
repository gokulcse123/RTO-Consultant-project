# NTC Auto Consultant

React + Vite website for NTC Auto Consultant in Chennai. Canonical production URL: https://www.ntcautoconsultant.in/.

## Development and publishing

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The development server uses port 3000. The production build creates browser assets, renders all six English pages to static HTML, generates the sitemap and a custom 404 page, and checks the resulting SEO metadata, content and internal links. React hydrates this HTML to enable language switching, modals, filters and review scrolling. Publish **dist** only; **dist-ssr** is a temporary build output, not a server to deploy. No additional hosting runtime is required.

Vercel is configured to use this build and output directory, with trailing slashes for canonical page URLs. Each route has its own `dist/<route>/index.html`; there is no catch-all homepage rewrite. Unknown routes should return 404. `npm run check:seo` checks an existing build. Use `npm run preview` to verify the generated pages; development mode does not prerender each route's metadata.

## Public pages

| URL | Content |
| --- | --- |
| `/` | Homepage, service overview, reviews and existing interactive tools |
| `/llr-driving-licence/` | LLR applications, driving test appointments and DL renewal assistance |
| `/rc-transfer/` | Ownership transfer consultation and document preparation |
| `/motor-insurance/` | Car, bike and commercial vehicle quote and renewal enquiries |
| `/branches/` | Nanmangalam and Alandur addresses, contact information and Maps links |
| `/contact/` | Contact numbers, consultation options and enquiry preparation |

Page paths, unique titles/descriptions and bilingual content are defined in `src/data/sitePages.js`. Header navigation, footer links, related-page links and the generated sitemap share these paths. `scripts/prerender.mjs` updates the HTML metadata and adds a matching WebPage, breadcrumb and (for service pages) Service entity. The base business/WebSite schema remains in `index.html`. No manual sitemap file needs updating.

## Search targets

These are suggested queries based on the services and locations shown on the site, not measured search volumes or confirmed rankings.

| Priority | Queries | Content |
| --- | --- | --- |
| Brand | NTC Auto Consultant; NTC Auto Consultant Chennai; NTC Auto Consultant Nanmangalam; NTC Auto Consultant Alandur | Consistent business name, title, contact and branch information |
| Local consultancy | RTO consultant Chennai; RTO consultant Nanmangalam; RTO consultant Alandur; RTO consultant Chrompet | Main heading, introduction, services and branches |
| Service intent | RC name transfer Chennai; driving licence renewal Chennai; LLR application assistance Chennai; vehicle NOC Chennai | Service descriptions and consultation flow |
| Insurance | car insurance Chennai; bike insurance Nanmangalam; vehicle insurance Alandur | Insurance section |
| Tamil | சென்னை RTO ஆலோசனை; RC பெயர் மாற்றம் சென்னை; வாகன இன்சூரன்ஸ் ஆலந்தூர் | Tamil interface copy |

English is the default crawlable version. The Tamil switch uses the same URL, remembers the choice across pages in the current browser tab, and updates the page title. It is not a separately indexed Tamil landing page. Separate language pages need real URLs and matching content before adding hreflang tags.

## Branch location details

The owner supplied the head-office location as **Bran Tea, Chromepet Road, Nanmangalam, Tamil Nadu 600129**, with plus code **W5QC+HXH**. The head-office Maps button searches that location; it is not an NTC Google Business Profile link. The business name remains NTC Auto Consultant.

The owner supplied the Alandur sub-branch address in a Google Maps screenshot: **1 New Street, Alandur Commercial Building Complex, Ground Floor, Alandur, near Regional Transport Office, Meenambakkam, St Thomas Mount, Tamil Nadu 600016**. The exact NTC Google Maps listing was checked on 31 October 2026; the Alandur Maps button, review links and branch schema now identify that listing through the URL in `src/data/googleReviews.js`. The address is shared by the branch card, hero, footer and translations, and mirrored in the structured data in `index.html`.

Visible branch details and consultation options use `ntcBranches` in `src/data/mockData.js`; keep the structured data in `index.html` aligned when updating them.

## After deployment

1. Check the HTTPS www domain serves the latest build. Production already redirects the apex domain and HTTP to `https://www.ntcautoconsultant.in/`; canonical, sitemap, structured data and internal site links must agree with that destination.
2. Open [Google Search Console](https://search.google.com/search-console/) with the owner's Google account and inspect the existing `ntcautoconsultant.in` domain property. A Google verification TXT record was already present in public DNS on 31 October 2026; do not replace it. Its presence does not establish which Google account owns the property or that verification is currently valid. Login is still needed to confirm access and status.
3. Submit `https://www.ntcautoconsultant.in/sitemap.xml`. Inspect the homepage and new service URLs, run the live test and request indexing as needed. Check indexing and performance reports afterwards; submission does not guarantee indexing or a ranking position.
4. Validate the deployed homepage with [Google's Rich Results Test](https://search.google.com/test/rich-results). Local checks validate JSON and required project invariants, not Google's eligibility decision.
5. Verify the existing Google Business Profiles for eligible physical branches. Match the real business name, phone, address, opening hours and website; do not create duplicate listings or add search keywords to the business name. The Alandur listing still offers "Add website". Its phone is 098409 14226, while the owner-supplied website number is 75500 04226; confirmation of the intended public number and hours is pending. Keep the existing website contact until confirmed.
6. `src/data/googleReviews.js` holds a manually checked Alandur-only snapshot: 4.8/5 from 75 Google reviews, checked 31 October 2026. Six short, attributed paraphrases replace the six unverified sample testimonials. The additional reviews were checked on the public Google contributor profiles linked in their `sourceUrl` fields. The carousel moves forward and stops at the last card, with manual scrolling and pause-on-interaction preserved. They are labelled summaries, not quotations; no invented reviewer locations or relative dates are shown. The snapshot is not a live API feed: recheck Google before updating the values and date. Self-serving review ratings remain excluded from business structured data. Other customer totals, service promises and business hours still need owner confirmation; application/payment modals remain demos.
7. Use Search Console query data to improve the service pages. Do not create near-identical location pages or put fragment URLs in the sitemap. Google chooses sitelinks automatically; individual pages and clear internal links do not guarantee a particular search layout.

## SEO implementation

- Unique title, description, canonical and social metadata for every generated page.
- Main heading and visible English/Tamil copy describe services and actual branch locations.
- Separate LocalBusiness entities for the two branches, plus WebSite, page-specific WebPage and breadcrumb metadata; service pages also identify the service.
- Static rendering for all six pages via `src/entry-server.jsx` and `scripts/prerender.mjs`.
- Canonical-only sitemap generated from the public page definitions, and publicly crawlable robots configuration.
- The visible announcement ticker uses `data-nosnippet` so Google can exclude its repeated text from search descriptions after recrawling. Google still chooses the displayed snippet.
- No meta-keyword stuffing, invented review schema, or claims of guaranteed ranking.

## Search observation — 31 October 2026

Google Search displayed the HTTPS www homepage for the query `NTC Driving and RTO Consultant Nanmangalam Chennai`. This is evidence that the homepage is appearing in search; it is not a site-wide indexing audit or a guaranteed position for other queries or locations. Search Console URL Inspection, selected canonical, sitemap submission and performance data remain pending owner login. Public checks returned 200 for the homepage, robots and sitemap, and 404 for a nonexistent path.

References: [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [Local Business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business), [Local ranking guidance](https://support.google.com/business/answer/7091), [Review snippet guidelines](https://developers.google.com/search/docs/appearance/structured-data/review-snippet).

Sitelink and snippet guidance: [Sitelinks](https://developers.google.com/search/docs/appearance/sitelinks), [Snippet controls](https://developers.google.com/search/docs/appearance/snippet). The Business Profile website field and Search Console submission still require the existing owner's Google account. A new Gmail account was not created.
