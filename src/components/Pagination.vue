<template>
    <div>
        <pre>{{ items }}</pre>
      <ul>
        <li v-for="item in currentItems" :key="item.id">
          <!-- Render the items here -->
        </li>
      </ul>
      <nav>
        <ul class="pagination">
          <li v-for="page in pageNumbers" :key="page" class="page-item">
            <button @click="setCurrentPage(page)" class="page-link">{{ page }}</button>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaginationComponent',
    props: {
      items: {
        type: Array,
        required: true
      },
      limit: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: this.limit
      }
    },
    computed: {
      currentItems() {
        const indexOfLastItem = this.currentPage * this.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.itemsPerPage;
        return this.items.slice(indexOfFirstItem, indexOfLastItem);
      },
      pageNumbers() {
        
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.items.length / this.itemsPerPage); i++) {
          pageNumbers.push(i);
        }
        return pageNumbers;
      }
    },
    methods: {
      setCurrentPage(pageNumber) {
        this.currentPage = pageNumber;
      }
    }
  }
  </script>
  