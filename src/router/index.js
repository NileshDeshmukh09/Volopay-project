import Router from 'vue-router';
import CardListing from '@/components/CardListing.vue';

const router = new Router({
    mode: 'history',
    routes: [
      {
        name: 'CardList',
        path: '/',
        component: CardListing,
      },   
    ],
  });
  
  export default router;