"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agency_route_1 = require("../modules/agency/agency.route");
const user_route_1 = require("../modules/user/user.route");
const package_route_1 = require("../modules/package/package.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/agencies',
        route: agency_route_1.AgencyRoutes,
    },
    {
        path: '/packages',
        route: package_route_1.PackageRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
