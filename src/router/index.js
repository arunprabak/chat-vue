import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/PageHome';
import ThreadShow from '@/pages/PageThreadShow';
import NotFound from '@/pages/PageNotFound';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

export default router;
