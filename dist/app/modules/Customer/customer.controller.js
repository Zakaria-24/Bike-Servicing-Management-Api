"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerControllers = void 0;
const customer_service_1 = require("./customer.service");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
// const createCustomer = async (req: Request, res: Response) => {
//   try {
//     //console.log(req.body);
//     const result = await customerServices.createCustomerIntoDB(req.body);
//     res.status(200).json({
//       success: true,
//       message: "Admin Created successfuly!",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err?.name || "Something went wrong",
//       error: err,
//     });
//   }
// };
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(req.body);
    const customerData = req.body;
    const result = yield customer_service_1.customerServices.createCustomerIntoDB(customerData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Customer created successfully",
        data: result,
    });
}));
const getAllCustomers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customer_service_1.customerServices.getAllCustomersFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Customers retrieved successfully",
        data: customers,
    });
}));
const getSingleCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.customerId;
    const customer = yield customer_service_1.customerServices.getSingleCustomerFromDB(customerId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Customer retrieved successfully",
        data: customer,
    });
}));
const updateCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.customerId;
    const customerData = req.body;
    const updatedCustomer = yield customer_service_1.customerServices.updateCustomerIntoDB(customerId, customerData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Customer updated successfully",
        data: updatedCustomer,
    });
}));
const deleteCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.customerId;
    const result = yield customer_service_1.customerServices.deleteCustomerFromDB(customerId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Customer deleted successfully",
        data: null,
    });
}));
exports.customerControllers = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
};
