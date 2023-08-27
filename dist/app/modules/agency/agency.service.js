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
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const agency_model_1 = require("./agency.model");
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
const getAllAgencies = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield agency_model_1.Agency.find()
        .limit(limit)
        .skip((page - 1) * limit);
    return result;
});
const getSingleAgency = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield agency_model_1.Agency.findById(id);
    return result;
});
const deleteAgency = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield agency_model_1.Agency.findByIdAndDelete(id);
    return result;
});
const updateAgency = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield agency_model_1.Agency.findOne({ _id: id });
    if (!isExist) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, 'Agency does not exist');
    }
    const result = yield agency_model_1.Agency.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.AgencyService = {
    createAgency,
    getAllAgencies,
    getSingleAgency,
    deleteAgency,
    updateAgency
};
