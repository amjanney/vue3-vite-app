import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/home', component: () => import('/@views/home.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
