"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("../lib"));
const a = {
    a: 1,
    b: {
        c: 1,
    }
};
const b = {
    b: {
        c: 2,
        d: {
            e: 2,
        }
    }
};
async function main() {
    const jsonSource = new lib_1.default();
    jsonSource
        .setConfig('dev', a, b);
    console.log(await jsonSource.export());
}
main();
