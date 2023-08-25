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
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const agency_model_1 = require("../agency/agency.model");
const user_model_1 = require("./user.model");
const userLogin = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, userType } = userData;
    if (userType === 'user') {
        const isUserExist = yield user_model_1.User.findOne({ email });
        if (!isUserExist) {
            throw new apiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
        }
        if (isUserExist.password && password) {
            const isPasswordMatched = yield bcrypt_1.default.compare(password, isUserExist.password);
            if (!isPasswordMatched) {
                throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password does not match');
            }
        }
        return isUserExist;
    }
    else if (userType === 'agency') {
        const isAgencyExist = yield agency_model_1.Agency.findOne({ email });
        if (!isAgencyExist) {
            throw new apiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
        }
        if (isAgencyExist.password && password) {
            const isPasswordMatched = yield bcrypt_1.default.compare(password, isAgencyExist.password);
            if (!isPasswordMatched) {
                throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password does not match');
            }
        }
        return isAgencyExist;
    }
});
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(userData);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { name, email, image, mobile } = result;
    const data = {
        name,
        email,
        image,
        mobile,
    };
    return data;
});
exports.UserService = {
    userLogin,
    createUser,
};
