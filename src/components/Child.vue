<template>
    <div>
        <h2>{{ user }} joining FUll time with More than 10LPA Base.</h2>
        <button v-on:click="updateTitle" > ClickMe </button>

        <!-- <button v-on:click="updateTitle">Update Parent Title</button> -->
    </div>
</template>

<script>
export default {
    name : "ChildPage",
    props : ['user'],
    methods :{
        updateTitle(){
            this.$emit('changeTitle' , "Nilesh will Join Volopay");
        }
    }
}
</script>