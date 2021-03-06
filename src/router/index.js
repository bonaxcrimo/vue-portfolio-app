import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Work from '@/components/Work';
import WorkDetail from '@/components/WorkDetail';
import Contact from '@/components/Contact';
import NoMatch from '@/components/NoMatch';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      props: true
    },
    {
      path: '/work/:id',
      name: 'Work',
      component: Work,
      props: true
    },
    {
      path: '/work/:id/details',
      name: 'WorkDetails',
      component: WorkDetail,
      props: true
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      component: NoMatch
    }
  ]
});
