import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';

export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

export async function registerUser(request: RegisterUserRequest) {
  // 1. Cek apakah email sudah terdaftar
  const existingUsers = await db.select().from(users).where(eq(users.email, request.email)).limit(1);
  if (existingUsers.length > 0) {
    throw new Error('Email sudah terdaftar');
  }

  // 2. Hash password menggunakan utilitas bawaan Bun yang sangat cepat dan aman
  const hashedPassword = await Bun.password.hash(request.password, {
    algorithm: "bcrypt",
    cost: 10
  });

  // 3. Simpan data user baru ke database
  await db.insert(users).values({
    name: request.name,
    email: request.email,
    password: hashedPassword,
  });

  return { success: true };
}
