import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/first-lesson',
    name: 'First',
    component: () => import(/* webpackChunkName: "about" */ '../views/FirstLesson.vue'),
  },
  {
    path: '/building-blocks',
    name: 'Building Blocks',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsingModels.vue'),
  },

  {
    path: '/data-binding',
    name: 'Data Binding',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBind.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
