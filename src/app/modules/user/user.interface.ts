// interface goes here
// type

import { Model } from 'mongoose';

export type IUser = {
  name: string;
  email: string;
  password: string;
  mobile: string;
  image: string;
};

export type ILoginUser = {
  email: string;
  password: string;
  IUser: 'user' | 'agency';
};

export type UserModel = Model<IUser, Record<string, unknown>>;
