import dotenv from 'dotenv';
import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';
dotenv.config();

const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;

    const result = await UserService.userLogin(userData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User logged in successfully!',
      data: result,
    });
  },
);

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;

    const result = await UserService.createUser(userData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  },
);

export const UserController = {
  loginUser,
  createUser,
};
