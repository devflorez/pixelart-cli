import fs from 'fs';
import path from 'path';
import { pixelateImage } from './pixelate';
import { openFile } from './utils';

function isImage(file: string): boolean {
  return /\.(jpe?g|png)$/i.test(file);
}

export async function processBatch(
  inputDir: string,
  outputDir: string,
  pixelSize: number,
  style: string,
  preview: boolean
) {
  const fileList = fs.readdirSync(inputDir);
  console.log('🧪 Filtered files:', fileList);
  const files = Array.isArray(fileList) ? fileList.filter(isImage) : [];

  console.log(`📂 Found ${files.length} image(s) to process`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `pixelated-${file}`);

    await pixelateImage(inputPath, outputPath, pixelSize, style);

    if (preview) openFile(outputPath);
  }
}
