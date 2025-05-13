import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { serviceRecordServices } from "./serviceRecord.service";

const createService = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.body);
  const serviceData = req.body;

  const result = await serviceRecordServices.createServiceIntoDB(serviceData);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Service created successfully",
    data: result,
  });
});

const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const services = await serviceRecordServices.getAllServicesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Services retrieved successfully",
    data: services,
  });
});

// get all service that status are (pending or in_progress )
const getStatusServices = catchAsync(async (req: Request, res: Response) => {
  console.log("getStatusServices called");
  // const status = req.query.status as string;
  const services = await serviceRecordServices.getStatusServicesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Overdue or pending services fetched successfully",
    data: services,
  });
});

const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const serviceId = req.params.serviceId;

  const service = await serviceRecordServices.getSingleServiceFromDB(serviceId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Service retrieved successfully",
    data: service,
  });
});

const updateService = catchAsync(async (req: Request, res: Response) => {
  const serviceId = req.params.serviceId;
  const updateData = req.body;

  const updatedService = await serviceRecordServices.updateServiceIntoDB(
    serviceId,
    updateData
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Service updated successfully",
    data: updatedService,
  });
});

const deleteService = catchAsync(async (req: Request, res: Response) => {
  const serviceId = req.params.serviceId;
  const deleteService = await serviceRecordServices.deleteServiceFromDB(
    serviceId
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Service deleted successfully",
    data: deleteService,
  });
});

export const serviceControllers = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
  getStatusServices,
};
