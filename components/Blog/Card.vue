<script setup lang="ts">
import useDarkMode from '../../composables/useDarkMode';

interface CardProps {
  card: {
    img: string;
    title: string;
    author: string;
  };
}
const { isDarkMode } = useDarkMode();
const props = defineProps<CardProps>();
</script>

<template>
  <div
    class="card"
    :style="isDarkMode ? { backgroundColor: 'black', color: 'white' } : ''"
  >
    <img :src="props.card.img" alt="" />
    <div class="content">
      <h3>{{ props.card.title }}</h3>
      <p>{{ props.card.author }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 1px 1px 5px black;
  background: white;
  width: 48%;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
}

img {
  width: 100%;
  height: 200px;
}

.content {
  padding: 10px;
}

p {
  margin-top: 10px;
}
</style>