<template>
    <div class="cardDiv">



        <!-- <pre>{{  filteredItems.length }}</pre> -->
        <div class="all-cards" v-if="filteredItems.length > 0">
            <div v-for="card in filteredItems" :key="card.name" class="card-list">
                <div class="name-and-icon">
                    <div class="name-and-para">
                        <h3>{{ card.name }}</h3>
                        <p>{{ card.name }} <i class="fa-solid fa-circle"></i> {{ card.budget_name }}</p>
                    </div>
                    <div class="icon">
                        <i class="fa-solid fa-fire-flame-curved fire-icon"></i>
                    </div>

                </div>

                <div class="cardType-expiry">
                    <h1 class="btn type-button"> {{ card.card_type }} </h1>
                    <p><span>Expires :</span> {{ card.expiry }}</p>
                </div>

                <div class="progress-bar">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100">100%</div>
                    </div>
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
                        <p> {{ card.available_to_spend.value }} {{ card.available_to_spend.currency }}</p>
                    </div>
                </div>

            </div>
        </div>

        <!-- <div class="all-cards" v-else>
            <div v-for="card in filteredItems" :key="card.name" class="card-list">
                <div class="name-and-icon">
                    <div class="name-and-para">
                        <h3>{{ card.name }}</h3>
                        <p>{{ card.name }} <i class="fa-solid fa-circle"></i> {{ card.budget_name }}</p>
                    </div>
                    <div class="icon">
                        <i class="fa-solid fa-fire-flame-curved fire-icon"></i>
                    </div>

                </div>

                <div class="cardType-expiry">
                    <h1 class="btn type-button"> {{ card.card_type }} </h1>
                    <p><span>Expires :</span> {{ card.expiry }}</p>
                </div>

                <div class="progress-bar">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100">100%</div>
                    </div>
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
                        <p> {{ card.available_to_spend.value }} {{ card.available_to_spend.currency }}</p>
                    </div>
                </div>

            </div> 
        </div> -->

    </div>
</template>

<script>

export default {
    name: "CardComponent",
    components: {

    },
    props: ['cards', 'filteredItems'],


}
</script>

<style scoped>
.cardDiv {
    margin-top: 50px;
}

.card-list {
    padding: 30px;
    background-color: rgb(238, 87, 87);
    margin: 20px;
    border-radius: 8px ;
    box-shadow: 2px 2px 15px 1px rgb(75, 69, 69);
    /* width: 40%; */
    

}

.all-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    justify-content: space-evenly; 
    
    /* background: rgb(151, 126, 126); */
}

.progress-bar {
    width: 100%;
}

.name-and-icon {
    display: flex;
    justify-content: space-between;
}

.icon {
    background: rgb(207, 201, 201);
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    padding: 10px;
}

.fire-icon {
    color: rgb(167, 63, 126);
}

.cardType-expiry {
    color: rgb(198, 183, 183);
    display: flex;
    justify-content: space-between;
}

.type-button {
    border: 2px solid rgb(176, 165, 165);
    height: 30px;
    padding: 2px 20px;
    color: rgb(223, 206, 206);
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
    background: rgb(247, 57, 146);
}

.spent-color,
.available-color {
    width: 12px;
    height: 12px;
    /* background: #000; */
    border-radius: 50%;
    margin: 7px;
}
</style>