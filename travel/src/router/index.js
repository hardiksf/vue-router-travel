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
    component: () => import(/* webpackChunkName: "Brazil" */ '../views/Brazil'),
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: () => import(/* webpackChunkName: "Hawaii" */ '../views/Hawaii'),
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: () => import(/* webpackChunkName: "Jamaica" */ '../views/Jamaica'),
  },
  {
    path: '/panama',
    name: 'Panama',
    component: () => import(/* webpackChunkName: "Panama" */ '../views/Panama'),
  },
  {
    path: '/destinationDetail/:id',
    name: 'DestinationDetail',
    component: () => import(/* webpackChunkName: "DestinationDetail" */ '../views/DestinationDetail'),
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'vacation-active-class',
  routes,
});

export default router;
