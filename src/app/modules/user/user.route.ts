//routes
import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();


router.post('/login', UserController.loginUser)
router.post('/register' , UserController.createUser)

export const UserRoutes = router;