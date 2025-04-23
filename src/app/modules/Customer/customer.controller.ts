import { Request, Response } from "express";
import { customerServices } from "./customer.service";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";

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
const createCustomer = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.body);
  const customerData = req.body;

  const result = await customerServices.createCustomerIntoDB(customerData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const customers = await customerServices.getAllCustomersFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Customers retrieved successfully",
    data: customers,
  });
});

const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {
  const customerId = req.params.customerId;

  const customer = await customerServices.getSingleCustomerFromDB(customerId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Customer retrieved successfully",
    data: customer,
  });
});

const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const customerId = req.params.customerId;
  const customerData = req.body;

  const updatedCustomer = await customerServices.updateCustomerIntoDB(
    customerId,
    customerData
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Customer updated successfully",
    data: updatedCustomer,
  });
});

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const customerId = req.params.customerId;
  const result = await customerServices.deleteCustomerFromDB(customerId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Customer deleted successfully",
    data: null,
  });
});

export const customerControllers = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
