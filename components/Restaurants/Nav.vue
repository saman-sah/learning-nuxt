<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid flex" style="justify-content: space-between;">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" style="justify-content: end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink class="nav-link active" aria-current="page" to="/restaurants">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/restaurants/items">Restaurants</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
</script>

<style>

</style>