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
   
  },
 
 
}
</script>

<style>
@import './assets/external/normalize.css/normalize.css';
@import './assets/external/fontawesome-free/css/all.min.css';
@import './assets/external/lightbox.css';
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap'); 

* {
  margin : 0px;
  padding : 0px;
  
  font-family: 'Nunito', sans-serif;
 
}

</style>
