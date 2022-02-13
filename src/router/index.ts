import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tutorial',
    name: 'GoJS Tutorial',
    component: () => import('../views/tutorial/_Index.vue'),
    children: [
      {
        name: 'tutorial/Primeira lição',
        path: '/first-lesson',
        component: () => import('../views/tutorial/FirstLesson.vue'),
      },
      {
        name: 'tutorial/Usando modelos',
        path: '/using-models',
        component: () => import('../views/tutorial/UsingModels.vue'),
      },

      {
        name: 'tutorial/Vinculação de dados',
        path: '/data-binding',
        component: () => import('../views/tutorial/DataBind.vue'),
      },
      {
        name: 'tutorial/Bloco de textos',
        path: '/text-blocks',
        component: () => import('../views/tutorial/TextBlocks.vue'),
      },
      {
        name: 'tutorial/Formas',
        path: '/shapes',
        component: () => import('../views/tutorial/Shapes.vue'),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
