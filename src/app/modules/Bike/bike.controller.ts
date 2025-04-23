import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { bikeServices } from "./bike.service";

const createBike = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.body);
  const bikeData = req.body;

  const result = await bikeServices.createBikeIntoDB(bikeData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bike created successfully",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const bikes = await bikeServices.getAllBikesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bikes retrieved successfully",
    data: bikes,
  });
});

const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const bikeId = req.params.bikeId;

  const bike = await bikeServices.getSingleBikeFromDB(bikeId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bike retrieved successfully",
    data: bike,
  });
});

const updateBike = catchAsync(async (req: Request, res: Response) => {
  const bikeId = req.params.bikeId;
  const bikeData = req.body;

  const updatedBike = await bikeServices.updateBikeIntoDB(bikeId, bikeData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bike updated successfully",
    data: updatedBike,
  });
});

const deleteBike = catchAsync(async (req: Request, res: Response) => {
  const bikeId = req.params.bikeId;

  const deletedBike = await bikeServices.deleteBikeFromDB(bikeId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bike deleted successfully",
    data: deletedBike,
  });
});

export const bikeControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
};
