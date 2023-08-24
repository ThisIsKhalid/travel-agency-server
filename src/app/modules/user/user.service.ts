import { IUser } from './user.interface';
import { User } from './user.model';

const getAllUser = async () => {
  // database functionality goes here
};

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

export const UserService = {
  getAllUser,
  createUser,
};
