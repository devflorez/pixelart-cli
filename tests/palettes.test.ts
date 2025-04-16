import { describe, it, expect } from 'vitest';
import { palettes } from '../src/palettes';

describe('palettes', () => {
  it('has a NES palette with 16 colors', () => {
    expect(palettes.nes).toBeDefined();
    expect(palettes.nes?.length).toBe(16);
  });

  it('has a GameBoy palette with 4 colors', () => {
    expect(palettes.gameboy).toBeDefined();
    expect(palettes.gameboy?.length).toBe(4);
  });

  it('has a normal style defined as null', () => {
    expect(palettes.normal).toBeNull();
  });
});
