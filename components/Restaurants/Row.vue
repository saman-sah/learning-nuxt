<script setup lang="ts">
interface RowProps {
  rank?: number,
  name?: string,
  index?: number,
  isHeader?: boolean
}

const props= defineProps<RowProps>()
</script>

<template>
  <div v-if="isHeader" class="row">
    <h4 class="header">Rank</h4>
    <h4 class="header">Chain</h4>
  </div>
  <div v-else 
  class="row" 
  :class="index && !(index % 2 === 0) ? 'bg-gray': null">
    <h4 class="header rank">{{ rank }}</h4>
    <nuxt-link :to="`/restaurants/${name}`" class="header link">{{ name }}</nuxt-link>
  </div>
</template>

<style scoped>
.row {
  border-top: 1px solid rgba(128, 128, 128, 0.336);
  display: flex;
  align-items: center;
}
.header {
  font-size: 1.25rem;
  color: rgb(10, 31, 148);
  margin: 0;  
  padding: 0.5rem;
  font-weight: 700;
  width: 3em;
}
.header.rank {
  margin-right: 1rem;
}
.rank {
  color: black;
}
.link {
  text-decoration: none;
  color: rgb(228, 157, 27);
  width: auto;
  font-weight: 500;
  font-size: 16px;
}
.bg-gray {
  background-color: #ececec;
}
</style>