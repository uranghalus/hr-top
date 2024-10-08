'use server';

import { z } from 'zod';
import { RegisterSchema } from '../schema';
import bcrypt from 'bcryptjs';
import { db } from '../db';
import { getUserByEmail } from '../data/user';
export const registerService = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.parse(values);
  if (!validatedFields) {
    return {
      error: 'Register Error pantek!',
    };
  }
  const { email, name, password } = validatedFields;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email Sudah Terdaftar' };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Todo Send Verification token email
  return { success: 'Registrasi Berhasil!!' };
};
