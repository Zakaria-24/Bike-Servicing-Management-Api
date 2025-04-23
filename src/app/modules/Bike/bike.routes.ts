import express from "express";
import { bikeControllers } from "./bike.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bikeValidationSchemas } from "./bike.validation";
const router = express.Router();

router.post("/create-bike", bikeControllers.createBike);
router.get("/", bikeControllers.getAllBikes);
router.get("/:bikeId", bikeControllers.getSingleBike);
router.put(
  "/:bikeId",
  validateRequest(bikeValidationSchemas.updateBikeWithZod),
  bikeControllers.updateBike
);
router.delete("/:bikeId", bikeControllers.deleteBike);

export const bikeRoutes = router;
