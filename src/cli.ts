#!/usr/bin/env node

import { Command } from 'commander';
import { pixelateImage } from './pixelate';
import { openFile } from './utils';
import { processBatch } from './batch';
import fs from 'fs';
import { palettes } from './palettes';

const SUPPORTED_STYLES = Object.keys(palettes);

const program = new Command();

program
  .name('pixelate')
  .description('Convert an image into pixel art')
  .requiredOption('-i, --input <path>', 'Path to the input image')
  .requiredOption('-o, --output <path>', 'Path to save the output image')
  .option('-s, --size <number>', 'Pixel size (default: 10)', '10')
  .option(
    '--style <style>',
    `Color style: ${SUPPORTED_STYLES.join(' | ')}`,
    'normal'
  )
  .option('--preview', 'Open the output file(s) after processing', false)
  .showHelpAfterError()
  .addHelpText(
    'after',
    `\nExamples:\n  $ pixelate -i photo.jpg -o out.png -s 12 --style nes\n  $ pixelate -i input.jpg -o out.png`
  );

program.parse(process.argv);
const options = program.opts();

async function handleSingleFile(
  input: string,
  output: string,
  pixelSize: number,
  style: string,
  preview: boolean
) {
  await pixelateImage(input, output, pixelSize, style);
  if (preview) openFile(output);
}

async function handleFolder(
  inputDir: string,
  outputDir: string,
  pixelSize: number,
  style: string,
  preview: boolean
) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  await processBatch(inputDir, outputDir, pixelSize, style, preview);
}

const run = async () => {
  const pixelSize = parseInt(options.size);

  if (isNaN(pixelSize) || pixelSize < 1) {
    console.error('❌ Pixel size must be a number greater than 0');
    process.exit(1);
  }

  if (!SUPPORTED_STYLES.includes(options.style)) {
    console.error(`❌ Invalid style "${options.style}". Valid styles are: ${SUPPORTED_STYLES.join(', ')}`);
    process.exit(1);
  }

  if (!fs.existsSync(options.input)) {
    console.error(`❌ Input file not found: ${options.input}`);
    process.exit(1);
  }

  try {
    const isFolder = fs.statSync(options.input).isDirectory();

    if (isFolder) {
      await handleFolder(options.input, options.output, pixelSize, options.style, options.preview);
    } else {
      await handleSingleFile(options.input, options.output, pixelSize, options.style, options.preview);
    }

    console.log('✅ Done!');
  } catch (err) {
    console.error('❌ An error occurred while processing:');
    console.error(err);
    process.exit(1);
  }
};

run();
