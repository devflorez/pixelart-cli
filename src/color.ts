import { hexToRgb, colorDistance } from './utils';

export function getClosestColor(
  r: number,
  g: number,
  b: number,
  palette: string[]
): string {
  let closest = palette[0];
  let minDist = Infinity;

  for (const hex of palette) {
    const [pr, pg, pb] = hexToRgb(hex);
    const dist = colorDistance([r, g, b], [pr, pg, pb]);
    if (dist < minDist) {
      minDist = dist;
      closest = hex;
    }
  }

  return closest;
}
