<template>
    <div>
        <div class="blocked-card">

            <div class="search-and-filter">
                <p> <i class="fa-solid fa-ban text-danger m-2"></i> Blocked Card</p>
                <div class="search-filter">


                    <div class="search-field">
                        <input v-model="searchText" type="text" placeholder="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <!--  Dialog Box -->
                    <div>
                        <b-dropdown id="dropdown-right" class="filterDropdown m-2" right text="Filter"
                            variant="secondary">
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

                                    <div class="select-dropdown">
                                        <p for="card-type" class="d-block text-secondary">Card Holder</p>
                                        <select v-model="selectedName" class="select-name">
                                            <option value="">Select cardholder</option>
                                            <option v-for="item in uniqueNames" :key="item" :value="item">
                                                {{ item }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-secondary" @click="onCancel()">Cancel</button>
                                </div>
                            </form>



                        </b-dropdown>
                    </div>
                </div>
            </div>

            <CardComponent :cards="card" :paginatedItems="paginatedItems" :filteredItems="filteredItems" />

            <!--  Pagination -->

            <div class="pagination">

                <button class="btn btn-danger" v-if="currentPage > 1" @click="prevPage">Prev</button>
                <ul class="page-number">
                    <li v-for="page in pages" :key="page" :class="{ active: page === currentPage }"
                        @click="goToPage(page)">
                        {{ page }}</li>
                </ul>
                <button v-if="currentPage < totalPages" class="btn btn-danger" @click="nextPage">Next</button>

            </div>

            <!--  Pagination -->

        </div>
    </div>
</template>

<script>
import userData from '../data/card.json';
import CardComponent from './CardComponent.vue'

export default {
    name: "BlockedCard",
    components: {
        CardComponent,

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
            items: userData.data,
            selectedName: '',

        }
    },

    computed: {


        uniqueNames() {
            return Array.from(new Set(this.items.map(item => item.owner_id)))
        },


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
                    .filter(item => item.status == 'blocked')
                    // .slice(this.startIndex, this.endIndex + 1)
                    .filter(item => item.name.includes(this.searchText));
            }

            if (this.selectedName != '') {
                return this.items
                    .filter(item => item.status == 'blocked')
                    .slice(this.startIndex, this.endIndex + 1)
                    .filter(item => item.owner_id === this.selectedName)
            }

            // Filter the objects array based on the selected object type 
            let filteredObjects = this.items
                .filter(item => item.status == 'blocked')
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
        },

        onCancel() {
            return this.selectCardType = [];
        }
    }
}
</script>

<style scoped>
.blocked-card {
    border-top: 1px solid rgb(193, 191, 191);
    width: 100vw;
    /* height: 100%; */
    margin: 85px -236px;
    padding: 10px 40px;
}



/* Search and Filter Div styles */
.search-and-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.search-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;

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

.select-dropdown {
    margin: 30px 0px;
}

.select-name {
    width: 100%;
    height: 30px;
    color: rgb(181, 184, 185);
    border: 1px solid rgb(147, 147, 147);

    border-radius: 3px;
}

.filter-dropdown {
    width: 350px;
    padding: 20px;
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
    margin: 20px;
}

@media screen and (max-width: 768px) {


    #card-types {
        padding-left: 0px;
    }

    .search-and-filter {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
}
</style>