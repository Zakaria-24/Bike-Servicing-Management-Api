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
exports.bikeServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createBikeIntoDB = (bikeData) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(bikeData);
    const bike = yield prisma_1.default.bike.create({
        data: Object.assign({}, bikeData),
    });
    return bike;
});
const getAllBikesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield prisma_1.default.bike.findMany();
    return bikes;
});
const getSingleBikeFromDB = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield prisma_1.default.bike.findUniqueOrThrow({
        where: {
            bikeId,
        },
    });
    return bike;
});
// updateBikeIntoDB
const updateBikeIntoDB = (bikeId, bikeData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBike = yield prisma_1.default.bike.update({
        where: {
            bikeId,
        },
        data: Object.assign({}, bikeData),
    });
    return updatedBike;
});
// deleteBikeFromDB
const deleteBikeFromDB = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedBike = yield prisma_1.default.bike.delete({
        where: {
            bikeId,
        },
    });
    return deletedBike;
});
exports.bikeServices = {
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFromDB,
    updateBikeIntoDB,
    deleteBikeFromDB,
};
