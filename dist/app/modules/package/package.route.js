"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRoutes = void 0;
//routes
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const package_controller_1 = require("./package.controller");
const package_validation_1 = require("./package.validation");
const router = express_1.default.Router();
//api/v1/packages/create-package
router.post('/create-package', (0, validateRequest_1.default)(package_validation_1.PackageValidation.createPackageSchema), package_controller_1.PackageController.createPackage);
//api/v1/packages/id
router.get('/:id', package_controller_1.PackageController.getSinglePackage);
//api/v1/packages/id
router.delete('/:id', package_controller_1.PackageController.deletePackage);
//api/v1/packages?page=1&limit=20
router.get('/', package_controller_1.PackageController.getAllPackages);
exports.PackageRoutes = router;
