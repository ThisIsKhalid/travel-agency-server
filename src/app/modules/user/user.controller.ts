import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully !',
    data: result,
  });
});

const createUser = catchAsync(async (req: Request, res: Response) => {

  const data = req.body;

  const result = await UserService.createUser(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users created successfully !',
    data: result,
  });
});

export const UserController = {
  getAllUser,
  createUser
};
