import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import router from './router'

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";


Vue.config.productionTip = false
Vue.use(Router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
