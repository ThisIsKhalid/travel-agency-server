"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageValidation = void 0;
const zod_1 = require("zod");
const createPackageSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required.',
        }),
        location: zod_1.z.string({
            required_error: 'Location is required.',
        }),
        duration: zod_1.z.string({
            required_error: 'Duration is required.',
        }),
        numberOfPeople: zod_1.z.number({
            required_error: 'Number of People is required.',
        }),
        packageType: zod_1.z.enum(['basic', 'premium', 'ultimate'], {
            required_error: 'Package Type is required and must be one of: basic, premium, ultimate.',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required.',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required.',
        }),
        guideName: zod_1.z.string({
            required_error: 'Guide Name is required.',
        }),
        transportOptions: zod_1.z.enum(['bus', 'train', 'flight'], {
            required_error: 'Transport Option is required and must be one of: bus, train, flight.',
        }),
        image: zod_1.z.string({
            required_error: 'Image is required',
        }),
        agencyId: zod_1.z.string({
            required_error: 'Agency ID is required.',
        }),
    }),
});
exports.PackageValidation = {
    createPackageSchema,
};
