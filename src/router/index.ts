import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'CovidMobileLogin',
    component: () =>
      import(
        /* webpackChunkName: "index" */ '../views/Index/index.jsx'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
