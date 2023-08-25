import { z } from 'zod';

const createAgencyZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required.',
    }),
    email: z.string({
      required_error: 'Email is required.',
    }),
    password: z.string({
      required_error: 'Password is required.',
    }),
    mobile: z.string({
      required_error: 'Mobile is required.',
    }),
    image: z.string().optional(),
    address: z.string({
      required_error: 'Address is required.',
    }),
    license: z.string({
      required_error: 'License is required.',
    }),
    employees: z.string().optional(),
    description: z.string({
      required_error: 'Description is required.',
    }),
  }),
});

export const AgencyValidation = {
  createAgencyZodSchema,
};
