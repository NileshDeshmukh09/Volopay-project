import Router from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import CardListing from '@/components/CardListing.vue';

const router = new Router({
    mode: 'history',
    routes: [
      {
        name: 'Home',
        path: '/home',
        component: HomePage,
      }, 
      {
        name: 'CardList',
        path: '/',
        component: CardListing,
      },   
    ],
  });
  
  export default router;