import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { render } from '../dist-ssr/entry-server.js';
import { siteOrigin, sitePages, getPageTitle } from '../src/data/sitePages.js';

const output = new URL('../dist/index.html', import.meta.url);
const template = await readFile(output, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error('Cannot prerender: the empty app root was not found in dist/index.html.');
}

const schemaPattern = /<script type="application\/ld\+json">[\s\S]*?<\/script>/;
const baseSchema = JSON.parse(template.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function pageHtml(page, pathname) {
  const title = getPageTitle(page);
  const description = page?.description || 'This page could not be found. Visit NTC Auto Consultant for RTO and vehicle insurance assistance in Chennai.';
  const canonical = `${siteOrigin}${pathname}`;
  let html = template.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escape(title)}</title>`);
  for (const [attribute, name, value] of [
    ['name', 'description', description],
    ['property', 'og:title', title],
    ['property', 'og:description', description],
    ['property', 'og:url', canonical],
    ['name', 'twitter:title', title],
    ['name', 'twitter:description', description],
  ]) {
    html = html.replace(new RegExp(`<meta ${attribute}="${name}" content="[^"]*"\\s*/>`), () => `<meta ${attribute}="${name}" content="${escape(value)}" />`);
  }
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, () => page ? `<link rel="canonical" href="${canonical}" />` : '');
  if (!page) {
    html = html.replace(/<meta name="robots" content="[^"]*"\s*\/>/, '<meta name="robots" content="noindex, follow" />');
    html = html.replace(schemaPattern, '');
  } else {
    const schema = structuredClone(baseSchema);
    const webPage = schema['@graph'].find(item => item['@type'] === 'WebPage');
    Object.assign(webPage, { '@id': `${canonical}#webpage`, url: canonical, name: title, description });
    if (page.id !== 'home') {
      webPage['@type'] = page.kind === 'contact' ? 'ContactPage' : page.kind === 'branches' ? 'CollectionPage' : 'WebPage';
      webPage.breadcrumb = { '@id': `${canonical}#breadcrumb` };
      schema['@graph'].push({
        '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteOrigin}/` },
          { '@type': 'ListItem', position: 2, name: page.label.en, item: canonical },
        ],
      });
      if (page.kind === 'service') {
        webPage.mainEntity = { '@id': `${canonical}#service` };
        schema['@graph'].push({
          '@type': 'Service', '@id': `${canonical}#service`, url: canonical,
          name: page.heading.en, description: page.description,
          provider: { '@id': `${siteOrigin}/#business` }, areaServed: 'Chennai',
        });
      }
    }
    html = html.replace(schemaPattern, () => `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`);
  }
  // A callback preserves literal dollar sequences in page text.
  return html.replace(placeholder, () => `<div id="root">${render(pathname)}</div>`);
}

for (const page of sitePages) {
  const directory = new URL(`../dist${page.path}`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), pageHtml(page, page.path));
}
await writeFile(new URL('../dist/404.html', import.meta.url), pageHtml(null, '/404/'));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitePages.map(page => `  <url><loc>${siteOrigin}${page.path}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(new URL('../dist/sitemap.xml', import.meta.url), sitemap);
console.log(`Prerendered ${sitePages.length} pages, a 404 page and their canonical sitemap.`);
