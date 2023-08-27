import httpStatus from 'http-status';
import ApiError from '../../../errors/apiError';
import { IAgency } from './agency.interface';
import { Agency } from './agency.model';

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

const getAllAgencies = async (
  page: number,
  limit: number,
): Promise<IAgency[]> => {
  const result = await Agency.find()
    .limit(limit)
    .skip((page - 1) * limit);
  return result;
};

const getSingleAgency = async (id: string) => {
  const result = await Agency.findById(id);
  return result;
};

const deleteAgency = async (id: string) => {
  const result = await Agency.findByIdAndDelete(id);
  return result;
};

const updateAgency = async (
  id: string,
  payload: Partial<IAgency>,
): Promise<IAgency | null> => {
  const isExist = await Agency.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Agency does not exist');
  }

  const result = await Agency.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AgencyService = {
  createAgency,
  getAllAgencies,
  getSingleAgency,
  deleteAgency,
  updateAgency
};
