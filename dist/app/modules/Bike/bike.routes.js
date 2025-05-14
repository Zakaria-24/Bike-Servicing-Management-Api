"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = require("express");
const bike_controller_1 = require("./bike.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bike_validation_1 = require("./bike.validation");
const bikeRouter = (0, express_1.Router)();
bikeRouter.post("/bikes", bike_controller_1.bikeControllers.createBike);
bikeRouter.get("/bikes", bike_controller_1.bikeControllers.getAllBikes);
bikeRouter.get("/bikes/:bikeId", bike_controller_1.bikeControllers.getSingleBike);
bikeRouter.put("/bikes/:bikeId", (0, validateRequest_1.default)(bike_validation_1.bikeValidationSchemas.updateBikeWithZod), bike_controller_1.bikeControllers.updateBike);
bikeRouter.delete("/bikes/:bikeId", bike_controller_1.bikeControllers.deleteBike);
exports.BikeRoutes = bikeRouter;
