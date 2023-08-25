// interface goes here
// type

import { Model } from 'mongoose';

export type UserType = {
  name: string;
  email: string;
  password: string;
  mobile: string;
  image?: string | undefined;
};

export type ILoginUser = {
  email: string;
  password: string;
};

export type UserModel = Model<UserType, Record<string, unknown>>;
