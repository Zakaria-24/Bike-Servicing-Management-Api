"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordValidationSchemas = exports.BikeStatusEnum = void 0;
const zod_1 = require("zod");
// Reuse enum from Prisma
exports.BikeStatusEnum = zod_1.z.enum(["pending", "in_progress", "done"]);
const updateServiceRecordWithZod = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string(),
        serviceDate: zod_1.z.coerce.date().optional(),
        completionDate: zod_1.z.coerce.date().optional(),
        description: zod_1.z.string().optional(),
        status: exports.BikeStatusEnum.optional(),
    }),
});
exports.serviceRecordValidationSchemas = {
    updateServiceRecordWithZod,
};
