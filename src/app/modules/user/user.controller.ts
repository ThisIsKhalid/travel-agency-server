import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
dotenv.config()

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  //check user exist or not
  const check = await UserService.checkUser(email);
  if (check) {
    //bring user to check password
    const result = await UserService.validateUser(email);
    const db_password = result.password;
    const isMatch = await bcrypt.compare(password, db_password);
    if (isMatch) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Login successful!',
        data: { name: result.name, email: result.email },
      });
    }
    else {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: false,
        message: 'Password is incorrect!',
        data: {},
      });
    }
  }
  else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'No users found!',
      data: {},
    });
  }
});

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { name, email, password, mobile } = req.body;
  const image = req.body?.image || ' ';

  //check user already exist or not
  const check = await UserService.checkUser(email);
  if (check) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'Users already registered!',
      data: {
        name: check.name,
        email: check.email
      }
    });
  }
  else {
    const hashedPassword = await bcrypt.hash(password, 12);
    const data = {
      name,
      email,
      password: hashedPassword,
      mobile,
      image
    }
    const result = await UserService.createUser(data)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Users created successfully!',
      data: {
        name: result.name,
        email: result.email,
        mobile: result.mobile
      }
    });
  }
});

export const UserController = {
  loginUser,
  createUser
};
