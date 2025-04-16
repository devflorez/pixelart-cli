import { describe, it, expect } from 'vitest';
import { getClosestColor } from '../src/color';

describe('getClosestColor()', () => {
  const palette = ['#000000', '#FFFFFF', '#FF0000'];

  it('returns #000000 if the input color is black', () => {
    expect(getClosestColor(0, 0, 0, palette)).toBe('#000000');
  });

  it('returns #FFFFFF if the input color is white', () => {
    expect(getClosestColor(255, 255, 255, palette)).toBe('#FFFFFF');
  });

  it('returns #FF0000 if the input color is pure red', () => {
    expect(getClosestColor(255, 0, 0, palette)).toBe('#FF0000');
  });

  it('returns the closest matching color if no exact match is found', () => {
    expect(getClosestColor(240, 10, 10, palette)).toBe('#FF0000');
  });
});
