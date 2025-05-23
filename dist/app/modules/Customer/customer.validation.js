"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerValidationSchemas = void 0;
const zod_1 = require("zod");
const updateCustomerWithZod = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
    }),
});
exports.customerValidationSchemas = {
    updateCustomerWithZod,
};
