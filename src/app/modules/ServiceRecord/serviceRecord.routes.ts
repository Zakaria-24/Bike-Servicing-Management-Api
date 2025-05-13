import express, { Router } from "express";
import { serviceControllers } from "./serviceRecord.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { serviceRecordValidationSchemas } from "./serviceRecord.validation";
const serviceRecordRouter = Router();

serviceRecordRouter.post("/services", serviceControllers.createService);
serviceRecordRouter.get("/services", serviceControllers.getAllServices);
// get all service that status are (pending or in_progress )
serviceRecordRouter.get("/services/status", serviceControllers.getStatusServices);
serviceRecordRouter.get("/services/:serviceId", serviceControllers.getSingleService);
serviceRecordRouter.put(
  "/services/:serviceId",
  validateRequest(serviceRecordValidationSchemas.updateServiceRecordWithZod),
  serviceControllers.updateService
);
serviceRecordRouter.delete("/services/:serviceId", serviceControllers.deleteService);

export const ServiceRecordRoutes = serviceRecordRouter;
