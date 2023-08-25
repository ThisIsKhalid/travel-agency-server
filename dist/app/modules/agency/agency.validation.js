"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyValidation = void 0;
const zod_1 = require("zod");
const createAgencyZodSchema = zod_1.z.object({
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
        address: zod_1.z.string({
            required_error: 'Address is required.',
        }),
        license: zod_1.z.string({
            required_error: 'License is required.',
        }),
        employees: zod_1.z.string().optional(),
        description: zod_1.z.string({
            required_error: 'Description is required.',
        }),
    }),
});
exports.AgencyValidation = {
    createAgencyZodSchema,
};
