//routes
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PackageController } from './package.controller';
import { PackageValidation } from './package.validation';

const router = express.Router();

router.post(
  '/create-package',
  validateRequest(PackageValidation.createPackageSchema),
  PackageController.createPackage,
);

router.delete('/:id', PackageController.deletePackage);

router.get('/:id', PackageController.getSinglePackage);

router.get('/', PackageController.getAllPackages);

export const PackageRoutes = router;
