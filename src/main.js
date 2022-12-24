import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import router from './router'
import { BootstrapVueIcons , BootstrapVue } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import BootstrapVue from 'bootstrap-vue';


Vue.config.productionTip = false
Vue.use(Router);
Vue.use( BootstrapVue );
Vue.use( BootstrapVueIcons );

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
