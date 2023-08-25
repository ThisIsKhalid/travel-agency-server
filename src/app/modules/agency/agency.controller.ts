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

export const AgencyController = {
  createAgency,
};