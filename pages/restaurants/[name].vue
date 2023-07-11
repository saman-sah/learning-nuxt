<script setup>

import restaurants from "@/data/data.json";

const route= useRoute()
const { name }= route.params

const restaurant = restaurants.find((r)=> r.name=== name)


useSeoMeta({
    title: name ? name : "404 - Restaurant Not Found"
})

</script>

<template>
    <div class="restaurant-details">
        
        <NuxtLayout v-if="restaurant" name="res">            
            <div class="container" >
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
        </NuxtLayout>
        <div v-else class="restaurant-not-found">
            <h1>Restaurant not found</h1>
            <button
            class="btn btn primary btn-large"
            @click="$router.push('/restaurants/items')"
            >
                Go Back
            </button>        
        </div>        
    </div>
    
</template>



<style>

</style>