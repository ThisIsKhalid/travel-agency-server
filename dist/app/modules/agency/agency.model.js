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
exports.Agency = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../../config"));
const employeesSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    designation: {
        type: String,
    },
});
const agencySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Enforce uniqueness on the email field
    },
    password: {
        type: String,
        required: true,
        select: false, // Optionally hide the password field from query results
    },
    mobile: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    license: {
        type: String,
        required: true,
    },
    employees: [employeesSchema],
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
agencySchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcrypt_1.default.hash(this.password, Number(config_1.default.bcrypt_salt_rounds));
        next();
    });
});
// 3. Create a Model.
exports.Agency = (0, mongoose_1.model)('Agency', agencySchema);
