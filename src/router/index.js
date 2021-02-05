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
        children: [
          {
            path: ":id",
            component: () => import("/@views/detail.vue"),
            name: "Detail",
            hidden: true,
            meta: {
              title: "详情",
              icon: "el-icon-s-home",
              activeMenu: "/home",
            },
          },
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
