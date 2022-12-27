<template>
    <div class="cardDiv">

        <!-- <pre> {{  filteredItems }}</pre> -->

        <div class="all-cards" v-if="filteredItems.length > 0">

            <!-- Card Components - show all the list of the card  -->
            <div v-for="card in filteredItems" :key="card.name" class="card-list">
                <div class="name-and-icon">
                    <div class="name-and-para">
                        <h3>{{ card.name }}</h3>
                        <p>{{ card.name }} <i class="fa-solid fa-circle"></i> {{ card.budget_name }}</p>
                    </div>
                    <div class="icon" v-if="card.card_type == 'burner'">
                        <i class="fa-solid fa-fire-flame-curved fire-icon"></i>
                    </div>
                    <div class="icon" v-if="card.card_type == 'subscription'">
                        <i class="fa-solid fa-spinner spinner"></i>
                    </div>

                </div>

                <div class="cardType-expiry">
                    <h1 class="btn type-button"> {{ card.card_type }} </h1>
                    <p v-if="card.card_type == 'burner'"><span>Expires :</span> {{ card.expiry }}</p>
                    <p v-else><span>{{ new Date().toLocaleString('default', { month: 'long' }) }} Limit :</span> {{ card.limit }} SGD</p>
                </div>

                <!-- progress - bar  -->
                <!-- <div class="progress-bar">
                    <div class="progress">
                       
                        <div class="progress-bar" role="progressbar" style=" " aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100">100%</div>
                    </div>
                </div> -->

                <div class="progress-bar bg-success">
                    <div id="progress-bar" v-bind:style="width( card.spent.value , card.limit )"></div>
                </div>



                <div class="spent-and-available">
                    <div class="spent">
                        <div class="spent-color-and-name">
                            <div class="spent-color">
                            </div>
                            <p>Spent</p>
                        </div>
                        <p> {{ card.spent.value }} {{ card.spent.currency }}</p>
                    </div>
                    <div class="available">
                        <div class="available-color-and-name">
                            <div class="available-color bg-success">
                            </div>
                            <p>Available to spend</p>
                        </div>
                        <p class="font-weight-bold"> {{ card.available_to_spend.value }} {{ card.available_to_spend.currency }}</p>
                    </div>
                </div>

            </div>
        </div>


        <div class="emptyCard" v-if="filteredItems.length == 0">
            No Card Found !
        </div>
    </div>
</template>

<script>

export default {
    name: "CardComponent",
    components: {

    },
    props: ['cards', 'filteredItems', 'paginatedItems'],
    data: function () {
        return {
            spent: this.filteredItems
        }
    },
    methods: {
        width(val1 , val2) {
            let ans = ( val1/val2 )*100;
            return { width : ans  +'%' };
        } ,
    },




}
</script>

<style scoped>

.emptyCard {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    background-color: rgb(211, 77, 111);
}
.progress-bar {
    border-radius: 10px;
    color: rgb(55, 185, 135);
}

#progress-bar {
  
  height: 13px;
  background-color: rgb(211, 77, 111);
  border: 1px solid #000;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

#progress-bar.complete {
  background-color: #4CAF50;
}

.cardDiv {
    margin-top: 50px;
}

.card-list {
    padding: 30px;
    background-color: rgb(255, 255, 255);
    margin: 20px;
    border-radius: 8px;
    box-shadow: 2px 2px 15px 1px rgb(166, 164, 164);
   


}

.all-cards {
    display: grid;
    grid-template-columns: repeat(2 ,1fr);
}

.progress-bar {
    width: 100%;
}

.name-and-icon {
    display: flex;
    justify-content: space-between;
}

.icon {
    background: rgb(243, 195, 195);
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    padding: 10px;
}

.fire-icon,
.spinner {
    color: rgb(238, 87, 87);
    font-weight: 900;
}

.cardType-expiry {
    color: rgb(198, 183, 183);
    display: flex;
    justify-content: space-between;
}

.type-button {
    border: 2px solid rgb(142, 139, 139);
    height: 30px;
    padding: 2px 20px;
    color: rgb(168, 166, 166);
}

.name-and-para p {
    color: rgb(198, 179, 179);
}

.name-and-para p i {
    font-size: 4px;
    padding-bottom: 5px;
}

.spent-and-available {
    /* padding: 20px; */
    margin: 20px 0px;
}

.spent,
.available {
    display: flex;
    justify-content: space-between;
}

.spent-color-and-name,
.available-color-and-name {
    display: flex;
    justify-content: space-between;
}

.spent-color {
    background: rgb(252, 73, 97);
}

.spent-color,
.available-color {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 7px;
}


@media screen and (max-width: 768px) {
    .all-cards {
        display: grid;
        grid-template-columns:  1fr;
    }
}

</style>