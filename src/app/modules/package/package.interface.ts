import { Model, Types } from 'mongoose';
import { IAgency } from '../agency/agency.interface';

export type IPackage = {
  name: string;
  location: string;
  duration: string;
  numberOfPeople: number;
  packageType: 'basic' | 'premium' | 'ultimate';
  price: number;
  description: string;
  guideName: string;
  transportOptions: 'bus' | 'train' | 'flight';
  image: string;
  agencyId: Types.ObjectId | IAgency;
};

export type PackageModel = Model<IPackage, Record<string, unknown>>;
