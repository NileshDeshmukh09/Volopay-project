<!-- <template>

    <div>
        
        <input type="text" v-model="searchName" placeholder="Enter name to search" />
        <button @click='nameSearch'>Search</button>
        <p v-if="foundObject">{{ foundObject.name }} - {{ foundObject.email }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchName: '',
            foundObject: null
        }
    },
    props: ['cards'],
    methods: {
        nameSearch() {
            this.foundObject = this.cards.data.find(object => object.name === this.searchName);
            this.$emit('changeTitle' , this.foundObject );
        }
    }
}
</script> -->


<template>
    <div class="search-field">

        <pre></pre>
      <input type="text" placeholder="search" v-model="searchTerm" @input="onSearchTermChange" />
      <i class="fa-solid fa-magnifying-glass" @click="onSearchButtonClick"></i>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchComponent",
    props: {
      searchObj: Object,
      cards: Array,
    },
    data() {
      return {
        searchTerm: "",
      }
    },
    methods: {
      onSearchTermChange() {
        this.$emit("changeTitle", { searchTerm: this.searchTerm });
      },
      onSearchButtonClick() {
        this.$emit("changeTitle", { searchTerm: this.searchTerm });
      },
    },
  }
  </script>
  