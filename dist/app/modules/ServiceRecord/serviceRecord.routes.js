"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const serviceRecord_controllers_1 = require("./serviceRecord.controllers");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const serviceRecord_validation_1 = require("./serviceRecord.validation");
const router = express_1.default.Router();
router.post("/create-service", serviceRecord_controllers_1.serviceControllers.createService);
router.get("/", serviceRecord_controllers_1.serviceControllers.getAllServices);
// get all service that status are (pending or in_progress )
router.get("/status/", serviceRecord_controllers_1.serviceControllers.getStatusServices);
router.get("/:serviceId", serviceRecord_controllers_1.serviceControllers.getSingleService);
router.put("/:serviceId", (0, validateRequest_1.default)(serviceRecord_validation_1.serviceRecordValidationSchemas.updateServiceRecordWithZod), serviceRecord_controllers_1.serviceControllers.updateService);
router.delete("/:serviceId", serviceRecord_controllers_1.serviceControllers.deleteService);
exports.ServiceRecordRoutes = router;
