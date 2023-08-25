import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import ApiError from '../../../errors/apiError';
import { IAgency } from '../agency/agency.interface';
import { Agency } from '../agency/agency.model';
import { ILoginUser, UserType } from './user.interface';
import { User } from './user.model';

const userLogin = async (
  userData: ILoginUser,
): Promise<UserType | IAgency | undefined> => {
  const { email, password, userType } = userData;

  if (userType === 'user') {
    const isUserExist = await User.findOne(
      { email }
    );
    if (!isUserExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
    }

    if (isUserExist.password && password) {
      const isPasswordMatched = await bcrypt.compare(
        password,
        isUserExist.password,
      );

      if (!isPasswordMatched) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Password does not match');
      }
    }

    return isUserExist;
  } else if (userType === 'agency') {
    const isAgencyExist = await Agency.findOne(
      { email }
    );

    if (!isAgencyExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
    }

    if (isAgencyExist.password && password) {
      const isPasswordMatched = await bcrypt.compare(
        password,
        isAgencyExist.password,
      );

      if (!isPasswordMatched) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Password does not match');
      }
    }

    return isAgencyExist;
  }
};

const createUser = async (userData: UserType): Promise<Partial<UserType>> => {
  const result = await User.create(userData);

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { name, email, image, mobile } = result;

  const data = {
    name,
    email,
    image,
    mobile,
  };
  return data;
};

export const UserService = {
  userLogin,
  createUser,
};
