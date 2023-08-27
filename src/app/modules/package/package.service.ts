import httpStatus from 'http-status';
import ApiError from '../../../errors/apiError';
import { IPackage } from './package.interface';
import { Package } from './package.model';

const createPackage = async (packageData: IPackage) => {
  const result = await Package.create(packageData);
  return result;
};

const getAllPackages = async (page: number, limit: number) => {
  const result = await Package.find()
    .limit(limit)
    .skip((page - 1) * limit);
  return result;
};

const getSinglePackage = async (id: string) => {
  const result = await Package.findById(id);
  return result;
};

const deletePackage = async (id: string) => {
  const result = await Package.findByIdAndDelete(id);
  return result;
};

const updatePackage = async (
  id: string,
  payload: Partial<IPackage>,
): Promise<IPackage | null> => {
    
  const isExist = await Package.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Package does not exist');
  }

  const result = await Package.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const PackageService = {
  createPackage,
  getAllPackages,
  getSinglePackage,
  deletePackage,
  updatePackage
};
