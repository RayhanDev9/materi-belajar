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
    redirect: "/menu",
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
  {
    path: "/menu/detail/:id",
    name: "menu-detail",
    component: MenuDetail,
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard untuk Autentikasi dan Proteksi Role Admin
router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAdmin) {
    // 1. Jika belum login sama sekali
    if (!authStore.isAuthenticated) {
      return next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    }

    // 2. Jika sudah login tetapi role BUKAN admin
    if (!authStore.isAdmin) {
      alert("Akses Ditolak: Halaman ini hanya dapat diakses oleh Admin.");
      return next({ path: "/menu" });
    }
  }

  next();
});

export default router;
