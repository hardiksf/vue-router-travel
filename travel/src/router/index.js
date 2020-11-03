import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: () => import('../views/Brazil'),
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: () => import('../views/Hawaii'),
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: () => import('../views/Jamaica'),
  },
  {
    path: '/panama',
    name: 'Panama',
    component: () => import('../views/Panama'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
