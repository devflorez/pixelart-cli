import { describe, it, expect, vi, beforeEach } from 'vitest';
import { hexToRgb, colorDistance,  openFile} from '../src/utils';
import { exec } from 'child_process';

vi.mock('child_process', () => ({
  exec: vi.fn(),
}));

describe('openFile()', () => {
  const filePath = 'output/image.png';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('uses "start" on Windows', () => {
    Object.defineProperty(process, 'platform', {
      value: 'win32',
    });

    openFile(filePath);
    expect(exec).toHaveBeenCalledWith(`start "" "${filePath}"`);
  });

  it('uses "open" on macOS', () => {
    Object.defineProperty(process, 'platform', {
      value: 'darwin',
    });

    openFile(filePath);
    expect(exec).toHaveBeenCalledWith(`open "${filePath}"`);
  });

  it('uses "xdg-open" on Linux/others', () => {
    Object.defineProperty(process, 'platform', {
      value: 'linux',
    });

    openFile(filePath);
    expect(exec).toHaveBeenCalledWith(`xdg-open "${filePath}"`);
  });
});

describe('hexToRgb()', () => {
  it('converts #FFFFFF to [255, 255, 255]', () => {
    expect(hexToRgb('#FFFFFF')).toEqual([255, 255, 255]);
  });

  it('converts #000000 to [0, 0, 0]', () => {
    expect(hexToRgb('#000000')).toEqual([0, 0, 0]);
  });

  it('converts #FF0000 to [255, 0, 0]', () => {
    expect(hexToRgb('#FF0000')).toEqual([255, 0, 0]);
  });
});

describe('colorDistance()', () => {
  it('returns 0 if the colors are equal', () => {
    const d = colorDistance([100, 150, 200], [100, 150, 200]);
    expect(d).toBe(0);
  });

  it('correctly calculates the distance between black and white', () => {
    const d = colorDistance([0, 0, 0], [255, 255, 255]);
    expect(Math.round(d)).toBe(442);
  });
});
