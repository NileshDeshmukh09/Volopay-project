<template>
    <div>
        <div class="heading-and-addCard">
            <div class="video-and-heading">
                <h1>Virtual cards  </h1>
                <p  class="video-icon"> <i class="fa-solid fa-video"></i> learn more</p>
            </div>
            <button class="add-card-button"> <i class="fa-solid fa-plus"></i> <span> Virtual card </span></button>
        </div>
        
        <CardComponent/>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue'
export default {
    name : "CardListing",
    components : {
        CardComponent,
    }
}
</script>

<style scoped>

.heading-and-addCard {
    margin : 30px ;
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
    border : none; 
    box-shadow : 0px 1px 3px 1px rgb(219, 176, 176);  
}

.video-and-heading {
    display: flex;
    align-items: flex-end;
}

.video-icon {
    padding : 0px 10px 0px 10px;
    color: rgb(20, 107, 237);
    background: rgb(255, 212, 212);
    border-radius: 5px;
}

</style>