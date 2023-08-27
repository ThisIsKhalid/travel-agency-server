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
        image: zod_1.z.string({
            required_error: 'Image is required',
        }),
        address: zod_1.z.string({
            required_error: 'Address is required.',
        }),
        license: zod_1.z.string({
            required_error: 'License is required.',
        }),
        employees: zod_1.z
            .array(zod_1.z.object({
            name: zod_1.z.string({
                required_error: 'Employee name is required.',
            }),
            phoneNumber: zod_1.z.string({
                required_error: 'Employee phone number is required.',
            }),
            designation: zod_1.z.string({
                required_error: 'Employee designation is required.',
            }),
        }))
            .optional(),
        description: zod_1.z.string({
            required_error: 'Description is required.',
        }),
    }),
});
exports.AgencyValidation = {
    createAgencyZodSchema,
};
