"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordRoutes = void 0;
const express_1 = require("express");
const serviceRecord_controllers_1 = require("./serviceRecord.controllers");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const serviceRecord_validation_1 = require("./serviceRecord.validation");
const serviceRecordRouter = (0, express_1.Router)();
serviceRecordRouter.post("/services", serviceRecord_controllers_1.serviceControllers.createService);
serviceRecordRouter.get("/services", serviceRecord_controllers_1.serviceControllers.getAllServices);
// get all service that status are (pending or in_progress )
serviceRecordRouter.get("/services/status", serviceRecord_controllers_1.serviceControllers.getStatusServices);
serviceRecordRouter.get("/services/:serviceId", serviceRecord_controllers_1.serviceControllers.getSingleService);
serviceRecordRouter.put("/services/:serviceId", (0, validateRequest_1.default)(serviceRecord_validation_1.serviceRecordValidationSchemas.updateServiceRecordWithZod), serviceRecord_controllers_1.serviceControllers.updateService);
serviceRecordRouter.delete("/services/:serviceId", serviceRecord_controllers_1.serviceControllers.deleteService);
exports.ServiceRecordRoutes = serviceRecordRouter;
