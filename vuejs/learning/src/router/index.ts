import { createRouter, createWebHistory } from "vue-router";
import Materi1Katalog from "@/components/materi/Materi1Katalog.vue";
import Materi2TodoList from "@/components/materi/Materi2TodoList.vue";
import Materi3Lifecycle from "@/components/materi/Materi3Lifecycle.vue";
import Materi4GetData from "@/components/materi/Materi4GetData.vue";
import ProductDetail from "@/components/materi/ProductDetail.vue";
import ProductCreate from "@/components/materi/ProductCreate.vue";
import ProductEdit from "@/components/materi/ProductEdit.vue";

const routes = [
  {
    path: "/",
    redirect: "/katalog",
  },
  {
    path: "/katalog",
    name: "katalog",
    component: Materi1Katalog,
  },
  {
    path: "/todo-list",
    name: "todo-list",
    component: Materi2TodoList,
  },
  {
    path: "/lifecycle",
    name: "lifecycle",
    component: Materi3Lifecycle,
  },
  {
    path: "/product/create",
    name: "product-create",
    component: ProductCreate,
  },
  {
    path: "/product/edit/:id",
    name: "product-edit",
    component: ProductEdit,
  },
  {
    path: "/getdata",
    name: "getdata",
    component: Materi4GetData,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
