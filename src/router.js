import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard';
import BankCustomer from './views/BankCustomer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'dashboardPage',
      component: Dashboard
    },
    {
      path: '/bankcustomers',
      name: 'bankcustomersPage',
      component: BankCustomer
    }
  ]
});
