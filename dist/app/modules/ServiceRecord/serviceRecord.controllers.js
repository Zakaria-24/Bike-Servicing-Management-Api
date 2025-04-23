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
exports.serviceControllers = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const serviceRecord_service_1 = require("./serviceRecord.service");
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const serviceData = req.body;
    const result = yield serviceRecord_service_1.serviceRecordServices.createServiceIntoDB(serviceData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Service created successfully",
        data: result,
    });
}));
const getAllServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield serviceRecord_service_1.serviceRecordServices.getAllServicesFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Services retrieved successfully",
        data: services,
    });
}));
// get all service that status are (pending or in_progress )
const getStatusServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getStatusServices called");
    // const status = req.query.status as string;
    const services = yield serviceRecord_service_1.serviceRecordServices.getStatusServicesFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Overdue or pending services fetched successfully",
        data: services,
    });
}));
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.params.serviceId;
    const service = yield serviceRecord_service_1.serviceRecordServices.getSingleServiceFromDB(serviceId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Service retrieved successfully",
        data: service,
    });
}));
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.params.serviceId;
    const updateData = req.body;
    const updatedService = yield serviceRecord_service_1.serviceRecordServices.updateServiceIntoDB(serviceId, updateData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Service updated successfully",
        data: updatedService,
    });
}));
const deleteService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.params.serviceId;
    const deleteService = yield serviceRecord_service_1.serviceRecordServices.deleteServiceFromDB(serviceId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Service deleted successfully",
        data: deleteService,
    });
}));
exports.serviceControllers = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    deleteService,
    getStatusServices,
};
