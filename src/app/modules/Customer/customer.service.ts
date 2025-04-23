import { Customer } from "@prisma/client";
import prisma from "../../shared/prisma";

const createCustomerIntoDB = async (payload: any) => {
  // to create a customer in the database using prisma
  const { name, email, phone } = payload;
  const customer = await prisma.customer.create({
    data: {
      name,
      email,
      phone,
    },
  });
  return customer;
};

const getAllCustomersFromDB = async () => {
  const customers = await prisma.customer.findMany();
  return customers;
};

const getSingleCustomerFromDB = async (customerId: string) => {
  const customer = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });
  if (!customer) {
    throw new Error("Customer not found");
  }
  return customer;
};

const updateCustomerIntoDB = async (
  customerId: string,
  payload: Customer
): Promise<Customer> => {
  const isCustomerExist = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });
  if (!isCustomerExist) {
    throw new Error("Customer not found");
  }

  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data: {
      ...payload,
    },
  });

  return result;
};

const deleteCustomerFromDB = async (customerId: string) => {
  const customer = await prisma.customer.delete({
    where: {
      customerId,
    },
  });
  return customer;
};

export const customerServices = {
  createCustomerIntoDB,
  getAllCustomersFromDB,
  getSingleCustomerFromDB,
  updateCustomerIntoDB,
  deleteCustomerFromDB,
};
