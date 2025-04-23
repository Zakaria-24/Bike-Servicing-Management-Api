import { Bike, ServiceRecord } from "@prisma/client";
import prisma from "../../shared/prisma";

const createServiceIntoDB = async (serviceData: ServiceRecord) => {
  const service = await prisma.serviceRecord.create({
    data: {
      ...serviceData,
    },
  });
  return service;
};

const getAllServicesFromDB = async () => {
  const services = await prisma.serviceRecord.findMany();
  return services;
};

const getStatusServicesFromDB = async () => {
  console.log("getStatusServicesFromDB called");
  const services = await prisma.serviceRecord.findMany({
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
};

const getSingleServiceFromDB = async (serviceId: string) => {
  const service = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });
  return service;
};

const updateServiceIntoDB = async (
  serviceId: string,
  updateData: any
): Promise<ServiceRecord> => {
  if (!updateData.completionDate) {
    const date = (updateData.completionDate = new Date());
  }
  // console.log("updateData", updateData);

  const updatedService = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: {
      ...updateData,
    },
  });
  return updatedService;
};

const deleteServiceFromDB = async (serviceId: string) => {
  const deletedService = await prisma.serviceRecord.delete({
    where: {
      serviceId,
    },
  });
  return deletedService;
};

export const serviceRecordServices = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB,
  deleteServiceFromDB,
  getStatusServicesFromDB,
};
