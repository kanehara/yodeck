import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import YoDeck from '@/components/YoDeck';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/YoDeck',
      name: 'YoDeck',
      component: YoDeck,
    },
  ],
});
