<template>
    <div>
        <h1 >CardListing</h1>
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