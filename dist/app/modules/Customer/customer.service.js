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
exports.customerServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createCustomerIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // to create a customer in the database using prisma
    const { name, email, phone } = payload;
    const customer = yield prisma_1.default.customer.create({
        data: {
            name,
            email,
            phone,
        },
    });
    return customer;
});
const getAllCustomersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield prisma_1.default.customer.findMany();
    return customers;
});
const getSingleCustomerFromDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId,
        },
    });
    if (!customer) {
        throw new Error("Customer not found");
    }
    return customer;
});
const updateCustomerIntoDB = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isCustomerExist = yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId,
        },
    });
    if (!isCustomerExist) {
        throw new Error("Customer not found");
    }
    const result = yield prisma_1.default.customer.update({
        where: {
            customerId,
        },
        data: Object.assign({}, payload),
    });
    return result;
});
const deleteCustomerFromDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.customer.delete({
        where: {
            customerId,
        },
    });
    return customer;
});
exports.customerServices = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    getSingleCustomerFromDB,
    updateCustomerIntoDB,
    deleteCustomerFromDB,
};
