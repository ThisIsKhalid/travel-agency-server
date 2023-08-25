"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const agency_model_1 = require("./agency.model");
const agencyLogin = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = userData;
    const isUserExist = yield agency_model_1.Agency.findOne({ email: email });
    if (!isUserExist) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    if (isUserExist && isUserExist.password) {
        const isPasswordMatched = yield bcrypt_1.default.compare(password, isUserExist.password);
        if (!isPasswordMatched) {
            throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password does not match');
        }
    }
    return isUserExist;
});
const createAgency = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield agency_model_1.Agency.create(userData);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { name, email, mobile, image, address, license, employees, description, } = result;
    const data = {
        name,
        email,
        mobile,
        image,
        address,
        license,
        employees,
        description,
    };
    return data;
});
exports.AgencyService = {
    agencyLogin,
    createAgency,
};
