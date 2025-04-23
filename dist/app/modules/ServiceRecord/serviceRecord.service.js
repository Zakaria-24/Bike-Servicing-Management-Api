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
exports.serviceRecordServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createServiceIntoDB = (serviceData) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prisma_1.default.serviceRecord.create({
        data: Object.assign({}, serviceData),
    });
    return service;
});
const getAllServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield prisma_1.default.serviceRecord.findMany();
    return services;
});
const getStatusServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getStatusServicesFromDB called");
    const services = yield prisma_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ["pending", "in_progress"],
            },
            serviceDate: {
                // serviceDate is older than 7 days
                lt: new Date(new Date().setDate(new Date().getDate() - 7)),
            },
        },
    });
    return services;
});
const getSingleServiceFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
    return service;
});
const updateServiceIntoDB = (serviceId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!updateData.completionDate) {
        const date = (updateData.completionDate = new Date());
    }
    // console.log("updateData", updateData);
    const updatedService = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId,
        },
        data: Object.assign({}, updateData),
    });
    return updatedService;
});
const deleteServiceFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedService = yield prisma_1.default.serviceRecord.delete({
        where: {
            serviceId,
        },
    });
    return deletedService;
});
exports.serviceRecordServices = {
    createServiceIntoDB,
    getAllServicesFromDB,
    getSingleServiceFromDB,
    updateServiceIntoDB,
    deleteServiceFromDB,
    getStatusServicesFromDB,
};
