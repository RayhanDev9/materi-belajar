<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useCartStore } from "@/stores/useCart";
import { useAuthStore } from "@/stores/useAuth";
import {
  UtensilsCrossed,
  Utensils,
  Settings,
  ShoppingCart,
  LogIn,
  LogOut,
  Shield,
  User as UserIcon,
} from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
  router.push("/login");
};
</script>

<template>
  <header class="app-navbar">
    <div class="navbar-container">
      <!-- 1. Brand Logo -->
      <RouterLink to="/menu" class="brand-link">
        <div class="brand-icon-box">
          <UtensilsCrossed :size="22" class="brand-icon" />
        </div>
        <div class="brand-text">
          <span class="brand-name">Dapur<span class="brand-highlight">Rasa</span></span>
          <span class="brand-badge">Food Store</span>
        </div>
      </RouterLink>

      <!-- 2. Nav Action Links -->
      <nav class="nav-menu">
        <!-- Link Menu -->
        <RouterLink
          to="/menu"
          class="nav-item"
          :class="{ active: route.path.startsWith('/menu') }"
        >
          <Utensils :size="18" class="nav-icon" />
          <span>Menu</span>
        </RouterLink>

        <!-- Tombol Admin (HANYA MUNCUL JIKA USER ADALAH ADMIN) -->
        <RouterLink
          v-if="authStore.isAdmin"
          to="/admin"
          class="nav-item nav-admin-btn"
          :class="{ active: route.path.startsWith('/admin') }"
          title="Manajemen Produk Makanan"
        >
          <Settings :size="18" class="nav-icon" />
          <span>Admin</span>
        </RouterLink>

        <!-- Icon Keranjang Belanja -->
        <RouterLink
          to="/cart"
          class="nav-item nav-cart-btn"
          :class="{ active: route.path === '/cart' }"
          title="Keranjang Belanja"
        >
          <!-- Floating Badge Counter -->
          <span v-if="cartStore.totalItems > 0" class="cart-counter-badge">
            {{ cartStore.totalItems > 99 ? '99+' : cartStore.totalItems }}
          </span>
          <div class="cart-icon-wrapper">
            <ShoppingCart :size="19" class="cart-svg-icon" />
          </div>
          <span class="cart-text">Keranjang</span>
        </RouterLink>

        <div class="nav-divider"></div>

        <!-- 3. User Authentication Controls -->
        <!-- Jika Belum Login -->
        <RouterLink
          v-if="!authStore.isAuthenticated"
          to="/login"
          class="nav-item nav-login-btn"
          title="Masuk ke Akun"
        >
          <LogIn :size="17" />
          <span>Masuk</span>
        </RouterLink>

        <!-- Jika Sudah Login -->
        <div v-else class="user-profile-badge">
          <div class="user-avatar-wrap">
            <img
              v-if="authStore.currentUser?.avatar"
              :src="authStore.currentUser.avatar"
              :alt="authStore.userName"
              class="user-avatar-img"
            />
            <UserIcon v-else :size="16" />
          </div>

          <div class="user-info-text">
            <span class="user-name">{{ authStore.userName }}</span>
            <span
              class="user-role-pill"
              :class="authStore.isAdmin ? 'role-admin' : 'role-customer'"
            >
              <Shield v-if="authStore.isAdmin" :size="11" />
              <span>{{ authStore.isAdmin ? 'Admin' : 'Pelanggan' }}</span>
            </span>
          </div>

          <!-- Tombol Logout -->
          <button
            type="button"
            class="btn-logout"
            title="Keluar dari Akun"
            @click="handleLogout"
          >
            <LogOut :size="16" />
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* ==========================================================================
   THEME KONSISTENSI THAM.TXT (NAVBAR)
   ========================================================================== */

.app-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
  font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* BRAND */
.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.brand-link:hover {
  transform: scale(1.02);
}

.brand-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff5a1f 0%, #ff3d00 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(255, 90, 31, 0.28);
}

.brand-icon {
  color: #ffffff;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.brand-highlight {
  color: #ff5a1f; /* Primary Brand */
}

.brand-badge {
  font-size: 0.65rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* NAV LINKS */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.nav-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
  padding: 0.55rem 0.95rem;
  border-radius: 9999px; /* Pill */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item:hover {
  background-color: #fff1eb;
  color: #ff5a1f;
}

.nav-item.active {
  background-color: #fff1eb;
  color: #ff5a1f;
  font-weight: 700;
}

/* TOMBOL ADMIN */
.nav-admin-btn {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #334155;
}

.nav-admin-btn:hover {
  background-color: #f1f5f9;
  color: #0f172a;
  border-color: #cbd5e1;
}

.nav-admin-btn.active {
  background-color: #1e293b;
  color: #ffffff;
  border-color: #1e293b;
}

.nav-admin-btn.active .nav-icon {
  color: #ffffff;
}

/* TOMBOL KERANJANG */
.nav-cart-btn {
  position: relative;
  background: linear-gradient(135deg, #ff6b35 0%, #ff3d00 100%);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(255, 90, 31, 0.25);
}

.nav-cart-btn:hover {
  background: #e04810;
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(255, 90, 31, 0.35);
}

.nav-cart-btn.active {
  background: #e04810;
  color: #ffffff;
}

.cart-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-svg-icon {
  stroke-width: 2.2;
}

.cart-counter-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #ffffff;
  color: #ff5a1f;
  font-size: 0.675rem;
  font-weight: 800;
  min-width: 18px;
  height: 18px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 2px solid #ff5a1f;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  animation: popIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 2;
}

@keyframes popIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.nav-divider {
  width: 1px;
  height: 24px;
  background-color: #e2e8f0;
  margin: 0 0.25rem;
}

/* TOMBOL MASUK */
.nav-login-btn {
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #334155;
  font-weight: 700;
}

.nav-login-btn:hover {
  background-color: #e2e8f0;
  color: #0f172a;
}

/* USER PROFILE BADGE */
.user-profile-badge {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.35rem 0.65rem 0.35rem 0.4rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
}

.user-avatar-wrap {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  flex-shrink: 0;
}

.user-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.user-name {
  font-size: 0.8rem;
  font-weight: 700;
  color: #1e293b;
  max-width: 95px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-role-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  width: fit-content;
}

.role-admin {
  background-color: #fff1eb;
  color: #c2410c;
}

.role-customer {
  background-color: #eff6ff;
  color: #1d4ed8;
}

.btn-logout {
  background: none;
  border: none;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-logout:hover {
  background-color: #fee2e2;
  color: #dc2626;
}

@media (max-width: 640px) {
  .brand-badge {
    display: none;
  }
  .cart-text {
    display: none;
  }
  .user-info-text {
    display: none;
  }
  .nav-item {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
}
</style>
