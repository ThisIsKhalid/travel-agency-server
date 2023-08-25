// interface goes here
// type

import { Model } from 'mongoose';

export type UserType = {
  name: string;
  email: string;
  password: string;
  mobile: string;
  image: string;
};

export type ILoginUser = {
  email: string;
  password: string;
  userType: 'user' | 'agency';
};

export type UserModel = Model<UserType, Record<string, unknown>>;
