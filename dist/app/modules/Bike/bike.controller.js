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
exports.bikeControllers = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const bike_service_1 = require("./bike.service");
const createBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(req.body);
    const bikeData = req.body;
    const result = yield bike_service_1.bikeServices.createBikeIntoDB(bikeData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: "Bike created successfully",
        data: result,
    });
}));
const getAllBikes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield bike_service_1.bikeServices.getAllBikesFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Bikes retrieved successfully",
        data: bikes,
    });
}));
const getSingleBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeId = req.params.bikeId;
    const bike = yield bike_service_1.bikeServices.getSingleBikeFromDB(bikeId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Bike retrieved successfully",
        data: bike,
    });
}));
const updateBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeId = req.params.bikeId;
    const bikeData = req.body;
    const updatedBike = yield bike_service_1.bikeServices.updateBikeIntoDB(bikeId, bikeData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Bike updated successfully",
        data: updatedBike,
    });
}));
const deleteBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeId = req.params.bikeId;
    const deletedBike = yield bike_service_1.bikeServices.deleteBikeFromDB(bikeId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Bike deleted successfully",
        data: deletedBike,
    });
}));
exports.bikeControllers = {
    createBike,
    getAllBikes,
    getSingleBike,
    updateBike,
    deleteBike,
};
