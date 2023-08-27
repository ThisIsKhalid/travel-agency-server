import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config';
import { AgencyModel, IAgency, IEmployees } from './agency.interface';

const employeesSchema = new Schema<IEmployees>({
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  designation: {
    type: String,
  },
});

const agencySchema = new Schema<IAgency, AgencyModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Enforce uniqueness on the email field
    },
    password: {
      type: String,
      required: true,
      select: false, // Optionally hide the password field from query results
    },
    mobile: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    license: {
      type: String,
      required: true,
    },
    employees: [employeesSchema],
    description: {
      type: String,
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

agencySchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// 3. Create a Model.
export const Agency = model<IAgency, AgencyModel>('Agency', agencySchema);
