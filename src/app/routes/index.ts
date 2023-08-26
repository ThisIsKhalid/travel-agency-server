import express from 'express';
import { AgencyRoutes } from '../modules/agency/agency.route';
import { UserRoutes } from '../modules/user/user.route';
import { PackageRoutes } from '../modules/package/package.route';

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
  {
    path: '/packages',
    route: PackageRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
