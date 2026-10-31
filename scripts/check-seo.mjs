import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { googleReviewProfile, googleReviews } from '../src/data/googleReviews.js';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const html = await read('../dist/index.html');
const sitemap = await read('../dist/sitemap.xml');
const robots = await read('../dist/robots.txt');
const languageContext = await read('../src/context/LanguageContext.jsx');
const canonical = 'https://www.ntcautoconsultant.in/';
const title = 'NTC Auto Consultant | RTO Services & Insurance in Chennai';

assert.equal((html.match(/<title>/g) || []).length, 1, 'Expected one page title');
assert.ok(html.includes(`<title>${title.replace('&', '&amp;')}</title>`), 'Missing search title');
assert.ok(languageContext.includes(`document.title = "${title}"`), 'Client title must match static title');
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
assert.deepEqual(urls, [canonical], 'Sitemap should list actual pages, not section fragments');
assert.ok(robots.includes(`Sitemap: ${canonical}sitemap.xml`), 'Robots must reference the canonical sitemap');
console.log('SEO checks passed: static content, metadata, branch schema, sitemap and robots.');
