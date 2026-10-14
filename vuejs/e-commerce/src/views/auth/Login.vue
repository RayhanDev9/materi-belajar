<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore, DEMO_ACCOUNTS } from "@/stores/useAuth";
import {
  Lock,
  Mail,
  ShieldCheck,
  UserCheck,
  LogIn,
  AlertCircle,
  UtensilsCrossed,
} from "lucide-vue-next";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

const form = reactive({
  email: "",
  password: "",
});

const errorMessage = ref("");
const isLoading = ref(false);

const handleRedirect = () => {
  const redirectTarget = (route.query.redirect as string) || (authStore.isAdmin ? "/admin" : "/menu");
  router.push(redirectTarget);
};

const handleLogin = () => {
  errorMessage.value = "";

  if (!form.email || !form.password) {
    errorMessage.value = "Silakan isi email dan password.";
    return;
  }

  isLoading.value = true;
  setTimeout(() => {
    const success = authStore.login(form.email, form.password);
    isLoading.value = false;

    if (success) {
      handleRedirect();
    } else {
      errorMessage.value = "Email atau kata sandi tidak valid.";
    }
  }, 400);
};

const handleQuickDemo = (role: "admin" | "customer") => {
  authStore.loginAsDemo(role);
  handleRedirect();
};
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <!-- Header -->
      <div class="login-header">
        <div class="brand-badge-box">
          <UtensilsCrossed :size="28" class="brand-icon" />
        </div>
        <h1 class="login-title">Masuk ke Akun</h1>
        <p class="login-desc">Pilih akun demo atau masukkan kredensial Anda</p>
      </div>

      <!-- Quick Demo Login Buttons (1-Klik untuk Kemudahan Tes) -->
      <div class="demo-box">
        <span class="demo-title">⚡ 1-Klik Quick Login Demo:</span>
        <div class="demo-actions">
          <button
            type="button"
            class="btn-demo admin"
            @click="handleQuickDemo('admin')"
          >
            <ShieldCheck :size="18" />
            <div class="demo-btn-text">
              <strong>Masuk sebagai Admin</strong>
              <small>{{ DEMO_ACCOUNTS.admin.email }}</small>
            </div>
          </button>

          <button
            type="button"
            class="btn-demo customer"
            @click="handleQuickDemo('customer')"
          >
            <UserCheck :size="18" />
            <div class="demo-btn-text">
              <strong>Masuk sebagai Pelanggan</strong>
              <small>{{ DEMO_ACCOUNTS.customer.email }}</small>
            </div>
          </button>
        </div>
      </div>

      <div class="divider">
        <span>atau masuk manual</span>
      </div>

      <!-- Error Alert -->
      <div v-if="errorMessage" class="error-alert">
        <AlertCircle :size="18" />
        <span>{{ errorMessage }}</span>
      </div>

      <!-- Form Manual -->
      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label class="form-label">Email</label>
          <div class="input-wrapper">
            <Mail :size="18" class="input-icon" />
            <input
              v-model="form.email"
              type="email"
              placeholder="admin@dapurrasa.com"
              class="form-input"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Kata Sandi</label>
          <div class="input-wrapper">
            <Lock :size="18" class="input-icon" />
            <input
              v-model="form.password"
              type="password"
              placeholder="••••••••"
              class="form-input"
              required
            />
          </div>
          <span class="hint-text">Password demo admin: <code>admin123</code></span>
        </div>

        <button type="submit" class="btn-submit" :disabled="isLoading">
          <LogIn :size="18" />
          <span>{{ isLoading ? 'Memproses...' : 'Masuk Sekarang' }}</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: calc(100vh - 72px);
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1.5rem;
  font-family: inherit;
}

.login-card {
  width: 100%;
  max-width: 460px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2.25rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.login-header {
  text-align: center;
  margin-bottom: 1.75rem;
}

.brand-badge-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, #ff5a1f 0%, #ff3d00 100%);
  color: #ffffff;
  box-shadow: 0 6px 16px rgba(255, 90, 31, 0.3);
  margin-bottom: 1rem;
}

.login-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.35rem 0;
  letter-spacing: -0.02em;
}

.login-desc {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
}

/* QUICK DEMO BOX */
.demo-box {
  background-color: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 14px;
  padding: 1rem;
  margin-bottom: 1.25rem;
}

.demo-title {
  display: block;
  font-size: 0.775rem;
  font-weight: 700;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.demo-actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.btn-demo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid transparent;
  text-align: left;
  transition: all 0.2s ease;
}

.demo-btn-text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.demo-btn-text strong {
  font-size: 0.875rem;
}

.demo-btn-text small {
  font-size: 0.75rem;
  opacity: 0.85;
}

.btn-demo.admin {
  background-color: #fff1eb;
  border-color: #ffd8cc;
  color: #c2410c;
}

.btn-demo.admin:hover {
  background-color: #ffe4db;
  transform: translateY(-1px);
}

.btn-demo.customer {
  background-color: #eff6ff;
  border-color: #bfdbfe;
  color: #1d4ed8;
}

.btn-demo.customer:hover {
  background-color: #dbeafe;
  transform: translateY(-1px);
}

/* DIVIDER */
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.25rem 0;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #e2e8f0;
}

.divider span {
  padding: 0 0.75rem;
  font-size: 0.775rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* FORM */
.error-alert {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #991b1b;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #334155;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 0.9rem;
  color: #94a3b8;
  pointer-events: none;
}

.form-input {
  width: 100%;
  padding: 0.7rem 0.9rem 0.7rem 2.6rem;
  font-size: 0.9rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background-color: #f8fafc;
  color: #1e293b;
  outline: none;
  font-family: inherit;
  transition: all 0.2s ease;
}

.form-input:focus {
  border-color: #ff5a1f;
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.12);
}

.hint-text {
  font-size: 0.75rem;
  color: #94a3b8;
}

.hint-text code {
  color: #ea580c;
  background-color: #fff1eb;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
}

.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ff5a1f 0%, #ff3d00 100%);
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 9999px; /* Pill */
  font-size: 0.925rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(255, 90, 31, 0.35);
  transition: all 0.2s ease;
  margin-top: 0.5rem;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(255, 90, 31, 0.45);
}

.btn-submit:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>
