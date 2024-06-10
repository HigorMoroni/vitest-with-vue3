import {createRouter, createWebHashHistory} from 'vue-router';

import Dashboard from '../components/Dashboard/index.vue';
import Login from '../components/Login/index.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/dash',
      name: 'dash',
      component: Dashboard
    }
  ]
});

export default router;