<script setup>

import restaurants from "@/data/data.json";

const route= useRoute()

const { name }= route.params

const restaurant = restaurants.find((r)=> r.name=== name)
</script>

<template>
    <div class="container">
        <div class="row">
                <div class="col">
                    <img :src="restaurant.imageUrl" alt="" style="max-width: 100%;">
                </div>
                <div class="col">
                    <h1>{{  restaurant.name }}</h1>
                    <h4>Revenue(in Billions) {{ restaurant.revenue }}</h4>
                    <h4>Number of Stores {{ restaurant.numberOfStores }}</h4>
                    <p>{{ restaurant.content }}</p>
                </div>
        </div>
    </div>
</template>



<style>

</style>