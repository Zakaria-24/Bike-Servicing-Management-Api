"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidationSchemas = void 0;
const zod_1 = require("zod");
const updateBikeWithZod = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().optional(),
        model: zod_1.z.string().optional(),
        year: zod_1.z.number().optional(),
    }),
});
exports.bikeValidationSchemas = {
    updateBikeWithZod,
};
