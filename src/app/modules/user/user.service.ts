// db
import { UserType } from './user.interface';
import { UserModel } from './user.model';

// api/v1/users/login
const validateUser = async (email: string) => {
  const result = await UserModel.findOne({ email });
  return result;
};

//api/v1/users/register
const createUser = async (user: UserType) => {
  const result = await UserModel.create(user);
  return result;
};
const checkUser = async (email: string) => {
  const result = await UserModel.findOne({ email });
  return result;
}

export const UserService = {
  validateUser,
  createUser,
  checkUser
};
