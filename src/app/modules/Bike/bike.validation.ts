import { z } from "zod";

const updateBikeWithZod = z.object({
  body: z.object({
    brand: z.string().optional(),
    model: z.string().optional(),
    year: z.number().optional(),
  }),
});

export const bikeValidationSchemas = {
  updateBikeWithZod,
};
