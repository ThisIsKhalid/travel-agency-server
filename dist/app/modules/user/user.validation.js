"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required.',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required.',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required.',
        }),
        mobile: zod_1.z.string({
            required_error: 'Mobile is required.',
        }),
        image: zod_1.z.string().optional(),
    }),
});
const loginUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'Email is required.',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required.',
        }),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    loginUserZodSchema,
};
