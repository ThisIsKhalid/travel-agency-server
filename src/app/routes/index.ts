import express from 'express';
import { AgencyRoutes } from '../modules/agency/agency.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/agencies',
    route: AgencyRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
