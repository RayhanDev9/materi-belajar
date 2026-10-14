import { defineStore } from "pinia";
import type { User, UserRole, AuthState } from "@/types/Auth";

const STORAGE_KEY = "dapurrasa_auth_session";

// Data Akun Demo untuk Pengujian Cepat
export const DEMO_ACCOUNTS: Record<UserRole, User & { password: string }> = {
  admin: {
    id: "usr-admin-01",
    name: "Rayhan Admin",
    email: "admin@dapurrasa.com",
    role: "admin",
    password: "admin123",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  },
  customer: {
    id: "usr-cust-01",
    name: "Budi Santoso",
    email: "budi@gmail.com",
    role: "customer",
    password: "user123",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
  },
};

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error("Gagal membaca auth session:", err);
      }
    }

    // Default: Belum Login (Guest)
    return {
      user: null,
      token: null,
    };
  },

  getters: {
    isAuthenticated: (state): boolean => Boolean(state.user && state.token),
    isAdmin: (state): boolean => state.user?.role === "admin",
    isCustomer: (state): boolean => state.user?.role === "customer",
    currentUser: (state): User | null => state.user,
    userName: (state): string => state.user?.name || "Tamu",
  },

  actions: {
    persistSession() {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          user: this.user,
          token: this.token,
        })
      );
    },

    login(email: string, pass: string): boolean {
      const cleanEmail = email.trim().toLowerCase();

      // Cek apakah akun admin
      if (cleanEmail === DEMO_ACCOUNTS.admin.email && pass === DEMO_ACCOUNTS.admin.password) {
        this.user = {
          id: DEMO_ACCOUNTS.admin.id,
          name: DEMO_ACCOUNTS.admin.name,
          email: DEMO_ACCOUNTS.admin.email,
          role: "admin",
          avatar: DEMO_ACCOUNTS.admin.avatar,
        };
        this.token = `token-admin-${Date.now()}`;
        this.persistSession();
        return true;
      }

      // Cek apakah akun customer
      if (cleanEmail === DEMO_ACCOUNTS.customer.email && pass === DEMO_ACCOUNTS.customer.password) {
        this.user = {
          id: DEMO_ACCOUNTS.customer.id,
          name: DEMO_ACCOUNTS.customer.name,
          email: DEMO_ACCOUNTS.customer.email,
          role: "customer",
          avatar: DEMO_ACCOUNTS.customer.avatar,
        };
        this.token = `token-cust-${Date.now()}`;
        this.persistSession();
        return true;
      }

      // Fallback jika memasukkan format email lain yang mengandung 'admin'
      if (cleanEmail.includes("admin")) {
        this.user = {
          id: `usr-${Date.now()}`,
          name: email.split("@")[0] || "Admin",
          email: cleanEmail,
          role: "admin",
        };
        this.token = `token-${Date.now()}`;
        this.persistSession();
        return true;
      }

      // Fallback default akun customer baru
      this.user = {
        id: `usr-${Date.now()}`,
        name: email.split("@")[0] || "Customer",
        email: cleanEmail,
        role: "customer",
      };
      this.token = `token-${Date.now()}`;
      this.persistSession();
      return true;
    },

    loginAsDemo(role: UserRole) {
      const account = DEMO_ACCOUNTS[role];
      this.user = {
        id: account.id,
        name: account.name,
        email: account.email,
        role: account.role,
        avatar: account.avatar,
      };
      this.token = `demo-token-${role}-${Date.now()}`;
      this.persistSession();
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});
