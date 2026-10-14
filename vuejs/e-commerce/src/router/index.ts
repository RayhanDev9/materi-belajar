import { createRouter, createWebHistory } from "vue-router";

import Menu from "@/views/menu/Menu.vue";
import Cart from "@/views/cart/Cart.vue";
import MenuDetail from "@/views/menu-detail/MenuDetail.vue";

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
    component:Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
