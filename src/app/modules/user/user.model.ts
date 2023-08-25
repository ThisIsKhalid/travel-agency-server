// according to interface mongoose model goes here
//schema
import { Schema, model } from 'mongoose';
import { UserType } from './user.interface';

const userSchema = new Schema<UserType>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
});

// 3. Create a Model.
export const UserModel = model<UserType>('User', userSchema);
