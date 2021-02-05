import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from "/@layouts/index.vue";

export const routes = [
  {
    path: '/',
    redirect: "/home",
    component: Layout,
    meta: { title: "首页", icon: "el-icon-s-home" },
    children: [
      {
        path: '/home',
        component: () => import("/@views/home.vue"),
        name: "Home",
        meta: { title: "首页", icon: "el-icon-s-home" },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
