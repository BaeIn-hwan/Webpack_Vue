import { createWebHistory, createRouter } from "vue-router";
import type { Router } from "vue-router";
import AppVue from "@/App.vue";
import TestVue from "@/pages/Test.vue";
import GoodsVue from "@/pages/Goods.vue";

const routes = [
  { path: "/test", component: TestVue },
  { path: "/goods", component: GoodsVue },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
