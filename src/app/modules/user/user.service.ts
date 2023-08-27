import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import ApiError from '../../../errors/apiError';
import { IAgency } from '../agency/agency.interface';
import { Agency } from '../agency/agency.model';
import { ILoginUser, IUser } from './user.interface';
import { User } from './user.model';

const userLogin = async (
  userData: ILoginUser,
): Promise<IUser | IAgency | undefined> => {
  const { email, password, IUser } = userData;

  if (IUser === 'user') {
    const isUserExist = await User.findOne({ email });
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
  } else if (IUser === 'agency') {
    const isAgencyExist = await Agency.findOne({ email });

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

const createUser = async (userData: IUser): Promise<Partial<IUser>> => {
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

const getAllUsers = async (page: number, limit: number): Promise<IUser[]> => {
  const result = await User.find()
    .limit(limit)
    .skip((page - 1) * limit);
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>,
): Promise<IUser | null> => {
  const isExist = await User.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const UserService = {
  userLogin,
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser
};
