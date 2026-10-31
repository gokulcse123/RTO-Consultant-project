import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { googleReviewProfile, googleReviews } from '../src/data/googleReviews.js';
import { siteOrigin, sitePages, servicePages, getPage, getPageTitle } from '../src/data/sitePages.js';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const html = await read('../dist/index.html');
const sitemap = await read('../dist/sitemap.xml');
const robots = await read('../dist/robots.txt');
const languageContext = await read('../src/context/LanguageContext.jsx');
const canonical = 'https://www.ntcautoconsultant.in/';
const title = 'NTC Auto Consultant | RTO Services & Insurance in Chennai';

assert.equal((html.match(/<title>/g) || []).length, 1, 'Expected one page title');
assert.ok(html.includes(`<title>${title.replace('&', '&amp;')}</title>`), 'Missing search title');
assert.ok(languageContext.includes('document.title = getPageTitle(getPage(pathname), lang)'), 'Client titles must use the current page metadata');
assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), 'Incorrect canonical URL');
assert.ok(html.includes(`<meta property="og:url" content="${canonical}"`), 'Social URL must match the canonical destination');
assert.ok(!html.includes('https://ntcautoconsultant.in'), 'Published links and metadata must use the www host served by production');
assert.ok(!/name="robots"[^>]*noindex/.test(html), 'Homepage must be indexable');
assert.ok(html.includes('<meta name="description" content="NTC Auto Consultant'), 'Missing description');
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Expected the main service heading in static HTML');
for (const id of ['services-section', 'insurance-section', 'branches-section', 'branch-alandur', 'reviews-track']) {
  assert.ok(html.includes(`id="${id}"`), `Prerendered content is missing ${id}`);
}
assert.ok(html.includes('RC ownership transfer'), 'Service description must exist without JavaScript');
assert.ok(html.includes('75500 04226'), 'Contact must exist without JavaScript');
assert.ok(!html.includes('<div id="root"></div>'), 'App root must be prerendered');
for (const key of ['serviceMockTestTitle', 'serviceMockTestDesc', 'actionApplyNow', 'actionPayNow', 'actionStartTest']) {
  assert.ok(!html.includes(key), `Untranslated label leaked into crawlable content: ${key}`);
}

const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
assert.equal(schemas.length, 1, 'Expected one structured data graph');
const graph = JSON.parse(schemas[0][1])['@graph'];
assert.ok(graph.some(item => item['@type'] === 'WebSite' && item.url === canonical));
const businesses = graph.filter(item => item['@type'] === 'LocalBusiness');
assert.equal(businesses.length, 2, 'Each branch needs its own business entity');
const headOffice = businesses.find(item => item['@id'] === `${canonical}#business`);
assert.equal(headOffice.address.streetAddress, 'Bran Tea, Chromepet Road, Nanmangalam');
assert.equal(headOffice.address.postalCode, '600129');
const subBranch = businesses.find(item => item['@id'] === `${canonical}#alandur-business`);
assert.equal(subBranch.address.addressLocality, 'Alandur, Meenambakkam, St Thomas Mount');
assert.equal(subBranch.address.streetAddress, '1 New Street, Alandur Commercial Building Complex, Ground Floor, near Regional Transport Office');
assert.equal(subBranch.address.postalCode, '600016');
assert.deepEqual(subBranch.sameAs, [googleReviewProfile.url], 'Alandur schema must identify the verified Maps listing');
assert.ok(html.includes(`href="${googleReviewProfile.url}"`), 'Reviews and Maps buttons must link to the actual business listing');
assert.ok(html.includes('W5QC%2BHXH'), 'Maps query must preserve the plus code');
assert.ok(!/Puthu Street|Commercial Complex|61\/2B/.test(html), 'Outdated branch addresses must not be published');
assert.ok(businesses.every(item => !item.aggregateRating), 'Do not add self-serving review rich-result markup');
const visibleText = html.replace(/<[^>]*>/g, '');
assert.ok(!/185\+|4\.9|Verified Customer Google Reviews|0x0:0x0/.test(visibleText), 'Unverified rating totals must not be published');
assert.ok(!html.includes('0x0:0x0'), 'Placeholder review links must not be published');
assert.ok(html.toLowerCase().includes(`datetime="${googleReviewProfile.checkedAt}"`), 'A manually checked rating must show its snapshot date');
assert.ok(html.includes('Review summary'), 'Review paraphrases must be clearly labelled');
for (const review of googleReviews) {
  assert.ok(html.includes(review.name), 'Selected review must keep its Google author attribution');
}

const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(urls, sitePages.map(page => `${siteOrigin}${page.path}`), 'Sitemap must list all real canonical pages without section fragments');
assert.ok(robots.includes(`Sitemap: ${canonical}sitemap.xml`), 'Robots must reference the canonical sitemap');

const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const documents = new Map();
assert.equal(new Set(sitePages.map(page => page.title)).size, sitePages.length, 'Page titles must be distinct');
assert.equal(new Set(sitePages.map(page => page.description)).size, sitePages.length, 'Page descriptions must be distinct');
for (const page of sitePages) {
  const pageHtml = await read(`../dist${page.path}index.html`);
  documents.set(page.path, pageHtml);
  const pageUrl = `${siteOrigin}${page.path}`;
  assert.equal((pageHtml.match(/<title>/g) || []).length, 1);
  assert.ok(pageHtml.includes(`<title>${escape(getPageTitle(page))}</title>`), `Wrong title on ${page.path}`);
  assert.ok(pageHtml.includes(`<meta name="description" content="${escape(page.description)}"`), `Wrong description on ${page.path}`);
  assert.equal((pageHtml.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(pageHtml.includes(`<link rel="canonical" href="${pageUrl}"`), `Wrong canonical on ${page.path}`);
  assert.ok(pageHtml.includes(`<meta property="og:url" content="${pageUrl}"`));
  assert.ok(pageHtml.includes(`<meta property="og:title" content="${escape(page.title)}"`));
  assert.ok(pageHtml.includes(`<meta name="twitter:description" content="${escape(page.description)}"`));
  assert.ok(!/name="robots"[^>]*noindex/.test(pageHtml), `Page must be indexable: ${page.path}`);
  assert.equal((pageHtml.match(/<h1\b/g) || []).length, 1, `Expected one H1 on ${page.path}`);
  assert.ok(pageHtml.includes('data-nosnippet=""'), 'Announcements must be excluded from search snippets');
  assert.ok(!pageHtml.includes('<div id="root"></div>'));
  for (const linkedPage of servicePages) {
    assert.ok(pageHtml.includes(`href="${linkedPage.path}"`), `Missing crawlable link to ${linkedPage.path} from ${page.path}`);
  }
  const pageGraph = JSON.parse(pageHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const pageEntity = pageGraph.find(item => item['@id'] === `${pageUrl}#webpage`);
  assert.equal(pageEntity?.url, pageUrl);
  assert.equal(pageEntity?.name, page.title);
  assert.equal(pageGraph.filter(item => ['WebPage', 'ContactPage', 'CollectionPage'].includes(item['@type'])).length, 1);
  if (page.id !== 'home') {
    assert.ok(pageHtml.includes(escape(page.heading.en)), `Missing service heading on ${page.path}`);
    assert.ok(pageHtml.includes(escape(page.intro.en)), `Missing static content on ${page.path}`);
    const breadcrumb = pageGraph.find(item => item['@type'] === 'BreadcrumbList');
    assert.deepEqual(breadcrumb.itemListElement.map(item => item.item), [canonical, pageUrl]);
    assert.equal(getPage(page.path.slice(0, -1)), page, 'Slash and slashless routes must resolve to the same page');
  }
  if (page.kind === 'service') {
    assert.equal(pageGraph.find(item => item['@type'] === 'Service')?.name, page.heading.en);
  }
}

// Catch navigation and cross-page fragment links that point to nonexistent content.
for (const [path, pageHtml] of documents) {
  for (const [, href] of pageHtml.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
    const target = new URL(href.replaceAll('&amp;', '&'), `${siteOrigin}${path}`);
    if (target.origin !== siteOrigin) continue;
    assert.ok(documents.has(target.pathname), `Broken internal page link: ${path} -> ${href}`);
    if (target.hash) assert.ok(documents.get(target.pathname).includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `Broken section link: ${path} -> ${href}`);
  }
}
assert.equal(getPage('/this-page-does-not-exist/'), undefined);
const notFound = await read('../dist/404.html');
assert.ok(notFound.includes('noindex, follow') && notFound.includes('Page not found'));
assert.ok(!notFound.includes('rel="canonical"'), '404 must not canonicalize to the homepage');
console.log(`SEO checks passed: ${sitePages.length} static pages, unique metadata, crawlable links, breadcrumbs, branch schema, sitemap and 404.`);
