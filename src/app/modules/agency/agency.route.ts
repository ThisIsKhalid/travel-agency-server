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

export const AgencyRoutes = router;
