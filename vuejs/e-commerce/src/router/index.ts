import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/useAuth";

import Menu from "@/views/menu/Menu.vue";
import Cart from "@/views/cart/Cart.vue";
import MenuDetail from "@/views/menu-detail/MenuDetail.vue";
import Checkout from "@/views/checkout/Checkout.vue";
import Admin from "@/views/admin/Admin.vue";
import Login from "@/views/auth/Login.vue";

const routes = [
  {
    path: "/",
    redirect: () => {
      const authStore = useAuthStore();
      return authStore.isAuthenticated ? "/menu" : "/login";
    },
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/menu/detail/:id",
    name: "menu-detail",
    component: MenuDetail,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation Guard untuk Autentikasi dan Proteksi Role Admin
router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();

  // 1. Jika belum login dan mencoba mengakses halaman selain login
  if (to.path !== "/login" && !authStore.isAuthenticated) {
    return next({
      path: "/login",
      query: to.fullPath && to.fullPath !== "/" ? { redirect: to.fullPath } : undefined,
    });
  }

  // 2. Jika sudah login dan mencoba mengakses halaman login kembali
  if (to.path === "/login" && authStore.isAuthenticated) {
    return next({ path: authStore.isAdmin ? "/admin" : "/menu" });
  }

  // 3. Jika halaman membutuhkan role admin tapi user bukan admin
  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    alert("Akses Ditolak: Halaman ini hanya dapat diakses oleh Admin.");
    return next({ path: "/menu" });
  }

  next();
});

export default router;
