"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bike_validation_1 = require("./bike.validation");
const router = express_1.default.Router();
router.post("/create-bike", bike_controller_1.bikeControllers.createBike);
router.get("/", bike_controller_1.bikeControllers.getAllBikes);
router.get("/:bikeId", bike_controller_1.bikeControllers.getSingleBike);
router.put("/:bikeId", (0, validateRequest_1.default)(bike_validation_1.bikeValidationSchemas.updateBikeWithZod), bike_controller_1.bikeControllers.updateBike);
router.delete("/:bikeId", bike_controller_1.bikeControllers.deleteBike);
exports.bikeRoutes = router;
