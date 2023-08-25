"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyRoutes = void 0;
//routes
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const agency_controller_1 = require("./agency.controller");
const agency_validation_1 = require("./agency.validation");
const router = express_1.default.Router();
router.post('/register', (0, validateRequest_1.default)(agency_validation_1.AgencyValidation.createAgencyZodSchema), agency_controller_1.AgencyController.createAgency);
exports.AgencyRoutes = router;
