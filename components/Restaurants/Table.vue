<script setup lang="ts">
import restaurants from "@/data/data.json";

const restaurantsOrganized = {
  first: [...restaurants].splice(0, 25),
  second: [...restaurants].splice(25, 25),
};
</script>

<template>
  <div class="table">
    <h1>TOP 50: THE RANKING</h1>
    <div class="table-container">
      <div class="table-col">
        <RestaurantsRow :isHeader="true" />
        <RestaurantsRow 
        v-for="(restaurant, index) in restaurantsOrganized.first"
        :key="restaurant.id + index"
        :name="restaurant.name"
        :rank="restaurant.rank"
        :index="index"
        />
      </div>
      <div class="table-col">
        <RestaurantsRow :isHeader="true" />
        <RestaurantsRow 
        v-for="(restaurant, index) in restaurantsOrganized.second"
        :key="restaurant.id + index"
        :name="restaurant.name"
        :rank="restaurant.rank"
        :index="index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  margin: 3rem 0;
}
.table h1 {
  margin-bottom: 2rem;
}
.table-container {
  display: flex;
  justify-content: space-between;
}
.table-col {
  width: 48%;
}
</style>