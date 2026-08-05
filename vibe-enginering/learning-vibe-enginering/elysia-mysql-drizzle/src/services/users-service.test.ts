import { expect, test, mock, describe } from 'bun:test';

// Variabel penampung mock data user
let mockUsers: any[] = [];

mock.module('../db', () => ({
  db: {
    select: () => ({
      from: () => ({
        where: () => ({
          limit: () => mockUsers
        })
      })
    }),
    insert: () => ({
      values: () => {
        return Promise.resolve();
      }
    })
  }
}));

import { registerUser } from './users-service';

describe('users-service registration', () => {
  test('should register a new user successfully', async () => {
    mockUsers = []; // Simulasikan email belum terdaftar
    const result = await registerUser({
      name: 'Eko',
      email: 'eko@localhost.com',
      password: 'password123'
    });
    expect(result).toEqual({ success: true });
  });

  test('should throw error if email already exists', async () => {
    mockUsers = [{ id: 1, name: 'Eko', email: 'eko@localhost.com' }]; // Simulasikan email sudah terdaftar
    expect(
      registerUser({
        name: 'Eko',
        email: 'eko@localhost.com',
        password: 'password123'
      })
    ).rejects.toThrow('Email sudah terdaftar');
  });
});
