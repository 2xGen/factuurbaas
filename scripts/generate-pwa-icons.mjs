import sharp from 'sharp';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'icons');

function appIconSvg(size, { maskable = false } = {}) {
  // Safe zone for maskable: keep crown in center ~70%
  const pad = maskable ? size * 0.18 : size * 0.14;
  const inner = size - pad * 2;
  const crownScale = inner / 24;
  const tx = pad + (inner - 24 * crownScale) / 2;
  const ty = pad + (inner - 24 * crownScale) / 2 + size * 0.02;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${maskable ? size * 0.22 : size * 0.18}" fill="#0A2A4D"/>
  <g transform="translate(${tx} ${ty}) scale(${crownScale})">
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" fill="#FF7F50"/>
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" stroke="#E86A3D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 19H21" stroke="#FF7F50" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="12" cy="14" r="1" fill="#0A2A4D"/>
    <circle cx="8" cy="13" r="1" fill="#0A2A4D"/>
    <circle cx="16" cy="13" r="1" fill="#0A2A4D"/>
  </g>
</svg>`;
}

async function writePng(name, size, opts) {
  const svg = appIconSvg(size, opts);
  await sharp(Buffer.from(svg)).png().toFile(path.join(outDir, name));
}

await mkdir(outDir, { recursive: true });
await writePng('icon-192.png', 192);
await writePng('icon-512.png', 512);
await writePng('icon-512-maskable.png', 512, { maskable: true });
await writePng('apple-touch-icon.png', 180);
await writeFile(path.join(outDir, 'icon.svg'), appIconSvg(512));
console.log('PWA icons written to public/icons');
