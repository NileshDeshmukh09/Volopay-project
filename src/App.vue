<template>
  <div id="app">
    <!-- <HomePage /> -->
    <router-view ></router-view>
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
@import './assets/external/normalize.css/normalize.css';
@import './assets/external/fontawesome-free/css/all.min.css';

* {
  margin : 0px;
  padding : 0px;
  background: rgb(245, 222, 222);
  font-family: system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';
}

</style>
