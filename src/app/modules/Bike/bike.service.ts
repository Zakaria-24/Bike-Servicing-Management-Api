import { Bike } from "@prisma/client";
import prisma from "../../shared/prisma";

const createBikeIntoDB = async (bikeData: Bike) => {
  //   console.log(bikeData);

  const bike = await prisma.bike.create({
    data: {
      ...bikeData,
    },
  });
  return bike;
};

const getAllBikesFromDB = async () => {
  const bikes = await prisma.bike.findMany();
  return bikes;
};

const getSingleBikeFromDB = async (bikeId: string) => {
  const bike = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId,
    },
  });
  return bike;
};

// updateBikeIntoDB
const updateBikeIntoDB = async (bikeId: string, bikeData: Bike) => {
  const updatedBike = await prisma.bike.update({
    where: {
      bikeId,
    },
    data: {
      ...bikeData,
    },
  });
  return updatedBike;
};

// deleteBikeFromDB
const deleteBikeFromDB = async (bikeId: string) => {
  await prisma.bike.findFirstOrThrow({
    where: {
      bikeId: bikeId,
    },
  })
  const deletedBike = await prisma.bike.delete({
    where: {
      bikeId,
    },
  });
  return deletedBike;
};

export const bikeServices = {
  createBikeIntoDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
  updateBikeIntoDB,
  deleteBikeFromDB,
};
