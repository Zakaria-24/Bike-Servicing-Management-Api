import express from "express";
import { serviceControllers } from "./serviceRecord.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { serviceRecordValidationSchemas } from "./serviceRecord.validation";
const router = express.Router();

router.post("/create-service", serviceControllers.createService);
router.get("/", serviceControllers.getAllServices);
// get all service that status are (pending or in_progress )
router.get("/status/", serviceControllers.getStatusServices);
router.get("/:serviceId", serviceControllers.getSingleService);
router.put(
  "/:serviceId",
  validateRequest(serviceRecordValidationSchemas.updateServiceRecordWithZod),
  serviceControllers.updateService
);
router.delete("/:serviceId", serviceControllers.deleteService);

export const ServiceRecordRoutes = router;
