// according to interface mongoose model goes here
//schema
import { Schema, model } from 'mongoose';
import { UserModel, UserType } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const userSchema = new Schema<UserType, UserModel>(
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);


userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// 3. Create a Model.
export const User = model<UserType, UserModel>('User', userSchema);
