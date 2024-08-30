'use server';

import { z } from 'zod';
import { RegisterSchema } from '../schema';

export const registerService = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.parse(values);
  if (!validatedFields) {
    return {
      error: 'Register Error pantek!',
    };
  }
  return {
    success: 'Register Success Kimak!',
  };
};
