"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pixelate_1 = require("../src/pixelate");
const input = path_1.default.resolve('tests/fixtures/example.jpg');
const output = path_1.default.resolve('tests/output/pixelated.png');
(0, vitest_1.describe)('pixelateImage()', () => {
    (0, vitest_1.it)('generates a PNG output file from the input image', () => __awaiter(void 0, void 0, void 0, function* () {
        if (fs_1.default.existsSync(output))
            fs_1.default.unlinkSync(output);
        yield (0, pixelate_1.pixelateImage)(input, output, 10, 'gameboy');
        const exists = fs_1.default.existsSync(output);
        const stats = fs_1.default.statSync(output);
        (0, vitest_1.expect)(exists).toBe(true);
        (0, vitest_1.expect)(stats.size).toBeGreaterThan(0);
    }));
});
