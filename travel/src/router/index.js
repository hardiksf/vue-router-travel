import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Brazil from '../views/Brazil.vue';
import Hawaii from '../views/Hawaii.vue';
import Jamaica from '../views/Jamaica.vue';
import Panama from '../views/Panama.vue';

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
    component: Brazil,
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: Hawaii,
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: Jamaica,
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: Jamaica,
  },
  {
    path: '/panama',
    name: 'Panama',
    component: Panama,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
