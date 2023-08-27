import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AgencyService } from './agency.service';

const createAgency: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;

    const result = await AgencyService.createAgency(userData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Agency created successfully!',
      data: result,
    });
  },
);

const getAllAgencies: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const page: number = Number(req.query.page) || 1;
    const limit: number = Number(req.query.limit) || 10;
    const result = await AgencyService.getAllAgencies(page, limit);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Agencies fetched successfully!',
      data: result,
    });
  }
)

const getSingleAgency: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await AgencyService.getSingleAgency(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Agency fetched successfully!',
      data: result,
    });
  }
)

const deleteAgency: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await AgencyService.deleteAgency(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Agency deleted successfully!',
      data: result,
    });
  },
);

const updateAgency: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;

    const result = await AgencyService.updateAgency(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Agency updated successfully!',
      data: result,
    });
  },
);

export const AgencyController = {
  createAgency,
  getAllAgencies,
  getSingleAgency,
  updateAgency,
  deleteAgency
};
