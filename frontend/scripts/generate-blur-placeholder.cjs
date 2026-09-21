/**
 * Generate a blurred LQIP (Low Quality Image Placeholder) from the hero source image
 * Creates hero-blur.webp for progressive image loading
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateBlurPlaceholder() {
  const inputPath = path.join(__dirname, '../source-assets/hero/hero-bridal-main.webp');
  const outputPath = path.join(__dirname, '../public/images/hero/hero-blur.webp');

  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠️  Source image not found: ${inputPath}`);
    console.warn('Skipping blur placeholder generation.');
    return;
  }

  try {
    // Generate a tiny, heavily blurred version for LQIP
    // Resize to ~60px width, apply strong blur, high compression
    await sharp(inputPath)
      .resize(60, null, {
        fit: 'cover',
        position: 'top',
      })
      .blur(24)
      .webp({ quality: 25 })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    const sizeKb = (stats.size / 1024).toFixed(1);
    console.log(`✓ Generated blur placeholder: ${outputPath} (${sizeKb}KB)`);
  } catch (error) {
    console.error('Error generating blur placeholder:', error.message);
    process.exit(1);
  }
}

generateBlurPlaceholder();
