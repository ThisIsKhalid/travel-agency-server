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

router.get('/:id', UserController.getSingleUser);

router.delete('/:id', UserController.deleteUser);

router.patch('/:id', UserController.updateUser);

router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
