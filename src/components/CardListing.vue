<template>
    <div id="mainDiv">
        <div class="heading-and-addCard">
            <div class="video-and-heading">
                <h1>Virtual cards </h1>
                <p class="video-icon"> <i class="fa-solid fa-video iconVideo"></i> learn more</p>
            </div>
            <button class="add-card-button"> <i class="fa-solid fa-plus"></i> <span> Virtual card </span></button>
        </div>

        <div class="cardType-and-Menu">
            <div class="card-types">
                <ul id="card-types">
                    <li><router-link to="/your-cards" class="btn">Your</router-link></li>
                    <li><router-link to="/" class="btn">All</router-link></li>
                    <li><router-link to="/blocked-cards" class="btn">Blocked</router-link></li>

                    <router-view></router-view>
                </ul>
            </div>

            <div class="Menu-icon">
                <ul id="menu-icon">
                    <li> <i class="fa-brands btn fa-squarespace"></i> </li>
                    <li> <i class="fa-solid btn fa-bars"></i> </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "CardListing",
    components: {
    },
}
</script>

<style scoped>
#mainDiv {
    margin: 30px;
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
    background: rgb(239, 229, 229);
    border-radius: 5px;
    margin-left: 10px;
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
    margin: 45px 0px -20px 0px;
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

    border-radius: 5px;
}

.filter-dropdown {
    width: 350px;
    padding: 30px;
    box-shadow: 2px 2px 2px 2px black;
}


@media screen and (max-width: 768px) {
    .heading-and-addCard {
        margin: 10px;
    }

    #card-types {
        padding-left: 0px;
    }

    .video-and-heading {
        width: 160px;
        /* background: rgb(209, 76, 76); */
        display: flex;
        align-items: flex-end;
    }

    .video-icon {
        font-size: 10px;
    }

    .search-and-filter {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
}
</style>