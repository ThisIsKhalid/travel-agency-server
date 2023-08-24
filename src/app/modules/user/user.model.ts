// according to interface mongoose model goes here
import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String },
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);
