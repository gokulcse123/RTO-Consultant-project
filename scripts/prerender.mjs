import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../dist-ssr/entry-server.js';

const output = new URL('../dist/index.html', import.meta.url);
const template = await readFile(output, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error('Cannot prerender: the empty app root was not found in dist/index.html.');
}

// Use a replacement callback so dollar sequences in page text remain literal.
await writeFile(output, template.replace(placeholder, () => `<div id="root">${render()}</div>`));
console.log('Prerendered homepage content into dist/index.html.');
