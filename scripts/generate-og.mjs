// One-shot: render public/images/og-default.svg → og-default.png (1200x630).
// Re-run with `node scripts/generate-og.mjs` after editing the SVG.
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = resolve(__dirname, '../public/images');

const svg = readFileSync(resolve(imagesDir, 'og-default.svg'), 'utf-8');
const resvg = new Resvg(svg, {
  font: { loadSystemFonts: true },
  fitTo: { mode: 'width', value: 1200 },
});
const png = resvg.render().asPng();
writeFileSync(resolve(imagesDir, 'og-default.png'), png);
console.log('Wrote public/images/og-default.png');
