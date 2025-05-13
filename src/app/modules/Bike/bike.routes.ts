import express, { Router } from "express";
import { bikeControllers } from "./bike.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bikeValidationSchemas } from "./bike.validation";

const bikeRouter = Router();

bikeRouter.post("/bikes", bikeControllers.createBike);
bikeRouter.get("/bikes", bikeControllers.getAllBikes);
bikeRouter.get("/bikes/:bikeId", bikeControllers.getSingleBike);
bikeRouter.put(
  "/bikes/:bikeId",
  validateRequest(bikeValidationSchemas.updateBikeWithZod),
  bikeControllers.updateBike
);
bikeRouter.delete("/bikes/:bikeId", bikeControllers.deleteBike);

export const BikeRoutes = bikeRouter;
