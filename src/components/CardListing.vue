<template>
    <div id="mainDiv">
        <div class="heading-and-addCard">
            <div class="video-and-heading">
                <h1>Virtual cards </h1>
                <p class="video-icon"> <i class="fa-solid fa-video"></i> learn more</p>
            </div>
            <button class="add-card-button"> <i class="fa-solid fa-plus"></i> <span> Virtual card </span></button>
        </div>

        <div class="cardType-and-Menu">
            <div class="card-types">
                <ul id="card-types">
                    <li><a href="" class="btn">Your</a></li>
                    <li><a href="" class="btn">All</a></li>
                    <li><a href="" class="btn">Blocked</a></li>
                </ul>
            </div>

            <div class="Menu-icon">
                <ul id="menu-icon">
                    <li> <i class="fa-brands btn fa-squarespace"></i></li>
                    <li> <i class="fa-solid btn fa-bars"></i> </li>
                </ul>
            </div>
        </div>
        <hr>

        <div class="search-and-filter">
            <div class="search-field">
                <input v-model="searchText" type="text" placeholder="search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>


            <!--  Dialog Box -->
            <div>
                <b-dropdown id="dropdown-right" class="filterDropdown m-2" right text="Filter" variant="primary">
                    <p> Filters </p>
                    <hr>
                    <!-- <pre> {{ filteredItems }}</pre> -->

                    <form action="" @submit.prevent="filteredItems">
                        <div class="filter-dropdown">


                            <p for="card-type" class="d-block text-secondary">Type</p>
                            <div class="cardtype-checkbox">
                                <div class="subscription">
                                    <input type="checkbox" id="subscription" v-model="selectCardType"
                                        value="subscription">
                                    <label for="subscription">Subscription</label>
                                </div>
                                <div class="burner">
                                    <input type="checkbox" id="burner" v-model="selectCardType" value="burner">
                                    <label for="burner">Burner</label>
                                </div>

                            </div>
                        </div>
                        <!-- <button>Apply Filter</button> -->
                    </form>



                </b-dropdown>
            </div>
            <!--  Dialog Box -->


            <!-- <div class="filter">
                <button class="btn btn-sm"> <i class="fa-solid fa-filter"></i><span> filter</span></button>
            </div> -->

        </div>

        <!-- <pre>{{  paginatedItems }}</pre>  -->

        <CardComponent :cards="card" :paginatedItems="paginatedItems" :filteredItems="filteredItems"/>

        <!--  Pagination -->

        <div class="pagination">

            <button class="btn btn-danger" v-if="currentPage > 1" @click="prevPage">Prev</button>
            <ul class="page-number">
                <li v-for="page in pages" :key="page" :class="{ active: page === currentPage }" @click="goToPage(page)">
                    {{ page }}</li>
            </ul>
            <button v-if="currentPage < totalPages" class="btn btn-danger" @click="nextPage">Next</button>

        </div>

        <!--  Pagination -->

    </div>
</template>

<script>
import userData from '../data/card.json';
// import PaginationComponent from './Pagination.vue';
import CardComponent from './CardComponent.vue'
// import DialogBox from './DialogBox'

export default {
    name: "CardListing",
    components: {
        CardComponent,
        // FilterData,
        // DialogBox,
        // PaginationComponent, 
    },

    data() {
        return {
            card: userData,
            showDialog: false,
            searchObj: null,
            searchText: '',
            selectCardType: [],
            currentPage: userData.page,
            itemsPerPage: userData.per_page,
            total: userData.total,
            items: userData.data
        }
    },

    computed: {

       

        // pagination

        totalPages() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },

        pages() {
            const pages = [];
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
            return pages;
        },

        startIndex() {
            return (this.currentPage - 1) * this.itemsPerPage;
        },
        endIndex() {
            return Math.min(this.startIndex + this.itemsPerPage - 1, this.items.length - 1);
        },

        paginatedItems() {
            return this.items.slice(this.startIndex, this.endIndex + 1);
        },

        filteredItems() {
            if (this.searchText != '') {
                
                // return this.card.data.filter(item => item.name.includes(this.searchText));
                return this.items
                                .slice(this.startIndex, this.endIndex + 1)
                                .filter(item => item.name.includes(this.searchText));
            }

            // Filter the objects array based on the selected object type 
            let filteredObjects = this.items
                                        .slice(this.startIndex, this.endIndex + 1)
                                        .filter(card => {
                if (this.selectCardType.length > 0 && !this.selectCardType.includes(card.card_type)) {
                    return false;
                }

                return true;
            });
            return filteredObjects;
        },

    },

    methods: {
        goToPage(page) {
            this.currentPage = page;
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        }
    }
}
</script>

<style scoped>
#mainDiv {
    margin: 30px;
    background: rgb(245, 204, 204);
}

/* heading and add card div styles */
.heading-and-addCard {
    margin: 30px;
    display: flex;
    justify-content: space-between;
}

.add-card-button {
    height: 40px;
    width: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 1px 3px 1px rgb(219, 176, 176);
}

.video-and-heading {
    display: flex;
    align-items: flex-end;
}

.video-icon {
    padding: 0px 10px 0px 10px;
    color: rgb(20, 107, 237);
    background: rgb(255, 212, 212);
    border-radius: 5px;
}

/* Card Types and Menu div styles */
.cardType-and-Menu {
    display: flex;
    justify-content: space-between;
}

#card-types {
    display: flex;
    justify-content: space-between;
}

#card-types li,
#menu-icon li {
    margin: 45px 10px -20px 0px;
    list-style-type: none;
}

#card-types li a {
    text-decoration: none;
    color: rgb(72, 72, 72);
    font-weight: 600;
    border-radius: 0px;
}

#card-types li a:hover {
    border-bottom: 5px solid rgb(236, 133, 173);

}

#menu-icon {
    display: flex;
    justify-content: space-between;
}

/* Search and Filter Div styles */
.search-and-filter {
    display: flex;
    justify-content: flex-end;

}

.search-field input {
    border: none;
    border-bottom: 2px solid rgb(240, 195, 209);
    margin-right: 10px;
}

.filter,
.filter span {
    margin: 0px 10px;
    background: rgb(234, 175, 175);
    border-radius: 5px;
    color: rgb(46, 38, 38);

}

.filter {
    box-shadow: 0px 0px 5px;
}

/* Filter on Card-Type */
.cardtype-checkbox {
    display: flex;
    justify-content: space-between;
}

.filter-dropdown {
    width: 350px;
    padding: 30px;
}


/* Pagination */
.active {
  color: red;
  font-weight: bold;
}

.pagination {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 20px;
}

.page-number {
    display: flex;
    
}

.page-number li {
    margin : 20px;
}
</style>