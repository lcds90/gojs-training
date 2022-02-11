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
    name: 'Primeira lição',
    component: () => import(/* webpackChunkName: "about" */ '../views/FirstLesson.vue'),
  },
  {
    path: '/using-models',
    name: 'Usando Modelos',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsingModels.vue'),
  },

  {
    path: '/data-binding',
    name: 'Data Binding',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBind.vue'),
  },
  {
    path: '/text-blocks',
    name: 'Blocos de Texto',
    component: () => import(/* webpackChunkName: "about" */ '../views/TextBlocks.vue'),
  },
  {
    path: '/shapes',
    name: 'Formas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shapes.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
