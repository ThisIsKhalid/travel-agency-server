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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageService = void 0;
const package_model_1 = require("./package.model");
const createPackage = (packageData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield package_model_1.Package.create(packageData);
    return result;
});
const getAllPackages = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield package_model_1.Package.find().limit(limit).skip((page - 1) * limit);
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
exports.PackageService = {
    createPackage,
    getAllPackages,
    getSinglePackage,
    deletePackage
};
