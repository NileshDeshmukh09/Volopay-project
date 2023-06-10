import Router from 'vue-router';
import CardListing from '@/components/CardListing.vue';
import BlockedCard from '@/components/BlockedCard.vue';
import AllCards from '@/components/AllCards.vue';
import YourCard from '@/components/YourCard.vue';

const router = new Router({
    mode:'history',
    routes: [
      {
        name: 'CardList',
        path: '/',
        component: CardListing,
        children : [
          {
            name: 'BlockedCard',
            path: '/blocked-cards',
            component: BlockedCard,
          },  
          {
            name: 'AllCards',
            path: '/',
            component: AllCards,
          },  
          {
            name: 'YourCard',
            path: '/your-cards',
            component: YourCard,
          },  
        ]
      },   
      
    ],
  });
  
  export default router;