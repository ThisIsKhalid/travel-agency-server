import { Model } from 'mongoose';

export type IEmployees = {
  name: string;
  phoneNumber: string;
  designation: string;
};

export type IAgency = {
  name: string;
  email: string;
  password: string;
  mobile: string;
  image: string;
  address: string;
  license: string;
  employees?: IEmployees[] | undefined;
  description: string;
};

export type AgencyModel = Model<IAgency, Record<string, unknown>>;
