import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import ApiError from '../../../errors/apiError';
import { IAgency } from './agency.interface';
import { Agency } from './agency.model';
import { ILoginUser } from '../user/user.interface';

const agencyLogin = async (userData: ILoginUser): Promise<IAgency> => {
  const { email, password } = userData;

  const isUserExist = await Agency.findOne(
    { email: email }
  );
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (isUserExist && isUserExist.password) {
    const isPasswordMatched = await bcrypt.compare(
      password,
      isUserExist.password,
    );

    if (!isPasswordMatched) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Password does not match');
    }
  }
  return isUserExist;
};

const createAgency = async (userData: IAgency): Promise<Partial<IAgency>> => {
  const result = await Agency.create(userData);

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const {
    name,
    email,
    mobile,
    image,
    address,
    license,
    employees,
    description,
  } = result;

  const data = {
    name,
    email,
    mobile,
    image,
    address,
    license,
    employees,
    description,
  };
  return data;
};

const getAllAgencies = async (page: number, limit: number): Promise<IAgency[]> => {
  const result = await Agency.find().limit(limit).skip((page - 1) * limit);
  return result;
}

const getSingleAgency = async (id: string) => {
  const result = await Agency.findById(id);
  return result;
}

export const AgencyService = {
  agencyLogin,
  createAgency,
  getAllAgencies,
  getSingleAgency
};
