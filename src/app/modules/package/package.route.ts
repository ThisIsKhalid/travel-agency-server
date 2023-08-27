//routes
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PackageController } from './package.controller';
import { PackageValidation } from './package.validation';

const router = express.Router();

//api/v1/packages/create-package
router.post(
  '/create-package',
  validateRequest(PackageValidation.createPackageSchema),
  PackageController.createPackage,
);

//api/v1/packages/id
router.get('/:id', PackageController.getSinglePackage);

//api/v1/packages/id
router.delete('/:id', PackageController.deletePackage);

//api/v1/packages/id
router.patch('/:id', PackageController.updatePackage);

//api/v1/packages?page=1&limit=20
router.get('/', PackageController.getAllPackages);

export const PackageRoutes = router;
