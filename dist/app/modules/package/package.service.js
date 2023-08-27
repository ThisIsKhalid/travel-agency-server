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
exports.PackageService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const package_model_1 = require("./package.model");
const createPackage = (packageData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield package_model_1.Package.create(packageData);
    return result;
});
const getAllPackages = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield package_model_1.Package.find()
        .limit(limit)
        .skip((page - 1) * limit);
    return result;
});
const getSinglePackage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield package_model_1.Package.findById(id);
    return result;
});
const deletePackage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield package_model_1.Package.findByIdAndDelete(id);
    return result;
});
const updatePackage = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield package_model_1.Package.findOne({ _id: id });
    if (!isExist) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, 'Package does not exist');
    }
    const result = yield package_model_1.Package.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.PackageService = {
    createPackage,
    getAllPackages,
    getSinglePackage,
    deletePackage,
    updatePackage
};
