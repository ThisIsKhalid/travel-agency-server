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

// api/v1/agencies/all
router.get(
  '/all',
  AgencyController.getAllAgencies,
)

// api/v1/agencies/id
router.get(
  '/:id',
  AgencyController.getSingleAgency,
)

export const AgencyRoutes = router;
