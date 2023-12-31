import { Schema, Types, model } from 'mongoose';
import { IPackage, PackageModel } from './package.interface';

const packageSchema = new Schema<IPackage, PackageModel>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    location: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: true,
    },
    packageType: {
      type: String,
      enum: ['basic', 'premium', 'ultimate'],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be greater than 0.']
    },
    description: {
      type: String,
      required: true,
    },
    guideName: {
      type: String,
      required: true,
    },
    transportOptions: {
      type: String,
      enum: ['bus', 'train', 'flight'],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    agencyId: {
      type: Types.ObjectId,
      ref: 'Agency',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Package = model<IPackage, PackageModel>('Package', packageSchema);
