<template>
    <div id="mainDiv">
        <div class="heading-and-addCard">
            <div class="video-and-heading">
                <h1>Virtual cards  </h1>
                <p  class="video-icon"> <i class="fa-solid fa-video"></i> learn more</p>
            </div>
            <button class="add-card-button"> <i class="fa-solid fa-plus"></i> <span> Virtual card </span></button>
        </div>

        <div class="cardType-and-Menu">
            <div class="card-types">
                <ul id="card-types">
                    <li><a href="" class="btn">Your</a></li>
                    <li><a href=""  class="btn">All</a></li>
                    <li><a href=""  class="btn">Blocked</a></li>
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
                <input type="text" placeholder="search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div class="filter"> 
                <button class="btn btn-sm"><span> filter</span></button>
               
            </div>

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

#mainDiv{
    margin : 30px ;
}

/* heading and add card div styles */
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
/* Card Types and Menu div styles */
.cardType-and-Menu {
    display: flex;
    justify-content: space-between;
}

#card-types {
    display: flex;
    justify-content: space-between;
}

#card-types li , #menu-icon li {
    margin: 45px 10px -20px 0px;
    list-style-type: none;
}
#card-types li a {
    text-decoration: none;
    color: rgb(164, 152, 155);
    font-weight: 600;
    border-radius : 0px;
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
    margin-right:10px ;
}

.filter ,.filter span {
    margin : 0px 10px;
    background: rgb(234, 175, 175);
    border-radius: 5px;
    color: rgb(46, 38, 38);
    
}

.filter {
    box-shadow: 0px 0px 5px ;
}
</style>