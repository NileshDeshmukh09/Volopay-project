<template>
  <div>
     <h1> Hello,<span class="text-danger">{{  title  }}</span> !</h1>
      <!-- <ChildPage :changeTitle="updateTitle"  /> -->
    
     <ChildPage v-on:changeTitle="updateTitle"/>
     
  </div>
</template>

<script>
import ChildPage from "./Child.vue"
export default {
  name : "HomePage",
  components : {
    ChildPage,
  },
  data(){
    return {
      user :"Nilesh",
      title : "Nilesh is Happy "
    }
  },
  methods :{
    updateTitle( title ){
      console.log( "Clicked on Title !", title)
       this.title = title
    },

    
  }
}
</script>