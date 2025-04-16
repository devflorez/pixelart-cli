import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import { palettes } from './palettes';
import { getClosestColor } from './color';

export async function pixelateImage(
  inputPath: string,
  outputPath: string,
  pixelSize: number,
  style: string
) {
  const image = await loadImage(inputPath);
  const width = image.width;
  const height = image.height;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height).data;
  const palette = palettes[style] ?? null;

  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      const i = (y * width + x) * 4;
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];

      const fill = palette ? getClosestColor(r, g, b, palette) : `rgb(${r},${g},${b})`;
      ctx.fillStyle = fill;
      ctx.fillRect(x, y, pixelSize, pixelSize);
    }
  }

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`✅ Imagen pixelada guardada en: ${outputPath}`);
}
