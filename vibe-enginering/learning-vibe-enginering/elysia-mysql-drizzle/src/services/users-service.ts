import { db } from '../db';
import { users, sessions } from '../db/schema';
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

export async function loginUser(email: string, passwordPlain: string) {
  // 1. Cari user berdasarkan email
  const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (user.length === 0) {
    throw new Error('Email atau password salah');
  }

  // 2. Verifikasi password
  const isValid = await Bun.password.verify(passwordPlain, user[0].password);
  if (!isValid) {
    throw new Error('Email atau password salah');
  }

  // 3. Generate token
  const token = crypto.randomUUID();

  // 4. Simpan sesi
  await db.insert(sessions).values({
    token,
    userId: user[0].id,
  });

  return token;
}
