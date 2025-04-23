import express from "express";
import { customerControllers } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import { customerValidationSchemas } from "./customer.validation";

const router = express.Router();

router.post("/create-customer", customerControllers.createCustomer);
router.get("/", customerControllers.getAllCustomers);
router.get("/:customerId", customerControllers.getSingleCustomer);
router.put(
  "/:customerId",
  validateRequest(customerValidationSchemas.updateCustomerWithZod),
  customerControllers.updateCustomer
);
router.delete("/:customerId", customerControllers.deleteCustomer);

export const customerRoutes = router;
