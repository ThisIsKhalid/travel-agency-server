import { Model, Schema } from 'mongoose';

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
  agencyId: Schema.Types.ObjectId;
};

export type PackageModel = Model<IPackage, Record<string, unknown>>;
