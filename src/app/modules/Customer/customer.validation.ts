import { z } from "zod";

const updateCustomerWithZod = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  }),
});

export const customerValidationSchemas = {
  updateCustomerWithZod,
};
