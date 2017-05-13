import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import YoDeck from '@/components/YoDeck';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/YoDeck',
      name: 'YoDeck',
      component: YoDeck,
    },
  ],
});
