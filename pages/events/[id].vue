<template>
  <h1>Event Id: {{ $route.params.id }}</h1>
</template>

<script setup>
 const route= useRoute();
 const nuxt= useNuxtApp();
    console.log('route.params.id');
console.log(route.params.id);
console.log(nuxt);
</script>

<style>

</style>