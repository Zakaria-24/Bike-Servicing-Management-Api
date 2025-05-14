"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = require("express");
const customer_controller_1 = require("./customer.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const customer_validation_1 = require("./customer.validation");
const customerRouter = (0, express_1.Router)();
customerRouter.post("/customers", customer_controller_1.customerControllers.createCustomer);
customerRouter.get("/customers", customer_controller_1.customerControllers.getAllCustomers);
customerRouter.get("/customers/:customerId", customer_controller_1.customerControllers.getSingleCustomer);
customerRouter.put("/customers/:customerId", (0, validateRequest_1.default)(customer_validation_1.customerValidationSchemas.updateCustomerWithZod), customer_controller_1.customerControllers.updateCustomer);
customerRouter.delete("/customers/:customerId", customer_controller_1.customerControllers.deleteCustomer);
exports.customerRoutes = customerRouter;
