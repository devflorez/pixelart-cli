import { exec } from 'child_process';

export function openFile(filePath: string) {
  const command = process.platform === 'win32'
    ? `start "" "${filePath}"`
    : process.platform === 'darwin'
    ? `open "${filePath}"`
    : `xdg-open "${filePath}"`;

  exec(command);
}

export function hexToRgb(hex: string): [number, number, number] {
    const bigint = parseInt(hex.replace('#', ''), 16);
    return [
      (bigint >> 16) & 255,
      (bigint >> 8) & 255,
      bigint & 255,
    ];
  }

  export function colorDistance(
    [r1, g1, b1]: [number, number, number],
    [r2, g2, b2]: [number, number, number],
  ): number {
    return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
  }
