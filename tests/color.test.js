"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const color_1 = require("../src/color");
(0, vitest_1.describe)('getClosestColor()', () => {
    const palette = ['#000000', '#FFFFFF', '#FF0000'];
    (0, vitest_1.it)('returns #000000 if the input color is black', () => {
        (0, vitest_1.expect)((0, color_1.getClosestColor)(0, 0, 0, palette)).toBe('#000000');
    });
    (0, vitest_1.it)('returns #FFFFFF if the input color is white', () => {
        (0, vitest_1.expect)((0, color_1.getClosestColor)(255, 255, 255, palette)).toBe('#FFFFFF');
    });
    (0, vitest_1.it)('returns #FF0000 if the input color is pure red', () => {
        (0, vitest_1.expect)((0, color_1.getClosestColor)(255, 0, 0, palette)).toBe('#FF0000');
    });
    (0, vitest_1.it)('returns the closest matching color if no exact match is found', () => {
        (0, vitest_1.expect)((0, color_1.getClosestColor)(240, 10, 10, palette)).toBe('#FF0000');
    });
});
