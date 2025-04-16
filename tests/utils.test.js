"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const utils_1 = require("../src/utils");
const child_process_1 = require("child_process");
vitest_1.vi.mock('child_process', () => ({
    exec: vitest_1.vi.fn(),
}));
(0, vitest_1.describe)('openFile()', () => {
    const filePath = 'output/image.png';
    (0, vitest_1.beforeEach)(() => {
        vitest_1.vi.clearAllMocks();
    });
    (0, vitest_1.it)('uses "start" on Windows', () => {
        Object.defineProperty(process, 'platform', {
            value: 'win32',
        });
        (0, utils_1.openFile)(filePath);
        (0, vitest_1.expect)(child_process_1.exec).toHaveBeenCalledWith(`start "" "${filePath}"`);
    });
    (0, vitest_1.it)('uses "open" on macOS', () => {
        Object.defineProperty(process, 'platform', {
            value: 'darwin',
        });
        (0, utils_1.openFile)(filePath);
        (0, vitest_1.expect)(child_process_1.exec).toHaveBeenCalledWith(`open "${filePath}"`);
    });
    (0, vitest_1.it)('uses "xdg-open" on Linux/others', () => {
        Object.defineProperty(process, 'platform', {
            value: 'linux',
        });
        (0, utils_1.openFile)(filePath);
        (0, vitest_1.expect)(child_process_1.exec).toHaveBeenCalledWith(`xdg-open "${filePath}"`);
    });
});
(0, vitest_1.describe)('hexToRgb()', () => {
    (0, vitest_1.it)('converts #FFFFFF to [255, 255, 255]', () => {
        (0, vitest_1.expect)((0, utils_1.hexToRgb)('#FFFFFF')).toEqual([255, 255, 255]);
    });
    (0, vitest_1.it)('converts #000000 to [0, 0, 0]', () => {
        (0, vitest_1.expect)((0, utils_1.hexToRgb)('#000000')).toEqual([0, 0, 0]);
    });
    (0, vitest_1.it)('converts #FF0000 to [255, 0, 0]', () => {
        (0, vitest_1.expect)((0, utils_1.hexToRgb)('#FF0000')).toEqual([255, 0, 0]);
    });
});
(0, vitest_1.describe)('colorDistance()', () => {
    (0, vitest_1.it)('returns 0 if the colors are equal', () => {
        const d = (0, utils_1.colorDistance)([100, 150, 200], [100, 150, 200]);
        (0, vitest_1.expect)(d).toBe(0);
    });
    (0, vitest_1.it)('correctly calculates the distance between black and white', () => {
        const d = (0, utils_1.colorDistance)([0, 0, 0], [255, 255, 255]);
        (0, vitest_1.expect)(Math.round(d)).toBe(442);
    });
});
