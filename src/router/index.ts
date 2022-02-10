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
    path: '/using-models',
    name: 'UsingModels',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsingModels.vue'),
  },

  {
    path: '/data-binding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBind.vue'),
  },
  {
    path: '/text-blocks',
    name: 'Text Blocks',
    component: () => import(/* webpackChunkName: "about" */ '../views/TextBlocks.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
