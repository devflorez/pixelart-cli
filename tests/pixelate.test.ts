import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { pixelateImage } from '../src/pixelate';

const input = path.resolve('tests/fixtures/example.jpg');
const output = path.resolve('tests/output/pixelated.png');

describe('pixelateImage()', () => {
  it('generates a PNG output file from the input image', async () => {
    if (fs.existsSync(output)) fs.unlinkSync(output);

    await pixelateImage(input, output, 10, 'gameboy');

    const exists = fs.existsSync(output);
    const stats = fs.statSync(output);

    expect(exists).toBe(true);
    expect(stats.size).toBeGreaterThan(0);
  });
});
