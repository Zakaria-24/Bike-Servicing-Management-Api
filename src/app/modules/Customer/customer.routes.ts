import express, { Router } from "express";
import { customerControllers } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import { customerValidationSchemas } from "./customer.validation";


const customerRouter = Router();

customerRouter.post("/customers", customerControllers.createCustomer);
customerRouter.get("/customers", customerControllers.getAllCustomers);
customerRouter.get("/customers/:customerId", customerControllers.getSingleCustomer);
customerRouter.put(
  "/customers/:customerId",
  validateRequest(customerValidationSchemas.updateCustomerWithZod),
  customerControllers.updateCustomer
);
customerRouter.delete(
  "/customers/:customerId", 
  customerControllers.deleteCustomer);

export const customerRoutes = customerRouter;
