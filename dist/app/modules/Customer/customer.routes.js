"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const customer_validation_1 = require("./customer.validation");
const router = express_1.default.Router();
router.post("/create-customer", customer_controller_1.customerControllers.createCustomer);
router.get("/", customer_controller_1.customerControllers.getAllCustomers);
router.get("/:customerId", customer_controller_1.customerControllers.getSingleCustomer);
router.put("/:customerId", (0, validateRequest_1.default)(customer_validation_1.customerValidationSchemas.updateCustomerWithZod), customer_controller_1.customerControllers.updateCustomer);
router.delete("/:customerId", customer_controller_1.customerControllers.deleteCustomer);
exports.customerRoutes = router;
