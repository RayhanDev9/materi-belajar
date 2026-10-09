/**
 * =============================================================================
 * API CLIENT SERVICE (Pusat Konfigurasi HTTP)
 * =============================================================================
 * File ini bertugas sebagai jembatan utama untuk melakukan request HTTP (GET, POST, dll).
 * Menggunakan fetch API bawaan browser modern (tanpa wajib install axios dulu).
 */

// Base URL dummy API gratis untuk latihan (DummyJSON / FakeStoreAPI)
const BASE_URL = 'https://dummyjson.com';

export async function apiClient<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status} - ${response.statusText}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(`[API Error on ${endpoint}]:`, error);
    throw error;
  }
}
