import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { PackageService } from "./package.service";


const createPackage: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const packageData = req.body;

    const result = await PackageService.createPackage(packageData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Package created successfully!',
      data: result,
    });
  },
);

const getAllPackages: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const page:number = Number(req.query.page) || 1;
    const limit:number = Number(req.query.limit) || 20;
    const result = await PackageService.getAllPackages(page, limit);
    // const result = req.query;
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Packages fetched successfully!',
      data: result,
    });
  },
);

const getSinglePackage: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await PackageService.getSinglePackage(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Package fetched successfully!',
      data: result,
    });
  },
);

const deletePackage: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await PackageService.deletePackage(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Package deleted successfully!',
      data: result,
    });
  },
);




export const PackageController = {
  createPackage,
  getAllPackages,
  getSinglePackage,
  deletePackage
};