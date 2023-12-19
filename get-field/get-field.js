"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_1 = require("../system/system");
function getfield(filename) {
    try {
        const filenames = ["fake"];
        if (filenames.includes(filename)) {
            return (0, system_1.readpath)(`../folder/${filename}.txt`);
        }
        return JSON.parse((0, system_1.readpath)(`../folder/${filename}.txt`));
    }
    catch (err) {
        throw new Error(err);
    }
}
exports.default = getfield;
