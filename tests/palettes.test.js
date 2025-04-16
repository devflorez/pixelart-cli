"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const palettes_1 = require("../src/palettes");
(0, vitest_1.describe)('palettes', () => {
    (0, vitest_1.it)('has a NES palette with 16 colors', () => {
        var _a;
        (0, vitest_1.expect)(palettes_1.palettes.nes).toBeDefined();
        (0, vitest_1.expect)((_a = palettes_1.palettes.nes) === null || _a === void 0 ? void 0 : _a.length).toBe(16);
    });
    (0, vitest_1.it)('has a GameBoy palette with 4 colors', () => {
        var _a;
        (0, vitest_1.expect)(palettes_1.palettes.gameboy).toBeDefined();
        (0, vitest_1.expect)((_a = palettes_1.palettes.gameboy) === null || _a === void 0 ? void 0 : _a.length).toBe(4);
    });
    (0, vitest_1.it)('has a normal style defined as null', () => {
        (0, vitest_1.expect)(palettes_1.palettes.normal).toBeNull();
    });
});
