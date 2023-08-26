import { z } from 'zod';

const createPackageSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required.',
    }),
    location: z.string({
      required_error: 'Location is required.',
    }),
    duration: z.string({
      required_error: 'Duration is required.',
    }),
    numberOfPeople: z.number({
      required_error: 'Number of People is required.',
    }),
    packageType: z.enum(['basic', 'premium', 'ultimate'], {
      required_error:
        'Package Type is required and must be one of: basic, premium, ultimate.',
    }),
    price: z.number({
      required_error: 'Price is required.',
    }),
    description: z.string({
      required_error: 'Description is required.',
    }),
    guideName: z.string({
      required_error: 'Guide Name is required.',
    }),
    transportOptions: z.enum(['bus', 'train', 'flight'], {
      required_error:
        'Transport Option is required and must be one of: bus, train, flight.',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
    agencyId: z.string({
      required_error: 'Agency ID is required.',
    }),
  }),
});

export const PackageValidation = {
  createPackageSchema,
};
