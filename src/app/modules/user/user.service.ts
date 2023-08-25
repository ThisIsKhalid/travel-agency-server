import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import ApiError from '../../../errors/apiError';
import { ILoginUser, UserType } from './user.interface';
import { User } from './user.model';

const userLogin = async (userData: ILoginUser): Promise<UserType> => {
  const { email, password } = userData;

  const isUserExist = await User.findOne(
    { email },
    { email: 1, password: 1, name: 1, image: 1 },
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
