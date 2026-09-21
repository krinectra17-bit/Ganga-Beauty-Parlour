const fs = require('fs').promises;
const path = require('path');
let sharp;
const log = (message) => process.stdout.write(`${message}\n`);
const warn = (message) => process.stderr.write(`${message}\n`);
const error = (message) => process.stderr.write(`${message}\n`);

try {
  sharp = require('sharp');
} catch (e) {
  warn('Optional dependency `sharp` is not installed - skipping image optimization.');
}

const INPUT_DIR = path.resolve(__dirname, '..', 'public', 'images');
const HERO_SOURCE = path.resolve(
  __dirname,
  '..',
  'source-assets',
  'hero',
  'hero-bridal-main.webp'
);
const HERO_WIDTHS = [640, 960, 1280, 1920, 2560];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const images = [];
  for (const entry of entries) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      images.push(...(await walk(res)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      images.push(res);
    }
  }
  return images;
}

async function optimizeImage(inputPath) {
  const relativePath = path.relative(INPUT_DIR, inputPath);
  if (relativePath.startsWith(`logos${path.sep}`)) return;

  if (!sharp) {
    log(`Skipping optimization (sharp not available): ${relativePath}`);
    return;
  }
  const outPath = inputPath.replace(/\.[^.]+$/, '.webp');
  try {
    const [inStat, outStat] = await Promise.all([
      fs.stat(inputPath),
      fs.stat(outPath).catch(() => null),
    ]);
    if (outStat && outStat.mtimeMs >= inStat.mtimeMs) {
      log(`Skipping up-to-date: ${path.relative(INPUT_DIR, outPath)}`);
      return;
    }
  } catch (e) {
    // continue
  }

  try {
    await sharp(inputPath).webp({ quality: 82 }).toFile(outPath);
    log(`Created: ${path.relative(INPUT_DIR, outPath)}`);
  } catch (err) {
    error(`Failed to convert ${relativePath}: ${err.message || err}`);
  }
}

async function generateHeroVariants() {
  if (!sharp) return;
  const sourceStat = await fs.stat(HERO_SOURCE).catch(() => null);
  if (!sourceStat) return;

  for (const width of HERO_WIDTHS) {
    const outPath = path.join(
      INPUT_DIR,
      'hero',
      `hero-bridal-main-${width}.webp`
    );
    const outStat = await fs.stat(outPath).catch(() => null);
    if (outStat && outStat.mtimeMs >= sourceStat.mtimeMs) {
      log(`Skipping up-to-date: ${path.relative(INPUT_DIR, outPath)}`);
      continue;
    }

    await sharp(HERO_SOURCE)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: width >= 1920 ? 82 : 78, effort: 6 })
      .toFile(outPath);
    log(`Created: ${path.relative(INPUT_DIR, outPath)}`);
  }
}

(async function optimize() {
  try {
    const exists = await fs.stat(INPUT_DIR).catch(() => null);
    if (!exists) {
      log(`No images directory found at ${INPUT_DIR}`);
      return;
    }

    const files = await walk(INPUT_DIR);
    if (!files.length) {
      log('No JPG/PNG images found to optimize.');
      return;
    }

    for (const file of files) await optimizeImage(file);
    await generateHeroVariants();
  } catch (err) {
    error(`Image optimization failed: ${err.message || err}`);
    process.exitCode = 1;
  }
})();
