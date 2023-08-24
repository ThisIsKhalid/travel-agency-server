import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();


router.get('/', UserController.getAllUser)
router.post('/register' , UserController.createUser)

export const UserRoutes = router;