'use server';

import { z } from 'zod';
import { LoginSchema } from '../schema';

export const loginService = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.parse(values);
  if (!validatedFields) {
    return {
      error: 'Error pantek!',
    };
  }
  return {
    success: 'Success Kimak!',
  };
};
