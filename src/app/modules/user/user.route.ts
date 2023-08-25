//routes
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(UserValidation.loginUserZodSchema),
  UserController.loginUser,
);


router.post(
  '/register',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
);

export const UserRoutes = router;
