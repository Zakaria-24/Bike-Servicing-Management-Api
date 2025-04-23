import { z } from "zod";

// Reuse enum from Prisma
export const BikeStatusEnum = z.enum(["pending", "in_progress", "done"]);

const updateServiceRecordWithZod = z.object({
  body: z.object({
    bikeId: z.string(),
    serviceDate: z.coerce.date().optional(),
    completionDate: z.coerce.date().optional(),
    description: z.string().optional(),
    status: BikeStatusEnum.optional(),
  }),
});

export const serviceRecordValidationSchemas = {
  updateServiceRecordWithZod,
};
