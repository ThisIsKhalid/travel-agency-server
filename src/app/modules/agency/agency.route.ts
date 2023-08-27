//routes
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AgencyController } from './agency.controller';
import { AgencyValidation } from './agency.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(AgencyValidation.createAgencyZodSchema),
  AgencyController.createAgency,
);

router.get('/:id', AgencyController.getSingleAgency);

router.delete('/:id', AgencyController.deleteAgency);

router.patch('/:id', AgencyController.updateAgency);

router.get('/', AgencyController.getAllAgencies);

export const AgencyRoutes = router;
